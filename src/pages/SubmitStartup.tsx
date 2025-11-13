import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Rocket, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const SubmitStartup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    fullDescription: "",
    category: "",
    fundingGoal: "",
    founder: "",
    founderTitle: "",
    timeline: "",
    highlights: ["", "", "", ""],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.description || !formData.category || !formData.fundingGoal) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Get existing startups from localStorage
    const existingStartups = JSON.parse(localStorage.getItem("userStartups") || "[]");
    
    // Create new startup object
    const newStartup = {
      id: `user-${Date.now()}`,
      name: formData.name,
      description: formData.description,
      fullDescription: formData.fullDescription || formData.description,
      category: formData.category,
      fundingGoal: parseInt(formData.fundingGoal),
      currentFunding: 0,
      backers: 0,
      image: "/placeholder.svg", // Default placeholder image
      founder: formData.founder || "Anonymous",
      founderTitle: formData.founderTitle || "Founder",
      timeline: formData.timeline || "Coming soon",
      highlights: formData.highlights.filter(h => h.trim() !== ""),
    };

    // Save to localStorage
    existingStartups.push(newStartup);
    localStorage.setItem("userStartups", JSON.stringify(existingStartups));

    toast.success("Your startup has been submitted successfully!");
    navigate("/");
  };

  const handleHighlightChange = (index: number, value: string) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData({ ...formData, highlights: newHighlights });
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Rocket className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Submit Your Startup</h1>
                <p className="text-muted-foreground">Share your vision with potential investors</p>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Basic Information</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Startup Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="e.g., NeuralSync AI"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">
                    Category <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                    required
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Green Energy">Green Energy</SelectItem>
                      <SelectItem value="Finance">Finance</SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Short Description <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="A brief one-line description of your startup (max 150 characters)"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="bg-background"
                    maxLength={150}
                    required
                  />
                  <p className="text-xs text-muted-foreground">{formData.description.length}/150</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullDescription">Full Description</Label>
                  <Textarea
                    id="fullDescription"
                    placeholder="Tell investors more about your startup, your mission, and what makes you unique"
                    value={formData.fullDescription}
                    onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                    className="bg-background min-h-32"
                  />
                </div>
              </div>

              {/* Funding Goal */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold">Funding Goal</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="fundingGoal">
                    Target Amount (USD) <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fundingGoal"
                    type="number"
                    placeholder="e.g., 500000"
                    value={formData.fundingGoal}
                    onChange={(e) => setFormData({ ...formData, fundingGoal: e.target.value })}
                    className="bg-background"
                    min="1000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Expected Timeline</Label>
                  <Input
                    id="timeline"
                    placeholder="e.g., Launch in Q2 2024"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>

              {/* Founder Information */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold">Founder Information</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="founder">Your Name</Label>
                  <Input
                    id="founder"
                    placeholder="e.g., Sarah Chen"
                    value={formData.founder}
                    onChange={(e) => setFormData({ ...formData, founder: e.target.value })}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="founderTitle">Your Title</Label>
                  <Input
                    id="founderTitle"
                    placeholder="e.g., CEO & Co-founder"
                    value={formData.founderTitle}
                    onChange={(e) => setFormData({ ...formData, founderTitle: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold">Key Highlights</h2>
                <p className="text-muted-foreground text-sm">
                  Add up to 4 key achievements or selling points
                </p>
                
                {formData.highlights.map((highlight, index) => (
                  <div key={index} className="space-y-2">
                    <Label htmlFor={`highlight-${index}`}>Highlight {index + 1}</Label>
                    <Input
                      id={`highlight-${index}`}
                      placeholder={`e.g., ${index === 0 ? "10x faster than competitors" : index === 1 ? "Serving 15 Fortune 500 companies" : index === 2 ? "99.9% accuracy rate" : "Patents pending"}`}
                      value={highlight}
                      onChange={(e) => handleHighlightChange(index, e.target.value)}
                      className="bg-background"
                    />
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-border">
                <Button type="submit" variant="hero" size="lg" className="w-full gap-2">
                  <Rocket className="h-5 w-5" />
                  Submit Your Startup
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting, you agree to our terms and conditions
                </p>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </>
  );
};

export default SubmitStartup;
