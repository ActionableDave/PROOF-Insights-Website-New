

















"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  DollarSign, 
  Target, 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  Calculator,
  Award,
  AlertTriangle,
  Scale,
  PieChart
} from "lucide-react";

export default function PricingPage() {
  console.log("Pricing page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/7ILodKzD9OFYvvmGhXFzI/pricing-new.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-70"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <DollarSign className="w-4 h-4 mr-1" />
              Innovation Research
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Pricing and<span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">
                Price Optimization</span></h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Set optimal prices that maximize revenue and market penetration. Our pricing research reveals 
              price sensitivity, optimal price points, and competitive positioning to drive profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Optimize Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Methods */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Conjoint Analysis Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-proof-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-10 w-10 text-proof-emerald-600" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-4">
                Conjoint Analysis and ACBC
              </h3>
              <p className="text-lg text-proof-gray-600 max-w-4xl mx-auto">
                Conjoint analysis and adaptive Choice-based conjoint are advanced trade-off analysis 
                methodologies to understand price sensitivity in the context of product features and benefits. It is 
                more complex but also more capable of detailing the influence of individual attributes on choice.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12 items-stretch">
              <div className="relative h-full lg:col-span-2">
                <img 
                  src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/zCUpE_s6wgdYbpM4JahiD/image.png" 
                  alt="Conjoint Analysis Results Dashboard"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 flex flex-col justify-between h-full lg:col-span-1">
                <div className="space-y-4">
                  <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 w-fit">
                    <BarChart3 className="w-4 h-4 mr-1" />
                    Feature Value Analysis
                  </Badge>
                  <h4 className="text-2xl lg:text-3xl font-bold text-proof-gray-900">What is Conjoint Analysis?</h4>
                  <p className="text-proof-gray-600 leading-relaxed">
                    An advanced trade-off analysis to understand price sensitivity in the context of product features and benefits.</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-proof-gray-700">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Price elasticity modeling</span>
                    </div>
                    <div className="flex items-center text-proof-gray-700">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Feature-price trade-offs</span>
                    </div>
                    <div className="flex items-center text-proof-gray-700">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Market simulation</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-proof-gray-100">
                  <Link href="/methodologies/conjoint-and-acbc">
                    <Button variant="outline" className="w-full text-proof-emerald-600 border-proof-emerald-200 hover:bg-proof-emerald-50">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Van Westendorp Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-proof-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Scale className="h-10 w-10 text-proof-blue-600" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-4">
                Van Westendorp Price Sensitivity Meter
              </h3>
              <p className="text-lg text-proof-gray-600 max-w-4xl mx-auto">
                The Van Westendorp Price Sensitivity Meter (PSM) is used to identify acceptable price ranges and optimal price points. It is a powerful methodology for products or solutions that have less well-established price ranges.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 w-fit">
                    <Scale className="w-4 h-4 mr-1" />
                    Price Sensitivity Analysis
                  </Badge>
                  <h4 className="text-2xl lg:text-3xl font-bold text-proof-gray-900">What is Van Westendorp PSM?</h4>
                  <p className="text-proof-gray-600 leading-relaxed">
                    A simple, straightforward method to gather price sentiment that centers on the respondent's perception of product value. It is expressed as a series of prices:</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-proof-gray-700">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Too cheap to be of good enough quality</span>
                    </div>
                    <div className="flex items-center text-proof-gray-700">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Too expensive for its value</span>
                    </div>
                    <div className="flex items-center text-proof-gray-700">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Optimal price point</span>
                    </div>
                    <div className="flex items-center text-proof-gray-700">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Indifference price point</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-proof-gray-100">
                  <Link href="/methodologies/van-westendorp">
                    <Button variant="outline" className="w-full text-proof-blue-600 border-proof-blue-200 hover:bg-proof-blue-50">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative h-full">
                <img 
                  src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/BLl1izsgZ2sRtSvFAHMgQ/image.png" 
                  alt="Van Westendorp Price Sensitivity Analysis Chart"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Gabor-Granger Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-proof-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-proof-amber-600" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-4">
                Gabor-Granger Price Wheel
              </h3>
              <p className="text-lg text-proof-gray-600 max-w-4xl mx-auto">
                The Gabor-Granger methodology determines revenue and demand curves to identify optimal pricing 
                strategies that maximize both market penetration and revenue generation.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <Badge className="bg-proof-amber-100 text-proof-amber-700 border-proof-amber-200 w-fit">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Revenue Optimization
                  </Badge>
                  <h4 className="text-2xl lg:text-3xl font-bold text-proof-gray-900">What is Gabor-Granger?</h4>
                  <p className="text-proof-gray-600 leading-relaxed">
                    Gabor Granger determines revenue and demand to identify optimal pricing that maximizes market penetration and revenue.</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-proof-gray-700">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Revenue optimization</span>
                    </div>
                    <div className="flex items-center text-proof-gray-700">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Demand curve analysis</span>
                    </div>
                    <div className="flex items-center text-proof-gray-700">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Optimal price identification</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-proof-gray-100">
                  <Link href="/methodologies/gabor-granger">
                    <Button variant="outline" className="w-full text-proof-amber-600 border-proof-amber-200 hover:bg-proof-amber-50">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative h-full">
                <img 
                  src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/Quof_D10VYDAdqUA0d1ee/image.png" 
                  alt="Gabor-Granger Price Wheel Analysis"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Advanced Pricing Research Section */}
          <div className="mt-32">
            <div className="text-center space-y-6 mb-16">
              <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
                <Calculator className="h-4 w-4 mr-2" />
                Advanced Methods
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
                Advanced Pricing Research
              </h2>
              <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
                Sophisticated methodologies for complex pricing challenges and strategic decision-making.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-proof-teal-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Competitive Benchmarking</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-proof-gray-600">
                    Analyze competitive pricing landscape and positioning 
                    to inform strategic pricing decisions.
                  </p>
                  <div className="space-y-2 text-sm text-proof-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Competitive price analysis
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Value perception mapping
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Price positioning strategy
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-proof-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Revenue Modeling</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-proof-gray-600">
                    Build comprehensive revenue models to predict financial 
                    impact of different pricing strategies.
                  </p>
                  <div className="space-y-2 text-sm text-proof-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Volume-price relationship
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Profit maximization
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Scenario planning
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <PieChart className="h-8 w-8 text-proof-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Segmented Pricing</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-proof-gray-600">
                    Analyze price sensitivity across different customer 
                    segments to optimize pricing strategies.
                  </p>
                  <div className="space-y-2 text-sm text-proof-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Segment price elasticity
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Willingness to pay analysis
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Tiered pricing strategy
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Optimize Your Pricing?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to discover optimal price points that maximize revenue, 
            enhance market penetration, and strengthen competitive positioning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <DollarSign className="w-5 h-5 mr-2" />
                Start Pricing Research
              </Button>
            </Link>
            <Link href="/resources/case-studies?methodology=Pricing">
              <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Pricing Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

















