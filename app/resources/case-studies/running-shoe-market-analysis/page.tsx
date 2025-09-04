import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Users, TrendingUp, Target, BarChart3, Zap, Award, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function RunningShoeMarketAnalysisPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 hover:text-proof-blue-700 transition-colors mr-4">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Case Studies
              </Link>
              <div className="flex gap-2">
                <Badge className="bg-orange-100 text-orange-700">Apparel</Badge>
                <Badge className="bg-red-100 text-red-700">Competitive Landscape</Badge>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
              Understanding the Running Shoe Market
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-4xl mx-auto leading-relaxed">
              How ALTRA gained competitive insights and market segmentation clarity to enhance their product offerings and strategic positioning in the running shoe industry.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">22</div>
              <div className="text-proof-gray-600">Minute Survey</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">$50K+</div>
              <div className="text-proof-gray-600">Target Income</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">18+</div>
              <div className="text-proof-gray-600">Age Range</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">12</div>
              <div className="text-proof-gray-600">Month Purchase Window</div>
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
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">The Challenge</h2>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg">
                <p className="text-proof-gray-700 leading-relaxed mb-6">
                  Our client aimed to gain a deeper understanding of the running shoe market and segment the audience into actionable groups. The primary objectives were to:
                </p>
                <ul className="space-y-3 text-proof-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Identify key segments to shape product offerings, messaging, new product development, and acquisition/retention efforts
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Test compelling value propositions to determine what resonates most to drive conversion
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Understand the competitive landscape and emerging trends in the running shoe sector
                  </li>
                </ul>
              </div>
            </div>

            {/* Approach */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-lg mr-4">
                  <BarChart3 className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Our Approach</h2>
              </div>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg border-2 border-orange-100">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Competitive Landscape Analysis</h3>
                  <p className="text-proof-gray-700 mb-6">
                    We performed an in-depth analysis of the competitive landscape to understand the positioning, strengths, and weaknesses of key players in the running shoe market:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <MapPin className="h-6 w-6 text-orange-600 mr-2" />
                        <h4 className="font-semibold text-proof-gray-900">Market Mapping</h4>
                      </div>
                      <p className="text-sm text-proof-gray-600">Identifying and mapping major competitors and their market shares</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Award className="h-6 w-6 text-red-600 mr-2" />
                        <h4 className="font-semibold text-proof-gray-900">SWOT Analysis</h4>
                      </div>
                      <p className="text-sm text-proof-gray-600">Conducting comprehensive analysis for each major competitor</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <TrendingUp className="h-6 w-6 text-orange-600 mr-2" />
                        <h4 className="font-semibold text-proof-gray-900">Trend Analysis</h4>
                      </div>
                      <p className="text-sm text-proof-gray-600">Identifying emerging trends and innovations in running shoes</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Users className="h-6 w-6 text-red-600 mr-2" />
                        <h4 className="font-semibold text-proof-gray-900">Consumer Perception</h4>
                      </div>
                      <p className="text-sm text-proof-gray-600">Gathering data on consumer perceptions of different brands</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg border-2 border-red-100">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Segmentation Research</h3>
                  <p className="text-proof-gray-700 mb-6">
                    We performed segmentation analysis to categorize the audience into distinct groups based on their running behaviors, preferences, and demographics:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-proof-gray-900">Data Collection:</span>
                        <span className="text-proof-gray-700 ml-2">Extensive surveys targeting US adults 18+ with $50K+ income who purchased running shoes within 12 months</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-proof-gray-900">Cluster Analysis:</span>
                        <span className="text-proof-gray-700 ml-2">Using statistical techniques to identify natural groupings within the runner data</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-proof-gray-900">Profile Development:</span>
                        <span className="text-proof-gray-700 ml-2">Creating detailed profiles for each segment with unique characteristics and preferences</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">The Results</h2>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg">
                <p className="text-proof-gray-700 leading-relaxed mb-6">
                  The comprehensive study revealed several key insights that transformed our client's understanding of the running shoe market:
                </p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-3">🏃‍♂️ Competitive Positioning</h3>
                    <p className="text-proof-gray-700">
                      Deep insights into how different brands are perceived in terms of quality, innovation, and value across the running community.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-3">📈 Market Trends</h3>
                    <p className="text-proof-gray-700">
                      Identification of key trends including sustainable materials, customization options, and technological advancements in running shoes.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-3">👟 Consumer Preferences</h3>
                    <p className="text-proof-gray-700">
                      Clear understanding of the most important features for running shoe choice among different runner segments.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-3">⭐ Brand Perception</h3>
                    <p className="text-proof-gray-700">
                      Positive perceptions of the client's brand, highlighting competitive strengths and opportunities for improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-lg mr-4">
                  <Zap className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Business Impact</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-0">
                  <h3 className="font-semibold text-proof-gray-900 mb-3">Enhanced Product Offerings</h3>
                  <p className="text-proof-gray-700">
                    Tailored running shoe designs to meet the specific preferences of different customer segments.
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-0">
                  <h3 className="font-semibold text-proof-gray-900 mb-3">Improved Marketing Strategies</h3>
                  <p className="text-proof-gray-700">
                    Developed targeted messaging that resonates with key runner segments and demographics.
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-0">
                  <h3 className="font-semibold text-proof-gray-900 mb-3">Boosted Customer Retention</h3>
                  <p className="text-proof-gray-700">
                    Enhanced satisfaction and loyalty by focusing on the most valued shoe features across segments.
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-0">
                  <h3 className="font-semibold text-proof-gray-900 mb-3">Strategic Positioning</h3>
                  <p className="text-proof-gray-700">
                    Adjusted competitive strategies based on identified strengths and weaknesses in the market landscape.
                  </p>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Understand Your Market Position?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's help you gain the competitive insights and market segmentation clarity needed to accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold">
                Start Your Market Research
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 font-semibold">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}