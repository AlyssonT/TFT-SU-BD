import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { ChampionCard } from "./ChampionCard";
import ChampionsData from "../data/champions.json";
import { useMemo } from "react";
import { Solution } from "../data/types/Solution";
import { Trait } from "../data/types/Trait";

interface Campeao {
  id: string;
  name: string;
  tier: number;
  image: {
    full: string;
  };
}

interface Campeoes {
  [key: string]: Campeao;
}

interface ChampionsContainerProps {
  solution?: Solution;
  traits?: Record<number, Trait>;
}

export function ChampionsContainer({ solution }: ChampionsContainerProps) {
  const campeoes: Campeoes = useMemo(() => ChampionsData, [ChampionsData]);
  return (
    <>
      <Grid container>
        {solution?.champions &&
          solution.champions.map((champion, index) => (
            <Grid item xs={6} md={4} lg={3} xl={2} mb={1} key={index}>
              <Box display={"flex"} justifyContent={"center"}>
                <ChampionCard
                  championData={{
                    name: champion.id,
                    cost: champion.tier,
                    image: `/assets/championsImages/${
                      campeoes[champion.id].image.full
                    }`,
                  }}
                />
              </Box>
            </Grid>
          ))}
      </Grid>
      {(solution?.evaluation || solution?.evaluation == 0) && (
        <Stack mt={2} alignItems={"center"}>
          <Paper
            sx={{
              padding: "15px",
              bgcolor: "#2f2f2f",
              boxShadow: "5px 5px #121212",
            }}
          >
            <Typography variant="h6" color={"primary"}>
              Number of synergies: {solution.evaluation}
            </Typography>
          </Paper>
        </Stack>
      )}
    </>
  );
}
