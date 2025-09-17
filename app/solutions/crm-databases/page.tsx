import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Database, BarChart3, BrainCircuit, Target, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CrmDatabasesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/cUPpaiOasLbdcBS8duAqn/crm-database-analytic.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
              CRM Database Analytics
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Transform your customer data into actionable insights with advanced database analytics, 
              predictive modeling, and customer intelligence solutions that drive growth and retention.
            </p>
          </div>
        </div>
      </section>

      {/* CRM Analytics Solutions Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">CRM Analytics Solutions</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From customer segmentation to predictive insights, we provide the analytics you need to maximize customer value and drive business growth.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Retail Impact Factor */}
            <div id="retail-impact-factor" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Target className="h-12 w-12 text-proof-purple-600 mb-6" />
                <h3 className="text-2xl font-semibold text-proof-gray-900 mb-4">Retail Impact Factor</h3>
                <p className="text-lg text-proof-gray-600 mb-6">
                  Measure and analyze the true impact of your retail strategies on customer behavior and business outcomes. Our Retail Impact Factor analysis identifies which elements drive the highest ROI.
                </p>
                <ul className="text-proof-gray-600 space-y-2 mb-6">
                  <li>• Store layout and traffic flow optimization</li>
                  <li>• Product placement and merchandising analysis</li>
                  <li>• Promotional campaign effectiveness measurement</li>
                  <li>• Customer journey touchpoint optimization</li>
                  <li>• Cross-selling and upselling impact assessment</li>
                </ul>
                <Button className="bg-proof-purple-600 hover:bg-proof-purple-700 text-white" asChild>
                  <Link href="/solutions/crm-databases/retail-impact-factor">Learn About Retail Impact Analysis</Link>
                </Button>
              </div>
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0">
                <h4 className="text-lg font-semibold text-proof-gray-900 mb-4">Impact Metrics Dashboard</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-proof-gray-700">Conversion Rate</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-proof-gray-200 rounded-full mr-2">
                        <div className="w-20 h-2 bg-proof-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-bold text-proof-purple-600">+18%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-proof-gray-700">Average Transaction</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-proof-gray-200 rounded-full mr-2">
                        <div className="w-16 h-2 bg-proof-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-bold text-proof-blue-600">+12%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-proof-gray-700">Customer Dwell Time</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-proof-gray-200 rounded-full mr-2">
                        <div className="w-18 h-2 bg-proof-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-bold text-proof-purple-600">+25%</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* RFM Analysis */}
            <div id="rfm-analysis" className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 lg:order-1">
                <h4 className="text-lg font-semibold text-proof-gray-900 mb-4">RFM Customer Segments</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-bold text-proof-gray-900">Champions</div>
                    <div className="text-xs text-proof-gray-600">High R, F, M</div>
                    <div className="text-lg font-bold text-yellow-600 mt-1">15%</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="w-8 h-8 bg-proof-emerald-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-bold text-proof-gray-900">Loyal</div>
                    <div className="text-xs text-proof-gray-600">High F, M</div>
                    <div className="text-lg font-bold text-proof-emerald-600 mt-1">28%</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="w-8 h-8 bg-proof-blue-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-bold text-proof-gray-900">Potential</div>
                    <div className="text-xs text-proof-gray-600">High R, M</div>
                    <div className="text-lg font-bold text-proof-blue-600 mt-1">22%</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center border-2 border-orange-300">
                    <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-bold text-proof-gray-900">At-Risk</div>
                    <div className="text-xs text-proof-gray-600">Low R</div>
                    <div className="text-lg font-bold text-orange-600 mt-1">35%</div>
                  </div>
                </div>
              </Card>
              <div className="lg:order-2">
                <BarChart3 className="h-12 w-12 text-proof-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-proof-gray-900 mb-4">RFM Analysis</h3>
                <p className="text-lg text-proof-gray-600 mb-6">
                  Segment your customers based on Recency, Frequency, and Monetary value to identify your most valuable customers and create targeted marketing campaigns that maximize lifetime value.
                </p>
                <ul className="text-proof-gray-600 space-y-2 mb-6">
                  <li>• Customer segmentation and lifecycle analysis</li>
                  <li>• Behavioral pattern identification and tracking</li>
                  <li>• Targeted campaign development and optimization</li>
                  <li>• Loyalty program design and effectiveness</li>
                  <li>• Customer lifetime value prediction and modeling</li>
                </ul>
                <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white" asChild>
                  <Link href="/solutions/crm-databases/rfm-analysis">Explore RFM Analysis</Link>
                </Button>
              </div>
            </div>

            {/* Predictive Modeling */}
            <div id="predictive-modeling" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <BrainCircuit className="h-12 w-12 text-proof-emerald-600 mb-6" />
                <h3 className="text-2xl font-semibold text-proof-gray-900 mb-4">Predictive Modeling</h3>
                <p className="text-lg text-proof-gray-600 mb-6">
                  Leverage advanced machine learning algorithms and statistical models to predict customer behavior, identify risks, and optimize strategies based on data-driven insights and future projections.
                </p>
                <ul className="text-proof-gray-600 space-y-2 mb-6">
                  <li>• Customer churn prediction and early warning systems</li>
                  <li>• Lifetime value forecasting and revenue modeling</li>
                  <li>• Purchase propensity scoring and timing optimization</li>
                  <li>• Cross-sell and upsell opportunity identification</li>
                  <li>• Dynamic pricing and personalization algorithms</li>
                </ul>
                <Button className="bg-proof-emerald-600 hover:bg-proof-emerald-700 text-white" asChild>
                  <Link href="/solutions/crm-databases/predictive-modeling">Explore Predictive Modeling</Link>
                </Button>
              </div>
              <Card className="p-8 bg-gradient-to-br from-emerald-50 to-blue-50 border-0">
                <h4 className="text-lg font-semibold text-proof-gray-900 mb-4">Model Performance Metrics</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Churn Prediction</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">94% Accuracy</span>
                    </div>
                    <div className="text-xs text-proof-gray-600">Early detection: 60 days in advance</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">LTV Forecasting</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">91% Accuracy</span>
                    </div>
                    <div className="text-xs text-proof-gray-600">12-month revenue prediction</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Purchase Propensity</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">88% Accuracy</span>
                    </div>
                    <div className="text-xs text-proof-gray-600">Next purchase timing & product</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data Science Process Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-proof-gray-900 to-proof-purple-900 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Data Science Process</h3>
              <p className="text-purple-100 max-w-2xl mx-auto">
                From data extraction to model deployment, we follow a rigorous process to ensure 
                accurate insights and actionable recommendations.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Data Collection</h4>
                <p className="text-purple-100 text-sm">Gather and clean your CRM data</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Analysis</h4>
                <p className="text-purple-100 text-sm">Apply advanced analytics techniques</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BrainCircuit className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Modeling</h4>
                <p className="text-purple-100 text-sm">Build predictive models</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-yellow-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Implementation</h4>
                <p className="text-purple-100 text-sm">Deploy insights and track results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-purple-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your CRM Data?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our CRM analytics solutions can help you unlock customer insights and drive sustainable business growth through data-driven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-purple-600 hover:bg-proof-gray-50 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">Schedule CRM Analytics Consultation</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-purple-600 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/resources/case-studies">View CRM Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

