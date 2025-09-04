import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Users, TrendingUp, Target, BarChart3, Zap, Award, ShoppingCart, Lightbulb, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AthleisureConceptTestingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 hover:text-proof-blue-700 transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Case Studies
                </Link>
                <div className="flex gap-2">
                  <Badge className="bg-gray-100 text-gray-700">Apparel</Badge>
                  <Badge className="bg-blue-100 text-blue-700">Concept Testing</Badge>
                </div>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Exploring the Athleisure Market
              </h1>
              <p className="text-xl text-proof-gray-600 leading-relaxed">
                How comprehensive concept testing revealed key consumer preferences and market opportunities to successfully launch an athleisure product line.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.pexels.com/photos/28744544/pexels-photo-28744544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Confident woman in stylish gray athletic wear showcasing athleisure fashion"
                  width={940}
                  height={650}
                  className="object-cover w-full h-full"
                  data-macaly="hero-athleisure-model"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-gray-600 mb-2">600</div>
              <div className="text-proof-gray-600">Total Participants</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
              <div className="text-proof-gray-600">Minute Survey</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-gray-600 mb-2">25-54</div>
              <div className="text-proof-gray-600">Age Range</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$25K+</div>
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
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-gray-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">The Challenge</h2>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-lg">
                <p className="text-proof-gray-700 leading-relaxed mb-6">
                  Our client aimed to understand the potential for launching an athleisure line and identify the key factors that would drive consumer interest and purchase behavior. The primary objectives were to:
                </p>
                <ul className="space-y-3 text-proof-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Assess consumer perceptions and preferences for athleisure apparel
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Determine the most appealing product features and price points
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Identify target demographics and their shopping behaviors
                  </li>
                </ul>
              </div>
            </div>

            {/* Approach */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Our Strategic Approach</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-gray-100">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-gray-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Concept Testing</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      Tested multiple athleisure concepts among diverse demographic groups to gauge appeal and relevance across different market segments.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• 25-minute comprehensive online survey</li>
                      <li>• Multiple concept variations testing</li>
                      <li>• Cross-demographic analysis</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
                    <div className="flex items-center mb-4">
                      <ShoppingCart className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Product Feature Analysis</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      Comprehensive evaluation of product features including fit, fabric, functionality, and price sensitivity across target segments.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• Feature importance ranking</li>
                      <li>• Price perception testing</li>
                      <li>• Purchase behavior analysis</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/6246489/pexels-photo-6246489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Three women in stylish activewear showcasing diverse target demographics"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="approach-target-demographics"
                    />
                  </div>
                </div>
              </div>

              {/* Target Audience */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-gray-600 mr-3" />
                  Target Audience Breakdown
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Primary Segment</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• <strong>450 men</strong> aged 25-54</li>
                      <li>• Shop at mass or mid-tier retailers</li>
                      <li>• Household income $25K+</li>
                      <li>• Active apparel purchasers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Secondary Segment</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• <strong>150 mothers</strong> of boys aged 6-12</li>
                      <li>• Shop at mass retailers</li>
                      <li>• Purchase criteria focused on durability</li>
                      <li>• Value-conscious shoppers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <TrendingUp className="h-8 w-8 text-gray-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Key Market Insights</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/3182806/pexels-photo-3182806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Team of professionals brainstorming market research insights"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="results-research-process"
                    />
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-lg">
                    <p className="text-proof-gray-700 leading-relaxed mb-6">
                      The comprehensive concept testing revealed critical consumer preferences that shaped the entire product development strategy:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">🏆 Consumer Preferences</h3>
                        <p className="text-sm text-proof-gray-700">
                          Comfort, versatility, and style emerged as top priorities. Key features include relaxed fit, super soft materials, and stretch functionality.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">💰 Price Perception</h3>
                        <p className="text-sm text-proof-gray-700">
                          Proposed price points were perceived as reasonable or a bargain by the majority of respondents across both target segments.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">🎯 Market Appeal</h3>
                        <p className="text-sm text-proof-gray-700">
                          Strong resonance with both men and mothers of boys, indicating broad market potential and multiple demographic entry points.
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
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Strategic Business Impact</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 border-0">
                    <div className="flex items-center mb-4">
                      <Lightbulb className="h-6 w-6 text-gray-600 mr-3" />
                      <h3 className="font-semibold text-proof-gray-900">Optimized Product Features</h3>
                    </div>
                    <p className="text-proof-gray-700">
                      Focused development on most valued features like comfort and versatility, ensuring product-market fit and consumer satisfaction.
                    </p>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-gray-50 border-0">
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="font-semibold text-proof-gray-900">Refined Pricing Strategy</h3>
                    </div>
                    <p className="text-proof-gray-700">
                      Set competitive price points perceived as offering excellent value, maximizing market penetration and profit margins.
                    </p>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 border-0">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-gray-600 mr-3" />
                      <h3 className="font-semibold text-proof-gray-900">Targeted Marketing Campaigns</h3>
                    </div>
                    <p className="text-proof-gray-700">
                      Developed messaging that resonates with key demographics, enhancing brand appeal and driving sales conversion.
                    </p>
                  </Card>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/6076506/pexels-photo-6076506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Stylish woman stretching showcasing athleisure lifestyle and market appeal"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="impact-lifestyle-appeal"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Test Your Product Concepts?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's help you validate your product ideas and understand consumer preferences to ensure successful market launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-gray-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                Start Concept Testing
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-600 px-8 py-3 font-semibold">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}