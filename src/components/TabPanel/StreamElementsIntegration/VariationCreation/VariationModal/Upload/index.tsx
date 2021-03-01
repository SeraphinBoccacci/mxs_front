import { Button } from "@material-ui/core";
import React, { RefObject, useCallback, useState } from "react";

import config from "../../../../../../config/config";
import { uploadFile } from "../../../../../../services/streamElements";
import { VariationLenses } from "../../../interface";
import {
  Controllers,
  ImagePreview,
  ImagePreviewContainer,
  UploadContainer,
} from "./style";

interface UploadProps {
  inputName: VariationLenses;
  inputLabel: string;
  inputRef: RefObject<{ path: string }>;
  isAudio?: boolean;
}

const Upload = ({ inputName, inputLabel, inputRef, isAudio }: UploadProps) => {
  const getFileSrc = (filename: string) => {
    const media = isAudio ? "audios" : "images";

    const now = new Date().getTime();

    if (!filename) return "";

    return `${config.url}/${media}/${filename}?t=${now}`;
  };

  const [file, setFile] = useState<string>(
    inputRef?.current?.path ? getFileSrc(inputRef?.current?.path) : ""
  );

  const uploadMedia = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event?.target?.files?.[0];

      if (!file) return;

      const filePath = await uploadFile(isAudio ? "audios" : "images", file);

      setFile(getFileSrc(filePath));

      if (inputRef.current) inputRef.current.path = filePath;
    },
    []
  );

  const handleClear = () => {
    setFile("");

    if (inputRef.current) inputRef.current.path = "";
  };

  return (
    <UploadContainer key={`${inputName}_UploadContainer`}>
      {isAudio ? (
        <audio src={file} controls></audio>
      ) : (
        <ImagePreviewContainer>
          <ImagePreview src={file}></ImagePreview>
        </ImagePreviewContainer>
      )}
      <Controllers key={`${inputName}_Controllers`}>
        <input
          style={{ display: "none" }}
          accept={isAudio ? "audio/*" : "image/*"}
          id={`upload_input_${inputName}`}
          name="media"
          type="file"
          onChange={uploadMedia}
        />
        <label htmlFor={`upload_input_${inputName}`}>
          <Button variant="contained" color="primary" component="span">
            {inputLabel}
          </Button>
        </label>
        <Button onClick={handleClear}>Clear</Button>
      </Controllers>
    </UploadContainer>
  );
};

export default Upload;
