import { Button } from "@/components/ui/button";
import { TrendingUp, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            GoInvest
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Explore Startups
          </Button>
          <Button variant="ghost" size="sm">
            For Investors
          </Button>
          <Link to="/submit-startup">
            <Button variant="outline" size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Submit Idea
            </Button>
          </Link>
          <Button variant="default" size="sm">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};
