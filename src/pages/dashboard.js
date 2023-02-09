import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function Dashboard() {
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