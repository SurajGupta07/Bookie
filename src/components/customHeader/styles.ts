import {StyleSheet} from "react-native";
import {theme} from "../../themes";
import dimensions from "../../utils/dimensions";

export const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
  },
  justifyEnd: {
    flex: 1,
    justifyContent: "flex-end",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: dimensions.viewHeight(64),
    backgroundColor: theme.palette.black.light,
    paddingHorizontal: theme.spacing.averageWidth,
  },
  title: {
    color: theme.palette.white.dark,
    fontSize: theme.typography.fontSize.big,
    fontFamily: theme.typography.fontFamily[700],
  },
  subTitle: {
    color: theme.palette.white.dark,
    fontSize: theme.typography.fontSize.tiny,
    fontFamily: theme.typography.fontFamily[500],
  },
});
