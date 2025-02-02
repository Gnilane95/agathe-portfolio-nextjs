import { Card } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import { ContactCard } from "../_components/ContactCard";
import Link from "next/link";
import { Section } from "./Section";
import { Code } from "../_components/Code";
import Image from "next/image";

export const Status = () => {
    return (
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
            <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">
                    Expériences
                </p>
                <div className="flex flex-col gap-4">
                {WORKS.map((work, index)=>
                    (
                      <Work
                      key={index}
                        {...work}
                        />
                    
                    ))}
                </div>
                <Link href="#mes-realisations" className="text-base  "><Code className="mt-2 px-3 items-center inline-flex gap-1">Voir mes réalisations<ArrowDown/> </Code></Link>
                
            </Card>
        </div>
        <div className="flex-[2] flex flex-col w-full">
            <Card className="p-4 flex-1f flex flex-col gap-2.5">
                <p className="text-lg text-muted-foreground">
                    Contactez-moi
                </p>
                <ContactCard
                    url={`mailto:${"agathe" + "." + "ali20"}@${"gmail.com"}`}
                    name="agathe.diouf"
                    image="/img/mon-profil.jpg"
                    mediumImage="/img/gmail.png"
                    description="agathe.ali20@gmail.com"
                />
                <ContactCard
                    url="https://www.linkedin.com/in/agathe-diouf/"
                    name="Agathe Diouf"
                    image="/img/mon-profil.jpg"
                    mediumImage="/img/logo-linkedin-rond.png"
                    description="168"
                />
            </Card>
        </div>
    </Section>
    );
};

const WORKS : WorkProps[] = [
    {
        image : "/favicon.ico",
        title : "Portfolio dev. web",
        role : "NextJs/TailwindCss",
        date : "janvier 2025",
        url : "/",
    },
    {
        image : "/img/logo-essoham.png",
        title : "Portfolio enseignant",
        role : "NextJs/TailwindCss",
        date : "janvier 2025",
        url : "https://www.aliessoham-maths.fr/",
        freelance : true,
    },
    // {
    //     image : "/img/Logo_CFRSD.png",
    //     title : "Site vitrine pour le CFRSD",
    //     role : "WordPress/Kadence",
    //     date : "2024",
    //     url : "https://cfrsd.com/",
    //     freelance : true,
    // },
    // {
    //     image : "/img/Logo seul Arbre balacoire.png",
    //     title : "Site vitrine pour Edouard Autrive, Gestalt praticien",
    //     role : "Développeuse Wix",
    //     date : "2024",
    //     url : "https://www.edouardautrivegestalt.com/",
    //     freelance : true,
    // },
    // {
    //     image : "/img/Minimal_Tree_of_Life_Illustrated_Logo_For_Organic_Spices_Brand-removebg-preview (1).png",
    //     title : "Site vitrine et de réservation pour Mathilde Trécu, Gestalt praticienne",
    //     role : "Développeuse Wix",
    //     date : "2024",
    //     url : "https://www.edouardautrivegestalt.com/",
    //     freelance : true,
    // },
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
            <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
                    
                <Image
                    src={props.image}
                    alt={props.title}
                    width={40}
                    height={40}
                    className="bg-white rounded object-contain"
                />
                <div>
                    <div className="">
                        {/* {props.freelance && <Badge variant="outline">Mission</Badge>} */}
                        <p className="text-lg font-semibold">
                            {props.title}
                        </p>
                    </div>
                    <div className="flex md:space-x-28 md:flex-row flex-col">
                        <p className="text-lg text-muted-foreground">
                            {props.role}
                        </p>
                        <p className="text-lg text-muted-foreground ">
                            {props.date}
                        </p>
                    </div>
                </div>
            </Link>
    );
}