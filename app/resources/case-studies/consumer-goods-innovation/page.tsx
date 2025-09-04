import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Users, TrendingUp, Target, BarChart3, Zap, Award, ShoppingCart, Lightbulb, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ConsumerGoodsInnovationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 hover:text-proof-blue-700 transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Case Studies
                </Link>
                <div className="flex gap-2">
                  <Badge className="bg-orange-100 text-orange-700">Food & Restaurants</Badge>
                  <Badge className="bg-yellow-100 text-yellow-700">Competitive Landscape</Badge>
                </div>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Understanding the Snacking Landscape
              </h1>
              <p className="text-xl text-proof-gray-600 leading-relaxed">
                How comprehensive market research and consumer perception analysis revealed key insights to drive product innovation and strategic positioning in the competitive snacking sector.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.pexels.com/photos/3985083/pexels-photo-3985083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Father and daughter choosing donuts at supermarket showing consumer snacking behavior"
                  width={940}
                  height={650}
                  className="object-cover w-full h-full"
                  data-macaly="hero-snacking-image"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">23</div>
              <div className="text-proof-gray-600">Minute Survey</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
              <div className="text-4xl font-bold text-yellow-600 mb-2">18-64</div>
              <div className="text-proof-gray-600">Age Range</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-proof-gray-600">Countries (US & UK)</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
              <div className="text-4xl font-bold text-yellow-600 mb-2">$25K+</div>
              <div className="text-proof-gray-600">Household Income</div>
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
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-lg">
                <p className="text-proof-gray-700 leading-relaxed mb-6">
                  Our client aimed to gain a deeper understanding of the snacking landscape and consumer perceptions. The primary objectives were to:
                </p>
                <ul className="space-y-3 text-proof-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Understand the competitive landscape and emerging trends in the snacking sector
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Identify key consumer perceptions to shape product offerings, messaging, and new product development
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Test compelling value propositions to determine what resonates most to drive conversion
                  </li>
                </ul>
              </div>
            </div>

            {/* Approach */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-lg mr-4">
                  <BarChart3 className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Our Comprehensive Approach</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-orange-100">
                    <div className="flex items-center mb-4">
                      <ShoppingCart className="h-6 w-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Competitive Analysis</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      Detailed analysis of the competitive landscape to identify key players, market share, and emerging trends in the snacking sector.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• Market mapping and competitor positioning</li>
                      <li>• Trend analysis and innovation tracking</li>
                      <li>• Market share evaluation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-yellow-100">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-yellow-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Consumer Perception Research</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      In-depth research to understand consumer perceptions and preferences across diverse snacking segments.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• Surveys and focus groups</li>
                      <li>• Sentiment analysis</li>
                      <li>• Consumer segment profiling</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/7948060/pexels-photo-7948060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Person analyzing financial charts and market data on laptop"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="approach-research-image"
                    />
                  </div>
                </div>
              </div>

              {/* Target Audience */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-orange-600 mr-3" />
                  Target Audience Profile
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Demographics</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Ages 18-64 (general population)</li>
                      <li>• Household income $25K+</li>
                      <li>• USA and UK markets</li>
                      <li>• Diverse demographic representation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Behavior Patterns</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Regular snack consumers</li>
                      <li>• Variety of snacking occasions</li>
                      <li>• Health and taste conscious</li>
                      <li>• Brand-aware shoppers</li>
                    </ul>
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
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Key Insights & Results</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Overhead view of market research charts and graphs with magnifying glass"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="results-analysis-image"
                    />
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-lg">
                    <p className="text-proof-gray-700 leading-relaxed mb-6">
                      The comprehensive research study unveiled critical insights that transformed our client's understanding of the snacking market:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">🏆 Competitive Positioning</h3>
                        <p className="text-sm text-proof-gray-700">
                          Clear insights into how the client's products are perceived relative to competitors, revealing competitive advantages and improvement opportunities.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">👥 Consumer Preferences</h3>
                        <p className="text-sm text-proof-gray-700">
                          Identification of the most important features for snack choice across different consumer segments and usage occasions.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">💡 Brand Perception</h3>
                        <p className="text-sm text-proof-gray-700">
                          Positive perceptions of the client's snack products were identified, highlighting key strengths and areas for strategic improvement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-lg mr-4">
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Business Impact</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 border-0">
                    <div className="flex items-center mb-4">
                      <Lightbulb className="h-6 w-6 text-orange-600 mr-3" />
                      <h3 className="font-semibold text-proof-gray-900">Enhanced Product Offerings</h3>
                    </div>
                    <p className="text-proof-gray-700">
                      Tailored snack products to meet the specific preferences of different consumer segments, ensuring product-market fit.
                    </p>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-0">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-yellow-600 mr-3" />
                      <h3 className="font-semibold text-proof-gray-900">Improved Marketing Strategies</h3>
                    </div>
                    <p className="text-proof-gray-700">
                      Developed targeted messaging that resonates with key consumer segments, increasing campaign effectiveness and ROI.
                    </p>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 border-0">
                    <div className="flex items-center mb-4">
                      <Award className="h-6 w-6 text-orange-600 mr-3" />
                      <h3 className="font-semibold text-proof-gray-900">Boosted Customer Retention</h3>
                    </div>
                    <p className="text-proof-gray-700">
                      Implemented strategies to enhance customer satisfaction and loyalty by focusing on the most valued snack features and benefits.
                    </p>
                  </Card>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/8885141/pexels-photo-8885141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Friends enjoying snacks together showing social consumption behavior"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="impact-social-snacking-image"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Understand Your Market Landscape?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's help you uncover key consumer insights and competitive intelligence to drive your product innovation and market strategy.
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