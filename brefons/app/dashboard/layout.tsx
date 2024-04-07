import type { Metadata } from "next";
import SideBar from "@/components/Layout/SideBar";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ReduxUiProvider from "@/Redux/ReduxUiProvider";


export const metadata: Metadata = {
    title: "BREFONS",
    description: "Program to Build Resilience for Food and Nutrition Security in the Horn of Africa (BREFONS)",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-[100vh] rounded-md">
            <ReduxUiProvider>
                <SideBar />
                <Navbar />
                <div className="container h-[50vh]">
                    {children}

                </div>
                <div className="bottom-0 fixed w-full bg-transparent backdrop-blur-sm">
                <Footer />

                </div>
            </ReduxUiProvider>
        </div>
    );
}
