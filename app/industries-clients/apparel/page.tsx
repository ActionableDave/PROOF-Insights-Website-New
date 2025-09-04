import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, ShirtIcon, TrendingUp, Users, Target, BarChart3, Eye, Zap, Brain, Globe, Building2, User, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ApparelRetailPage() {
  console.log("Apparel Retail page loaded")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <ShirtIcon className="h-8 w-8 text-proof-blue-600 mr-3" />
                <span className="text-proof-blue-600 font-semibold text-lg">Apparel & Retail</span>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Navigate the $1.7T Retail Revolution
              </h1>
              <p className="text-xl text-proof-gray-600 mb-8 leading-relaxed">
                Transform your retail business with strategic insights into sustainability trends, digital innovation, and value-conscious consumer behavior. We help fashion and retail companies understand market dynamics in an industry where eCommerce alone will exceed $1.2T by 2025.
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
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Fashion retail and shopping experience" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-proof-green-600" />
                    <div>
                      <div className="text-sm font-semibold text-proof-gray-900">Market Growth</div>
                      <div className="text-xs text-proof-gray-600">$1.2T eCommerce by 2025</div>
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
              Critical trends reshaping fashion and retail industries and their impact on consumer shopping behavior.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <Globe className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Sustainability Essential</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Consumers demand transparency about materials, production, and environmental impact. <strong>Organic, recycled, and plant-based materials</strong> becoming standard.
              </p>
              <div className="text-xs text-green-600 font-medium">Trend: Essential</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Brain className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Value-Driven Shopping</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Inflation drives 75% of consumers to trade down for better value. 86% of Gen Z and millennials prioritize both affordability and sustainability.
              </p>
              <div className="text-xs text-blue-600 font-medium">Impact: High</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <Zap className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Digital Commerce Dominance</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Fashion eCommerce will exceed $1.2 trillion by 2025. Social commerce, metaverse, and tech-enabled experiences driving growth.
              </p>
              <div className="text-xs text-purple-600 font-medium">Growth: Explosive</div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-blue-600 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Retail Experience Revolution</h3>
                <p className="text-blue-100 mb-6">
                  Physical stores evolving into showrooms and micro-fulfillment centers. Brands investing in personalization and blending digital with in-person shopping experiences.
                </p>
                <div className="flex items-center text-blue-100">
                  <Globe className="h-5 w-5 mr-2" />
                  <span className="text-sm">PROOF helps retailers navigate omnichannel transformation and circular business models</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$1.7T</div>
                <div className="text-blue-100">Global apparel market size</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Trusted by Leading Retail Brands</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              We partner with innovative fashion and retail companies driving sustainable commerce transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">StyleCo</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">EcoFashion</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">TrendLab</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">RetailTech</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">ModernWear</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">CircularMode</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-proof-gray-600 italic">
              "PROOF's consumer insights helped us transition to sustainable practices and increase customer loyalty by 52%"
            </p>
            <p className="text-sm text-proof-gray-500 mt-2">— VP of Sustainability, Leading Fashion Brand</p>
          </div>
        </div>
      </section>

      {/* Research Solutions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Research Solutions for Apparel & Retail</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Specialized research methodologies to help fashion and retail companies navigate sustainability demands and digital transformation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Users className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Sustainability Impact Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand consumer willingness to pay for sustainable fashion and optimize eco-friendly positioning strategies.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Sustainable material preferences</li>
                <li>• Circular economy adoption</li>
                <li>• Environmental messaging optimization</li>
                <li>• Green premium pricing analysis</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Target className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Omnichannel Experience Optimization</h3>
              <p className="text-proof-gray-600 mb-6">
                Research customer journey across digital and physical touchpoints to optimize unified shopping experiences.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Customer journey mapping</li>
                <li>• Digital-physical integration</li>
                <li>• Personalization effectiveness</li>
                <li>• Channel preference analysis</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <BarChart3 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Value Positioning Strategy</h3>
              <p className="text-proof-gray-600 mb-6">
                Navigate price-sensitive consumer behavior while maintaining brand value and quality perceptions.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Value perception optimization</li>
                <li>• Price sensitivity analysis</li>
                <li>• Quality-price balance testing</li>
                <li>• Promotional strategy effectiveness</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Eye className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Social Commerce Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand social media shopping behavior and optimize influencer marketing and social commerce strategies.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Social shopping preferences</li>
                <li>• Influencer impact measurement</li>
                <li>• User-generated content effectiveness</li>
                <li>• Platform-specific strategies</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
          </div>

          {/* Specialized Research Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-proof-gray-900 mb-6 text-center">Specialized Research for Fashion Innovation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Resale & Circular Models</h4>
                <p className="text-sm text-proof-gray-600">Research consumer adoption of secondhand fashion and circular business model acceptance.</p>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Technology Integration</h4>
                <p className="text-sm text-proof-gray-600">Optimize AR try-ons, AI styling recommendations, and virtual shopping experiences.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Generation-Specific Insights</h4>
                <p className="text-sm text-proof-gray-600">Understand Gen Z and millennial fashion preferences and shopping behaviors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Case Studies for Apparel & Retail</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Real results from our research with leading fashion brands and retail companies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-l-4 border-proof-blue-600">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-proof-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Sustainable Fashion Line</h3>
                  <p className="text-sm text-proof-gray-600">Eco-Innovation Strategy</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A fashion retailer needed to understand consumer willingness to pay for sustainable materials and optimize their eco-friendly collection positioning.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased customer loyalty by 52%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Achieved 34% premium price acceptance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Launched successful sustainable line</span>
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
                  <h3 className="text-xl font-semibold text-proof-gray-900">Omnichannel Experience</h3>
                  <p className="text-sm text-proof-gray-600">Digital Transformation</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A retail chain wanted to optimize their omnichannel strategy and understand how customers navigate between online and in-store experiences.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased conversion rate by 43%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Improved customer satisfaction to 91%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Reduced cart abandonment by 38%</span>
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
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Who We Work With in Apparel & Retail</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From global fashion retailers to innovative sustainable brands, we partner with companies across the apparel and retail ecosystem.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Building2 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Global Fashion Retailers</h3>
              <p className="text-proof-gray-600 mb-6">
                Established fashion companies navigating sustainability transformation and digital commerce evolution.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Multinational fashion retailers</li>
                <li>• Department store chains</li>
                <li>• Specialty apparel brands</li>
                <li>• Luxury fashion houses</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Globe className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Sustainable Fashion Brands</h3>
              <p className="text-proof-gray-600 mb-6">
                Forward-thinking companies prioritizing environmental responsibility and circular business models.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Eco-conscious fashion brands</li>
                <li>• Circular fashion innovators</li>
                <li>• Ethical manufacturing companies</li>
                <li>• Resale platform providers</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Zap className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Retail Technology Companies</h3>
              <p className="text-proof-gray-600 mb-6">
                Technology-focused companies developing omnichannel solutions and digital shopping experiences.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• eCommerce platform providers</li>
                <li>• Retail technology solutions</li>
                <li>• AR/VR shopping innovators</li>
                <li>• Social commerce platforms</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-blue-600 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Who Typically Orders Our Research</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Chief Marketing Officers</h4>
                  <p className="text-sm text-blue-100">Brand positioning and consumer insights</p>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">VP of Sustainability</h4>
                  <p className="text-sm text-blue-100">Environmental strategy and consumer acceptance</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Head of Digital</h4>
                  <p className="text-sm text-blue-100">Omnichannel strategy and technology adoption</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Merchandising Directors</h4>
                  <p className="text-sm text-blue-100">Product strategy and trend forecasting</p>
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
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Why Fashion Retailers Choose PROOF</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Fashion Industry Expertise</h3>
                    <p className="text-proof-gray-600">Deep understanding of fashion consumer psychology, sustainability trends, and retail transformation dynamics.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Omnichannel Intelligence</h3>
                    <p className="text-proof-gray-600">Specialized research in digital-physical integration, social commerce, and evolving customer journey mapping.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Sustainability Focus</h3>
                    <p className="text-proof-gray-600">Understanding of environmental consumer behavior and circular economy adoption patterns in fashion.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-proof-gray-50 to-proof-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">14+</div>
                  <div className="text-sm text-proof-gray-600">Years in Fashion Research</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">320+</div>
                  <div className="text-sm text-proof-gray-600">Fashion Products Tested</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">88%</div>
                  <div className="text-sm text-proof-gray-600">Collection Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">16d</div>
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
                Ready to Transform Your Fashion Strategy?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get the consumer insights you need to navigate sustainability demands, optimize omnichannel experiences, and succeed in the evolving fashion retail landscape.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Free 30-minute consultation on fashion trends</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Custom research proposal within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Sustainability and digital commerce insights</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">fashion@proofinsights.com</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-proof-gray-900 mb-6">Get Your Fashion Research Proposal</h3>
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
                    placeholder="Your Fashion Company"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Research Challenge *</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Tell us about your fashion research needs, sustainability challenges, or consumer behavior questions..."
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