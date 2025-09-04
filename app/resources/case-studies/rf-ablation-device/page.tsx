import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Download, Share2, Calendar, MapPin, Users, Target, TrendingUp, BarChart3, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function RFAblationDeviceCase() {
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
            <span className="text-proof-gray-600">RF Ablation Device Capabilities</span>
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
                <Badge className="bg-proof-blue-100 text-proof-blue-700">Healthcare</Badge>
                <Badge className="bg-proof-purple-100 text-proof-purple-700">ACBC Conjoint Analysis</Badge>
                <Badge className="bg-proof-gray-100 text-proof-gray-700">Orthopedic Surgery</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-proof-gray-900 mb-6">
                New Surgical Device Capabilities: RF Ablation Innovation
              </h1>
              
              <p className="text-xl text-proof-gray-600 leading-relaxed mb-8">
                How a medical device company validated new RF ablation capabilities for orthopedic surgeons using ACBC conjoint analysis and international focus groups, leading to confident product launch decisions across multiple markets.
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
                    <span className="text-proof-gray-600">Duration: 14 weeks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Markets: US, UK, Germany</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Focus Groups: LA & Dallas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Method: ACBC + Focus Groups</span>
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
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <TrendingUp className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">100%</div>
              <div className="text-proof-gray-600">Product Design Validation</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <BarChart3 className="h-12 w-12 text-proof-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-purple-600 mb-2">3</div>
              <div className="text-proof-gray-600">International Markets Analyzed</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Target className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">6</div>
              <div className="text-proof-gray-600">Critical Usage Questions Answered</div>
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
                A medical device company with an RF ablation product for orthopedic surgeons needed to understand market opportunities and validate new device capabilities before launch. Critical questions needed answers from actual users.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">For what orthopedic case types is RF being utilized most frequently?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">How often are surgeons utilizing RF technology?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Why do some surgeons choose alternatives to RF?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Which brands are preferred by surgeons and facilities?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">How will surgeons react to new capabilities and pricing?</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <img 
                src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/fIrXvswo9uM_8QUEf681u/rf-ablation-case-study.png" 
                alt="RF ablation surgical device" 
                className="w-full h-64 object-cover rounded-lg"
                data-macaly="rf-ablation-hero-image"
              />
              <h3 className="text-xl font-semibold text-proof-gray-900 mt-4 mb-2">Critical Market Intelligence</h3>
              <p className="text-proof-gray-600">Understanding surgeon preferences and facility requirements for successful RF ablation device adoption.</p>
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
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">ACBC Conjoint Methodology</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                To find answers to these critical questions, Proof Insights utilized a comprehensive concept test including Adaptive Choice-Based Conjoint (ACBC) analysis to understand surgeon preferences and market dynamics.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Focus Groups</h4>
                    <p className="text-proof-gray-600">Guided discussions in Los Angeles and Dallas with hands-on product experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">International Survey</h4>
                    <p className="text-proof-gray-600">ACBC surveys distributed in US, UK, and Germany for comprehensive market analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Objective Analysis</h4>
                    <p className="text-proof-gray-600">Blind study design to ensure unbiased feedback and objective results</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Multi-Phase Research Design</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Phase 1: Focus Groups</h4>
                  <p className="text-sm text-proof-gray-600">Qualitative exploration with RF-experienced surgeons in major US markets</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Phase 2: ACBC Survey</h4>
                  <p className="text-sm text-proof-gray-600">Quantitative validation across three international markets</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Phase 3: Analysis</h4>
                  <p className="text-sm text-proof-gray-600">Cross-market comparison and strategic recommendations</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Methodology Details */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Research Implementation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Focus Group Testing</h3>
              <p className="text-proof-gray-600 mb-4">
                Concept testing was conducted through focus groups held in Los Angeles and Dallas. The focus groups consisted of guided discussion and allowed surgeons hands-on experience to test the product and its new capabilities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Participants screened for RF ablation experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Hands-on product testing and capability assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Discussion guide developed jointly with client</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Blind study design for objective responses</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">ACBC Survey Implementation</h3>
              <p className="text-proof-gray-600 mb-4">
                Following focus group testing, Proof Insights developed a survey implementing ACBC methodology. The methodology allowed respondents to configure an optimal system design from attributes being considered for the proposed product.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Optimal system configuration testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Current and competitive product attributes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Price sensitivity and likelihood of purchase analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Brand preferences and facility decision factors</span>
                </li>
              </ul>
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
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Validated Product Concepts</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                The company was pleased with the study results and gained confidence in moving forward with product launch. The survey validated their product designs and provided critical insights into surgeon preferences across international markets.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-proof-green-50 rounded-lg">
                  <h4 className="font-semibold text-proof-green-600 mb-2">Product Design Validation</h4>
                  <p className="text-proof-gray-600">New capabilities resonated strongly with target surgeon segments</p>
                </div>
                <div className="p-4 bg-proof-blue-50 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Usage Pattern Insights</h4>
                  <p className="text-proof-gray-600">Clear understanding of when, how, and why RF ablation is utilized</p>
                </div>
                <div className="p-4 bg-proof-purple-50 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Competitive Intelligence</h4>
                  <p className="text-proof-gray-600">Comprehensive analysis of brand preferences and alternatives</p>
                </div>
                <div className="p-4 bg-proof-green-50 rounded-lg">
                  <h4 className="font-semibold text-proof-green-600 mb-2">Pricing Strategy</h4>
                  <p className="text-proof-gray-600">Optimal pricing ranges validated across US, UK, and Germany</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">International Market Analysis</h3>
              <p className="text-proof-gray-600 mb-6">
                Surveys were distributed in the United States, United Kingdom, and Germany. Proof Insights analyzed all respondent data and presented results with breakdown showing key differences and similarities in country responses.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-proof-gray-900">United States</span>
                    <span className="text-proof-blue-600">Primary Market</span>
                  </div>
                  <p className="text-sm text-proof-gray-600">Highest adoption rates and feature preferences</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-proof-gray-900">United Kingdom</span>
                    <span className="text-proof-purple-600">Cost-Sensitive</span>
                  </div>
                  <p className="text-sm text-proof-gray-600">Value-focused decision making with NHS considerations</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-proof-gray-900">Germany</span>
                    <span className="text-proof-blue-600">Technology-Forward</span>
                  </div>
                  <p className="text-sm text-proof-gray-600">Advanced feature adoption and premium positioning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Value */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Research Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-proof-green-50 to-proof-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Strategic Outcomes</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Market Readiness</span>
                  <span className="font-semibold text-proof-green-600">Confirmed Ready</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Product Validation</span>
                  <span className="font-semibold text-proof-green-600">Design Approved</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Pricing Strategy</span>
                  <span className="font-semibold text-proof-green-600">Optimized by Market</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Launch Confidence</span>
                  <span className="font-semibold text-proof-green-600">High Confidence</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Proof Insights Experience</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                Proof Insights can provide similar assistance for your company as well. Our research methods are specialized within our markets, with all projects using customized approaches depending on client needs.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Nearly 20 years of medical device research experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Specialized methods for medical and dental markets</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Customized approaches for each client's unique needs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">International market research capabilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Validate Your Medical Device Innovation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how ACBC conjoint analysis and international research can validate your device capabilities and optimize your go-to-market strategy.
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