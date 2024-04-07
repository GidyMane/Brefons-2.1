import type { Metadata } from "next";
import SideBar from "@/components/Layout/SideBar";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ReduxUiProvider from "@/Redux/ReduxUiProvider";
import BreadCrumb from "@/components/Layout/BreadCrumb";


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
                <div className="md:container  w-full pt-20">
                    <div className="my-4">
                        <BreadCrumb />
                    </div>
                    {children}

                </div>
                <div className="bottom-0 fixed w-full bg-transparent backdrop-blur-sm">
                    <Footer />

                </div>
            </ReduxUiProvider>
        </div>
    );
}
