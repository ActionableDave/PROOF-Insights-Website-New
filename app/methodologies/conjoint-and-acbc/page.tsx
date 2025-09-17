


"use client";

import Link from "next/link";
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
  Layers
} from "lucide-react";

export default function ConjointACBCPage() {
  console.log("Conjoint and ACBC page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24"
        style={{
          backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/tuzEum1KJ0L9MgRJe_hjU/conjoint-acbc.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <BarChart3 className="w-4 h-4 mr-1" />
              Advanced Choice Modeling
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Conjoint Analysis 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]"></span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Reveal customer preferences and trade-off decisions through sophisticated choice modeling 
              that quantifies the relative value of product features, benefits, and pricing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <Calculator className="w-5 h-5 mr-2" />
                  Discuss Conjoint Analysis
                </Button>
              </Link>
              <Link href="/resources/case-studies">
                <Button size="lg" variant="outline" className="border-proof-gray-300 text-proof-gray-700 hover:bg-proof-gray-50 px-8 py-4 text-lg">
                  <Activity className="w-5 h-5 mr-2" />
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Full Width */}
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              Methodology Overview
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Understanding Conjoint Analysis Types
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-4xl mx-auto">
              Conjoint analysis is a family of advanced statistical techniques that decode how customers make decisions by analyzing their trade-offs 
              between different product attributes, features, and price points. PROOF Insights leverages several types of conjoint analysis to precisely tailor our research to our clients' needs:
            </p>
          </div>
          
          {/* Three Cards Grid - Full Width */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Traditional Choice-Based Conjoint (CBC)</h3>
                  <p className="text-proof-gray-600">
                    Measures relative importance of attributes through systematic presentation 
                    of product profiles, revealing utility values for each feature level.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-emerald-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Adaptive Choice-Based Conjoint (ACBC)</h3>
                  <p className="text-proof-gray-600">
                    Advanced methodology that adapts to individual preferences in real-time, 
                    providing more accurate and actionable insights through personalized questioning.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Menu-Based Conjoint (MBC)</h3>
                  <p className="text-proof-gray-600">
                    Streamlined approach that presents respondents with menu-style options, 
                    making complex trade-off decisions more intuitive and engaging.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Deep Dive: Choice-Based Conjoint */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-proof-gray-900 mb-4">
                Deep Dive: Choice-Based Conjoint (CBC)
              </h3>
              <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
                The foundational methodology that established conjoint analysis as the gold standard for understanding customer preferences and trade-off decisions.
              </p>
            </div>

            {/* CBC Image and Card Side by Side */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* CBC Process Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/5XKP-eIQOMd_uYIE1mnId/image.png"
                  alt="The Choice-Based Conjoint Interview Flow"
                  className="w-full rounded-2xl shadow-2xl border border-proof-gray-200"
                />
              </div>

              {/* Enhanced CBC Card */}
              <div className="order-1 lg:order-2">
                <Card className="p-8 bg-gradient-to-br from-proof-blue-50 to-proof-teal-50 border-l-4 border-l-proof-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-proof-gray-900 mb-2 text-xl">Choice-Based Conjoint (CBC)</h4>
                      <p className="text-proof-gray-700 leading-relaxed">
                        The foundational conjoint methodology that presents respondents with systematic choice tasks 
                        to reveal underlying preferences and utility values. CBC provides robust statistical modeling 
                        of customer decision-making through carefully designed experimental frameworks that mirror 
                        real-world purchase scenarios.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-proof-gray-200">
                      <h5 className="font-semibold text-proof-gray-900 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 text-proof-blue-500 mr-2" />
                        Key Advantages
                      </h5>
                      <ul className="text-sm text-proof-gray-600 space-y-1">
                        <li>• Well-established statistical foundation</li>
                        <li>• Cost-effective for straightforward studies</li>
                        <li>• Fast field execution and analysis</li>
                        <li>• Reliable utility estimation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-proof-gray-200">
                      <h5 className="font-semibold text-proof-gray-900 mb-2 flex items-center">
                        <Target className="h-4 w-4 text-proof-blue-500 mr-2" />
                        Best Applications
                      </h5>
                      <ul className="text-sm text-proof-gray-600 space-y-1">
                        <li>• Simple to moderate product complexity</li>
                        <li>• Basic feature and pricing optimization</li>
                        <li>• Market share prediction modeling</li>
                        <li>• Foundational preference research</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Expanded ACBC Section with Image and Pros/Cons */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-proof-gray-900 mb-4">
                Deep Dive: Adaptive Choice-Based Conjoint (ACBC)
              </h3>
              <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
                Our flagship methodology that revolutionizes traditional conjoint analysis through intelligent adaptation and personalized questioning.
              </p>
            </div>

            {/* ACBC Image and Card Side by Side */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* Enhanced ACBC Card */}
              <div className="order-1 lg:order-1">
                <Card className="p-8 bg-gradient-to-br from-proof-emerald-50 to-proof-blue-50 border-l-4 border-l-proof-emerald-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-proof-gray-900 mb-2 text-xl">Adaptive Choice-Based Conjoint (ACBC)</h4>
                      <p className="text-proof-gray-700 leading-relaxed">
                        ACBC represents the evolution of conjoint analysis, using sophisticated algorithms to adapt questions 
                        in real-time based on individual respondent preferences. This creates a more engaging experience 
                        while delivering superior data quality and actionable insights.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-proof-gray-200">
                      <h5 className="font-semibold text-proof-gray-900 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                        Key Advantages
                      </h5>
                      <ul className="text-sm text-proof-gray-600 space-y-1">
                        <li>• Personalized questioning reduces respondent fatigue</li>
                        <li>• Higher data quality through adaptive algorithms</li>
                        <li>• Better handling of complex product configurations</li>
                        <li>• More realistic choice scenarios</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-proof-gray-200">
                      <h5 className="font-semibold text-proof-gray-900 mb-2 flex items-center">
                        <Target className="h-4 w-4 text-proof-emerald-500 mr-2" />
                        Best Applications
                      </h5>
                      <ul className="text-sm text-proof-gray-600 space-y-1">
                        <li>• Complex products with many attributes</li>
                        <li>• High-involvement purchase decisions</li>
                        <li>• B2B product configuration and pricing</li>
                        <li>• Premium consumer goods optimization</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              {/* ACBC Process Image */}
              <div className="order-2 lg:order-2">
                <img 
                  src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/Ja0r8Gi8aaLUQdwUdZozg/image.png"
                  alt="The Adaptive Choice-Based Conjoint Interview Flow"
                  className="w-full rounded-2xl shadow-2xl border border-proof-gray-200"
                />
              </div>
            </div>
          </div>
          
          {/* Expanded MBC Section with Image and Details */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-proof-gray-900 mb-4">
                Deep Dive: Menu-Based Conjoint (MBC)
              </h3>
              <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
                A streamlined approach that mirrors real-world shopping experiences, making complex trade-off decisions intuitive and engaging for respondents.
              </p>
            </div>

            {/* MBC Image and Card Side by Side */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* MBC Process Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/3dyMMkB_xl5J6UkUwNxfM/image.png"
                  alt="The Menu-Based Conjoint Interview Flow"
                  className="w-full rounded-2xl shadow-2xl border border-proof-gray-200"
                />
              </div>

              {/* Enhanced MBC Card */}
              <div className="order-1 lg:order-2">
                <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-l-purple-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-proof-gray-900 mb-2 text-xl">Menu-Based Conjoint (MBC)</h4>
                      <p className="text-proof-gray-700 leading-relaxed">
                        MBC presents respondents with familiar menu-style interfaces where they can select items 
                        and see real-time price calculations. This approach is particularly effective for service 
                        industries, bundled offerings, and scenarios where customers naturally think in terms of 
                        "building" their ideal solution from available options.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-proof-gray-200">
                      <h5 className="font-semibold text-proof-gray-900 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                        Key Advantages
                      </h5>
                      <ul className="text-sm text-proof-gray-600 space-y-1">
                        <li>• Intuitive menu-style shopping experience</li>
                        <li>• Real-time price feedback and transparency</li>
                        <li>• Excellent for service and bundling scenarios</li>
                        <li>• Natural decision-making process</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-proof-gray-200">
                      <h5 className="font-semibold text-proof-gray-900 mb-2 flex items-center">
                        <Target className="h-4 w-4 text-purple-500 mr-2" />
                        Best Applications
                      </h5>
                      <ul className="text-sm text-proof-gray-600 space-y-1">
                        <li>• Restaurant and food service optimization</li>
                        <li>• Software feature and pricing packages</li>
                        <li>• Insurance and financial service bundles</li>
                        <li>• Subscription and membership tiers</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Conjoint Methodology Comparison: Pros & Cons */}
          <div className="bg-white rounded-2xl p-8 border border-proof-gray-200 shadow-lg mb-16">
            <h3 className="text-2xl font-bold text-proof-gray-900 mb-8 text-center">
              Conjoint Methodology Comparison: Pros & Cons
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Traditional CBC */}
              <div className="bg-white rounded-lg p-6 shadow-lg border border-proof-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-proof-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <h5 className="font-bold text-proof-gray-900">Traditional CBC</h5>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h6 className="font-semibold text-proof-emerald-700 mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Pros
                    </h6>
                    <ul className="text-sm text-proof-gray-600 space-y-1">
                      <li>• Well-established methodology</li>
                      <li>• Cost-effective for simple studies</li>
                      <li>• Fast field execution</li>
                      <li>• Straightforward analysis</li>
                      <li>• Good for basic trade-off analysis</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold text-red-700 mb-2 flex items-center">
                      <span className="w-4 h-4 mr-1 text-red-500">✗</span>
                      Cons
                    </h6>
                    <ul className="text-sm text-proof-gray-600 space-y-1">
                      <li>• Higher respondent fatigue</li>
                      <li>• Less realistic choice scenarios</li>
                      <li>• Limited handling of complex products</li>
                      <li>• No adaptation to preferences</li>
                      <li>• May miss important interactions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ACBC */}
              <div className="bg-white rounded-lg p-6 shadow-lg border border-proof-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-proof-emerald-600 rounded-lg flex items-center justify-center mr-3">
                    <Settings className="h-4 w-4 text-white" />
                  </div>
                  <h5 className="font-bold text-proof-gray-900">ACBC</h5>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h6 className="font-semibold text-proof-emerald-700 mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Pros
                    </h6>
                    <ul className="text-sm text-proof-gray-600 space-y-1">
                      <li>• Adaptive, personalized questioning</li>
                      <li>• Superior data quality</li>
                      <li>• Handles complex products well</li>
                      <li>• Realistic choice scenarios</li>
                      <li>• Lower respondent fatigue</li>
                      <li>• Better predictive accuracy</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold text-red-700 mb-2 flex items-center">
                      <span className="w-4 h-4 mr-1 text-red-500">✗</span>
                      Cons
                    </h6>
                    <ul className="text-sm text-proof-gray-600 space-y-1">
                      <li>• Higher initial investment</li>
                      <li>• Longer setup time</li>
                      <li>• Requires specialized expertise</li>
                      <li>• More complex analysis</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Menu-Based Conjoint */}
              <div className="bg-white rounded-lg p-6 shadow-lg border border-proof-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <Activity className="h-4 w-4 text-white" />
                  </div>
                  <h5 className="font-bold text-proof-gray-900">Menu-Based</h5>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h6 className="font-semibold text-proof-emerald-700 mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Pros
                    </h6>
                    <ul className="text-sm text-proof-gray-600 space-y-1">
                      <li>• Intuitive menu-style interface</li>
                      <li>• Good for service industries</li>
                      <li>• Familiar shopping experience</li>
                      <li>• Handles bundling well</li>
                      <li>• Moderate complexity</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold text-red-700 mb-2 flex items-center">
                      <span className="w-4 h-4 mr-1 text-red-500">✗</span>
                      Cons
                    </h6>
                    <ul className="text-sm text-proof-gray-600 space-y-1">
                      <li>• Limited to menu-style products</li>
                      <li>• Less statistical efficiency</li>
                      <li>• Potential order effects</li>
                      <li>• May oversimplify choices</li>
                      <li>• Limited market simulation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-proof-gray-600 mb-4">
                <strong>Need help choosing the right methodology?</strong> Our research experts will recommend the optimal approach based on your specific objectives, product complexity, and budget.
              </p>
              <Link href="/contact">
                <Button className="bg-proof-emerald-600 hover:bg-proof-emerald-700 text-white px-6 py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <Brain className="w-4 h-4 mr-2" />
                  Get Methodology Recommendation
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Guidance Note - Full Width */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-proof-blue-50 to-proof-emerald-50 rounded-lg p-8 border border-proof-gray-200 max-w-3xl mx-auto">
              <p className="text-proof-gray-700 mb-4 text-lg">
                Need guidance choosing the method that is best for your application?
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-proof-blue-600 hover:bg-proof-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Schedule a Brief Discussion
              </Link>
              <p className="text-sm text-proof-gray-600 mt-2">
                No obligation discussion with a PROOF Insights researcher
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Applications */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Key Applications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Strategic Business Applications
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Conjoint analysis provides actionable insights across multiple business scenarios, 
              from product development to pricing optimization and market positioning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Product Design</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Optimize product configurations by understanding which features matter most 
                  to different customer segments and their willingness to pay.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Feature prioritization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Optimal configurations
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Customer-driven design
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Pricing Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Determine optimal pricing by understanding price sensitivity and willingness 
                  to pay for different feature combinations.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Price elasticity modeling
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value-based pricing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Revenue optimization
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <PieChart className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Market Simulation</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Predict market share and competitive dynamics through sophisticated 
                  choice modeling and scenario planning.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market share prediction
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Competitive scenarios
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Launch forecasting
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Segmentation</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Identify customer segments based on preference patterns and develop 
                  targeted strategies for each group.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Preference-based segments
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Targeted offerings
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Persona development
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Brand Positioning</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Develop compelling brand positioning by understanding which attributes 
                  drive choice and differentiate from competitors.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Differentiation strategy
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value proposition
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Competitive advantage
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Portfolio Optimization</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Optimize product portfolios by understanding complementary and 
                  cannibalization effects across different offerings.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Portfolio balance
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Cannibalization analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Cross-selling opportunities
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process & Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Structured Approach to Choice Modeling
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Our systematic methodology ensures accurate, actionable insights that translate 
              directly into strategic business decisions and measurable outcomes.
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
                <p className="text-proof-gray-600">
                  Define attributes, levels, and constraints based on business objectives 
                  and market realities to ensure meaningful and actionable results.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Attribute identification
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Level optimization
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Constraint definition
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
                <p className="text-proof-gray-600">
                  Execute sophisticated choice exercises using optimal experimental design 
                  and adaptive questioning to maximize information value.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Experimental design
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Adaptive questioning
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Quality assurance
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-amber-300">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              </div>
              <CardHeader className="pt-8 pb-6">
                <CardTitle className="text-xl text-proof-gray-900">Analysis & Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Apply advanced statistical modeling to generate utilities, importance scores, 
                  and market simulation tools for strategic decision-making.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Utility estimation
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market simulation
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Custom-built simulator tool
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
            Ready to Decode Customer Preferences?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to leverage advanced conjoint analysis and ACBC methodologies 
            that reveal customer choice drivers and optimize your product strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <a href="/contact">
                <Brain className="w-5 h-5 mr-2" />Start Conjoint Analysis</a>
            </Button>
            <Button asChild size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <a href="/resources/case-studies">
                <PieChart className="w-5 h-5 mr-2" />
                View Success Stories
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}



