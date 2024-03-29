import Footer from "@/components/Footer";
import FormsComponent from "@/components/FormsComponent";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { useSession } from "next-auth/react";
import { Fragment, useEffect } from "react";
import Router from 'next/router';
import TableCompany from "@/components/TableCompany";

import React, { useState } from "react";
import Modal from "@/components/Modal";
import Tests from "@/components/Tests";
import AppContext from "@/context/AppContext";
import { useContext } from "react";


export default function Dashboard() {
    const { status, data } = useSession();
    const [showModal, setShowModal] = useState(false);
    
    const context = useContext(AppContext);
    
    function renderMenu() {
        const { renderPage } = context;

        if (renderPage === "testes") {
            return <Tests />
        } else if (renderPage === "empresas") {
            return <TableCompany />
        }

        return <TableCompany />
    }

    useEffect(() => {
        if (status === "unauthenticated") Router.replace('/');
        // if (data.user.role === "admin") Router.replace('/admin')
    }, [status]);

    if (status === "authenticated")
        return (
            <Fragment>
            <div className="w-screen h-screen">

                <Header />
                <div className="flex h-screen w-screen">
                    <SideBar />
                    <div className="w-full bg-[#C1D3ED]/30">
                        <main>
                          <div className="w-full h-14 bg-[#A4BBDD] mt-20 flex items-center">
                              <p className="text-base ml-20">Dashboard</p>
                          </div>
                          <div className="w-full h-full flex justify-center mt-14">
                              { renderMenu() }
                          </div>
                        </main>
                    </div>
                </div>
                <Footer />
            </div>
            <Modal>
                <FormsComponent />
            </Modal>
            </Fragment>
        )
}