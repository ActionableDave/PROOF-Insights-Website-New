"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  TrendingUp, 
  Target, 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  Zap,
  Users,
  Search,
  Star,
  Award,
  Eye,
  MessageSquare,
  MousePointer
} from "lucide-react";

export default function AdOptimizationPage() {
  console.log("Ad Optimization page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/aMFFUYDC6Vwvv3Q9zhOeB/ad-optimization.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-white/65"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <TrendingUp className="w-4 h-4 mr-1" />
              Marketing Research
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Ad
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">Optimization</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Maximize your advertising ROI through systematic testing and optimization of creative elements, 
              copy, targeting, and media placement. Our research identifies the most effective combinations to drive engagement and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <Zap className="w-5 h-5 mr-2" />
                  Optimize Your Ads
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
                Performance Optimization
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
                Data-Driven Ad Performance
              </h2>
              <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
                Every advertising dollar should work as hard as possible for your business. Our ad optimization research uses systematic testing to identify the creative elements, messaging, and targeting strategies that drive the highest engagement, conversion rates, and return on ad spend.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Creative & Visual Testing</h3>
                    <p className="text-proof-gray-600">
                      Test different creative concepts, visuals, and design elements to identify 
                      which combinations capture attention and drive engagement.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-emerald-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Message & Copy Optimization</h3>
                    <p className="text-proof-gray-600">
                      Optimize headlines, copy, and call-to-action messaging to maximize 
                      click-through rates and conversion performance.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Areas */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <BarChart3 className="h-4 w-4 mr-2" />
              Optimization Framework
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Comprehensive Ad Optimization
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Our systematic approach to ad optimization tests every critical element 
              that impacts performance to maximize your advertising effectiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Creative Concepts</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Test different creative approaches, visual styles, and design 
                  elements to identify the most engaging combinations.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Visual design testing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Color scheme optimization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Layout variations
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Headlines & Copy</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Optimize ad copy, headlines, and messaging to maximize 
                  engagement and drive desired actions.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Headline optimization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Body copy testing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Tone and voice refinement
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MousePointer className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Call-to-Action</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Test different call-to-action strategies to maximize 
                  click-through rates and conversion performance.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    CTA button testing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Action word optimization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Urgency messaging
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Audience Targeting</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Optimize audience targeting and segmentation to reach 
                  the most responsive and valuable customer segments.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Demographic targeting
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Interest-based segmentation
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Behavioral targeting
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Media Channel Mix</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Optimize media channel selection and budget allocation 
                  to maximize reach and efficiency across platforms.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Channel performance analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Budget optimization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Cross-platform efficiency
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Performance Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Continuous monitoring and optimization based on real-time 
                  performance data and key metrics.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Real-time monitoring
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    A/B testing framework
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Iterative optimization
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
            Ready to Optimize Your Ad Performance?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to systematically test and optimize every aspect of your advertising 
            campaigns for maximum ROI and performance improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Zap className="w-5 h-5 mr-2" />Optimize my Ads</Button>
            <Link href="/resources/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}





