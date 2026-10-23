import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SearchFilters, categories } from "@/components/SearchFilters";
import { StartupCard } from "@/components/StartupCard";
import { getAllStartups } from "@/data/startups";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allStartups, setAllStartups] = useState(getAllStartups());

  // Refresh startups when component mounts or localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setAllStartups(getAllStartups());
    };
    
    window.addEventListener("storage", handleStorageChange);
    // Also refresh on focus in case user submitted in another tab
    window.addEventListener("focus", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("focus", handleStorageChange);
    };
  }, []);

  const filteredStartups = selectedCategory === "All" 
    ? allStartups 
    : allStartups.filter(startup => startup.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SearchFilters 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {selectedCategory === "All"
                ? "Все стартапы"
                : `${categories.find(c => c.value === selectedCategory)?.label || selectedCategory} стартапы`}
            </h2>
            <p className="text-muted-foreground">
              {filteredStartups.length} инновационных проектов ищут финансирование
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map((startup) => (
            <StartupCard key={startup.id} {...startup} />
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-bold text-xl mb-4 bg-gradient-hero bg-clip-text text-transparent">
                GoInvest
              </h3>
              <p className="text-muted-foreground mb-4">
                Соединяем перспективные стартапы с дальновидными инвесторами, чтобы строить будущее.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для стартапов</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Разместить стартап</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Истории успеха</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Ресурсы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для инвесторов</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Руководство по инвестициям</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Часто задаваемые вопросы</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            © 2024 GoInvest. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
