import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, BookOpen, Brain, Download, Calendar, Clock, Users, FileText, CheckCircle, Eye, Target } from 'lucide-react'
import Link from 'next/link'

export default function BehavioralEconomicsResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-orange-50 to-proof-purple-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/resources/white-papers-ebooks" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Link>
          </div>
          
          <div className="text-center">
            <Badge className="mb-4 bg-proof-orange-100 text-proof-orange-700">Featured eBook</Badge>
            <h1 className="text-4xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
              Behavioral Economics in Consumer Research
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="hero-description">
              Understanding cognitive biases, choice architecture, and psychological drivers to design better research and interpret results more accurately.
            </p>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-proof-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>October 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>22 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>38 pages</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>1,600+ downloads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* eBook Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-orange-50 to-purple-50 border-0 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <Brain className="h-8 w-8 text-proof-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-proof-gray-900 mb-4">Why Behavioral Economics Matters</h2>
                <p className="text-proof-gray-700 leading-relaxed mb-4">
                  Traditional market research assumes rational decision-making, but decades of behavioral research show that consumers are predictably irrational. Understanding these patterns is crucial for generating actionable insights.
                </p>
                <p className="text-proof-gray-700 leading-relaxed">
                  This comprehensive guide demonstrates how integrating behavioral economics principles into research design and analysis can improve insight quality by up to 50% while reducing respondent bias and increasing predictive accuracy.
                </p>
              </div>
            </div>
          </Card>

          {/* Chapter Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-8">Chapter Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-proof-orange-200">
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-4">Part I: Foundations (Chapters 1-4)</h3>
                <ul className="space-y-2 text-proof-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Introduction to Behavioral Economics</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Key Cognitive Biases in Research</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Decision-Making Frameworks</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Research Design Implications</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-proof-purple-200">
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-4">Part II: Applications (Chapters 5-8)</h3>
                <ul className="space-y-2 text-proof-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Choice Architecture in Surveys</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Pricing Psychology</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Brand Perception Biases</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Advanced Nudging Techniques</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Key Concepts Preview */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Key Concepts Preview</h2>
              <div className="prose prose-lg text-proof-gray-700 max-w-none">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">The Three-System Model of Decision Making</h3>
                <p className="mb-6">
                  Consumer decisions operate through three interconnected systems: automatic (instinctive), reflective (analytical), and social (influenced by others). Understanding how these systems interact helps researchers design more effective studies and interpret results more accurately.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <Card className="p-4 border-2 border-proof-orange-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Eye className="h-5 w-5 text-proof-orange-600" />
                      <h4 className="font-semibold text-proof-gray-900">Automatic System</h4>
                    </div>
                    <ul className="text-sm text-proof-gray-700">
                      <li>• Fast, intuitive responses</li>
                      <li>• Emotion-driven decisions</li>
                      <li>• Susceptible to framing effects</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4 border-2 border-proof-purple-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="h-5 w-5 text-proof-purple-600" />
                      <h4 className="font-semibold text-proof-gray-900">Reflective System</h4>
                    </div>
                    <ul className="text-sm text-proof-gray-700">
                      <li>• Deliberate analysis</li>
                      <li>• Logic-based evaluation</li>
                      <li>• Resource-intensive processing</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4 border-2 border-proof-blue-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-5 w-5 text-proof-blue-600" />
                      <h4 className="font-semibold text-proof-gray-900">Social System</h4>
                    </div>
                    <ul className="text-sm text-proof-gray-700">
                      <li>• Peer influence effects</li>
                      <li>• Social proof mechanisms</li>
                      <li>• Cultural context factors</li>
                    </ul>
                  </Card>
                </div>
                
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Practical Implementation Framework</h3>
                <p className="mb-6">
                  The guide provides a systematic 8-step framework for integrating behavioral insights into research design, from initial planning through final analysis and reporting. This approach has been validated across 150+ studies with consistent improvements in insight quality and business impact.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Featured Case Studies</h2>
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-proof-orange-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Subscription Service Pricing Optimization</h4>
                  <p className="text-proof-gray-700 mb-3">Applied loss aversion and anchoring principles to optimize pricing tiers and reduce churn rates.</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div><strong>Challenge:</strong> High churn rates despite competitive pricing</div>
                    <div><strong>Approach:</strong> Behavioral pricing psychology integration</div>
                    <div><strong>Result:</strong> 35% churn reduction, $1.8M revenue increase</div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-proof-purple-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Consumer Goods Brand Positioning</h4>
                  <p className="text-proof-gray-700 mb-3">Used availability heuristic and social proof to reposition brand in competitive market.</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div><strong>Challenge:</strong> Low brand salience in crowded category</div>
                    <div><strong>Approach:</strong> Cognitive accessibility optimization</div>
                    <div><strong>Result:</strong> 60% increase in aided awareness, 25% market share growth</div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-proof-blue-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Healthcare Decision Support Tool</h4>
                  <p className="text-proof-gray-700 mb-3">Applied choice architecture principles to improve patient treatment adherence.</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div><strong>Challenge:</strong> Low treatment compliance rates</div>
                    <div><strong>Approach:</strong> Behavioral nudge implementation</div>
                    <div><strong>Result:</strong> 45% improvement in adherence, better health outcomes</div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Tools & Templates</h2>
              <Card className="p-6 bg-proof-gray-50 border-0">
                <p className="text-proof-gray-700 mb-6">The eBook includes 12+ practical tools and templates:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Research Design Tools:</h4>
                    <ul className="text-sm text-proof-gray-700 space-y-1">
                      <li>• Bias identification checklist</li>
                      <li>• Survey design framework</li>
                      <li>• Question framing guidelines</li>
                      <li>• Choice architecture templates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Analysis Templates:</h4>
                    <ul className="text-sm text-proof-gray-700 space-y-1">
                      <li>• Behavioral pattern detection</li>
                      <li>• Bias correction methods</li>
                      <li>• Insight validation frameworks</li>
                      <li>• Stakeholder communication guides</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Impact Metrics</h2>
              <Card className="p-6 bg-proof-gray-50 border-0">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-proof-orange-600 mb-2">50%</div>
                    <div className="text-sm font-semibold text-proof-gray-900 mb-1">Insight Quality</div>
                    <p className="text-xs text-proof-gray-600">improvement average</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-proof-purple-600 mb-2">35%</div>
                    <div className="text-sm font-semibold text-proof-gray-900 mb-1">Bias Reduction</div>
                    <p className="text-xs text-proof-gray-600">in response patterns</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-proof-blue-600 mb-2">60%</div>
                    <div className="text-sm font-semibold text-proof-gray-900 mb-1">Prediction Accuracy</div>
                    <p className="text-xs text-proof-gray-600">for behavior outcomes</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-proof-green-600 mb-2">25%</div>
                    <div className="text-sm font-semibold text-proof-gray-900 mb-1">Time Savings</div>
                    <p className="text-xs text-proof-gray-600">in analysis phase</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-proof-orange-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transform Your Research with Behavioral Insights
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Download the complete 38-page guide including case studies, practical tools, and implementation frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-orange-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold">
              <Download className="mr-2 h-5 w-5" />
              Download Free eBook
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-orange-600 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">
                Discuss Behavioral Integration
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-orange-100">
            Free access • No registration required • 38 pages • Tools & templates included
          </div>
        </div>
      </section>
    </div>
  )
}