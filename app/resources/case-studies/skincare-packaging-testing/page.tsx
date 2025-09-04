'use client'

import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Target, Users, TrendingUp, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SkincarePackagingTestingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/resources/case-studies" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200" data-macaly="industry-badge">
              Beauty & Cosmetics
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200" data-macaly="methodology-badge">
              Package Testing
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
            Evaluating New Packaging Designs for Skincare Products
          </h1>
          
          <p className="text-xl text-proof-gray-600 leading-relaxed max-w-3xl" data-macaly="hero-description">
            How comprehensive packaging evaluation across multiple markets revealed key design preferences and brand fit insights to optimize skincare product presentation and customer appeal.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-pink-600 mb-2" data-macaly="metric-1">18-Min Survey</div>
              <div className="text-proof-gray-600">Comprehensive Evaluation</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2" data-macaly="metric-2">3 Global Markets</div>
              <div className="text-proof-gray-600">US, China & Japan</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-pink-600 mb-2" data-macaly="metric-3">5 Product Categories</div>
              <div className="text-proof-gray-600">Full Product Line Test</div>
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
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Target className="h-8 w-8 text-pink-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="challenge-title">The Challenge</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-proof-gray-600 leading-relaxed" data-macaly="challenge-description">
                  Our client needed to assess the appeal, interest, uniqueness, and emotional drivers of new packaging designs for their skincare product line across five key sub-categories including moisturizers, serums, cleansers, masks, and sunscreens.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-proof-gray-900" data-macaly="objectives-title">Primary Objectives:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Determine fit with the brand identity and values</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Identify delighters and barriers in new designs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Compare new designs versus current packaging performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Evaluate performance relative to key competitors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/17150052/pexels-photo-17150052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Aesthetic display of skincare bottles on marble backdrop showcasing packaging design"
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
              We conducted comprehensive packaging evaluations across multiple markets to deliver actionable insights for optimizing skincare product presentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="approach-card-1-title">Packaging Evaluations</h3>
              <ul className="space-y-3 text-proof-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Detailed evaluations of new and current packaging designs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>18-minute online survey methodology</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Statistical comparative analysis techniques</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-2 border-pink-200 hover:border-pink-300 transition-colors">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="approach-card-2-title">Global Market Research</h3>
              <ul className="space-y-3 text-proof-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cross-cultural packaging preference analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Market-specific design validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Brand fit assessment across cultures</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/8533222/pexels-photo-8533222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Three minimalist skincare bottles showcasing clean packaging design"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-macaly="approach-image"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6" data-macaly="target-audience-title">Target Audience</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-proof-gray-200">
                  <div className="font-medium text-proof-gray-900 mb-2">Demographics</div>
                  <div className="text-proof-gray-600">Females aged 20-45, regular skincare users with brand awareness</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-proof-gray-200">
                  <div className="font-medium text-proof-gray-900 mb-2">Income Requirements</div>
                  <div className="text-proof-gray-600">$80K+ (US), 30K yuan+ (China), 7M yen+ (Japan)</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-proof-gray-200">
                  <div className="font-medium text-proof-gray-900 mb-2">Geographic Scope</div>
                  <div className="text-proof-gray-600">United States, China, and Japan markets</div>
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
              <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="results-title">Key Results</h2>
            </div>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto" data-macaly="results-description">
              Our comprehensive packaging evaluation revealed crucial insights that transformed the client's product presentation strategy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6" data-macaly="insights-title">Critical Insights Discovered</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Design Preferences by Market</h4>
                    <p className="text-proof-gray-600">Identified preferred packaging designs for different skincare products across US, China, and Japan markets</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Customer Feedback Analysis</h4>
                    <p className="text-proof-gray-600">Clear identification of the most appealing features and areas for improvement in new packaging designs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Brand Fit Evaluation</h4>
                    <p className="text-proof-gray-600">Comprehensive assessment of how well new designs aligned with brand image and overall product collection</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/10825666/pexels-photo-10825666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Elegant cosmetic serum bottles arranged on natural wood showcasing premium packaging design"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-macaly="results-image"
              />
            </div>
          </div>

          <div className="relative">
            <Image 
              src="https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Market research analysis charts and graphs with magnifying glass showing detailed data insights"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg w-full"
              data-macaly="analysis-image"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="benefits-title">Client Benefits</h2>
            </div>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto" data-macaly="benefits-description">
              The insights from this study provided actionable data that transformed the client's packaging strategy and market approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-2 border-pink-200 hover:border-pink-300 transition-colors text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="benefit-1-title">Enhanced Packaging Designs</h3>
              <p className="text-proof-gray-600" data-macaly="benefit-1-description">
                Tailored packaging to meet the preferences of different customer segments across global markets
              </p>
            </Card>

            <Card className="p-8 bg-white border-2 border-purple-200 hover:border-purple-300 transition-colors text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="benefit-2-title">Improved Product Presentation</h3>
              <p className="text-proof-gray-600" data-macaly="benefit-2-description">
                Developed packaging that resonates with key customer segments and enhances brand perception
              </p>
            </Card>

            <Card className="p-8 bg-white border-2 border-blue-200 hover:border-blue-300 transition-colors text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="benefit-3-title">Boosted Customer Satisfaction</h3>
              <p className="text-proof-gray-600" data-macaly="benefit-3-description">
                Implemented strategies to enhance customer satisfaction by focusing on the most valued packaging features
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6" data-macaly="cta-title">
            Ready to Optimize Your Product Packaging?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-macaly="cta-description">
            Let's help you create packaging that resonates with your customers and drives sales across global markets.
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