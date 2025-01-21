import { Section } from "./Section";
import { Button, buttonVariants } from "@/components/ui/button";
import { GitHubicon } from "./icons/githubicon";
import { Linkdinicon } from "./icons/Linkdinicon";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4 ">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    agathe.com
                </h1> 
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