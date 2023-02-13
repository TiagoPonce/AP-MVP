import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from 'next/router';
import TableCompany from "@/components/TableCompany";

export default function Dashboard() {
    const { status, data} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") Router.replace('/');
    }, [status]);

    if (status === "authenticated")
        return (
            <div className="w-screen h-screen">

                <Header />
                <div className="flex h-screen w-screen">
                    <SideBar />
                    <div className="w-full">
                        <main>
                          <div className="w-full h-14 bg-[#A4BBDD] mt-20 flex items-center">
                              <p className="text-base ml-20">Dashboard</p>
                          </div>
                          <TableCompany/>
                        </main>
                    </div>
                </div>
                <Footer />
            </div>
        )
}