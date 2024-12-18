import React from "react";

export const Header: React.FC = () => {
    return (
        <header className="bg-background-200 text-font p-2 w-full flex items-center">
            <div className="flex justify-between max-w-site w-[80%] mx-auto">
                <h1 className="text-2xl font-bold">My Website</h1>
                <nav className="mt-2">
                    <a href="/" className="mx-4 hover:underline">Home</a>
                    <a href="/about" className="mx-4 hover:underline">About</a>
                    <a href="/contact" className="mx-4 hover:underline">Contact</a>
                </nav>
            </div>
        </header>
    );
};