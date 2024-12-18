import React from "react";

type PageSectionProps = {
    className?: string,
    title?: string,
    children?: React.ReactNode,
}

export function PageSection({className, title, children}: PageSectionProps) {
    return (
        <div className={className}>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 tracking-wide">
                {title}
            </h2>
            {children}
        </div>
    )
}