
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  Target, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  Search,
  Map,
  Users,
  DollarSign,
  Globe,
  Calendar,
  FileText
} from "lucide-react";

export default function MarketDiscoveryOpportunityPage() {
  console.log("Market Discovery Opportunity page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-emerald-50 py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/pxTl2m1Do74clPsjLndaX/market-discovery.png")'
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-proof-blue-50/40 to-proof-emerald-50/40"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <Target className="w-4 h-4 mr-1" />
              Strategic Market Research
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Market Discovery &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">Opportunity Assessment</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Identify and size market opportunities before you invest. Our comprehensive market discovery 
              research helps you understand demand, estimate market size, and identify the most attractive segments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact" className="inline-flex items-center justify-center bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all rounded-md">
                <Search className="w-5 h-5 mr-2" />
                Start Market Discovery
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-proof-emerald-100 text-proof-emerald-700 rounded-full text-sm font-medium mb-8">
              Research Overview
            </div>
            
            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">
              Comprehensive Market Intelligence
            </h2>
            
            {/* Description */}
            <p className="text-lg text-proof-gray-600 mb-16 leading-relaxed">
              Before entering new markets or launching new products, you need clear visibility into market 
              size, growth potential, competitive dynamics, and entry barriers. Our market discovery 
              research provides the strategic intelligence you need to make confident investment decisions.
            </p>
            
            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Total Addressable Market Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 text-left hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-proof-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-proof-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-proof-gray-900">Total Addressable Market (TAM)</h3>
                </div>
                <p className="text-proof-gray-600">
                  Comprehensive market sizing using multiple methodologies to establish total addressable 
                  market and serviceable addressable market.
                </p>
              </div>

              {/* Risk Mitigation Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 text-left hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-proof-gray-900">Risk Mitigation</h3>
                </div>
                <p className="text-proof-gray-600">
                  Identify potential challenges and entry barriers before making significant investments in new 
                  markets or product categories.
                </p>
              </div>

              {/* Growth Trajectory Analysis Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 text-left hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-proof-emerald-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-proof-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-proof-gray-900">Growth Trajectory Analysis</h3>
                </div>
                <p className="text-proof-gray-600">
                  Historical growth analysis and future projections based on market drivers, trends, and regulatory 
                  changes that impact market evolution.
                </p>
              </div>

              {/* Investment Prioritization Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 text-left hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-cyan-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-proof-gray-900">Investment Prioritization</h3>
                </div>
                <p className="text-proof-gray-600">
                  Prioritize market opportunities based on size, growth potential, and competitive intensity to 
                  maximize return on investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Research Components */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <BarChart3 className="h-4 w-4 mr-2" />
              Research Components
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Comprehensive Market Analysis Framework
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Our market discovery research combines multiple methodologies to provide 
              complete visibility into market opportunities and competitive dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Market Sizing</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-black">
                  Comprehensive market sizing using top-down (corporate results, import-export data) and bottom-up (census-derived outgos) approaches to establish TAM, SAM, and SOM with confidence intervals.
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Total addressable market
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Serviceable addressable market
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Serviceable obtainable market
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Growth Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-black">
                  Historical growth trends and future projections based on market drivers, 
                  regulatory changes, and technology adoption patterns.
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Historical trend analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Growth driver identification
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Future projections
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Segment Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-black">
                  Detailed analysis of market segments, customer needs, and 
                  opportunities for differentiation and positioning.
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Segment identification
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Needs assessment
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Opportunity prioritization
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Map className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Competitive Landscape</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-black">
                  Comprehensive mapping of current and potential competitors, 
                  their market positioning, and competitive dynamics.
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Competitor identification
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market share analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Competitive positioning
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Entry Barriers</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-black">
                  Analysis of market entry barriers, regulatory requirements, 
                  and key success factors for market penetration.
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Regulatory analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Capital requirements
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Success factors
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Market Environment</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-black">
                  Assessment of market maturity, technology trends, and 
                  external factors that influence market dynamics and growth.
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market maturity analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Technology trends
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    External factors
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
            Ready to Discover Your Market Opportunity?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to uncover market opportunities, size the potential, 
            and develop a winning market entry strategy based on comprehensive research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all rounded-md">
              <Search className="w-5 h-5 mr-2" />
              Start Market Discovery
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg">
              <FileText className="w-5 h-5 mr-2" />
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
