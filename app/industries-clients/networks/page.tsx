import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Wifi, TrendingUp, Users, Target, BarChart3, Eye, Zap, Brain, Cloud, Building2, User, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function NetworksPage() {
  console.log("Networks page loaded")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Wifi className="h-8 w-8 text-proof-blue-600 mr-3" />
                <span className="text-proof-blue-600 font-semibold text-lg">Communications Networks</span>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Navigate the $2.32T Telecom Revolution
              </h1>
              <p className="text-xl text-proof-gray-600 mb-8 leading-relaxed">
                Transform your telecommunications business with strategic insights into 5G expansion, AI integration, and cloud-based services. We help network providers understand market dynamics in an industry growing 6.15% annually with over 2 billion 5G connections globally.
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
                  src="https://images.unsplash.com/photo-1558618047-3c2c0d2cae58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="5G network infrastructure and telecommunications" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-proof-green-600" />
                    <div>
                      <div className="text-sm font-semibold text-proof-gray-900">Market Growth</div>
                      <div className="text-xs text-proof-gray-600">+6.15% CAGR to 2034</div>
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
              Revolutionary technologies transforming telecommunications and their impact on network infrastructure and service delivery.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Wifi className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">5G Network Expansion</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                <strong>Over 2 billion 5G connections in 2024</strong> with 341+ commercial networks worldwide. 5G on track to overtake 4G as dominant technology by 2028.
              </p>
              <div className="text-xs text-blue-600 font-medium">Growth: Explosive</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <Brain className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">AI Integration Revolution</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                AI transforming customer service, network optimization, and operational efficiency with telecom companies leveraging AI for engagement and management.
              </p>
              <div className="text-xs text-purple-600 font-medium">Trend: Essential</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <Cloud className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Cloud & Cybersecurity</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Cloud consumption grew 10% in 2024 with 1M+ organizations using collaboration platforms. Telecom expanding managed cybersecurity offerings.
              </p>
              <div className="text-xs text-green-600 font-medium">Opportunity: Growing</div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Asia-Pacific Leading Innovation</h3>
                <p className="text-blue-100 mb-6">
                  The Asia-Pacific region is the fastest-growing telecom market, while the U.S., China, Japan, and South Korea lead in 5G infrastructure investment and adoption.
                </p>
                <div className="flex items-center text-blue-100">
                  <Wifi className="h-5 w-5 mr-2" />
                  <span className="text-sm">PROOF provides global telecom intelligence for strategic network expansion</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$2.8B</div>
                <div className="text-blue-100">5G core market in 2024</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Trusted by Leading Network Providers</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              We partner with innovative telecommunications companies driving network transformation and connectivity solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">NetworkPro</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">5G Connect</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">TelecomEdge</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">CloudNet</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">IoT Networks</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">SecureComm</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-proof-gray-600 italic">
              "PROOF's market intelligence helped us optimize our 5G rollout strategy and achieve 58% faster network deployment"
            </p>
            <p className="text-sm text-proof-gray-500 mt-2">— VP of Network Strategy, Leading Telecom Provider</p>
          </div>
        </div>
      </section>

      {/* Research Solutions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Research Solutions for Communications Networks</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Specialized research methodologies to help telecommunications companies navigate 5G adoption and network transformation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Users className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">5G Adoption & Implementation</h3>
              <p className="text-proof-gray-600 mb-6">
                Research enterprise and consumer readiness for 5G services and optimize network deployment strategies.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• 5G service demand analysis</li>
                <li>• Enterprise adoption barriers</li>
                <li>• Network coverage optimization</li>
                <li>• IoT connectivity requirements</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Target className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">AI & Automation Strategy</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand customer acceptance of AI-powered services and optimize automated network management solutions.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• AI customer service adoption</li>
                <li>• Network automation benefits</li>
                <li>• Predictive maintenance acceptance</li>
                <li>• Customer engagement optimization</li>
              </ul>
              <div className="flex items-center text-proof-purple-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <BarChart3 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Cybersecurity Services Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Research enterprise demand for managed cybersecurity services and network security solutions.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Security service demand</li>
                <li>• Threat protection priorities</li>
                <li>• Managed service preferences</li>
                <li>• Compliance requirement analysis</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Eye className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Cloud Integration Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand enterprise cloud adoption patterns and optimize cloud-based telecommunications services.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Cloud service migration patterns</li>
                <li>• Hybrid cloud preferences</li>
                <li>• Edge computing demand</li>
                <li>• Integration complexity assessment</li>
              </ul>
              <div className="flex items-center text-proof-purple-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
          </div>

          {/* Specialized Research Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-proof-gray-900 mb-6 text-center">Specialized Research for Network Innovation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">IoT & Connected Devices</h4>
                <p className="text-sm text-proof-gray-600">Research enterprise IoT deployment strategies and connected device infrastructure requirements.</p>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-proof-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">eSIM & Digital Solutions</h4>
                <p className="text-sm text-proof-gray-600">Understand consumer adoption of eSIM technology and digital-first telecom service preferences.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Regulatory Compliance</h4>
                <p className="text-sm text-proof-gray-600">Navigate complex telecommunications regulations and optimize compliance strategies globally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Case Studies for Communications Networks</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Real results from our research with leading telecommunications providers and network infrastructure companies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-l-4 border-proof-blue-600">
              <div className="flex items-center mb-4">
                <Wifi className="h-8 w-8 text-proof-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">5G Enterprise Rollout</h3>
                  <p className="text-sm text-proof-gray-600">Network Deployment Strategy</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A major telecom provider needed to understand enterprise demand for 5G services and optimize their B2B network deployment strategy.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Achieved 58% faster network deployment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Identified 5 high-value enterprise segments</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased enterprise adoption by 45%</span>
                </div>
              </div>
              <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 text-sm font-medium">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white border-l-4 border-proof-purple-600">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-proof-purple-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">AI Customer Service Platform</h3>
                  <p className="text-sm text-proof-gray-600">Digital Transformation</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A telecommunications company wanted to optimize their AI-powered customer service platform and understand consumer acceptance of automated support.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Reduced customer service costs by 42%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Improved customer satisfaction to 86%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased automation acceptance by 67%</span>
                </div>
              </div>
              <Link href="/resources/case-studies" className="flex items-center text-proof-purple-600 text-sm font-medium">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Accelerate Your Network Strategy?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get the strategic insights you need to navigate 5G deployment, optimize AI integration, and succeed in the rapidly evolving telecommunications landscape.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Free 30-minute consultation on telecom trends</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Custom research proposal within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">5G deployment and network optimization insights</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">networks@proofinsights.com</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-proof-gray-900 mb-6">Get Your Telecom Research Proposal</h3>
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
                    placeholder="Your Telecommunications Company"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Research Challenge *</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Tell us about your telecommunications research needs, network deployment challenges, or technology adoption questions..."
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