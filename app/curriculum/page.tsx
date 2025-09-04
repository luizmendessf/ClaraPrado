"use client"

import Footer from "@/components/footer"

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Download,
  Mail,
  Star,
  Users,
  BookOpen,
  Globe,
  Scale
} from 'lucide-react';
import Link from 'next/link';
import Navigation from "@/components/navigation";
import ParticlesBackground from "@/components/particles-background";
import Image from 'next/image'; // Import the Image component

// --- Data ---
const education = [
  {
    degree: "Bachelor of Laws (LL.B.)",
    institution: "Universidade Federal de Sergipe",
    location: "Sergipe, Brazil",
    period: "2021 - Present",
    gpa: "4.0 GPA",
    highlights: [
      "Magna Cum Laude academic standing",
      "Dean's List for 6 consecutive semesters",
      "Specialized in International Tax Law",
      "Research focus on Digital Governance"
    ]
  }
];

const experience = [
  {
    title: "Platform Founder",
    company: "Guia Jurídico",
    location: "Brazil",
    period: "2020 - Present",
    type: "Leadership",
    description: "Founded and scaled Brazil's largest online legal platform, serving over 100,000 users nationwide.",
    achievements: [
      "Built platform from concept to market leader",
      "Managed team of 15+ legal professionals",
      "Achieved 300% year-over-year growth",
      "Established partnerships with major law firms"
    ]
  },
  {
    title: "Legal Research Assistant",
    company: "International Tax Law Institute",
    location: "Remote",
    period: "2022 - Present",
    type: "Research",
    description: "Conducting comparative analysis of international taxation frameworks across multiple jurisdictions.",
    achievements: [
      "Published 4 academic papers",
      "Presented at 3 international conferences",
      "Collaborated with researchers from 8 countries",
      "Specialized in US-Canada tax treaties"
    ]
  },
  {
    title: "Student Leader",
    company: "Law Student Association",
    location: "Universidade Federal de Sergipe",
    period: "2022 - Present",
    type: "Leadership",
    description: "Leading initiatives to enhance student experience and academic excellence in the law program.",
    achievements: [
      "Organized 5 academic symposiums",
      "Mentored 50+ junior students",
      "Increased student engagement by 40%",
      "Established international exchange program"
    ]
  }
];

const achievements = [
  {
    title: "Academic Excellence Award",
    issuer: "Universidade Federal de Sergipe",
    year: "2023",
    description: "Recognized for maintaining 4.0 GPA and outstanding research contributions"
  },
  {
    title: "Best Student Paper",
    issuer: "International Tax Law Conference",
    year: "2023",
    description: "Awarded for research on digital taxation in emerging markets"
  },
  {
    title: "Leadership Excellence",
    issuer: "Brazilian Law Students Association",
    year: "2022",
    description: "Recognized for exceptional leadership in student advocacy and program development"
  },
  {
    title: "Innovation in Legal Tech",
    issuer: "Legal Innovation Awards Brazil",
    year: "2021",
    description: "Honored for creating Brazil's most comprehensive online legal platform"
  }
];

// --- TYPE-SAFE DEFINITIONS (SIMPLIFIED SYNTAX) ---
type SkillCategory = "Legal Expertise" | "Languages" | "Technical Skills" | "Jurisdictions";

const skills: { category: SkillCategory; items: string[] }[] = [
  {
    category: "Legal Expertise",
    items: ["International Tax Law", "Digital Governance", "Comparative Law", "Contract Law", "Corporate Law"]
  },
  {
    category: "Languages",
    items: ["Portuguese (Native)", "English (Fluent)", "Spanish (Intermediate)", "French (Basic)"]
  },
  {
    category: "Technical Skills",
    items: ["Legal Research", "Academic Writing", "Platform Development", "Team Leadership", "Project Management"]
  },
  {
    category: "Jurisdictions",
    items: ["Brazil", "United States", "Canada", "European Union", "Argentina"]
  }
];

const skillIcons: Record<SkillCategory, React.ElementType> = {
  "Legal Expertise": Scale,
  "Languages": Globe,
  "Technical Skills": Users,
  "Jurisdictions": MapPin,
};


export default function CurriculumPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
        <Navigation />

        {/* === HERO SECTION (UPDATED) === */}
        <section className="relative pt-40 pb-20 flex items-center justify-center overflow-hidden">
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/70 to-white z-0"></div>
          <ParticlesBackground />
          
          <div className="relative z-10 container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text content */}
              <div className="text-white space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                  <GraduationCap className="h-4 w-4 text-white mr-2" />
                  <span className="text-sm font-medium text-white">Professional Profile</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Curriculum
                  <span className="block text-gray-300">
                    Vitae
                  </span>
                </h1>
                <p className="text-xl text-gray-200 max-w-xl">
                  Comprehensive overview of academic achievements, professional experience, and leadership contributions in international law and legal technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button size="lg" className="bg-white hover:bg-gray-200 text-gray-900 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Me
                  </Button>
                </div>
              </div>

              {/* Image with gray rectangle background */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group w-[450px] h-[550px]">
                  {/* Gray Background Rectangle */}
                  <div className="absolute inset-0 bg-zinc-800 rounded-2xl transform -rotate-3 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-2 shadow-lg"></div>

                  {/* Main Image */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform rotate-2 transition-all duration-300 group-hover:scale-105 group-hover:rotate-0">
                    <Image
                      src="/images/IMG_7787.JPG" 
                      alt="Clara presenting at a legal conference" 
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The rest of the page remains the same */}
        <section className="py-20 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Education</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Academic foundation in law with focus on international taxation and digital governance.
              </p>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-700/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 -z-10"></div>
                  <Card className="relative border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                    <CardContent className="p-8 lg:p-12">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                        <div className="flex-1 space-y-4">
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <Badge variant="outline" className="text-gray-700 border-gray-300">
                              <GraduationCap className="h-3 w-3 mr-1.5" />
                              {edu.gpa}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="h-4 w-4 mr-1.5" />
                              {edu.period}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="h-4 w-4 mr-1.5" />
                              {edu.location}
                            </div>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-gray-600 font-medium">
                            {edu.institution}
                          </p>
                          <div className="pt-2 space-y-2">
                            <h4 className="font-semibold text-gray-900">Key Highlights:</h4>
                            <ul className="space-y-1.5">
                              {edu.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start text-gray-600">
                                  <Star className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="hidden lg:block bg-gradient-to-br from-gray-900 to-gray-700 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Professional Experience</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Leadership roles and research positions that demonstrate expertise in legal technology and international law.
              </p>
            </div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-700/5 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 -z-10"></div>
                  <Card className="relative border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                    <CardContent className="p-8 lg:p-12">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                        <div className="flex-1 space-y-4">
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <Badge variant="outline" className="text-gray-700 border-gray-300">
                              {exp.type}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="h-4 w-4 mr-1.5" />
                              {exp.period}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="h-4 w-4 mr-1.5" />
                              {exp.location}
                            </div>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-gray-600 font-medium">
                            {exp.company}
                          </p>
                          <p className="text-gray-600 leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="pt-2 space-y-2">
                            <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                            <ul className="space-y-1.5">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start text-gray-600">
                                  <Award className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="hidden lg:block bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          <Briefcase className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Core Competencies</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Diverse skill set spanning legal expertise, languages, and technical capabilities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => {
                const IconComponent = skillIcons[skillGroup.category];
                return (
                  <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900">{skillGroup.category}</h3>
                        </div>
                        <ul className="space-y-2 pt-2">
                          {skillGroup.items.map((skill, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2.5 flex-shrink-0"></div>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Recognition for academic excellence, leadership, and innovation in legal technology.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                            {achievement.title}
                          </h3>
                          <Badge variant="outline" className="text-gray-600 border-gray-300 mt-1">
                            {achievement.year} - {achievement.issuer}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed pt-2">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-12 lg:p-16 text-center overflow-hidden">
                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                      Ready to Connect?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                      Open to international opportunities in the U.S. and Canada. Let's discuss how my expertise can contribute to your organization.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button asChild size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-2xl">
                      <Link href="/contact">
                        <Mail className="h-5 w-5 mr-2" />
                        Contact Me
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl">
                      <Link href="/cv.pdf" target="_blank">
                        <Download className="h-5 w-5 mr-2" />
                        Download CV
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl">
                       <Link href="/publications">
                        <BookOpen className="h-5 w-5 mr-2" />
                        View Publications
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}