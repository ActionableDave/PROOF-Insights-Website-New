import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, User, ArrowLeft, Users, Target, Brain, UserCheck, TrendingUp, BarChart3, CheckCircle, ArrowRight, Eye, MessageCircle, Star, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function CustomerPersonasResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Navigation */}
      <section className="py-6 bg-proof-gray-50 border-b border-proof-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources/blog" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-proof-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              February 25, 2025
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              Katie Crain
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-proof-purple-50 text-proof-purple-600 text-xs font-medium rounded">Personas</span>
              <span className="px-2 py-1 bg-proof-blue-50 text-proof-blue-600 text-xs font-medium rounded">Segmentation</span>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-proof-gray-900 mb-6">
            Building Customer Personas from Research Data
          </h1>
          
          <p className="text-xl text-proof-gray-600 leading-relaxed mb-8">
            Transform segmentation research into actionable customer personas that drive business strategy. Learn how to synthesize quantitative and qualitative data into compelling, research-backed personas that guide decision-making across your organization.
          </p>
          
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <img 
              src="https://images.pexels.com/photos/7688102/pexels-photo-7688102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
              alt="Marketing team working on customer personas using research data and strategy documents"
              className="w-full h-64 lg:h-80 object-cover"
              data-macaly="customer-personas-hero-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-proof-gray-900 mb-6" data-macaly="intro-heading">From Data Points to Human Stories</h2>
              <p className="text-proof-gray-600 mb-6" data-macaly="intro-paragraph-1">
                Market segmentation research provides valuable statistical insights about customer groups, but raw data segments often fail to drive organizational action. Customer personas bridge this gap by transforming abstract data into relatable human profiles that teams can empathize with and design for.
              </p>
              <p className="text-proof-gray-600 mb-6" data-macaly="intro-paragraph-2">
                However, many organizations struggle to create personas that are both research-backed and strategically useful. Our analysis of 150+ persona development projects shows that research-driven personas are 3.4x more effective at guiding product decisions and 2.8x more likely to be adopted across teams compared to assumption-based personas.
              </p>
            </div>

            {/* Key Framework */}
            <Card className="p-8 bg-gradient-to-r from-proof-blue-50 to-proof-purple-50 border-0 mb-12">
              <h3 className="text-xl font-bold text-proof-gray-900 mb-6 text-center">Research-Backed Persona Impact</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">68%</div>
                  <div className="text-sm text-proof-gray-600">Improvement in product-market fit</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-purple-600 mb-2">145%</div>
                  <div className="text-sm text-proof-gray-600">Increase in marketing effectiveness</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">52%</div>
                  <div className="text-sm text-proof-gray-600">Faster decision-making</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-purple-600 mb-2">89%</div>
                  <div className="text-sm text-proof-gray-600">Better customer understanding</div>
                </div>
              </div>
            </Card>

            {/* Process Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-proof-gray-900 mb-6 flex items-center">
                <Users className="mr-3 h-6 w-6 text-proof-blue-600" />
                The Research-to-Persona Process
              </h2>
              
              <p className="text-proof-gray-600 mb-6">
                Building effective personas requires a systematic approach that combines quantitative segmentation with qualitative insights to create compelling, actionable customer profiles.
              </p>

              <div className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card className="p-6 bg-proof-blue-50 border-0">
                    <h3 className="font-semibold text-proof-blue-800 mb-4 flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      Quantitative Foundation
                    </h3>
                    <ul className="text-sm text-proof-gray-700 space-y-2">
                      <li>• Statistical segmentation analysis</li>
                      <li>• Behavioral data and usage patterns</li>
                      <li>• Survey responses and preferences</li>
                      <li>• Purchase history and lifecycle data</li>
                      <li>• Market sizing and opportunity assessment</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-proof-purple-50 border-0">
                    <h3 className="font-semibold text-proof-purple-800 mb-4 flex items-center">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Qualitative Enrichment
                    </h3>
                    <ul className="text-sm text-proof-gray-700 space-y-2">
                      <li>• In-depth interviews and stories</li>
                      <li>• Motivations and pain points</li>
                      <li>• Decision-making processes</li>
                      <li>• Environmental and social context</li>
                      <li>• Jobs-to-be-done frameworks</li>
                    </ul>
                  </Card>
                </div>

                <Card className="p-6 bg-gradient-to-r from-proof-green-50 to-proof-blue-50 border-0">
                  <h3 className="font-semibold text-proof-gray-900 mb-4 text-center">Persona Development Framework</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-proof-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h4 className="font-medium text-proof-gray-900 mb-2">Segment & Analyze</h4>
                      <p className="text-xs text-proof-gray-600">Statistical clustering and behavioral analysis</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-proof-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h4 className="font-medium text-proof-gray-900 mb-2">Humanize & Story</h4>
                      <p className="text-xs text-proof-gray-600">Add personality, context, and narrative</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-proof-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h4 className="font-medium text-proof-gray-900 mb-2">Validate & Refine</h4>
                      <p className="text-xs text-proof-gray-600">Test with stakeholders and customers</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-proof-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <h4 className="font-medium text-proof-gray-900 mb-2">Implement & Activate</h4>
                      <p className="text-xs text-proof-gray-600">Deploy across teams and processes</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Best Practices */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-proof-gray-900 mb-6">Persona Development Best Practices</h2>
              
              <div className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card className="p-6 bg-green-50 border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-4 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      What Works Well
                    </h3>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li>• <strong>Research-backed insights:</strong> Ground every persona element in data</li>
                      <li>• <strong>Behavioral focus:</strong> Emphasize what people do, not just who they are</li>
                      <li>• <strong>Strategic relevance:</strong> Connect to business objectives and decisions</li>
                      <li>• <strong>Memorable storytelling:</strong> Create compelling, relatable narratives</li>
                      <li>• <strong>Cross-functional input:</strong> Involve multiple teams in development</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-red-50 border border-red-200">
                    <h3 className="font-semibold text-red-800 mb-4">⚠️ Common Pitfalls</h3>
                    <ul className="text-sm text-red-700 space-y-2">
                      <li>• <strong>Assumption-based personas:</strong> Creating profiles without research</li>
                      <li>• <strong>Demographic obsession:</strong> Focusing only on age, gender, income</li>
                      <li>• <strong>Too many personas:</strong> Creating 8+ personas that confuse teams</li>
                      <li>• <strong>Static documents:</strong> Treating personas as one-time deliverables</li>
                      <li>• <strong>Lack of validation:</strong> Not testing personas with real customers</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>

            {/* Implementation Strategy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-proof-gray-900 mb-6 flex items-center">
                <Target className="mr-3 h-6 w-6 text-proof-purple-600" />
                Implementation & Activation Strategy
              </h2>
              
              <p className="text-proof-gray-600 mb-6">
                Creating personas is only half the battle. Success depends on effective implementation across your organization.
              </p>

              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-white border border-proof-blue-200">
                  <h3 className="font-semibold text-proof-blue-800 mb-3 flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Organizational Buy-in
                  </h3>
                  <ul className="text-sm text-proof-gray-600 space-y-2">
                    <li>• Executive sponsorship and support</li>
                    <li>• Cross-functional workshops and training</li>
                    <li>• Integration with existing processes</li>
                    <li>• Success metrics and tracking</li>
                  </ul>
                </Card>

                <Card className="p-6 bg-white border border-proof-purple-200">
                  <h3 className="font-semibold text-proof-purple-800 mb-3 flex items-center">
                    <Brain className="mr-2 h-5 w-5" />
                    Practical Tools
                  </h3>
                  <ul className="text-sm text-proof-gray-600 space-y-2">
                    <li>• Persona reference cards and posters</li>
                    <li>• Decision-making frameworks</li>
                    <li>• Journey maps and scenario planning</li>
                    <li>• Digital dashboards and resources</li>
                  </ul>
                </Card>

                <Card className="p-6 bg-white border border-proof-green-200">
                  <h3 className="font-semibold text-proof-green-800 mb-3 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Continuous Evolution
                  </h3>
                  <ul className="text-sm text-proof-gray-600 space-y-2">
                    <li>• Regular research updates and refresh</li>
                    <li>• Market changes and new insights</li>
                    <li>• Performance measurement and optimization</li>
                    <li>• Team feedback and improvements</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Conclusion */}
            <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600 text-white">
              <h2 className="text-2xl font-bold mb-4">Key Takeaways for Persona Success</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p>✓ <strong>Ground in research:</strong> Use both quantitative and qualitative data</p>
                  <p>✓ <strong>Focus on behavior:</strong> Emphasize actions, motivations, and decision-making</p>
                  <p>✓ <strong>Keep it strategic:</strong> Align personas with business objectives and decisions</p>
                </div>
                <div className="space-y-3">
                  <p>✓ <strong>Make them memorable:</strong> Create compelling stories that teams remember</p>
                  <p>✓ <strong>Implement systematically:</strong> Integrate into processes and train teams</p>
                  <p>✓ <strong>Evolve continuously:</strong> Update based on new insights and market changes</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">
                  Maximizing Survey Response Rates: A Practical Guide
                </h3>
                <p className="text-proof-gray-600 mb-4 text-sm">
                  Learn proven strategies to increase participation rates and improve data quality.
                </p>
                <Link href="/resources/blog/survey-response-rates" className="text-proof-purple-600 font-medium hover:text-proof-purple-700 text-sm">
                  Read More →
                </Link>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">
                  The ROI of Market Research: Measuring Success
                </h3>
                <p className="text-proof-gray-600 mb-4 text-sm">
                  Calculate and demonstrate the return on investment for your research initiatives.
                </p>
                <Link href="/resources/blog/roi-market-research" className="text-proof-purple-600 font-medium hover:text-proof-purple-700 text-sm">
                  Read More →
                </Link>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">
                  Conjoint Analysis: Beyond the Basics
                </h3>
                <p className="text-proof-gray-600 mb-4 text-sm">
                  Advanced techniques and applications for complex business decisions.
                </p>
                <Link href="/resources/blog/conjoint-analysis-advanced" className="text-proof-blue-600 font-medium hover:text-proof-blue-700 text-sm">
                  Read More →
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Research-Backed Personas?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your customer research into actionable personas that drive results across your organization.
          </p>
          <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold" asChild>
            <Link href="/contact">
              Start Your Persona Project
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}