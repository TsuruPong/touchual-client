import * as React from "react";

import styles from "./Typography.module.css";

const BaseTypography: React.FC<{
    lang: "en" | "ja";
    children: React.ReactNode;
}> = ({ lang, children, ...props }) => {
    return (
        <span
            className={`${
                lang === "en" ? styles["font-en"] : styles["font-ja"]
            }`}
            {...props}
        >
            {children}
        </span>
    );
};

export const TextEn: React.FC<{ children: React.ReactNode }> = ({
    children,
    ...props
}) => {
    return (
        <BaseTypography lang="en" {...props}>
            {children}
        </BaseTypography>
    );
};

export const TextJa: React.FC<{ children: React.ReactNode }> = ({
    children,
    ...props
}) => {
    return (
        <BaseTypography lang="ja" {...props}>
            {children}
        </BaseTypography>
    );
};
