


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { ArrowRight, Target, TrendingUp, MessageSquare, BarChart3, Database, DollarSign } from 'lucide-react';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-40 bg-cover bg-center bg-no-repeat" 
               style={{backgroundImage: "url('https://images.pexels.com/photos/7433844/pexels-photo-7433844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Market Research Solutions
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              From market entry strategies to customer optimization, we provide the insights you need at every stage of your business journey.
            </p>
          </div>
        </div>
      </section>



      {/* Solutions Grid */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">What We Do</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of research solutions is designed to address every critical business question and challenge you face.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/solutions/strategy">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <Target className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Strategy</h3>
                <p className="text-sm text-proof-gray-600 mb-4 leading-relaxed">
                  Strategic market intelligence and competitive positioning research to support confident market entry decisions, brand strategy development, and business growth planning.
                </p>
                <div className="space-y-2 text-xs text-proof-gray-600 mb-4">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-blue-600 rounded-full mr-2"></div>
                    Market discovery & opportunity assessment
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-blue-600 rounded-full mr-2"></div>
                    Customer segmentation & persona development
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-blue-600 rounded-full mr-2"></div>
                    Competitive landscape analysis
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-blue-600 rounded-full mr-2"></div>
                    Brand strategy & positioning research
                  </div>
                </div>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium mt-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/solutions/innovation-growth">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <TrendingUp className="h-10 w-10 text-proof-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Innovation & Growth</h3>
                <p className="text-sm text-proof-gray-600 mb-4 leading-relaxed">
                  Comprehensive product development and innovation research to validate concepts, optimize products, test pricing strategies, and accelerate market success while reducing development risks.
                </p>
                <div className="space-y-2 text-xs text-proof-gray-600 mb-4">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-purple-600 rounded-full mr-2"></div>
                    Concept testing & validation
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-purple-600 rounded-full mr-2"></div>
                    Product, package & name testing
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-purple-600 rounded-full mr-2"></div>
                    Feature/benefit optimization
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-purple-600 rounded-full mr-2"></div>
                    Pricing research & ad claim validation
                  </div>
                </div>
                <div className="flex items-center text-proof-purple-600 text-sm font-medium mt-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/solutions/marketing-messaging">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <MessageSquare className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Marketing & Messaging</h3>
                <p className="text-sm text-proof-gray-600 mb-4 leading-relaxed">
                  Data-driven marketing optimization and messaging research to maximize campaign effectiveness, improve brand communication, and drive higher engagement and conversion rates.
                </p>
                <div className="space-y-2 text-xs text-proof-gray-600 mb-4">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-blue-600 rounded-full mr-2"></div>
                    Message testing & positioning optimization
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-blue-600 rounded-full mr-2"></div>
                    Ad creative optimization & A/B testing
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-blue-600 rounded-full mr-2"></div>
                    Campaign effectiveness measurement
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-blue-600 rounded-full mr-2"></div>
                    Brand awareness & recall analysis
                  </div>
                </div>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium mt-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/solutions/monitoring-improving">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <BarChart3 className="h-10 w-10 text-proof-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Monitoring & Improving</h3>
                <p className="text-sm text-proof-gray-600 mb-4 leading-relaxed">
                  Continuous brand performance monitoring and customer experience tracking to identify improvement opportunities, measure satisfaction levels, and optimize business outcomes over time.
                </p>
                <div className="space-y-2 text-xs text-proof-gray-600 mb-4">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-purple-600 rounded-full mr-2"></div>
                    Brand health tracking & monitoring
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-purple-600 rounded-full mr-2"></div>
                    Customer satisfaction & NPS studies
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-purple-600 rounded-full mr-2"></div>
                    Awareness & usage pattern analysis
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-purple-600 rounded-full mr-2"></div>
                    Real-time dashboard & alerts
                  </div>
                </div>
                <div className="flex items-center text-proof-purple-600 text-sm font-medium mt-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/solutions/crm-databases">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <Database className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">CRM Databases</h3>
                <p className="text-sm text-proof-gray-600 mb-4 leading-relaxed">
                  Advanced customer database analytics and predictive modeling to unlock customer insights, optimize retention strategies, and drive growth through data-driven customer intelligence.
                </p>
                <div className="space-y-2 text-xs text-proof-gray-600 mb-4">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-blue-600 rounded-full mr-2"></div>
                    RFM analysis & customer segmentation
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-blue-600 rounded-full mr-2"></div>
                    Predictive modeling & churn analysis
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-blue-600 rounded-full mr-2"></div>
                    Retail impact factor analysis
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-blue-600 rounded-full mr-2"></div>
                    Lifetime value & propensity scoring
                  </div>
                </div>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium mt-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/solutions/private-equity">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <DollarSign className="h-10 w-10 text-proof-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Private Equity</h3>
                <p className="text-sm text-proof-gray-600 mb-4 leading-relaxed">
                  Specialized private equity research and commercial due diligence to support investment decisions, validate market opportunities, and drive post-acquisition value creation initiatives.
                </p>
                <div className="space-y-2 text-xs text-proof-gray-600 mb-4">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-purple-600 rounded-full mr-2"></div>
                    Commercial due diligence research
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-purple-600 rounded-full mr-2"></div>
                    Market validation & risk assessment
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-purple-600 rounded-full mr-2"></div>
                    Post-deal integration & alignment
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-proof-purple-600 rounded-full mr-2"></div>
                    Value creation & optimization strategies
                  </div>
                </div>
                <div className="flex items-center text-proof-purple-600 text-sm font-medium mt-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Our Research Process</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures every project delivers actionable insights and measurable impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-proof-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Discovery</h3>
              <p className="text-proof-gray-600">Understanding your business objectives and research requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-proof-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Design</h3>
              <p className="text-proof-gray-600">Crafting the optimal research methodology and approach</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-proof-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Execute</h3>
              <p className="text-proof-gray-600">Collecting high-quality data using proven methodologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-proof-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Deliver</h3>
              <p className="text-proof-gray-600">Translating findings into actionable business recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss which research solutions are right for your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 text-lg font-semibold">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>


    </div>
  )
}