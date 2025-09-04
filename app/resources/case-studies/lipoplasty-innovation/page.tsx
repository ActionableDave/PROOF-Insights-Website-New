import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Download, Share2, Calendar, MapPin, Users, Target, TrendingUp, BarChart3, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function LipoplastyInnovationCase() {
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
            <span className="text-proof-gray-600">Suction-Assisted Lipoplasty Innovation</span>
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
                <Badge className="bg-proof-gray-100 text-proof-gray-700">Medical Device Innovation</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-proof-gray-900 mb-6">
                Revisioning Suction-Assisted Lipoplasty: Medical Device Innovation
              </h1>
              
              <p className="text-xl text-proof-gray-600 leading-relaxed mb-8">
                How a medical device innovator validated their revolutionary lipoplasty system using advanced ACBC conjoint analysis and focus groups, proving concept efficacy and establishing performance benchmarks for market launch.
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
                    <span className="text-proof-gray-600">Duration: 16 weeks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Markets: New York & Los Angeles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Sample: 208 US Plastic Surgeons</span>
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
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">95%</div>
              <div className="text-proof-gray-600">Concept Validation Rate</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <BarChart3 className="h-12 w-12 text-proof-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-purple-600 mb-2">4</div>
              <div className="text-proof-gray-600">Key Benefit Drivers Identified</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Target className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">100%</div>
              <div className="text-proof-gray-600">Market Entry Readiness</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">The Existing Market Challenge</h2>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                Proof Insight's client had developed an important innovation in Suction-Assisted Lipoplasty (SAL). Traditional liposuction required sharp-edged suction tips, significant energy expenditure, and provided little regard for fat cell integrity - limiting opportunities for natural filler-based applications.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Sharp cannula tips causing trauma to surrounding tissue</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">High energy expenditure required from surgeons</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Damaged fat cells unsuitable for filler applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Skeptical profession resistant to new innovations</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <img 
                src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/jc4SoLMBvCtnIhB7ZvwQm/actionable-research-case-study-reinvisioning-suction-assisted-lipoplasty-9-9-19-updated-page-1.jpg?ver=2" 
                alt="Medical procedure innovation" 
                className="w-full h-64 object-cover rounded-lg"
                data-macaly="lipoplasty-hero-image"
              />
              <h3 className="text-xl font-semibold text-proof-gray-900 mt-4 mb-2">Revolutionary Approach</h3>
              <p className="text-proof-gray-600">Blunt cannula tip with warm water stream for gentler, more effective fat removal while preserving cell integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Details */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Product Innovation</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">A Product with Real Advantages</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                The revolutionary system uses a blunt cannula tip with a small opening at the side near the tip. A stream of warm water under pressure is ejected into the opening at the end of the cannula, disaggregating fat as it's drawn through vacuum.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Reduced Trauma</h4>
                    <p className="text-proof-gray-600">Substantially reduces trauma to surrounding tissue during procedures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Energy Efficiency</h4>
                    <p className="text-proof-gray-600">Significantly reduces physical effort required from plastic surgeons</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Cell Integrity</h4>
                    <p className="text-proof-gray-600">Preserves fat cell integrity for subsequent filler-based applications</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Research Questions</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Market Adoption Factors</h4>
                  <p className="text-sm text-proof-gray-600">What drives plastic surgeons to adopt new lipoplasty innovations?</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Cost-Benefit Analysis</h4>
                  <p className="text-sm text-proof-gray-600">How do capital equipment and consumable costs influence decision-making?</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Feature Prioritization</h4>
                  <p className="text-sm text-proof-gray-600">Which product benefits resonate most with target segments?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Research Methodology</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Focus Groups in New York & Los Angeles</h3>
              <div className="mb-4">
                <img 
                  src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/Qg1k9F3HAlgDBV7EZ659j/actionable-research-case-study-reinvisioning-suction-assisted-lipoplasty-9-9-19-updated-page-3.jpg?ver=2" 
                  alt="Focus group research" 
                  className="w-full h-32 object-cover rounded-lg"
                  data-macaly="focus-group-image"
                />
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Recruited plastic surgeons from major metropolitan markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Transcribed audio and video for comprehensive analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Captured complete view of motivations and concerns</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">ACBC Conjoint Survey Validation</h3>
              <div className="mb-4">
                <img 
                  src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/TipmYhNaXDLPXGDVZ3bpZ/actionable-research-case-study-reinvisioning-suction-assisted-lipoplasty-9-9-19-updated-page-4.jpg?ver=2" 
                  alt="Medical device research" 
                  className="w-full h-32 object-cover rounded-lg"
                  data-macaly="acbc-survey-image"
                />
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">208 completed responses over 2-week period</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Statistical validation of qualitative insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Performance claims analysis across multiple attributes</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Essential Research Findings</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Evaluating Capital Equipment & Consumable Costs</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                One of the most important features of this research was the ability to evaluate the overall capital cost of the system separately from the consumable cost, allowing both parameters to be varied independently through ACBC analysis.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-proof-blue-50 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Fat Cell Viability Benefits</h4>
                  <p className="text-proof-gray-600">Resonated with identified segments of surgeons performing filler procedures</p>
                </div>
                <div className="p-4 bg-proof-purple-50 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">System Cost Boundaries</h4>
                  <p className="text-proof-gray-600">Overall system cost established hard boundaries for market acceptance</p>
                </div>
                <div className="p-4 bg-proof-blue-50 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Physical Exertion Reduction</h4>
                  <p className="text-proof-gray-600">Significant driver for certain surgeon segments performing high-volume procedures</p>
                </div>
                <div className="p-4 bg-proof-purple-50 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Aesthetic Result Quality</h4>
                  <p className="text-proof-gray-600">Certain aesthetic outcome qualities were significant adoption drivers</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">A Skeptical Profession Evaluates Innovation</h3>
              <div className="mb-6">
                <img 
                  src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/XDRwl0PJKigzM1bXh5qMK/actionable-research-case-study-reinvisioning-suction-assisted-lipoplasty-9-9-19-updated-page-2.jpg?ver=2" 
                  alt="Medical device evaluation" 
                  className="w-full h-40 object-cover rounded-lg"
                  data-macaly="device-evaluation-image"
                />
              </div>
              <p className="text-proof-gray-600 mb-4">
                Plastic surgeons had heard many promises from companies delivering new lipoplasty systems, with many past innovations failing to meet expectations and change usage habits.
              </p>
              <p className="text-proof-gray-600">
                The research provided critical insight into what would cause surgeons to change their product choice and inspire regular use, identifying the most believable claims and cost model viability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Successful Engagement Results</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-proof-green-50 to-proof-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Research Outcomes</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Concept Validation</span>
                  <span className="font-semibold text-proof-green-600">Proven Efficacious</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Performance Levels</span>
                  <span className="font-semibold text-proof-green-600">Benchmarks Set</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Value Proposition</span>
                  <span className="font-semibold text-proof-green-600">Core Themes Defined</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Target Audience</span>
                  <span className="font-semibold text-proof-green-600">Key Segments Identified</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Strategic Value Delivered</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                Through the combination of Proof Insight's experience in aesthetic surgery research and ACBC conjoint analysis expertise, the company was able to set performance levels for product development, formulate major themes for core value proposition, and address key audience segments most likely to appreciate the innovation.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Established clear product development targets</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Formulated compelling value proposition themes</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Identified high-potential target segments</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Validated market readiness for launch</span>
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
            Discover how ACBC conjoint analysis and targeted research can prove your concept's efficacy and establish market readiness.
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