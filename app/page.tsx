import {Hero} from "./_components/Hero";
import {Header} from "./_components/Header";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";

export default function Home() {
  return (
    <main>
      <Header/>
      <Spacing size="md"/>
      <Hero/>
      <Spacing size="md"/>
      <Status/>
    </main>
  );
}
