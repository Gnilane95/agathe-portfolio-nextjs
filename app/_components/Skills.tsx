import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { CodeXml, Paintbrush, Wrench } from "lucide-react";

export const Skills = () => {
    return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant='outline'>Compétences</Badge>
       <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Mes services
        </h2>
        <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2 flex-1">
                {/* <NextjsLogo size={42} className="animate-spin" style={{ animationDuration : "10s" }}/> */}
                <CodeXml size={52} />
                <h3 className="text-2xl font-semibold tracking-tight">Création</h3>
                <p className="text-sm text-muted-foreground">
                    Vous avez un projet de site web en tête ? Je vous accompagne de A à Z pour concevoir un site moderne, performant et adapté à vos besoins. Que ce soit un <span className="font-semibold">site vitrine</span>, un <span className="font-semibold">portfolio</span> ou une <span className="font-semibold">boutique en ligne</span>, je mets mon expertise en développement web au service de votre réussite en ligne.
                </p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <Paintbrush size={52} />
                <h3 className="text-2xl font-semibold tracking-tight">Refonte</h3>
                <p className="text-sm text-muted-foreground">Votre site actuel ne reflète plus votre image ou manque de performance ? Je vous aide à lui donner une nouvelle vie ! <span className="font-semibold">Amélioration du design</span>, <span className="font-semibold">optimisation des performances</span>, <span className="font-semibold">refonte UX/UI</span>… Je repense votre site pour qu’il soit plus attractif, rapide et efficace.</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <Wrench size={52} />
                <h3 className="text-2xl font-semibold tracking-tight">Maintenance</h3>
                <p className="text-sm text-muted-foreground">Un site web performant nécessite un suivi régulier. <span className="font-semibold">Mises à jour</span>, <span className="font-semibold">sécurité</span>, <span className="font-semibold">corrections de bugs</span>, <span className="font-semibold">amélioration du référencement</span>… Je veille à ce que votre site reste sécurisé, fonctionnel et toujours optimisé pour offrir la meilleure expérience à vos visiteurs.</p>
            </div>
        </div>
    </Section>
    );
};