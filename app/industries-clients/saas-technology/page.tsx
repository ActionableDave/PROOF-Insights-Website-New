import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Code, TrendingUp, Users, Target, BarChart3, Eye, Zap, Brain, Cloud, Building2, User, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function SaaSTechnologyPage() {
  console.log("SaaS Technology page loaded")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-proof-blue-600 mr-3" />
                <span className="text-proof-blue-600 font-semibold text-lg">SaaS & Technology</span>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Master the $358B SaaS Revolution
              </h1>
              <p className="text-xl text-proof-gray-600 mb-8 leading-relaxed">
                Navigate the evolving SaaS landscape with strategic insights into AI integration, vertical solutions, and usage-based pricing models. We help technology companies understand market dynamics in an industry growing 13.7% annually with 85% of business applications expected to be SaaS by 2025.
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
              <div className="bg-gradient-to-br from-proof-blue-100 to-proof-blue-100 rounded-2xl p-8 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="SaaS technology dashboard and analytics" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-proof-green-600" />
                    <div>
                      <div className="text-sm font-semibold text-proof-gray-900">Market Growth</div>
                      <div className="text-xs text-proof-gray-600">+13.7% CAGR to 2030</div>
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
              Critical trends reshaping the SaaS and technology landscape and their impact on competitive strategy.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Brain className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">AI Integration Standard</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                SaaS platforms increasingly leverage AI for <strong>personalization, automation, and analytics</strong>, becoming essential for user experience and operational efficiency.
              </p>
              <div className="text-xs text-blue-600 font-medium">Trend: Essential</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <Target className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Vertical SaaS Dominance</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Industry-specific solutions outpace generalist platforms, especially in healthcare, finance, and logistics due to tailored compliance and automation.
              </p>
              <div className="text-xs text-purple-600 font-medium">Opportunity: High Growth</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <Zap className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Usage-Based Pricing</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Shift from flat-rate to consumption-based and hybrid pricing models, aligning costs with actual usage and increasing customer satisfaction.
              </p>
              <div className="text-xs text-green-600 font-medium">Trend: Accelerating</div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-blue-600 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Market Maturation Challenges</h3>
                <p className="text-blue-100 mb-6">
                  Growth rates moderating with median ARR growth at 23-24% in 2024. Increased competition and market saturation require differentiation and superior customer retention strategies.
                </p>
                <div className="flex items-center text-blue-100">
                  <Cloud className="h-5 w-5 mr-2" />
                  <span className="text-sm">PROOF helps SaaS companies navigate competitive differentiation and growth optimization</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-blue-100">Business apps to be SaaS by 2025</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Trusted by Leading SaaS Companies</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              We partner with innovative SaaS and technology companies driving digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">CloudTech</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">DataFlow</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">SaaS Pro</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">DevOps</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">AutoScale</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">TechStack</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-proof-gray-600 italic">
              "PROOF's research helped us optimize our pricing model and increase customer retention by 45%"
            </p>
            <p className="text-sm text-proof-gray-500 mt-2">— VP of Product, Leading SaaS Platform</p>
          </div>
        </div>
      </section>

      {/* Research Solutions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Research Solutions for SaaS & Technology</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Specialized research methodologies to help technology companies navigate market saturation and accelerate growth.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Users className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Pricing Model Optimization</h3>
              <p className="text-proof-gray-600 mb-6">
                Optimize your pricing strategy with insights into usage-based models, feature tiers, and customer willingness to pay.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Usage-based pricing validation</li>
                <li>• Feature tier optimization</li>
                <li>• Price sensitivity analysis</li>
                <li>• Competitive pricing research</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Target className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Product-Market Fit Analysis</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand customer needs and optimize product positioning in competitive SaaS markets.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Feature demand validation</li>
                <li>• User journey optimization</li>
                <li>• Competitive differentiation</li>
                <li>• Market gap identification</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <BarChart3 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Customer Retention Strategy</h3>
              <p className="text-proof-gray-600 mb-6">
                Identify churn drivers and optimize retention strategies to improve customer lifetime value.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Churn prediction modeling</li>
                <li>• Feature utilization analysis</li>
                <li>• Customer success optimization</li>
                <li>• Expansion revenue opportunities</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Eye className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">AI Integration Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand customer readiness for AI features and optimize AI-powered product development.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• AI feature acceptance testing</li>
                <li>• Automation preference analysis</li>
                <li>• Trust and transparency requirements</li>
                <li>• AI ROI demonstration</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
          </div>

          {/* Specialized Research Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-proof-gray-900 mb-6 text-center">Specialized Research for SaaS Innovation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Vertical SaaS Opportunities</h4>
                <p className="text-sm text-proof-gray-600">Research industry-specific requirements and optimize vertical market entry strategies.</p>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Security & Compliance</h4>
                <p className="text-sm text-proof-gray-600">Understand enterprise security requirements and compliance expectations for B2B SaaS platforms.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Integration Ecosystem</h4>
                <p className="text-sm text-proof-gray-600">Research API adoption, integration preferences, and platform ecosystem strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Case Studies for SaaS & Technology</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Real results from our research with leading SaaS companies and technology platforms.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-l-4 border-proof-blue-600">
              <div className="flex items-center mb-4">
                <Cloud className="h-8 w-8 text-proof-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Usage-Based Pricing Model</h3>
                  <p className="text-sm text-proof-gray-600">Revenue Optimization Strategy</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A growing SaaS platform needed to transition from flat-rate to usage-based pricing while maintaining customer satisfaction and revenue growth.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased average revenue per user by 67%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Reduced customer churn by 23%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Achieved 89% customer acceptance</span>
                </div>
              </div>
              <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 text-sm font-medium">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white border-l-4 border-proof-blue-600">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-proof-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">AI Feature Integration</h3>
                  <p className="text-sm text-proof-gray-600">Product Development Strategy</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A B2B SaaS company wanted to understand customer readiness for AI-powered automation features and optimize their product roadmap.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Identified 4 high-value AI features</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Achieved 78% feature adoption rate</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased customer retention by 45%</span>
                </div>
              </div>
              <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 text-sm font-medium">
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
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Who We Work With in SaaS & Technology</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From established enterprise software companies to innovative SaaS startups, we partner with technology organizations across the spectrum.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Building2 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Enterprise Software Companies</h3>
              <p className="text-proof-gray-600 mb-6">
                Established technology companies transitioning to SaaS models and competing in digital markets.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Enterprise software vendors</li>
                <li>• Legacy technology companies</li>
                <li>• System integrators</li>
                <li>• IT service providers</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Cloud className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">SaaS Platforms</h3>
              <p className="text-proof-gray-600 mb-6">
                Cloud-native companies developing horizontal and vertical SaaS solutions for various markets.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• B2B SaaS platforms</li>
                <li>• Vertical SaaS solutions</li>
                <li>• API-first companies</li>
                <li>• Developer tools platforms</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Brain className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Technology Innovators</h3>
              <p className="text-proof-gray-600 mb-6">
                Cutting-edge companies developing AI-powered solutions, automation platforms, and next-generation technologies.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• AI/ML platform companies</li>
                <li>• Automation solution providers</li>
                <li>• Data analytics platforms</li>
                <li>• Cybersecurity SaaS companies</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-blue-600 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Who Typically Orders Our Research</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">VP of Product</h4>
                  <p className="text-sm text-blue-100">Product strategy and feature development</p>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Chief Revenue Officers</h4>
                  <p className="text-sm text-blue-100">Pricing strategy and revenue optimization</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Head of Growth</h4>
                  <p className="text-sm text-blue-100">Customer acquisition and retention</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Market Research</h4>
                  <p className="text-sm text-blue-100">Competitive analysis and market intelligence</p>
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
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Why SaaS Companies Choose PROOF</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">SaaS Business Model Expertise</h3>
                    <p className="text-proof-gray-600">Deep understanding of SaaS metrics, pricing models, and customer lifecycle optimization strategies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Technology Trend Intelligence</h3>
                    <p className="text-proof-gray-600">Specialized research in AI integration, automation trends, and emerging technology adoption patterns.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Competitive Differentiation</h3>
                    <p className="text-proof-gray-600">Help identify unique positioning opportunities in saturated markets and optimize competitive strategies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-proof-gray-50 to-proof-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">10+</div>
                  <div className="text-sm text-proof-gray-600">Years in SaaS Research</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">250+</div>
                  <div className="text-sm text-proof-gray-600">SaaS Companies Studied</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">87%</div>
                  <div className="text-sm text-proof-gray-600">Product Launch Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">14d</div>
                  <div className="text-sm text-proof-gray-600">Average Research Turnaround</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Optimize Your SaaS Strategy?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get the strategic insights you need to navigate market saturation, optimize pricing models, and accelerate growth in the competitive SaaS landscape.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Free 30-minute consultation on SaaS trends</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Custom research proposal within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">SaaS metrics and competitive benchmarking</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">saas@proofinsights.com</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-proof-gray-900 mb-6">Get Your SaaS Research Proposal</h3>
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
                    placeholder="Your SaaS Company"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Research Challenge *</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Tell us about your SaaS research needs, pricing challenges, or growth optimization questions..."
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