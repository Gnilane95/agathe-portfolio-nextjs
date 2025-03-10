import Link from "next/link";
import { Section } from "./Section";
export const Footer = () => {
    return <footer className="bg-card">
        <Section className="py-8">
            <p className="text-muted-foreground text-sm">
                @copyright (c) 2025 <Link href="https://www.google.fr/search?sca_esv=0811c151fdd62095&sxsrf=AHTn8zoNSjRKtUnyie5R7holXW9avgCsMw:1741612836155&q=Agathe+Diouf&si=APYL9bs58n_Uidldad2oXlAbqp9FodGWlAyCGPW7LxTcJUx92Hy0b5SJNTH4Ft81-do0BB8-rUz4n9AAyBynYCrLeCTUKTOe75JFQ5B68gd4eyj-P5Pw08hIuYOVsIt19BPMcDNvxe5-sWxEdZcze9wuXilO7ficBrGmr4BK4LiFH9fMdfa7rvspEa-YA_vuJTL-kEO58Kvfxpu0PQJLkrPaRqykilH9nr78nx6OjFluWpfhVd4TkD5iRUkwc2Os1w1xYXNq1BGJNphrsgJG1kmqYQJJSxGZI2xRW3R_2PDivuRXux-jZCQ%3D&sa=X&ved=2ahUKEwjboL2zzf-LAxXfK_sDHZx9N7oQ6RN6BAgYEAE&biw=1536&bih=695&dpr=1.25">Agathe Diouf</Link>
            </p>
        </Section>
    </footer>
}