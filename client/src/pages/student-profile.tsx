import { Phone, Mail, Menu, X, ChevronDown, User, Calendar, BookOpen, GraduationCap, MapPin, Users, LogOut } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "https://gdcbemina.edu.in/" },
  { label: "About Us", href: "https://gdcbemina.edu.in/page.php?slug=college-profile" },
  { label: "Academics", href: "https://gdcbemina.edu.in/page.php?slug=programmes" },
  { label: "Library", href: "https://gdcbemina.edu.in/page.php?slug=library-" },
  { label: "IQAC", href: "https://gdcbemina.edu.in/page.php?slug=iqac-2546" },
  { label: "Contact", href: "https://gdcbemina.edu.in/contact.php" },
];

const studentData = {
  registrationNumber: "cus-23-aaa-10508",
  name: "Ishfaq Ahmed Wani",
  fatherName: "Ghulam Nabi Wani",
  motherName: "Dilshada Bano",
  dateOfBirth: "01/03/2006",
  gender: "Male",
  category: "RBA",
  bloodGroup: "O+",
  email: "ishfaq.wani@student.cusrinagar.edu.in",
  phone: "+91 7006123456",
  address: "Bemina Housing Colony, Sector 1, Srinagar, J&K - 190018",
  photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
  programme: "Bachelor of Science (General)",
  department: "Department of Botany",
  semester: "1st Semester",
  batch: "2023-2027",
  enrollmentYear: "2023",
  rollNumber: "BEM-BOT-23-012",
  subjects: [
    { name: "Botany (Major)", code: "BOT-101", credits: 6 },
    { name: "Chemistry (Minor)", code: "CHM-101", credits: 4 },
    { name: "Zoology (Multidisciplinary)", code: "ZOO-101", credits: 4 },
    { name: "Environmental Science", code: "EVS-101", credits: 2 },
    { name: "Value Education", code: "VAL-101", credits: 2 },
  ],
  cgpa: "7.82",
  attendance: "92%",
};

export default function StudentProfile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    setLocation("/");
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
            <span className="text-yellow-300 font-medium">Welcome, {studentData.name.split(' ')[0]}</span>
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
            >
              <img
                src="https://gdcbemina.edu.in/upload/logo44.png"
                alt="GDC Bemina Logo"
                className="w-14 h-14 object-contain"
              />
              <div className="hidden md:block text-left">
                <h1 className="text-primary font-bold text-base leading-tight">Abdul Ahad Azad Memorial Degree College</h1>
                <p className="text-muted-foreground text-xs">Bemina, Srinagar, J&K</p>
              </div>
            </a>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="hidden sm:flex items-center gap-2"
                data-testid="button-logout"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
              <button
                className="lg:hidden p-2 text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <nav className="bg-primary hidden lg:block">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-3 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </a>
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
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-destructive text-sm font-medium hover:bg-muted transition-colors"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-1 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                  <img
                    src={studentData.photo}
                    alt={studentData.name}
                    className="w-full h-full object-cover"
                    data-testid="img-student-photo"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold" data-testid="text-student-name">{studentData.name}</h2>
                  <p className="text-white/90 text-sm mt-1">{studentData.programme}</p>
                  <p className="text-white/80 text-sm">{studentData.department}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                      Reg. No: {studentData.registrationNumber}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                      {studentData.semester}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                      Batch: {studentData.batch}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                <User className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg text-primary">Personal Details</h3>
              </div>
              <div className="space-y-3">
                <DetailRow label="Full Name" value={studentData.name} testId="text-full-name" />
                <DetailRow label="Father's Name" value={studentData.fatherName} testId="text-father-name" />
                <DetailRow label="Mother's Name" value={studentData.motherName} testId="text-mother-name" />
                <DetailRow label="Date of Birth" value={studentData.dateOfBirth} testId="text-dob" />
                <DetailRow label="Gender" value={studentData.gender} testId="text-gender" />
                <DetailRow label="Category" value={studentData.category} testId="text-category" />
                <DetailRow label="Blood Group" value={studentData.bloodGroup} testId="text-blood-group" />
                <DetailRow label="Email" value={studentData.email} testId="text-email" />
                <DetailRow label="Phone" value={studentData.phone} testId="text-phone" />
                <DetailRow label="Address" value={studentData.address} testId="text-address" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg text-primary">Academic Details</h3>
              </div>
              <div className="space-y-3">
                <DetailRow label="Registration Number" value={studentData.registrationNumber} testId="text-reg-number" />
                <DetailRow label="Roll Number" value={studentData.rollNumber} testId="text-roll-number" />
                <DetailRow label="Programme" value={studentData.programme} testId="text-programme" />
                <DetailRow label="Department" value={studentData.department} testId="text-department" />
                <DetailRow label="Current Semester" value={studentData.semester} testId="text-semester" />
                <DetailRow label="Batch" value={studentData.batch} testId="text-batch" />
                <DetailRow label="Enrollment Year" value={studentData.enrollmentYear} testId="text-enrollment-year" />
                <div className="flex justify-between items-center py-2 border-b border-dashed">
                  <span className="text-muted-foreground text-sm">CGPA</span>
                  <span className="font-semibold text-green-600" data-testid="text-cgpa">{studentData.cgpa}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dashed">
                  <span className="text-muted-foreground text-sm">Attendance</span>
                  <span className="font-semibold text-blue-600" data-testid="text-attendance">{studentData.attendance}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg text-primary">Current Semester Subjects</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Subject Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Code</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.subjects.map((subject, index) => (
                    <tr key={subject.code} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4" data-testid={`text-subject-${index}`}>{subject.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{subject.code}</td>
                      <td className="py-3 px-4 text-center font-medium">{subject.credits}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-primary/5 font-semibold">
                    <td className="py-3 px-4" colSpan={2}>Total Credits</td>
                    <td className="py-3 px-4 text-center">{studentData.subjects.reduce((sum, s) => sum + s.credits, 0)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-primary text-white py-4 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm">
          <p>© 2026 Abdul Ahad Azad Memorial Degree College, Bemina, Srinagar</p>
        </div>
      </footer>
    </div>
  );
}

function DetailRow({ label, value, testId }: { label: string; value: string; testId: string }) {
  return (
    <div className="flex justify-between items-start py-2 border-b border-dashed last:border-0">
      <span className="text-muted-foreground text-sm">{label}</span>
      <span className="font-medium text-foreground text-right max-w-[60%]" data-testid={testId}>{value}</span>
    </div>
  );
}
