import { Button } from "@material-ui/core";
import React, {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import config from "../../config/config";
import { uploadFile } from "../../services/user";
import {
  Controllers,
  ImagePreview,
  ImagePreviewContainer,
  UploadContainer,
} from "./style";

interface UploadProps {
  inputName: string;
  inputLabel: string;
  isAudio?: boolean;
  value?: string;
  onChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

const Upload = ({
  inputName,
  inputLabel,
  isAudio,
  onChange,
  value = "",
}: UploadProps) => {
  const getFileSrc = useCallback(
    (filename: string) => {
      const media = isAudio ? "audios" : "images";

      const now = new Date().getTime();

      if (!filename) return "";

      return `${config.url}/${media}/${filename}?t=${now}`;
    },
    [isAudio]
  );

  const [file, setFile] = useState<string>(getFileSrc(value));

  useEffect(() => {
    setFile(getFileSrc(value));
  }, [setFile, getFileSrc, value]);

  const uploadMedia = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event?.target?.files?.[0];

      if (!file) return;

      const filePath = await uploadFile(isAudio ? "audios" : "images", file);

      setFile(getFileSrc(filePath));

      onChange({
        target: {
          name: inputName,
          value: filePath,
        },
      } as ChangeEvent<HTMLInputElement>);
    },
    [isAudio, inputName, onChange, setFile, getFileSrc]
  );

  const handleClear = useCallback(() => {
    setFile("");
    onChange({
      target: {
        name: inputName,
        value: "",
      },
    } as ChangeEvent<HTMLInputElement>);
  }, [setFile, onChange, inputName]);

  const preview = useMemo(() => {
    if (isAudio) return !!file ? <audio src={file} controls></audio> : null;

    return (
      <ImagePreviewContainer>
        <ImagePreview src={file}></ImagePreview>
      </ImagePreviewContainer>
    );
  }, [file, isAudio]);

  return (
    <UploadContainer key={`${inputName}_UploadContainer`}>
      {preview}
      <Controllers key={`${inputName}_Controllers`}>
        <input
          style={{ display: "none" }}
          accept={isAudio ? "audio/*" : "image/*"}
          name="media"
          type="file"
          onChange={uploadMedia}
          id={`upload_input_${inputName}`}
        />
        <label htmlFor={`upload_input_${inputName}`}>
          <Button variant="contained" color="primary" component="span">
            {inputLabel}
          </Button>
        </label>
        {!!file && <Button onClick={handleClear}>Clear</Button>}
      </Controllers>
    </UploadContainer>
  );
};

export default memo(Upload);
