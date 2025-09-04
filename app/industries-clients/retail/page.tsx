import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Store, TrendingUp, Users, Target, BarChart3, Eye, Zap, Brain, Smartphone, Building2, User, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function RetailPage() {
  console.log("Retail page loaded")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Store className="h-8 w-8 text-proof-blue-600 mr-3" />
                <span className="text-proof-blue-600 font-semibold text-lg">Retail</span>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Master the Retail Revolution
              </h1>
              <p className="text-xl text-proof-gray-600 mb-8 leading-relaxed">
                Transform your retail business with strategic insights into experiential commerce, AI personalization, and omnichannel experiences. We help retailers understand market dynamics with 21% of purchases expected online by 2025 and rapid technology adoption driving customer engagement.
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
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern retail store and customer experience" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-proof-green-600" />
                    <div>
                      <div className="text-sm font-semibold text-proof-gray-900">Online Growth</div>
                      <div className="text-xs text-proof-gray-600">21% by 2025</div>
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
              Revolutionary trends transforming retail experiences and their impact on consumer shopping behavior.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Brain className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">AI-Driven Personalization</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                <strong>70% of retail executives plan AI capabilities</strong> to enhance customer engagement, demand forecasting, and deliver personalized, frictionless experiences.
              </p>
              <div className="text-xs text-blue-600 font-medium">Trend: Essential</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <Eye className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Experiential Commerce</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Focus shifting from transactions to experiences, investing in technology for unified, differentiated shopping journeys online and in-store.
              </p>
              <div className="text-xs text-purple-600 font-medium">Opportunity: High</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <Smartphone className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Social & Marketplace Growth</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Half of shoppers purchase through social media. Marketplaces dominate offering variety and convenience, with Buy Now, Pay Later reshaping payments.
              </p>
              <div className="text-xs text-green-600 font-medium">Impact: Revolutionary</div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-blue-600 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Global E-commerce Expansion</h3>
                <p className="text-blue-100 mb-6">
                  2.77 billion global online shoppers—about a third of the world's population. Retail industry expects mid-single-digit growth in 2025 supported by strong economy and consumer spending.
                </p>
                <div className="flex items-center text-blue-100">
                  <Store className="h-5 w-5 mr-2" />
                  <span className="text-sm">PROOF helps retailers navigate digital transformation and customer-centric strategies</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2.77B</div>
                <div className="text-blue-100">Global online shoppers</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Trusted by Leading Retail Companies</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              We partner with innovative retail companies driving customer experience transformation and digital innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">RetailMax</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">ShopSmart</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">CommerceHub</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">MegaStore</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">EliteRetail</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">NextGen</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-proof-gray-600 italic">
              "PROOF's research helped us optimize our omnichannel strategy and increase customer engagement by 67%"
            </p>
            <p className="text-sm text-proof-gray-500 mt-2">— VP of Customer Experience, Leading Retail Chain</p>
          </div>
        </div>
      </section>

      {/* Research Solutions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Research Solutions for Retail</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Specialized research methodologies to help retail companies navigate digital transformation and enhance customer experiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Users className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Customer Experience Optimization</h3>
              <p className="text-proof-gray-600 mb-6">
                Research customer journey touchpoints and optimize experiences across all channels for maximum engagement and conversion.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Omnichannel journey mapping</li>
                <li>• Customer satisfaction measurement</li>
                <li>• Touchpoint optimization</li>
                <li>• Experience personalization research</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Target className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Digital Commerce Strategy</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand online shopping behavior and optimize e-commerce platforms for better conversion and customer retention.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• E-commerce user experience testing</li>
                <li>• Shopping cart optimization</li>
                <li>• Mobile commerce preferences</li>
                <li>• Payment method analysis</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <BarChart3 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Store Format Innovation</h3>
              <p className="text-proof-gray-600 mb-6">
                Research customer preferences for physical retail formats and optimize store layouts for enhanced shopping experiences.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Store layout optimization</li>
                <li>• Showroom concept testing</li>
                <li>• Interactive display effectiveness</li>
                <li>• Micro-fulfillment center acceptance</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Eye className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Technology Adoption Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand customer readiness for retail innovations and optimize technology implementation strategies.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• AI personalization acceptance</li>
                <li>• AR/VR shopping experience testing</li>
                <li>• Self-checkout preferences</li>
                <li>• Contactless payment adoption</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
          </div>

          {/* Specialized Research Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-proof-gray-900 mb-6 text-center">Specialized Research for Retail Innovation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Social Commerce Strategy</h4>
                <p className="text-sm text-proof-gray-600">Research social media shopping behavior and optimize social commerce platform strategies.</p>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Marketplace Optimization</h4>
                <p className="text-sm text-proof-gray-600">Understand marketplace consumer preferences and optimize multi-channel selling strategies.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Loyalty Program Design</h4>
                <p className="text-sm text-proof-gray-600">Research customer loyalty drivers and optimize reward program structures and benefits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Case Studies for Retail</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Real results from our research with leading retail companies and shopping centers.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-l-4 border-proof-blue-600">
              <div className="flex items-center mb-4">
                <Smartphone className="h-8 w-8 text-proof-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Omnichannel Experience</h3>
                  <p className="text-sm text-proof-gray-600">Digital Transformation</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A major retail chain needed to understand customer preferences across digital and physical touchpoints to optimize their omnichannel strategy.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased customer engagement by 67%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Improved conversion rate by 34%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Reduced cart abandonment by 42%</span>
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
                  <p className="text-sm text-proof-gray-600">Customer Experience Enhancement</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A retail technology company wanted to optimize their AI-powered personalization engine and understand customer acceptance of automated recommendations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Achieved 78% personalization acceptance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased average order value by 29%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Improved customer satisfaction to 92%</span>
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
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Who We Work With in Retail</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From global retail chains to innovative e-commerce platforms, we partner with companies across the retail ecosystem.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Building2 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Retail Chains & Department Stores</h3>
              <p className="text-proof-gray-600 mb-6">
                Established retail companies optimizing omnichannel experiences and implementing digital transformation strategies.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• National retail chains</li>
                <li>• Department store companies</li>
                <li>• Specialty retail stores</li>
                <li>• Regional shopping centers</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Smartphone className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">E-commerce Platforms</h3>
              <p className="text-proof-gray-600 mb-6">
                Digital-first companies developing innovative online shopping experiences and marketplace solutions.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• E-commerce platforms</li>
                <li>• Online marketplace providers</li>
                <li>• Direct-to-consumer brands</li>
                <li>• Social commerce companies</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Brain className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Retail Technology Providers</h3>
              <p className="text-proof-gray-600 mb-6">
                Technology companies developing solutions for personalization, analytics, and customer experience enhancement.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Retail technology solutions</li>
                <li>• Customer analytics platforms</li>
                <li>• Point-of-sale system providers</li>
                <li>• Loyalty program platforms</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-blue-600 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Who Typically Orders Our Research</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Chief Customer Officers</h4>
                  <p className="text-sm text-blue-100">Customer experience strategy and optimization</p>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">VP of Digital</h4>
                  <p className="text-sm text-blue-100">Digital transformation and technology adoption</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Head of Marketing</h4>
                  <p className="text-sm text-blue-100">Brand positioning and customer insights</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Operations Directors</h4>
                  <p className="text-sm text-blue-100">Store optimization and process improvement</p>
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
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Why Retail Companies Choose PROOF</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Retail Industry Expertise</h3>
                    <p className="text-proof-gray-600">Deep understanding of retail consumer behavior, omnichannel dynamics, and technology adoption patterns.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Customer Experience Focus</h3>
                    <p className="text-proof-gray-600">Specialized research in customer journey optimization, personalization strategies, and experiential commerce.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Digital Innovation Intelligence</h3>
                    <p className="text-proof-gray-600">Understanding of emerging retail technologies, AI personalization, and social commerce trends.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-proof-gray-50 to-proof-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">12+</div>
                  <div className="text-sm text-proof-gray-600">Years in Retail Research</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">400+</div>
                  <div className="text-sm text-proof-gray-600">Retail Studies Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">91%</div>
                  <div className="text-sm text-proof-gray-600">Store Optimization Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">18d</div>
                  <div className="text-sm text-proof-gray-600">Average Research Delivery</div>
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
                Ready to Transform Your Retail Strategy?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get the consumer insights you need to optimize customer experiences, accelerate digital transformation, and succeed in the evolving retail landscape.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Free 30-minute consultation on retail trends</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Custom research proposal within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Omnichannel and customer experience insights</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">retail@proofinsights.com</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-proof-gray-900 mb-6">Get Your Retail Research Proposal</h3>
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
                    placeholder="Your Retail Company"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Research Challenge *</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Tell us about your retail research needs, customer experience challenges, or digital transformation questions..."
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