import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Users, TrendingUp, Target, BarChart3, Zap, Award, ShoppingCart, Lightbulb, DollarSign, Package, Star, Eye, Home, Leaf, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function OutdoorSoilFertilizerSignagePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 hover:text-proof-blue-700 transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Case Studies
                </Link>
                <div className="flex gap-2">
                  <Badge className="bg-green-100 text-green-700">Retail</Badge>
                  <Badge className="bg-emerald-100 text-emerald-700">Package Testing</Badge>
                </div>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Outdoor Soil & Fertilizer Signage Optimization
              </h1>
              <p className="text-xl text-proof-gray-600 leading-relaxed">
                How strategic signage testing revealed the most effective messaging to drive consumer interest and increase market share for Sta-Green against established competitors.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.pexels.com/photos/4751959/pexels-photo-4751959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Garden soil bag with scoop and wooden box, representing outdoor gardening and soil products for retail testing"
                  width={940}
                  height={650}
                  className="object-cover w-full h-full"
                  data-macaly="hero-garden-soil-products"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">12</div>
              <div className="text-proof-gray-600">Minute Survey</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">5</div>
              <div className="text-proof-gray-600">Signage Options</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">300</div>
              <div className="text-proof-gray-600">Ratings Per Sign</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$35K+</div>
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
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">The Challenge</h2>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg">
                <p className="text-proof-gray-700 leading-relaxed mb-6">
                  Our client aimed to evaluate the effectiveness of various signage options for outdoor soil and lawn fertilizer products. The primary objectives were to:
                </p>
                <ul className="space-y-3 text-proof-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Measure the impact of signage on the uptake of soil and fertilizer products
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Test the appeal of potential signage designs to determine which resonates most with consumers
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Understand consumer preferences and perceptions regarding soil and fertilizer brands
                  </li>
                </ul>
              </div>
            </div>

            {/* Approach */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                  <BarChart3 className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Strategic Signage Testing Methodology</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-green-100">
                    <div className="flex items-center mb-4">
                      <Package className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Signage Testing Framework</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      We tested multiple signage designs to evaluate their effectiveness in promoting soil and fertilizer products at Lowe's.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• 12-minute online survey methodology</li>
                      <li>• 3 out of 5 signage options per respondent</li>
                      <li>• 300 ratings collected per sign design</li>
                      <li>• Statistical analysis at 95% and 90% confidence intervals</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-emerald-100">
                    <div className="flex items-center mb-4">
                      <Eye className="h-6 w-6 text-emerald-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Consumer Feedback Analysis</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      Comprehensive evaluation of signage effectiveness through quantitative ratings and qualitative insights.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• Appeal and believability ratings</li>
                      <li>• Brand recognition and interest metrics</li>
                      <li>• Open-ended consumer feedback</li>
                      <li>• Purchase intent measurement</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/880840/pexels-photo-880840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Vibrant red and white OPEN retail signage demonstrating effective store communication and customer engagement"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="retail-signage-effectiveness"
                    />
                  </div>
                </div>
              </div>

              {/* Target Audience Details */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-6 flex items-center">
                  <Home className="h-6 w-6 text-green-600 mr-3" />
                  Target Audience Profile
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Demographics</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Adults aged 21-64</li>
                      <li>• Household income $35K+</li>
                      <li>• Single-family home with yard</li>
                      <li>• US residents</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Purchase Behavior</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Purchased/intend to buy soil/fertilizer</li>
                      <li>• Lowe's customers within 6 months</li>
                      <li>• Active yard maintenance</li>
                      <li>• Garden and lawn care enthusiasts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Landscape */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Competitive Brand Landscape</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/7658757/pexels-photo-7658757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Elderly man gardening in sunny backyard representing target demographic for soil and fertilizer products"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="target-demographic-gardening"
                    />
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg">
                    <p className="text-proof-gray-700 leading-relaxed mb-6">
                      The study revealed key insights into brand awareness and competitive positioning in the outdoor soil and fertilizer market:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">🏆 Miracle-Gro</h3>
                        <p className="text-sm text-proof-gray-700">
                          Dominant top-of-mind brand awareness with strong consumer recognition and trust.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">🌱 Scotts</h3>
                        <p className="text-sm text-proof-gray-700">
                          Established competitor with high brand awareness and premium positioning.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">💚 Sta-Green</h3>
                        <p className="text-sm text-proof-gray-700">
                          Emerging brand gaining significant aided awareness with value-focused positioning.
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
                <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                  <TrendingUp className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Key Research Findings</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      "Time to Try" Signage Success
                    </h3>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• <strong>Highest effectiveness</strong> - Generated maximum consumer interest</li>
                      <li>• <strong>Strong believability</strong> - Credible messaging resonated with target audience</li>
                      <li>• <strong>Clear value communication</strong> - Lower price and larger quantity benefits</li>
                      <li>• <strong>Purchase motivation</strong> - Drove consideration of Sta-Green over competitors</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-4 flex items-center">
                      <DollarSign className="h-5 w-5 text-emerald-600 mr-2" />
                      Value Proposition Impact
                    </h3>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• <strong>Price advantage</strong> - Lower cost positioned as key differentiator</li>
                      <li>• <strong>Quantity benefit</strong> - Larger package size attracted value-conscious consumers</li>
                      <li>• <strong>Competitive positioning</strong> - Effective against premium brands</li>
                      <li>• <strong>Purchase intent increase</strong> - Significant preference shift to Sta-Green</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/4870796/pexels-photo-4870796.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Hand watering green lawn with garden hose, demonstrating the results of effective fertilizer and soil products"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="lawn-care-results"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Statistical Significance */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold text-proof-gray-900">Statistical Validation</h3>
                </div>
                <p className="text-proof-gray-700 mb-4">
                  The research employed rigorous statistical analysis to ensure reliable and actionable insights with confidence levels of 95% and 90%.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Methodology Rigor</h4>
                    <ul className="space-y-1 text-sm text-proof-gray-700">
                      <li>• 300 ratings per signage design</li>
                      <li>• 95% and 90% confidence intervals</li>
                      <li>• Statistically significant differences identified</li>
                      <li>• Randomized signage assignment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Consumer Insights</h4>
                    <ul className="space-y-1 text-sm text-proof-gray-700">
                      <li>• Quantitative performance ratings</li>
                      <li>• Qualitative feedback analysis</li>
                      <li>• Preference pattern identification</li>
                      <li>• Brand perception measurement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Strategic Business Impact</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-0">
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Enhanced Signage Design</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Developed signage that effectively communicates value proposition and resonates with target consumers.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-0">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-emerald-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Targeted Marketing Strategy</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Tailored marketing messages to highlight soil and fertilizer product benefits effectively.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-0">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Increased Sales Performance</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Implemented strategies to boost consumer interest and purchase intent for Sta-Green products.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-0">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-emerald-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Competitive Advantage</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Positioned Sta-Green effectively against established competitors through compelling signage.
                  </p>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Retail Signage?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's help you discover the most effective signage strategies to drive consumer interest and boost sales through comprehensive package testing research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 font-semibold">
                Start Package Testing
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 font-semibold">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}