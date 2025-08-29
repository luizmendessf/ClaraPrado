'use client';

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

const skills = [
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

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Clara Prado
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/publications" className="text-gray-600 hover:text-gray-900 transition-colors">
                Publications
              </Link>
              <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gray-900 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-700 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-900/5 border border-gray-200 rounded-full">
              <GraduationCap className="h-4 w-4 text-gray-700 mr-2" />
              <span className="text-sm font-medium text-gray-700">Professional Profile</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Curriculum
              <span className="block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Vitae
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Comprehensive overview of academic achievements, professional experience, and leadership contributions in international law and legal technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 font-semibold px-8 py-4 rounded-2xl">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-2xl">
                <Mail className="h-5 w-5 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
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
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-700/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <Card className="relative border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
                      <div className="flex-1 space-y-6">
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="outline" className="text-gray-700 border-gray-300">
                              <GraduationCap className="h-3 w-3 mr-1" />
                              {edu.gpa}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="h-4 w-4 mr-1" />
                              {edu.period}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="h-4 w-4 mr-1" />
                              {edu.location}
                            </div>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-gray-600 font-medium">
                            {edu.institution}
                          </p>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900">Key Highlights:</h4>
                            <ul className="space-y-1">
                              {edu.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start text-gray-600">
                                  <Star className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-auto flex lg:flex-col items-center lg:items-end space-x-4 lg:space-x-0 lg:space-y-4">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-700/5 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <Card className="relative border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
                      <div className="flex-1 space-y-6">
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="outline" className="text-gray-700 border-gray-300">
                              {exp.type}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="h-4 w-4 mr-1" />
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
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start text-gray-600">
                                  <Award className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-auto flex lg:flex-col items-center lg:items-end space-x-4 lg:space-x-0 lg:space-y-4">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          <Briefcase className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Core Competencies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diverse skill set spanning legal expertise, languages, and technical capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {skillGroup.category === 'Legal Expertise' && <Scale className="h-5 w-5 text-white" />}
                        {skillGroup.category === 'Languages' && <Globe className="h-5 w-5 text-white" />}
                        {skillGroup.category === 'Technical Skills' && <Users className="h-5 w-5 text-white" />}
                        {skillGroup.category === 'Jurisdictions' && <MapPin className="h-5 w-5 text-white" />}
                      </div>
                      <h3 className="font-bold text-gray-900">{skillGroup.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <Award className="h-5 w-5 text-white" />
                          </div>
                          <Badge variant="outline" className="text-gray-700 border-gray-300">
                            {achievement.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 font-medium mb-3">
                          {achievement.issuer}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-12 lg:p-16 text-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Ready to
                    <span className="block">Connect?</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Open to international opportunities in the U.S. and Canada. Let's discuss how my expertise can contribute to your organization.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-2xl">
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Me
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-2xl">
                    <Download className="h-5 w-5 mr-2" />
                    Download CV
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-2xl">
                    <BookOpen className="h-5 w-5 mr-2" />
                    View Publications
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
