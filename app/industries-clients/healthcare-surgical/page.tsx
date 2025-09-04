import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Activity, TrendingUp, Users, Target, BarChart3, Eye, Zap, Brain, Shield, Building2, User, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function HealthcareSurgicalPage() {
  console.log("Healthcare Surgical page loaded")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Activity className="h-8 w-8 text-proof-blue-600 mr-3" />
                <span className="text-proof-blue-600 font-semibold text-lg">Healthcare & Surgical</span>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Navigate the $4.6B Surgical Robotics Revolution
              </h1>
              <p className="text-xl text-proof-gray-600 mb-8 leading-relaxed">
                Transform your healthcare business with strategic insights into surgical robotics, AI-driven diagnostics, and minimally invasive procedures. We help medical companies understand adoption patterns in a market growing 9.4% annually through 2037.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-3 text-lg font-semibold" asChild>
                  <Link href="/contact">
                    Schedule Research Consultation
                  </Link>
                </Button>
                <Button variant="outline" className="border-proof-blue-600 text-proof-blue-600 hover:bg-proof-blue-50 px-8 py-3 text-lg font-semibold">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-proof-blue-100 to-proof-purple-100 rounded-2xl p-8 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Healthcare technology and surgical equipment" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-proof-green-600" />
                    <div>
                      <div className="text-sm font-semibold text-proof-gray-900">Market Growth</div>
                      <div className="text-xs text-proof-gray-600">+9.4% CAGR to 2037</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Update Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">2024-2025 Market Intelligence</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Critical innovations transforming healthcare and surgical medicine and their impact on market opportunities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Brain className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Surgical Robotics Boom</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Surgical robots market valued at <strong>$4.62 billion in 2025</strong>, with only 2% of surgeries currently using robots—indicating massive growth potential.
              </p>
              <div className="text-xs text-blue-600 font-medium">Opportunity: Massive</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <Shield className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">AI-Enhanced Surgery</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                AI integration in diagnostics, surgical planning, and real-time decision-making is creating more precise, personalized medical procedures.
              </p>
              <div className="text-xs text-purple-600 font-medium">Trend: Accelerating</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <Activity className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Minimally Invasive Focus</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Growing demand for procedures with reduced recovery times, fewer complications, and improved patient satisfaction drives innovation.
              </p>
              <div className="text-xs text-green-600 font-medium">Impact: High</div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Asia-Pacific Leading Adoption</h3>
                <p className="text-blue-100 mb-6">
                  The Asia-Pacific region leads surgical robotics adoption due to improved medical infrastructure and high technology uptake, creating new market opportunities.
                </p>
                <div className="flex items-center text-blue-100">
                  <Brain className="h-5 w-5 mr-2" />
                  <span className="text-sm">PROOF provides global market intelligence for strategic expansion</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3X</div>
                <div className="text-blue-100">Expected robot sales growth by 2032</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Trusted by Leading Healthcare Companies</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              We partner with innovative healthcare and medical device companies driving surgical innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">MedTech Pro</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">SurgiBot</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">HealthCore</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">RoboSurg</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">MedDevice</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">SurgiCare</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-proof-gray-600 italic">
              "PROOF's research helped us navigate surgeon adoption barriers and achieve 340% faster market penetration"
            </p>
            <p className="text-sm text-proof-gray-500 mt-2">— VP of Market Development, Leading Surgical Robotics Company</p>
          </div>
        </div>
      </section>

      {/* Research Solutions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Research Solutions for Healthcare & Surgical</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Specialized research methodologies to help healthcare companies navigate technology adoption and market expansion.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Users className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Technology Adoption Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand how healthcare professionals adopt new surgical technologies and what drives purchasing decisions.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Surgeon technology preferences</li>
                <li>• Adoption barrier analysis</li>
                <li>• Training requirement assessment</li>
                <li>• ROI perception studies</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Target className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Clinical Outcomes Validation</h3>
              <p className="text-proof-gray-600 mb-6">
                Measure and validate the clinical benefits and cost-effectiveness of new medical devices and procedures.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Patient outcome tracking</li>
                <li>• Clinical efficacy studies</li>
                <li>• Cost-benefit analysis</li>
                <li>• Recovery time optimization</li>
              </ul>
              <div className="flex items-center text-proof-purple-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <BarChart3 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Market Entry Strategy</h3>
              <p className="text-proof-gray-600 mb-6">
                Navigate regulatory requirements and competitive landscapes for successful medical device market entry.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Regulatory pathway assessment</li>
                <li>• Competitive positioning analysis</li>
                <li>• Pricing strategy optimization</li>
                <li>• Market sizing and forecasting</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Eye className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Patient Experience Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand patient preferences, satisfaction levels, and willingness to pay for advanced medical procedures.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Patient satisfaction measurement</li>
                <li>• Treatment preference analysis</li>
                <li>• Quality of life assessment</li>
                <li>• Healthcare journey mapping</li>
              </ul>
              <div className="flex items-center text-proof-purple-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
          </div>

          {/* Specialized Research Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-proof-gray-900 mb-6 text-center">Specialized Research for Healthcare Innovation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">AI Integration Studies</h4>
                <p className="text-sm text-proof-gray-600">Research physician readiness for AI-powered diagnostics and surgical planning tools.</p>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-proof-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Robotic Surgery Adoption</h4>
                <p className="text-sm text-proof-gray-600">Understand barriers to robotics adoption and optimize training and implementation strategies.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Global Market Expansion</h4>
                <p className="text-sm text-proof-gray-600">Navigate international healthcare regulations and cultural preferences for medical technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Case Studies for Healthcare & Surgical</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Real results from our research with leading medical device companies and healthcare organizations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-l-4 border-proof-blue-600">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-proof-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Surgical Robot Adoption</h3>
                  <p className="text-sm text-proof-gray-600">Market Entry Strategy</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A robotics company needed to understand surgeon adoption barriers and optimize their training and support programs for faster market penetration.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Reduced surgeon training time by 40%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Identified 5 key adoption drivers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Achieved 340% faster market penetration</span>
                </div>
              </div>
              <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 text-sm font-medium">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white border-l-4 border-proof-purple-600">
              <div className="flex items-center mb-4">
                <Activity className="h-8 w-8 text-proof-purple-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Minimally Invasive Device</h3>
                  <p className="text-sm text-proof-gray-600">Clinical Outcome Validation</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A medical device manufacturer needed to validate the clinical benefits and patient satisfaction outcomes of their new minimally invasive surgical device.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Documented 60% faster recovery times</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Achieved 94% patient satisfaction</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Secured FDA approval 6 months early</span>
                </div>
              </div>
              <Link href="/resources/case-studies" className="flex items-center text-proof-purple-600 text-sm font-medium">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Who We Work With in Healthcare & Surgical</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From global medical device manufacturers to innovative healthcare startups, we partner with organizations across the medical technology spectrum.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Building2 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Medical Device Manufacturers</h3>
              <p className="text-proof-gray-600 mb-6">
                Established companies developing surgical instruments, robotic systems, and diagnostic equipment.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Surgical robotics companies</li>
                <li>• Medical instrument manufacturers</li>
                <li>• Diagnostic equipment makers</li>
                <li>• Implant and prosthetic companies</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Brain className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Health Technology Startups</h3>
              <p className="text-proof-gray-600 mb-6">
                Innovative companies developing AI-powered healthcare solutions and next-generation medical technologies.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• AI diagnostics companies</li>
                <li>• Digital health platforms</li>
                <li>• Minimally invasive device startups</li>
                <li>• Telemedicine solution providers</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Shield className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Healthcare Organizations</h3>
              <p className="text-proof-gray-600 mb-6">
                Hospitals, surgical centers, and healthcare systems implementing new technologies and improving patient outcomes.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Hospital systems</li>
                <li>• Ambulatory surgical centers</li>
                <li>• Specialty care clinics</li>
                <li>• Academic medical centers</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Who Typically Orders Our Research</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Chief Medical Officers</h4>
                  <p className="text-sm text-blue-100">Clinical validation and outcomes research</p>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">VP of Product</h4>
                  <p className="text-sm text-blue-100">Device development and market validation</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Market Access Directors</h4>
                  <p className="text-sm text-blue-100">Regulatory strategy and market entry</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">R&D Leaders</h4>
                  <p className="text-sm text-blue-100">Innovation research and technology adoption</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Choose PROOF Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Why Healthcare Companies Choose PROOF</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Medical Technology Expertise</h3>
                    <p className="text-proof-gray-600">Deep understanding of healthcare adoption patterns, regulatory landscapes, and clinical validation requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-purple-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Clinical Outcomes Focus</h3>
                    <p className="text-proof-gray-600">Specialized research in measuring patient outcomes, clinical efficacy, and cost-effectiveness of medical innovations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Global Healthcare Intelligence</h3>
                    <p className="text-proof-gray-600">Understanding of diverse healthcare systems and cultural differences in medical technology adoption.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-proof-gray-50 to-proof-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">15+</div>
                  <div className="text-sm text-proof-gray-600">Years in Healthcare Research</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-purple-600 mb-2">200+</div>
                  <div className="text-sm text-proof-gray-600">Medical Devices Studied</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">95%</div>
                  <div className="text-sm text-proof-gray-600">Clinical Study Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-purple-600 mb-2">30d</div>
                  <div className="text-sm text-proof-gray-600">Average Study Completion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Advance Your Healthcare Innovation?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get the clinical insights you need to navigate technology adoption, validate outcomes, and accelerate market entry in the rapidly evolving healthcare landscape.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Free 30-minute consultation on healthcare trends</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Custom research proposal within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Clinical outcomes and regulatory guidance</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">healthcare@proofinsights.com</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-proof-gray-900 mb-6">Get Your Healthcare Research Proposal</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-proof-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-proof-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                      placeholder="Smith"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="john.smith@company.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Company Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Your Healthcare Company"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Research Challenge *</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Tell us about your healthcare research needs, technology adoption challenges, or clinical validation requirements..."
                    required
                  />
                </div>
                
                <Button className="w-full bg-proof-blue-600 hover:bg-proof-blue-700 text-white py-3 text-lg font-semibold">
                  <Send className="mr-2 h-5 w-5" />
                  Send Research Proposal Request
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}