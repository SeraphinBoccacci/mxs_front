import { omit } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import io from "socket.io-client";

import config from "../../../config/config";
import { getUserOverlay } from "../../../services/overlays";
import { AlertVariation } from "../../../types/alerts";
import { OverlayData } from "../../../types/overlays";
import Alert from "../widgets/alerts/Alert";
import DonationBar from "../widgets/donationBars/DonationBar";

export interface TransactionData {
  amount: number;
  herotag: string;
  message: string;
}

const findVariation = (amount: number, variations: AlertVariation[] = []) => {
  const matchingVariations = variations
    // We keep only variations that match requiredAmount
    .filter((variation) => {
      return (
        !variation.requiredAmount ||
        (Number(amount) >= Number(variation.requiredAmount) &&
          !!variation.chances)
      );
    })
    // We sort by descending requiredAmount
    .sort((a, b) => (b?.requiredAmount || 0) - (a?.requiredAmount || 0))
    // We keep variations that have the greatest matching requiredAmount
    .filter(
      ({ requiredAmount }, _, matchingVariations) =>
        requiredAmount === matchingVariations[0].requiredAmount
    );

  const totalChances = matchingVariations.reduce(
    (acc, variation) => acc + (variation?.chances || 0),
    0
  );

  const randomNumber = Math.random() * totalChances;

  const variationFounder = (
    leftVariations: AlertVariation[],
    totalSpentChances: number
  ): AlertVariation => {
    const [variation, ...newLeftVariations] = leftVariations;

    if (!newLeftVariations.length) return variation;

    const newTotalSpentChances = (variation.chances || 0) + totalSpentChances;

    if (randomNumber <= newTotalSpentChances) return variation;

    return variationFounder(newLeftVariations, newTotalSpentChances);
  };

  return variationFounder(matchingVariations, 0);
};

const Overlay = () => {
  const { overlayId, herotag } =
    useParams<{
      overlayId: string;
      herotag: string;
    }>();
  const [overlay, setOverlay] = useState<OverlayData>();
  const [transactionData, setTransactionData] = useState<TransactionData>();
  const [donationBarProgression, setDonationBarProgression] = useState(0);
  const [alertVariations, setAlertVariations] = useState<
    (AlertVariation & { timestamp: number })[]
  >([]);

  const getOverlay = useCallback(async () => {
    const overlay = await getUserOverlay(herotag, overlayId);

    if (overlay) setOverlay(overlay);
  }, [overlayId, herotag]);

  useEffect(() => {
    getOverlay();
  }, [overlayId, herotag, getOverlay]);

  const updateDonationBarSentAmount = useCallback(
    (amount: number) => {
      const amountToSend = overlay?.donationBar?.donationGoalAmount.value || 1;

      setDonationBarProgression((prevProgression) => {
        const newProgression =
          prevProgression + Math.round((amount / amountToSend) * 10000) / 100;

        return newProgression > 100 ? 100 : newProgression;
      });
    },
    [setDonationBarProgression, overlay]
  );

  const displayVariation = useCallback(
    (data: TransactionData, variations: AlertVariation[]) => {
      const variation = findVariation(data.amount, variations);

      if (!variation) return;

      const alertDuration = 2500 + (variation.duration || 1) * 1000;

      const variationTimestamp = Date.now();

      setAlertVariations((prev) => [
        ...prev,
        { ...variation, timestamp: variationTimestamp },
      ]);

      setTimeout(() => {
        setAlertVariations((prev) =>
          prev.filter(({ timestamp }) => timestamp !== variationTimestamp)
        );
      }, alertDuration);
    },
    [setAlertVariations]
  );

  useEffect(() => {
    const socket = io(config.url, {
      query: {
        streamerHerotag: herotag,
      },
    });

    // Donation progression will be dynamically updated through socket
    // but in case of a refresh, it can be refetch because it is saved in database
    socket.on("newDonation", (data: TransactionData) => {
      if (!overlay) return;

      setTransactionData(data);

      displayVariation(data, overlay?.alerts?.variations);

      updateDonationBarSentAmount(data.amount);
    });

    return () => {
      socket.disconnect();
    };
  }, [overlay, updateDonationBarSentAmount, displayVariation, herotag]);

  return (
    <div
      style={{
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background:
          "url('https://s1.qwant.com/thumbr/0x380/8/8/2399b4dc87b152097a8f1e0fe383776b3ec3178cdcc41622924b5f4f334270/20180411155344-a165c6fb.jpg?u=https%3A%2F%2Fdiapogram.com%2Fupload%2F2018%2F04%2F11%2F20180411155344-a165c6fb.jpg&q=0&b=1&p=0&a=0')",
        backgroundSize: "cover",
      }}
    >
      {transactionData && (
        <div>
          {alertVariations.map((alertVariation) => (
            <Alert
              key={alertVariation.timestamp}
              alert={omit(alertVariation, "timestamp")}
              data={transactionData}
            ></Alert>
          ))}
        </div>
      )}
      {overlay?.donationBar && (
        <DonationBar
          donationBar={overlay.donationBar}
          progression={donationBarProgression}
        ></DonationBar>
      )}
    </div>
  );
};

export default Overlay;
