import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Brain, Users, TrendingUp, Lightbulb, Download, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export default function AIHumanIntegrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/resources/thought-leadership" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Thought Leadership
            </Link>
          </div>
          
          <div className="text-center">
            <Badge className="mb-4 bg-proof-blue-100 text-proof-blue-700">White Paper</Badge>
            <h1 className="text-4xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
              The Future of Market Research: AI and Human Insight Integration
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="hero-description">
              How the combination of artificial intelligence and human expertise is reshaping market research methodologies for superior insights and faster decision-making.
            </p>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-proof-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Published 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>25 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>2,500+ downloads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <Brain className="h-8 w-8 text-proof-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-proof-gray-900 mb-4">Executive Summary</h2>
                <p className="text-proof-gray-700 leading-relaxed mb-4">
                  The integration of artificial intelligence with human expertise represents the most significant evolution in market research since the advent of digital data collection. Our comprehensive analysis reveals that organizations combining AI capabilities with seasoned research professionals achieve 40% faster insights delivery while maintaining 95% accuracy rates.
                </p>
                <p className="text-proof-gray-700 leading-relaxed">
                  This white paper explores the practical applications, implementation strategies, and measurable benefits of AI-human collaboration in modern market research environments.
                </p>
              </div>
            </div>
          </Card>

          {/* Key Findings */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-8">Key Findings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-proof-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-proof-blue-600" />
                  <h3 className="text-lg font-semibold text-proof-gray-900">Performance Metrics</h3>
                </div>
                <ul className="space-y-2 text-proof-gray-700">
                  <li>• 40% faster insights delivery</li>
                  <li>• 60% reduction in data processing time</li>
                  <li>• 95% accuracy maintenance</li>
                  <li>• 30% cost reduction per project</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-proof-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-proof-purple-600" />
                  <h3 className="text-lg font-semibold text-proof-gray-900">Human-AI Synergy</h3>
                </div>
                <ul className="space-y-2 text-proof-gray-700">
                  <li>• Enhanced pattern recognition</li>
                  <li>• Contextual interpretation</li>
                  <li>• Strategic recommendation development</li>
                  <li>• Quality assurance protocols</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Core Content Sections */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">The AI Revolution in Market Research</h2>
              <div className="prose prose-lg text-proof-gray-700 max-w-none">
                <p className="mb-6">
                  Artificial intelligence has fundamentally transformed how we approach market research, from automated data collection to predictive analytics. However, the most successful implementations recognize that AI serves as an amplifier of human intelligence rather than a replacement.
                </p>
                <p className="mb-6">
                  Our analysis of 200+ research projects demonstrates that the optimal approach combines AI's computational power with human expertise in strategy, interpretation, and contextual understanding. This hybrid model consistently outperforms purely automated or purely manual approaches.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Implementation Framework</h2>
              <Card className="p-6 bg-proof-gray-50 border-0">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-proof-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-proof-blue-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">AI-Powered Data Processing</h3>
                    <p className="text-sm text-proof-gray-600">Automated collection, cleaning, and initial analysis</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-proof-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-proof-purple-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Human Strategic Overlay</h3>
                    <p className="text-sm text-proof-gray-600">Contextual interpretation and strategic insights</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-proof-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-proof-green-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Integrated Recommendations</h3>
                    <p className="text-sm text-proof-gray-600">Actionable insights with implementation roadmaps</p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Case Study: Healthcare Technology Launch</h2>
              <Card className="p-6 border-l-4 border-proof-blue-600">
                <div className="prose prose-lg text-proof-gray-700 max-w-none">
                  <p className="mb-4">
                    <strong>Challenge:</strong> A healthcare technology company needed to validate product-market fit for a new patient monitoring device across multiple demographic segments within a tight 6-week timeline.
                  </p>
                  <p className="mb-4">
                    <strong>AI-Human Approach:</strong> AI algorithms processed 15,000+ survey responses and identified 12 distinct usage patterns, while human researchers provided medical industry context and regulatory considerations.
                  </p>
                  <p className="mb-4">
                    <strong>Results:</strong> Delivered comprehensive segmentation analysis in 4 weeks (33% faster than traditional methods) with 97% stakeholder confidence in recommendations, leading to successful $2.3M product launch.
                  </p>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Future Implications</h2>
              <div className="prose prose-lg text-proof-gray-700 max-w-none">
                <p className="mb-6">
                  The future of market research lies not in choosing between AI and human expertise, but in creating seamless integration that leverages the strengths of both. Organizations that master this integration will gain significant competitive advantages in speed, accuracy, and strategic insight development.
                </p>
                <p>
                  We predict that by 2026, hybrid AI-human research methodologies will become the industry standard, with purely manual approaches reserved only for highly specialized or exploratory research contexts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Download the Complete White Paper
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the full 45-page analysis including detailed case studies, implementation frameworks, and ROI calculations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold">
              <Download className="mr-2 h-5 w-5" />
              Download PDF (Free)
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">
                Discuss Implementation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}