import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, BarChart3, Target, TrendingUp, Lightbulb, Download, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export default function NextGenACBCPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-purple-50 to-proof-blue-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/resources/thought-leadership" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Thought Leadership
            </Link>
          </div>
          
          <div className="text-center">
            <Badge className="mb-4 bg-proof-purple-100 text-proof-purple-700">Methodology Deep Dive</Badge>
            <h1 className="text-4xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
              Next-Generation ACBC Methods
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="hero-description">
              Revolutionary advances in Adaptive Choice-Based Conjoint methodology that deliver 60% improvement in prediction accuracy through advanced algorithms and behavioral insights.
            </p>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-proof-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Updated 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>18 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>Advanced Methodology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <BarChart3 className="h-8 w-8 text-proof-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-proof-gray-900 mb-4">Methodology Overview</h2>
                <p className="text-proof-gray-700 leading-relaxed mb-4">
                  Our next-generation ACBC methodology incorporates machine learning algorithms, behavioral economics principles, and adaptive questioning logic to create the most accurate preference modeling system available in market research today.
                </p>
                <p className="text-proof-gray-700 leading-relaxed">
                  Through 15+ years of refinement and validation across 500+ studies, we've developed proprietary enhancements that reduce respondent burden while dramatically improving predictive accuracy.
                </p>
              </div>
            </div>
          </Card>

          {/* Key Innovations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-8">Key Innovations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-proof-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-proof-purple-600" />
                  <h3 className="text-lg font-semibold text-proof-gray-900">Adaptive Algorithms</h3>
                </div>
                <ul className="space-y-2 text-proof-gray-700">
                  <li>• Real-time preference learning</li>
                  <li>• Dynamic attribute selection</li>
                  <li>• Intelligent skip logic</li>
                  <li>• Personalized questioning paths</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-proof-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-proof-blue-600" />
                  <h3 className="text-lg font-semibold text-proof-gray-900">Behavioral Integration</h3>
                </div>
                <ul className="space-y-2 text-proof-gray-700">
                  <li>• Cognitive bias detection</li>
                  <li>• Response pattern analysis</li>
                  <li>• Context effect modeling</li>
                  <li>• Preference stability metrics</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Technical Enhancements */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Technical Enhancements</h2>
              <div className="prose prose-lg text-proof-gray-700 max-w-none">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">1. Advanced Build-Your-Own (BYO) Section</h3>
                <p className="mb-6">
                  Our enhanced BYO section uses machine learning to identify the most informative attribute combinations, reducing completion time by 35% while capturing more nuanced preferences. The algorithm learns from each respondent's choices to optimize subsequent questions.
                </p>
                
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">2. Intelligent Screening Logic</h3>
                <p className="mb-6">
                  Dynamic screening algorithms eliminate unacceptable concepts more efficiently, using predictive modeling to identify likely rejections early in the process. This reduces survey length while maintaining comprehensive coverage.
                </p>
                
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">3. Enhanced Choice Tasks</h3>
                <p className="mb-6">
                  Choice tasks now incorporate real-time difficulty assessment, automatically adjusting complexity based on respondent consistency and engagement levels. This maintains data quality while reducing fatigue effects.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Validation Results</h2>
              <Card className="p-6 bg-proof-gray-50 border-0">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-proof-purple-600 mb-2">60%</div>
                    <div className="text-lg font-semibold text-proof-gray-900 mb-2">Accuracy Improvement</div>
                    <p className="text-sm text-proof-gray-600">vs. traditional ACBC methods</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-proof-blue-600 mb-2">35%</div>
                    <div className="text-lg font-semibold text-proof-gray-900 mb-2">Time Reduction</div>
                    <p className="text-sm text-proof-gray-600">in survey completion</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-proof-green-600 mb-2">95%</div>
                    <div className="text-lg font-semibold text-proof-gray-900 mb-2">Validation Success</div>
                    <p className="text-sm text-proof-gray-600">across market contexts</p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Implementation Case Study</h2>
              <Card className="p-6 border-l-4 border-proof-purple-600">
                <div className="prose prose-lg text-proof-gray-700 max-w-none">
                  <p className="mb-4">
                    <strong>Client:</strong> Global automotive manufacturer launching electric vehicle line
                  </p>
                  <p className="mb-4">
                    <strong>Challenge:</strong> Optimize feature combinations across 25 attributes while maintaining consumer engagement in a 45-minute study
                  </p>
                  <p className="mb-4">
                    <strong>Next-Gen ACBC Approach:</strong> Implemented adaptive algorithms with behavioral bias correction and intelligent attribute prioritization
                  </p>
                  <p className="mb-4">
                    <strong>Results:</strong> Achieved 94% prediction accuracy for actual purchase behavior (vs. 71% with traditional methods), identified optimal pricing strategy worth $15M in additional revenue
                  </p>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Best Practice Guidelines</h2>
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-proof-blue-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Attribute Selection</h4>
                  <p className="text-proof-gray-700">Limit to 15-20 attributes maximum, prioritize based on business impact and consumer salience</p>
                </Card>
                <Card className="p-4 border-l-4 border-proof-purple-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Sample Size</h4>
                  <p className="text-proof-gray-700">Minimum 300 respondents per segment, with 500+ recommended for complex attribute sets</p>
                </Card>
                <Card className="p-4 border-l-4 border-proof-green-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Quality Control</h4>
                  <p className="text-proof-gray-700">Implement multi-stage validation including consistency checks and hold-out validation samples</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-proof-purple-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Implement Next-Gen ACBC?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Leverage our advanced ACBC methodology to achieve superior prediction accuracy and actionable insights for your product optimization challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-purple-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">
                Discuss Your Project
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-purple-600 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/methodologies/conjoint-and-acbc">
                Learn More About ACBC
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}