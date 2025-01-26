"use client"; // This directive ensures the component is rendered on the client side.

import { useEffect, useState } from "react"; // React hooks for managing state and side effects.
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Container,
  Box,
} from "@mui/material"; // Material-UI components for styling and layout.
import { dataSet } from "./components/types/types"; // Importing the TypeScript type definition for data.
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components for creating a carousel/slider.
import { Pagination } from "swiper/modules"; // Swiper module for pagination.
import "swiper/css"; // Swiper's base CSS.
import "swiper/css/pagination"; // Swiper pagination styles.
import {
  containerStyles,
  loadingContainerStyles,
  minecraftCardStyles,
  minecraftCardContentStyles,
  swiperStyles,
} from "./components/servercard/card-styles/cardStyles"; // Custom styles for the component.

export default function Home() {
  const [serverData, setServerData] = useState<dataSet[]>([]); // State to store server data fetched from the API.
  const [loading, setLoading] = useState(true); // State to track loading status.

  useEffect(() => {
    // Fetch server data from the API on component mount.
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/mock"); // API call to fetch data.
        const data = await response.json(); // Parse the JSON response.
        setServerData(data); // Update the state with the fetched data.
      } catch (error) {
        // Log any errors that occur during the fetch.
        console.error("Failed to fetch server data:", error);
      } finally {
        // Set loading to false once the data fetching is complete.
        setLoading(false);
      }
    };

    fetchServerData(); // Call the function to fetch data.
  }, []); // Empty dependency array ensures this runs only once on component mount.

  if (loading) {
    // Show a loading spinner while data is being fetched.
    return (
      <Container sx={loadingContainerStyles}>
        <CircularProgress /> {/* Loading spinner */}
      </Container>
    );
  }

  return (
    <Container sx={containerStyles}>
      {/* Page header */}
      <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>
        Minecraft Server List
      </Typography>

      {/* Swiper container for displaying server cards */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Swiper
          modules={[Pagination]} // Enable pagination for the Swiper.
          spaceBetween={20} // Space between slides.
          slidesPerView={1} // Show one slide per view.
          pagination={{ clickable: true }} // Enable clickable pagination dots.
          style={{
            width: "100%",
            paddingBottom: "0.1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Render a SwiperSlide for each server in the serverData array */}
          {serverData.map((item, index) => (
            <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
              {/* Card displaying server information */}
              <Card variant="outlined" sx={minecraftCardStyles}>
                <CardContent sx={minecraftCardContentStyles}>
                  {/* Server name */}
                  <Typography variant="h6" gutterBottom>
                    {item.name || "Unknown Server"}
                  </Typography>
                  {/* Game name */}
                  <Typography variant="body2" color="textSecondary">
                    <strong>Game:</strong> {item.game || "N/A"}
                  </Typography>
                  {/* Server status */}
                  <Typography variant="body2" color="textSecondary">
                    <strong>Status:</strong> {item.status || "N/A"}
                  </Typography>
                  {/* Game version */}
                  <Typography variant="body2" color="textSecondary">
                    <strong>Version:</strong> {item.version || "N/A"}
                  </Typography>
                  {/* Mods installed on the server */}
                  <Typography variant="body2" color="textSecondary">
                    <strong>Mods:</strong> {item.mods.join(", ")}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}
