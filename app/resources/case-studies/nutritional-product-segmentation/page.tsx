'use client'

import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Target, Users, TrendingUp, Activity } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function NutritionalProductSegmentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/resources/case-studies" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200" data-macaly="industry-badge">
              Food & Restaurants
            </Badge>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200" data-macaly="methodology-badge">
              Market Segmentation
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
            Segmenting the Nutritional Product Market
          </h1>
          
          <p className="text-xl text-proof-gray-600 leading-relaxed max-w-3xl" data-macaly="hero-description">
            How comprehensive market segmentation analysis revealed six distinct consumer groups and their unique motivations, driving targeted product development and marketing strategies in the nutritional products industry.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2" data-macaly="metric-1">36-Min Survey</div>
              <div className="text-proof-gray-600">Comprehensive Research</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2" data-macaly="metric-2">6 Distinct Segments</div>
              <div className="text-proof-gray-600">Actionable Consumer Groups</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2" data-macaly="metric-3">Ages 18-64</div>
              <div className="text-proof-gray-600">Broad Demographic Reach</div>
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
                <div className="p-3 bg-green-100 rounded-lg">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="challenge-title">The Challenge</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-proof-gray-600 leading-relaxed" data-macaly="challenge-description">
                  Our client needed to segment the nutritional products market into actionable consumer groups to better understand behaviors, preferences, and motivations driving purchasing decisions across this diverse category.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-proof-gray-900" data-macaly="objectives-title">Primary Objectives:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Identify key segments to inform product development and marketing strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Understand motivations and influences driving consumer choices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Assess market size and opportunities within each segment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-proof-gray-600">Enhance customer retention and acquisition efforts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/7615467/pexels-photo-7615467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Natural supplements and healthy ingredients including lemon, ginger, and vitamins on marble surface"
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
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="approach-title">Our Approach</h2>
            </div>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto" data-macaly="approach-description">
              We conducted comprehensive segmentation research using advanced statistical techniques to categorize consumers into distinct, actionable groups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white border-2 border-emerald-200 hover:border-emerald-300 transition-colors">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="approach-card-1-title">Segmentation Research</h3>
              <ul className="space-y-3 text-proof-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Detailed segmentation analysis using cluster analysis techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>36-minute comprehensive online survey methodology</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Statistical analysis to identify natural consumer groupings</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-2 border-green-200 hover:border-green-300 transition-colors">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="approach-card-2-title">Profile Development</h3>
              <ul className="space-y-3 text-proof-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Detailed consumer profiles highlighting unique characteristics</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Validation against multiple data sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Actionable insights for marketing and product development</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/7615572/pexels-photo-7615572.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Top view of bowls with nutritional supplements, capsules, and herbs showcasing product variety"
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
                  <div className="text-proof-gray-600">Adults aged 18-64 across all income levels and consumption habits</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-proof-gray-200">
                  <div className="font-medium text-proof-gray-900 mb-2">Sample Composition</div>
                  <div className="text-proof-gray-600">Nutritional product consumers including prospects, customers, and subscribers</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-proof-gray-200">
                  <div className="font-medium text-proof-gray-900 mb-2">Research Scope</div>
                  <div className="text-proof-gray-600">Comprehensive analysis of consumption behaviors and preferences</div>
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
              <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="results-title">Six Distinct Consumer Segments</h2>
            </div>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto" data-macaly="results-description">
              Our analysis revealed six unique consumer segments, each with distinct motivations, behaviors, and product preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-300 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3" data-macaly="segment-1-title">All-Natural Plant-Based Lifestyle</h3>
              <p className="text-proof-gray-600 text-sm" data-macaly="segment-1-description">
                Environmentally conscious individuals prioritizing organic and plant-based nutritional options
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 hover:border-red-300 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3" data-macaly="segment-2-title">Peak Performers</h3>
              <p className="text-proof-gray-600 text-sm" data-macaly="segment-2-description">
                Fitness enthusiasts focused on muscle growth and performance enhancement through targeted nutrition
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3" data-macaly="segment-3-title">Image & Well-Being Oriented</h3>
              <p className="text-proof-gray-600 text-sm" data-macaly="segment-3-description">
                Consumers seeking products that improve appearance and overall health and wellness
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3" data-macaly="segment-4-title">Outdoors Connectors</h3>
              <p className="text-proof-gray-600 text-sm" data-macaly="segment-4-description">
                Individuals valuing convenience and nutrition while enjoying outdoor activities and adventures
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 hover:border-yellow-300 transition-colors">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3" data-macaly="segment-5-title">Driven to Lose</h3>
              <p className="text-proof-gray-600 text-sm" data-macaly="segment-5-description">
                Consumers actively trying to lose weight and seeking products to aid in their dieting efforts
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-200 hover:border-gray-300 transition-colors">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3" data-macaly="segment-6-title">Overwhelmed Convenience Seekers</h3>
              <p className="text-proof-gray-600 text-sm" data-macaly="segment-6-description">
                Busy individuals looking for quick and easy nutritional options that fit their hectic lifestyles
              </p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6" data-macaly="insights-title">Key Research Insights</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Consumption Patterns</h4>
                    <p className="text-proof-gray-600">Detailed insights into frequency and types of nutritional products consumed by each segment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Product Preferences</h4>
                    <p className="text-proof-gray-600">Identification of the most important features for nutritional product choice among different segments</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/7948060/pexels-photo-7948060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Market analyst working with segmentation data and charts on laptop showing consumer insights"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-macaly="results-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Peak Performers Highlight */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/4378489/pexels-photo-4378489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Fitness enthusiast holding protein shake demonstrating peak performer segment lifestyle"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-macaly="segment-highlight-image"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Activity className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="segment-highlight-title">Segment Spotlight: Peak Performers</h2>
              </div>
              
              <p className="text-proof-gray-600 leading-relaxed mb-6" data-macaly="segment-highlight-description">
                This high-value segment represents fitness enthusiasts and athletes who prioritize performance enhancement and muscle growth. They demonstrate strong brand loyalty and higher spending patterns on premium nutritional products.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-proof-gray-700">Focus on protein-rich and performance-enhancing products</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-proof-gray-700">Regular gym attendance and structured fitness routines</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-proof-gray-700">Higher willingness to pay for quality and proven results</span>
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
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-proof-gray-900" data-macaly="benefits-title">Client Benefits</h2>
            </div>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto" data-macaly="benefits-description">
              The segmentation insights provided actionable data that transformed the client's approach to product development and marketing strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-300 transition-colors text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="benefit-1-title">Enhanced Product Offerings</h3>
              <p className="text-proof-gray-600" data-macaly="benefit-1-description">
                Tailored product development to meet the specific preferences and needs of each consumer segment
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:border-blue-300 transition-colors text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="benefit-2-title">Improved Marketing Strategies</h3>
              <p className="text-proof-gray-600" data-macaly="benefit-2-description">
                Developed targeted messaging that resonates with the unique motivations of each customer segment
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-purple-300 transition-colors text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4" data-macaly="benefit-3-title">Boosted Customer Retention</h3>
              <p className="text-proof-gray-600" data-macaly="benefit-3-description">
                Implemented strategies to enhance satisfaction and loyalty by focusing on the most valued product features
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6" data-macaly="cta-title">
            Ready to Understand Your Market Segments?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-macaly="cta-description">
            Let's help you identify and target the consumer segments that will drive your business growth.
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