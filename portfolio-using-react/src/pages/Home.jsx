import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Project } from "../components/Projects";
import { Contact } from "../components/Contact";

export function Home(){
    return(
        <>
        <Header/>
        <Hero/>
        <About/>
        <Project/>
        <Contact/>
        </>

    );
}