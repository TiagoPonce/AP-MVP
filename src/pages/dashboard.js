import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import TableCompany from "@/components/TableCompany";

export default function Dashboard() {
    return (
        <div className="w-screen h-screen">

            <Header />
            <div className="flex h-full w-full">
                <SideBar />
                <main className="w-screen h-screen bg-[#C1D3ED]/30">
                    <div className="w-full h-14 bg-[#A4BBDD] mt-20 flex items-center">
                        <p className="text-base ml-20">Dashboard</p>
                    </div>
                    <TableCompany/>
                </main>
            </div>
            <Footer />
        </div>
    )
}