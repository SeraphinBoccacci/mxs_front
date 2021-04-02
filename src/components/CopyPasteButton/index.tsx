import { Button } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import React, { useCallback, useState } from "react";

interface CopyPasteButtonProps {
  dataToCopy: string;
}

const CopyPasteButton = ({ dataToCopy }: CopyPasteButtonProps) => {
  const [hasJustCopied, setHasJustCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(dataToCopy);
    setHasJustCopied(true);
    setTimeout(() => {
      setHasJustCopied(false);
    }, 1300);
  }, [setHasJustCopied, dataToCopy]);

  return (
    <Button size="small" onClick={handleCopy}>
      {hasJustCopied ? (
        "Copied"
      ) : (
        <FileCopyIcon fontSize="small"></FileCopyIcon>
      )}
    </Button>
  );
};

export default CopyPasteButton;
