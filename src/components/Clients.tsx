import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice, Le Petit Bistrot",
    content:
      "L'équipe de LumiSign a transformé notre façade. L'enseigne lumineuse attire beaucoup plus de clients qu'avant. Travail impeccable et livré dans les délais.",
    rating: 5,
  },
  {
    name: "Marc Dubois",
    role: "CEO, TechStart SAS",
    content:
      "Professionnalisme exemplaire. Notre signalétique corporate est exactement ce que nous voulions. Le neonflex de notre salle de réunion fait sensation !",
    rating: 5,
  },
  {
    name: "Julie Leroy",
    role: "Propriétaire, Boutique Élégance",
    content:
      "Les vitrophanies sont magnifiques et la qualité des autocollants est impressionnante. Je recommande vivement leurs services.",
    rating: 5,
  },
];

const clients = [
  "Restaurant Le Gourmet",
  "TechVision Corp",
  "Boutique Chic",
  "Café de Paris",
  "Studio Design",
  "Hôtel Royal",
];

export function Clients() {
  return (
    <section id="clients" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Ce que disent nos <span className="gradient-neon-text">clients</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {clients.map((client) => (
              <div
                key={client}
                className="text-lg font-semibold text-muted-foreground/50 hover:text-primary transition-colors duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
