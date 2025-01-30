import { Code } from "../_components/Code";
import Link from "next/link";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { NextjsLogo } from "./icons/NextjsLogo";
import { WordpressLogo } from "./icons/WordpressLogo";
import { WixLogo } from "./icons/WixLogo";

export const Skills = () => {
    return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant='outline'>Compétences</Badge>
       <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Mes services
        </h2>
        <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2 flex-1">
                <NextjsLogo size={42} className="animate-spin" style={{ animationDuration : "10s" }}/>
                <h3 className="text-2xl font-semibold tracking-tight">NextJs</h3>
                <p className="text-sm text-muted-foreground">Mon framework principal est <Code>NextJs</Code>. Je l&apos;utilise pour toute sorte d&apos;application web, en frontend comme en backend.</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <WordpressLogo size={42}/>
                <h3 className="text-2xl font-semibold tracking-tight">Wordpress</h3>
                <p className="text-sm text-muted-foreground">Pour créer ou faire la refonte de votre site <Code>Wordpress</Code>, vous êtes au bon endroit. Avec Kadence Pro, je vous conçois une site qualitatif et performant.</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <WixLogo size={42} />
                <h3 className="text-2xl font-semibold tracking-tight">wix</h3>
                <p className="text-sm text-muted-foreground">Vous avez décidez de faire votre site vous même et voulez utiliser <Code>Wix</Code> ? Cependant, seule une bonne maitrise de la plateforme saura démarquer votre site. <Link href="#me-contacter"><Code>Contactez-moi</Code></Link> !</p>
            </div>
        </div>
    </Section>
    );
};