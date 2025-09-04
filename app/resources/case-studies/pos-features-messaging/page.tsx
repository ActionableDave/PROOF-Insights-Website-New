import { Metadata } from 'next'
import { ArrowLeft, Clock, Users, Target, BarChart3, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'POS Features and Messaging Optimization | Case Study',
  description: 'Learn how we optimized POS system features and messaging for both current users and prospects through comprehensive message testing and TURF analysis.',
  keywords: 'POS system, message testing, feature analysis, TURF analysis, business technology, point of sale optimization',
}

export default function POSFeaturesMessagingCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/resources/case-studies">
            <Button variant="ghost" className="mb-4 hover:bg-blue-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">SaaS/Technology</Badge>
            <Badge variant="outline" className="border-purple-200 text-purple-700">Message Testing</Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-macaly="case-study-title">
            Optimizing POS Features and Messaging
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl" data-macaly="case-study-subtitle">
            Understanding optimal positioning for POS systems through comprehensive message testing and feature analysis across current users and prospects.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <img 
          src="https://images.pexels.com/photos/12935041/pexels-photo-12935041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
          alt="Person using digital POS system in a restaurant for cashless food payment"
          className="w-full h-full object-cover"
          data-macaly="hero-image"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Message Testing & Feature Optimization</h2>
            <p className="text-xl opacity-90">POS System Positioning Strategy</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">807</h3>
                  <p className="text-gray-600">Total Respondents</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">20 min</h3>
                  <p className="text-gray-600">Survey Duration</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">6</h3>
                  <p className="text-gray-600">Business Sectors</p>
                </CardContent>
              </Card>
            </div>

            {/* Objectives & Challenges */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Objectives & Challenges</h2>
                <p className="text-gray-700 mb-6">
                  Our client aimed to understand the optimal way to position their POS system to both current users and potential prospects. The primary objectives were to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    Gain feedback on potential marketing statements and concepts
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    Identify key features that resonate most with different business profiles
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    Understand the differences in needs and preferences between current users and prospects
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Visual Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/12935042/pexels-photo-12935042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="A digital point-of-sale system in a small fashion boutique with clothes displayed on a tablet"
                  className="w-full h-48 object-cover"
                  data-macaly="business-image"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Diverse Business Applications</h3>
                  <p className="text-sm text-gray-600">POS systems serve various business sectors from retail to hospitality.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7947851/pexels-photo-7947851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Close-up of hands holding a smartphone displaying a colorful bar graph"
                  className="w-full h-48 object-cover"
                  data-macaly="analytics-image"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
                  <p className="text-sm text-gray-600">Statistical analysis reveals optimal messaging strategies.</p>
                </CardContent>
              </Card>
            </div>

            {/* Approach */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Approach</h2>
                <p className="text-gray-700 mb-6">
                  To achieve these objectives, we conducted a comprehensive research study that included:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Concept Testing</h3>
                    <p className="text-gray-700">Evaluating various marketing statements and concepts to determine their effectiveness and appeal.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Feature Analysis</h3>
                    <p className="text-gray-700">Identifying the most important features for POS systems among different business profiles.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">TURF Analysis</h3>
                    <p className="text-gray-700">Using statistical techniques to maximize the reach of key features among the target audience.</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Target Audience</h4>
                  <p className="text-gray-700 mb-3">807 U.S. residents aged 25+, including:</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 403 current users and 404 prospects</li>
                    <li>• Independently owned businesses across Beauty & Personal Care, Food & Beverage, Healthcare & Fitness, Home & Repair, Professional Services, and Retail sectors</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
                <p className="text-gray-700 mb-6">
                  The study revealed several key insights:
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 bg-green-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Profiles</h3>
                    <p className="text-gray-700">Current users are more likely to be just starting up their business, have smaller revenue bases, and work alone or with few employees. Prospects tend to have established businesses with higher revenues and larger staffs.</p>
                  </div>
                  
                  <div className="p-6 bg-purple-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Feature Preferences</h3>
                    <p className="text-gray-700">Key features such as easy-to-use interfaces, processing payments without an internet connection, and managing the business from anywhere were highly valued.</p>
                  </div>
                  
                  <div className="p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Concept Ratings</h3>
                    <p className="text-gray-700">Concept #3 ("Passion, Not Paperwork") was rated highly for relevance and uniqueness, while Concept #2 ("Start Up and Grow") was found to be the most motivating.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits to the Client</h2>
                <p className="text-gray-700 mb-6">
                  The insights from this study provided the client with actionable data to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enhance Product Offerings</h3>
                    <p className="text-sm text-gray-600">Tailor POS system features to meet the preferences of different business profiles</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Improve Marketing Strategies</h3>
                    <p className="text-sm text-gray-600">Develop targeted messaging that resonates with both current users and prospects</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Boost Customer Success</h3>
                    <p className="text-sm text-gray-600">Implement strategies to attract new customers and retain existing ones</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Study Overview */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Study Overview</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Industry:</span>
                    <span className="text-gray-600 ml-2">SaaS/Technology</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Methodology:</span>
                    <span className="text-gray-600 ml-2">Message Testing</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Sample Size:</span>
                    <span className="text-gray-600 ml-2">807 respondents</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Duration:</span>
                    <span className="text-gray-600 ml-2">20-minute survey</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Market:</span>
                    <span className="text-gray-600 ml-2">United States</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Technologies */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">TURF Analysis</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">Concept Testing</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Statistical Analysis</Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">Online Surveys</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Visual Element */}
            <Card className="bg-white shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/12935066/pexels-photo-12935066.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Smiling cashier using a touchscreen POS system in a modern retail environment"
                className="w-full h-48 object-cover"
                data-macaly="sidebar-image"
              />
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Modern POS Solutions</h4>
                <p className="text-sm text-gray-600">User-friendly interfaces drive adoption across various business types</p>
              </CardContent>
            </Card>

            {/* Related Studies */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Studies</h3>
                <div className="space-y-3">
                  <Link href="/resources/case-studies/saas-pricing-optimization" className="block text-blue-600 hover:text-blue-800 text-sm">
                    SaaS Pricing Optimization →
                  </Link>
                  <Link href="/resources/case-studies/fintech-product-testing" className="block text-blue-600 hover:text-blue-800 text-sm">
                    FinTech Product Testing →
                  </Link>
                  <Link href="/resources/case-studies/streaming-service-pricing" className="block text-blue-600 hover:text-blue-800 text-sm">
                    Streaming Service Pricing →
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Product Messaging?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you identify the most effective messaging strategies for your target audience.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}