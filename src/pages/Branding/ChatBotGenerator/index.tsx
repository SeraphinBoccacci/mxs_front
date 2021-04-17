import React, { useCallback, useEffect, useMemo } from "react";

import CopyPasteButton from "../../../components/CopyPasteButton";
import Input from "../../../components/Input";
import config from "../../../config/config";
import { useForm } from "../../../hooks/useForm";
import { useQueryString } from "../../../hooks/useQueryString";
import { ContentContainer, FlexColumn } from "../../../styles/global";
import { OnboardingTitle } from "../style";
import { Button, ChatBotGeneratorForm } from "./style";

const commandNames = [
  "!maiar",
  "!crypto",
  "!cryptotip",
  "!egld",
  "!egold ",
  "!elrond",
  "!donatecrypto",
  "!herotag",
];

const ChatBotGenerator = () => {
  const [herotag = ""] = useQueryString("herotag");
  const [formData, setFormData] = useForm<{
    commandName?: string;
    commandContent?: string;
  }>({});

  const handleOnChange = useCallback(
    (data) => {
      setFormData(data);
    },
    [setFormData]
  );

  const onBoardingPageLink = `${config.url}/creator/${herotag}`;

  const commandContents = useMemo(
    () => [
      `You can easily tip with with crypto using eGOLD. Download the free Maiar App ${onBoardingPageLink}, claim your Herotag (username), buy eGOLD and send tips me directly to my Herotag: ${herotag}`,
      `You can tip with crypto by sending eGOLD to ${herotag} using the free Maiar App: ${onBoardingPageLink}`,
      `Feel free to donate eGLD using Maiar (${onBoardingPageLink}), it’s easy, fast, cheap! My Herotag is ${herotag}`,
      `My Maiar Herotag is ${herotag}. You can send me eGLD via the Maiar app: ${onBoardingPageLink}`,
      `It was inevitable. I’m on Maiar and thanks to my Herotag @${herotag} you can tip me using crypto eGOLD. To know more about it, click this link: ${onBoardingPageLink}`,
      `Download Maiar, it’s free and allows you to get eGOLD ${onBoardingPageLink}. As you may know, I do accept eGOLD tips because it’s easy and fast. My Herotag is ${herotag}.`,
      `eGOLD tips are highly appreciated. You can easily tip me using Maiar ${onBoardingPageLink}. My Herotag is ${herotag}.`,
    ],
    [onBoardingPageLink, herotag]
  );

  const generateRandomCommand = useCallback(() => {
    const randomCommandNameIndex = Math.floor(
      Math.random() * commandNames.length
    );

    const randomCommandContentIndex = Math.floor(
      Math.random() * commandContents.length
    );

    setFormData({
      value: {
        commandName: commandNames[randomCommandNameIndex],
        commandContent: commandContents[randomCommandContentIndex],
      },
    });
  }, [setFormData, commandContents]);

  useEffect(() => {
    generateRandomCommand();
  }, [generateRandomCommand]);

  return (
    <ContentContainer>
      <OnboardingTitle>Custom chatbot command ideas</OnboardingTitle>
      <ChatBotGeneratorForm>
        <FlexColumn>
          <Input
            inputName="commandName"
            inputLabel="Command Name"
            value={formData.commandName}
            onChange={handleOnChange}
            endAdornment={
              <CopyPasteButton
                dataToCopy={formData.commandName || ""}
              ></CopyPasteButton>
            }
          ></Input>
          <Input
            inputName="commandContent"
            inputLabel="Command Content"
            value={formData.commandContent}
            onChange={handleOnChange}
            isTextContent
            endAdornment={
              <CopyPasteButton
                dataToCopy={formData.commandContent || ""}
              ></CopyPasteButton>
            }
          ></Input>
        </FlexColumn>
      </ChatBotGeneratorForm>
      <Button
        onClick={generateRandomCommand}
        variant="contained"
        color="secondary"
      >
        Generate
      </Button>
    </ContentContainer>
  );
};

export default ChatBotGenerator;
