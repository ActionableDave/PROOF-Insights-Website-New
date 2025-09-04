import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Heart, TrendingUp, Users, Target, BarChart3, Eye, Zap, Brain, Smartphone, Shield, Building2, User, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function DentalOralCarePage() {
  console.log("Dental Oral Care page loaded")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-proof-blue-600 mr-3" />
                <span className="text-proof-blue-600 font-semibold text-lg">Dental & Oral Care</span>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Drive Growth in the $91B Oral Care Market
              </h1>
              <p className="text-xl text-proof-gray-600 mb-8 leading-relaxed">
                Navigate the evolving dental and oral care landscape with strategic insights that address premiumization trends, sustainability demands, and the shift to direct-to-consumer channels. We help brands understand consumer preferences in a market growing at 5.1% CAGR through 2035.
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
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dental care products and research" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-proof-green-600" />
                    <div>
                      <div className="text-sm font-semibold text-proof-gray-900">Market Growth</div>
                      <div className="text-xs text-proof-gray-600">+5.1% CAGR to 2035</div>
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
              Critical trends driving the oral care industry and what they mean for your brand strategy.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <Shield className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Premiumization Wave</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Consumers increasingly choose <strong>advanced herbal toothpaste, electric toothbrushes, and premium mouthwashes</strong> with sophisticated ingredients.
              </p>
              <div className="text-xs text-green-600 font-medium">Trend: Accelerating</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Brain className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Sustainability Revolution</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Major shift toward biodegradable toothbrushes, chemical-free formulations, and eco-friendly packaging as sustainability becomes a key purchase driver.
              </p>
              <div className="text-xs text-blue-600 font-medium">Impact: High</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <Smartphone className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">E-commerce Migration</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Direct-to-consumer brands and online marketplaces are disrupting traditional retail, making products more accessible and personalized.
              </p>
              <div className="text-xs text-purple-600 font-medium">Opportunity: Growing</div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-blue-600 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Global Health Disparities</h3>
                <p className="text-blue-100 mb-6">
                  75% of the global oral disease burden occurs in middle- and low-income countries, presenting both challenges and opportunities for accessible oral care solutions.
                </p>
                <div className="flex items-center text-blue-100">
                  <Heart className="h-5 w-5 mr-2" />
                  <span className="text-sm">PROOF helps brands address diverse market needs with targeted research</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$91B</div>
                <div className="text-blue-100">Projected market size by 2035</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Trusted by Leading Oral Care Brands</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              We partner with innovative dental and oral care companies driving market transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">DentalPro</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">OralTech</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">SmileCare</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">FreshMint</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">WhiteBright</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">DentalMax</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-proof-gray-600 italic">
              "PROOF's consumer insights helped us launch our sustainable line and capture 23% market share in 18 months"
            </p>
            <p className="text-sm text-proof-gray-500 mt-2">— VP Marketing, Leading Oral Care Brand</p>
          </div>
        </div>
      </section>

      {/* Research Solutions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Research Solutions for Dental & Oral Care</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Specialized research methodologies to help oral care brands navigate market trends and capture growth opportunities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Users className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Consumer Preference & Usage Analysis</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand how consumers select oral care products, usage patterns, and preferences for natural vs. conventional formulations.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Product preference mapping</li>
                <li>• Usage frequency analysis</li>
                <li>• Ingredient preference studies</li>
                <li>• Brand switching behavior</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Target className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Premium Product Testing</h3>
              <p className="text-proof-gray-600 mb-6">
                Test advanced formulations, electric devices, and premium positioning strategies to capitalize on the premiumization trend.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Premium feature validation</li>
                <li>• Price sensitivity analysis</li>
                <li>• Technology acceptance testing</li>
                <li>• Luxury positioning research</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <BarChart3 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Sustainability Impact Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Measure consumer willingness to pay for eco-friendly products and optimize sustainable product positioning.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Eco-friendly packaging preferences</li>
                <li>• Sustainable ingredient testing</li>
                <li>• Green messaging optimization</li>
                <li>• Environmental impact communication</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Eye className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Digital Channel Optimization</h3>
              <p className="text-proof-gray-600 mb-6">
                Optimize your direct-to-consumer strategy and e-commerce presence to capture the growing online market.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• E-commerce conversion optimization</li>
                <li>• DTC subscription model testing</li>
                <li>• Digital marketing effectiveness</li>
                <li>• Online review impact analysis</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
          </div>

          {/* Specialized Research Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-proof-gray-900 mb-6 text-center">Specialized Research for Oral Care</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Technology Adoption Studies</h4>
                <p className="text-sm text-proof-gray-600">Research consumer readiness for smart toothbrushes, AI-powered oral health apps, and connected devices.</p>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Therapeutic Claims Testing</h4>
                <p className="text-sm text-proof-gray-600">Validate health benefit claims and therapeutic positioning for specialized oral care products.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Global Market Entry</h4>
                <p className="text-sm text-proof-gray-600">Research cultural preferences and regulatory requirements for international expansion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Case Studies for Dental & Oral Care</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Real results from our research with leading oral care brands and dental product companies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-l-4 border-proof-blue-600">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-proof-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Premium Toothpaste Launch</h3>
                  <p className="text-sm text-proof-gray-600">Natural Ingredients Positioning</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A leading oral care brand needed to understand consumer willingness to pay premium prices for natural, herbal-based toothpaste formulations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Achieved 23% premium price acceptance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Identified 3 key natural ingredients driving preference</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Launched in 18 months with 15% market share</span>
                </div>
              </div>
              <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 text-sm font-medium">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white border-l-4 border-proof-blue-600">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-proof-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Sustainable Packaging Innovation</h3>
                  <p className="text-sm text-proof-gray-600">Eco-Friendly Product Line</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                An emerging brand wanted to understand consumer preferences for biodegradable packaging and sustainable oral care products.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Validated 67% purchase intent for sustainable packaging</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Optimized eco-messaging for maximum impact</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Achieved 40% faster product adoption</span>
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
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Who We Work With in Dental & Oral Care</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From established oral care giants to innovative startup brands, we partner with companies across the dental health spectrum.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Building2 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Global Oral Care Brands</h3>
              <p className="text-proof-gray-600 mb-6">
                Established companies looking to innovate with premium products and sustainable formulations.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Multinational consumer goods companies</li>
                <li>• Traditional toothpaste manufacturers</li>
                <li>• Oral hygiene device makers</li>
                <li>• Professional dental care brands</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Smartphone className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Direct-to-Consumer Brands</h3>
              <p className="text-proof-gray-600 mb-6">
                Innovative startups disrupting traditional oral care with subscription models and natural products.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Subscription oral care services</li>
                <li>• Natural and organic brands</li>
                <li>• Smart toothbrush companies</li>
                <li>• Personalized oral care solutions</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Heart className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Therapeutic & Specialty</h3>
              <p className="text-proof-gray-600 mb-6">
                Companies developing specialized products for specific oral health conditions and therapeutic applications.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Therapeutic oral care products</li>
                <li>• Prescription oral health brands</li>
                <li>• Dental professional products</li>
                <li>• Specialty condition treatments</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-blue-600 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Who Typically Orders Our Research</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">VP of Marketing</h4>
                  <p className="text-sm text-blue-100">Brand positioning and consumer insights</p>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Product Managers</h4>
                  <p className="text-sm text-blue-100">Innovation and product development</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">R&D Directors</h4>
                  <p className="text-sm text-blue-100">Formulation and technology validation</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Market Research</h4>
                  <p className="text-sm text-blue-100">Consumer behavior and trend analysis</p>
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
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Why Oral Care Brands Choose PROOF</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Oral Care Expertise</h3>
                    <p className="text-proof-gray-600">Deep understanding of oral care consumer behavior, regulatory requirements, and health claims validation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Premium & Sustainability Focus</h3>
                    <p className="text-proof-gray-600">Specialized research in premiumization trends and sustainable product development that drives market growth.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Global Market Intelligence</h3>
                    <p className="text-proof-gray-600">Understanding of diverse global markets and cultural differences in oral care habits and preferences.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-proof-gray-50 to-proof-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">12+</div>
                  <div className="text-sm text-proof-gray-600">Years in Oral Care Research</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">150+</div>
                  <div className="text-sm text-proof-gray-600">Dental Products Tested</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">85%</div>
                  <div className="text-sm text-proof-gray-600">Client Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">48h</div>
                  <div className="text-sm text-proof-gray-600">Average Insight Delivery</div>
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
                Ready to Accelerate Your Oral Care Innovation?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get the consumer insights you need to capture the premiumization trend, develop sustainable products, and optimize your direct-to-consumer strategy in the growing oral care market.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Free 30-minute consultation on oral care trends</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Custom research proposal within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Industry benchmarks and competitive analysis</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">dental@proofinsights.com</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-proof-gray-900 mb-6">Get Your Oral Care Research Proposal</h3>
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
                    placeholder="Your Oral Care Company"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Research Challenge *</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Tell us about your oral care research needs, product development challenges, or market questions..."
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