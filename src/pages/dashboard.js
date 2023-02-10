import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { useEffect } from "react";

export default function Dashboard() {

    useEffect(() => {
        fetch('api/users')
            .then(res => res.json())
                .then(data => console.log(data))
    }, []);

    return (
        <div className="w-screen h-screen">

            <Header />
            <div className="flex h-screen w-screen">
                <SideBar />
                <div className="w-full">
                    <main>

                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}