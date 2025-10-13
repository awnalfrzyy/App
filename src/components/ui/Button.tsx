import { clsx } from "clsx";
import { TouchableOpacity, Text, TouchableOpacityProps, View } from "react-native";
import GoogleIcon from "@/assets/icons/google.svg";
import AppleIcon from "@/assets/icons/apple.svg";

type ButtonProps = TouchableOpacityProps & {
    variant?: "primary" | "secondary" | "outline" | "danger" | "sosial" | "link";
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
    const buttonClasses = clsx(
        "px-4 py-4 rounded-2xl flex-row items-center justify-center",
        {
            "bg-blue-500": variant === "primary",
            "bg-gray-500": variant === "secondary",
            "bg-transparent border border-gray-400 ": variant === "outline",
            "bg-red-500": variant === "danger",
            "bg-white border border-neutral-400 w-full": variant === "sosial",
            "bg-transparent p-0": variant === "link",
        },
        className
    );

    const textClasses = clsx("font-semibold text-center", {
        "text-white": variant !== "sosial",
        "text-black": variant === "sosial",
        "text-neutral-500": variant === "outline",
        "text-blue-500 underline": variant === "link",
    });

    const renderIcon = () => {
        if (variant !== "sosial") return null;

        const IconComponent =
            iconType === "google"
                ? GoogleIcon
                : iconType === "apple"
                    ? AppleIcon
                    : null;

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

/**
 *  Button Component (Reusable)
 * 
 * Komponen tombol serbaguna berbasis React Native + Tailwind (clsx)
 * Buat berbagai style tombol seperti primary, outline, danger, atau tombol sosial (Google/Apple).
 * 
 * ---
 *  Props:
 * 
 * @prop { "primary" | "secondary" | "outline" | "danger" | "sosial" } [variant="primary"]
 *  → Menentukan jenis style tombol.
 * 
 * @prop { "google" | "apple" } [iconType]
 *  → Khusus untuk variant="sosial", menentukan logo yang mau dipakai.
 * 
 * @prop {React.ReactNode} children
 *  → Isi teks atau elemen di dalam tombol.
 * 
 * @prop {string} [className]
 *  → Custom Tailwind classes tambahan.
 * 
 * @prop {...TouchableOpacityProps}
 *  → Semua properti bawaan TouchableOpacity (onPress, disabled, dsb).
 * 
 * ---
 *  Variants:
 * 
 * • "primary"   → Tombol utama warna biru.
 * • "secondary" → Tombol abu-abu (opsional atau state kedua).
 * • "outline"   → Tombol dengan border abu-abu tanpa background.
 * • "danger"    → Tombol warna merah (biasanya untuk aksi hapus/peringatan).
 * • "sosial"    → Tombol khusus login sosial media (Google/Apple).
 * 
 * ---
 *  Contoh Penggunaan:
 * 
 *  Tombol utama:
 * ```tsx
 * <Button variant="primary" onPress={() => console.log("Pressed!")}>
 *   Continue
 * </Button>
 * ```
 * 
 *  Tombol outline:
 * ```tsx
 * <Button variant="outline" onPress={() => console.log("Pressed!")}>
 *   Cancel
 * </Button>
 * ```
 * 
 *  Tombol login sosial (Google):
 * ```tsx
 * <Button variant="sosial" iconType="google" onPress={() => console.log("Login Google")}>
 *   Continue with Google
 * </Button>
 * ```
 * 
 *  Tombol login sosial (Apple):
 * ```tsx
 * <Button variant="sosial" iconType="apple" onPress={() => console.log("Login Apple")}>
 *   Continue with Apple
 * </Button>
 * ```
 *  Tombol Link:
 * ```
 * <Button variant="link" onPress={() => console.log("Link!!!")}>
 *    Lihat detail
 * </Button>

 * ```
 * 
 * ---
 *  Catatan:
 * - Pastikan file SVG `GoogleIcon` dan `AppleIcon` sudah diimport.
 * - Warna dan padding bisa dikustom lewat `className` prop.
 * - Komponen ini bisa langsung dipakai di semua halaman tanpa ubah logika.
 */
/**
 *  Button Component (Reusable)
 * 
 * A versatile button component built with React Native + Tailwind (clsx).
 * Supports multiple visual styles like primary, outline, danger, and social login buttons (Google/Apple).
 * 
 * ---
 *  Props:
 * 
 * @prop { "primary" | "secondary" | "outline" | "danger" | "sosial" | "link" } [variant="primary"]
 *  → Defines the button’s visual style.
 * 
 * @prop { "google" | "apple" } [iconType]
 *  → Used only when variant="sosial"; specifies which social icon to render.
 * 
 * @prop {React.ReactNode} children
 *  → The text or inner content of the button.
 * 
 * @prop {string} [className]
 *  → Additional Tailwind CSS utility classes for customization.
 * 
 * @prop {...TouchableOpacityProps}
 *  → All default TouchableOpacity props (e.g., onPress, disabled, etc.).
 * 
 * ---
 *  Variants:
 * 
 * • "primary"   → Blue main button.
 * • "secondary" → Gray secondary button.
 * • "outline"   → Transparent button with gray border.
 * • "danger"    → Red button for destructive or warning actions.
 * • "sosial"    → Social login button (Google/Apple).
 * • "link"      → Transparent text-like button with underline (e.g., “Forgot Password?”).
 * 
 * ---
 *  Usage Examples:
 * 
 *  Primary button:
 * ```tsx
 * <Button variant="primary" onPress={() => console.log("Pressed!")}>
 *   Continue
 * </Button>
 * ```
 * 
 *  Outline button:
 * ```tsx
 * <Button variant="outline" onPress={() => console.log("Pressed!")}>
 *   Cancel
 * </Button>
 * ```
 * 
 *  Social login (Google):
 * ```tsx
 * <Button variant="sosial" iconType="google" onPress={() => console.log("Login with Google")}>
 *   Continue with Google
 * </Button>
 * ```
 * 
 *  Social login (Apple):
 * ```tsx
 * <Button variant="sosial" iconType="apple" onPress={() => console.log("Login with Apple")}>
 *   Continue with Apple
 * </Button>
 * ```
 * 
 *  Link-style button:
 * ```tsx
 * <Button variant="link" onPress={() => console.log("Link clicked!")}>
 *   View details
 * </Button>
 * ```
 * 
 * ---
 *  Notes:
 * - Ensure `GoogleIcon` and `AppleIcon` SVG files are properly imported.
 * - You can override color, padding, or width using the `className` prop.
 * - This component is reusable across screens without changing its core logic.
 */