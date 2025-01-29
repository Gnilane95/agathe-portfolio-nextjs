import {Hero} from "./_components/Hero";
import {Header} from "./_components/Header";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import Link from "next/link";
import { Skills } from "./_components/Skills";

export default function Home() {
  return (
    <main>
      <Header/>
      <Spacing size="md"/>
      <Hero/>
      <Spacing size="md"/>
      <Status/>
      <Spacing size="md"/>
      <Skills/>
    </main>
  );
}
