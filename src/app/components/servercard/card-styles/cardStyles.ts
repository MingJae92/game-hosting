import { SxProps, Theme } from "@mui/material";

// Base container style with responsive padding
export const containerStyles: SxProps<Theme> = (theme) => ({
  py: 4, // Vertical padding for larger screens
  px: 2, // Horizontal padding for smaller screens
  [theme.breakpoints.up("sm")]: {
    px: 4, // Increase horizontal padding for medium screens and above
  },
  [theme.breakpoints.up("md")]: {
    px: 6, // Further increase for larger screens
  },
});

// Loading screen styles (already responsive due to flexbox)
export const loadingContainerStyles: SxProps<Theme> = {
  display: "flex", // Flexbox layout for centering the loader
  justifyContent: "center", // Horizontally center the loader
  alignItems: "center", // Vertically center the loader
  minHeight: "100vh", // Ensure the loader takes up the full viewport height
};

// Minecraft-themed card styles with lighter background
export const minecraftCardStyles: SxProps<Theme> = (theme) => ({
  height: "100%", // Ensures the card fills its container
  borderRadius: 4, // Rounded corners for a polished look
  backgroundColor: "#a67c52", // Lighter brown resembling wood or dirt
  border: "3px solid #8b5e3c", // Slightly darker border for texture
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  transition: "all 0.3s ease-in-out", // Smooth hover transitions
  "&:hover": {
    backgroundColor: "#8b5e3c", // Darker brown background on hover
    borderColor: "#6a4029", // Darker brown border on hover
  },
  [theme.breakpoints.up("sm")]: {
    padding: "16px", // Add padding for small and medium screens
  },
  [theme.breakpoints.up("md")]: {
    padding: "24px", // More padding for larger screens
  },
});

// Minecraft-themed card content styles
export const minecraftCardContentStyles: SxProps<Theme> = (theme) => ({
  display: "flex", // Flexbox layout for arranging content
  flexDirection: "column", // Stack content vertically
  gap: 1, // Adds spacing between elements
  padding: "16px", // Internal spacing for the card content
  backgroundColor: "#f4e1c1", // Light background for contrast
  borderRadius: 4, // Rounded corners to match the card
  textAlign: "center", // Center-align text content
  color: "#4e4e4e", // Darker font color for better readability
  fontFamily: "'Minecraftia', sans-serif", // Minecraft-inspired font for theming
  [theme.breakpoints.up("sm")]: {
    padding: "20px", // Slightly larger padding for small screens
  },
  [theme.breakpoints.up("md")]: {
    padding: "24px", // Further increase padding for larger screens
  },
});

// Swiper styles (optional)
export const swiperStyles: SxProps<Theme> = {
  "& .swiper-slide": {
    display: "flex", // Flexbox layout for centering slides
    justifyContent: "center", // Horizontally center the content in slides
  },
};
