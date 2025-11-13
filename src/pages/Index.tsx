import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SearchFilters } from "@/components/SearchFilters";
import { StartupCard } from "@/components/StartupCard";
import { startups } from "@/data/startups";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStartups = selectedCategory === "All" 
    ? startups 
    : startups.filter(startup => startup.category === selectedCategory);

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
              {selectedCategory === "All" ? "All Startups" : `${selectedCategory} Startups`}
            </h2>
            <p className="text-muted-foreground">
              {filteredStartups.length} innovative projects seeking funding
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
                Connecting visionary startups with forward-thinking investors to build the future.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Startups</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">List Your Startup</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Investors</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Investment Guide</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            © 2024 GoInvest. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
