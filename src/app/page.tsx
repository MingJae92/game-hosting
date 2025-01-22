"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, CircularProgress, Container, Box, IconButton } from "@mui/material";
import { dataSet } from "./components/types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  containerStyles,
  loadingContainerStyles,
  cardStyles,
  cardContentStyles,
} from "./components/servercard/card-styles/cardStyles";
import {
  navigationButtonStyles,
  prevButtonStyles,
  nextButtonStyles,
} from "./components/card-button-styles/cardButtonStyles";

export default function Home() {
  const [serverData, setServerData] = useState<dataSet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/mock");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Failed to fetch server data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServerData();
  }, []);

  if (loading) {
    return (
      <Container sx={loadingContainerStyles}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={containerStyles}>
      <Box sx={{ position: "relative" }}>
        {/* Custom Arrow Buttons */}
        <IconButton
          className="swiper-button-prev"
          sx={{ ...navigationButtonStyles, ...prevButtonStyles }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          className="swiper-button-next"
          sx={{ ...navigationButtonStyles, ...nextButtonStyles }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          style={{ paddingBottom: "20px" }}
        >
          {serverData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card variant="outlined" sx={cardStyles}>
                <CardContent sx={cardContentStyles}>
                  <Typography variant="h6" gutterBottom>
                    {item.name || "Unknown Server"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Game:</strong> {item.game || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Status:</strong> {item.status || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Version:</strong> {item.version || "N/A"}
                  </Typography>
                  {item.mods?.length > 0 && (
                    <Typography variant="body2" color="textSecondary">
                      <strong>Mods:</strong> {item.mods.join(", ")}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}
