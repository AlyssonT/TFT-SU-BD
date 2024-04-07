import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    "50"?: string;
    "100"?: string;
    "200"?: string;
    "300"?: string;
    "400"?: string;
    "500"?: string;
    "600"?: string;
    "700"?: string;
    "800"?: string;
    "900"?: string;
  }
}

export const fontsSizes = {
  xsmall: 10,
  small: 12,
  medium: 14,
  large: 16,
  mlarge: 18,
  xlarge: 22,
  xxlarge: 26,
  xxxlarge: 30,
};

const theme = createTheme({
  palette: {
    text: {
      primary: "#999999",
      secondary: "#ddb500",
    },
    primary: {
      main: "#ddb500",
    },
    secondary: {
      main: "#EBF4F9",
    },
    action: {
      active: "#ffffff",
      hover: "#EBF4F9",
    },
    error: {
      main: "#D63657",
    },
    success: {
      main: "#4EAA79",
    },
    background: {
      default: "#ECEDED",
      paper: "#ECEDED",
    },
  },
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    fontSize: fontsSizes.medium,
    fontWeightRegular: 400,
    caption: {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: fontsSizes.medium,
      color: "#000",
    },
    subtitle1: {
      fontWeight: 400,
      color: "#000",
    },
    button: {
      fontSize: fontsSizes.small,
    },
    h3: {
      fontSize: 28,
      "@media (max-width:900px)": {
        fontSize: 20,
      },
      color: "#00000099",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ddb500",
          },
        },
      },
    },
  },
});

export const mappedChampionsColor: Record<number, string> = {
  1: "grey",
  2: "green",
  3: "blue",
  4: "purple",
  5: "#9c920e",
};

export default theme;
