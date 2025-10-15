import { clsx } from "clsx";
import { TouchableOpacity, Text, TouchableOpacityProps, View } from "react-native";
import GoogleIcon from "@/assets/icons/google.svg";
import AppleIcon from "@/assets/icons/apple.svg";

type ButtonProps = TouchableOpacityProps & {
    variant: "primary" | "secondary" | "outline" | "danger" | "sosial" | "link";
    iconType?: "google" | "apple";
    children: React.ReactNode;
    className?: string;
};

export default function Button({
    variant = "primary",
    iconType,
    children,
    className,
    ...props
}: ButtonProps) {
    const buttonStyles: Record<ButtonProps["variant"], string> = {
        primary: "bg-[#00764F]",
        secondary: "bg-gray-50",
        outline: "bg-transparent border border-gray-400 px-8",
        danger: "bg-red-500",
        sosial: "bg-white border border-neutral-400 w-full",
        link: "bg-transparent p-0",
    };

    const textColors: Record<ButtonProps["variant"], string> = {
        primary: "text-white",
        secondary: "text-neutral-700",
        outline: "text-neutral-100",
        danger: "text-white",
        sosial: "text-black",
        link: "text-blue-500 underline",
    };

    const buttonClasses = clsx(
        "px-4 py-4 rounded-2xl flex-row items-center justify-center",
        buttonStyles[variant],
        className
    );

    const textClasses = clsx("font-semibold text-center", textColors[variant], className);

    const renderIcon = () => {
        if (variant !== "sosial") return null;

        const IconComponent =
            iconType === "google" ? GoogleIcon : iconType === "apple" ? AppleIcon : null;

        if (!IconComponent) return null;

        return <IconComponent width={20} height={20} style={{ marginRight: 8 }} />;
    };

    return (
        <TouchableOpacity className={buttonClasses} {...props}>
            <View className="flex-row items-center justify-center">
                {renderIcon()}
                <Text className={textClasses}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
}
