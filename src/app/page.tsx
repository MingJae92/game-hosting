"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, CircularProgress, Container } from "@mui/material";
import { containerStyles, loadingContainerStyles, cardStyles, cardContentStyles } from "./components/servercard/card-styles/cardStyles";
import { dataSet } from "./components/types/types";

export default function Home() {
  const [serverData, setServerData] = useState<dataSet[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/mock");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: dataSet[] = await response.json();
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
      <Grid container spacing={4}>
        {serverData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
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
                <Typography variant="body2" color="textSecondary">
                  <strong>Region:</strong> {item.region || "N/A"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Type:</strong> {item.type || "N/A"}
                </Typography>
                {item.mods && item.mods.length > 0 && (
                  <Typography variant="body2" color="textSecondary">
                    <strong>Mods:</strong> {item.mods.join(", ")}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
