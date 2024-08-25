import React from "react";

interface MainButtonProps {
    id?: string;
    label: string;
    btnStyle?: "Primary" | "Secondary" | "Link";
    btnSize: "Large" | "Small" | "Medium";
    fullWith?: boolean;
    icon?: React.ReactNode;
    customStyle?: string;
    iconPosition?: "Left" | "Right";
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean;
    submit?: boolean; // Make sure whether this is a button or submit type, otherwise all the buttons in the form work as submit type and do the rest
}

export const MainButton = ({
    label,
    btnStyle = "Primary",
    btnSize,
    fullWith,
    icon,
    customStyle,
    iconPosition = "Right",
    onClick,
    submit,
    loading,
    disabled,
}: MainButtonProps) => {
    // Define primary, secondary, and link styles
    const primaryStyles = "bg-black text-white hover:shadow-md";
    const secondaryStyles = "bg-transparent text-primary border border-primary hover:bg-primary hover:text-black hover:shadow-md";
    const linkStyles = "bg-transparent text-black hover:text-primary";

    // Determine which styles to apply based on btnStyle prop
    const disabledStyles = "bg-grayLight text-primary border border-primary cursor-not-allowed";

    const buttonStyles =
        disabled
            ? disabledStyles
            : btnStyle === "Primary"
                ? primaryStyles
                : btnStyle === "Secondary"
                    ? secondaryStyles
                    : linkStyles;

    // Define size classes based on btnSize prop
    let sizeClasses = "";
    if (btnSize === "Large") {
        sizeClasses = "h-12 px-8 text-base";
    } else if (btnSize === "Medium") {
        sizeClasses = "h-10 px-5 text-sm";
    } else {
        sizeClasses = "h-8 px-3 text-sm";
    }

    // If fullWith prop is true, add full width class
    if (fullWith) {
        sizeClasses += " w-full";
    }

    return (
        <button
            className={`font-semibold flex justify-center items-center relative text-center ${buttonStyles} ${sizeClasses} transition-all duration-300 ease-in-out cursor-pointer ${customStyle} leading-5 rounded-md`}
            onClick={onClick}
            type={submit && !disabled ? "submit" : "button"}
        >
            {loading && (
                <div className="mr-2">
                    <div className="border-gray/30 h-5 w-5 animate-spin rounded-full border-2 border-t-primary" />
                </div>
            )}
            {icon && iconPosition === "Left" && <div className="mr-2">{icon}</div>}
            <p className="whitespace-nowrap">{label}</p>
            {icon && iconPosition === "Right" && <div className="ml-2">{icon}</div>}
        </button>
    );
};
