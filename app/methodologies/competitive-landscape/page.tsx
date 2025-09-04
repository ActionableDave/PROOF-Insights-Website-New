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
  Compass,
  Network,
  Activity,
  Shield
} from "lucide-react";

export default function CompetitiveLandscapePage() {
  console.log("Competitive Landscape page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-emerald-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 hover:bg-proof-emerald-100">
              <Compass className="w-4 h-4 mr-1" />
              Competitive Intelligence
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Understanding Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">Competitive Landscape</span>
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced research methodologies that map competitive positioning, identify market gaps, 
              and reveal strategic opportunities to gain sustainable competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
                <Link href="#multi-dimensional-scaling">
                  <Compass className="w-5 h-5 mr-2" />
                  Explore Methods
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-proof-gray-300 text-proof-gray-700 hover:bg-proof-gray-50 px-8 py-4 text-lg" asChild>
                <Link href="#market-positioning">
                  <Shield className="w-5 h-5 mr-2" />
                  Competitive Analysis
                </Link>
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
              Strategic Analysis
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Competitive Intelligence Methodologies
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Sophisticated analytical techniques that reveal competitive dynamics, market positioning, 
              and strategic opportunities for differentiation and growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Multi-Dimensional Scaling */}
            <Card id="multi-dimensional-scaling" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300 flex flex-col h-full">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center group-hover:bg-proof-blue-600 transition-colors duration-300">
                    <Network className="h-6 w-6 text-proof-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Multi-Dimensional Scaling</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-proof-gray-600 mb-4">
                  Create visual maps of competitive positioning by analyzing customer perceptions 
                  of similarity and difference between brands, products, or services in the market.
                </p>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Perceptual mapping
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Competitive positioning analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market space visualization
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Gap identification
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Brand differentiation insights
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Strategic positioning guidance
                  </div>
                </div>
                <div className="pt-4 mt-auto">
                  <Button className="w-full bg-proof-blue-600 hover:bg-proof-blue-700 text-white" asChild>
                    <Link href="/methodologies/competitive-landscape/multi-dimensional-scaling">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Structural Equation Modeling */}
            <Card id="structural-equation-modeling-sem" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300 flex flex-col h-full">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-proof-emerald-600 transition-colors duration-300">
                    <Activity className="h-6 w-6 text-proof-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Structural Equation Modeling (SEM)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-proof-gray-600 mb-4">
                  Advanced statistical modeling that reveals complex relationships between multiple 
                  variables, helping understand how various factors influence competitive performance.
                </p>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Causal relationship analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Multi-factor impact modeling
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Performance driver identification
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Strategic lever optimization
                  </div>
                </div>
                <div className="pt-4 mt-auto">
                  <Button className="w-full bg-proof-emerald-600 hover:bg-proof-emerald-700 text-white" asChild>
                    <Link href="/methodologies/competitive-landscape/structural-equation-modeling">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Importance-Performance and NPS Score */}
            <Card id="importance-performance-nps-score" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-amber-300 flex flex-col h-full">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-amber-100 rounded-lg flex items-center justify-center group-hover:bg-proof-amber-600 transition-colors duration-300">
                    <TrendingUp className="h-6 w-6 text-proof-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Importance-Performance and NPS Score</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-proof-gray-600 mb-4">
                  Combine importance-performance analysis with Net Promoter Score to understand 
                  competitive strengths, weaknesses, and customer loyalty drivers.
                </p>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Priority matrix development
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Loyalty benchmarking
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Improvement opportunity ranking
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Competitive advantage assessment
                  </div>
                </div>
                <div className="pt-4 mt-auto">
                  <Button className="w-full bg-proof-amber-600 hover:bg-proof-amber-700 text-white" asChild>
                    <Link href="/methodologies/competitive-landscape/importance-performance-nps">
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

      {/* Strategic Applications */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Strategic Applications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              How Competitive Intelligence Drives Success
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Transform competitive analysis into actionable strategies that create 
              sustainable market advantages and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Compass className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Market Positioning</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Identify optimal market positions by understanding competitive gaps, 
                  customer needs, and differentiation opportunities.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    White space identification
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Differentiation strategies
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value proposition optimization
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Competitive Defense</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Protect market share by understanding competitive threats, 
                  anticipating moves, and developing defensive strategies.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Threat assessment
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Defensive positioning
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Customer retention strategies
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Innovation Direction</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Guide product and service innovation by understanding competitive 
                  weaknesses and unmet customer needs in the market.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Innovation opportunities
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Feature gap analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Development prioritization
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
                  Competitive Advantage
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
                  Turn Intelligence Into Action
                </h2>
              </div>
              <p className="text-lg text-proof-gray-600">
                Our competitive landscape methodologies provide the strategic intelligence 
                needed to make informed decisions, anticipate market changes, and maintain competitive advantage.
              </p>
              
              <div className="space-y-6">
                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Network className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Market Clarity</h3>
                      <p className="text-proof-gray-600">
                        Gain clear understanding of competitive dynamics, market structure, 
                        and positioning opportunities through visual and statistical analysis.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-emerald-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Activity className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Strategic Focus</h3>
                      <p className="text-proof-gray-600">
                        Prioritize initiatives based on competitive impact analysis, 
                        ensuring resources are allocated to high-value opportunities.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-amber-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Proactive Strategy</h3>
                      <p className="text-proof-gray-600">
                        Anticipate competitive moves and market shifts, enabling proactive 
                        rather than reactive strategic decision-making.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
                <Link href="/contact">
                  Start Competitive Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-proof-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-proof-gray-900">Competitive Intelligence Impact</h3>
                  <Badge className="bg-proof-emerald-100 text-proof-emerald-700">Real Results</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-proof-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Compass className="w-5 h-5 text-proof-blue-600" />
                      <span className="text-2xl font-bold text-proof-blue-600">92%</span>
                    </div>
                    <p className="text-sm text-proof-gray-600">Positioning Accuracy</p>
                  </div>
                  
                  <div className="bg-proof-emerald-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Shield className="w-5 h-5 text-proof-emerald-600" />
                      <span className="text-2xl font-bold text-proof-emerald-600">2.8x</span>
                    </div>
                    <p className="text-sm text-proof-gray-600">Market Share Growth</p>
                  </div>

                  <div className="bg-proof-amber-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Target className="w-5 h-5 text-proof-amber-600" />
                      <span className="text-2xl font-bold text-proof-amber-600">150+</span>
                    </div>
                    <p className="text-sm text-proof-gray-600">Competitive Studies</p>
                  </div>

                  <div className="bg-proof-teal-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Activity className="w-5 h-5 text-proof-teal-600" />
                      <span className="text-2xl font-bold text-proof-teal-600">87%</span>
                    </div>
                    <p className="text-sm text-proof-gray-600">Strategy Success Rate</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-proof-gray-600">Competitive Intelligence</span>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Map Your Competitive Landscape?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to leverage advanced competitive intelligence methodologies 
            that reveal market opportunities and drive strategic advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/contact">
                <Brain className="w-5 h-5 mr-2" />
                Begin Analysis
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg" asChild>
              <Link href="/resources/case-studies">
                <PieChart className="w-5 h-5 mr-2" />
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}