










import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Lightbulb, Package, Type, TestTube, CheckCircle, Star, DollarSign, Droplet, ArrowRight, Users, Target, Smartphone, Play } from 'lucide-react'
import Link from 'next/link'

export default function InnovationGrowthPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/5q8-wP4RW7tx9tx2zikw9/innovation-growth.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-white/65"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black mb-6">
              Innovation & Growth Research
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Validate concepts, optimize products, and accelerate growth with research that reduces risk and maximizes market success.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Services Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Innovation Research Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to market launch, we provide the insights you need to innovate with confidence.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Concept Testing */}
            <div id="concept-testing" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Lightbulb className="h-12 w-12 text-proof-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Concept Testing</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Validate your ideas before development begins. Our concept testing helps you understand market appeal, identify optimization opportunities, and predict market success.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Concept appeal and purchase intent measurement</li>
                  <li>• Competitive concept comparison</li>
                  <li>• Message clarity and believability testing</li>
                  <li>• Target audience identification</li>
                  <li>• Optimization recommendations</li>
                </ul>
                <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white" asChild>
                  <Link href="/solutions/innovation-growth/concept-testing">Learn About Concept Testing</Link>
                </Button>
              </div>
              <Link href="/resources/case-studies/flosser-oral-care-innovation">
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Droplet className="h-8 w-8 text-proof-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Healthcare
                        </Badge>
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Concept Testing
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-proof-blue-600 transition-colors">
                        Fresh Health | Oral Care Innovation
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How Fresh Health assessed market interest for their innovative 7-second custom-fit water-jet flosser, validated positioning statements, and determined optimal pricing strategy through comprehensive concept testing and ACBC analysis.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">50%+ Purchase Interest</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">Price Sensitivity Identified</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">Optimal Configuration</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium group-hover:text-proof-blue-600">
                      Read Full Case Study
                    </span>
                    <ArrowRight className="h-5 w-5 text-proof-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </div>

            {/* Package Testing */}
            <div id="package-testing" className="grid lg:grid-cols-2 gap-12 items-center">
              <Link href="/resources/case-studies/skincare-packaging-testing">
                <Card className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full lg:order-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Package className="h-8 w-8 text-proof-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-proof-purple-100 text-proof-purple-700 hover:bg-proof-purple-200">
                          Beauty & Cosmetics
                        </Badge>
                        <Badge className="bg-proof-purple-100 text-proof-purple-700 hover:bg-proof-purple-200">
                          Package Testing
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-proof-purple-600 transition-colors">
                        Evaluating New Packaging Designs for Skincare Products
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How comprehensive packaging evaluation across multiple markets revealed key design preferences and brand fit insights to optimize skincare product presentation and customer appeal.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">18-Min Survey</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">3 Global Markets</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">5 Product Categories</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium group-hover:text-proof-purple-600">
                      Read Full Case Study
                    </span>
                    <ArrowRight className="h-5 w-5 text-proof-purple-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <div className="lg:order-2">
                <Package className="h-12 w-12 text-proof-purple-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Package Testing</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Optimize your packaging for maximum shelf impact and consumer appeal. Our package testing evaluates design alternatives and provides clear guidance for final selection.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Shelf impact and visibility assessment</li>
                  <li>• Brand recognition and recall testing</li>
                  <li>• Purchase motivation evaluation</li>
                  <li>• Cross-competitive package comparison</li>
                  <li>• Design element optimization</li>
                </ul>
                <Button className="bg-proof-purple-600 hover:bg-proof-purple-700 text-white" asChild>
                  <Link href="/solutions/innovation-growth/package-testing">Explore Package Testing</Link>
                </Button>
              </div>
            </div>

            {/* Name Testing */}
            <div id="name-testing" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Type className="h-12 w-12 text-proof-green-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Name Testing</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Choose the perfect name for your product or brand. Our name testing evaluates memorability, appeal, and market potential across your target audience.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Name memorability and recall testing</li>
                  <li>• Brand fit and positioning alignment</li>
                  <li>• Pronunciation and spelling assessment</li>
                  <li>• Cultural and linguistic validation</li>
                  <li>• Trademark and domain availability check</li>
                </ul>
                <Button className="bg-proof-green-600 hover:bg-proof-green-700 text-white" asChild>
                  <Link href="/solutions/innovation-growth/name-testing">Learn About Name Testing</Link>
                </Button>
              </div>
              <Link href="/resources/case-studies/jeans-fit-naming-preferences">
                <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Type className="h-8 w-8 text-proof-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-proof-green-100 text-proof-green-700 hover:bg-proof-green-200">
                          Apparel
                        </Badge>
                        <Badge className="bg-proof-green-100 text-proof-green-700 hover:bg-proof-green-200">
                          Name Testing
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-proof-green-600 transition-colors">
                        Evaluating Jeans Fit Naming Preferences
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How comprehensive consumer research identified optimal fit names for "Relaxed Fit" and "Close Fit" jeans categories, enhancing product clarity and customer satisfaction through strategic naming decisions.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">512 Participants</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">14-Min Survey</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">0-10 Scale Rating</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium group-hover:text-proof-green-600">
                      Read Full Case Study
                    </span>
                    <ArrowRight className="h-5 w-5 text-proof-green-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </div>

            {/* Product Testing */}
            <div id="product-testing" className="grid lg:grid-cols-2 gap-12 items-center">
              <Link href="/resources/case-studies/mens-jeans-wear-test">
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full lg:order-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Users className="h-8 w-8 text-proof-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Apparel
                        </Badge>
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          Product Testing
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-proof-blue-600 transition-colors">
                        Men's Jeans Wear Test Evaluation
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How comprehensive wear testing revealed key consumer preferences for comfort, fit, and design features that drive purchase intent in the competitive men's jeans market.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">100 Male Participants</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">2-Week Testing</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">Age Group Analysis</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium group-hover:text-proof-blue-600">
                      Read Full Case Study
                    </span>
                    <ArrowRight className="h-5 w-5 text-proof-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <div className="lg:order-2">
                <TestTube className="h-12 w-12 text-proof-amber-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Product Testing</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Ensure your product meets market expectations before launch. Our product testing evaluates performance, usability, and market potential through real user experiences.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• In-home usage testing (IHUT)</li>
                  <li>• Competitive product comparison</li>
                  <li>• Performance attribute evaluation</li>
                  <li>• Sensory and usability testing</li>
                  <li>• Optimization recommendations</li>
                </ul>
                <Button className="bg-proof-amber-600 hover:bg-proof-amber-700 text-white" asChild>
                  <Link href="/solutions/innovation-growth/product-testing">Discover Product Testing</Link>
                </Button>
              </div>
            </div>

            {/* Ad Claim Validation */}
            <div id="ad-claim-validation" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <CheckCircle className="h-12 w-12 text-proof-green-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ad Claim Validation</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Validate your marketing claims with rigorous testing. Our claim validation ensures your messages are credible, compelling, and legally defensible.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Claim believability and credibility testing</li>
                  <li>• Competitive claim benchmarking</li>
                  <li>• Regulatory compliance verification</li>
                  <li>• Message hierarchy optimization</li>
                  <li>• Legal substantiation support</li>
                </ul>
                <Button className="bg-proof-green-600 hover:bg-proof-green-700 text-white" asChild>
                  <Link href="/solutions/innovation-growth/ad-claim-validation">Learn About Claim Validation</Link>
                </Button>
              </div>
              <Link href="/resources/case-studies/smart-gym-claims-test">
                <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Target className="h-8 w-8 text-proof-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-proof-green-100 text-proof-green-700 hover:bg-proof-green-200">
                          Consumer Goods
                        </Badge>
                        <Badge className="bg-proof-green-100 text-proof-green-700 hover:bg-proof-green-200">
                          MaxDiff Analysis
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-proof-green-600 transition-colors">
                        Smart Home Gym Claims Testing & Consumer Perception
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How a smart fitness equipment company evaluated consumer perceptions of product benefits and claims, optimizing messaging strategy to maximize purchase motivation.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">200 Participants</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">100% Claims Evaluated</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">2 Key Metrics</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium group-hover:text-proof-green-600">
                      Read Full Case Study
                    </span>
                    <ArrowRight className="h-5 w-5 text-proof-green-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </div>

            {/* Feature/Benefit Testing */}
            <div id="feature-benefit-testing" className="grid lg:grid-cols-2 gap-12 items-center">
              <Link href="/resources/case-studies/expert-reviews-app-features">
                <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full lg:order-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Smartphone className="h-8 w-8 text-proof-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-proof-purple-100 text-proof-purple-700 hover:bg-proof-purple-200">
                          Digital Media/Publications
                        </Badge>
                        <Badge className="bg-proof-purple-100 text-proof-purple-700 hover:bg-proof-purple-200">
                          Feature Testing
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-proof-purple-600 transition-colors">
                        Expert Reviews App Feature Testing
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Evaluating the most impactful features for an expert reviews and buying guides app using comprehensive Kano Analysis and user feedback.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">26-Min Survey</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">50% Subscription Increase</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">Ages 18+</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium group-hover:text-proof-purple-600">
                      Read Full Case Study
                    </span>
                    <ArrowRight className="h-5 w-5 text-proof-purple-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
              <div className="lg:order-2">
                <Star className="h-12 w-12 text-proof-amber-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Feature & Benefit Testing</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Prioritize features and benefits that matter most to your customers. Our testing helps you focus development resources on what drives purchase decisions.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Feature importance and preference testing</li>
                  <li>• Benefit hierarchy and messaging</li>
                  <li>• Trade-off analysis and optimization</li>
                  <li>• Usage and satisfaction correlation</li>
                  <li>• Development roadmap guidance</li>
                </ul>
                <Button className="bg-proof-amber-600 hover:bg-proof-amber-700 text-white" asChild>
                  <Link href="/solutions/innovation-growth/feature-benefit-testing">Explore Feature Testing</Link>
                </Button>
              </div>
            </div>

            {/* Pricing */}
            <div id="pricing" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <DollarSign className="h-12 w-12 text-proof-green-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pricing Research</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Set optimal prices that maximize revenue and market penetration. Our pricing research reveals price sensitivity, optimal price points, and competitive positioning.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Price sensitivity analysis</li>
                  <li>• Van Westendorp price testing</li>
                  <li>• Conjoint-based price optimization</li>
                  <li>• Competitive price benchmarking</li>
                  <li>• Revenue and volume modeling</li>
                </ul>
                <Button className="bg-proof-green-600 hover:bg-proof-green-700 text-white" asChild>
                  <Link href="/solutions/innovation-growth/pricing">Learn About Pricing Research</Link>
                </Button>
              </div>
              <Link href="/resources/case-studies/streaming-service-pricing">
                <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Play className="h-8 w-8 text-proof-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-proof-green-100 text-proof-green-700 hover:bg-proof-green-200">
                          Digital Media & Publications
                        </Badge>
                        <Badge className="bg-proof-green-100 text-proof-green-700 hover:bg-proof-green-200">
                          Conjoint Analysis
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-proof-green-600 transition-colors">
                        Streaming Service Pricing Optimization
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How conjoint analysis and customer segmentation revealed the optimal features and pricing strategy to maximize subscriptions and revenue in the competitive streaming market.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">18-Min Survey</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">3 Customer Segments</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700">Revenue Simulator</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium group-hover:text-proof-green-600">
                      Read Full Case Study
                    </span>
                    <ArrowRight className="h-5 w-5 text-proof-green-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Accelerate Your Innovation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovation research can help you develop products that customers love and markets demand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold" asChild>
              <a href="/contact">Schedule Innovation Consultation</a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 text-lg font-semibold" asChild>
              <a href="/resources/case-studies">View Innovation Case Studies</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
