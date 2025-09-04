import { Metadata } from 'next'
import { ArrowLeft, Clock, Users, Target, Smartphone, CheckCircle, Star, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Expert Reviews App Feature Testing | Case Study',
  description: 'Learn how we evaluated app features for an expert reviews platform using Kano Analysis to prioritize features that attract and retain users.',
  keywords: 'app feature testing, expert reviews, Kano analysis, mobile app development, user experience, feature prioritization',
}

export default function ExpertReviewsAppCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/resources/case-studies">
            <Button variant="ghost" className="mb-4 hover:bg-indigo-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Digital Media/Publications</Badge>
            <Badge variant="outline" className="border-purple-200 text-purple-700">Feature Testing</Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-macaly="case-study-title">
            Expert Reviews App Feature Testing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl" data-macaly="case-study-subtitle">
            Evaluating the most impactful features for an expert reviews and buying guides app using comprehensive Kano Analysis and user feedback.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <img 
          src="https://images.pexels.com/photos/7793694/pexels-photo-7793694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
          alt="Two professionals analyzing data and graphs with smartphones on a white table"
          className="w-full h-full object-cover"
          data-macaly="hero-image"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Feature Testing & Prioritization</h2>
            <p className="text-xl opacity-90">Expert Reviews App Development</p>
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
                  <Clock className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">26 min</h3>
                  <p className="text-gray-600">Survey Duration</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Smartphone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">50%</h3>
                  <p className="text-gray-600">Subscription Increase</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">18+</h3>
                  <p className="text-gray-600">Target Age Range</p>
                </CardContent>
              </Card>
            </div>

            {/* Objectives & Challenges */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Objectives & Challenges</h2>
                <p className="text-gray-700 mb-6">
                  Our client aimed to assess the potential impact of a new app designed to provide expert reviews and buying guides. The primary objectives were to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    Determine the most impactful features for the app to attract and retain users
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    Understand user preferences and behaviors related to expert reviews and buying guides
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    Evaluate the likelihood of users downloading and using the app
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Visual Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3912958/pexels-photo-3912958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Engineer testing a wearable prototype using a smartphone interface at a desk"
                  className="w-full h-48 object-cover"
                  data-macaly="development-image"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">App Development & Testing</h3>
                  <p className="text-sm text-gray-600">Rigorous testing ensures optimal user experience and feature functionality.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6569661/pexels-photo-6569661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Hand holding smartphone showing real-time analytics graph in a dimly lit room"
                  className="w-full h-48 object-cover"
                  data-macaly="analytics-image"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
                  <p className="text-sm text-gray-600">Real-time analytics guide feature prioritization and user engagement strategies.</p>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Feature Evaluation</h3>
                    <p className="text-gray-700">We assessed various app features to identify which ones would be most appealing to users through comprehensive data collection and analysis.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Kano Analysis</h3>
                    <p className="text-gray-700">Using this technique to prioritize features based on their ability to satisfy user needs and create delight, distinguishing between basic, performance, and excitement features.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">User Feedback Collection</h3>
                    <p className="text-gray-700">Gathering qualitative feedback to understand user sentiments and preferences regarding expert reviews and buying guide functionality.</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Target Audience</h4>
                  <p className="text-gray-700 mb-3">Adults aged 18+ in the US who:</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Own a smartphone and use at least one app regularly</li>
                    <li>• Access expert reviews and buying guides</li>
                    <li>• Include both general population users and current users of the client's services</li>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Star className="w-5 h-5 text-green-600 mr-2" />
                      Feature Preferences
                    </h3>
                    <p className="text-gray-700">Users showed strong interest in features that save time, effort, and money, such as product comparisons, deal alerts, and barcode searches.</p>
                  </div>
                  
                  <div className="p-6 bg-purple-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="w-5 h-5 text-purple-600 mr-2" />
                      User Segmentation
                    </h3>
                    <p className="text-gray-700">Different user groups (general population vs. current users) had varying preferences, with current users placing higher value on expert reviews and personalized recommendations.</p>
                  </div>
                  
                  <div className="p-6 bg-indigo-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <BarChart3 className="w-5 h-5 text-indigo-600 mr-2" />
                      App Impact
                    </h3>
                    <p className="text-gray-700">The app was found to significantly increase the likelihood of users subscribing to the client's services, with 50% of current subscribers indicating they would be more likely to renew their subscription.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features Identified */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features Identified</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Essential Features</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Product comparisons</li>
                      <li>• Deal alerts and notifications</li>
                      <li>• Expert review access</li>
                      <li>• User-friendly interface</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Delighter Features</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Barcode scanning capability</li>
                      <li>• Personalized recommendations</li>
                      <li>• Price tracking over time</li>
                      <li>• Social sharing options</li>
                    </ul>
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
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Prioritize App Features</h3>
                    <p className="text-sm text-gray-600">Focus development on features most likely to attract and retain users</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Smartphone className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enhance User Experience</h3>
                    <p className="text-sm text-gray-600">Tailor the app to meet specific needs of different user segments</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Increase Subscriptions</h3>
                    <p className="text-sm text-gray-600">Leverage app features to boost subscription rates and renewals</p>
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
                    <span className="text-gray-600 ml-2">Digital Media/Publications</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Methodology:</span>
                    <span className="text-gray-600 ml-2">Feature Testing</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Duration:</span>
                    <span className="text-gray-600 ml-2">26-minute survey</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Target Age:</span>
                    <span className="text-gray-600 ml-2">Adults 18+</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Market:</span>
                    <span className="text-gray-600 ml-2">United States</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Methodologies */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Methodologies</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Kano Analysis</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">Feature Testing</Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-800">User Segmentation</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Qualitative Feedback</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Visual Element */}
            <Card className="bg-white shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5053847/pexels-photo-5053847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Close-up of hands interacting with a smartphone, displaying downloading interface"
                className="w-full h-48 object-cover"
                data-macaly="sidebar-image"
              />
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Mobile App Experience</h4>
                <p className="text-sm text-gray-600">Intuitive interfaces drive user adoption and engagement</p>
              </CardContent>
            </Card>

            {/* App Features Highlight */}
            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Rated Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Product Comparisons</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Deal Alerts</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Barcode Search</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Expert Reviews</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Studies */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Studies</h3>
                <div className="space-y-3">
                  <Link href="/resources/case-studies/smart-gym-claims-test" className="block text-indigo-600 hover:text-indigo-800 text-sm">
                    Smart Gym Claims Testing →
                  </Link>
                  <Link href="/resources/case-studies/digital-brand-consolidation" className="block text-indigo-600 hover:text-indigo-800 text-sm">
                    Digital Brand Consolidation →
                  </Link>
                  <Link href="/resources/case-studies/fintech-product-testing" className="block text-indigo-600 hover:text-indigo-800 text-sm">
                    FinTech Product Testing →
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your App Features?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let us help you identify and prioritize the features that will drive user adoption and retention.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}