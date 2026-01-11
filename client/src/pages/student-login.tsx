import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Lock, User, ChevronDown, Menu, X, Phone, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "https://gdcbemina.edu.in/" },
  { 
    label: "About Us", 
    href: "#",
    dropdown: [
      { label: "College Profile", href: "https://gdcbemina.edu.in/page.php?slug=college-profile" },
      { label: "Mission & Vision", href: "https://gdcbemina.edu.in/page.php?slug=vision-and-mission" },
      { label: "Core Values", href: "https://gdcbemina.edu.in/page.php?slug=our-core-values" },
    ]
  },
  { 
    label: "Academics", 
    href: "#",
    dropdown: [
      { label: "Programmes", href: "https://gdcbemina.edu.in/page.php?slug=programmes" },
      { label: "Departments", href: "https://gdcbemina.edu.in/departments.php" },
      { label: "Examination", href: "https://gdcbemina.edu.in/page.php?slug=examination" },
    ]
  },
  { label: "Library", href: "https://gdcbemina.edu.in/page.php?slug=library-" },
  { label: "IQAC", href: "https://gdcbemina.edu.in/page.php?slug=iqac-2546" },
  { 
    label: "Facilities", 
    href: "#",
    dropdown: [
      { label: "Hostel", href: "https://gdcbemina.edu.in/page.php?slug=hostel" },
      { label: "Sports", href: "https://gdcbemina.edu.in/page.php?slug=sports" },
      { label: "Scholarships", href: "https://gdcbemina.edu.in/page.php?slug=digital-j-k-" },
    ]
  },
  { label: "Alumni", href: "https://gdcbemina.edu.in/almuni-registration.php" },
  { label: "Contact", href: "https://gdcbemina.edu.in/contact.php" },
];

export default function StudentLogin() {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    setTimeout(() => {
      setIsLoading(false);
      if (registrationNumber === "123" && dateOfBirth === "2001-01-01") {
        setLocation("/profile");
      } else {
        setError("Invalid registration number or date of birth. Try: 123 and 01/01/2001");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="bg-primary text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              Admission: 01943510729
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              support@gdcbemina.edu.in
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-yellow-300 font-medium">Student Login</span>
            <a href="https://gdcbemina.edu.in/" className="hover:text-yellow-300 transition-colors">Faculty Login</a>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
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
                className="w-16 h-16 object-contain"
                data-testid="img-header-logo"
              />
              <div className="hidden md:block text-left">
                <h1 className="text-primary font-bold text-lg leading-tight">Abdul Ahad Azad Memorial Degree College</h1>
                <p className="text-muted-foreground text-xs">عبدالاحد ازاد میموریل ڈگری کالج • अब्दुल अहद आज़ाद मेमोरियल डिग्री कॉलेज</p>
                <p className="text-muted-foreground text-xs">Bemina, Srinagar, J&K</p>
              </div>
            </a>
            
            <button
              className="lg:hidden p-2 text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <nav className="bg-primary hidden lg:block">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-3 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                    data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-3 h-3" />}
                  </a>
                  {item.dropdown && openDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-md min-w-48 py-2 z-50">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                          data-testid={`nav-sub-${sub.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {mobileMenuOpen && (
          <nav className="lg:hidden bg-white border-t">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-foreground text-sm font-medium hover:bg-muted transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12 login-gradient pattern-overlay">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-2xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <h1
                className="font-serif text-2xl font-semibold text-primary mb-1"
                data-testid="text-page-title"
              >
                Student Login
              </h1>
              <p className="text-muted-foreground text-sm">
                Access your academic portal
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

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm" data-testid="text-error">
                  {error}
                </div>
              )}

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
