import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Target, TrendingUp, BarChart3, ArrowRight, Zap, Store, Users, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function RetailImpactFactorPage() {
  console.log("Retail Impact Factor page rendered")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/aRZxodfct1P5dzw4wm6pq/retail-impact-factor.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Retail Impact
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-purple-600 to-proof-blue-600 block leading-[1.2]">Factor</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Measure and analyze the true impact of your retail strategies on customer behavior 
              and business outcomes with comprehensive impact factor analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-proof-purple-600 hover:bg-proof-purple-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Analyze Your Retail Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Retail Impact Factor */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">What is Retail Impact Factor?</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              A comprehensive analytical framework that identifies which retail elements drive the highest 
              ROI and customer engagement across all touchpoints.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border border-proof-purple-200 bg-proof-purple-50 p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-proof-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Core Purpose</h3>
                    <p className="text-proof-gray-700 leading-relaxed mb-6">
                      Retail Impact Factor analysis measures how different retail strategies and elements 
                      affect customer behavior, purchase decisions, and overall business performance.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-proof-gray-600">
                        <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                        Quantifies strategy effectiveness
                      </div>
                      <div className="flex items-center text-sm text-proof-gray-600">
                        <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                        Identifies high-impact touchpoints
                      </div>
                      <div className="flex items-center text-sm text-proof-gray-600">
                        <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                        Optimizes resource allocation
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 border border-proof-gray-200 rounded-lg">
                  <Store className="w-8 h-8 text-proof-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-sm text-proof-gray-900">Store Layout</h4>
                  <p className="text-xs text-proof-gray-600 mt-1">Optimize physical space</p>
                </div>
                <div className="text-center p-6 border border-proof-gray-200 rounded-lg">
                  <ShoppingCart className="w-8 h-8 text-proof-emerald-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-sm text-proof-gray-900">Product Placement</h4>
                  <p className="text-xs text-proof-gray-600 mt-1">Strategic positioning</p>
                </div>
                <div className="text-center p-6 border border-proof-gray-200 rounded-lg">
                  <Zap className="w-8 h-8 text-proof-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-sm text-proof-gray-900">Promotions</h4>
                  <p className="text-xs text-proof-gray-600 mt-1">Campaign effectiveness</p>
                </div>
                <div className="text-center p-6 border border-proof-gray-200 rounded-lg">
                  <Users className="w-8 h-8 text-proof-amber-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-sm text-proof-gray-900">Customer Journey</h4>
                  <p className="text-xs text-proof-gray-600 mt-1">Experience optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Analysis Framework */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">Impact Analysis Framework</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our systematic approach to measuring and optimizing retail impact across all customer touchpoints.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-proof-gray-200 p-8 h-full">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <BarChart3 className="w-8 h-8 text-proof-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900">Data Collection</h3>
                <p className="text-proof-gray-600 leading-relaxed">
                  Gather comprehensive data from all retail touchpoints including sales, customer behavior, 
                  and operational metrics.
                </p>
                <ul className="space-y-2 text-sm text-proof-gray-600 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                    Transaction data analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                    Customer behavior tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                    Operational metrics
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="bg-white border border-proof-gray-200 p-8 h-full">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-proof-purple-100 rounded-lg flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-proof-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900">Impact Modeling</h3>
                <p className="text-proof-gray-600 leading-relaxed">
                  Build statistical models to quantify the impact of each retail element on key 
                  business outcomes and customer behaviors.
                </p>
                <ul className="space-y-2 text-sm text-proof-gray-600 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                    Statistical modeling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                    Correlation analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                    Attribution modeling
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="bg-white border border-proof-gray-200 p-8 h-full">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-proof-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900">Optimization</h3>
                <p className="text-proof-gray-600 leading-relaxed">
                  Implement data-driven recommendations to optimize retail strategies and 
                  maximize impact on business outcomes.
                </p>
                <ul className="space-y-2 text-sm text-proof-gray-600 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                    Strategy recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                    Implementation roadmap
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                    Performance tracking
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Metrics & Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">Key Metrics & Insights</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Track the metrics that matter most for retail impact and business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-8">Performance Metrics</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-proof-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-proof-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Conversion Rate Improvement</h4>
                    <p className="text-sm text-proof-gray-600">Measure how retail changes affect customer purchase behavior and conversion rates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-proof-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-proof-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Average Transaction Value</h4>
                    <p className="text-sm text-proof-gray-600">Track impact on customer spending and basket size across different retail strategies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-proof-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-proof-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Customer Dwell Time</h4>
                    <p className="text-sm text-proof-gray-600">Analyze how store layout and design affect customer engagement and time spent.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-8">Business Impact</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-proof-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-proof-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Cross-selling Success Rate</h4>
                    <p className="text-sm text-proof-gray-600">Measure effectiveness of product placement and promotional strategies on additional sales.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-proof-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-proof-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">ROI by Strategy</h4>
                    <p className="text-sm text-proof-gray-600">Calculate return on investment for different retail initiatives and optimization efforts.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-proof-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Store className="w-5 h-5 text-proof-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Space Productivity</h4>
                    <p className="text-sm text-proof-gray-600">Optimize store layout and space utilization based on customer flow and sales data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-purple-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Optimize Your Retail Impact?
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Start measuring and improving your retail strategies with comprehensive impact factor analysis 
            tailored to your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-purple-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/contact">Schedule Your Retail Impact Analysis</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-purple-600 px-8 py-4 text-lg" asChild>
              <Link href="/resources/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

