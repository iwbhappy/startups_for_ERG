import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

export const categories = [
  { value: "All", label: "Все" },
  { value: "Technology", label: "Технологии" },
  { value: "Healthcare", label: "Здравоохранение" },
  { value: "Green Energy", label: "Зеленая энергия" },
  { value: "Finance", label: "Финансы" },
  { value: "Education", label: "Образование" },
];

interface SearchFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const SearchFilters = ({ selectedCategory, onCategoryChange }: SearchFiltersProps) => {
  return (
    <div className="bg-card border-y border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Поиск стартапов..." 
              className="pl-10 bg-background border-border"
            />
          </div>
          
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {categories.map((category) => (
              <Badge
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => onCategoryChange(category.value)}
              >
                {category.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
