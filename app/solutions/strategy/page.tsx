



import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Map, Users, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/u2FRo2W9CLbueZazhmCrW/strategic-research.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Strategic Market Research
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Make confident market entry decisions with comprehensive research that uncovers opportunities, identifies risks, and maps the competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            
          </div>
          
          <div className="space-y-12">
            {/* Market Discovery */}
            <div id="market-discovery-opportunity" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Target className="h-12 w-12 text-proof-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Market Discovery & Opportunity Assessment</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Identify and size market opportunities before you invest. Our comprehensive market discovery research helps you understand demand, estimate market size, and identify the most attractive audience segments.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Total addressable market (TAM) sizing</li>
                  <li>• Market growth projections and trends</li>
                  <li>• Strategic prioritization of opportunities</li>
                  <li>• Entry barrier analysis</li>
                  <li>• Regulatory and market environment assessment</li>
                </ul>
                <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white" asChild>
                  <a href="/solutions/strategy/market-discovery-opportunity">Learn More About Market Discovery</a>
                </Button>
              </div>
              <Link href="/resources/case-studies/ltot-therapy-market-sizing">
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Target className="h-8 w-8 text-proof-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Healthcare
                        </Badge>
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Market Discovery & Opportunity
                        </Badge>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-proof-blue-600 transition-colors">
                        Global O2 Products Company | LTOT Market Sizing & Strategic Assessment
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How a global oxygen therapy company evaluated market opportunities for portable and stationary Long-Term Oxygen Therapy (LTOT) solutions, determining total addressable market size, growth potential, and competitive dynamics to guide product development and international expansion.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">Global Market Analysis</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">Excel-Based TAM Model</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">Strategic Framework</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium group-hover:text-proof-blue-600">
                      Read Full Case Study
                    </span>
                    <ArrowRight className="h-5 w-5 text-proof-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </div>

            {/* Market Segmentation */}
            <div id="market-segmentation" className="grid lg:grid-cols-2 gap-12 items-center">
              <Link href="/resources/case-studies/prestige-beauty-landscape" className="lg:order-1">
                <Card className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Users className="h-8 w-8 text-proof-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Beauty & Cosmetics
                        </Badge>
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Competitive Landscape
                        </Badge>
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Segmentation
                        </Badge>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-proof-blue-600 transition-colors">
                        Understanding the Prestige Beauty Landscape
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How a beauty brand gained deep competitive insights through comprehensive market analysis and customer segmentation research across 13,002 participants.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">13,002 Participants</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">6 Key Segments</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">100% Market Coverage</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium group-hover:text-proof-blue-600">
                      Read Full Case Study
                    </span>
                    <ArrowRight className="h-5 w-5 text-proof-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <div className="lg:order-2">
                <Users className="h-12 w-12 text-proof-purple-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Market Segmentation</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Understand your market's diversity and identify the most valuable customer segments. Our segmentation research reveals distinct groups with unique needs, behaviors, and value drivers.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Demographic, psychographic, and behavioral segmentation</li>
                  <li>• Needs-based segmentation analysis</li>
                  <li>• Segment size and value estimation</li>
                  <li>• Persona development and profiling</li>
                  <li>• Targeting and positioning recommendations</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-proof-purple-600 hover:bg-proof-purple-700 text-white font-semibold" asChild>
                    <a href="/solutions/strategy/market-segmentation">Explore Segmentation Methods</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Competitive Landscape */}
            <div id="competitive-landscape" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Map className="h-12 w-12 text-proof-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Landscape Analysis</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Map your competitive environment and identify opportunities for differentiation. Our competitive analysis provides deep insights into competitor strategies, strengths, and vulnerabilities.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Competitor identification and profiling</li>
                  <li>• Strengths, weaknesses, and positioning analysis</li>
                  <li>• Market share and performance benchmarking</li>
                  <li>• Pricing and product comparison</li>
                  <li>• Competitive threat assessment</li>
                </ul>
                <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white" asChild>
                  <a href="/solutions/strategy/competitive-landscape">Learn more about Competitive Analysis</a>
                </Button>
              </div>
              <Link href="/resources/case-studies/consumer-goods-innovation">
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Target className="h-8 w-8 text-proof-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Food & Restaurants
                        </Badge>
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Competitive Landscape
                        </Badge>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-proof-blue-600 transition-colors">
                        Understanding the Snacking Landscape
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How comprehensive market research and consumer perception analysis revealed key insights to drive product innovation and strategic positioning in the competitive snacking sector.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">23 Min Survey</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">US & UK Markets</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">Multi-Segment Analysis</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium group-hover:text-proof-blue-600">
                      Read Full Case Study
                    </span>
                    <ArrowRight className="h-5 w-5 text-proof-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </div>

            {/* Brand Strategy */}
            <div id="brand-strategy" className="grid lg:grid-cols-2 gap-12 items-center">
              <Link href="/resources/case-studies/digital-brand-consolidation" className="lg:order-1">
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <TrendingUp className="h-8 w-8 text-proof-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Technology
                        </Badge>
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Brand Strategy
                        </Badge>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-proof-blue-600 transition-colors">
                        Global Brand Consolidation Strategy
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A globally recognizable technology company successfully consolidated multiple brands using comprehensive international market research across 9 countries.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">9 Global Markets</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">100% Strategic Clarity</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">5 Key Questions</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium group-hover:text-proof-blue-600">
                      Read Full Case Study
                    </span>
                    <ArrowRight className="h-5 w-5 text-proof-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <div className="lg:order-2">
                <TrendingUp className="h-12 w-12 text-proof-purple-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Brand Strategy Research</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Develop a compelling brand strategy that resonates with your target audience. Our brand research helps you define your unique value proposition and differentiate from competitors.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Brand perception and awareness studies</li>
                  <li>• Value proposition testing and optimization</li>
                  <li>• Brand positioning and messaging research</li>
                  <li>• Brand architecture and portfolio strategy</li>
                  <li>• Brand health tracking and monitoring</li>
                </ul>
                <Button className="bg-proof-purple-600 hover:bg-proof-purple-700 text-white font-semibold px-6 py-3" asChild>
                  <a href="/solutions/strategy/brand-strategy">Discover Brand Strategy Services</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Develop Your Market Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our strategic research can help you make confident market entry and growth decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold" asChild>
              <a href="/contact">Schedule Strategy Consultation</a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 text-lg font-semibold" asChild>
              <a href="/resources/case-studies">View Strategy Case Studies</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


