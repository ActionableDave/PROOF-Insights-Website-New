import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Users, TrendingUp, Target, BarChart3, Zap, Award, ShoppingCart, Lightbulb, DollarSign, Clock, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function MensJeansWearTestPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 hover:text-proof-blue-700 transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Case Studies
                </Link>
                <div className="flex gap-2">
                  <Badge className="bg-blue-100 text-blue-700">Apparel</Badge>
                  <Badge className="bg-indigo-100 text-indigo-700">Product Testing</Badge>
                </div>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Men's Jeans Wear Test Evaluation
              </h1>
              <p className="text-xl text-proof-gray-600 leading-relaxed">
                How comprehensive wear testing revealed key consumer preferences for comfort, fit, and design features that drive purchase intent in the competitive men's jeans market.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.pexels.com/photos/15406488/pexels-photo-15406488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Fashionable man wearing denim jacket, representing target demographic for jeans wear testing"
                  width={940}
                  height={650}
                  className="object-cover w-full h-full"
                  data-macaly="hero-mens-denim-fashion"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">100</div>
              <div className="text-proof-gray-600">Male Participants</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">18-55</div>
              <div className="text-proof-gray-600">Age Range</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-proof-gray-600">Week Testing Period</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">2</div>
              <div className="text-proof-gray-600">Jean Styles Tested</div>
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
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">The Challenge</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
                <p className="text-proof-gray-700 leading-relaxed mb-6">
                  Our client aimed to gain a deeper understanding of consumer preferences for men's jeans, focusing on comfort, fit, and overall satisfaction. The primary objectives were to:
                </p>
                <ul className="space-y-3 text-proof-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Assess the performance of two different styles of jeans among male consumers
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Identify key features that drive consumer preference and purchase intent
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Understand the impact of specific design elements, such as the waistband and material, on overall satisfaction
                  </li>
                </ul>
              </div>
            </div>

            {/* Approach */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                  <BarChart3 className="h-8 w-8 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Comprehensive Wear Test Methodology</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-blue-100">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Participant Recruitment</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      100 men aged 18-55 with household income $25K+ who wear jeans at least twice weekly and purchased jeans within the past two years.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• Regular jeans wearers (2+ times per week)</li>
                      <li>• Recent purchase history validation</li>
                      <li>• Demographic diversity across age groups</li>
                      <li>• Income-qualified target market</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-indigo-100">
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-indigo-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Testing Protocol</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      Two-week wear test with assigned jean pairs, initial check-in survey for proper sizing, and comprehensive follow-up evaluation.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• Two different jean styles per participant</li>
                      <li>• Initial sizing verification and reactions</li>
                      <li>• In-depth post-wear evaluation surveys</li>
                      <li>• Age-group comparative analysis (18-39 vs 40-55)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Stack of neatly arranged blue jeans showcasing different styles and washes for product testing"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="jean-styles-testing"
                    />
                  </div>
                </div>
              </div>

              {/* Age Group Analysis */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  Key Sub-Group Analysis Methodology
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Younger Men (18-39)</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Style preference patterns</li>
                      <li>• Comfort vs. fashion priorities</li>
                      <li>• Brand perception differences</li>
                      <li>• Purchase decision factors</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Older Men (40-55)</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Comfort and fit preferences</li>
                      <li>• Quality and durability focus</li>
                      <li>• Traditional vs. modern styling</li>
                      <li>• Value perception analysis</li>
                    </ul>
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
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Key Findings & Insights</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/7327165/pexels-photo-7327165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Man relaxing on sofa in denim, representing comfort and real-world wear testing scenarios"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="comfort-wear-testing"
                    />
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
                    <p className="text-proof-gray-700 leading-relaxed mb-6">
                      The comprehensive wear test revealed distinct preferences across age groups and highlighted key features that drive consumer satisfaction:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">👔 Style Preferences by Age</h3>
                        <p className="text-sm text-proof-gray-700">
                          Younger men (18-39) preferred the "Set-on" style, while older men (40-55) favored the "Hollywood" style, indicating clear demographic distinctions.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">⭐ High Overall Satisfaction</h3>
                        <p className="text-sm text-proof-gray-700">
                          Both jean styles received high ratings for comfort and fit across all participants, validating the product design approach.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">🔄 Elastic Waistband Innovation</h3>
                        <p className="text-sm text-proof-gray-700">
                          The elastic waistband was identified as a standout comfort feature, though appearance improvements were suggested.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Quality Analysis */}
            <div className="mb-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                      <Star className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-proof-gray-900">Material & Durability Insights</h2>
                  </div>
                  <p className="text-proof-gray-700 leading-relaxed">
                    The wear test provided valuable feedback on material performance, revealing both strengths and areas for improvement in fabric composition and construction quality.
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-3">Consumer Material Feedback</h3>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• General comfort and durability ratings</li>
                      <li>• Concerns about fabric weight and long-term wear</li>
                      <li>• Stitching and construction quality assessment</li>
                      <li>• Comparison with existing jean preferences</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/8442859/pexels-photo-8442859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Detailed view of denim jeans showcasing stitching, craftsmanship, and quality construction elements"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="denim-quality-details"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                  <Award className="h-8 w-8 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Strategic Business Applications</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Enhanced Product Design</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Refined jean designs to better meet consumer preferences, particularly addressing waistband appearance and material durability concerns.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-0">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-indigo-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Targeted Marketing</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Developed age-specific marketing strategies highlighting key features valued by different demographic segments.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Product Development</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Informed future development efforts by focusing on features that drive consumer satisfaction and purchase intent.
                  </p>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Test Your Product with Real Consumers?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's help you understand consumer preferences and optimize your products through comprehensive wear testing and consumer research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold">
                Start Product Testing
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}