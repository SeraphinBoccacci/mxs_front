import MuiSnackbar from "@material-ui/core/Snackbar";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export const Snackbar = ({
  snackbarData,
  setSnackBarData,
}: {
  snackbarData: {} | null;
  setSnackBarData: (data: {} | null) => void;
}) => {
  //   const handleClick = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = (event, reason) => {
  //     if (reason === "clickaway") {
  //       return;
  //     }

  //     setOpen(false);
  //   };

  const handleClose = () => {
    setSnackBarData(null);
  };

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={!!snackbarData}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note archived"
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};
