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
  DollarSign,
  Calculator,
  Settings,
  Zap
} from "lucide-react";

export default function PriceOptimizationPage() {
  console.log("Price Optimization page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-emerald-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 hover:bg-proof-emerald-100">
              <DollarSign className="w-4 h-4 mr-1" />
              Revenue Optimization
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Price 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block">Optimization</span>
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced research methodologies that determine optimal pricing strategies, 
              maximize revenue potential, and balance customer value perception with profitability goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Calculator className="w-5 h-5 mr-2" />
                Explore Methods
              </Button>
              <Button size="lg" variant="outline" className="border-proof-gray-300 text-proof-gray-700 hover:bg-proof-gray-50 px-8 py-4 text-lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                Optimize Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Methodologies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              Revenue Science
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Scientific Pricing Methodologies
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Rigorous research techniques that reveal price sensitivity, optimal price points, 
              and revenue maximization strategies across different market segments.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Price Laddering */}
            <Card id="price-laddering" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300 flex flex-col">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center group-hover:bg-proof-blue-600 transition-colors duration-300">
                    <TrendingUp className="h-6 w-6 text-proof-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Price Laddering</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-proof-gray-600">
                  Sequential pricing methodology that tests multiple price points to understand 
                  demand elasticity and identify optimal pricing tiers across different customer segments.
                </p>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Elasticity curve mapping
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Demand threshold identification
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Price tier optimization
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Revenue maximization modeling
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Segment-specific pricing
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Competitive price positioning
                  </div>
                </div>
                <div className="pt-4 mt-auto">
                  <Button asChild className="w-full bg-proof-blue-600 hover:bg-proof-blue-700 text-white">
                    <Link href="/methodologies/price-laddering">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Van Westendorp */}
            <Card id="van-westendorp" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300 flex flex-col">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-proof-emerald-600 transition-colors duration-300">
                    <Calculator className="h-6 w-6 text-proof-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Van Westendorp</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-proof-gray-600">
                  Price Sensitivity Meter that identifies acceptable price ranges by asking 
                  customers about their perceptions of value at different price points.
                </p>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Acceptable price range identification
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Optimal price point analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Price sensitivity measurement
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value perception insights
                  </div>
                </div>
                <div className="pt-4 mt-auto">
                  <Button asChild className="w-full bg-proof-emerald-600 hover:bg-proof-emerald-700 text-white">
                    <Link href="/methodologies/van-westendorp">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Conjoint and ACBC for Pricing */}
            <Card id="conjoint-acbc" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-amber-300 flex flex-col">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-amber-100 rounded-lg flex items-center justify-center group-hover:bg-proof-amber-600 transition-colors duration-300">
                    <BarChart3 className="h-6 w-6 text-proof-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Conjoint and ACBC</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-proof-gray-600">
                  Advanced choice modeling that reveals how price interacts with product features 
                  to determine optimal pricing within feature-benefit-price trade-off scenarios.
                </p>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Price-feature trade-off analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Willingness-to-pay modeling
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market simulation scenarios
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Portfolio pricing optimization
                  </div>
                </div>
                <div className="pt-4 mt-auto">
                  <Button asChild className="w-full bg-proof-amber-600 hover:bg-proof-amber-700 text-white">
                    <Link href="/methodologies/conjoint-and-acbc">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Benefits */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Business Impact
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Why Scientific Pricing Matters
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Data-driven pricing strategies deliver measurable improvements in revenue, 
              profitability, and market positioning while maintaining customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Revenue Growth</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Optimize pricing to maximize revenue while maintaining market competitiveness 
                  and customer value perception.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Revenue maximization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Profit margin optimization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market share balance
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Customer Value</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Align pricing with customer value perceptions to ensure sustainable 
                  pricing strategies that support long-term relationships.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value-based pricing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Customer satisfaction maintenance
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Loyalty preservation
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Market Position</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Establish optimal market positioning through strategic pricing that 
                  differentiates your offering and captures target segments.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Competitive positioning
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Brand perception alignment
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Segment targeting
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
                  Implementation Strategy
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
                  From Research to Results
                </h2>
              </div>
              <p className="text-lg text-proof-gray-600">
                Our systematic approach to price optimization ensures research insights 
                translate into actionable pricing strategies that drive measurable business results.
              </p>
              
              <div className="space-y-6">
                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Research Design</h3>
                      <p className="text-proof-gray-600">
                        Custom methodology selection based on your specific pricing challenges, 
                        market dynamics, and business objectives.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-emerald-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calculator className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Data Analysis</h3>
                      <p className="text-proof-gray-600">
                        Advanced statistical modeling and simulation to identify optimal price points, 
                        elasticity curves, and revenue scenarios.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-amber-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Strategic Implementation</h3>
                      <p className="text-proof-gray-600">
                        Actionable recommendations for pricing strategy implementation, 
                        including testing protocols and performance monitoring.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Start Price Optimization
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-proof-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-proof-gray-900">Pricing Optimization Results</h3>
                  <Badge className="bg-proof-emerald-100 text-proof-emerald-700">Proven Impact</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-proof-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <DollarSign className="w-5 h-5 text-proof-blue-600" />
                      <span className="text-2xl font-bold text-proof-blue-600">23%</span>
                    </div>
                    <p className="text-sm text-proof-gray-600">Average Revenue Increase</p>
                  </div>
                  
                  <div className="bg-proof-emerald-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="w-5 h-5 text-proof-emerald-600" />
                      <span className="text-2xl font-bold text-proof-emerald-600">91%</span>
                    </div>
                    <p className="text-sm text-proof-gray-600">Price Acceptance Rate</p>
                  </div>

                  <div className="bg-proof-amber-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Calculator className="w-5 h-5 text-proof-amber-600" />
                      <span className="text-2xl font-bold text-proof-amber-600">200+</span>
                    </div>
                    <p className="text-sm text-proof-gray-600">Pricing Studies</p>
                  </div>

                  <div className="bg-proof-teal-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Target className="w-5 h-5 text-proof-teal-600" />
                      <span className="text-2xl font-bold text-proof-teal-600">94%</span>
                    </div>
                    <p className="text-sm text-proof-gray-600">Client Success Rate</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-proof-gray-600">Price Optimization Effectiveness</span>
                    <span className="font-medium text-proof-gray-900">93%</span>
                  </div>
                  <div className="w-full bg-proof-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-proof-blue-500 to-proof-emerald-500 h-2 rounded-full" style={{width: '93%'}}></div>
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
            Ready to Optimize Your Pricing Strategy?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to leverage scientific pricing methodologies that maximize 
            revenue, improve profitability, and align with customer value perceptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Brain className="w-5 h-5 mr-2" />
              Start Pricing Research
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg">
              <PieChart className="w-5 h-5 mr-2" />
              View Pricing Examples
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}