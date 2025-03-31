import { useThemeColor } from "@/app-example/hooks/useThemeColor";
import { Shadows } from "@/constants/Shadows";
import { View, type ViewProps, type ViewStyle } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";

type Props = ViewProps;

export function Card({ style, ...rest }: Props) {
    const colors = useThemeColors()
  return <View style={[style, styles]} {...rest} />;
}

const styles = {
  borderRadius: 8,
  ...Shadows.dp2
} satisfies ViewStyle;
