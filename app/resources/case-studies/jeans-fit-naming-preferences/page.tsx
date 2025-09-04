'use client'

import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Target, Users, TrendingUp, Type, Star, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function JeansFitNamingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-purple-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/resources/case-studies" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200" data-macaly="industry-badge">
              Apparel
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200" data-macaly="methodology-badge">
              Name Testing
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
            Evaluating Jeans Fit Naming Preferences
          </h1>
          
          <p className="text-xl text-proof-gray-600 leading-relaxed max-w-3xl" data-macaly="hero-description">
            How comprehensive consumer research identified optimal fit names for "Relaxed Fit" and "Close Fit" jeans categories, enhancing product clarity and customer satisfaction through strategic naming decisions.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-indigo-600 mb-2" data-macaly="metric-1">512 Participants</div>
              <div className="text-proof-gray-600">US Females 21-64</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2" data-macaly="metric-2">14-Min Survey</div>
              <div className="text-proof-gray-600">Quantitative Research</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-indigo-600 mb-2" data-macaly="metric-3">0-10 Scale Rating</div>
              <div className="text-proof-gray-600">Fit Name Evaluation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Target className="h-8 w-8 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="challenge-title">The Challenge</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-proof-gray-600 leading-relaxed" data-macaly="challenge-description">
                  Our client needed to determine the most suitable names for different jeans fits under the "Relaxed Fit" and "Close Fit" categories to improve product clarity and consumer understanding.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-proof-gray-900" data-macaly="objectives-title">Primary Objectives:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Identify names that best describe fit characteristics in both categories</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Understand consumer perceptions and preferences for each fit name</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Provide actionable insights for product naming strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Enhance marketing communication accuracy and effectiveness</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/7243122/pexels-photo-7243122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Woman wearing jeans and beige jacket showcasing different jeans fits and styles"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-macaly="challenge-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="approach-title">Our Approach</h2>
            </div>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto" data-macaly="approach-description">
              We conducted comprehensive quantitative research using structured fit name evaluation methodology to capture precise consumer perceptions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white border-2 border-indigo-200 hover:border-indigo-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Type className="h-6 w-6 text-indigo-600" />
                <h3 className="text-xl font-semibold text-proof-gray-900" data-macaly="approach-card-1-title">Quantitative Survey</h3>
              </div>
              <ul className="space-y-3 text-proof-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>14-minute online survey methodology</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>512 US females aged 21-64 participants</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Household income $15K+ requirement</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-proof-gray-900" data-macaly="approach-card-2-title">Fit Name Evaluation</h3>
              </div>
              <ul className="space-y-3 text-proof-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>0-10 scale rating system for each fit name</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Range evaluation from "Relaxed" to "Close" fit</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Statistical analysis of ratings and preferences</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/9594093/pexels-photo-9594093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Colorful clothing tags and labels arranged systematically showing brand naming concepts"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-macaly="approach-image"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6" data-macaly="target-audience-title">Target Audience Criteria</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-proof-gray-200">
                  <div className="font-medium text-proof-gray-900 mb-2">Demographics</div>
                  <div className="text-proof-gray-600">US females aged 21-64 with household income $15K+</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-proof-gray-200">
                  <div className="font-medium text-proof-gray-900 mb-2">Purchase Behavior</div>
                  <div className="text-proof-gray-600">Purchased jeans in the past year and wear jeans monthly</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-proof-gray-200">
                  <div className="font-medium text-proof-gray-900 mb-2">Size Range</div>
                  <div className="text-proof-gray-600">Both Misses and Plus Sizes (4 to 20) represented</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="results-title">Clear Naming Preferences Revealed</h2>
            </div>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto" data-macaly="results-description">
              The research identified distinct consumer preferences for fit names, providing clear guidance for optimal product naming strategies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-green-600">R</div>
                </div>
                <h3 className="text-2xl font-semibold text-proof-gray-900" data-macaly="relaxed-fit-title">Relaxed Fit Category</h3>
                <p className="text-proof-gray-600 mt-2">Top-rated names for comfortable, loose-fitting jeans</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200">
                  <span className="font-medium text-proof-gray-900">"Relaxed"</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-green-200 rounded-full overflow-hidden">
                      <div className="w-11/12 h-full bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-green-600 font-medium">9.2</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200">
                  <span className="font-medium text-proof-gray-900">"Eased"</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-green-200 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-green-600 font-medium">8.1</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200">
                  <span className="font-medium text-proof-gray-900">"Balanced"</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-green-200 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-green-600 font-medium">7.6</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-blue-600">C</div>
                </div>
                <h3 className="text-2xl font-semibold text-proof-gray-900" data-macaly="close-fit-title">Close Fit Category</h3>
                <p className="text-proof-gray-600 mt-2">Preferred names for form-fitting, tailored jeans</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-200">
                  <span className="font-medium text-proof-gray-900">"Close"</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div className="w-11/12 h-full bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">9.1</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-200">
                  <span className="font-medium text-proof-gray-900">"Slim"</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">8.4</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-200">
                  <span className="font-medium text-proof-gray-900">"Skinny"</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">8.0</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6" data-macaly="insights-title">Key Research Insights</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Consumer Perceptions</h4>
                    <p className="text-proof-gray-600">Detailed feedback revealed the importance of comfort, fit accuracy, and emotional impact of naming choices</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Fit Name Ranges</h4>
                    <p className="text-proof-gray-600">Specific fit ranges identified for each name, clarifying consumer expectations and preferences</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/8396317/pexels-photo-8396317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Women selecting and examining clothes on retail rack showing consumer choice behavior"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-macaly="results-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Feedback Highlight */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/9558584/pexels-photo-9558584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Woman wearing pink t-shirt and well-fitted jeans demonstrating ideal fit expectations"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-macaly="feedback-highlight-image"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="feedback-highlight-title">Consumer Feedback Insights</h2>
              </div>
              
              <p className="text-proof-gray-600 leading-relaxed mb-6" data-macaly="feedback-highlight-description">
                Participants provided detailed qualitative feedback highlighting the emotional and practical associations with different fit names, emphasizing the importance of accurate terminology for customer satisfaction.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-proof-gray-700">Comfort and fit accuracy ranked as top priorities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-proof-gray-700">Emotional impact of naming significantly influences purchase decisions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-proof-gray-700">Clear preference for descriptive over abstract naming conventions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="benefits-title">Client Benefits</h2>
            </div>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto" data-macaly="benefits-description">
              The naming research provided clear, actionable insights that transformed the client's product naming strategy and customer communication approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 hover:border-indigo-300 transition-colors text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Type className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="benefit-1-title">Optimized Product Naming</h3>
              <p className="text-proof-gray-600" data-macaly="benefit-1-description">
                Selected fit names that resonate most with consumers, enhancing product appeal and clarity
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-purple-300 transition-colors text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="benefit-2-title">Improved Marketing Strategies</h3>
              <p className="text-proof-gray-600" data-macaly="benefit-2-description">
                Developed targeted messaging aligned with consumer perceptions and preferences for each fit name
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-300 transition-colors text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="benefit-3-title">Enhanced Customer Satisfaction</h3>
              <p className="text-proof-gray-600" data-macaly="benefit-3-description">
                Ensured product names accurately reflect fit expectations, leading to better customer experiences
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6" data-macaly="cta-title">
            Ready to Optimize Your Product Naming?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-macaly="cta-description">
            Let's help you identify the names and messaging that will resonate most with your target customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold" data-macaly="cta-primary-button">
                Schedule Consultation
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 font-semibold" data-macaly="cta-secondary-button">
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}