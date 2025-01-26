import { SxProps, Theme } from "@mui/material";

// Base container style
export const containerStyles: SxProps<Theme> = {
  py: 4,
};

// Loading screen styles
export const loadingContainerStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

// Minecraft-themed card styles with lighter background
export const minecraftCardStyles: SxProps<Theme> = {
  height: "100%",
  borderRadius: 4,
  backgroundColor: "#a67c52", // Lighter brown color resembling wood or dirt
  border: "3px solid #8b5e3c", // Slightly darker border resembling wood texture
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "#8b5e3c", // Darken the background on hover
    borderColor: "#6a4029", // Darker brown border on hover for effect
  },
};

// Minecraft-themed card content styles
export const minecraftCardContentStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  padding: "16px", // Padding for card content
  backgroundColor: "#f4e1c1", // Lighter background for content
  borderRadius: 4,
  textAlign: "center", // Center the text for better alignment
  color: "#4e4e4e", // Darker font color for better contrast on light background
  fontFamily: "'Minecraftia', sans-serif", // Minecraft-inspired font
};

// Swiper styles (optional)
export const swiperStyles: SxProps<Theme> = {
  "& .swiper-slide": {
    display: "flex",
    justifyContent: "center",
  },
};