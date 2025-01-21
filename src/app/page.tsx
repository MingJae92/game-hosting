"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, CircularProgress, Container } from "@mui/material";
import { containerStyles, loadingContainerStyles, cardStyles, cardContentStyles } from "./components/servercard/card-styles/cardStyles"

export default function Home() {
  const [serverData, setServerData] = useState([]);
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
      <Grid container spacing={4}>
        {serverData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined" sx={cardStyles}>
              <CardContent sx={cardContentStyles}>
                <Typography variant="h6" gutterBottom>
                  {item.name || "Unknown Server"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Game:</strong> {item.game || "N/A"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Players:</strong> {item.players || "N/A"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Status:</strong> {item.status || "N/A"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Version:</strong> {item.version || "N/A"}
                </Typography>
                {item.extraData && (
                  <Typography variant="body2" color="textSecondary">
                    <strong>Extra Data:</strong> {JSON.stringify(item.extraData)}
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
