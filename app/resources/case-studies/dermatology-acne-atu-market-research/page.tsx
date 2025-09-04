import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Download, Share2, Calendar, MapPin, Users, Target, TrendingUp, BarChart3, CheckCircle, Stethoscope, Heart } from 'lucide-react'
import Link from 'next/link'

export default function DermatologyAcneATUCase() {
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
            <span className="text-proof-gray-600">Dermatology Acne ATU Market Research</span>
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
                <Badge className="bg-proof-blue-100 text-proof-blue-700">Healthcare</Badge>
                <Badge className="bg-proof-green-100 text-proof-green-700">Awareness/Usage</Badge>
                <Badge className="bg-proof-gray-100 text-proof-gray-700">Dermatology</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-proof-gray-900 mb-6">
                Dermatology Company | Acne ATU Market Research Study
              </h1>
              
              <p className="text-xl text-proof-gray-600 leading-relaxed mb-8">
                How a household name dermatology company deepened its understanding of prescribing trends and physician preferences in the dynamic acne therapeutics market through comprehensive ATU analysis across four waves of research.
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
                    <span className="text-proof-gray-600">Duration: Wave IV Study</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Market: U.S. Dermatology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Sample: 200+ professionals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Focus: ATU metrics & trends</span>
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
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Key Findings</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-green-50 border-0">
              <TrendingUp className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">70%</div>
              <div className="text-proof-gray-600">Combination Therapy Usage</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <Heart className="h-12 w-12 text-proof-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-green-600 mb-2">11%</div>
              <div className="text-proof-gray-600">Ethnic Female Patient Increase</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-green-50 border-0">
              <BarChart3 className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">47%</div>
              <div className="text-proof-gray-600">Price Importance in Decisions</div>
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
                A household name dermatology company aimed to deepen its understanding of prescribing trends, physician preferences, and treatment patterns in the dynamic acne therapeutics market with a diverse product portfolio in a highly competitive environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Validate longitudinal trends in product usage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Benchmark awareness, trial, and usage (ATU) metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Understand prescribing patterns across patient demographics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Identify competitive positioning opportunities</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/20683630/pexels-photo-20683630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Professional dermatology treatment" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                data-macaly="dermatology-challenge-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Our Approach</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8442105/pexels-photo-8442105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Medical research laboratory" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                data-macaly="dermatology-approach-image"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Wave IV Acne ATU Study</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                PROOF Insights designed and implemented a comprehensive online quantitative study targeting U.S.-based dermatology professionals, building upon previous waves to capture both quantitative metrics and directional insights.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Comprehensive Sample</h4>
                    <p className="text-proof-gray-600">Over 200 dermatologists and nurse practitioners/physician assistants</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Case-Based Methodology</h4>
                    <p className="text-proof-gray-600">Structured scenario-based questions for realistic prescribing behavior</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Treatment Analysis</h4>
                    <p className="text-proof-gray-600">Monotherapy vs. multiple therapy diagnostics and switching behaviors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Brand Evaluation</h4>
                    <p className="text-proof-gray-600">Comprehensive brand attribute ratings and competitive analysis</p>
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
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Detailed Findings</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Prescribing Trends</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Oral antibiotics remained most commonly prescribed across all severity levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Increased adoption of Isotretinoin, Epiduo, and Aczone</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Improved compliance and patient satisfaction drove adoption</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Treatment Strategies</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">70% of acne patients treated with combination therapy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Moderate-to-severe inflammatory acne favored multi-therapy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Mild-to-moderate comedonal acne received monotherapy</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Demographic Insights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">NPs/PAs reported higher proportions of ethnic female patients</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">11% average increase in ethnic female acne patients year-over-year</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Growing diversity in patient demographics across practices</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Product Preferences</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Efficacy and tolerability remained top decision factors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Cost sensitivity and vehicle/formulation increasingly influential</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Epiduo and Duac achieved highest brand ratings overall</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact & Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Impact & Outcomes</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7581072/pexels-photo-7581072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Clinical skincare treatment" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                data-macaly="dermatology-impact-image"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Strategic Business Impact</h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-proof-blue-50 to-proof-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Product Positioning</h4>
                  <p className="text-proof-gray-600">Refined messaging for Epiduo and Aczone, highlighting compliance benefits and efficacy in ethnic skin types</p>
                </div>
                
                <div className="bg-gradient-to-br from-proof-green-50 to-proof-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-proof-green-600 mb-2">Prescriber Targeting</h4>
                  <p className="text-proof-gray-600">Increased focus on NP/PA engagement, given their growing patient volume and prescribing autonomy</p>
                </div>
                
                <div className="bg-gradient-to-br from-proof-blue-50 to-proof-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Portfolio Management</h4>
                  <p className="text-proof-gray-600">Guided ongoing investment in high-performing therapies while deprioritizing less frequently used options</p>
                </div>
                
                <div className="bg-gradient-to-br from-proof-green-50 to-proof-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-proof-green-600 mb-2">Market Segmentation</h4>
                  <p className="text-proof-gray-600">Informed culturally sensitive messaging and access strategy based on demographic prescribing patterns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conjoint Insights */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Decision Driver Analysis</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: '7-Second Flossing', importance: 'Top Driver', icon: Target },
              { metric: 'Price Sensitivity', importance: '47% Importance', icon: BarChart3 },
              { metric: 'Dentist Endorsement', importance: 'Winning Config', icon: CheckCircle },
              { metric: 'Patient Case Scenarios', importance: '7 Tested', icon: Stethoscope }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="p-6 bg-white text-center border-2 border-proof-gray-200 hover:border-proof-blue-300 transition-colors">
                  <IconComponent className="h-10 w-10 text-proof-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">{item.metric}</h3>
                  <p className="text-sm font-medium text-proof-blue-600">{item.importance}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-proof-blue-600 to-proof-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Understand Your Market Dynamics?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how comprehensive ATU studies can help you make data-backed decisions in fast-evolving healthcare markets and strengthen your competitive position.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 font-semibold">
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}