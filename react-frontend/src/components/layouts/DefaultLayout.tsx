import {Header} from "./parts/Header.tsx";
import {Footer} from "./parts/Footer.tsx";
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

export const DefaultLayout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-col my-6 px-2 max-w-site w-[80%] mx-auto">
                {children}
            </main>
            <Footer/>
        </div>
    );
};