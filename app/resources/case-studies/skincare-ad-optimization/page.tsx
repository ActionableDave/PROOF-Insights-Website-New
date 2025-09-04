import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Users, TrendingUp, Target, BarChart3, Zap, Award, Mail, FileText, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SkincareAdOptimizationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 hover:text-proof-blue-700 transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Case Studies
                </Link>
                <div className="flex gap-2">
                  <Badge className="bg-pink-100 text-pink-700">Beauty & Cosmetics</Badge>
                  <Badge className="bg-purple-100 text-purple-700">Ad Optimization</Badge>
                </div>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Evaluating Campaign Assets for a Skincare Product
              </h1>
              <p className="text-xl text-proof-gray-600 leading-relaxed">
                How strategic testing of email and brochure assets across US and China markets optimized campaign performance and enhanced targeting effectiveness.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.pexels.com/photos/6706907/pexels-photo-6706907.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Woman applying moisturizing cream in a studio setting"
                  width={940}
                  height={650}
                  className="object-cover w-full h-full"
                  data-macaly="hero-skincare-image"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">800</div>
              <div className="text-proof-gray-600">Total Participants</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">20</div>
              <div className="text-proof-gray-600">Minute Survey</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">2</div>
              <div className="text-proof-gray-600">Countries (US & China)</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-proof-gray-600">Campaign Assets Tested</div>
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
                  Our client aimed to test email and brochure assets for a new skincare product in the US and China. The primary objectives were to:
                </p>
                <ul className="space-y-3 text-proof-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Identify the most compelling headline and supporting copy for the campaign
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Evaluate assets in terms of appeal, brand recognition, engagement, key benefit message communication, and motivational call to action
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Understand the impact of different copy points and imagery on the target audience
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
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-pink-100">
                    <div className="flex items-center mb-4">
                      <Mail className="h-6 w-6 text-pink-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Email & Brochure Testing</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      Participants evaluated different versions of marketing materials to identify the most effective messaging and design elements.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• 3 different email versions tested</li>
                      <li>• 2 brochure variations analyzed</li>
                      <li>• Cross-cultural comparison methodology</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-purple-100">
                    <div className="flex items-center mb-4">
                      <Globe className="h-6 w-6 text-purple-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Cross-Market Analysis</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      Comprehensive evaluation across diverse demographic groups in both US and Chinese markets.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• Survey conducted March 23 - April 5, 2021</li>
                      <li>• 800 participants across both markets</li>
                      <li>• Statistical significance testing</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/7321265/pexels-photo-7321265.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Woman applying skincare cream while looking in mirror"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="approach-skincare-image"
                    />
                  </div>
                </div>
              </div>

              {/* Target Audience */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-pink-600 mr-3" />
                  Target Audience Profile
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Demographics</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Ages 20-45</li>
                      <li>• US: $65K+ household income</li>
                      <li>• China: 30K yuan+ monthly income</li>
                      <li>• Diverse gender and ethnic representation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Usage Patterns</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Regular users of 2-3 skincare products</li>
                      <li>• Brand aware and considering</li>
                      <li>• Prestige skincare purchasers (6 months)</li>
                      <li>• High engagement with beauty content</li>
                    </ul>
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
              
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-lg">
                    <p className="text-proof-gray-700 leading-relaxed mb-6">
                      The comprehensive asset testing provided valuable insights that transformed our client's campaign strategy:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">📧 Email Performance</h3>
                        <p className="text-sm text-proof-gray-700">
                          Clear preferences emerged for different email versions among various demographic groups, with significant cultural differences identified.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">📄 Brochure Effectiveness</h3>
                        <p className="text-sm text-proof-gray-700">
                          Distinct appeal patterns showed which brochure versions resonated most with target audiences in each market.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">💬 Message Resonance</h3>
                        <p className="text-sm text-proof-gray-700">
                          Key benefit messages showed varying levels of impact and relevance across different demographic segments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/7320785/pexels-photo-7320785.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Woman with skincare products taking selfie"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="results-campaign-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Business Impact</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 border-0">
                    <div className="flex items-center mb-4">
                      <Award className="h-6 w-6 text-pink-600 mr-3" />
                      <h3 className="font-semibold text-proof-gray-900">Optimized Campaign Assets</h3>
                    </div>
                    <p className="text-proof-gray-700">
                      Focused resources on the most effective messages and visuals, eliminating underperforming creative elements.
                    </p>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-purple-600 mr-3" />
                      <h3 className="font-semibold text-proof-gray-900">Enhanced Messaging</h3>
                    </div>
                    <p className="text-proof-gray-700">
                      Tailored communications to resonate with different demographic groups across both US and Chinese markets.
                    </p>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 border-0">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-pink-600 mr-3" />
                      <h3 className="font-semibold text-proof-gray-900">Improved Targeting</h3>
                    </div>
                    <p className="text-proof-gray-700">
                      Ensured broad appeal and effectiveness across diverse audience segments while maintaining cultural relevance.
                    </p>
                  </Card>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/15635399/pexels-photo-15635399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Colorful sticky notes with hashtag campaign symbols"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="impact-marketing-image"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Campaign Assets?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Let's help you identify the most compelling messaging and creative elements to maximize your campaign performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-pink-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold">
                Start Your Campaign Testing
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