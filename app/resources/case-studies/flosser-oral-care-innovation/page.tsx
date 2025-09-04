import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Download, Share2, Calendar, MapPin, Users, Target, TrendingUp, BarChart3, CheckCircle, Building, DollarSign, Droplet } from 'lucide-react'
import Link from 'next/link'

export default function FreshHealthOralCareCase() {
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
            <span className="text-proof-gray-600">Flosser Oral Care Innovation</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-proof-blue-50 to-proof-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources/case-studies" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-proof-green-100 text-proof-green-700">Healthcare</Badge>
                <Badge className="bg-proof-blue-100 text-proof-blue-700">Concept Testing</Badge>
                <Badge className="bg-proof-blue-100 text-proof-blue-700">Conjoint Analysis</Badge>
                <Badge className="bg-proof-gray-100 text-proof-gray-700">Startup Innovation</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-proof-gray-900 mb-6" data-macaly="case-study-title">
                Flosser Oral Care Innovation
              </h1>
              
              <p className="text-xl text-proof-gray-600 leading-relaxed mb-8" data-macaly="case-study-subtitle">
                How a pioneering oral care startup validated a revolutionary 7-second water-jet flosser concept, optimized positioning and pricing, and secured funding through comprehensive concept testing and conjoint analysis.
              </p>
              
              <div className="flex gap-4">
                <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Study
                </Button>
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
                    <span className="text-proof-gray-600">Duration: 8 weeks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Market: United States</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Sample: 1,200 consumers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Age: 25-64 years</span>
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
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-green-50 border-0">
              <TrendingUp className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">50%+</div>
              <div className="text-proof-gray-600">Purchase Interest Across Concepts</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <Droplet className="h-12 w-12 text-proof-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-green-600 mb-2">47%</div>
              <div className="text-proof-gray-600">Price Importance in Decision</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-green-50 border-0">
              <Target className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">4</div>
              <div className="text-proof-gray-600">Positioning Concepts Tested</div>
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
                A pioneering oral care startup sought to introduce a new category of home oral hygiene system: an ultra-fast, custom-fit, water-jet-powered flosser designed to improve convenience, compliance, and oral health.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Assess market interest for innovative oral care system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Validate product's value proposition and positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Determine optimal pricing strategy for advanced system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Support successful product launch and investment efforts</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6502344/pexels-photo-6502344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Modern dental care equipment showcasing innovation in oral health technology"
                className="rounded-lg shadow-lg w-full"
                data-macaly="challenge-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Research Approach</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Concept Testing & Conjoint Analysis</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                PROOF Insights partnered with Fresh Health to conduct a robust online quantitative study targeting U.S. consumers aged 25-64 with specific income requirements, using split-cell monadic concept testing and Adaptive Choice-Based Conjoint analysis.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Split-Cell Monadic Design</h4>
                    <p className="text-proof-gray-600">Four unique positioning statements tested across consumer segments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Adaptive Choice-Based Conjoint (ACBC)</h4>
                    <p className="text-proof-gray-600">Captured preferences across features, pricing, and purchase conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Large Sample Size</h4>
                    <p className="text-proof-gray-600">1,200 qualified respondents for robust statistical analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Multiple Positioning Tests</h4>
                    <p className="text-proof-gray-600">7-second pro-flosser, easiest flosser, oral health system, dentist-endorsed concepts</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Research team analyzing consumer survey data and charts"
                className="rounded-lg shadow-lg w-full mb-6"
                data-macaly="approach-image"
              />
              
              <div className="bg-gradient-to-br from-proof-blue-50 to-proof-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Positioning Concepts Tested</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-proof-blue-600 text-sm">A 7-second pro-flosser</h4>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-proof-green-600 text-sm">The world's easiest flosser</h4>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-proof-blue-600 text-sm">An oral health improvement system</h4>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-proof-green-600 text-sm">A dentist-endorsed pro-flosser</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Key Findings</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Market Appeal & Positioning</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">50%+ purchase interest across all positioning cells before pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">'From your dentist' and 'oral health system' framings performed best</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">'7-second' feature highly motivating across all groups</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">'Oral health system' and 'easy to use' had greater resonance than 'pro flosser'</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Price Sensitivity & Barriers</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Interest decreased by 50%+ when higher price point introduced</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Optimal price point identified below tested range</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">High price was most cited purchase concern</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-gray-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Secondary concerns: efficacy skepticism and brand unfamiliarity</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-proof-blue-50 to-proof-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6 text-center">Conjoint Analysis Insights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <BarChart3 className="h-10 w-10 text-proof-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-proof-blue-600 mb-2">47%</div>
                <div className="text-proof-gray-600">Price importance as dominant driver</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <Target className="h-10 w-10 text-proof-green-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-proof-green-600 mb-2">Top 4</div>
                <div className="text-proof-gray-600">Decision drivers: 7-second flossing, health improvement, 360° cleaning, bacteria removal</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <CheckCircle className="h-10 w-10 text-proof-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-proof-blue-600 mb-2">Winning</div>
                <div className="text-proof-gray-600">Configuration: dentist endorsement, recommendations, ADA seal, retail availability, money-back guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Impact & Outcomes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Strategic Implementation</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600"><strong>Refined Positioning:</strong> Emphasized quick, easy, and clinically effective cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600"><strong>Validated Pricing:</strong> Adopted optimal price range with financing options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600"><strong>Product Development:</strong> Guided feature prioritization and customization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600"><strong>Investor Support:</strong> Data validated business potential for funding</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Business Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-proof-gray-600">Market Positioning</span>
                  <span className="font-semibold text-proof-green-600">Optimized ↑</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-proof-gray-600">Pricing Strategy</span>
                  <span className="font-semibold text-proof-green-600">Data-Driven ↑</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-proof-gray-600">Feature Development</span>
                  <span className="font-semibold text-proof-green-600">Prioritized ↑</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-proof-gray-600">Investment Readiness</span>
                  <span className="font-semibold text-proof-green-600">Validated ↑</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-proof-gray-600">Market Disruption Potential</span>
                  <span className="font-semibold text-proof-green-600">High ↑</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Results */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Conclusion</h2>
            <p className="text-xl text-proof-gray-600 max-w-4xl mx-auto leading-relaxed">
              By testing multiple concept positions and using conjoint modeling, PROOF Insights enabled Fresh Health to make data-backed decisions in a fast-evolving market. With clear understanding of what drives purchase intent, Fresh Health is poised to disrupt traditional oral care and offer a compelling alternative to string flossing and basic water flossers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <Building className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Market Entry Strategy</h3>
              <p className="text-proof-gray-600">Clear roadmap for successful product launch with validated positioning and pricing</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <TrendingUp className="h-12 w-12 text-proof-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Competitive Advantage</h3>
              <p className="text-proof-gray-600">Differentiated value proposition focusing on speed, efficacy, and convenience</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <DollarSign className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Investment Ready</h3>
              <p className="text-proof-gray-600">Research data supporting business case for additional funding rounds</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-proof-blue-600 to-proof-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Validate Your Healthcare Innovation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how concept testing and conjoint analysis can help you optimize positioning, validate pricing, and accelerate market entry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold" asChild>
              <Link href="/contact">
                Schedule Consultation
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 font-semibold" asChild>
              <Link href="/resources/case-studies">
                View More Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}