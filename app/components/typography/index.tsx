import * as React from "react";
import styles from "./Typography.module.css";

type TypographyProps = {
    langKind: "en" | "ja";
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const Typography: React.FC<TypographyProps> = ({
    langKind,
    children,
    className = "",
    ...props
}) => {
    return (
        <span
            className={`${
                langKind === "en" ? styles.fontEn : styles.fontJa
            } ${className}`}
            {...props}
        >
            {children}
        </span>
    );
};

export const TextEn: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
    children,
    ...props
}) => {
    return (
        <Typography langKind="en" {...props}>
            {children}
        </Typography>
    );
};

export const TextJa: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
    children,
    ...props
}) => {
    return (
        <Typography langKind="ja" {...props}>
            {children}
        </Typography>
    );
};
