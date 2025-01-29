import {Hero} from "./_components/Hero";
import {Header} from "./_components/Header";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import Link from "next/link";
import { Skills } from "./_components/Skills";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import {Realisations} from "./_components/Realisations";

export default function Home() {
  return (
    <main>
      <Header/>
      <Spacing size="md"/>
      <Hero/>
      <Spacing size="md"/>
      <Status/>
      <Spacing size="md"/>
      <Realisations/>
      <Spacing size="md"/>
      <Skills/>
      <Spacing size="md"/>
      <Contact/>
      <Spacing size="md"/>
      <Footer/>
    </main>
  );
}
