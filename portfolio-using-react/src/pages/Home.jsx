import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Project } from "../components/Projects";

export function Home(){
    return(
        <>
        <Header/>
        <Hero/>
        <About/>
        <Project/>
        </>

    );
}