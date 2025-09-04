import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Sparkles, TrendingUp, Users, Target, BarChart3, Eye, Zap, Brain, Beaker, Building2, User, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function BeautyCosmeticsPage() {
  console.log("Beauty Cosmetics page loaded")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-proof-blue-600 mr-3" />
                <span className="text-proof-blue-600 font-semibold text-lg">Beauty & Cosmetics</span>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Navigate the $716B Beauty Revolution
              </h1>
              <p className="text-xl text-proof-gray-600 mb-8 leading-relaxed">
                Transform your beauty business with strategic insights into biotech-driven innovation, sustainability trends, and AI-powered personalization. We help cosmetics companies understand consumer behavior in a market growing from $500B to $716B by 2025.
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
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Beauty and cosmetics products research" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-proof-green-600" />
                    <div>
                      <div className="text-sm font-semibold text-proof-gray-900">Market Growth</div>
                      <div className="text-xs text-proof-gray-600">$716B by 2025</div>
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
              Revolutionary trends transforming the beauty industry and their impact on consumer behavior and market opportunities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <Beaker className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Biotech Beauty Revolution</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                <strong>Science-backed ingredients and biotechnology-based skincare</strong> leading innovation with lab-engineered peptides and plant stem cells for efficacy and sustainability.
              </p>
              <div className="text-xs text-purple-600 font-medium">Trend: Revolutionary</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Brain className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">AI-Powered Personalization</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                AI-driven product recommendations and augmented reality try-ons enabling hyper-personalized beauty experiences and virtual consultations.
              </p>
              <div className="text-xs text-blue-600 font-medium">Adoption: Accelerating</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <Sparkles className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Minimalism & Multi-Function</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Consumer shift toward streamlined routines and products offering multiple benefits, moving away from complex multi-step regimens.
              </p>
              <div className="text-xs text-green-600 font-medium">Trend: Growing</div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-blue-600 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Prestige Categories Leading Growth</h3>
                <p className="text-blue-100 mb-6">
                  Prestige fragrance up 15% and prestige haircare up 8% in 2024, while consumers prioritize value and efficacy over saturated ingredient trends.
                </p>
                <div className="flex items-center text-blue-100">
                  <Sparkles className="h-5 w-5 mr-2" />
                  <span className="text-sm">PROOF helps brands navigate premiumization and value-conscious consumer behavior</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$716B</div>
                <div className="text-blue-100">Global beauty market by 2025</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Trusted by Leading Beauty Brands</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              We partner with innovative beauty and cosmetics companies driving industry transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">GlowTech</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">PureBeauty</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">EcoLux</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">BioSkin</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">LuxeCosmetics</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">NaturalGlow</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-proof-gray-600 italic">
              "PROOF's consumer insights helped us launch our biotech skincare line and achieve 35% market share in premium category"
            </p>
            <p className="text-sm text-proof-gray-500 mt-2">— VP of Innovation, Leading Beauty Brand</p>
          </div>
        </div>
      </section>

      {/* Research Solutions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Research Solutions for Beauty & Cosmetics</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Specialized research methodologies to help beauty brands navigate innovation trends and consumer preferences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Users className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Ingredient Innovation Testing</h3>
              <p className="text-proof-gray-600 mb-6">
                Test consumer acceptance of biotech ingredients, science-backed formulations, and sustainable beauty solutions.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Biotech ingredient acceptance</li>
                <li>• Natural vs. synthetic preferences</li>
                <li>• Efficacy claim validation</li>
                <li>• Clean beauty positioning</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Target className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Personalization Strategy</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand consumer preferences for AI-powered recommendations and customized beauty solutions.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• AI recommendation acceptance</li>
                <li>• Customization willingness to pay</li>
                <li>• Virtual try-on effectiveness</li>
                <li>• Personal consultation preferences</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <BarChart3 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Premium Positioning Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Optimize premium product positioning and understand consumer value perceptions in luxury beauty segments.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Luxury positioning optimization</li>
                <li>• Premium price acceptance</li>
                <li>• Prestige brand associations</li>
                <li>• Value-luxury balance analysis</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Eye className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Routine Simplification Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Research consumer preferences for multi-functional products and streamlined beauty routines.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Multi-benefit product testing</li>
                <li>• Routine complexity preferences</li>
                <li>• Time-saving solution validation</li>
                <li>• Product consolidation opportunities</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
          </div>

          {/* Specialized Research Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-proof-gray-900 mb-6 text-center">Specialized Research for Beauty Innovation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Sustainability Impact</h4>
                <p className="text-sm text-proof-gray-600">Research eco-friendly packaging preferences and sustainable ingredient acceptance across demographics.</p>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Digital Beauty Experience</h4>
                <p className="text-sm text-proof-gray-600">Optimize virtual consultations, AR try-ons, and digital-first beauty discovery journeys.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Global Beauty Trends</h4>
                <p className="text-sm text-proof-gray-600">Navigate cultural beauty preferences and regional market entry strategies worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Case Studies for Beauty & Cosmetics</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Real results from our research with leading beauty brands and cosmetics companies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-l-4 border-proof-blue-600">
              <div className="flex items-center mb-4">
                <Beaker className="h-8 w-8 text-proof-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Biotech Skincare Launch</h3>
                  <p className="text-sm text-proof-gray-600">Innovation Strategy</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A premium beauty brand needed to understand consumer acceptance of lab-engineered peptides and optimize their biotech skincare positioning.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Achieved 35% market share in premium category</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Validated 78% consumer acceptance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Optimized science communication strategy</span>
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
                  <h3 className="text-xl font-semibold text-proof-gray-900">AI Personalization Platform</h3>
                  <p className="text-sm text-proof-gray-600">Digital Innovation</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A beauty tech company wanted to optimize their AI-powered recommendation engine and virtual try-on experience for maximum user engagement.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased conversion rate by 67%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Achieved 89% user satisfaction</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Reduced return rate by 43%</span>
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
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Who We Work With in Beauty & Cosmetics</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From global beauty conglomerates to innovative indie brands, we partner with companies across the beauty ecosystem.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Building2 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Global Beauty Brands</h3>
              <p className="text-proof-gray-600 mb-6">
                Established beauty companies innovating with biotech ingredients and sustainable formulations.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Multinational beauty conglomerates</li>
                <li>• Prestige cosmetics brands</li>
                <li>• Luxury skincare companies</li>
                <li>• Traditional beauty manufacturers</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Sparkles className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Beauty Tech Innovators</h3>
              <p className="text-proof-gray-600 mb-6">
                Technology-driven companies developing AI-powered beauty solutions and personalized experiences.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Beauty tech startups</li>
                <li>• AI personalization platforms</li>
                <li>• Virtual try-on solutions</li>
                <li>• Digital beauty consultations</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Beaker className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Clean & Sustainable Beauty</h3>
              <p className="text-proof-gray-600 mb-6">
                Brands focused on natural ingredients, sustainability, and environmentally conscious beauty solutions.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Clean beauty brands</li>
                <li>• Sustainable packaging innovators</li>
                <li>• Natural ingredient companies</li>
                <li>• Eco-friendly beauty startups</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-blue-600 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Who Typically Orders Our Research</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">VP of Innovation</h4>
                  <p className="text-sm text-blue-100">Product development and ingredient research</p>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Brand Directors</h4>
                  <p className="text-sm text-blue-100">Brand positioning and consumer insights</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Chief Marketing Officers</h4>
                  <p className="text-sm text-blue-100">Market trends and consumer behavior</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">R&D Leadership</h4>
                  <p className="text-sm text-blue-100">Ingredient validation and efficacy research</p>
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
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Why Beauty Brands Choose PROOF</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Beauty Innovation Expertise</h3>
                    <p className="text-proof-gray-600">Deep understanding of beauty consumer psychology, ingredient trends, and formulation innovation strategies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Technology & Personalization Focus</h3>
                    <p className="text-proof-gray-600">Specialized research in AI-powered beauty experiences, personalization technologies, and digital innovation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Global Beauty Intelligence</h3>
                    <p className="text-proof-gray-600">Understanding of diverse beauty cultures, regional preferences, and global market entry strategies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-proof-gray-50 to-proof-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">8+</div>
                  <div className="text-sm text-proof-gray-600">Years in Beauty Research</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">180+</div>
                  <div className="text-sm text-proof-gray-600">Beauty Products Tested</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">92%</div>
                  <div className="text-sm text-proof-gray-600">Launch Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">12d</div>
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
                Ready to Transform Your Beauty Innovation?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get the consumer insights you need to navigate biotech innovation, optimize personalization strategies, and succeed in the competitive beauty market.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Free 30-minute consultation on beauty trends</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Custom research proposal within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Beauty innovation and consumer behavior insights</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">beauty@proofinsights.com</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-proof-gray-900 mb-6">Get Your Beauty Research Proposal</h3>
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
                    placeholder="Your Beauty Company"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Research Challenge *</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Tell us about your beauty research needs, innovation challenges, or consumer insight questions..."
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