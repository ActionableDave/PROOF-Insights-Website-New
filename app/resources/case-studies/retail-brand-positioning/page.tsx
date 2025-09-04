import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Download, Share2, Calendar, MapPin, Users, Target, TrendingUp, BarChart3, CheckCircle, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function RetailBrandPositioningCase() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-6 bg-proof-gray-50 border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/resources" className="text-proof-blue-600 hover:text-proof-blue-700">Resources</Link>
            <span className="text-proof-gray-400">/</span>
            <Link href="/resources/case-studies" className="text-proof-blue-600 hover:text-proof-blue-700">Case Studies</Link>
            <span className="text-proof-gray-400">/</span>
            <span className="text-proof-gray-600">Retail Brand Positioning</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-proof-blue-50 to-proof-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources/case-studies" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-proof-blue-100 text-proof-blue-700">Retail</Badge>
                <Badge className="bg-proof-purple-100 text-proof-purple-700">Multi-Dimensional Scaling</Badge>
                <Badge className="bg-proof-gray-100 text-proof-gray-700">Brand Positioning</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-proof-gray-900 mb-6">
                Retail Brand Repositioning & Market Entry
              </h1>
              
              <p className="text-xl text-proof-gray-600 leading-relaxed mb-8">
                How a major retail chain successfully repositioned their brand and entered 3 new markets using comprehensive competitive landscape analysis, achieving a 67% increase in brand awareness and 23% market share growth.
              </p>
              
              <div className="flex gap-4">
                <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Study
                </Button>
                <Button variant="outline" className="border-proof-blue-600 text-proof-blue-600 hover:bg-proof-blue-50">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Case Study
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="p-6 bg-white">
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Duration: 20 weeks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Markets: 3 new regions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Sample: 3,200 consumers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Competitors: 12 analyzed</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Key Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Target className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">3</div>
              <div className="text-proof-gray-600">New Markets Entered</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <TrendingUp className="h-12 w-12 text-proof-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-purple-600 mb-2">67%</div>
              <div className="text-proof-gray-600">Brand Awareness Increase</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <BarChart3 className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">23%</div>
              <div className="text-proof-gray-600">Market Share Growth</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">The Challenge</h2>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                A well-established retail chain wanted to expand into new geographic markets but faced intense competition and unclear brand positioning relative to local and national competitors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Saturated home market with declining growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Unclear competitive positioning in target markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Limited brand recognition in new regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Risk of significant expansion investment</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Pre-Expansion Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Brand Awareness (Target Markets)</span>
                  <span className="font-semibold text-proof-red-600">12%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Competitive Position</span>
                  <span className="font-semibold text-proof-red-600">Unclear</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Market Share (New Markets)</span>
                  <span className="font-semibold text-proof-red-600">0%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Brand Differentiation</span>
                  <span className="font-semibold text-proof-red-600">Undefined</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Multi-Dimensional Scaling Solution</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Competitive Landscape Mapping</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                We used Multi-Dimensional Scaling to create detailed perceptual maps of the competitive landscape, identifying optimal positioning opportunities and market gaps.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Brand Perception Analysis</h4>
                    <p className="text-proof-gray-600">Mapped 12 competitors across 8 key brand attributes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Gap Analysis</h4>
                    <p className="text-proof-gray-600">Identified underserved positioning spaces in target markets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Consumer Preference Mapping</h4>
                    <p className="text-proof-gray-600">Overlaid ideal brand preferences on competitive landscape</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Market Entry Strategy</h4>
                    <p className="text-proof-gray-600">Developed market-specific positioning strategies</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Key Positioning Insights</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Quality-Value Gap</h4>
                  <p className="text-sm text-proof-gray-600">Premium quality at accessible prices - underserved space</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Local Community Focus</h4>
                  <p className="text-sm text-proof-gray-600">Strong community engagement differentiation opportunity</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Sustainability Leadership</h4>
                  <p className="text-sm text-proof-gray-600">Environmental responsibility as competitive advantage</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Digital-Physical Integration</h4>
                  <p className="text-sm text-proof-gray-600">Seamless omnichannel experience positioning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Market Entry Implementation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Brand Repositioning Strategy</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Developed "Premium Accessibility" brand platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Created market-specific messaging frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Launched sustainability-focused initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Implemented community engagement programs</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Phased Market Entry</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Pilot launched in highest-opportunity market first</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Local partnerships and community integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Digital-first marketing with local influencers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Measured expansion to additional markets</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">18-Month Results</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-proof-green-50 to-proof-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Market Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Brand Awareness</span>
                  <span className="font-semibold text-proof-green-600">79% ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Market Share (New Markets)</span>
                  <span className="font-semibold text-proof-green-600">23% ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Revenue Growth</span>
                  <span className="font-semibold text-proof-green-600">$45M ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Customer Acquisition</span>
                  <span className="font-semibold text-proof-green-600">125K ↑</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Client Testimonial</h3>
              <blockquote className="text-lg text-proof-gray-600 italic mb-6 leading-relaxed">
                "The competitive analysis was incredible. We could see exactly where we fit in the market and where the opportunities were. The positioning strategy gave us a clear path to differentiation and success."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-proof-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-proof-blue-600 font-semibold text-lg">JT</span>
                </div>
                <div>
                  <div className="font-semibold text-proof-gray-900">Jennifer Thompson</div>
                  <div className="text-proof-gray-600">Chief Marketing Officer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Map Your Competitive Landscape?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how Multi-Dimensional Scaling can reveal positioning opportunities and guide your market expansion strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 font-semibold">
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}