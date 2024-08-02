import { Box, Grid, Paper, Stack, Tooltip, Typography } from "@mui/material";
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

export function ChampionsContainer({
  solution,
  traits,
}: ChampionsContainerProps) {
  const campeoes: Campeoes = useMemo(() => ChampionsData, []);

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
                    image: `/assets/championsImages${process.env.WHICH_SET}/${
                      campeoes[champion.id].image.full
                    }`,
                  }}
                />
              </Box>
            </Grid>
          ))}
      </Grid>
      {(solution?.evaluation || solution?.evaluation === 0) && (
        <Stack mt={2} alignItems={"center"}>
          <Grid container alignItems="center" justifyContent="center">
            {traits &&
              Object.entries(solution.traits).map(([id, numberUnits]) => (
                <Grid item md={0.6} xs={1.6} sm={1} lg={0.5} xl={0.4} key={id}>
                  <Tooltip title={traits[parseInt(id)].name}>
                    <Stack
                      alignItems={"center"}
                      mx={1}
                      position={"relative"}
                      textAlign={"center"}
                    >
                      <img
                        src="/assets/hexagon.svg"
                        width={"48px"}
                        height={"48px"}
                      />
                      <Box
                        position={"absolute"}
                        top={"38%"}
                        left={"50%"}
                        sx={{ transform: "translate(-50%, -50%)" }}
                      >
                        <img
                          src={`/assets/traitsImages${
                            process.env.WHICH_SET
                          }/${traits[parseInt(id)].name.toLowerCase()}.png`}
                          width={"32px"}
                          height={"32px"}
                        />
                      </Box>
                      <Typography variant="body2" color={"primary"}>
                        {numberUnits}
                      </Typography>
                    </Stack>
                  </Tooltip>
                </Grid>
              ))}
          </Grid>
          <Paper
            sx={{
              padding: "15px",
              bgcolor: "#2f2f2f",
              boxShadow: "5px 5px #121212",
              mt: 2,
            }}
          >
            <Typography variant="h6" color={"primary"}>
              Number of active traits: {solution.evaluation}
            </Typography>
          </Paper>
        </Stack>
      )}
    </>
  );
}
