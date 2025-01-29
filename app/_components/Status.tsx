import { Card } from "@/components/ui/card";
import { Code, LucideIcon, MessageCircle, Rss, StickyNote, Weight } from "lucide-react";
import { ContactCard } from "../_components/ContactCard";
import Link from "next/link";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

export const Status = () => {
    return (
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
            {/* <Card className="w-full flex flex-col gap-2 p-4">
                <p className="text-lg text-muted-foreground">
                    Side, fun projects
                </p>
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECTS.map((project, index)=>
                    (
                      <SideProject
                        key={index}
                        Logo={project.Logo}
                        title={project.title}
                        description={project.description}
                        url="/"
                        />
                    ))}
                </div>
            </Card> */}
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
                <Link href="/mesRealisations" className="text-lg underline pt-3">Voir mes réalisations</Link>
            </Card>
        </div>
        <div className="flex-[2] flex flex-col gap-4 w-full">
            
            <Card className="p-4 flex-1f flex flex-col gap-4">
                <p className="text-lg text-muted-foreground">
                    Contactez-moi
                </p>
                <ContactCard
                    name="agathe.diouf"
                    image="/img/mon-profil.jpg"
                    mediumImage="/img/gmail.png"
                    description="agathe.ali20@gmail.com"
                />
                <ContactCard
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


const SIDE_PROJECTS : SideProjectProps[] =[
    {
        Logo : Code,
        title : "CodeLine",
        description : "A plateform for developpers to share their work",
        url : "/",
    },
    {
        Logo : StickyNote,
        title : "PowerNote",
        description : "A plateform for developpers to share their work",
        url : "/",
    },
    {
        Logo : Rss,
        title : "PowerPost",
        description : "A plateform for developpers to share their work",
        url : "/",
    },
    {
        Logo : MessageCircle,
        title : "Chat2Code",
        description : "A plateform for developpers to share their work",
        url : "/",
    },
    {
        Logo : Weight,
        title : "LinkedLeads",
        description : "A plateform for developpers to share their work",
        url : "/",
    },
]
type SideProjectProps = {
    Logo : LucideIcon,
    title : string,
    description: string,
    url: string,
};
const SideProject = (props : SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo/>
            </span>
            <div>
                <p className="text-lg font-semibold">
                    {props.title}
                </p>
                <p className="text-lg text-muted-foreground">
                    {props.description}
                </p>
            </div>
        </Link>
    );
}
const WORKS : WorkProps[] = [
    // {
    //     image : "/img/logo-agathe.png",
    //     title : "Portfolio Agathe Diouf",
    //     role : "Développeuse NextJs/TailwindCss",
    //     date : "janvier 2025",
    //     url : "/",
    // },
    {
        image : "/img/logo-essoham.png",
        title : "Portfolio Essoham Ali",
        role : "NextJs/TailwindCss",
        date : "janvier 2025",
        url : "https://www.aliessoham-maths.fr/",
        freelance : true,
    },
    {
        image : "/img/Logo_CFRSD.png",
        title : "Site vitrine pour le CFRSD",
        role : "WordPress/Kadence",
        date : "2024",
        url : "https://cfrsd.com/",
        freelance : true,
    },
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
                    <img 
                    src={props.image} 
                    alt={props.title} 
                    className="w-10 h-10 object-contain bg-white rounded"/>
                <div>
                    <div className="">
                        {/* {props.freelance && <Badge variant="outline">Mission</Badge>} */}
                        <p className="text-lg font-semibold">
                            {props.title}
                        </p>
                    </div>
                    <div className="flex gap-10">
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