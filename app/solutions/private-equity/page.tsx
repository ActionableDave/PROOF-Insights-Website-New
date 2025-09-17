import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Search, Handshake, TrendingUp, Shield, Target, CheckCircle } from 'lucide-react'

export default function PrivateEquityPage() {
  console.log("Private Equity page rendered")

  return (
    <div className="min-h-screen bg-gradient-to-br from-proof-gray-50 to-white">
      {/* Navigation */}
      <div className="bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/solutions" 
            className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Solutions
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div 
        className="relative py-20"
        style={{
          backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/R5zp6TqgU5g1PzlC1ptPS/private-equity.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Private Equity Research
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto mb-8">
            Support your investment decisions with comprehensive market research, due diligence insights, 
            and post-acquisition strategies that maximize portfolio company value and ROI.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-proof-gray-900 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold">
              Explore PE Research Solutions
            </Button>
          </Link>
        </div>
      </div>

      {/* Sub-panels Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Specialized Private Equity Research</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From pre-investment due diligence to post-deal value creation, we provide the market intelligence 
              you need to make informed decisions and drive portfolio success.
            </p>
          </div>

          {/* Due Diligence */}
          <section id="due-diligence" className="mb-20">
            <Card className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-proof-gray-700">
              <div className="flex items-start space-x-6">
                <div className="bg-proof-gray-100 p-4 rounded-full">
                  <Search className="h-8 w-8 text-proof-gray-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-proof-gray-900 mb-4">Due Diligence Research</h3>
                  <p className="text-proof-gray-600 mb-6 leading-relaxed">
                    Comprehensive market research and commercial due diligence to validate investment opportunities, 
                    assess market potential, evaluate competitive positioning, and identify key risks and opportunities 
                    before making acquisition decisions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-proof-gray-800 mb-3">Research Areas:</h4>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-center">
                          <Search className="w-4 h-4 text-proof-gray-700 mr-3" />
                          Market Analysis and Trends
                        </li>
                        <li className="flex items-center">
                          <Search className="w-4 h-4 text-proof-gray-700 mr-3" />
                          Competitive landscape analysis
                        </li>
                        <li className="flex items-center">
                          <Search className="w-4 h-4 text-proof-gray-700 mr-3" />
                          Customer insights and base analysis
                        </li>
                        <li className="flex items-center">
                          <Search className="w-4 h-4 text-proof-gray-700 mr-3" />
                          Regulatory and Legal Risks
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-proof-gray-800 mb-3">Value Drivers:</h4>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Validate market opportunities
                        </li>
                        <li className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Assess growth potential
                        </li>
                        <li className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Identify risks early
                        </li>
                        <li className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Inform deal valuation
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-proof-gray-50 rounded-lg">
                    <h4 className="font-semibold text-proof-gray-800 mb-2">Typical Timeline: 4-8 weeks</h4>
                    <p className="text-proof-gray-600 text-sm">
                      Fast-track research designed to support your investment timeline while providing comprehensive insights.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Post-deal Alignment */}
          <section id="post-deal-alignment" className="mb-20">
            <Card className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-proof-blue-600">
              <div className="flex items-start space-x-6">
                <div className="bg-proof-blue-100 p-4 rounded-full">
                  <Handshake className="h-8 w-8 text-proof-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-proof-gray-900 mb-4">Post-Deal Alignment</h3>
                  <p className="text-proof-gray-600 mb-6 leading-relaxed">
                    We provide customer loyalty insights, brand positioning strategies, employee satisfaction assessments, and pricing optimization to maximize revenue, strengthen market presence, and ensure seamless integration for sustainable growth post-acquisition.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-proof-gray-800 mb-3">Value Creation Focus:</h4>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-center">
                          <Handshake className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Customer Satisfaction and Base Analysis
                        </li>
                        <li className="flex items-center">
                          <Handshake className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Brand Positioning Assessment
                        </li>
                        <li className="flex items-center">
                          <Handshake className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Employee Satisfaction Assessment
                        </li>
                        <li className="flex items-center">
                          <Handshake className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Pricing Analysis
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-proof-gray-800 mb-3">Value Drivers:</h4>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-center">
                          <Target className="w-4 h-4 text-proof-green-600 mr-3" />
                          Boot retention and cross-selling
                        </li>
                        <li className="flex items-center">
                          <Target className="w-4 h-4 text-proof-green-600 mr-3" />
                          MSharpen differentiation to win share
                        </li>
                        <li className="flex items-center">
                          <Target className="w-4 h-4 text-proof-green-600 mr-3" />
                          Retain talent for integration success
                        </li>
                        <li className="flex items-center">
                          <Target className="w-4 h-4 text-proof-green-600 mr-3" />
                          Optimize revenue, maximize revenue
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-proof-gray-800 mb-2">100-Day Plan Support</h4>
                    <p className="text-proof-gray-600 text-sm">
                      Immediate post-acquisition research to establish baselines, identify quick wins, and set strategic direction.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Tangible Benefits Section */}
          <section id="tangible-benefits" className="mb-20">
            <Card className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-proof-green-600">
              <div className="flex items-start space-x-6">
                <div className="bg-proof-green-100 p-4 rounded-full">
                  <TrendingUp className="h-8 w-8 text-proof-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-proof-gray-900 mb-4">Tangible Benefits for Both Buyer and Seller</h3>
                  <p className="text-proof-gray-600 mb-6 leading-relaxed">
                    Our methods and experience can deliver clear, measurable benefits on either the 
                    selling side or the buying side of most transactions:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-proof-gray-800 mb-3">Seller-Initiated Commercial Due Diligence:</h4>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-proof-green-600 mr-3" />
                          Prepares company for sale or merger
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-proof-green-600 mr-3" />
                          Anticipates and addresses buyer questions
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-proof-green-600 mr-3" />
                          Identifies and mitigates organizational risks
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-proof-green-600 mr-3" />
                          Improves transparency and readiness
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-proof-green-600 mr-3" />
                          Increases valuation and speeds up M&A process
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-proof-gray-800 mb-3">Buyer-Initiated Commercial Due Diligence:</h4>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-center">
                          <Search className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Validates investment opportunity and market potential
                        </li>
                        <li className="flex items-center">
                          <Search className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Identifies key risks and mitigation strategies
                        </li>
                        <li className="flex items-center">
                          <Search className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Supports accurate deal valuation
                        </li>
                        <li className="flex items-center">
                          <Search className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Accelerates decision-making process
                        </li>
                        <li className="flex items-center">
                          <Search className="w-4 h-4 text-proof-blue-600 mr-3" />
                          Provides post-acquisition integration insights
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-proof-gray-800 mb-2">Measurable ROI Impact</h4>
                    <p className="text-proof-gray-600 text-sm">
                      Our research consistently delivers 15-25% improvement in deal certainty and transaction speed, 
                      with clear documentation of value drivers and risk factors.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* PE Research Expertise Section */}
          <div className="bg-gradient-to-r from-proof-gray-900 to-proof-blue-900 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Private Equity Research Expertise</h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Deep experience across industries and deal stages, with a proven track record of supporting 
                successful private equity investments and value creation initiatives.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Risk Assessment</h4>
                <p className="text-blue-100 text-sm">Identify and quantify market & operational risks</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Growth Opportunities</h4>
                <p className="text-blue-100 text-sm">Uncover new revenue streams and expansion paths</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Target className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Value Creation</h4>
                <p className="text-blue-100 text-sm">Data-driven strategies to maximize portfolio returns</p>
              </div>
            </div>
          </div>

          {/* Industry Focus Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Cards removed as requested */}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-proof-gray-900 to-proof-blue-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Partner with PE Research Specialists
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Leverage our deep private equity research experience to make better investment decisions, 
              reduce risks, and maximize returns across your portfolio.
            </p>
            <Button className="bg-white text-proof-gray-900 hover:bg-proof-gray-100 px-8 py-3 font-semibold">
              Schedule a PE Research Discussion
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

