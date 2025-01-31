import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
export const ContactCard = (props : {
    image : string,
    mediumImage : string,
    name : string,
    description : string,
    url?: string

}) =>{
    return(
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <Card className="p-3.5 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4 h-20">
                <div className="relative w-10 h-10">
                    <Image
                        src={props.image}
                        alt={props.name}
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                    />
                    <Image
                        src={props.mediumImage}
                        alt={props.name}
                        width={15}
                        height={15}
                        className="absolute -bottom-1 -right-1 rounded-full object-contain"
                    />
                </div>
                <div className="flex-1">
                    <div className="">
                        <p className="text-lg font-semibold">
                            {props.name}
                        </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {props.description}
                    </p>
                </div>
                <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform mr-2" size={16}/>
            </Card>
        </a>
    )
}