import "../index.css";

import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function DogFacts() {
  return (
    <Card sx={{ minWidth: 275 }} className="card">
      <CardContent className="cardC">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          D{bull}o{bull}g{bull}s
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Noun plural noun: The dogs
        </Typography>
        <br />
        <Typography variant="body2">
          A domesticated carnivorous mammal that typically has a long snout, an
          acute sense of smell, non-retractable claws, and a barking, howling,
          or whining voice.
          <br />
          {'"A wild animal of the dog family, Woof woof"'}
        </Typography>
        <br />
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="secondary">
            <a
              href="https://grspca.co.za/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adopt a Doggie
            </a>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
