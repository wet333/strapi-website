import React from "react";

type MultiParagraphBlockProps = {
    children?: React.ReactNode,
};

export function MultiParagraphBlock({children}: MultiParagraphBlockProps) {
    return (
        <div className="relative flex flex-col text-font-dark bg-background">
            <div className="space-y-6 font-light">
                {children}
            </div>
        </div>
    );
}