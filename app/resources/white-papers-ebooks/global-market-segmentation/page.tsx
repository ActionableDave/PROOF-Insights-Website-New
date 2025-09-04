import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, FileText, Globe, Download, Calendar, Clock, Users, CheckCircle, Map, Target } from 'lucide-react'
import Link from 'next/link'

export default function GlobalMarketSegmentationPage() {
  return (
    <div className="min-h-screen bg-white">  
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-green-50 to-proof-blue-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/resources/white-papers-ebooks" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Link>
          </div>
          
          <div className="text-center">
            <Badge className="mb-4 bg-proof-green-100 text-proof-green-700">Research Report</Badge>
            <h1 className="text-4xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
              Global Market Segmentation: Cross-Cultural Insights
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="hero-description">
              How to conduct effective market segmentation across diverse cultural contexts with validation techniques and bias reduction strategies.
            </p>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-proof-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>November 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>18 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>28 pages</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>1,200+ downloads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-0 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <Globe className="h-8 w-8 text-proof-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-proof-gray-900 mb-4">Research Challenge</h2>
                <p className="text-proof-gray-700 leading-relaxed mb-4">
                  Global market segmentation presents unique challenges as cultural contexts significantly influence consumer behavior, preferences, and decision-making processes. Traditional segmentation approaches often fail when applied across diverse cultural markets.
                </p>
                <p className="text-proof-gray-700 leading-relaxed">
                  This comprehensive research report synthesizes insights from 50+ global segmentation studies across 25 countries, providing practical frameworks for conducting reliable cross-cultural market segmentation.
                </p>
              </div>
            </div>
          </Card>

          {/* Key Frameworks */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-8">Cross-Cultural Segmentation Framework</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-2 border-proof-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Map className="h-6 w-6 text-proof-green-600" />
                  <h3 className="text-lg font-semibold text-proof-gray-900">Cultural Mapping</h3>
                </div>
                <ul className="space-y-2 text-proof-gray-700 text-sm">
                  <li>• Hofstede dimension analysis</li>
                  <li>• Values system assessment</li>
                  <li>• Behavioral pattern identification</li>
                  <li>• Communication style evaluation</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-proof-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-proof-blue-600" />
                  <h3 className="text-lg font-semibold text-proof-gray-900">Adaptive Methodology</h3>
                </div>
                <ul className="space-y-2 text-proof-gray-700 text-sm">
                  <li>• Culture-specific question design</li>
                  <li>• Localized scaling techniques</li>
                  <li>• Context-appropriate stimuli</li>
                  <li>• Multi-method validation</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-2 border-proof-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-proof-purple-600" />
                  <h3 className="text-lg font-semibold text-proof-gray-900">Global Validation</h3>
                </div>
                <ul className="space-y-2 text-proof-gray-700 text-sm">
                  <li>• Cross-cultural equivalence testing</li>
                  <li>• Multi-group factor analysis</li>
                  <li>• Invariance measurement</li>
                  <li>• Predictive validity assessment</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Core Content Sections */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Cultural Influence on Segmentation Variables</h2>
              <div className="prose prose-lg text-proof-gray-700 max-w-none">
                <p className="mb-6">
                  Our analysis of global segmentation studies reveals that cultural context influences not just segment composition, but the effectiveness of different segmentation variables themselves. What drives behavior in individualistic cultures may be irrelevant in collectivistic contexts.
                </p>
                
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Variable Effectiveness by Cultural Context</h3>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="p-4 border-2 border-proof-green-200">
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Individualistic Cultures</h4>
                    <ul className="text-sm text-proof-gray-700 space-y-1">
                      <li>• Personal values and beliefs (High effectiveness)</li>
                      <li>• Individual lifestyle preferences</li>
                      <li>• Self-expression motivations</li>
                      <li>• Personal achievement orientation</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4 border-2 border-proof-blue-200">
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Collectivistic Cultures</h4>
                    <ul className="text-sm text-proof-gray-700 space-y-1">
                      <li>• Family and group influences (High effectiveness)</li>
                      <li>• Social status considerations</li>
                      <li>• Community harmony factors</li>
                      <li>• Traditional value systems</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Multi-Country Case Study</h2>
              <Card className="p-6 border-l-4 border-proof-green-600">
                <div className="prose prose-lg text-proof-gray-700 max-w-none">
                  <p className="mb-4">
                    <strong>Client:</strong> Global consumer electronics manufacturer
                  </p>
                  <p className="mb-4">
                    <strong>Challenge:</strong> Develop unified segmentation strategy across 8 countries (US, UK, Germany, Japan, China, India, Brazil, Mexico)
                  </p>
                  <p className="mb-4">
                    <strong>Methodology:</strong> Hybrid approach combining universal segments with culture-specific adaptations
                  </p>
                  <p className="mb-4">
                    <strong>Key Findings:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>3 universal segments emerged across all markets (Tech Innovators, Value Seekers, Brand Loyalists)</li>
                    <li>2 culture-specific segments in each market reflected local values and preferences</li>
                    <li>Segment sizes varied dramatically by culture (Tech Innovators: 8% in Japan vs. 24% in US)</li>
                    <li>Purchase drivers showed significant cultural variation within same segments</li>
                  </ul>
                  <p className="mb-4">
                    <strong>Business Impact:</strong> 35% improvement in marketing effectiveness, $12M increase in global revenue through targeted positioning
                  </p>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Implementation Best Practices</h2>
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-proof-green-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Survey Design</h4>
                  <p className="text-proof-gray-700 text-sm">Adapt question formats, scaling, and response options to match cultural communication styles and cognitive processing preferences</p>
                </Card>
                <Card className="p-4 border-l-4 border-proof-blue-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Data Collection</h4>
                  <p className="text-proof-gray-700 text-sm">Use local research partners, native language surveys, and culturally appropriate recruitment methods for each market</p>
                </Card>
                <Card className="p-4 border-l-4 border-proof-purple-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Statistical Analysis</h4>
                  <p className="text-proof-gray-700 text-sm">Apply measurement invariance testing and multi-group analysis to ensure segments are statistically equivalent across cultures</p>
                </Card>
                <Card className="p-4 border-l-4 border-proof-orange-500">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Validation & Implementation</h4>
                  <p className="text-proof-gray-700 text-sm">Test segment stability through hold-out samples and validate business performance across all target markets</p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Cultural Dimension Impact Analysis</h2>
              <Card className="p-6 bg-proof-gray-50 border-0">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-proof-green-600 mb-2">Power Distance</div>
                    <div className="text-sm font-semibold text-proof-gray-900 mb-1">Hierarchy Influence</div>
                    <p className="text-xs text-proof-gray-600">on brand preferences</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-proof-blue-600 mb-2">Individualism</div>
                    <div className="text-sm font-semibold text-proof-gray-900 mb-1">Personal vs. Group</div>
                    <p className="text-xs text-proof-gray-600">decision factors</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-proof-purple-600 mb-2">Uncertainty</div>
                    <div className="text-sm font-semibold text-proof-gray-900 mb-1">Risk Tolerance</div>
                    <p className="text-xs text-proof-gray-600">innovation adoption</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-proof-orange-600 mb-2">Long-term</div>
                    <div className="text-sm font-semibold text-proof-gray-900 mb-1">Orientation</div>
                    <p className="text-xs text-proof-gray-600">value priorities</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-proof-green-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Master Global Market Segmentation
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Download the complete 28-page research report with frameworks, case studies, and implementation tools for successful cross-cultural segmentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-green-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold">
              <Download className="mr-2 h-5 w-5" />
              Download Research Report
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-green-600 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">
                Discuss Global Segmentation
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-green-100">
            Free download • 28 pages • Implementation frameworks • Multi-country case studies
          </div>
        </div>
      </section>
    </div>
  )
}