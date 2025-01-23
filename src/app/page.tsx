"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Container,
  Box,
} from "@mui/material";
import { dataSet } from "./components/types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  containerStyles,
  loadingContainerStyles,
  minecraftCardStyles,
  minecraftCardContentStyles,
  swiperStyles,
} from "./components/servercard/card-styles/cardStyles";

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
      {/* Minecraft Server List Header */}
      <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>
        Minecraft Server List
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          style={{
            width: "100%",
            paddingBottom: "0.1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {serverData.map((item, index) => (
            <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
              <Card variant="outlined" sx={minecraftCardStyles}>
                <CardContent sx={minecraftCardContentStyles}>
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
