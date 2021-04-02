import React, { useCallback, useEffect } from "react";

import { useForm } from "../../../../hooks/useForm";
import { ContentContainer, FlexColumn } from "../../../../styles/global";
import CopyPasteButton from "../../../CopyPasteButton";
import Input from "../../../Input";
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

const commandContents = [
  "You can easily tip with with crypto using eGOLD. Download the free Maiar App <insérer automatiquement onboard link du streamer>, claim your Herotag (username), buy eGOLD and send tips me directly to my Herotag: <insérer le @ du streamer>",
  "You can tip with crypto by sending eGOLD to <insérer le @ du streamer> using the free Maiar App: <insérer automatiquement onboard link du streamer>",
  "Feel free to donate eGLD using Maiar (<insérer automatiquement onboard link du streamer>), it’s easy, fast, cheap! My Herotag is <insérer le @ du streamer>",
  "My Maiar Herotag is <insérer le @ du streamer>. You can send me eGLD via the Maiar app: <insérer automatiquement onboard link du streamer>",
  "It was inevitable. I’m on Maiar and thanks to my Herotag @<insérer le @ du streamer> you can tip me using crypto eGOLD. To know more about it, click this link: <insérer automatiquement onboard link du streamer>",
  "Download Maiar, it’s free and allows you to get eGOLD <insérer automatiquement onboard link du streamer>. As you may know, I do accept eGOLD tips because it’s easy and fast. My Herotag is <insérer le @ du streamer>.",
  "eGOLD tips are highly appreciated. You can easily tip me using Maiar <insérer automatiquement onboard link du streamer>. My Herotag is <insérer le @ du streamer>.",
];

const ChatBotGenerator = () => {
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
  }, [setFormData]);

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
