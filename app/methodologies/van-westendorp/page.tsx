




























"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  BarChart3, 
  Users, 
  Target, 
  Lightbulb,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Brain,
  PieChart,
  Settings,
  Zap,
  Calculator,
  Activity,
  DollarSign,
  Layers,
  Gauge,
  Scale,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  CheckSquare,
  XSquare
} from "lucide-react";

export default function VanWestendorpPage() {
  console.log("Van Westendorp page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-emerald-50 py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: 'url("https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/cz57AkrMJligY_MwHjEhS/van-westendorp-hero.png")'
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-proof-blue-50/80 to-proof-emerald-50/80" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <Scale className="w-4 h-4 mr-1" />
              Price Sensitivity Analysis
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Van Westendorp
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">Price Sensitivity Meter</span>
            </h1>
            <p className="text-xl text-black text-center">
              Apply the classic Van Westendorp Price Sensitivity Meter to determine acceptable price ranges, 
              optimal pricing points, and value perception thresholds through four critical price questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Link href="/contact">
                  <Scale className="w-5 h-5 mr-2" />
                  Start PSM Analysis
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Link href="/resources/case-studies">
                  <Gauge className="w-5 h-5 mr-2" />
                  View Pricing Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8 space-y-6 mb-16 flex flex-col items-center">
            <Badge className="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 text-xs font-semibold text-center py-2 px-4">
              Methodology Overview
            </Badge>
            <h2 className="text-proof-gray-900 lg:text-4xl text-3xl font-bold text-center">
              Classic Price Sensitivity Measurement
            </h2>
            <p className="text-lg text-black text-center">
              The Van Westendorp Price Sensitivity Meter is a proven methodology that identifies 
              acceptable price ranges by asking customers four key questions about price perception, 
              revealing optimal price points and value thresholds that guide strategic pricing decisions.
            </p>
          </div>
          
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Four Critical Questions</h3>
                      <p className="text-black">
                        Uses four standardized questions to capture price perceptions: too expensive, 
                        expensive but worth it, cheap but questionable, and too cheap to be good.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-emerald-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scale className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Optimal Price Range</h3>
                      <p className="text-black">
                        Identifies the range of acceptable prices where the product is neither 
                        too expensive nor too cheap, revealing the optimal pricing window.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Revenue Estimation</h3>
                      <p className="text-black">
                        Derives an approximate price to revenue model by capturing purchase intent or expected volume for the anticipated price, value price and expensive price.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="relative z-10 rounded-2xl shadow-2xl border border-proof-gray-200 overflow-hidden">
                <img 
                  src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/K6DFRyBkmeigJeyYKPRG-/van-wes-square.webp"
                  alt="Van Westendorp Price Sensitivity Meter Analysis Chart"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Questions */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <CheckSquare className="h-4 w-4 mr-2" />
              Core Methodology
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              The Four Critical Price Questions
            </h2>
            <p className="text-lg text-black text-center">
              Van Westendorp's methodology centers on four key questions that reveal different 
              aspects of price perception and value assessment across your target market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <XSquare className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Too Cheap</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black font-medium italic">
                  "At what price would the cost of this product be so cheap that you would question its quality?"</p>
                <p className="text-black">
                  <br />
                </p>
                </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <ThumbsUp className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Good Value</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black font-medium italic">
                  At what price would the cost of this product be considered a bargain, a great buy for the money?</p>
                <p className="text-black">
                  (Purchase intent is asked at this price)</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <ThumbsDown className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Expensive</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black font-medium italic">
                  "At what price would the cost of this product start to get expensive so that it is not out of the question, but you would have to give it some thought before buying?"</p>
                <p className="text-black">
                  <br />
                </p>
                </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <ThumbsDown className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Prohibitive</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black font-medium italic">
                  "At what price would this product become so expensive that you would NOT consider buying it?"</p>
                <p className="text-black">
                  <br />
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Strategic Applications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Van Westendorp Use Cases
            </h2>
            <p className="text-lg text-black text-center">
              The Price Sensitivity Meter provides valuable insights for pricing strategy, 
              market positioning, and competitive analysis across diverse business scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Optimal Pricing</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-black">
                  Identify the optimal price point that maximizes acceptance while 
                  avoiding both overpricing and quality perception issues.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Acceptable price range
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Optimal price point
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value perception balance
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">New Product Launch</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-black">
                  Determine appropriate pricing for new products by understanding 
                  customer price expectations and value perceptions.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Launch pricing strategy
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market acceptance testing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value positioning
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Brand Positioning</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-black">
                  Align pricing with brand positioning strategy by understanding 
                  how price perceptions affect brand image and market positioning.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Premium positioning
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value positioning
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Quality perception
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process & Methodology */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              Our PSM Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Systematic Price Sensitivity Analysis
            </h2>
            <p className="text-lg text-black text-center">
              Our rigorous approach to Van Westendorp analysis enhanced with purchase intent metrics ensures accurate price sensitivity measurement and actionable insights for strategic pricing decisions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              </div>
              <CardHeader className="pt-8 pb-6">
                <CardTitle className="text-xl text-proof-gray-900">Study Design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black">
                  Design comprehensive price sensitivity research including sample selection, 
                  question customization, and methodology optimization for your market.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Sample strategy
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Question adaptation
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Context optimization
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              </div>
              <CardHeader className="pt-8 pb-6">
                <CardTitle className="text-xl text-proof-gray-900">Data Collection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black">
                  Execute Van Westendorp questioning (including purchase intent follow ups) with quality controls and validation to ensure accurate price perception measurement across your target market.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Four-question protocol
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Quality validation
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Response verification
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-amber-300">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              </div>
              <CardHeader className="pt-8 pb-6">
                <CardTitle className="text-xl text-proof-gray-900">Strategic Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black">
                  Analyze price sensitivity and revenue curves and intersection points to generate actionable pricing recommendations and strategic insights.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Curve analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Optimal point identification
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Strategic recommendations
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to find your acceptable price range?</h2>
          <p className="text-xl text-blue-100 text-center">
            Partner with PROOF Insights to leverage Van Westendorp Price Sensitivity Meter for 
            clear insights into optimal pricing, acceptable ranges, and value perception thresholds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Link href="/contact">
                <Scale className="w-5 h-5 mr-2" />
                Start PSM Analysis
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Link href="/resources/case-studies">
                <Gauge className="w-5 h-5 mr-2" />
                View Pricing Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}




























