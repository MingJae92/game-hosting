import { SxProps } from "@mui/material"; // Importing the SxProps type for defining Material-UI (MUI) styling.

export const navigationButtonStyles: SxProps = {
  // Base styles for navigation buttons (e.g., previous and next buttons in a carousel).
  position: "absolute", // Positions the button relative to its closest positioned ancestor.
  top: "50%", // Vertically centers the button in its container.
  transform: "translateY(-50%)", // Adjusts positioning to perfectly center the button vertically.
  zIndex: 10, // Ensures the button appears above other elements.
  backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent black background for better visibility.
  color: "#fff", // White text/icon color for contrast against the background.
  "&:hover": {
    // Styles applied when the user hovers over the button.
    backgroundColor: "rgba(0,0,0,0.8)", // Darkens the background for a hover effect.
  },
};

export const prevButtonStyles: SxProps = {
  // Additional styles for the "previous" navigation button.
  left: 0, // Positions the button on the left side of the container.
};

export const nextButtonStyles: SxProps = {
  // Additional styles for the "next" navigation button.
  right: 0, // Positions the button on the right side of the container.
};
