import { Section } from "./Section";
export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start">
        <div className="flex-[2]">
            <h2 className="font-caption text-4xl">Agathe Diouf</h2>
            <h3>
                Conceptrice - développeuse d'applications web
            </h3>
            <p>
                Je suis Agathe DIOUF, conceptrice et développeuse d'applications web passionnée par la création de solutions digitales performantes et intuitives. Spécialisée dans la conception d'interfaces utilisateur élégantes et l'intégration de technologies modernes, j'accompagne les projets du début à la fin pour offrir des expériences utilisateurs fluides et innovantes. Découvrez mes réalisations et contactez-moi pour discuter de vos projets web.
            </p>
        </div>
        <div className="flex-1">
            <img src="/img/mon-profil.jpg" alt="Photo de profil de Agathe Diouf" className="rounded-full h-52 w-52"/>
        </div>
    </Section>
}