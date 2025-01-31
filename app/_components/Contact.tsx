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
            url="mailto:agathe.ali20@gmail.com"
            name="agathe.diouf"
            image="/img/mon-profil.jpg"
            mediumImage="/img/gmail.png"
            description="agathe.ali20
            @gmail.com"
        />
        <ContactCard
            url="https://www.linkedin.com/in/agathe-diouf/"
            name="agathe.diouf"
            image="/img/mon-profil.jpg"
            mediumImage="/img/logo-linkedin-rond.png"
            description="168"
        />
        <ContactCard
            url="https://www.google.com/maps/place/Angers/@47.4819825,-0.6453357,12z/data=!3m1!4b1!4m6!3m5!1s0x480878da00e58e9d:0x40d37521e0d9c30!8m2!3d47.4711616!4d-0.5518257!16zL20vMGw0bGo?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
            name="Angers"
            image="/img/mon-profil.jpg"
            mediumImage="https://img.freepik.com/vecteurs-libre/emplacement-epingle-rouge-moitie-ombre_78370-8193.jpg?semt=ais_hybrid"
            description="49000"
        />
    </div>
</Section>
}