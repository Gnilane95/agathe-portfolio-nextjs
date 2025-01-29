import { Card } from "@/components/ui/card";
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
        <Badge variant='outline'>Skills</Badge>
       <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Mes services
        </h2>
        <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2 flex-1">
                <NextjsLogo size={42} className="animate-spin" style={{ animationDuration : "10s" }}/>
                <h3 className="text-2xl font-semibold tracking-tight">NextJs</h3>
                <p className="text-sm text-muted-foreground">My main framework is <Code>React</Code>. I also use <Code>Nextjs</Code> as a backend and frontend framework</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <WordpressLogo size={42}/>
                <h3 className="text-2xl font-semibold tracking-tight">Wordpress</h3>
                <p className="text-sm text-muted-foreground">My main framework is <Code>React</Code>. I also use <Code>Nextjs</Code> as a backend and frontend framework</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <WixLogo size={42} />
                <h3 className="text-2xl font-semibold tracking-tight">wix</h3>
                <p className="text-sm text-muted-foreground">My main framework is <Code>React</Code>. I also use <Code>Nextjs</Code> as a backend and frontend framework</p>
            </div>
        </div>
    </Section>
    );
};