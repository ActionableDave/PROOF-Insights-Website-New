import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Download, Share2, Calendar, MapPin, Users, Target, TrendingUp, BarChart3, CheckCircle, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function SaasPricingOptimizationCase() {
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
            <span className="text-proof-gray-600">SaaS Pricing Optimization</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-proof-purple-50 to-proof-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources/case-studies" className="inline-flex items-center text-proof-purple-600 hover:text-proof-purple-700 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-proof-purple-100 text-proof-purple-700">Technology</Badge>
                <Badge className="bg-proof-blue-100 text-proof-blue-700">Conjoint Analysis</Badge>
                <Badge className="bg-proof-gray-100 text-proof-gray-700">Pricing Strategy</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-proof-gray-900 mb-6">
                SaaS Platform Pricing Strategy Optimization
              </h1>
              
              <p className="text-xl text-proof-gray-600 leading-relaxed mb-8">
                How a B2B SaaS company optimized their pricing strategy using advanced conjoint analysis, revealing a potential 42% revenue increase opportunity and improved customer satisfaction while expanding their market reach.
              </p>
              
              <div className="flex gap-4">
                <Button className="bg-proof-purple-600 hover:bg-proof-purple-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Study
                </Button>
                <Button variant="outline" className="border-proof-purple-600 text-proof-purple-600 hover:bg-proof-purple-50">
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
                    <Calendar className="h-5 w-5 text-proof-purple-600" />
                    <span className="text-proof-gray-600">Duration: 16 weeks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-proof-purple-600" />
                    <span className="text-proof-gray-600">Market: Global B2B</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-proof-purple-600" />
                    <span className="text-proof-gray-600">Sample: SaaS app decision makers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-proof-purple-600" />
                    <span className="text-proof-gray-600">Pricing Tiers: 4 optimized</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Key Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <DollarSign className="h-12 w-12 text-proof-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-purple-600 mb-2">42%</div>
              <div className="text-proof-gray-600">Revenue Increase Potential</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <TrendingUp className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">15%</div>
              <div className="text-proof-gray-600">Potential Customer Satisfaction Boost</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <BarChart3 className="h-12 w-12 text-proof-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-purple-600 mb-2">$2.3M</div>
              <div className="text-proof-gray-600">Potential New ARR </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">The Challenge</h2>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                A fast-growing B2B SaaS platform was experiencing pricing pressure and customer churn. Their original pricing model was no longer optimal for their diverse customer base and expanding feature set.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">High customer acquisition costs with low conversion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Increasing churn rate due to pricing misalignment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Unclear value perception across different segments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Competitive pressure from new market entrants</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Pre-Optimization Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Monthly Churn Rate</span>
                  <span className="font-semibold text-proof-red-600">8%+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Conversion Rate</span>
                  <span className="font-semibold text-proof-red-600">2.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">ARPU</span>
                  <span className="font-semibold text-proof-red-600">Proprietary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Customer Satisfaction</span>
                  <span className="font-semibold text-proof-red-600">7.2/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Our Conjoint Analysis Solution</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Advanced Pricing Research</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                We conducted a comprehensive conjoint analysis to understand customer preferences and willingness to pay across different feature bundles, pricing models, and service levels.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Choice-Based Conjoint</h4>
                    <p className="text-proof-gray-600">Analyzed 15 key features across 4 pricing dimensions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Price Sensitivity Analysis</h4>
                    <p className="text-proof-gray-600">Determined optimal price points for each customer segment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Feature Valuation</h4>
                    <p className="text-proof-gray-600">Quantified relative importance and monetary value of features</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Competitive Benchmarking</h4>
                    <p className="text-proof-gray-600">Analyzed positioning vs. 6 key competitors</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-purple-50 to-proof-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Optimized Pricing Structure</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Beginner (Price A)</h4>
                  <p className="text-sm text-proof-gray-600">Core features for small groups, simplified onboarding</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Pro (Price B)</h4>
                  <p className="text-sm text-proof-gray-600">Advanced analytics, integrations, priority support</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Enterprise (Price C/month)</h4>
                  <p className="text-sm text-proof-gray-600">Full feature suite, custom integrations, dedicated CSM</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Custom (Contact for pricing)</h4>
                  <p className="text-sm text-proof-gray-600">Tailored solutions for enterprise requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Implementation & Testing</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Phased Rollout Strategy</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">A/B tested new pricing with 20% of traffic</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Grandfathered existing customers with migration path</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Updated sales training and materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Implemented value-based messaging framework</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Feature Bundling Optimization</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Reorganized features based on customer value perceptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Created clear upgrade paths between tiers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Introduced usage-based add-ons for flexibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Simplified decision-making with clear value props</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">12-Month Results</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-proof-green-50 to-proof-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Post-Optimization Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Monthly Churn Rate</span>
                  <span className="font-semibold text-proof-green-600">4.2% ↓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Conversion Rate</span>
                  <span className="font-semibold text-proof-green-600">4.8% ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">ARPU</span>
                  <span className="font-semibold text-proof-green-600">Significant ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Customer Satisfaction</span>
                  <span className="font-semibold text-proof-green-600">8.3/10 ↑</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-purple-50 to-proof-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Business Impact</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Potential Revenue Growth</h4>
                  <p className="text-sm text-proof-gray-600">42% increase in  revenue through optimized pricing tiers</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Customer Retention</h4>
                  <p className="text-sm text-proof-gray-600">Reduced potential churn by 47% with better value alignment</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Market Position</h4>
                  <p className="text-sm text-proof-gray-600">Strengthened competitive position with clear differentiation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-proof-purple-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Pricing Strategy?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Discover how conjoint analysis can help you find the optimal price points and maximize revenue while improving customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-purple-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-purple-600 px-8 py-3 font-semibold">
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}