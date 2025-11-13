import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

interface StartupCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  fundingGoal: number;
  currentFunding: number;
  backers: number;
  image: string;
}

export const StartupCard = ({
  id,
  name,
  description,
  category,
  fundingGoal,
  currentFunding,
  backers,
  image,
}: StartupCardProps) => {
  const percentFunded = Math.round((currentFunding / fundingGoal) * 100);
  
  return (
    <Card className="overflow-hidden group hover:shadow-elevated transition-all duration-300 bg-gradient-card border-border">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-semibold text-primary">
              ${currentFunding.toLocaleString()}
            </span>
            <span className="text-muted-foreground">
              of ${fundingGoal.toLocaleString()}
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-hero rounded-full transition-all duration-500"
              style={{ width: `${Math.min(percentFunded, 100)}%` }}
            />
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            <span>{percentFunded}% funded</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{backers} backers</span>
          </div>
        </div>
        
        <Link to={`/startup/${id}`} className="block">
          <Button className="w-full gap-2" variant="default">
            <Target className="h-4 w-4" />
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};
