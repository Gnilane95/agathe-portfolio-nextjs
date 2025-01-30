import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Realisations = () => {
    return (
    <Section className="flex flex-col items-start gap-4" id="mes-realisations">
        <Badge variant='outline'>Expériences</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">Mes réalisations</h2>
        <div className="md:grid md:grid-cols-3 md:gap-6 flex flex-col gap-4">
            {WORKS.map((work, index)=>
                (
                <Card key={index} className="">
                    <div className="flex flex-col gap-2 flex-1">
                        
                        <Work
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
        image : "/img/mes-realisations/realisation-agathe.png",
        title : "Portfolio Agathe Diouf",
        role : "Développé avec NextJs/TailwindCss",
        date : "janvier 2025",
        url : "/",
    },
    {
        image : "/img/mes-realisations/realisation-essoham.png",
        title : "Portfolio Essoham Ali",
        role : "Développé avec NextJs et TailwindCss",
        date : "2022, refonte en janvier 2025",
        url : "https://www.aliessoham-maths.fr/",
        freelance : true,
    },
    {
        image : "/img/mes-realisations/realisation-cfrsd.png",
        title : "Site vitrine pour le CFRSD/Sénégal",
        role : "Développé avec WordPress/Kadence",
        date : "2024",
        url : "https://cfrsd.com/",
        freelance : true,
    },
    {
        image : "/img/mes-realisations/realisation-autrive.png",
        title : "Site vitrine pour Edouard Autrive, Gestalt praticien",
        role : "Créé avec Wix",
        date : "2024",
        url : "https://www.edouardautrivegestalt.com/",
        freelance : true,
    },
    {
        image : "/img/mes-realisations/realisation-trecu.png",
        title : "Site vitrine et de réservation pour Mathilde Trécu, Gestalt praticienne",
        role : "Créé avec Wix",
        date : "2024",
        url : "https://www.mathildetrecu.fr/",
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
            <Image
            src={props.image} 
            alt={props.title}
            width={350}
            height={0}
            className="rounded object-cover p-2"/>
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