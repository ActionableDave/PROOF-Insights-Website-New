


"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
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
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Apply the classic Van Westendorp Price Sensitivity Meter to determine acceptable price ranges, 
              optimal pricing points, and value perception thresholds through four critical price questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Gauge className="w-5 h-5 mr-2" />
                Start PSM Analysis
              </Button>
              <Button size="lg" variant="outline" className="border-proof-gray-300 text-proof-gray-700 hover:bg-proof-gray-50 px-8 py-4 text-lg">
                <Scale className="w-5 h-5 mr-2" />
                View Methodology
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
                  Methodology Overview
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
                  Classic Price Sensitivity Measurement
                </h2>
              </div>
              <p className="text-lg text-black">
                The Van Westendorp Price Sensitivity Meter is a proven methodology that identifies 
                acceptable price ranges by asking customers four key questions about price perception, 
                revealing optimal price points and value thresholds that guide strategic pricing decisions.
              </p>
              
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
              </div>
            </div>

            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-proof-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-proof-gray-900">PSM Analysis Impact</h3>
                  <Badge className="bg-proof-blue-100 text-proof-blue-700">Price Insights</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-proof-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Scale className="w-5 h-5 text-proof-blue-600" />
                      <span className="text-2xl font-bold text-proof-blue-600">92%</span>
                    </div>
                    <p className="text-sm text-black">Range Accuracy</p>
                  </div>
                  
                  <div className="bg-proof-emerald-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="w-5 h-5 text-proof-emerald-600" />
                      <span className="text-2xl font-bold text-proof-emerald-600">24%</span>
                    </div>
                    <p className="text-sm text-black">Price Optimization</p>
                  </div>

                  <div className="bg-proof-amber-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="w-5 h-5 text-proof-amber-600" />
                      <span className="text-2xl font-bold text-proof-amber-600">22K+</span>
                    </div>
                    <p className="text-sm text-black">Price Perceptions</p>
                  </div>

                  <div className="bg-proof-teal-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Gauge className="w-5 h-5 text-proof-teal-600" />
                      <span className="text-2xl font-bold text-proof-teal-600">165+</span>
                    </div>
                    <p className="text-sm text-black">PSM Studies</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-black">Price Sensitivity Clarity</span>
                    <span className="font-medium text-proof-gray-900">91%</span>
                  </div>
                  <div className="w-full bg-proof-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-proof-blue-500 to-proof-emerald-500 h-2 rounded-full" style={{width: '91%'}}></div>
                  </div>
                </div>
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
            <p className="text-lg text-black max-w-3xl mx-auto">
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
                  <CardTitle className="text-xl text-proof-gray-900">Too Expensive</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black font-medium italic">
                  "At what price would you consider this product to be so expensive that 
                  you would not consider buying it?"
                </p>
                <p className="text-black">
                  Identifies the upper price threshold where customer resistance becomes 
                  prohibitive and purchase intention drops significantly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Expensive but Worth It</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black font-medium italic">
                  "At what price would you consider this product expensive, 
                  but still worth buying?"
                </p>
                <p className="text-black">
                  Captures the price point where customers perceive high value despite 
                  recognizing the premium pricing compared to alternatives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <ThumbsDown className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Cheap but Questionable</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black font-medium italic">
                  "At what price would you consider this product a bargain 
                  but question its quality?"
                </p>
                <p className="text-black">
                  Reveals the lower price threshold where customers begin to question 
                  quality and value, potentially damaging brand perception.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <ThumbsDown className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Too Cheap</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black font-medium italic">
                  "At what price would you consider this product so inexpensive 
                  that you would question its quality and not buy it?"
                </p>
                <p className="text-black">
                  Identifies the absolute lower bound where low pricing signals 
                  poor quality and eliminates purchase consideration entirely.
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
            <p className="text-lg text-black max-w-3xl mx-auto">
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

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Market Research</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-black">
                  Conduct comprehensive market research to understand price sensitivity 
                  patterns across different customer segments and markets.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Segment analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market comparison
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Trend identification
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Price Adjustment</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-black">
                  Evaluate the impact of potential price changes on customer acceptance 
                  and market position before implementing adjustments.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Price increase testing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Discount strategies
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Competitive responses
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Gauge className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Quality Perception</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-black">
                  Understand how pricing affects quality perception and brand image 
                  to optimize the price-quality relationship.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Quality signals
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value communication
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Brand integrity
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
            <p className="text-lg text-black max-w-3xl mx-auto">
              Our rigorous approach to Van Westendorp analysis ensures accurate price sensitivity 
              measurement and actionable insights for strategic pricing decisions.
            </p>
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
                  Execute Van Westendorp questioning with quality controls and validation 
                  to ensure accurate price perception measurement across your target market.
                </p>
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
                  Analyze price sensitivity curves and intersection points to generate 
                  actionable pricing recommendations and strategic insights.
                </p>
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
            Ready to Understand Your Price Sensitivity?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to leverage Van Westendorp Price Sensitivity Meter for 
            clear insights into optimal pricing, acceptable ranges, and value perception thresholds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Scale className="w-5 h-5 mr-2" />
              Start PSM Analysis
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg">
              <Gauge className="w-5 h-5 mr-2" />
              View Pricing Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


