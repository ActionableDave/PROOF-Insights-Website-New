import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, BrainCircuit, Target, TrendingUp, Zap, Database, Users, AlertTriangle, BarChart3, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function PredictiveModelingPage() {
  console.log("Predictive Modeling page rendered")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24"
        style={{
          backgroundImage: `url('https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/cpQgCuXQPHnHcauuuZIdF/predictive-analytics.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Predictive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-emerald-600 to-proof-blue-600 block leading-[1.2]">Modeling</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Leverage advanced machine learning algorithms and statistical models to predict customer behavior, 
              identify risks, and optimize business strategies with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-proof-emerald-600 hover:bg-proof-emerald-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  Build Predictive Models
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Predictive Modeling */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">What is Predictive Modeling?</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              A data science technique that uses historical data and machine learning algorithms to forecast 
              future outcomes and customer behaviors with statistical confidence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border border-proof-emerald-200 bg-proof-emerald-50 p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Core Approach</h3>
                    <p className="text-proof-gray-700 leading-relaxed mb-6">
                      Predictive modeling analyzes patterns in historical customer data to create mathematical 
                      models that can forecast future behaviors, preferences, and business outcomes.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-proof-gray-600">
                        <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />AI algorithms</div>
                      <div className="flex items-center text-sm text-proof-gray-600">
                        <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                        Statistical validation
                      </div>
                      <div className="flex items-center text-sm text-proof-gray-600">
                        <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                        Continuous learning
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 border border-proof-gray-200 rounded-lg">
                  <Database className="w-8 h-8 text-proof-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-sm text-proof-gray-900">Data Mining</h4>
                  <p className="text-xs text-proof-gray-600 mt-1">Pattern discovery</p>
                </div>
                <div className="text-center p-6 border border-proof-gray-200 rounded-lg">
                  <Cpu className="w-8 h-8 text-proof-emerald-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-sm text-proof-gray-900">LLM Leverage</h4>
                  <p className="text-xs text-proof-gray-600 mt-1">Advanced analytics</p>
                </div>
                <div className="text-center p-6 border border-proof-gray-200 rounded-lg">
                  <BarChart3 className="w-8 h-8 text-proof-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-sm text-proof-gray-900">Forecasting</h4>
                  <p className="text-xs text-proof-gray-600 mt-1">Future predictions</p>
                </div>
                <div className="text-center p-6 border border-proof-gray-200 rounded-lg">
                  <Target className="w-8 h-8 text-proof-amber-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-sm text-proof-gray-900">Optimization</h4>
                  <p className="text-xs text-proof-gray-600 mt-1">Strategy improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prediction Models */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">Key Prediction Models</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of predictive models designed to address critical business challenges and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border border-proof-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">Customer Churn Prediction</h3>
                  <p className="text-proof-gray-600 text-sm leading-relaxed">
                    Identify customers likely to cancel or stop purchasing before it happens.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-proof-gray-600">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Early warning indicators
                </div>
                <div className="flex items-center text-sm text-proof-gray-600">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Risk scoring models
                </div>
                <div className="flex items-center text-sm text-proof-gray-600">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Retention campaign targeting
                </div>
              </div>
            </Card>

            <Card className="bg-white border border-proof-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-proof-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">Lifetime Value Forecasting</h3>
                  <p className="text-proof-gray-600 text-sm leading-relaxed">
                    Predict the total value a customer will bring to your business over time.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-proof-gray-600">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Revenue projections
                </div>
                <div className="flex items-center text-sm text-proof-gray-600">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Customer value ranking
                </div>
                <div className="flex items-center text-sm text-proof-gray-600">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Investment prioritization
                </div>
              </div>
            </Card>

            <Card className="bg-white border border-proof-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-proof-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">Purchase Propensity Scoring</h3>
                  <p className="text-proof-gray-600 text-sm leading-relaxed">
                    Calculate the likelihood of customers to purchase specific products or services.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-proof-gray-600">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Product-specific scores
                </div>
                <div className="flex items-center text-sm text-proof-gray-600">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Timing predictions
                </div>
                <div className="flex items-center text-sm text-proof-gray-600">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Targeted recommendations
                </div>
              </div>
            </Card>

            <Card className="bg-white border border-proof-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-proof-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-proof-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">Cross-sell/Upsell Optimization</h3>
                  <p className="text-proof-gray-600 text-sm leading-relaxed">
                    Identify the best opportunities to sell additional or upgraded products to existing customers.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-proof-gray-600">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Product affinity analysis
                </div>
                <div className="flex items-center text-sm text-proof-gray-600">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Optimal timing models
                </div>
                <div className="flex items-center text-sm text-proof-gray-600">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Revenue optimization
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Modeling Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">Modeling Process</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to building, validating, and deploying predictive models that drive business results.
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-2">
              {/* Step 1 */}
              <div className="flex-1 relative">
                <div className="bg-white border-2 border-proof-emerald-600 rounded-lg p-6 shadow-sm h-full flex flex-col">
                  <div className="flex flex-col items-center text-center flex-grow">
                    <div className="w-12 h-12 bg-proof-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                    <h3 className="font-semibold text-base mb-3 text-proof-emerald-700">Data Preparation</h3>
                    <p className="text-sm text-proof-gray-600 leading-relaxed flex-grow">Clean, transform, and engineer features from raw customer data</p>
                  </div>
                </div>
                {/* Arrow pointing right */}
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <svg width="32" height="24" viewBox="0 0 32 24" className="text-proof-emerald-600">
                    <path d="M20 4 L28 12 L20 20 M28 12 L4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex-1 relative">
                <div className="bg-white border-2 border-proof-blue-600 rounded-lg p-6 shadow-sm h-full flex flex-col">
                  <div className="flex flex-col items-center text-center flex-grow">
                    <div className="w-12 h-12 bg-proof-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                    <h3 className="font-semibold text-base mb-3 text-proof-blue-700">LLM Leverage</h3>
                    <p className="text-sm text-proof-gray-600 leading-relaxed flex-grow">Apply machine learning algorithms to identify patterns and relationships</p>
                  </div>
                </div>
                {/* Arrow pointing right */}
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <svg width="32" height="24" viewBox="0 0 32 24" className="text-proof-blue-600">
                    <path d="M20 4 L28 12 L20 20 M28 12 L4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex-1 relative">
                <div className="bg-white border-2 border-proof-purple-600 rounded-lg p-6 shadow-sm h-full flex flex-col">
                  <div className="flex flex-col items-center text-center flex-grow">
                    <div className="w-12 h-12 bg-proof-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                    <h3 className="font-semibold text-base mb-3 text-proof-purple-700">Validation</h3>
                    <p className="text-sm text-proof-gray-600 leading-relaxed flex-grow">Test model accuracy and performance using holdout datasets</p>
                  </div>
                </div>
                {/* Arrow pointing right */}
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <svg width="32" height="24" viewBox="0 0 32 24" className="text-proof-purple-600">
                    <path d="M20 4 L28 12 L20 20 M28 12 L4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex-1">
                <div className="bg-white border-2 border-proof-gray-600 rounded-lg p-6 shadow-sm h-full flex flex-col">
                  <div className="flex flex-col items-center text-center flex-grow">
                    <div className="w-12 h-12 bg-proof-gray-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
                    <h3 className="font-semibold text-base mb-3 text-proof-gray-700">Deployment</h3>
                    <p className="text-sm text-proof-gray-600 leading-relaxed flex-grow">Implement models in production and monitor ongoing performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Applications */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">Business Applications</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Transform predictive insights into strategic business advantages across all customer touchpoints.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-8">Strategic Applications</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-proof-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-proof-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Targeted Retention Campaigns</h4>
                    <p className="text-sm text-proof-gray-600">Proactively engage at-risk customers with personalized retention offers before they churn.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-proof-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-proof-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Personalized Recommendations</h4>
                    <p className="text-sm text-proof-gray-600">Deliver highly relevant product and service recommendations based on predictive preferences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-proof-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-proof-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Dynamic Pricing Strategies</h4>
                    <p className="text-sm text-proof-gray-600">Optimize pricing in real-time based on demand predictions and customer value models.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-8">Operational Optimization</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-proof-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-proof-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Resource Allocation Optimization</h4>
                    <p className="text-sm text-proof-gray-600">Allocate marketing budgets and sales resources to highest-value opportunities and customers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-proof-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-proof-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Inventory Management</h4>
                    <p className="text-sm text-proof-gray-600">Predict demand patterns to optimize inventory levels and reduce carrying costs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-proof-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-proof-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Campaign Optimization</h4>
                    <p className="text-sm text-proof-gray-600">Predict campaign performance and optimize messaging, timing, and channel selection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-emerald-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Predict Your Business Future?
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Harness the power of predictive modeling to anticipate customer behaviors, optimize strategies, 
            and drive sustainable business growth with data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-proof-emerald-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Start Building Predictive Models
              </Button>
            </Link>
            <Link href="/resources/case-studies">
              <Button size="lg" className="bg-white text-proof-emerald-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                View Predictive Modeling Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

