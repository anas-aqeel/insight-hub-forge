
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button-custom";
import { useState } from "react";
import { toast } from "sonner";

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") {
      toast.error("Please enter your email address");
      return;
    }
    
    // In a real app, this would send the email to your backend
    toast.success("Thanks for joining our waitlist!");
    setEmail("");
  };
  
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border-white/20 text-white rounded-lg p-6 placeholder:text-white/50 flex-grow"
          required
        />
        <Button type="submit" className="whitespace-nowrap h-auto py-3">
          Join Waitlist
        </Button>
      </div>
    </form>
  );
}
