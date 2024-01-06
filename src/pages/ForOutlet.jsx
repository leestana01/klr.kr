import { Outlet } from "react-router-dom";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer"


export default function Component() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}