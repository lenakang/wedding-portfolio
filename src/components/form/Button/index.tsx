"use client";

import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

type ButtonSize = "normal" | "small" | "xs";

interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    size?: ButtonSize;
}

export default function index({
    children,
    onClick,
    className,
    type = "button",
    disabled = false,
    size = "normal",
}: CustomButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames(styles.button, styles[size], className)}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
