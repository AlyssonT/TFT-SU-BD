import { Header } from "./components/Header";
import "./styles/style.css";
import { Formulario } from "./components/Formulario";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Solution } from "./data/types/Solution";
import { ChampionsContainer } from "./components/ChampionsContainer";
import { Trait } from "./data/types/Trait";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import { Introduction } from "./components/Introduction";
import { useResponsive } from "./hooks/useResponsive";

export function HomePage() {
  const [solution, setSolution] = useState<Solution>();
  const [traits, setTraits] = useState<Record<number, Trait>>();
  const [isLoading, setIsLoading] = useState(false);
  const { isMobile } = useResponsive();

  const handleSolution = (solution: Solution) => {
    setSolution(solution);
  };

  const handleTraits = (traits: Record<number, Trait>) => {
    setTraits(traits);
  };

  const getTraits = async () => {
    setIsLoading(true);
    try {
      const responseTraits = await axios.get(
        "https://tft-su-bd-api.shuttleapp.rs/traits"
      );
      handleTraits(responseTraits.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getTraits();
  }, []);

  const minHeight = isMobile ? "calc(100svh - 96px)" : "calc(100vh - 80px)";

  return (
    <>
      <Header />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={solution ? "" : minHeight}
        flexDirection={{ xs: "column", md: "row" }}
        my={2}
      >
        {!solution && <Introduction />}
        {isLoading ? (
          <Box display={"flex"} alignItems={"center"}>
            <Box mr={1}>
              <Skeleton animation="wave" width={"220px"} height={"100px"} />
            </Box>
            <Box>
              <Skeleton animation="wave" width={"90px"} height={"60px"} />
            </Box>
          </Box>
        ) : (
          <Formulario handleSolution={handleSolution} />
        )}
      </Box>
      <ChampionsContainer solution={solution} traits={traits} />
    </>
  );
}
