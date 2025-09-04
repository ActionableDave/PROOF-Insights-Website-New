import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, UtensilsCrossed, TrendingUp, Users, Target, BarChart3, Eye, Zap, Brain, Smartphone, Building2, User, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function FoodRestaurantsPage() {
  console.log("Food Restaurants page loaded")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <UtensilsCrossed className="h-8 w-8 text-proof-blue-600 mr-3" />
                <span className="text-proof-blue-600 font-semibold text-lg">Food & Restaurants</span>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Navigate the Digital Dining Revolution
              </h1>
              <p className="text-xl text-proof-gray-600 mb-8 leading-relaxed">
                Transform your food service business with strategic insights into technology adoption, menu innovation, and changing consumer dining behaviors. We help restaurants and food companies understand market dynamics driven by Millennials and Gen Z's increased spending on dining experiences.
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
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern restaurant and food service technology" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-proof-green-600" />
                    <div>
                      <div className="text-sm font-semibold text-proof-gray-900">Gen Z/Millennial</div>
                      <div className="text-xs text-proof-gray-600">Driving Growth</div>
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
              Critical trends reshaping the food service industry and their impact on restaurant operations and consumer dining behavior.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Smartphone className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Restaurants rapidly adopting <strong>AI, automation, and digital tools</strong> to improve operational efficiency, manage inventory, and enhance customer experience.
              </p>
              <div className="text-xs text-blue-600 font-medium">Trend: Essential</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <Brain className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Experience-Driven Dining</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Rising disposable income among Millennials and Gen Z driving increased spending on dining out with focus on experiences and ambiance.
              </p>
              <div className="text-xs text-green-600 font-medium">Growth: Strong</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <UtensilsCrossed className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Health & Innovation Focus</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Menus evolving to reflect consumer demand for healthier options and unique experiences, with emphasis on promotional value and targeted marketing.
              </p>
              <div className="text-xs text-purple-600 font-medium">Trend: Growing</div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Industry Challenges & Opportunities</h3>
                <p className="text-blue-100 mb-6">
                  While some restaurants thrive with digital innovation, nearly 40% saw sales declines in 2024. Success depends on agility in responding to economic pressures and evolving diner expectations.
                </p>
                <div className="flex items-center text-blue-100">
                  <UtensilsCrossed className="h-5 w-5 mr-2" />
                  <span className="text-sm">PROOF helps restaurants navigate digital transformation and consumer behavior changes</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">60%</div>
                <div className="text-blue-100">Restaurants using digital solutions</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Trusted by Leading Food Service Brands</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              We partner with innovative restaurants and food service companies driving culinary and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">FreshChef</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">Dinetech</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">FlavorLab</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">QuickServe</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">CulinaryEdge</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">SmartKitchen</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-proof-gray-600 italic">
              "PROOF's customer insights helped us optimize our menu innovation and increase customer satisfaction by 47%"
            </p>
            <p className="text-sm text-proof-gray-500 mt-2">— VP of Culinary Innovation, Leading Restaurant Chain</p>
          </div>
        </div>
      </section>

      {/* Research Solutions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Research Solutions for Food & Restaurants</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Specialized research methodologies to help food service companies navigate digital transformation and evolving consumer preferences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Users className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Menu Innovation & Testing</h3>
              <p className="text-proof-gray-600 mb-6">
                Test new menu items, dietary options, and flavor profiles to understand consumer preferences and optimize offerings.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• New dish concept validation</li>
                <li>• Health-conscious menu optimization</li>
                <li>• Flavor preference analysis</li>
                <li>• Dietary restriction accommodation</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Target className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Digital Experience Optimization</h3>
              <p className="text-proof-gray-600 mb-6">
                Research customer preferences for online ordering, delivery platforms, and restaurant technology adoption.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Digital ordering optimization</li>
                <li>• Delivery platform preferences</li>
                <li>• Payment technology acceptance</li>
                <li>• Mobile app feature testing</li>
              </ul>
              <div className="flex items-center text-proof-purple-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <BarChart3 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Customer Experience Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand dining preferences, service expectations, and factors that drive customer loyalty and repeat visits.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Service quality optimization</li>
                <li>• Ambiance preference studies</li>
                <li>• Customer journey mapping</li>
                <li>• Loyalty program effectiveness</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Eye className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Pricing & Value Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Optimize pricing strategies and understand consumer value perceptions in competitive food service markets.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Price sensitivity analysis</li>
                <li>• Value perception optimization</li>
                <li>• Promotional strategy testing</li>
                <li>• Competitive pricing research</li>
              </ul>
              <div className="flex items-center text-proof-purple-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
          </div>

          {/* Specialized Research Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-proof-gray-900 mb-6 text-center">Specialized Research for Food Service Innovation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">AI & Automation Adoption</h4>
                <p className="text-sm text-proof-gray-600">Research customer acceptance of AI-powered ordering, robotic food preparation, and automated service systems.</p>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-proof-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Generational Preferences</h4>
                <p className="text-sm text-proof-gray-600">Understand dining behavior differences across Millennial, Gen Z, and other demographic segments.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Sustainability Impact</h4>
                <p className="text-sm text-proof-gray-600">Research consumer preferences for sustainable packaging, local sourcing, and environmentally conscious dining.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Case Studies for Food & Restaurants</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Real results from our research with leading restaurant chains and food service companies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-l-4 border-proof-blue-600">
              <div className="flex items-center mb-4">
                <UtensilsCrossed className="h-8 w-8 text-proof-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Healthy Menu Innovation</h3>
                  <p className="text-sm text-proof-gray-600">Culinary Strategy</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A restaurant chain needed to understand consumer preferences for healthy menu options and optimize their nutritious offerings positioning.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased customer satisfaction by 47%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Achieved 28% increase in healthy option sales</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Successfully launched 6 new menu items</span>
                </div>
              </div>
              <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 text-sm font-medium">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white border-l-4 border-proof-purple-600">
              <div className="flex items-center mb-4">
                <Smartphone className="h-8 w-8 text-proof-purple-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Digital Ordering Platform</h3>
                  <p className="text-sm text-proof-gray-600">Technology Integration</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A fast-casual chain wanted to optimize their mobile ordering experience and understand customer preferences for digital payment options.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased app adoption by 65%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Reduced order processing time by 40%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Improved customer retention by 33%</span>
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
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Who We Work With in Food & Restaurants</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From global restaurant chains to innovative food tech companies, we partner with organizations across the food service ecosystem.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Building2 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Restaurant Chains & Groups</h3>
              <p className="text-proof-gray-600 mb-6">
                Established restaurant companies optimizing operations and enhancing customer experiences across multiple locations.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• National restaurant chains</li>
                <li>• Fast-casual dining groups</li>
                <li>• Fine dining establishments</li>
                <li>• Regional restaurant operators</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Smartphone className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Food Technology Companies</h3>
              <p className="text-proof-gray-600 mb-6">
                Innovative companies developing digital solutions, delivery platforms, and restaurant management technologies.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Food delivery platforms</li>
                <li>• Restaurant technology providers</li>
                <li>• Kitchen automation companies</li>
                <li>• Ordering system developers</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <UtensilsCrossed className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Food Service Suppliers</h3>
              <p className="text-proof-gray-600 mb-6">
                Companies providing ingredients, equipment, and services to restaurants and food service operations.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Food and beverage suppliers</li>
                <li>• Restaurant equipment manufacturers</li>
                <li>• Packaging solution providers</li>
                <li>• Ingredient innovation companies</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Who Typically Orders Our Research</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Chief Marketing Officers</h4>
                  <p className="text-sm text-blue-100">Brand positioning and customer insights</p>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Culinary Directors</h4>
                  <p className="text-sm text-blue-100">Menu innovation and food trends</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Operations VP</h4>
                  <p className="text-sm text-blue-100">Technology adoption and efficiency</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Guest Experience Leaders</h4>
                  <p className="text-sm text-blue-100">Customer satisfaction and service optimization</p>
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
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Why Food Service Companies Choose PROOF</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Food Service Expertise</h3>
                    <p className="text-proof-gray-600">Deep understanding of restaurant operations, food trends, and dining behavior across different service segments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-purple-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Digital Innovation Focus</h3>
                    <p className="text-proof-gray-600">Specialized research in restaurant technology adoption, digital ordering systems, and automated service solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Consumer Dining Intelligence</h3>
                    <p className="text-proof-gray-600">Understanding of generational dining preferences, health trends, and evolving food service expectations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-proof-gray-50 to-proof-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">11+</div>
                  <div className="text-sm text-proof-gray-600">Years in Food Service Research</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-purple-600 mb-2">275+</div>
                  <div className="text-sm text-proof-gray-600">Menu Items Tested</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">89%</div>
                  <div className="text-sm text-proof-gray-600">Menu Launch Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-purple-600 mb-2">18d</div>
                  <div className="text-sm text-proof-gray-600">Average Research Turnaround</div>
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
                Ready to Enhance Your Food Service Strategy?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get the consumer insights you need to navigate digital transformation, optimize menu innovation, and succeed in the competitive food service landscape.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Free 30-minute consultation on food service trends</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Custom research proposal within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Menu innovation and customer behavior insights</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">food@proofinsights.com</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-proof-gray-900 mb-6">Get Your Food Service Research Proposal</h3>
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
                    placeholder="Your Restaurant/Food Company"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Research Challenge *</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Tell us about your food service research needs, menu innovation challenges, or customer experience questions..."
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