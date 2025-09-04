'use client'

import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Target, Users, TrendingUp, MessageSquare, Star, Eye, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ApparelMessagingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/resources/case-studies" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200" data-macaly="industry-badge">
              Apparel
            </Badge>
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200" data-macaly="methodology-badge">
              Message Testing
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
            Evaluating Apparel Messaging Effectiveness
          </h1>
          
          <p className="text-xl text-proof-gray-600 leading-relaxed max-w-3xl" data-macaly="hero-description">
            How strategic message testing across three ticket designs revealed the most compelling messaging to drive consumer interest and purchase intent for apparel products promising increased warmth while reducing bulk.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2" data-macaly="metric-1">600 Participants</div>
              <div className="text-proof-gray-600">Men Aged 25-54</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-amber-600 mb-2" data-macaly="metric-2">3 Ticket Designs</div>
              <div className="text-proof-gray-600">Message Testing</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2" data-macaly="metric-3">15-Min Survey</div>
              <div className="text-proof-gray-600">Comprehensive Analysis</div>
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
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="challenge-title">The Challenge</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-proof-gray-600 leading-relaxed" data-macaly="challenge-description">
                  Our client needed to identify the most compelling messaging for their apparel products and understand how to effectively communicate the benefits of increased warmth while reducing bulk to their target audience.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-proof-gray-900" data-macaly="objectives-title">Primary Objectives:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Identify most effective messaging to drive consumer interest and purchase intent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Determine if "Western" terminology affects perception of standard fit names</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Evaluate clarity and appeal of different ticket designs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Optimize communication of warmth-to-bulk benefit ratio</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/28758137/pexels-photo-28758137.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Man wearing modern grey winter sports jacket showcasing warmth without bulk messaging"
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
              <div className="p-3 bg-amber-100 rounded-lg">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="approach-title">Our Approach</h2>
            </div>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto" data-macaly="approach-description">
              We conducted comprehensive message testing using systematic ticket design evaluation to capture precise consumer responses and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white border-2 border-orange-200 hover:border-orange-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-semibold text-proof-gray-900" data-macaly="approach-card-1-title">Message Testing</h3>
              </div>
              <ul className="space-y-3 text-proof-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Three different ticket designs evaluated</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Consumer responses to various messaging strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Statistical analysis of messaging effectiveness</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-2 border-amber-200 hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-amber-600" />
                <h3 className="text-xl font-semibold text-proof-gray-900" data-macaly="approach-card-2-title">Ticket Evaluation</h3>
              </div>
              <ul className="space-y-3 text-proof-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Clarity, relevance, and appeal assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>15-minute comprehensive online survey</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Detailed feedback on design preferences</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/9594079/pexels-photo-9594079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Scattered clothing tags in various colors showing different ticket design concepts"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-macaly="approach-image"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6" data-macaly="target-audience-title">Target Audience Profile</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-proof-gray-200">
                  <div className="font-medium text-proof-gray-900 mb-2">Demographics</div>
                  <div className="text-proof-gray-600">600 men aged 25-54 with household income $25K+</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-proof-gray-200">
                  <div className="font-medium text-proof-gray-900 mb-2">Purchase Behavior</div>
                  <div className="text-proof-gray-600">Purchased outdoor, casual, or denim apparel in past 12 months</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-proof-gray-200">
                  <div className="font-medium text-proof-gray-900 mb-2">Research Method</div>
                  <div className="text-proof-gray-600">Each participant rated three different ticket designs</div>
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
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="results-title">Clear Messaging Preferences Identified</h2>
            </div>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto" data-macaly="results-description">
              The research revealed distinct consumer preferences for ticket designs and messaging strategies, providing clear guidance for optimal communication approaches.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="result-1-title">Messaging Effectiveness</h3>
              <p className="text-proof-gray-600" data-macaly="result-1-description">
                Identified most compelling messaging strategies that drive consumer interest and purchase intent
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="result-2-title">Consumer Preferences</h3>
              <p className="text-proof-gray-600" data-macaly="result-2-description">
                Clear preferences for specific messaging approaches and ticket design elements that resonate with target audience
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="result-3-title">Fit Perception Impact</h3>
              <p className="text-proof-gray-600" data-macaly="result-3-description">
                Understanding of how "Western" terminology affects consumer perception of standard fit names like "Slim Straight"
              </p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6" data-macaly="insights-title">Key Research Insights</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Optimal Messaging Strategy</h4>
                    <p className="text-proof-gray-600">Identified the most compelling messaging approaches that effectively communicate warmth-to-bulk benefits</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Ticket Design Preferences</h4>
                    <p className="text-proof-gray-600">Clear consumer preferences for specific design elements that enhance clarity and appeal</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Terminology Impact Analysis</h4>
                    <p className="text-proof-gray-600">Quantified how regional terminology influences consumer perception and purchase considerations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/6962620/pexels-photo-6962620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="People wearing outdoor casual apparel showing target demographic for messaging research"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-macaly="results-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Western Fit Analysis */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Stack of blue denim jeans showing different fits including Western styles"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-macaly="western-fit-image"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Star className="h-8 w-8 text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="western-fit-title">"Western" Terminology Impact</h2>
              </div>
              
              <p className="text-proof-gray-600 leading-relaxed mb-6" data-macaly="western-fit-description">
                The research specifically examined how adding "Western" to standard fit names like "Slim Straight" influences consumer perception, providing valuable insights for regional marketing strategies and product positioning.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-proof-gray-700">Measured perception differences between standard and "Western" fit names</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-proof-gray-700">Analyzed regional and cultural associations with terminology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-proof-gray-700">Identified optimal naming strategies for different market segments</span>
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
              <div className="p-3 bg-blue-100 rounded-lg">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="benefits-title">Client Benefits</h2>
            </div>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto" data-macaly="benefits-description">
              The messaging research provided clear, actionable insights that transformed the client's communication strategy and customer engagement approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 hover:border-orange-300 transition-colors text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="benefit-1-title">Enhanced Product Messaging</h3>
              <p className="text-proof-gray-600" data-macaly="benefit-1-description">
                Implemented the most effective messaging to communicate product benefits and drive consumer interest
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-300 transition-colors text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="benefit-2-title">Improved Marketing Strategies</h3>
              <p className="text-proof-gray-600" data-macaly="benefit-2-description">
                Developed clear and compelling ticket designs that resonate with target consumers and enhance brand communication
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-300 transition-colors text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="benefit-3-title">Boosted Consumer Interest</h3>
              <p className="text-proof-gray-600" data-macaly="benefit-3-description">
                Implemented messaging strategies that increase consumer interest and purchase intent by highlighting key product features
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6" data-macaly="cta-title">
            Ready to Optimize Your Messaging Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-macaly="cta-description">
            Let's help you identify the messaging and communication approaches that will drive the greatest consumer interest and purchase intent.
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