import * as React from "react";
import styles from "./Typography.module.css";

type TypographyProps = {
    lang: "en" | "ja";
    children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLSpanElement>, "lang">;

const Typography: React.FC<TypographyProps> = ({
    lang,
    children,
    className = "",
    ...props
}) => {
    return (
        <span
            className={`${
                lang === "en" ? styles.fontEn : styles.fontJa
            } ${className}`}
            {...props}
        >
            {children}
        </span>
    );
};

export const TextEn: React.FC<
    Omit<React.HTMLAttributes<HTMLSpanElement>, "lang">
> = ({ children, ...props }) => {
    return (
        <Typography lang="en" {...props}>
            {children}
        </Typography>
    );
};

export const TextJa: React.FC<
    Omit<React.HTMLAttributes<HTMLSpanElement>, "lang">
> = ({ children, ...props }) => {
    return (
        <Typography lang="ja" {...props}>
            {children}
        </Typography>
    );
};
