import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { Solution } from "../data/types/Solution";

interface FormularioProps {
  handleSolution: (solution: Solution) => void;
}

export function Formulario({ handleSolution }: FormularioProps) {
  const [nChampions, setNChampions] = useState<number | "">(1);
  const [augment, setAugment] = useState("standUnited");
  const [highTier, setHighTier] = useState(false);
  const [tierCoefficient, setTierCoefficient] = useState(1.0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const responseChampions = await axios.get(
        `https://tft-su-bd-api.shuttleapp.rs/solve/${nChampions}`,
        {
          params: {
            high_tier: highTier,
            augment: augment,
            tier_coefficient: tierCoefficient,
          },
        }
      );

      handleSolution(responseChampions.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!value) {
      setNChampions("");
      return;
    }
    const input = parseInt(value);
    if ((isNaN(input) && value !== "") || input < 1 || input > 11) return;
    else setNChampions(input);
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAugment(value);
  };

  const handleCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setHighTier(checked);
  };

  const handleCoefficientChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = String(event.target.value);
    if (value.length > 3) return;
    const input = parseFloat(value);
    if (input === 0.0) {
      setHighTier(false);
      setTierCoefficient(1.0);
      return;
    }
    if ((isNaN(input) && value !== "") || input < 0 || input > 5.0) return;

    setTierCoefficient(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Stack display={"flex"} alignItems={"center"}>
          <TextField
            type="number"
            inputProps={{
              pattern: "[0-9]*",
            }}
            variant="outlined"
            margin="normal"
            required
            label="Number of units"
            value={nChampions}
            onChange={handleInputChange}
            sx={{ backgroundColor: "#2f2f2f" }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={highTier} onChange={handleCheckBoxChange} />
            }
            color="primary"
            label={
              <Typography color={"primary"}>High Tier Champions</Typography>
            }
          />
          {highTier && (
            <>
              <TextField
                sx={{ mt: 2, minWidth: "180px", backgroundColor: "#2f2f2f" }}
                variant="outlined"
                margin="normal"
                size="small"
                required
                type="number"
                value={tierCoefficient}
                onChange={handleCoefficientChange}
                inputProps={{
                  step: 0.1,
                  min: "0.0",
                  max: "5.0",
                }}
                label="Tier coefficient"
              />
              <Paper
                sx={{
                  maxWidth: "250px",
                  backgroundColor: "#2f2f2f",
                  p: 1,
                  mt: 1,
                }}
              >
                <Typography fontSize={12} color={"primary"} align="justify">
                  The higher the coefficient, the more the algorithm will try to
                  insert champions with a higher tier, but it will sacrifice a
                  little in terms of the number of traits.
                </Typography>
              </Paper>
            </>
          )}
        </Stack>
        <Paper
          sx={{
            p: 2,
            ml: { md: 4, xs: 0 },
            mt: { md: 0, xs: 3 },
            minWidth: { xs: "240px" },
            backgroundColor: "#2f2f2f",
            boxShadow: "5px 5px #121212",
          }}
        >
          <Stack>
            <FormControl>
              <FormLabel>Select Augment</FormLabel>
              <RadioGroup
                defaultValue="standUnited"
                name="radio-buttons-group"
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="standUnited"
                  control={<Radio />}
                  label="Stand United"
                />
                <FormControlLabel
                  value="builtDifferent"
                  control={<Radio />}
                  label="Built Different"
                />
              </RadioGroup>
            </FormControl>
            <Button
              sx={{ backgroundColor: "#2f2f2f" }}
              type="submit"
              variant="outlined"
              disabled={isLoading}
              endIcon={isLoading && <CircularProgress size={15} />}
            >
              Generate
            </Button>
          </Stack>
        </Paper>
      </Box>
    </form>
  );
}
