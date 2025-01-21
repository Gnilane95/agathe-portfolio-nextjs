import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { Linkdinicon } from "./icons/Linkdinicon";
import Link from "next/link";

const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) =>{
    return <span className={cn("bg-accent/30 font-mono border border-accent px-1 py-0.5 hover:bg-accent/50 transition-colors rounded-sm text-primary", className)} {...props}

    />
}
export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] flex flex-col gap-2">
            <h2 className="font-caption text-5xl text-primary font-bold">Agathe Diouf</h2>
            <h3 className="font-caption text-xl">
                Conceptrice - développeuse d'applications web
            </h3>
            <p className="text-base mt-2">
                
                Je conçois et développe des applications (sites) web sur mesure et adaptées à votre besoin. J'accompagne les projets du début à la fin pour offrir des expériences utilisateurs fluides et innovantes. Découvrez mes <Code className="inline-flex items-center gap-1">réalisations</Code> et <Code className="inline-flex items-center gap-1">contactez-moi</Code> pour discuter de vos projets web.
                
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
            <img src="/img/mon-profil.jpg" alt="Photo de profil de Agathe Diouf" className="rounded-fulls h-52s w-52s w-full h-auto max-w-xs max-md:w-56 rounded-full"/>
        </div>
    </Section>
}