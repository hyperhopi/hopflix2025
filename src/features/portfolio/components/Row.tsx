import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type Item = {
    title: string;
    subtitle: string;
    meta: string;
    tag: string;
};

type Props = {
    title: string;
    items: Item[];
};

export function Row({ title, items }: Props) {
    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(false);

    const update = () => {
        const el = scrollerRef.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        setCanLeft(el.scrollLeft > 2);
        setCanRight(el.scrollLeft < max - 2);
    };

    useEffect(() => {
        update();
        const el = scrollerRef.current;
        if (!el) return;

        const onScroll = () => update();
        el.addEventListener("scroll", onScroll, { passive: true });

        const ro = new ResizeObserver(() => update());
        ro.observe(el);

        return () => {
            el.removeEventListener("scroll", onScroll);
            ro.disconnect();
        };
    }, []);

    const scrollByPage = (dir: "left" | "right") => {
        const el = scrollerRef.current;
        if (!el) return;

        // “한 화면의 85%”만큼 이동 (Netflix 느낌)
        const delta = Math.floor(el.clientWidth * 0.85) * (dir === "left" ? -1 : 1);
        el.scrollBy({ left: delta, behavior: "smooth" });
    };

    return (
        <section className="relative mt-8 space-y-3">
            <div className="flex items-center justify-between px-6 sm:px-10">
                <h2 className="text-lg font-semibold tracking-tight sm:text-xl">{title}</h2>
            </div>

            {/* Row container */}
            <div className="group/row relative">
                {/* Left arrow */}
                <div className="pointer-events-none absolute left-0 top-0 z-20 hidden h-full w-16 sm:block">
                    <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-0 transition-opacity duration-200 group-hover/row:opacity-100" />
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => scrollByPage("left")}
                        className={[
                            "pointer-events-auto absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 backdrop-blur",
                            "opacity-0 transition-opacity duration-200 group-hover/row:opacity-100",
                            canLeft ? "" : "invisible",
                        ].join(" ")}
                        aria-label="Scroll left"
                    >
                        ‹
                    </Button>
                </div>

                {/* Right arrow */}
                <div className="pointer-events-none absolute right-0 top-0 z-20 hidden h-full w-16 sm:block">
                    <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent opacity-0 transition-opacity duration-200 group-hover/row:opacity-100" />
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => scrollByPage("right")}
                        className={[
                            "pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 backdrop-blur",
                            "opacity-0 transition-opacity duration-200 group-hover/row:opacity-100",
                            canRight ? "" : "invisible",
                        ].join(" ")}
                        aria-label="Scroll right"
                    >
                        ›
                    </Button>
                </div>

                {/* Scroll area */}
                <div
                    ref={scrollerRef}
                    className="no-scrollbar overflow-x-auto overflow-y-visible px-4 sm:px-8"
                >
                    <div className="flex gap-3 pb-2">
                        {items.map((item) => (
                            <div
                                key={item.title}
                                className="flex-none w-[clamp(220px,72vw,360px)] min-[540px]:max-[767px]:w-[clamp(230px,44vw,300px)] sm:w-[clamp(260px,42vw,420px)] lg:w-[clamp(300px,22vw,440px)] xl:w-[clamp(320px,16vw,420px)] 2xl:w-[clamp(320px,14vw,400px)]"
                            >
                                <div className="overflow-hidden rounded-xl bg-orange-500 shadow-lg transition-transform duration-200 hover:-translate-y-1">
                                    {/* ✅ aspect-video 제거 + 높이만 고정(이게 portrait/344/540 핵심) */}
                                    <div className="h-[156px] sm:h-[168px] lg:h-[180px] p-4 max-[360px]:p-3">
                                        <span className="inline-flex w-fit rounded-full bg-black/35 px-2 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-white sm:text-[0.7rem]">
                                            {item.tag}
                                        </span>

                                        <h3 className="mt-2 line-clamp-2 font-semibold leading-snug text-white text-[0.98rem] sm:text-base max-[360px]:text-[0.92rem] min-[540px]:max-[639px]:text-[0.95rem]">
                                            {item.title}
                                        </h3>

                                        <div className="mt-2 h-px w-full bg-black/30" />

                                        <p className="mt-2 line-clamp-2 text-[0.78rem] text-white/85 sm:text-sm max-[360px]:text-[0.74rem] min-[540px]:max-[639px]:text-[0.76rem]">
                                            {item.subtitle}
                                        </p>

                                        <p className="mt-1 line-clamp-1 text-[0.72rem] text-white/70 max-[360px]:text-[0.68rem]">
                                            {item.meta}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
