import { SxProps } from "@mui/material";

export const navigationButtonStyles: SxProps = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  backgroundColor: "rgba(0,0,0,0.5)",
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

export const prevButtonStyles: SxProps = {
  left: 0,
};

export const nextButtonStyles: SxProps = {
  right: 0,
};
