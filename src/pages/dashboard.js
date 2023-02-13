import Footer from "@/components/Footer";
import FormsComponent from "@/components/FormsComponent";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import TableCompany from "@/components/TableCompany";
import React, { useState } from "react";

export default function Dashboard() {
    const [active, setActive] = useState("default");
    return (
        <div className="w-screen h-screen">

            <Header />
            <div className="flex h-full w-full">
                <SideBar />
                <main className="w-screen h-screen bg-[#C1D3ED]/30">
                    <div className="w-full h-14 bg-[#A4BBDD] mt-20 flex items-center">
                        <p className="text-base ml-20">Dashboard</p>
                    </div>
                    {/* <TableCompany/> */}
                    <FormsComponent />
                </main>
            </div>
            <Footer />
        </div>
    )
}