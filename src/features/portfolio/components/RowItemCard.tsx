import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import type { PortfolioItem } from "../types";

export function RowItemCard({ item }: { item: PortfolioItem }) {
    return (
        <HoverCard openDelay={80} closeDelay={120}>
            <HoverCardTrigger asChild>
                <Card className="group relative overflow-hidden border-0 bg-card/60 shadow-sm transition-transform hover:scale-[1.03]">
                    <div className="relative aspect-video w-full">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.25),transparent_55%)] opacity-70 transition-opacity group-hover:opacity-100" />
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                        <div className="absolute inset-3 flex flex-col justify-end gap-1">
                            <span className="inline-flex w-fit rounded-full bg-background/50 px-2 py-1 text-[0.65rem] font-medium uppercase tracking-[0.22em]">
                                {item.tag}
                            </span>
                            <h3 className="line-clamp-2 text-sm font-semibold">{item.title}</h3>
                        </div>
                    </div>
                </Card>
            </HoverCardTrigger>

            <HoverCardContent className="w-[min(420px,95vw)] border-border bg-background/95 p-0 shadow-2xl">
                <div className="relative aspect-video w-full overflow-hidden bg-card/60">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.35),transparent_55%)]" />
                </div>
                <div className="space-y-2 border-t border-border/60 p-4">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                    <p className="text-[0.7rem] text-muted-foreground/80">{item.meta}</p>

                    <div className="mt-3 flex items-center gap-2">
                        <Button size="sm" className="h-8 px-4 text-xs font-semibold">
                            Play
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 rounded-full p-0 text-xs">
                            +
                        </Button>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
