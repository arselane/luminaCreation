import { Sparkles, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#accueil" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-neon-text">
                LumiSign
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Experts en signalétique lumineuse et communication visuelle depuis plus de 12 ans. De la conception à l'installation, nous illuminons votre marque.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Autocollants
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Neonflex LED
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Enseignes Lumineuses
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Cadres Lumineux
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>+33 1 23 45 67 89</li>
              <li>contact@lumisign.fr</li>
              <li>123 Avenue de la Lumière</li>
              <li>75001 Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 LumiSign. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
