import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Download, Share2, Calendar, Users, Target, TrendingUp, BarChart3, CheckCircle, Dumbbell, Star } from 'lucide-react'
import Link from 'next/link'

export default function SmartGymClaimsTestCase() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-6 bg-proof-gray-50 border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/resources" className="text-proof-blue-600 hover:text-proof-blue-700">Resources</Link>
            <span className="text-proof-gray-400">/</span>
            <Link href="/resources/case-studies" className="text-proof-blue-600 hover:text-proof-blue-700">Case Studies</Link>
            <span className="text-proof-gray-400">/</span>
            <span className="text-proof-gray-600">Smart Home Gym Claims Testing</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-proof-blue-50 to-proof-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources/case-studies" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-proof-blue-100 text-proof-blue-700">Consumer Goods</Badge>
                <Badge className="bg-proof-purple-100 text-proof-purple-700">MaxDiff Analysis</Badge>
                <Badge className="bg-proof-gray-100 text-proof-gray-700">Claims Testing</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-proof-gray-900 mb-6">
                Smart Home Gym Claims Testing & Consumer Perception Analysis
              </h1>
              
              <p className="text-xl text-proof-gray-600 leading-relaxed mb-8">
                How a smart home fitness equipment company evaluated consumer perceptions of product benefits and claims, optimizing their messaging strategy to maximize purchase motivation and brand credibility.
              </p>
              
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Request Full Study
                  </Button>
                </Link>
                <Button variant="outline" className="border-proof-blue-600 text-proof-blue-600 hover:bg-proof-blue-50">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Case Study
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="p-6 bg-white">
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Duration: 15-minute survey</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Sample: Home gym equipment buyers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Method: MaxDiff Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Dumbbell className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Industry: Fitness Equipment</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Challenge */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Objectives & Challenges</h2>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                A smart home fitness equipment company needed to understand consumer reactions to different potential benefits and claims associated with their product to optimize their marketing messaging strategy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Determine relative purchase motivation driven by various product benefits and claims</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Assess the believability of claims when associated with the brand</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Evaluate consumer perceptions of specific product benefit statements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Measure initial impressions and purchase consideration of the product concept</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <img 
                src="https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Smart home gym equipment setup" 
                className="w-full h-64 object-cover rounded-lg"
                data-macaly="smart-gym-equipment-image"
              />
              <h3 className="text-xl font-semibold text-proof-gray-900 mt-4 mb-2">Smart Fitness Innovation</h3>
              <p className="text-proof-gray-600">Understanding consumer perceptions of advanced home fitness technology and benefits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Research Approach</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Quantitative Research Design</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                A comprehensive 15-minute online survey was designed to measure perceived compellingness and believability of product benefit statements, incorporating advanced MaxDiff analysis methodology.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">MaxDiff Exercise</h4>
                    <p className="text-proof-gray-600">Advanced analysis to identify most and least motivating claims for purchase decisions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Claim Evaluation</h4>
                    <p className="text-proof-gray-600">Deep dive assessment of compellingness and believability of individual product claims</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Concept Testing</h4>
                    <p className="text-proof-gray-600">Initial impressions and purchase consideration evaluation of the smart gym concept</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Target Audience Profile</h3>
              <p className="text-proof-gray-600 mb-6">
                Carefully screened participants representing the ideal customer profile for premium smart home fitness equipment.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-proof-gray-900">Demographics</span>
                    <span className="text-proof-blue-600">Ages 25-64</span>
                  </div>
                  <p className="text-sm text-proof-gray-600">US adults with household income above threshold specified</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-proof-gray-900">Fitness Profile</span>
                    <span className="text-proof-purple-600">Active Users</span>
                  </div>
                  <p className="text-sm text-proof-gray-600">Work out 2+ times weekly, value exercise, open to home workouts</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-proof-gray-900">Purchase Intent</span>
                    <span className="text-proof-blue-600">High Value</span>
                  </div>
                  <p className="text-sm text-proof-gray-600">Considering equipment purchases $2,000+, unfamiliar with brand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Details */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Research Methodology</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Survey Structure</h3>
              <p className="text-proof-gray-600 mb-4">
                The research employed a sophisticated two-part approach combining MaxDiff trade-off analysis with detailed claim evaluation to provide comprehensive insights.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">MaxDiff analysis for purchase motivation ranking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Individual claim compellingness measurement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Brand association believability testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Overall concept perception analysis</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Sample Specifications</h3>
              <p className="text-proof-gray-600 mb-4">
                A carefully curated sample of  participants meeting strict qualification criteria to ensure high-quality, relevant insights for the smart fitness market.
              </p>
              <div className="space-y-4">
                
                <div className="flex justify-between items-center p-3 bg-proof-purple-50 rounded-lg">
                  <span className="font-semibold text-proof-gray-900">Survey Length</span>
                  <span className="text-proof-purple-600 font-bold">15 minutes</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-proof-green-50 rounded-lg">
                  <span className="font-semibold text-proof-gray-900">Screening</span>
                  <span className="text-proof-green-600 font-bold">Strict Qualification</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-proof-blue-50 rounded-lg">
                  <span className="font-semibold text-proof-gray-900">Brand Exposure</span>
                  <span className="text-proof-blue-600 font-bold">Unfamiliar</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Research Results</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Key Findings</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                The study revealed comprehensive insights regarding the motivating power and credibility of various product claims, providing clear direction for messaging optimization.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-proof-blue-50 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Purchase Motivation Analysis</h4>
                  <p className="text-proof-gray-600">MaxDiff analysis identified claims most and least likely to drive purchase interest among target audience</p>
                </div>
                <div className="p-4 bg-proof-purple-50 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Claim Compellingness</h4>
                  <p className="text-proof-gray-600">Measured level of compellingness for individual claims, showing which benefits resonated most strongly</p>
                </div>
                <div className="p-4 bg-proof-green-50 rounded-lg">
                  <h4 className="font-semibold text-proof-green-600 mb-2">Brand Believability</h4>
                  <p className="text-proof-gray-600">Assessed consumer belief in claims when associated with the brand, identifying credibility gaps</p>
                </div>
                <div className="p-4 bg-proof-blue-50 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Perception Impact</h4>
                  <p className="text-proof-gray-600">Insights into how claims influenced overall perception and purchase consideration</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Example Claim Performance</h3>
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">76%</div>
                  <p className="text-sm text-proof-gray-600">Feel they're in the best shape of their life after 3 months</p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-proof-gray-600">Compellingness Rating</span>
                    <div className="flex gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-proof-gray-600">Believability Score</span>
                    <span className="text-proof-green-600 font-semibold">High</span>
                  </div>
                </div>
              </div>
              
              <h4 className="font-semibold text-proof-gray-900 mb-3">Key Insights</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <span className="text-sm text-proof-gray-600">Result-focused claims showed highest motivation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <span className="text-sm text-proof-gray-600">Time-specific benefits increased believability</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-proof-green-600 rounded-full mt-2"></div>
                  <span className="text-sm text-proof-gray-600">Percentage-based claims enhanced credibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Benefits */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Benefits to the Client</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white">
              <div className="p-3 bg-proof-blue-100 rounded-lg w-fit mb-4">
                <Target className="h-8 w-8 text-proof-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Refined Messaging</h3>
              <p className="text-proof-gray-600 mb-4">
                Focus marketing and communication efforts on the most motivating and believable product benefits to maximize impact and ROI.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-proof-gray-600">Prioritized messaging hierarchy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-proof-gray-600">Evidence-based claim selection</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <div className="p-3 bg-proof-purple-100 rounded-lg w-fit mb-4">
                <TrendingUp className="h-8 w-8 text-proof-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Product Development</h3>
              <p className="text-proof-gray-600 mb-4">
                Highlight key benefits that resonate with consumers, potentially influencing future product development and feature enhancements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-proof-gray-600">Feature prioritization roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-proof-gray-600">User-centered development focus</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <div className="p-3 bg-proof-green-100 rounded-lg w-fit mb-4">
                <BarChart3 className="h-8 w-8 text-proof-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Sales Strategy</h3>
              <p className="text-proof-gray-600 mb-4">
                Understand which claims are most effective in driving purchase consideration, informing sales and marketing strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-proof-gray-600">Conversion-optimized sales tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-proof-gray-600">Customer objection handling</span>
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="mt-12">
            <Card className="p-8 bg-gradient-to-r from-proof-blue-50 to-proof-purple-50">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-proof-gray-900 mb-4">Strategic Impact</h3>
                <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto leading-relaxed">
                  The insights from this study provided actionable data that enabled the client to optimize their marketing messaging, 
                  prioritize product features that matter most to consumers, and develop sales strategies focused on the most compelling 
                  and believable product benefits in the competitive smart fitness market.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Product Claims Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how claims testing and MaxDiff analysis can help you identify the most compelling and believable product benefits to drive purchase decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/resources/case-studies">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 font-semibold">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}