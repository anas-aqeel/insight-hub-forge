
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PageHeader({ icon: Icon, title, description }: PageHeaderProps) {
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-vibrant-pink/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 animate-slide-in">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-4 border border-vibrant-pink/30">
            <Icon size={32} className="text-bright-orange" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{title}</h1>
          <p className="text-xl text-light-gray">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
