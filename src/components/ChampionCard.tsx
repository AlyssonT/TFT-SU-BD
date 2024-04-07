import { Box, Stack, Typography } from "@mui/material";
import { mappedChampionsColor } from "../styles/theme";
import { useResponsive } from "../hooks/useResponsive";

interface ChampionData {
  name: string;
  cost: number;
  image: string;
}

interface ChampionCardProps {
  championData: ChampionData;
}

export function ChampionCard({ championData }: ChampionCardProps) {
  const { isMobile } = useResponsive();
  const imageSize = {
    width: isMobile ? "168px" : "256px",
    height: isMobile ? "100px" : "152px",
  };

  return (
    <Box
      sx={{
        width: imageSize.width,
        height: imageSize.height,
        bgcolor: mappedChampionsColor[championData.cost],
        border: `3px solid ${mappedChampionsColor[championData.cost]}`,
        borderRadius: 5,
      }}
    >
      <Stack justifyContent={"center"} alignItems={"center"}>
          <img
            src={championData.image}
            alt={championData.name}
            style={{
              border: "0px solid grey",
              borderTopLeftRadius: 18,
              borderTopRightRadius: 18,
              width: imageSize.width,
              height: `calc(${imageSize.height} - 24px)`,
            }}
          />
        <Typography color={"white"}>{championData.name}</Typography>
      </Stack>
    </Box>
  );
}
