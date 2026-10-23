import { Button } from "@/components/ui/button";
import { Search, Zap, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Предприниматели, сотрудничающие" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">Соединяем инновации с капиталом</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Финансируйте будущее
            <span className="bg-gradient-hero bg-clip-text text-transparent"> инноваций</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Откройте прорывные стартапы и свяжитесь с дальновидными инвесторами. Вместе создадим следующее поколение лидирующих компаний.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="hero" size="lg" className="gap-2">
              <Search className="h-5 w-5" />
              Исследовать стартапы
            </Button>
            <Link to="/submit-startup">
              <Button variant="outline" size="lg" className="gap-2 bg-card/80 backdrop-blur-sm">
                <Plus className="h-5 w-5" />
                Отправить идею
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Активные стартапы</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">$2.5M</div>
              <div className="text-sm text-muted-foreground">Всего профинансировано</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">89%</div>
              <div className="text-sm text-muted-foreground">Уровень успеха</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
