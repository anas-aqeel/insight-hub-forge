
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { CountdownTimer } from "@/components/CountdownTimer";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="absolute inset-0 bg-gradient-primary -z-10" />
      <div className="absolute top-0 left-0 w-full p-6">
        <Logo />
      </div>
      
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Early Access Closing In</h2>
        <p className="text-light-gray mb-6">Secure your spot before the waitlist closes</p>
        <CountdownTimer />
      </div>
      
      <Card className="w-full max-w-md animate-scale-in bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border-vibrant-pink/30">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold text-white">Join the Waitlist</CardTitle>
          <CardDescription className="text-light-gray">
            Sign up to get early access to InsightHub, the AI-powered learning platform.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email address"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Your role (Student, Educator, etc.)"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full text-white">Join Waitlist</Button>
        </CardFooter>
      </Card>
      
      <div className="mt-8 text-center">
        <p className="text-light-gray">
          Already have an account?{" "}
          <Link to="/login" className="text-bright-orange hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
