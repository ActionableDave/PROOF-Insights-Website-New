import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Download, Share2, Calendar, MapPin, Users, Target, TrendingUp, BarChart3, CheckCircle, Globe } from 'lucide-react'
import Link from 'next/link'

export default function DigitalBrandConsolidationCase() {
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
            <span className="text-proof-gray-600">Digital Brand Consolidation Strategy</span>
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
                <Badge className="bg-proof-blue-100 text-proof-blue-700">Digital Technology</Badge>
                <Badge className="bg-proof-purple-100 text-proof-purple-700">Brand Research</Badge>
                <Badge className="bg-proof-gray-100 text-proof-gray-700">Global Study</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-proof-gray-900 mb-6">
                Global Brand Consolidation Strategy for Digital Technology Leader
              </h1>
              
              <p className="text-xl text-proof-gray-600 leading-relaxed mb-8">
                How a globally recognizable technology company successfully consolidated multiple brands using comprehensive international market research, enabling cost-effective brand management while maintaining market position.
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
                    <Globe className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">9 International Markets</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Customers & Non-customers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-proof-blue-600" />
                    <span className="text-proof-gray-600">Method: Brand Research</span>
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
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">9</div>
              <div className="text-proof-gray-600">Global Markets Analyzed</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <BarChart3 className="h-12 w-12 text-proof-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-purple-600 mb-2">100%</div>
              <div className="text-proof-gray-600">Strategic Brand Decisions</div>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Target className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">5</div>
              <div className="text-proof-gray-600">Critical Brand Questions</div>
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
                A global technology company with several brand names, audiences, and products faced an executive decision to combine and condense brands for more cost-effective brand management. They needed answers to critical strategic questions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Which brands are inextricably linked to their products in each category?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Which brand and product names are indispensable to the overall company?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Which brands and products are highly recognized by customers?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">How do their brands compare to competitive brands?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Are these answers specific to customer roles?</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <img 
                src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/vG0cqY8H0Fh0TzT5XWsEc/image.png" 
                alt="Video editing interface and digital content production" 
                className="w-full h-64 object-cover rounded-lg"
                data-macaly="digital-brand-hero-image"
              />
              <h3 className="text-xl font-semibold text-proof-gray-900 mt-4 mb-2">Strategic Brand Decision Making</h3>
              <p className="text-proof-gray-600">Understanding brand recognition, product association, and competitive positioning across global markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Research Approach</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Global Survey Methodology</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                In partnership with the client, Proof Insights created a comprehensive survey asking respondents to identify their role when using the company's technology, then provide input on several popular brands within that role context.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Role-Based Analysis</h4>
                    <p className="text-proof-gray-600">Survey designed to understand brand perception based on user roles and technology usage patterns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Brand Recognition Testing</h4>
                    <p className="text-proof-gray-600">Questions examining recognition, performance, and perception of various brand aspects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900">Competitive Analysis</h4>
                    <p className="text-proof-gray-600">Comparative assessment against industry competitors across all target markets</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">International Market Coverage</h3>
              <p className="text-proof-gray-600 mb-6">
                Survey links were distributed to both customers and non-customers around the world, reaching 9 countries across multiple continents.
              </p>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="font-semibold text-proof-blue-600">Americas</div>
                  <div className="text-sm text-proof-gray-600">US, Mexico, Brazil</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="font-semibold text-proof-purple-600">Europe</div>
                  <div className="text-sm text-proof-gray-600">UK, Germany, France</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="font-semibold text-proof-blue-600">Asia-Pacific</div>
                  <div className="text-sm text-proof-gray-600">China, Japan, Australia</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-proof-gray-900 mb-2">Multi-Language Analysis</h4>
                <p className="text-sm text-proof-gray-600">
                  Proof Insights collected and analyzed survey results including those re-translated to English, enabling differentiation by country, region, and industry role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Implementation */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Research Implementation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Survey Distribution Strategy</h3>
              <p className="text-proof-gray-600 mb-4">
                The survey targeted both existing customers and potential customers across diverse geographic markets, with email addresses sourced from the client's customer base and third-party industry participants.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Customer base and third-party participant targeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Multi-language survey deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Role-based question customization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Global market representation</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Advanced Analysis Framework</h3>
              <p className="text-proof-gray-600 mb-4">
                Proof Insights ran thoughtful cross-tabulation, segmentation correlation, and multi-source insight analysis to provide comprehensive brand positioning recommendations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Cross-tabulation analysis by region and role</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Customer and potential customer segmentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Competitive brand positioning analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Strategic consolidation recommendations</span>
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="mt-8">
            <Card className="p-8 bg-gradient-to-r from-proof-blue-50 to-proof-purple-50">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Comprehensive Market Intelligence</h3>
                  <p className="text-proof-gray-600 mb-4">
                    The analysis provided clear insights into how the client's brands measured against competitors, customer base segmentations, and the most effective positioning method to maintain company narrative while reaching the largest customer base possible.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/id-QXQZW7XMRi8TWrj52N/image.png" 
                    alt="Professional video production control room with editing equipment" 
                    className="w-full h-48 object-cover rounded-lg"
                    data-macaly="digital-analysis-image"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Research Results</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Strategic Brand Decisions</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                As a result of the marketing research, the client was able to make impactful decisions about which brands to condense and combine. The company continues to thrive with an effective and efficient number of brands and products under their name.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-proof-green-50 rounded-lg">
                  <h4 className="font-semibold text-proof-green-600 mb-2">Brand Consolidation Success</h4>
                  <p className="text-proof-gray-600">Clear direction on which brands to maintain, combine, or retire based on market recognition</p>
                </div>
                <div className="p-4 bg-proof-blue-50 rounded-lg">
                  <h4 className="font-semibold text-proof-blue-600 mb-2">Cost-Effective Management</h4>
                  <p className="text-proof-gray-600">Optimized brand portfolio enabling more efficient marketing and management resources</p>
                </div>
                <div className="p-4 bg-proof-purple-50 rounded-lg">
                  <h4 className="font-semibold text-proof-purple-600 mb-2">Competitive Positioning</h4>
                  <p className="text-proof-gray-600">Enhanced understanding of brand strength relative to competitors across markets</p>
                </div>
                <div className="p-4 bg-proof-green-50 rounded-lg">
                  <h4 className="font-semibold text-proof-green-600 mb-2">Customer-Centric Strategy</h4>
                  <p className="text-proof-gray-600">Role-based insights enabling targeted brand messaging and positioning</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Global Market Insights</h3>
              <p className="text-proof-gray-600 mb-6">
                The research provided detailed breakdowns of customer and potential customer base segmentations across all nine international markets, with clear recommendations for changes to maximize branding efforts.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-proof-gray-900">Brand Recognition</span>
                    <span className="text-proof-blue-600">Market-Specific</span>
                  </div>
                  <p className="text-sm text-proof-gray-600">Identified which brands have strongest recognition in each geographic market</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-proof-gray-900">Product Association</span>
                    <span className="text-proof-purple-600">Category-Driven</span>
                  </div>
                  <p className="text-sm text-proof-gray-600">Determined which brands are inextricably linked to specific product categories</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-proof-gray-900">Customer Roles</span>
                    <span className="text-proof-blue-600">Usage-Based</span>
                  </div>
                  <p className="text-sm text-proof-gray-600">Segmented insights based on how different customer roles interact with brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Value */}
      <section className="py-16 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Research Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-proof-green-50 to-proof-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Strategic Outcomes</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Brand Portfolio</span>
                  <span className="font-semibold text-proof-green-600">Optimized</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Management Efficiency</span>
                  <span className="font-semibold text-proof-green-600">Improved</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Market Position</span>
                  <span className="font-semibold text-proof-green-600">Strengthened</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-proof-gray-600">Company Performance</span>
                  <span className="font-semibold text-proof-green-600">Thriving</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-6">Proof Insights Advantage</h3>
              <p className="text-lg text-proof-gray-600 mb-6 leading-relaxed">
                Proof Insights can benefit your company too. Our research methods are specialized to the markets we work within, with all projects customized and tailored to address specific client needs, goals, and objectives.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Vast experience in global market research across technology sectors</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Specialized methods for brand consolidation and portfolio optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Customized approaches for each client's unique strategic objectives</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-proof-green-600 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-600">Multi-language and cross-cultural research capabilities</span>
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
            Ready to Optimize Your Brand Portfolio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how comprehensive brand research can help you make strategic consolidation decisions that drive efficiency and market success.
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