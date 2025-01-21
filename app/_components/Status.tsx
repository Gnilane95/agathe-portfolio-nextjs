import { Card } from "@/components/ui/card";
import { Code, LucideIcon, MessageCircle, Rss, StickyNote, Weight } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

export const Status = () => {
    return (
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
            <Card className="w-full flex flex-col gap-2 p-4">
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
            </Card>
        </div>
        <div className="flex-[2] flex flex-col gap-4 w-full">
            <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">
                    Work
                </p>
            </Card>
            <Card className="p-4 flex-1">
                Contact me
            </Card>
        </div>
    </Section>
    );
};

const SIDE_PROJECTS =[
    {
        Logo : Code,
        title : "CodeLine",
        description : "A plateform for developpers to share their work",
    },
    {
        Logo : StickyNote,
        title : "PowerNote",
        description : "A plateform for developpers to share their work",
    },
    {
        Logo : Rss,
        title : "PowerPost",
        description : "A plateform for developpers to share their work",
    },
    {
        Logo : MessageCircle,
        title : "Chat2Code",
        description : "A plateform for developpers to share their work",
    },
    {
        Logo : Weight,
        title : "LinkedLeads",
        description : "A plateform for developpers to share their work",
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