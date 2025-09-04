import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Download, Share2, Calendar, MapPin, Users, Target, TrendingUp, BarChart3, CheckCircle, Building, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function FintechProductTestingCase() {
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
            <span className="text-proof-gray-600">FinTech Product Testing</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-proof-purple-50 to-proof-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources/case-studies" className="inline-flex items-center text-proof-purple-600 hover:text-proof-blue-700 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-proof-blue-100 text-proof-blue-700">Financial Services</Badge>
                <Badge className="bg-proof-blue-100 text-proof-blue-700">MaxDiff Analysis</Badge>
                <Badge className="bg-proof-gray-100 text-proof-gray-700">Product Validation</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-proof-gray-900 mb-6">
                FinTech Product Concept Validation
              </h1>
              
              <p className="text-xl text-proof-gray-600 leading-relaxed mb-8">
                How a fintech startup validated their product concept and identified optimal features before launch using MaxDiff Analysis, showing potential savings of $1.2M in development costs while achieving 85% concept validation.
              </p>
              
              <div className="flex gap-4">
                <Button className="bg-proof-purple-600 hover:bg-proof-blue-700 text-white">
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
                    <span className="text-proof-gray-600">Duration: 14 weeks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-proof-purple-600" />
                    <span className="text-proof-gray-600">Market: US & Canada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-proof-purple-600" />
                    <span className="text-proof-gray-600">Sample: Business owners</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-proof-purple-600" />
                    <span className="text-proof-gray-600">Features: 18 tested</span>
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
              <div className="text-3xl font-bold text-proof-purple-600 mb-2">$1.2M</div>
              <div className="text-proof-gray-600">Development Cost Savings</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CheckCircle className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">85%</div>
              <div className="text-proof-gray-600">Concept Validation Rate</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <Target className="h-12 w-12 text-proof-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-purple-600 mb-2">4</div>
              <div className="text-proof-gray-600">Priority Features Identified</div>
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
                A fintech startup had developed an innovative business banking platform concept but needed to validate market demand and prioritize features before committing to full development.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Limited funding required strategic feature prioritization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Uncertain market demand for specific features</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Risk of building unwanted functionality</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Competitive pressure from established players</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Pre-Validation Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Market Validation</span>
                  <span className="font-semibold text-proof-red-600">Unconfirmed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Feature Priority</span>
                  <span className="font-semibold text-proof-red-600">Unclear</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Development Budget</span>
                  <span className="font-semibold text-proof-red-600">$3.5M at risk</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Time to Market</span>
                  <span className="font-semibold text-proof-red-600">18 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">MaxDiff Analysis Solution</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Feature Prioritization Research</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                We employed MaxDiff Analysis to understand which features business owners valued most, creating a clear roadmap for MVP development and future enhancements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Comprehensive Feature Testing</h4>
                    <p className="text-proof-gray-600">Evaluated 18 potential features across 6 core categories</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Market Segmentation</h4>
                    <p className="text-proof-gray-600">Identified different preferences by business size and industry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Willingness to Pay Analysis</h4>
                    <p className="text-proof-gray-600">Quantified feature value and optimal pricing strategy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Competitive Differentiation</h4>
                    <p className="text-proof-gray-600">Identified unique value propositions vs. competitors</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-purple-50 to-proof-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Priority Feature Rankings</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">1. Real-time Cash Flow Tracking</h4>
                  <p className="text-sm text-proof-gray-600">Importance Score: 94/100 • High willingness to pay</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">2. Automated Invoice Management</h4>
                  <p className="text-sm text-proof-gray-600">Importance Score: 87/100 • Strong differentiation</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">3. Tax Compliance Automation</h4>
                  <p className="text-sm text-proof-gray-600">Importance Score: 82/100 • Unique market position</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">4. Predictive Financial Analytics</h4>
                  <p className="text-sm text-proof-gray-600">Importance Score: 76/100 • Premium feature potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Strategic Implementation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">MVP Development Strategy</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Focused on top 4 priority features for MVP</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Eliminated 14 lower-priority features from initial build</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Created clear roadmap for future feature releases</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Reduced initial development timeline by 8 months</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Go-to-Market Optimization</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Developed feature-based messaging hierarchy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Segmented target markets by feature preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Optimized pricing strategy based on feature value</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Prepared data-driven investor presentations</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Post-Launch Results</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-proof-green-50 to-proof-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">12-Month Outcomes</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Development Cost Savings</span>
                  <span className="font-semibold text-proof-green-600">$1.2M ↓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Time to Market</span>
                  <span className="font-semibold text-proof-green-600">10 months ↓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Customer Adoption Rate</span>
                  <span className="font-semibold text-proof-green-600">78% ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Feature Utilization</span>
                  <span className="font-semibold text-proof-green-600">85% ↑</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-blue-50 to-proof-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Business Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Series A Funding</span>
                  <span className="font-semibold text-proof-green-600">$5.2M ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Customer Acquisition Cost</span>
                  <span className="font-semibold text-proof-green-600">45% ↓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Product-Market Fit Score</span>
                  <span className="font-semibold text-proof-green-600">8.4/10 ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Team Confidence</span>
                  <span className="font-semibold text-proof-green-600">High ↑</span>
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
            Ready to Validate Your Product Concept?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Discover how MaxDiff Analysis can help you prioritize features, reduce development risk, and accelerate time to market.
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