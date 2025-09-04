import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Download, Share2, Calendar, MapPin, Users, Target, TrendingUp, BarChart3, CheckCircle, Stethoscope, Heart } from 'lucide-react'
import Link from 'next/link'

export default function HealthcareMessagingOptimizationCase() {
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
            <span className="text-proof-gray-600">Healthcare Messaging Optimization</span>
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
                <Badge className="bg-proof-blue-100 text-proof-purple-700">Healthcare</Badge>
                <Badge className="bg-proof-blue-100 text-proof-blue-700">Discrete Choice Modeling</Badge>
                <Badge className="bg-proof-gray-100 text-proof-gray-700">Message Optimization</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-proof-gray-900 mb-6">
                Healthcare Marketing Message Optimization
              </h1>
              
              <p className="text-xl text-proof-gray-600 leading-relaxed mb-8">
                How a healthcare organization optimized their patient communication strategy using Discrete Choice Modeling, achieving a 45% increase in patient engagement and 32% improvement in treatment adherence while reducing communication costs by 18%.
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
                    <span className="text-proof-gray-600">Duration: 18 weeks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-proof-purple-600" />
                    <span className="text-proof-gray-600">Market: Multi-regional US</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-proof-purple-600" />
                    <span className="text-proof-gray-600">Sample: 2,100 patients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-proof-purple-600" />
                    <span className="text-proof-gray-600">Messages: 24 variations tested</span>
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
              <TrendingUp className="h-12 w-12 text-proof-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-purple-600 mb-2">45%</div>
              <div className="text-proof-gray-600">Patient Engagement Increase</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Heart className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">32%</div>
              <div className="text-proof-gray-600">Treatment Adherence Boost</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <BarChart3 className="h-12 w-12 text-proof-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-purple-600 mb-2">18%</div>
              <div className="text-proof-gray-600">Cost Reduction</div>
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
                A large healthcare organization was struggling with low patient engagement and poor treatment adherence, leading to suboptimal health outcomes and increased costs across their patient population.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Low patient engagement with health communications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Poor medication and treatment adherence rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Generic messaging not resonating with diverse patients</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-red-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Rising communication costs with limited effectiveness</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Pre-Optimization Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Patient Engagement Rate</span>
                  <span className="font-semibold text-proof-red-600">23%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Treatment Adherence</span>
                  <span className="font-semibold text-proof-red-600">58%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Message Response Rate</span>
                  <span className="font-semibold text-proof-red-600">8.4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Patient Satisfaction</span>
                  <span className="font-semibold text-proof-red-600">6.7/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Discrete Choice Modeling Approach</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Message Optimization Research</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                We applied Discrete Choice Modeling to understand patient preferences for different communication approaches, channels, timing, and messaging styles to optimize engagement and adherence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Message Content Analysis</h4>
                    <p className="text-proof-gray-600">Tested 24 message variations across tone, urgency, and format</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Channel Preference Mapping</h4>
                    <p className="text-proof-gray-600">Analyzed preferences across SMS, email, phone, and portal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Timing Optimization</h4>
                    <p className="text-proof-gray-600">Determined optimal frequency and timing for communications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Patient Segmentation</h4>
                    <p className="text-proof-gray-600">Identified communication preferences by demographics and conditions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-purple-50 to-proof-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Optimal Message Framework</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Empathetic & Personal</h4>
                  <p className="text-sm text-proof-gray-600">Messages acknowledging individual patient journey and challenges</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Action-Oriented</h4>
                  <p className="text-sm text-proof-gray-600">Clear, specific next steps with deadline urgency</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Benefit-Focused</h4>
                  <p className="text-sm text-proof-gray-600">Emphasis on positive health outcomes and quality of life</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Multi-Channel Coordinated</h4>
                  <p className="text-sm text-proof-gray-600">Consistent messaging across patient's preferred channels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Communication Strategy Implementation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Personalized Messaging System</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Developed patient preference profiles in CRM</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Created automated message customization engine</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Implemented dynamic channel selection algorithm</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Integrated with electronic health records</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Campaign Optimization Process</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">A/B tested optimal message combinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Implemented real-time engagement tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Created feedback loop for message refinement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Trained care teams on new communication protocols</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">12-Month Health Outcomes</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-proof-green-50 to-proof-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Performance Improvements</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Patient Engagement Rate</span>
                  <span className="font-semibold text-proof-green-600">68% ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Treatment Adherence</span>
                  <span className="font-semibold text-proof-green-600">90% ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Message Response Rate</span>
                  <span className="font-semibold text-proof-green-600">24.3% ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Patient Satisfaction</span>
                  <span className="font-semibold text-proof-green-600">8.9/10 ↑</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Client Testimonial</h3>
              <blockquote className="text-lg text-proof-gray-600 italic mb-6 leading-relaxed">
                "The message optimization transformed our patient relationships. We're no longer sending generic communications - each patient receives personalized messages that resonate with their specific needs and preferences. The improvement in adherence has been remarkable."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-proof-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-proof-purple-600 font-semibold text-lg">DM</span>
                </div>
                <div>
                  <div className="font-semibold text-proof-gray-900">Dr. Maria Santos</div>
                  <div className="text-proof-gray-600">Chief Medical Officer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Health Impact Metrics</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: 'Hospital Readmissions', change: '22% ↓', icon: Stethoscope },
              { metric: 'Emergency Visits', change: '28% ↓', icon: Heart },
              { metric: 'Preventive Care Completion', change: '41% ↑', icon: CheckCircle },
              { metric: 'Patient Health Scores', change: '18% ↑', icon: TrendingUp }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="p-6 bg-white text-center border-2 border-proof-gray-200 hover:border-proof-purple-300 transition-colors">
                  <IconComponent className="h-10 w-10 text-proof-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">{item.metric}</h3>
                  <p className="text-2xl font-bold text-proof-green-600">{item.change}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-proof-purple-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Patient Communications?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Discover how Discrete Choice Modeling can help you create personalized, effective health communications that improve patient engagement and outcomes.
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