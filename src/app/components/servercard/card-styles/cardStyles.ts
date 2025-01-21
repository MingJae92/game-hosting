import { SxProps, Theme } from "@mui/material";

export const containerStyles: SxProps<Theme> = {
  py: 4,
};

export const loadingContainerStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

export const cardStyles: SxProps<Theme> = {
  height: "100%",
};

export const cardContentStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
};
