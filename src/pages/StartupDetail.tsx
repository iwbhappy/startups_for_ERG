import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Users, Target, CheckCircle2, Calendar } from "lucide-react";
import { getAllStartups } from "@/data/startups";

const StartupDetail = () => {
  const { id } = useParams();
  const allStartups = getAllStartups();
  const startup = allStartups.find((s) => s.id === id);

  if (!startup) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Startup Not Found</h1>
          <Link to="/">
            <Button variant="default">Return Home</Button>
          </Link>
        </div>
      </>
    );
  }

  const percentFunded = Math.round((startup.currentFunding / startup.fundingGoal) * 100);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to all startups
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Hero Image */}
              <div className="relative h-96 rounded-xl overflow-hidden shadow-elevated">
                <img
                  src={startup.image}
                  alt={startup.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground text-base px-4 py-2">
                  {startup.category}
                </Badge>
              </div>

              {/* Title & Description */}
              <div>
                <h1 className="text-4xl font-bold mb-4">{startup.name}</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {startup.description}
                </p>
                <p className="text-foreground leading-relaxed">
                  {startup.fullDescription}
                </p>
              </div>

              {/* Highlights */}
              <Card className="p-6 bg-gradient-card border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                  Key Highlights
                </h2>
                <ul className="space-y-3">
                  {startup.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Founder */}
              <Card className="p-6 bg-card border-border">
                <h2 className="text-2xl font-bold mb-4">Meet the Founder</h2>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-hero flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    {startup.founder.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{startup.founder}</div>
                    <div className="text-muted-foreground">{startup.founderTitle}</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar - Funding Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-border sticky top-24">
                <div className="space-y-6">
                  {/* Funding Progress */}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-3xl font-bold text-primary">
                        ${startup.currentFunding.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">
                        of ${startup.fundingGoal.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden mb-4">
                      <div
                        className="h-full bg-gradient-hero rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(percentFunded, 100)}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <TrendingUp className="h-4 w-4" />
                        <span>{percentFunded}% funded</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{startup.backers} backers</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">{startup.timeline}</span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Button variant="hero" size="lg" className="w-full gap-2">
                      <Target className="h-5 w-5" />
                      Invest Now
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      Contact Founder
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-6 border-t border-border space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>Verified business plan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>Legal compliance checked</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>Founder identity verified</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default StartupDetail;
