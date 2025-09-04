import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Target, TrendingUp, Users, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SnackConceptTestingPage() {
  console.log('Snack Concept Testing case study page rendered')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources/case-studies" className="inline-flex items-center text-proof-orange-600 hover:text-proof-orange-700 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-proof-orange-100 text-proof-orange-700 hover:bg-proof-orange-200">
              Food & Restaurants
            </Badge>
            <Badge className="bg-proof-orange-100 text-proof-orange-700 hover:bg-proof-orange-200">
              Concept Testing
            </Badge>
          </div>
          
          <h1 className="text-5xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
            Evaluating Snack Concept Potential
          </h1>
          <p className="text-xl text-proof-gray-600 leading-relaxed" data-macaly="hero-description">
            How comprehensive concept testing revealed the most promising snack innovations and identified market opportunities worth 15% brand reach expansion.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-proof-orange-600 mb-2">21</div>
              <div className="text-proof-gray-600">Minutes Survey</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-orange-600 mb-2">15%</div>
              <div className="text-proof-gray-600">Brand Reach Expansion</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-orange-600 mb-2">3</div>
              <div className="text-proof-gray-600">Top Snack Concepts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            
            {/* Challenge */}
            <Card className="p-8 bg-gradient-to-r from-orange-50 to-amber-50 border-0">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Target className="h-8 w-8 text-proof-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-proof-gray-900 mb-4">Objectives & Challenges</h2>
                  <p className="text-proof-gray-600 leading-relaxed" data-macaly="challenge-description">
                    Our client aimed to evaluate potential snack concepts to gauge consumer interest and determine which combinations would yield the highest market reach. The primary objectives were to assess consumer interest in various snack concepts, identify the most promising snack concepts for market introduction, and understand the preferences and behaviors of different consumer segments regarding snack consumption.
                  </p>
                </div>
              </div>
            </Card>

            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg" data-macaly="hero-image">
              <Image
                src="https://images.pexels.com/photos/10111953/pexels-photo-10111953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Close-up of roasted chickpeas showcasing golden texture and healthy snack concept"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">Roasted chickpeas emerged as a top concept in our comprehensive testing</p>
              </div>
            </div>

            {/* Approach */}
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-0">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <BarChart3 className="h-8 w-8 text-proof-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-proof-gray-900 mb-6">Research Approach</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Concept Testing Methodology</h3>
                      <p className="text-proof-gray-600 leading-relaxed mb-4" data-macaly="approach-description">
                        We tested multiple snack concepts to evaluate consumer interest and purchase intent through a comprehensive 21-minute online survey administered to a large sample of snack consumers.
                      </p>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Market sizing estimation for each snack concept based on survey responses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Segment analysis across general population salty snackers, on-the-go segment, healthy body/mind segment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Cross-validation with additional data sources and client feedback</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Target Audience Image */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg" data-macaly="audience-image">
              <Image
                src="https://images.pexels.com/photos/20187357/pexels-photo-20187357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Woman selecting crisps in supermarket aisle representing target snack consumers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">Target audience: Adults 18-59 with $25K+ household income who purchase salty snacks</p>
              </div>
            </div>

            {/* Target Audience */}
            <Card className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-0">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Users className="h-8 w-8 text-proof-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-proof-gray-900 mb-4">Target Audience</h2>
                  <p className="text-proof-gray-600 leading-relaxed" data-macaly="audience-description">
                    Adults aged 18-59, living in the U.S., with a household income of $25K+ if not a student, who are primary or shared decision-makers for household grocery shopping and have purchased salty snacks in the past three months.
                  </p>
                </div>
              </div>
            </Card>

            {/* Results */}
            <Card className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 border-0">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <TrendingUp className="h-8 w-8 text-proof-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-proof-gray-900 mb-6">Key Results</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Top Performing Concepts</h3>
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-proof-purple-600 mb-1">#1</div>
                          <div className="font-semibold text-proof-gray-900">Chickpea Snack Mix</div>
                          <div className="text-sm text-proof-gray-600">Highest purchase interest</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-proof-purple-600 mb-1">#2</div>
                          <div className="font-semibold text-proof-gray-900">Chickpea Crisps</div>
                          <div className="text-sm text-proof-gray-600">Strong appeal across segments</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-proof-purple-600 mb-1">#3</div>
                          <div className="font-semibold text-proof-gray-900">Flavor-Blasted Puffs</div>
                          <div className="text-sm text-proof-gray-600">High convenience appeal</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Market Impact</h3>
                      <p className="text-proof-gray-600 leading-relaxed" data-macaly="results-description">
                        The study determined that introducing any one of these top three products would expand the client's brand reach by at least 15%. Additionally, detailed insights into the preferences of different consumer segments highlighted which snacks are most appealing to each group.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Concept Visualization */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg" data-macaly="concept-image">
              <Image
                src="https://images.pexels.com/photos/13463686/pexels-photo-13463686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Dynamic shot of snack pieces falling into bowl representing concept testing and innovation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">Dynamic concept testing revealed innovative snack opportunities</p>
              </div>
            </div>

            {/* Benefits */}
            <Card className="p-8 bg-gradient-to-r from-amber-50 to-orange-50 border-0">
              <h2 className="text-2xl font-bold text-proof-gray-900 mb-6">Benefits to the Client</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-proof-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-proof-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Product Development</h3>
                  <p className="text-proof-gray-600">Focus on developing and launching the most promising snack concepts to maximize market reach and consumer satisfaction.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-proof-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-proof-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Marketing Strategies</h3>
                  <p className="text-proof-gray-600">Tailor marketing messages to resonate with key consumer segments, emphasizing the unique benefits and appeal of the top snack concepts.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-proof-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-proof-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Brand Positioning</h3>
                  <p className="text-proof-gray-600">Strengthen the brand's position in the market by introducing innovative and highly appealing snack options that meet consumer needs and preferences.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-orange-600 to-proof-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Test Your Product Concepts?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's help you identify the most promising concepts and maximize your market potential through proven research methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-proof-orange-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold">
                Schedule Consultation
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-orange-600 px-8 py-3 font-semibold">
              Learn About Concept Testing
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}