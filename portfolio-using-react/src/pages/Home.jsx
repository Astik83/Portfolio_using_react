
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Project } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer"


export function Home(){
      
    return(
        
        <>
        <link rel='icon' type='image' href='img/favicon.png'></link>
        <Header/>
        <Hero/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
        </>

    );
}