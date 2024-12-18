import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-background-200 text-font p-4 text-center mt-auto">
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </footer>
    );
};