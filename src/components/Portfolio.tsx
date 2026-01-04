import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    title: "Restaurant Le Bistrot",
    category: "Enseigne Lumineuse",
    image: project1,
  },
  {
    title: "Boutique Mode",
    category: "Vitrophanie",
    image: project2,
  },
  {
    title: "Siège Social Tech",
    category: "Signalétique Corporate",
    image: project3,
  },
  {
    title: "Bar Lounge",
    category: "Neonflex LED",
    image: project4,
  },
  {
    title: "Flotte Livraison Express",
    category: "Covering Véhicule",
    image: project5,
  },
  {
    title: "Galerie d'Art",
    category: "Cadres Lumineux",
    image: project6,
  },
];

export function Portfolio() {
  return (
    <section id="realisations" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Nos <span className="gradient-neon-text">réalisations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de projets réalisés pour nos clients. Chaque création est unique et sur-mesure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-card cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-primary text-sm font-medium mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h3>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
