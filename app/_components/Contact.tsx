import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { ContactCard } from "../_components/ContactCard";

export const Contact = () => {
    return <Section id="me-contacter" className="flex flex-col items-start gap-4">
    <Badge variant='outline'>Contactez-moi</Badge>
   <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Je serais heureux de travailler avec vous !
    </h2>
    <div className="md:grid md:grid-cols-3 md:gap-6 flex max-md:flex-col gap-4 w-full">
        <ContactCard
            name="agathe.diouf"
            image="/img/mon-profil.jpg"
            mediumImage="/img/gmail.png"
            description="agathe.ali20
            @gmail.com"
        />
        <ContactCard
            name="agathe.diouf"
            image="/img/mon-profil.jpg"
            mediumImage="/img/logo-linkedin-rond.png"
            description="168"
        />
        <ContactCard
            name="Angers"
            image="/img/mon-profil.jpg"
            mediumImage="https://img.freepik.com/vecteurs-libre/emplacement-epingle-rouge-moitie-ombre_78370-8193.jpg?semt=ais_hybrid"
            description="49000"
        />
    </div>
</Section>
}