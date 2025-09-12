"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { 
  Target, 
  Users, 
  PieChart, 
  Lightbulb,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Brain,
  BarChart3,
  Settings,
  Zap,
  Activity,
  Layers,
  Network,
  Maximize,
  Shield
} from "lucide-react";

export default function TurfAnalysisPage() {
  console.log("TURF Analysis page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24"
        style={{
          backgroundImage: `url('https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/0TffX-2h2OhRT0ZN9rTFm/turf.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* 65% White Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-teal-100 text-proof-teal-700 border-proof-teal-200 hover:bg-proof-teal-100">
              <Target className="w-4 h-4 mr-1" />
              Portfolio Optimization
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              TURF Analysis
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-teal-600 to-proof-blue-600 block">Total Unduplicated Reach & Frequency</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Optimize product portfolios and feature sets by maximizing market coverage 
              while minimizing cannibalization and redundancy across offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="/contact">
                <Button size="lg" className="bg-proof-teal-600 hover:bg-proof-teal-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <Target className="w-5 h-5 mr-2" />
                  Start TURF Analysis
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TURF Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              Methodology Overview
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Maximize Coverage, Minimize Overlap
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-4xl mx-auto">
              TURF (Total Unduplicated Reach and Frequency) analysis determines the optimal 
              combination of products, features, or communications that reaches the maximum 
              number of target customers with minimal redundancy.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Card className="p-6 bg-white border-l-4 border-l-proof-teal-500 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-proof-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Maximize className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Total Unduplicated Reach</h3>
                    <p className="text-proof-gray-600">
                      Measures the total percentage of the target market 
                      that would be appealed to by at least one product in 
                      the portfolio combination.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white border-l-4 border-l-proof-blue-500 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Frequency Distribution</h3>
                    <p className="text-proof-gray-600">
                      Analyzes how many products appeal to each 
                      customer segment, revealing overlap patterns and 
                      potential cannibalization effects.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <img 
                src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/XxUCDeVsqWTxMaMxw2_KD/image.png"
                alt="TURF Analysis - Total Unduplicated Reach & Frequency showing ice cream flavor combinations with reach percentages"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Applications */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Lightbulb className="h-4 w-4 mr-2" />
              Strategic Applications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Where TURF Analysis Drives Results
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              TURF analysis provides strategic insights across multiple business contexts, 
              from product line optimization to feature selection and communication strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Product Portfolio</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Optimize product lines by identifying the ideal combination of offerings 
                  that maximizes market coverage without excessive overlap.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Portfolio rationalization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    New product planning
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Line extension strategy
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Feature Selection</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Determine optimal feature combinations that appeal to the broadest 
                  customer base while avoiding redundant functionality.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Feature prioritization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Bundle optimization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Configuration planning
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Network className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Media Planning</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Optimize media mix and communication strategies to reach maximum 
                  audience with minimal message overlap and wasted impressions.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Media mix optimization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Message strategy
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Campaign efficiency
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Market Segmentation</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Identify optimal customer segments to target with specific offerings, 
                  maximizing market penetration across diverse customer groups.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Segment targeting
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Coverage analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market penetration
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Channel Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Optimize distribution and sales channel combinations to reach 
                  maximum customers while minimizing channel conflict and redundancy.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Channel optimization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Distribution efficiency
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Conflict minimization
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Pricing Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Develop pricing architectures and tier strategies that capture 
                  maximum market value across different customer segments.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Price tier optimization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value capture
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Revenue maximization
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
            <Badge className="bg-proof-teal-100 text-proof-teal-700 border-proof-teal-200 px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Systematic TURF Optimization
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures accurate measurement of reach and frequency patterns, 
              delivering optimal portfolio combinations that maximize efficiency and market impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-teal-300">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              </div>
              <CardHeader className="pt-8 pb-6">
                <CardTitle className="text-xl text-proof-gray-900">Portfolio Definition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Define the universe of potential products, features, or elements 
                  to be evaluated and optimized within the portfolio framework.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Element identification
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Constraint definition
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Success criteria
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              </div>
              <CardHeader className="pt-8 pb-6">
                <CardTitle className="text-xl text-proof-gray-900">Appeal Measurement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Measure customer appeal and preference for each portfolio element 
                  across target market segments using rigorous research methods.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Appeal assessment
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Preference measurement
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Segment analysis
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              </div>
              <CardHeader className="pt-8 pb-6">
                <CardTitle className="text-xl text-proof-gray-900">Optimization Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Apply TURF algorithms to identify optimal combinations that maximize 
                  reach while minimizing overlap and resource inefficiencies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Algorithm optimization
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Scenario modeling
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
      <section className="py-20 bg-gradient-to-br from-proof-teal-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Optimize Your Portfolio?
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to leverage TURF analysis methodology that maximizes market reach, 
            minimizes redundancy, and delivers optimal portfolio performance across your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-teal-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Brain className="w-5 h-5 mr-2" />
              Begin TURF Study
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-teal-600 px-8 py-4 text-lg">
              <PieChart className="w-5 h-5 mr-2" />
              View Portfolio Examples
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


