import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Users, TrendingUp, Target, BarChart3, Zap, Award, ShoppingCart, Lightbulb, DollarSign, Play, Star, Calculator } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function StreamingServicePricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 hover:text-proof-blue-700 transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Case Studies
                </Link>
                <div className="flex gap-2">
                  <Badge className="bg-purple-100 text-purple-700">Digital Media</Badge>
                  <Badge className="bg-blue-100 text-blue-700">Pricing</Badge>
                </div>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Streaming Service Pricing Optimization
              </h1>
              <p className="text-xl text-proof-gray-600 leading-relaxed">
                How conjoint analysis and customer segmentation revealed the optimal features and pricing strategy to maximize subscriptions and revenue in the competitive streaming market.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Couple enjoying Netflix streaming service on couch, representing target demographic for streaming service optimization"
                  width={940}
                  height={650}
                  className="object-cover w-full h-full"
                  data-macaly="hero-streaming-service-experience"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">18</div>
              <div className="text-proof-gray-600">Minute Survey</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">18-64</div>
              <div className="text-proof-gray-600">Age Range</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">3+</div>
              <div className="text-proof-gray-600">Hours TV/Week</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$30K+</div>
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
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">The Challenge</h2>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg">
                <p className="text-proof-gray-700 leading-relaxed mb-6">
                  Our client aimed to understand the optimal features and pricing for their streaming service to maximize reach and revenue. The primary objectives were to:
                </p>
                <ul className="space-y-3 text-proof-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Identify the most appealing features and benefits to drive subscriptions
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Determine the optimal pricing strategy for both ad-supported and ad-free plans
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Understand the preferences and behaviors of different customer segments
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
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Advanced Conjoint Analysis Methodology</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-purple-100">
                    <div className="flex items-center mb-4">
                      <Calculator className="h-6 w-6 text-purple-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Conjoint Analysis Framework</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      We performed detailed conjoint analysis to simulate real-world trade-offs and identify the most desirable combinations of features and pricing.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• Feature testing: discounts, free shipping, exclusive content</li>
                      <li>• Pricing analysis: ad-supported vs ad-free plans</li>
                      <li>• Trade-off scenarios and preference modeling</li>
                      <li>• Revenue optimization calculations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Segment Analysis</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      Understanding preferences across general population streamers, current subscribers, and loyalty program members.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• General population streamers behavioral patterns</li>
                      <li>• Current subscriber satisfaction drivers</li>
                      <li>• Loyalty program member preferences</li>
                      <li>• Cross-segment comparison analysis</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/7567222/pexels-photo-7567222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Financial analysis charts and data on monitor showing pricing strategy and market research analytics"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="pricing-analytics-research"
                    />
                  </div>
                </div>
              </div>

              {/* Target Audience Details */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-6 flex items-center">
                  <Target className="h-6 w-6 text-purple-600 mr-3" />
                  Target Audience Specifications
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Demographics</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Adults aged 18-64</li>
                      <li>• Household income $30K+</li>
                      <li>• Watch TV 3+ hours per week</li>
                      <li>• Pay for at least one streaming service</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Streaming Behavior</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Active streaming service users</li>
                      <li>• Multi-platform subscribers</li>
                      <li>• Price-conscious consumers</li>
                      <li>• Feature-aware decision makers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Segments */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Customer Segment Insights</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/7328507/pexels-photo-7328507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Elderly friends sharing popcorn and drinks during movie night, representing diverse customer segments"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="customer-segment-diversity"
                    />
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg">
                    <p className="text-proof-gray-700 leading-relaxed mb-6">
                      The study revealed distinct preferences and behaviors across different customer segments, providing crucial insights for targeted pricing and feature strategies:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">📺 General Population Streamers</h3>
                        <p className="text-sm text-proof-gray-700">
                          Price-sensitive consumers who prioritize basic streaming features and value-oriented pricing plans.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">⭐ Current Subscribers</h3>
                        <p className="text-sm text-proof-gray-700">
                          Engaged users who value premium features and are willing to pay for enhanced viewing experiences.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">🎁 Loyalty Program Members</h3>
                        <p className="text-sm text-proof-gray-700">
                          Brand advocates who appreciate exclusive content, birthday gifts, and special member benefits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Key Research Findings</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-4 flex items-center">
                      <Star className="h-5 w-5 text-purple-600 mr-2" />
                      Feature Preferences Ranking
                    </h3>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• <strong>Free shipping benefits</strong> - Most valued across all segments</li>
                      <li>• <strong>Birthday gifts</strong> - High appeal for loyalty members</li>
                      <li>• <strong>Exclusive content</strong> - Premium feature driver</li>
                      <li>• <strong>Ad-free experience</strong> - Quality-focused preference</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-4 flex items-center">
                      <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                      Pricing Sensitivity Analysis
                    </h3>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• <strong>Ad-supported plans</strong> - Optimal entry point pricing</li>
                      <li>• <strong>Ad-free premium</strong> - Value-based pricing acceptance</li>
                      <li>• <strong>Segment variations</strong> - Customized pricing strategies</li>
                      <li>• <strong>Revenue optimization</strong> - Maximum conversion points</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/5202957/pexels-photo-5202957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Person using TV remote control with streaming interface, showing user interaction and feature preferences"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="streaming-user-interaction"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Simulator Tool */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <Calculator className="h-8 w-8 text-purple-600 mr-4" />
                  <h3 className="text-2xl font-bold text-proof-gray-900">Interactive Revenue Simulator</h3>
                </div>
                <p className="text-proof-gray-700 mb-4">
                  We provided the client with a comprehensive Excel-based simulator tool enabling them to test "what if" scenarios and determine the optimal combination of features and pricing to yield the highest revenue potential.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Simulator Capabilities</h4>
                    <ul className="space-y-1 text-sm text-proof-gray-700">
                      <li>• Feature combination modeling</li>
                      <li>• Price point optimization</li>
                      <li>• Segment-specific scenarios</li>
                      <li>• Revenue projection analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Business Applications</h4>
                    <ul className="space-y-1 text-sm text-proof-gray-700">
                      <li>• Real-time strategy testing</li>
                      <li>• Market response prediction</li>
                      <li>• Competitive positioning</li>
                      <li>• ROI optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Strategic Business Impact</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-0">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Optimized Pricing Strategy</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Set price points that maximize revenue while maintaining high subscription rates across ad-supported and premium tiers.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                  <div className="flex items-center mb-4">
                    <Play className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Enhanced Service Offerings</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Tailored features and benefits to meet the specific preferences of different customer segments.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-0">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Targeted Marketing</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Developed segment-specific messaging that resonates with key customer groups and drives conversions.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Customer Retention</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Implemented strategies to enhance satisfaction and loyalty by focusing on the most valued features.
                  </p>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Pricing Strategy?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's help you discover the optimal features and pricing to maximize revenue and customer satisfaction through advanced conjoint analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 font-semibold">
                Start Pricing Research
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 font-semibold">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}