import * as React from 'react';
import { Animated } from 'react-native';
declare const Container: React.ForwardRefExoticComponent<Pick<Animated.AnimatedProps<import("react-native").PressableProps & React.RefAttributes<import("react-native").View>> & {
    children?: React.ReactNode;
} & {
    margin?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
    mx?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
    my?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
    mb?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
    mt?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
    padding?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
    px?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
    py?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
    pb?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
    pt?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
    rounded?: "small" | "medium" | "large" | "none" | "full" | undefined;
    roundedTop?: "small" | "medium" | "large" | "none" | "full" | undefined;
    roundedBottom?: "small" | "medium" | "large" | "none" | "full" | undefined;
    bg?: "transparent" | "primary" | "secondary" | "tertiary" | "ghost" | "default" | "disabled" | undefined;
    border?: "ghost" | undefined;
    shadow?: "button" | undefined;
}, "padding" | "margin" | keyof import("react-native").PressableProps | "key" | "bg" | "border" | "shadow" | "mx" | "my" | "mb" | "mt" | "px" | "py" | "pb" | "pt" | "rounded" | "roundedTop" | "roundedBottom"> & React.RefAttributes<Animated.AnimatedProps<import("react-native").PressableProps & React.RefAttributes<import("react-native").View>>>>;
export declare const Button: {
    Container: React.ForwardRefExoticComponent<Pick<Animated.AnimatedProps<import("react-native").PressableProps & React.RefAttributes<import("react-native").View>> & {
        children?: React.ReactNode;
    } & {
        margin?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
        mx?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
        my?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
        mb?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
        mt?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
        padding?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
        px?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
        py?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
        pb?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
        pt?: "0.5" | "1.5" | "2.5" | "3.5" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | ("micro" | "tiny" | "small" | "medium" | "large" | "xl") | undefined;
        rounded?: "small" | "medium" | "large" | "none" | "full" | undefined;
        roundedTop?: "small" | "medium" | "large" | "none" | "full" | undefined;
        roundedBottom?: "small" | "medium" | "large" | "none" | "full" | undefined;
        bg?: "transparent" | "primary" | "secondary" | "tertiary" | "ghost" | "default" | "disabled" | undefined;
        border?: "ghost" | undefined;
        shadow?: "button" | undefined;
    }, "padding" | "margin" | keyof import("react-native").PressableProps | "key" | "bg" | "border" | "shadow" | "mx" | "my" | "mb" | "mt" | "px" | "py" | "pb" | "pt" | "rounded" | "roundedTop" | "roundedBottom"> & React.RefAttributes<Animated.AnimatedProps<import("react-native").PressableProps & React.RefAttributes<import("react-native").View>>>>;
    ScaleOnPressContainer: typeof ScaleOnPressContainer;
    Text: React.ForwardRefExoticComponent<import("react-native").TextProps & {
        children?: React.ReactNode;
    } & {
        color?: "transparent" | "primary" | "secondary" | "tertiary" | "ghost" | "default" | undefined;
        align?: "center" | undefined;
        size?: "small" | "medium" | "large" | undefined;
        leading?: "large" | undefined;
        type?: "mono" | undefined;
        weight?: "medium" | "normal" | "bold" | "thin" | "extralight" | "light" | "semibold" | "extrabold" | "black" | undefined;
    } & React.RefAttributes<import("react-native").TextProps>>;
};
declare type ScalingPressableProps = {
    minScale?: number;
};
declare function ScaleOnPressContainer({ minScale, ...props }: React.ComponentProps<typeof Container> & ScalingPressableProps): JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map