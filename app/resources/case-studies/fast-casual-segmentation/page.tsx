import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Users, TrendingUp, Target, BarChart3, Zap, Award, ShoppingCart, Lightbulb, DollarSign, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function FastCasualSegmentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 hover:text-proof-blue-700 transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Case Studies
                </Link>
                <div className="flex gap-2">
                  <Badge className="bg-orange-100 text-orange-700">Food & Restaurants</Badge>
                  <Badge className="bg-red-100 text-red-700">Segmentation</Badge>
                </div>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Understanding the Fast Casual Dining Landscape
              </h1>
              <p className="text-xl text-proof-gray-600 leading-relaxed">
                How advanced segmentation analysis revealed key customer insights that transformed menu development, messaging strategies, and customer acquisition for a leading fast casual brand.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.pexels.com/photos/9632629/pexels-photo-9632629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Young woman collecting her pizza order at a fast casual restaurant, representing customer experience"
                  width={940}
                  height={650}
                  className="object-cover w-full h-full"
                  data-macaly="hero-fast-casual-customer"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">40</div>
              <div className="text-proof-gray-600">Minute Survey</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">18-64</div>
              <div className="text-proof-gray-600">Age Range</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">$25K+</div>
              <div className="text-proof-gray-600">Household Income</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">Multiple</div>
              <div className="text-proof-gray-600">Key Segments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Challenge */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">The Challenge</h2>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg">
                <p className="text-proof-gray-700 leading-relaxed mb-6">
                  Our client aimed to gain a deeper understanding of fast casual diners and segment the audience into actionable groups. The primary objectives were to:
                </p>
                <ul className="space-y-3 text-proof-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Identify key segments to shape menu items, messaging, new product development, and acquisition/retention efforts
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Test compelling value propositions to determine what resonates most to drive conversion
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Understand the competitive landscape and emerging trends in the fast casual dining sector
                  </li>
                </ul>
              </div>
            </div>

            {/* Approach */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-lg mr-4">
                  <BarChart3 className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Our Strategic Approach</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-orange-100">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Segmentation Research</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      Performed detailed segmentation analysis to categorize diners into distinct groups based on dining behaviors, preferences, and demographics.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• Extensive data collection through surveys</li>
                      <li>• Statistical cluster analysis techniques</li>
                      <li>• Detailed profile development for each segment</li>
                      <li>• Cross-validation with client feedback</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-red-100">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-6 w-6 text-red-600 mr-3" />
                      <h3 className="text-xl font-semibold text-proof-gray-900">Geographic Coverage</h3>
                    </div>
                    <p className="text-proof-gray-700 mb-4">
                      Comprehensive study across the client's operational footprint, ensuring regional insights and local market understanding.
                    </p>
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li>• Adults aged 18-64 in operational areas</li>
                      <li>• Household income threshold $25K+</li>
                      <li>• Significant client customer inclusion</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/5953621/pexels-photo-5953621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Woman reading menu in restaurant, representing customer decision-making process"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="approach-customer-experience"
                    />
                  </div>
                </div>
              </div>

              {/* Methodology Deep Dive */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-6 flex items-center">
                  <Clock className="h-6 w-6 text-orange-600 mr-3" />
                  Comprehensive 40-Minute Survey Methodology
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Data Collection Process</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Dining behavior pattern analysis</li>
                      <li>• Preference mapping across menu categories</li>
                      <li>• Brand perception and competitive analysis</li>
                      <li>• Value proposition testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-3">Statistical Techniques</h4>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Advanced cluster analysis algorithms</li>
                      <li>• Natural grouping identification</li>
                      <li>• Cross-segment validation</li>
                      <li>• Actionable profile development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Key Market Insights</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/5953531/pexels-photo-5953531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Chef slicing freshly prepared pizza, showcasing food quality and preparation"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="results-food-quality"
                    />
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg">
                    <p className="text-proof-gray-700 leading-relaxed mb-6">
                      The comprehensive segmentation analysis revealed critical insights that transformed our understanding of the fast casual dining landscape:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">📊 Visitation Patterns</h3>
                        <p className="text-sm text-proof-gray-700">
                          Detailed insights into frequency and timing preferences across different customer segments, revealing distinct dining behavior patterns.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">🎯 Customer Preferences</h3>
                        <p className="text-sm text-proof-gray-700">
                          Identification of most important features for restaurant choice, enabling targeted menu and service optimization.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-proof-gray-900 mb-2">🏆 Brand Perception</h3>
                        <p className="text-sm text-proof-gray-700">
                          Positive brand perceptions identified with clear strengths and specific improvement opportunities across segments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Integration */}
            <div className="mb-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-100 rounded-lg mr-4">
                      <Zap className="h-8 w-8 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-proof-gray-900">Modern Fast Casual Evolution</h2>
                  </div>
                  <p className="text-proof-gray-700 leading-relaxed">
                    Our research revealed how technology integration and customer experience innovation are reshaping the fast casual landscape, with segments showing varying preferences for digital ordering, customization options, and service speed.
                  </p>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-proof-gray-900 mb-3">Segment-Specific Technology Adoption</h3>
                    <ul className="space-y-2 text-proof-gray-700">
                      <li>• Digital ordering preferences by demographic</li>
                      <li>• Mobile app engagement patterns</li>
                      <li>• Self-service kiosk usage rates</li>
                      <li>• Loyalty program participation drivers</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.pexels.com/photos/12935088/pexels-photo-12935088.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                      alt="Customer using touchscreen technology at restaurant, showcasing modern fast casual innovation"
                      width={940}
                      height={650}
                      className="object-cover w-full h-full"
                      data-macaly="technology-integration"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-lg mr-4">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-proof-gray-900 m-0">Strategic Business Impact</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-0">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-6 w-6 text-orange-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Enhanced Menu Offerings</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Tailored menu items to meet specific preferences of different customer segments, improving satisfaction and frequency.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-0">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-red-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Improved Marketing Strategies</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Developed targeted messaging that resonates with key customer segments, increasing campaign effectiveness.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-0">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-orange-600 mr-3" />
                    <h3 className="font-semibold text-proof-gray-900">Boosted Customer Retention</h3>
                  </div>
                  <p className="text-proof-gray-700">
                    Implemented strategies focusing on most valued restaurant features, enhancing loyalty and repeat visits.
                  </p>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Understand Your Customer Segments?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's help you identify actionable customer segments that drive menu development, marketing strategies, and business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 font-semibold">
                Start Segmentation Research
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 font-semibold">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}