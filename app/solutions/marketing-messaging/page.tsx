
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { ArrowLeft, Target, TrendingUp, BarChart3, MessageSquare, Eye, Zap } from 'lucide-react'

export default function MarketingMessagingPage() {
  console.log("Marketing and Messaging page rendered")

  return (
    <div className="min-h-screen bg-gradient-to-br from-proof-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/QlvYYOIXmzRAL2RYcIpFN/marketing-messaging.png)'}}>
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Marketing and Messaging
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto mb-8">
            Optimize your marketing campaigns and messaging to resonate with your target audience, 
            drive engagement, and maximize your marketing ROI through data-driven insights.
          </p>
          <Button className="bg-proof-purple-600 text-white hover:bg-proof-purple-700 px-8 py-3 text-lg font-semibold" asChild>
            <Link href="/contact">Start Your Marketing & Messaging Research</Link>
          </Button>
        </div>
      </div>

      {/* Sub-panels Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Our Marketing Research Services</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From messaging optimization to ad effectiveness, we help you create compelling marketing campaigns that drive results.
            </p>
          </div>

          {/* Messaging & Positioning */}
          <section id="messaging-positioning" className="mb-20">
            <Card className="bg-white p-8 shadow-lg border-l-4 border-proof-blue-600">
              <div className="flex items-start space-x-6">
                <div className="bg-proof-blue-100 p-4 rounded-full">
                  <MessageSquare className="h-8 w-8 text-proof-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-proof-gray-900 mb-4">Messaging & Positioning</h3>
                  <p className="text-proof-gray-600 mb-6 leading-relaxed">
                    Develop compelling brand messaging and positioning strategies that resonate with your target audience. 
                    We test different messaging approaches, value propositions, and brand positioning to identify what 
                    drives the strongest emotional connection and purchase intent.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-proof-gray-800 mb-3">Research Methods:</h4>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-purple-600 rounded-full mr-3"></div>
                          Message testing & optimization
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-purple-600 rounded-full mr-3"></div>
                          Brand positioning studies
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-purple-600 rounded-full mr-3"></div>
                          Value proposition analysis
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-purple-600 rounded-full mr-3"></div>
                          Perceptual Mapping
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-proof-gray-800 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                          Clear brand differentiation
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                          Improved message recall
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                          Enhanced brand perception
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                          Stronger emotional connection
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Link href="/solutions/marketing-messaging/messaging-positioning" className="text-proof-blue-600 hover:text-proof-blue-700 font-semibold">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Ad Optimization */}
          <section id="ad-optimization" className="mb-20">
            <Card className="bg-white p-8 shadow-lg border-l-4 border-proof-purple-600">
              <div className="flex items-start space-x-6">
                <div className="bg-proof-purple-100 p-4 rounded-full">
                  <TrendingUp className="h-8 w-8 text-proof-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-proof-gray-900 mb-4">Ad Optimization</h3>
                  <p className="text-proof-gray-600 mb-6 leading-relaxed">
                    Maximize your advertising ROI through systematic testing and optimization of creative elements, 
                    copy, targeting, and media placement. Our research helps you identify the most effective 
                    combinations to drive engagement and conversions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-proof-gray-800 mb-3">Optimization Areas:</h4>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-purple-600 rounded-full mr-3"></div>
                          Creative concepts & visuals
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-purple-600 rounded-full mr-3"></div>
                          Headlines & copy highlighting (likes/dislikes)
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-purple-600 rounded-full mr-3"></div>
                          Call-to-action messaging
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-purple-600 rounded-full mr-3"></div>
                          Media channel selection
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-proof-gray-800 mb-3">Key Metrics:</h4>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                          Click-through rates (CTR)
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                          Conversion rates
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                          Cost per acquisition
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                          Brand lift & recall
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Link href="/solutions/marketing-messaging/ad-optimization" className="text-proof-purple-600 hover:text-proof-purple-700 font-semibold">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Ad Effectiveness */}
          <section id="ad-effectiveness" className="mb-20">
            <Card className="bg-white p-8 shadow-lg border-l-4 border-proof-green-600">
              <div className="flex items-start space-x-6">
                <div className="bg-proof-green-100 p-4 rounded-full">
                  <BarChart3 className="h-8 w-8 text-proof-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-proof-gray-900 mb-4">Ad Effectiveness</h3>
                  <p className="text-proof-gray-600 mb-6 leading-relaxed">
                    Measure and analyze the true impact of your advertising campaigns across all touchpoints. 
                    We help you understand which campaigns drive brand awareness, consideration, and actual 
                    purchase behavior to optimize your marketing investment.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-proof-gray-800 mb-3">Measurement Focus:</h4>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-green-600 rounded-full mr-3"></div>
                          Brand awareness lift
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-green-600 rounded-full mr-3"></div>
                          Purchase intent change
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-green-600 rounded-full mr-3"></div>
                          Message comprehension
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-green-600 rounded-full mr-3"></div>
                          Campaign attribution
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-proof-gray-800 mb-3">Analysis Types:</h4>
                      <ul className="space-y-2 text-proof-gray-600">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                          Pre/post campaign analysis
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                          Multi-touch attribution
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                          Cross-channel impact
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                          ROI calculation
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Link href="/solutions/marketing-messaging/ad-effectiveness" className="text-proof-green-600 hover:text-proof-green-700 font-semibold">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-proof-blue-600 to-proof-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Optimize Your Marketing Performance?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let our marketing research experts help you create more effective campaigns, 
              improve your messaging, and maximize your marketing ROI.
            </p>
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">Start Your Marketing Research</Link>
            </Button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
