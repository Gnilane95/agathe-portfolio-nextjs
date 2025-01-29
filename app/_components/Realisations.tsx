import { Card } from "@/components/ui/card";
import { ArrowUpRight, Code, LucideIcon, MessageCircle, Rss, StickyNote, Weight } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

export const Realisations = () => {
    return (
    <Section className="">
        <h2 className="font-caption text-5xl text-primary font-bold">Mes réalisations</h2>
        <div className="md:grid md:grid-cols-2 flex max-md:flex-col gap-4">
            {WORKS.map((work, index)=>
                (
                <Card className="p-4">
                    <div className="flex flex-col">
                        
                        <Work
                            key={index}
                            {...work}
                            />
                    </div>
                </Card>
            ))}
        </div>
    </Section>
    );
};

const WORKS : WorkProps[] = [
    {
        image : "/img/mes-realisations/realisation-essoham.png",
        title : "Portfolio Essoham Ali",
        role : "Développer avec NextJs et TailwindCss",
        date : "2022, refonte en janvier 2025",
        url : "https://www.aliessoham-maths.fr/",
        freelance : true,
    },
    {
        image : "/img/mes-realisations/realisation-cfrsd.png",
        title : "Site vitrine pour le CFRSD/Sénégal",
        role : "Développer WordPress/Kadence",
        date : "2024",
        url : "https://cfrsd.com/",
        freelance : true,
    },
    {
        image : "/img/mes-realisations/realisation-autrive.png",
        title : "Site vitrine pour Edouard Autrive, Gestalt praticien",
        role : "Créer avec Wix",
        date : "2024",
        url : "https://www.edouardautrivegestalt.com/",
        freelance : true,
    },
    {
        image : "/img/mes-realisations/realisation-trecu.png",
        title : "Site vitrine et de réservation pour Mathilde Trécu, Gestalt praticienne",
        role : "Créer avec Wix",
        date : "2024",
        url : "https://www.edouardautrivegestalt.com/",
        freelance : true,
    },
]
type WorkProps = {
    image : string,
    title : string,
    role: string,
    date : string,
    url: string,
    freelance?: boolean,
};
const Work = (props : WorkProps) => {
    return (
        <Link href={props.url} className="flex flex-col justify-center items-center hover:bg-accent/50 transition-colors p-1 rounded">
                <img 
                src={props.image} 
                alt={props.title} 
                className="w-full rounded"/>
            <div className="text-center">
                <div className="">
                    <p className="text-lg font-semibold">
                        {props.title}
                    </p>
                    {props.freelance && <Badge variant="outline">Mission</Badge>}
                </div>
                <p className="text-lg text-muted-foreground">
                    {props.role}
                </p>
                <p className="text-lg text-muted-foreground">
                    {props.date}
                </p>
            </div>
        </Link>
        
    );
}