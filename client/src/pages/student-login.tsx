import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, GraduationCap, Lock, User, ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function StudentLogin() {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Login functionality would connect to the actual GDC Bemina student portal.");
    }, 1500);
  };

  return (
    <div className="min-h-screen login-gradient pattern-overlay flex flex-col">
      <header className="w-full py-4 px-6 flex items-center justify-between">
        <a
          href="https://gdcbemina.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3"
          data-testid="link-back-to-website"
        >
          <img
            src="https://gdcbemina.edu.in/upload/logo44.png"
            alt="GDC Bemina Logo"
            className="w-14 h-14 object-contain bg-white rounded-full p-1 shadow-lg"
            data-testid="img-header-logo"
          />
          <div className="hidden sm:block text-left">
            <h2 className="text-white font-semibold text-sm leading-tight">Abdul Ahad Azad Memorial</h2>
            <p className="text-white/80 text-xs">Degree College, Bemina</p>
          </div>
        </a>
        <a
          href="https://gdcbemina.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
          data-testid="link-main-website"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Main Website</span>
          <span className="sm:hidden">Back</span>
        </a>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-2xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-2">
                  <img
                    src="https://gdcbemina.edu.in/upload/logo44.png"
                    alt="GDC Bemina Logo"
                    className="w-full h-full object-contain"
                    data-testid="img-college-logo"
                  />
                </div>
              </div>
              <h1
                className="font-serif text-2xl font-semibold text-primary mb-1"
                data-testid="text-page-title"
              >
                Student Login
              </h1>
              <p className="text-muted-foreground text-sm">
                Abdul Ahad Azad Memorial Degree College
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Bemina, Srinagar
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="registration"
                  className="text-sm font-medium text-foreground flex items-center gap-2"
                >
                  <User className="w-4 h-4 text-primary" />
                  Registration Number
                </Label>
                <div className="relative">
                  <Input
                    id="registration"
                    type="text"
                    placeholder="Enter your registration number"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    className="h-12 pl-4 pr-4 text-base border-2 border-input focus:border-primary transition-colors bg-white"
                    required
                    data-testid="input-registration-number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="dob"
                  className="text-sm font-medium text-foreground flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-primary" />
                  Date of Birth
                </Label>
                <div className="relative">
                  <Input
                    id="dob"
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="h-12 pl-4 pr-4 text-base border-2 border-input focus:border-primary transition-colors bg-white"
                    required
                    data-testid="input-date-of-birth"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-accent transition-all duration-200 shadow-md hover:shadow-lg"
                disabled={isLoading}
                data-testid="button-login"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing In...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Sign In
                  </span>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="text-center space-y-3">
                <a
                  href="https://gdcbemina.edu.in/contact.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline font-medium"
                  data-testid="link-help-desk"
                >
                  Need help? Contact Help Desk
                </a>
                <p className="text-xs text-muted-foreground">
                  For login issues, please contact the college administration
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-4 text-white/60 text-xs">
              <a
                href="https://gdcbemina.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                data-testid="link-home"
              >
                Home
              </a>
              <span>•</span>
              <a
                href="https://gdcbemina.edu.in/page.php?slug=college-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                data-testid="link-about"
              >
                About
              </a>
              <span>•</span>
              <a
                href="https://gdcbemina.edu.in/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                data-testid="link-contact"
              >
                Contact
              </a>
            </div>
            <p className="mt-3 text-white/40 text-xs">
              © 2026 Abdul Ahad Azad Memorial Degree College, Bemina
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
