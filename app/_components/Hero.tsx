import Link from "next/link";
import { Code } from "../_components/Code";
import { Section } from "./Section";
import Image from "next/image";

export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] flex flex-col gap-2">
            <h2 className="font-caption text-5xl text-primary font-bold">Agathe Diouf</h2>
            <h3 className="font-caption text-xl">
                Développeuse d&apos;applications web
            </h3>
            <p className="text-base mt-2">
                
                Sites vitrines, sites de réservation, sites e-commerce,..., refonte ou création de sites web, quelque soit votre idée, je la transforme en un site attrayant, optimisé et performant. Découvrez mes 
                <Link href="#mes-realisations" className="ml-1">
                    <Code className="inline-flex items-center gap-1 mr-1">réalisations</Code>
                </Link> 
                et/ou <Link href="#me-contacter"><Code className="inline-flex items-center gap-1">contactez-moi</Code></Link> pour discuter de votre projet.
                
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
            <div className="relative max-w-xs w-56 h-56 md:w-72 md:h-72 z-10">
                <Image 
                src="/img/mon-profil.jpg" 
                alt="Photo de profil de Agathe Diouf" 
                fill 
                className="rounded-full"
                />
            </div>
        </div>
    </Section>
}