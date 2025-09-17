import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, BarChart3, Users, Target, TrendingUp, Zap, Crown, Heart, AlertTriangle, Calendar, ShoppingCart, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function RFMAnalysisPage() {
  console.log("RFM Analysis page rendered")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24"
        style={{
          backgroundImage: `url('https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/o2Rk9pCYy_NyWsoFVlRbL/rfm-analysis.png')`,
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
              RFM
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">Analysis</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Segment your customers based on Recency, Frequency, and Monetary value to identify your most 
              valuable customers and create targeted marketing campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  Start RFM Analysis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is RFM Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">What is RFM Analysis?</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Categorizes customers based on their purchasing behavior using the following metrics derived from transactional data.

            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-proof-blue-600 bg-proof-blue-50 p-8 text-center">
              <div className="w-16 h-16 bg-proof-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-proof-blue-700 mb-4">R = Recency</h3>
              <p className="text-proof-gray-700 leading-relaxed mb-4">
                How recently did the customer make a purchase? Recent customers are more likely to respond to offers.
              </p>
              <div className="text-sm text-proof-gray-600 space-y-2">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Days since last purchase
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Engagement timeline
                </div>
              </div>
            </Card>

            <Card className="border-2 border-proof-purple-600 bg-proof-purple-50 p-8 text-center">
              <div className="w-16 h-16 bg-proof-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-proof-purple-700 mb-4">F = Frequency</h3>
              <p className="text-proof-gray-700 leading-relaxed mb-4">
                How often does the customer make purchases? Frequent buyers show higher loyalty and engagement.
              </p>
              <div className="text-sm text-proof-gray-600 space-y-2">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Purchase frequency
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Interaction patterns
                </div>
              </div>
            </Card>

            <Card className="border-2 border-proof-emerald-600 bg-proof-emerald-50 p-8 text-center">
              <div className="w-16 h-16 bg-proof-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-proof-emerald-700 mb-4">M = Monetary</h3>
              <p className="text-proof-gray-700 leading-relaxed mb-4">
                How much money does the customer spend? High-value customers contribute most to revenue.
              </p>
              <div className="text-sm text-proof-gray-600 space-y-2">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Total spend amount
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                  Average order value
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Segments */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">Customer Segments</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              RFM analysis creates distinct customer segments that enable targeted marketing strategies and personalized experiences. Typically, 4 to 12 mutually exclusive segments are identified. The number of segments is driven by distributions in the data and level of granularity desired.
            </p>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Below is an example series of segments, including descriptions and hypothetical .
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* MVP Segment */}
            <Card className="bg-white border-2 border-yellow-500 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Crown className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-proof-gray-900 mb-2">MVP</h3>
              <p className="text-sm text-proof-gray-600 mb-4">Last bought recently AND buy most often AND spend the most. Most valuable customers.</p>
              <div className="text-xs text-proof-gray-500 bg-yellow-50 px-3 py-1 rounded-full inline-block">
                10% of customers
              </div>
            </Card>

            {/* Loyal Segment */}
            <Card className="bg-white border-2 border-proof-emerald-500 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-proof-emerald-600" />
              </div>
              <h3 className="font-semibold text-proof-gray-900 mb-2">Loyal</h3>
              <p className="text-sm text-proof-gray-600 mb-4">Last bought recently AND buy quite often AND spend above average. Consistent and loyal customers.</p>
              <div className="text-xs text-proof-gray-500 bg-proof-emerald-50 px-3 py-1 rounded-full inline-block">
                10% of customers
              </div>
            </Card>

            {/* Has Potential Segment */}
            <Card className="bg-white border-2 border-proof-blue-500 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-proof-blue-600" />
              </div>
              <h3 className="font-semibold text-proof-gray-900 mb-2">Has Potential</h3>
              <p className="text-sm text-proof-gray-600 mb-4">Buy regularly, but less frequently or spend less than Loyal / MVP. Customers who have the potential to become Loyal.</p>
              <div className="text-xs text-proof-gray-500 bg-proof-blue-50 px-3 py-1 rounded-full inline-block">
                15% of customers
              </div>
            </Card>

            {/* Most Recent Segment */}
            <Card className="bg-white border-2 border-proof-purple-500 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-proof-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-proof-purple-600" />
              </div>
              <h3 className="font-semibold text-proof-gray-900 mb-2">Most Recent</h3>
              <p className="text-sm text-proof-gray-600 mb-4">Most recent new to file customers, made 1 purchase so far.</p>
              <div className="text-xs text-proof-gray-500 bg-proof-purple-50 px-3 py-1 rounded-full inline-block">
                10% of customers
              </div>
            </Card>

            {/* Less Recent Segment */}
            <Card className="bg-white border-2 border-blue-400 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-proof-gray-900 mb-2">Less Recent</h3>
              <p className="text-sm text-proof-gray-600 mb-4">Less recent new customers. Haven't returned and are on the verge of becoming At Risk.</p>
              <div className="text-xs text-proof-gray-500 bg-blue-50 px-3 py-1 rounded-full inline-block">
                10% of customers
              </div>
            </Card>

            {/* Can't Lose Segment */}
            <Card className="bg-white border-2 border-orange-500 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-proof-gray-900 mb-2">Can't Lose</h3>
              <p className="text-sm text-proof-gray-600 mb-4">Haven't purchased recently and/or reduced spending but used to be Loyal / MVP. High value customers, losing them would have a significant impact.</p>
              <div className="text-xs text-proof-gray-500 bg-orange-50 px-3 py-1 rounded-full inline-block">
                10% of customers
              </div>
            </Card>

            {/* Need Attention Segment */}
            <Card className="bg-white border-2 border-red-500 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-proof-gray-900 mb-2">Need Attention</h3>
              <p className="text-sm text-proof-gray-600 mb-4">Haven't purchased recently, reduced order frequency or spending.</p>
              <div className="text-xs text-proof-gray-500 bg-red-50 px-3 py-1 rounded-full inline-block">
                15% of customers
              </div>
            </Card>

            {/* Hibernating Segment */}
            <Card className="bg-white border-2 border-gray-400 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-proof-gray-900 mb-2">Hibernating</h3>
              <p className="text-sm text-proof-gray-600 mb-4">Haven't purchased in a long time.</p>
              <div className="text-xs text-proof-gray-500 bg-gray-50 px-3 py-1 rounded-full inline-block">
                10% of customers
              </div>
            </Card>

            {/* Lost Segment */}
            <Card className="bg-white border-2 border-gray-600 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="font-semibold text-proof-gray-900 mb-2">Lost</h3>
              <p className="text-sm text-proof-gray-600 mb-4">Haven't purchased in a very long time, unlikely to return.</p>
              <div className="text-xs text-proof-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                10% of customers
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* RFM Analysis Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">RFM Analysis Process</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our systematic approach to implementing RFM analysis and deriving actionable customer insights.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-proof-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-4">Data Collection</h3>
              <p className="text-proof-gray-600 text-sm leading-relaxed">
                Gather customer transaction data including purchase dates, frequency, and monetary values.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-proof-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-4">Score Calculation</h3>
              <p className="text-proof-gray-600 text-sm leading-relaxed">
                Calculate RFM scores using quintiles or percentiles to rank customers on each dimension.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-proof-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-4">Segmentation</h3>
              <p className="text-proof-gray-600 text-sm leading-relaxed">
                Combine RFM scores to create meaningful customer segments with distinct characteristics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-proof-gray-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-4">Action Plans</h3>
              <p className="text-proof-gray-600 text-sm leading-relaxed">
                Develop targeted marketing strategies and campaigns for each customer segment.
              </p>
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
              Transform RFM insights into actionable business strategies that drive customer lifetime value and revenue growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-8">Marketing Strategies</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-proof-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-proof-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Targeted Campaigns</h4>
                    <p className="text-sm text-proof-gray-600">Create personalized marketing messages and offers based on customer segment characteristics.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-proof-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-proof-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Customer Retention</h4>
                    <p className="text-sm text-proof-gray-600">Identify at-risk customers early and implement retention strategies to reduce churn.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-proof-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-proof-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Cross-sell & Upsell</h4>
                    <p className="text-sm text-proof-gray-600">Optimize product recommendations and pricing strategies for different customer segments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-8">Business Optimization</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-proof-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-proof-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Resource Allocation</h4>
                    <p className="text-sm text-proof-gray-600">Focus marketing spend and efforts on high-value customer segments for maximum ROI.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-proof-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-proof-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Customer Service</h4>
                    <p className="text-sm text-proof-gray-600">Prioritize customer service efforts based on customer value and loyalty status.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 border border-proof-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-proof-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Crown className="w-5 h-5 text-proof-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Loyalty Programs</h4>
                    <p className="text-sm text-proof-gray-600">Design tiered loyalty programs that reward and incentivize desired customer behaviors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Unlock Customer Insights with RFM?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Start segmenting your customers and creating targeted strategies that maximize 
            customer lifetime value and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/contact">Launch Your RFM Analysis</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg" asChild>
              <Link href="/resources/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}




