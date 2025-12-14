import { Hero } from "@/features/portfolio/components/Hero";
import { Row } from "@/features/portfolio/components/Row";
import { portfolioRows } from "@/features/portfolio/data/portfolioData";

export default function Index() {
    return (
        <div className="dark min-h-screen bg-background text-foreground">
            <Hero />
            <main className="pb-16">
                {portfolioRows.map((row) => (
                    <Row key={row.id} title={row.title} items={row.items} />
                ))}
            </main>

            <footer className="border-t border-border/60 px-6 py-4 text-xs text-muted-foreground sm:px-10">
                © {new Date().getFullYear()} Hopi. All rights reserved.
            </footer>
        </div>
    );
}
