import type { PortfolioItem } from "../types";
import { RowItemCard } from "./RowItemCard";

export function Row({ title, items }: { title: string; items: PortfolioItem[] }) {
    return (
        <section className="mt-10 space-y-3">
            <div className="px-6 sm:px-10">
                <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
            </div>

            <div className="no-scrollbar overflow-x-auto px-4 sm:px-8">
                <div className="flex gap-3">
                    {items.map((item) => (
                        <div key={item.id} className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px]">
                            <RowItemCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
