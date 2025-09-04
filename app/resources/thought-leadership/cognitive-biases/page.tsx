import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Brain, Users, Eye, AlertTriangle, Download, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export default function CognitiveBiasesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-green-50 to-proof-blue-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/resources/thought-leadership" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Thought Leadership
            </Link>
          </div>
          
          <div className="text-center">
            <Badge className="mb-4 bg-proof-green-100 text-proof-green-700">Behavioral Research</Badge>
            <h1 className="text-4xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
              Cognitive Biases in Consumer Research
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="hero-description">
              Understanding and mitigating cognitive biases to improve research validity and generate more actionable insights through behavioral economics principles.
            </p>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-proof-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Updated 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                <span>Behavioral Economics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-0 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <Brain className="h-8 w-8 text-proof-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-proof-gray-900 mb-4">Research Impact</h2>
                <p className="text-proof-gray-700 leading-relaxed mb-4">
                  Cognitive biases systematically influence how respondents process information and make decisions, potentially compromising research validity. Our behavioral economics framework identifies and mitigates these biases, resulting in 50% more actionable insights.
                </p>
                <p className="text-proof-gray-700 leading-relaxed">
                  Through 10+ years of behavioral research integration, we've developed practical protocols that enhance data quality while maintaining respondent engagement and survey completion rates.
                </p>
              </div>
            </div>
          </Card>

          {/* Key Biases */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-8">Critical Biases in Consumer Research</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-proof-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-6 w-6 text-proof-green-600" />
                  <h3 className="text-lg font-semibold text-proof-gray-900">Confirmation Bias</h3>
                </div>
                <p className="text-proof-gray-700 text-sm mb-3">Tendency to seek information that confirms existing beliefs</p>
                <ul className="space-y-1 text-proof-gray-600 text-sm">
                  <li>• Affects attribute evaluation</li>
                  <li>• Influences brand preferences</li>
                  <li>• Skews competitive assessments</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-proof-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-proof-blue-600" />
                  <h3 className="text-lg font-semibold text-proof-gray-900">Anchoring Effect</h3>
                </div>
                <p className="text-proof-gray-700 text-sm mb-3">Over-reliance on first piece of information encountered</p>
                <ul className="space-y-1 text-proof-gray-600 text-sm">
                  <li>• Impacts price sensitivity</li>
                  <li>• Affects feature valuations</li>
                  <li>• Influences choice patterns</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Mitigation Strategies */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Bias Mitigation Framework</h2>
              <div className="prose prose-lg text-proof-gray-700 max-w-none">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">1. Survey Design Interventions</h3>
                <p className="mb-6">
                  Strategic question ordering, randomization protocols, and neutral framing techniques reduce systematic bias introduction. Our analysis shows 35% improvement in response validity through careful design intervention.
                </p>
                
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">2. Statistical Correction Methods</h3>
                <p className="mb-6">
                  Post-hoc analytical techniques identify and adjust for detected bias patterns in response data, ensuring more accurate utility estimation and preference modeling.
                </p>
                
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">3. Behavioral Priming Techniques</h3>
                <p className="mb-6">
                  Carefully designed priming exercises help respondents access more deliberative thinking processes, reducing reliance on automatic cognitive shortcuts that can distort responses.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Implementation Case Study</h2>
              <Card className="p-6 border-l-4 border-proof-green-600">
                <div className="prose prose-lg text-proof-gray-700 max-w-none">
                  <p className="mb-4">
                    <strong>Challenge:</strong> Technology company found significant inconsistencies in feature preference data across multiple conjoint studies
                  </p>
                  <p className="mb-4">
                    <strong>Diagnosis:</strong> Analysis revealed strong anchoring effects from price presentation order and confirmation bias in brand evaluation sections
                  </p>
                  <p className="mb-4">
                    <strong>Intervention:</strong> Implemented randomized price anchoring, neutral brand framing, and deliberative thinking primes
                  </p>
                  <p className="mb-4">
                    <strong>Results:</strong> 
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>45% reduction in response inconsistency</li>
                    <li>60% improvement in out-of-sample prediction accuracy</li>
                    <li>25% increase in actionable insight generation</li>
                    <li>Higher stakeholder confidence in strategic recommendations</li>
                  </ul>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Practical Applications</h2>
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-proof-green-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Pricing Research</h4>
                  <p className="text-proof-gray-700 text-sm">Control for anchoring effects through randomized price presentation and reference point manipulation</p>
                </Card>
                <Card className="p-4 border-l-4 border-proof-blue-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Brand Studies</h4>
                  <p className="text-proof-gray-700 text-sm">Mitigate halo effects and confirmation bias through blind testing and attribute disaggregation</p>
                </Card>
                <Card className="p-4 border-l-4 border-proof-purple-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Product Testing</h4>
                  <p className="text-proof-gray-700 text-sm">Address availability heuristic and representativeness bias through diverse stimulus exposure</p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Validation Metrics</h2>
              <Card className="p-6 bg-proof-gray-50 border-0">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-proof-green-600 mb-2">50%</div>
                    <div className="text-lg font-semibold text-proof-gray-900 mb-2">More Actionable</div>
                    <p className="text-sm text-proof-gray-600">insights generated</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-proof-blue-600 mb-2">35%</div>
                    <div className="text-lg font-semibold text-proof-gray-900 mb-2">Validity Improvement</div>
                    <p className="text-sm text-proof-gray-600">in response patterns</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-proof-purple-600 mb-2">60%</div>
                    <div className="text-lg font-semibold text-proof-gray-900 mb-2">Prediction Accuracy</div>
                    <p className="text-sm text-proof-gray-600">in validation studies</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-proof-green-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Enhance Your Research with Behavioral Insights
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Apply our behavioral economics framework to improve data quality and generate more actionable insights from your consumer research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-green-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">
                Discuss Behavioral Integration
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-green-600 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/resources/white-papers-ebooks/behavioral-economics-research">
                Download Behavioral Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}