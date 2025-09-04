import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Users, TrendingUp, Target, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function PrestigeBeautyLandscapePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 hover:text-proof-blue-700 transition-colors mr-4">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Case Studies
              </Link>
              <div className="flex gap-2">
                <Badge className="bg-pink-100 text-pink-700">Beauty & Cosmetics</Badge>
                <Badge className="bg-purple-100 text-purple-700">Competitive Landscape</Badge>
                <Badge className="bg-purple-100 text-purple-700">Segmentation</Badge>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
              Understanding the Prestige Beauty Landscape
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-4xl mx-auto leading-relaxed">
              How a beauty brand gained deep competitive insights through comprehensive market analysis and customer segmentation research.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">13,002</div>
              <div className="text-proof-gray-600">Survey Participants</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-proof-gray-600">Key Customer Segments</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">64</div>
              <div className="text-proof-gray-600">Age Range (13-64)</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-proof-gray-600">Market Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Challenge */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-pink-100 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-pink-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">The Challenge</h2>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-lg">
                <p className="text-proof-gray-700 leading-relaxed mb-6">
                  Our client aimed to gain a deeper understanding of the competitive landscape in the prestige beauty sector through the lens of existing consumer segments. The primary objectives were to:
                </p>
                <ul className="space-y-3 text-proof-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Analyze the competitive landscape to identify key trends and emerging players
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Test compelling value propositions to determine what resonates most to drive conversion
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Understand how existing segments perceive different brands and products within the prestige beauty market
                  </li>
                </ul>
              </div>
            </div>

            {/* Approach */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Our Approach</h2>
              </div>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg border-2 border-purple-100">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Competitive Analysis</h3>
                  <p className="text-proof-gray-700 mb-4">
                    We performed an in-depth analysis of the competitive landscape, focusing on:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-proof-gray-900 mb-2">Market Trends</h4>
                      <p className="text-sm text-proof-gray-600">Identifying current and emerging trends in prestige beauty</p>
                    </div>
                    <div className="text-center p-4 bg-pink-50 rounded-lg">
                      <BarChart3 className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-proof-gray-900 mb-2">Brand Performance</h4>
                      <p className="text-sm text-proof-gray-600">Evaluating competitor performance and brand perception</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-proof-gray-900 mb-2">Value Propositions</h4>
                      <p className="text-sm text-proof-gray-600">Testing which propositions resonate across segments</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg border-2 border-pink-100">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Segmentation Analysis</h3>
                  <p className="text-proof-gray-700 mb-4">
                    We utilized existing consumer segments to understand how different groups perceive and interact with various brands and products:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-pink-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-proof-gray-900">Data Collection:</span>
                        <span className="text-proof-gray-700 ml-2">Extensive surveys targeting female prestige makeup and skincare users aged 13-64</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-proof-gray-900">Profile Analysis:</span>
                        <span className="text-proof-gray-700 ml-2">Analyzing preferences and behaviors across six key customer segments</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-pink-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-proof-gray-900">Validation:</span>
                        <span className="text-proof-gray-700 ml-2">Cross-referencing insights with additional data sources and client feedback</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-pink-100 rounded-lg mr-4">
                  <TrendingUp className="h-8 w-8 text-pink-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">The Results</h2>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-lg">
                <p className="text-proof-gray-700 leading-relaxed mb-6">
                  The comprehensive study revealed several key insights that transformed our client's understanding of the prestige beauty market:
                </p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-3">🌱 Market Trends</h3>
                    <p className="text-proof-gray-700">
                      Identification of emerging trends such as clean beauty, personalized skincare, and sustainable packaging driving consumer preferences.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-3">📊 Brand Performance</h3>
                    <p className="text-proof-gray-700">
                      Comprehensive insights into how different brands are perceived by consumers, highlighting competitive strengths and improvement opportunities.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-3">💎 Value Proposition Resonance</h3>
                    <p className="text-proof-gray-700">
                      Understanding which value propositions are most compelling across segments, including product efficacy, brand reputation, and ethical considerations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Business Impact</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 border-0">
                  <h3 className="font-semibold text-proof-gray-900 mb-3">Enhanced Product Offerings</h3>
                  <p className="text-proof-gray-700">
                    Tailored products to meet segment preferences while staying ahead of market trends.
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
                  <h3 className="font-semibold text-proof-gray-900 mb-3">Improved Marketing Strategies</h3>
                  <p className="text-proof-gray-700">
                    Developed targeted messaging that resonates with key segments and differentiates from competitors.
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 border-0">
                  <h3 className="font-semibold text-proof-gray-900 mb-3">Boosted Customer Retention</h3>
                  <p className="text-proof-gray-700">
                    Enhanced satisfaction and loyalty by focusing on most valued features and competitive advantages.
                  </p>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Understand Your Competitive Landscape?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Let's help you gain the competitive insights needed to dominate your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-pink-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold">
                Start Your Research Project
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 font-semibold">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}