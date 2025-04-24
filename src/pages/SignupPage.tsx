
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CountdownTimer } from "@/components/CountdownTimer";
import { useState } from "react";
import { toast } from "sonner";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("You've been added to our waitlist! Check your email for confirmation.");
      setIsSubmitting(false);
      setEmail("");
      setRole("");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-tl from-[#101010] to-[#0b0b0b] relative">
      <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-vibrant-pink/10 blur-3xl opacity-60 z-0"></div>
      <div className="absolute top-0 left-0 w-full p-6">
        <Logo />
      </div>

      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Early Access Closing In</h2>
        <p className="text-light-gray mb-6">Secure your spot before the waitlist closes</p>
        <CountdownTimer />
      </div>

      <Card className="w-full max-w-md animate-scale-in bg-gradient-to-br from-[#1d0c0c]/90 to-[#230606]/80 border-[#6e0415]/70">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold text-white">Join the Waitlist</CardTitle>
          <CardDescription className="text-light-gray">
            Sign up to get early access to InsightHub, the AI-powered learning platform.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-[#070707] border-[#520a1d] text-white placeholder:text-white/50 focus:ring-[#ff2100]/30 focus:border-[#ff2100]/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Your role (Student, Educator, etc.)"
                className="bg-[#070707] border-[#520a1d] text-white placeholder:text-white/50 focus:ring-[#ff2100]/30 focus:border-[#ff2100]/50"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6e0415] to-[#ff2100] text-white hover:opacity-90 transition-opacity"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Join Waitlist"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
