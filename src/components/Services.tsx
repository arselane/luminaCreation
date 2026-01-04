import { Sticker, Lightbulb, Frame, Sparkles } from "lucide-react";
import stickersImg from "@/assets/service-stickers.jpg";
import neonflexImg from "@/assets/service-neonflex.jpg";
import signsImg from "@/assets/service-signs.jpg";
import framesImg from "@/assets/service-frames.jpg";

const services = [
  {
    icon: Sticker,
    title: "Autocollants",
    description:
      "Stickers personnalisés haute qualité pour toutes surfaces. Vinyle, micro-perforé, adhésif repositionnable.",
    image: stickersImg,
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Neonflex LED",
    description:
      "Signalétique moderne et flexible. Effet néon avec technologie LED économique et durable.",
    image: neonflexImg,
    color: "secondary",
  },
  {
    icon: Lightbulb,
    title: "Enseignes Lumineuses",
    description:
      "Caissons lumineux, lettres découpées LED, totems. Visibilité maximale jour et nuit.",
    image: signsImg,
    color: "accent",
  },
  {
    icon: Frame,
    title: "Cadres Lumineux",
    description:
      "Cadres photo rétroéclairés LED. Sublimez vos images avec un éclairage professionnel.",
    image: framesImg,
    color: "primary",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Des solutions pour <span className="gradient-neon-text">chaque besoin</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De la conception à l'installation, nous vous accompagnons dans tous vos projets de communication visuelle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 -mt-16">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
                    service.color === "primary"
                      ? "bg-primary/20 text-primary box-glow-primary"
                      : service.color === "secondary"
                      ? "bg-secondary/20 text-secondary box-glow-secondary"
                      : "bg-accent/20 text-accent box-glow-accent"
                  }`}
                >
                  <service.icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  service.color === "primary"
                    ? "bg-primary/5"
                    : service.color === "secondary"
                    ? "bg-secondary/5"
                    : "bg-accent/5"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
