import { Check, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
    title: "Pricing & Plans | Axiom Academy",
    description: "Find the perfect Axiom Academy plan for your musical goals, whether you're a beginner or a seasoned professional.",
};

const pricingPlans = [
    {
        name: "Foundation",
        price: 49,
        interval: "month",
        description: "Perfect for beginners getting started with core instrument and theory basics.",
        features: [
            "Access to 5+ Core Courses",
            "Instrument Basics (Guitar, Piano, Vocals)",
            "Fundamental Music Theory",
            "Standard Video Quality",
            "Community Forum Access",
        ],
        highlight: false,
    },
    {
        name: "Pro Creator",
        price: 129,
        interval: "month",
        description: "Our most popular plan. All-access to premium content and production courses.",
        features: [
            "Everything in Foundation",
            "Access to ALL 50+ Courses",
            "Electronic Music Production Suite",
            "Advanced Mixing & Mastering",
            "Weekly Live Q&A with Instructors",
            "Downloadable Project Files & MIDI",
            "Exclusive Creator Templates",
        ],
        highlight: true,
    },
    {
        name: "Axiom Elite",
        price: 299,
        interval: "month",
        description: "For professionals and dedicated artists seeking mentorship and personalized critique.",
        features: [
            "Everything in Pro Creator",
            "Monthly 1-on-1 Mentorship Session (30 min)",
            "Personalized Feedback on 2 Tracks/Month",
            "Priority Support",
            "Exclusive Mastermind Group Access",
            "Lifetime Access to All Future Content",
        ],
        highlight: false,
    },
];

// Server Component
export default function PricingPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Simple, Transparent Pricing
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                    Choose the plan that fits your ambition. No hidden fees, just pure musical growth.
                </p>

                <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <Card 
                            key={plan.name} 
                            className={plan.highlight ? "border-primary shadow-2xl shadow-primary/30 transform scale-[1.03] p-8" : "p-8"}
                        >
                            <CardHeader className="text-center p-0">
                                <span className="text-sm font-semibold uppercase tracking-wider text-primary">{plan.name}</span>
                                <CardTitle className="mt-2">
                                    <span className="text-5xl font-extrabold text-foreground">
                                        {formatPrice(plan.price)}
                                    </span>
                                    <span className="text-xl font-medium text-muted-foreground">/{plan.interval}</span>
                                </CardTitle>
                                <CardDescription className="mt-4">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-8 flex flex-col justify-between h-full p-0">
                                <ul role="list" className="space-y-4 text-left">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <Check className="flex-shrink-0 h-5 w-5 text-accent mt-1 mr-3" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="mt-10">
                                    <Link href={plan.name === 'Foundation' ? '/courses' : '/dashboard'} passHref>
                                        <Button 
                                            variant={plan.highlight ? "default" : "outline"} 
                                            size="lg" 
                                            className="w-full h-12 text-lg"
                                        >
                                            {plan.highlight ? 'Start Pro Trial' : 'Choose Plan'}
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            
            {/* Guarantee Section */}
            <div className="max-w-7xl mx-auto px-4 mt-20 text-center">
                <div className="p-10 rounded-2xl bg-primary/10 border border-primary/30">
                    <DollarSign className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-foreground">Our Axiom Guarantee</h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Try any course risk-free for 30 days. If you're not completely satisfied, we'll refund your money—no questions asked.
                    </p>
                </div>
            </div>
        </div>
    );
}