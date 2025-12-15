import { Hero } from "@/features/portfolio/components/Hero";
import { Row } from "@/features/portfolio/components/Row";
import { portfolioRows } from "@/features/portfolio/data/portfolioData";

export default function Index() {
    return (
        <div className="dark min-h-screen bg-background text-foreground">
            <div className="relative">
                <Hero />

                <main className="relative z-20 pb-16 -mt-20 min-[344px]:-mt-16 min-[540px]:-mt-28 min-[768px]:-mt-28 min-[820px]:-mt-44 min-[1024px]:-mt-40 min-[1280px]:-mt-24">
                    {portfolioRows.map((row) => (
                        <Row key={row.id} title={row.title} items={row.items} />
                    ))}
                </main>
            </div>

            <footer className="border-t border-border/60 px-6 py-4 text-xs text-muted-foreground sm:px-10">
                © {new Date().getFullYear()} Hopi. All rights reserved.
            </footer>
        </div>
    );
}