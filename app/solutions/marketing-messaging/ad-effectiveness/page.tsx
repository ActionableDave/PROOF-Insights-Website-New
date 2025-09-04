"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  BarChart3, 
  Target, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Eye,
  Users,
  Search,
  Star,
  Award,
  Zap,
  MessageSquare,
  Heart,
  Activity
} from "lucide-react";

export default function AdEffectivenessPage() {
  console.log("Ad Effectiveness page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/it1DfQP34G11OTRNvRkT4/ad-effectiveness.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <BarChart3 className="w-4 h-4 mr-1" />
              Marketing Research
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Ad
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">Effectiveness</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Measure and analyze the true impact of your advertising campaigns across all touchpoints. 
              Understand which campaigns drive brand awareness, consideration, and actual purchase behavior to optimize your marketing investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <Activity className="w-5 h-5 mr-2" />
                  Measure Ad Impact
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
                Campaign Measurement
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
                Prove Your Advertising Impact
              </h2>
              <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
                Beyond clicks and impressions, true ad effectiveness measures how your campaigns influence brand 
                perception, purchase consideration, and actual buying behavior. Our comprehensive measurement approach 
                provides the insights you need to optimize your marketing investment and prove ROI.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Brand Awareness Lift</h3>
                    <p className="text-proof-gray-600">
                      Measure how your campaigns increase brand awareness and recognition 
                      among your target audience over time.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-emerald-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Purchase Intent Analysis</h3>
                    <p className="text-proof-gray-600">
                      Track changes in purchase intention and consideration driven 
                      by your advertising campaigns and messaging.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Measurement Areas */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <BarChart3 className="h-4 w-4 mr-2" />
              Measurement Framework
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Comprehensive Ad Effectiveness Measurement
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Our multi-dimensional measurement approach captures the full impact of your advertising 
              campaigns across awareness, consideration, preference, and purchase behavior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Brand Awareness Lift</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Measure increases in brand awareness, recognition, and 
                  recall driven by your advertising campaigns.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Unaided brand awareness
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Aided brand recognition
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Ad recall measurement
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Purchase Intent Change</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Track how campaigns influence purchase intention and 
                  consideration among your target audience.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Intent to purchase
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Consideration set inclusion
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Purchase timeline acceleration
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Message Comprehension</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Evaluate how well your advertising communicates key 
                  messages and brand positioning to the audience.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Message clarity
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value proposition understanding
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Brand association strength
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Campaign Attribution</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Track the customer journey and attribute conversions 
                  to specific campaigns and touchpoints.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Multi-touch attribution
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Cross-channel impact
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Customer journey mapping
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Pre/Post Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Compare key metrics before and after campaign launch 
                  to isolate advertising impact from other factors.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Baseline measurement
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Impact isolation
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Statistical significance
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">ROI Calculation</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Calculate return on advertising spend and overall 
                  campaign ROI with confidence and precision.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Revenue attribution
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Incremental sales lift
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    ROAS calculation
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
            Ready to Measure Your Ad Effectiveness?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to comprehensively measure your advertising impact, prove ROI, 
            and optimize your marketing investment for maximum effectiveness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Activity className="w-5 h-5 mr-2" />
              Start Effectiveness Study
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Measurement Examples
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}



