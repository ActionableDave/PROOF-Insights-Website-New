import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, FileText, BarChart3, Download, Calendar, Clock, Users, CheckCircle, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ConjointAnalysisMasteryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-purple-50 to-proof-blue-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/resources/white-papers-ebooks" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Link>
          </div>
          
          <div className="text-center">
            <Badge className="mb-4 bg-proof-purple-100 text-proof-purple-700">Featured White Paper</Badge>
            <h1 className="text-4xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
              Mastering Advanced Conjoint Analysis Techniques
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="hero-description">
              Deep dive into ACBC, HB, and other advanced conjoint methods with real-world case studies and implementation guidelines from 15+ years of conjoint expertise.
            </p>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-proof-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>20 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>32 pages</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>1,800+ downloads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Paper Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <BarChart3 className="h-8 w-8 text-proof-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-proof-gray-900 mb-4">Executive Summary</h2>
                <p className="text-proof-gray-700 leading-relaxed mb-4">
                  Conjoint analysis has evolved dramatically over the past decade, with advanced methodologies like ACBC (Adaptive Choice-Based Conjoint) and Hierarchical Bayes estimation delivering unprecedented accuracy in preference modeling and market simulation.
                </p>
                <p className="text-proof-gray-700 leading-relaxed">
                  This white paper synthesizes insights from 200+ conjoint studies, providing practical guidance for selecting, implementing, and optimizing advanced conjoint methodologies for maximum business impact.
                </p>
              </div>
            </div>
          </Card>

          {/* Methodology Comparison */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-8">Methodology Comparison</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-2 border-proof-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-proof-blue-600" />
                  <h3 className="text-lg font-semibold text-proof-gray-900">Traditional CBC</h3>
                </div>
                <ul className="space-y-2 text-proof-gray-700 text-sm">
                  <li>• Good baseline accuracy</li>
                  <li>• Limited attribute handling</li>
                  <li>• Standard market simulation</li>
                  <li>• 15-20 minute surveys</li>
                </ul>
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-proof-blue-600">75%</div>
                  <div className="text-xs text-proof-gray-600">Prediction Accuracy</div>
                </div>
              </Card>
              
              <Card className="p-6 border-2 border-proof-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-proof-purple-600" />
                  <h3 className="text-lg font-semibold text-proof-gray-900">Advanced ACBC</h3>
                </div>
                <ul className="space-y-2 text-proof-gray-700 text-sm">
                  <li>• Superior accuracy</li>
                  <li>• 20+ attributes possible</li>
                  <li>• Realistic choice scenarios</li>
                  <li>• 25-35 minute surveys</li>
                </ul>
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-proof-purple-600">92%</div>
                  <div className="text-xs text-proof-gray-600">Prediction Accuracy</div>
                </div>
              </Card>
              
              <Card className="p-6 border-2 border-proof-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-proof-green-600" />
                  <h3 className="text-lg font-semibold text-proof-gray-900">Hybrid Methods</h3>
                </div>
                <ul className="space-y-2 text-proof-gray-700 text-sm">
                  <li>• Best-in-class accuracy</li>
                  <li>• Complex product modeling</li>
                  <li>• Dynamic market scenarios</li>
                  <li>• 30-45 minute surveys</li>
                </ul>
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-proof-green-600">96%</div>
                  <div className="text-xs text-proof-gray-600">Prediction Accuracy</div>
                </div>
              </Card>
            </div>
          </div>

          {/* Core Content Sections */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Advanced ACBC Implementation</h2>
              <div className="prose prose-lg text-proof-gray-700 max-w-none">
                <p className="mb-6">
                  Adaptive Choice-Based Conjoint represents the gold standard for complex preference modeling. Unlike traditional CBC, ACBC adapts to each respondent's preferences, creating personalized choice scenarios that mirror real-world decision-making processes.
                </p>
                
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Key Implementation Considerations:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Attribute Selection:</strong> Limit to 15-20 attributes maximum, prioritizing business-critical and consumer-salient features</li>
                  <li><strong>Level Definition:</strong> Ensure levels are realistic, actionable, and cover the full range of strategic possibilities</li>
                  <li><strong>Sample Size:</strong> Minimum 300 respondents per segment, with 500+ recommended for complex attribute sets</li>
                  <li><strong>Quality Control:</strong> Implement consistency checks, speedster detection, and hold-out validation samples</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Hierarchical Bayes Estimation</h2>
              <Card className="p-6 bg-proof-gray-50 border-0">
                <div className="prose prose-lg text-proof-gray-700 max-w-none">
                  <p className="mb-4">
                    Hierarchical Bayes (HB) estimation has revolutionized conjoint analysis by enabling individual-level utility estimation with remarkable stability and predictive accuracy. This approach is particularly valuable for:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-proof-gray-900 mb-2">Optimal Applications:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Market simulation and share prediction</li>
                        <li>• Individual-level segmentation</li>
                        <li>• Price optimization modeling</li>
                        <li>• Product portfolio optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-proof-gray-900 mb-2">Technical Requirements:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Minimum 12-15 choice tasks per respondent</li>
                        <li>• Convergence diagnostics monitoring</li>
                        <li>• Cross-validation testing protocols</li>
                        <li>• Stability assessment across iterations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Real-World Case Study</h2>
              <Card className="p-6 border-l-4 border-proof-purple-600">
                <div className="prose prose-lg text-proof-gray-700 max-w-none">
                  <p className="mb-4">
                    <strong>Client:</strong> Global smartphone manufacturer launching flagship device
                  </p>
                  <p className="mb-4">
                    <strong>Challenge:</strong> Optimize 18 key features across multiple price points while predicting market share against 12 competitor devices
                  </p>
                  <p className="mb-4">
                    <strong>Methodology:</strong> Advanced ACBC with HB estimation, incorporating realistic competitive scenarios and brand interaction effects
                  </p>
                  <p className="mb-4">
                    <strong>Key Findings:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Camera quality and battery life drove 65% of preference variance</li>
                    <li>Price sensitivity varied dramatically by user segment (3x difference)</li>
                    <li>Brand premium effects were strongest in premium price tiers</li>
                    <li>Optimal configuration predicted to capture 18% market share</li>
                  </ul>
                  <p className="mb-4">
                    <strong>Business Impact:</strong> Launch achieved 19.2% market share (96% prediction accuracy), generating $2.1B revenue in first year
                  </p>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Advanced Applications</h2>
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-proof-blue-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Dynamic Pricing Models</h4>
                  <p className="text-proof-gray-700">Integrate conjoint utilities with elasticity curves for real-time pricing optimization across product portfolios</p>
                </Card>
                <Card className="p-4 border-l-4 border-proof-purple-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Multi-Category Analysis</h4>
                  <p className="text-proof-gray-700">Cross-category cannibalization modeling for comprehensive portfolio impact assessment</p>
                </Card>
                <Card className="p-4 border-l-4 border-proof-green-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Behavioral Integration</h4>
                  <p className="text-proof-gray-700">Combine conjoint utilities with behavioral economics principles for enhanced prediction accuracy</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-proof-purple-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Download the Complete White Paper
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get the full 32-page analysis including detailed methodology comparisons, implementation checklists, and statistical validation frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-purple-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold">
              <Download className="mr-2 h-5 w-5" />
              Download White Paper (Free)
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-purple-600 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">
                Discuss Your Conjoint Project
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-purple-100">
            Instant access • No registration required • 32 pages • Updated December 2023
          </div>
        </div>
      </section>
    </div>
  )
}