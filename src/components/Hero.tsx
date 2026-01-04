import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              Experts en signalétique lumineuse
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Illuminez votre{" "}
            <span className="gradient-neon-text">marque</span>
            <br />
            avec style
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Autocollants, Neonflex, Enseignes lumineuses & Cadres photo LED.
            Nous donnons vie à vos idées avec des solutions publicitaires créatives et impactantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="neon" size="lg">
              Voir nos réalisations
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="neon-outline" size="lg">
              Demander un devis
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary text-glow-primary">
                500+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Projets réalisés</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary text-glow-secondary">
                12+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Années d'expérience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent text-glow-accent">
                98%
              </div>
              <div className="text-sm text-muted-foreground mt-1">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
