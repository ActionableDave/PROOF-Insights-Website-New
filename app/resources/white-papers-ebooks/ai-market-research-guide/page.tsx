import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, BookOpen, Brain, Download, Calendar, Clock, Users, FileText, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function AIMarketResearchGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/resources/white-papers-ebooks" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Link>
          </div>
          
          <div className="text-center">
            <Badge className="mb-4 bg-proof-blue-100 text-proof-blue-700">Featured eBook</Badge>
            <h1 className="text-4xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
              The Complete Guide to AI in Market Research
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="hero-description">
              A comprehensive 45-page guide exploring how artificial intelligence is transforming market research methodologies, from data collection to insight generation.
            </p>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-proof-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>January 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>25 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>45 pages</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>2,500+ downloads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* eBook Preview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <BookOpen className="h-8 w-8 text-proof-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-proof-gray-900 mb-4">What You'll Learn</h2>
                <p className="text-proof-gray-700 leading-relaxed mb-4">
                  This comprehensive guide provides market research professionals with practical frameworks, real-world case studies, and actionable strategies for integrating AI technologies into their research workflows.
                </p>
                <p className="text-proof-gray-700 leading-relaxed">
                  Whether you're just beginning to explore AI applications or looking to optimize existing implementations, this guide offers insights from 15+ years of AI integration experience across 500+ research projects.
                </p>
              </div>
            </div>
          </Card>

          {/* Table of Contents */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-8">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-proof-blue-200">
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-4">Part I: Foundations</h3>
                <ul className="space-y-2 text-proof-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Chapter 1: AI in Research Context</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Chapter 2: Technology Landscape</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Chapter 3: Implementation Framework</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Chapter 4: ROI Considerations</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-proof-purple-200">
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-4">Part II: Applications</h3>
                <ul className="space-y-2 text-proof-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Chapter 5: Automated Data Collection</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Chapter 6: Predictive Analytics</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Chapter 7: Natural Language Processing</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />Chapter 8: Real-time Insights</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Key Insights Preview */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Key Insights Preview</h2>
              <div className="prose prose-lg text-proof-gray-700 max-w-none">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">The AI-Human Collaboration Model</h3>
                <p className="mb-6">
                  Successful AI implementation in market research isn't about replacing human researchers—it's about amplifying their capabilities. Our analysis shows that the most effective approach combines AI's computational power with human strategic thinking and contextual understanding.
                </p>
                
                <blockquote className="border-l-4 border-proof-blue-500 pl-6 italic text-proof-gray-600 mb-6">
                  "Organizations that successfully integrate AI with human expertise achieve 40% faster insights delivery while maintaining 95% accuracy rates—significantly outperforming purely automated or purely manual approaches."
                </blockquote>
                
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Implementation Roadmap</h3>
                <p className="mb-6">
                  The guide provides a detailed 12-step implementation roadmap that has been validated across diverse industry contexts. This framework helps organizations avoid common pitfalls while maximizing the benefits of AI integration.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Featured Case Studies</h2>
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-proof-blue-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Healthcare Technology Validation</h4>
                  <p className="text-proof-gray-700 mb-2">AI-powered sentiment analysis of 50,000+ patient reviews combined with clinical expert interpretation to validate new medical device concepts.</p>
                  <p className="text-sm text-proof-gray-600"><strong>Result:</strong> 60% reduction in validation time, 97% prediction accuracy</p>
                </Card>
                
                <Card className="p-6 border-l-4 border-proof-purple-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Consumer Goods Segmentation</h4>
                  <p className="text-proof-gray-700 mb-2">Machine learning algorithms identified 8 distinct consumer segments from behavioral data, refined through qualitative human insights.</p>
                  <p className="text-sm text-proof-gray-600"><strong>Result:</strong> 35% improvement in targeting effectiveness, $2.1M revenue impact</p>
                </Card>
                
                <Card className="p-6 border-l-4 border-proof-green-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Financial Services Innovation</h4>
                  <p className="text-proof-gray-700 mb-2">Real-time AI monitoring of market sentiment combined with expert strategic analysis for new product launch optimization.</p>
                  <p className="text-sm text-proof-gray-600"><strong>Result:</strong> 50% faster time-to-market, 28% higher adoption rates</p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Performance Benchmarks</h2>
              <Card className="p-6 bg-proof-gray-50 border-0">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-proof-blue-600 mb-2">40%</div>
                    <div className="text-sm font-semibold text-proof-gray-900 mb-1">Faster Delivery</div>
                    <p className="text-xs text-proof-gray-600">insights generation time</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-proof-purple-600 mb-2">60%</div>
                    <div className="text-sm font-semibold text-proof-gray-900 mb-1">Cost Reduction</div>
                    <p className="text-xs text-proof-gray-600">in data processing</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-proof-green-600 mb-2">95%</div>
                    <div className="text-sm font-semibold text-proof-gray-900 mb-1">Accuracy Rate</div>
                    <p className="text-xs text-proof-gray-600">prediction validation</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-proof-orange-600 mb-2">3x</div>
                    <div className="text-sm font-semibold text-proof-gray-900 mb-1">Scale Increase</div>
                    <p className="text-xs text-proof-gray-600">data processing volume</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Download Your Complete AI Guide
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get instant access to the full 45-page guide, including detailed case studies, implementation checklists, and ROI calculators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold">
              <Download className="mr-2 h-5 w-5" />
              Download Free eBook
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">
                Discuss AI Implementation
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-blue-100">
            No email required • Instant download • 45 pages • Updated January 2024
          </div>
        </div>
      </section>
    </div>
  )
}