import {RFValue} from "react-native-responsive-fontsize";
import dimensions from "../utils/dimensions";

const baseHeight = dimensions.screenHeight;

export interface ITypography {
  fontSize: {
    tiny: number;
    normal: number;
    small: number;
    medium: number;
    average: number;
    big: number;
    title: number;
    hero: number;
  };

  fontFamily: {
    "100": string;
    "300": string;
    "400": string;
    "500": string;
    "700": string;
    "900": string;
  };
}

const fontSize = {
  tiny: Number(RFValue(10, baseHeight).toFixed(2)),
  small: Number(RFValue(12, baseHeight).toFixed(2)),
  normal: Number(RFValue(14, baseHeight).toFixed(2)),
  medium: Number(RFValue(16, baseHeight).toFixed(2)),
  average: Number(RFValue(18, baseHeight).toFixed(2)),
  big: Number(RFValue(20, baseHeight).toFixed(2)),
  title: Number(RFValue(22, baseHeight).toFixed(2)),
  hero: Number(RFValue(40, baseHeight).toFixed(2)),
};

const fontFamily = {
  "100": "Roboto-Thin",
  "300": "Roboto-Light",
  "400": "Roboto-Regular",
  "500": "Roboto-Medium",
  "700": "Roboto-Bold",
  "900": "Roboto-Black",
};

export const typography: ITypography = {
  fontSize,
  fontFamily,
};
