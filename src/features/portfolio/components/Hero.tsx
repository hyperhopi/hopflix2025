import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/videos/mario-fighting.mp4";

export function Hero() {
    return (
        <section className="relative">
            <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
                {/* Video background */}
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/20 to-transparent" />

                {/* (optional) subtle glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.25),transparent_55%),radial-gradient(circle_at_bottom,hsl(var(--accent)/0.20),transparent_55%)]" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-end px-6 pb-10 sm:px-10">
                    <div className="max-w-2xl space-y-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                            Hopi the Swiss Knife · Software Development · L&amp;D · Project Management
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Designing learning-first software experiences
                        </h1>
                        <p className="text-sm text-muted-foreground sm:text-base">
                            Building platforms and academies that feel as intuitive as your favourite streaming service.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <Button size="lg" className="font-semibold">
                                ▶ Play reel
                            </Button>
                            <Button size="lg" variant="outline" className="font-semibold">
                                More info
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}