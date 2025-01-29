import { Section } from "./Section";
import { Button, buttonVariants } from "@/components/ui/button";
import { GitHubicon } from "./icons/githubicon";
import { Linkdinicon } from "./icons/Linkdinicon";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
    return (
        <header className="sticky top-0 border border-gray-600 bg-customBgHeader py-4 ">
            <Section className="flex items-baseline">
                <Link href="/">
                    <h1 className="text-lg font-bold text-primary">
                        agathe.diouf
                    </h1> 
                </Link>
                <div className="flex-1"/>
                    <ul className="flex items-center gap-2">
                        <Link href="https://github.com/Gnilane95" className={cn(buttonVariants({variant:"outline"}), "size-6 p-0")}>
                            <GitHubicon size={16} className="text-foreground"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/agathe-diouf/" className={cn(buttonVariants({variant:"outline"}), "size-6 p-0")}>
                            <Linkdinicon size={16} className="text-foreground"/>
                        </Link>
                    </ul>
            </Section>
        </header>
    )
}