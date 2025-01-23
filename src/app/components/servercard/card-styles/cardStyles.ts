import { SxProps, Theme } from "@mui/material";

export const containerStyles: SxProps<Theme> = {
  py: 4,
  px: 2, // Added horizontal padding for better spacing
};

export const loadingContainerStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

export const cardStyles: SxProps<Theme> = {
  height: "100%",
  padding: 2, // Ensure consistent padding inside each card
  borderRadius: "8px", // Added rounded corners for better visuals
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for emphasis
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Center content vertically
  alignItems: "center", // Center content horizontally
};

export const cardContentStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1.5, // Slightly larger gap for better readability
  justifyContent: "center", // Align items in the center vertically
  alignItems: "center", // Align items in the center horizontally
  textAlign: "center", // Center-align text for uniformity
};

export const swiperStyles: SxProps<Theme> = {
  "& .swiper-slide": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center align items vertically
    padding: "16px", // Add padding to swiper slides
  },
};
