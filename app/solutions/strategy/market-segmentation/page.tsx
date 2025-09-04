



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
  Clock,
  MessageSquare,
  TrendingUp,
  Zap,
  Brain,
  PieChart
} from "lucide-react";

export default function MarketSegmentationPage() {
  console.log("Market Segmentation page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-emerald-50 py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/tcjoVjam9_XwrY3cFgoqF/segmentation.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-proof-blue-50/40 to-proof-emerald-50/40"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 hover:bg-proof-emerald-100">
              <Target className="w-4 h-4 mr-1" />
              Strategic Segmentation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Advanced Market 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">Segmentation</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Unlock deeper customer insights with precision segmentation strategies that drive 
              measurable business growth and competitive advantage through evidence-based decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact" className="inline-flex items-center justify-center bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all rounded-md">
                <Brain className="w-5 h-5 mr-2" />
                Discuss Segmentation
              </Link>
              <Link href="/resources/case-studies" className="inline-flex items-center justify-center border border-proof-gray-300 text-proof-gray-700 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all rounded-md">
                <Users className="w-5 h-5 mr-2" />
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              Our Methodology
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Precision-Driven Segmentation Process
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              A systematic approach combining advanced analytics, behavioral insights, and strategic 
              business intelligence to deliver actionable segmentation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-proof-blue-600 transition-colors duration-300">
                  <Users className="h-8 w-8 text-proof-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">
                  Discovery & Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Deep-dive analysis of your market landscape, customer behavior patterns, 
                  and business objectives to define optimal segmentation strategy.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market Research & Analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Stakeholder Alignment Sessions
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Strategic Framework Development
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-proof-emerald-600 transition-colors duration-300">
                  <BarChart3 className="h-8 w-8 text-proof-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">
                  Data Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Advanced analytics and machine learning techniques applied to comprehensive 
                  datasets for precise customer segmentation insights.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Advanced Analytics Modeling
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Behavioral Pattern Recognition
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Predictive Segmentation
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-amber-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-proof-amber-600 transition-colors duration-300">
                  <Target className="h-8 w-8 text-proof-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">
                  Implementation & Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Strategic deployment of segmentation insights with ongoing optimization 
                  and performance monitoring for sustained business impact.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Strategic Implementation Plan
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Performance Monitoring
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Continuous Optimization
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Segmentation Types */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Segmentation Excellence
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Advanced Segmentation Methodologies
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Precision-engineered approaches tailored to your specific business objectives, 
              market dynamics, and customer landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-proof-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Behavioral Intelligence</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Deep analysis of customer actions, purchase patterns, and engagement behaviors 
                  to identify distinct behavioral segments.
                </p>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <div className="w-2 h-2 bg-proof-blue-500 rounded-full mr-3"></div>
                    Purchase Journey Mapping
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <div className="w-2 h-2 bg-proof-blue-500 rounded-full mr-3"></div>
                    Engagement Pattern Analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <div className="w-2 h-2 bg-proof-blue-500 rounded-full mr-3"></div>
                    Lifecycle Stage Identification
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-proof-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Psychographic Profiling</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Understanding the psychological drivers, values, and motivations that influence 
                  customer decision-making processes.
                </p>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <div className="w-2 h-2 bg-proof-emerald-500 rounded-full mr-3"></div>
                    Value System Analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <div className="w-2 h-2 bg-proof-emerald-500 rounded-full mr-3"></div>
                    Lifestyle Pattern Recognition
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <div className="w-2 h-2 bg-proof-emerald-500 rounded-full mr-3"></div>
                    Motivational Trigger Mapping
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-amber-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-proof-amber-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Contextual Segmentation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Analyzing customer behavior within specific contexts, occasions, and environmental 
                  factors that influence decisions.
                </p>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <div className="w-2 h-2 bg-proof-amber-500 rounded-full mr-3"></div>
                    Situational Behavior Analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <div className="w-2 h-2 bg-proof-amber-500 rounded-full mr-3"></div>
                    Temporal Pattern Recognition
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <div className="w-2 h-2 bg-proof-amber-500 rounded-full mr-3"></div>
                    Intent / Mission-Based Analysis
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-teal-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-proof-teal-600" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Predictive Modeling</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Forward-looking segmentation using machine learning to predict future customer 
                  behaviors and segment evolution.
                </p>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <div className="w-2 h-2 bg-proof-teal-500 rounded-full mr-3"></div>
                    ML-Powered Forecasting
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <div className="w-2 h-2 bg-proof-teal-500 rounded-full mr-3"></div>
                    Dynamic Segment Evolution
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <div className="w-2 h-2 bg-proof-teal-500 rounded-full mr-3"></div>
                    Future Value Prediction
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Transform Your Customer Intelligence?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to unlock the power of precision segmentation. 
            Our expert team delivers custom solutions that drive measurable business growth and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all rounded-md">
              <Brain className="w-5 h-5 mr-2" />
              Schedule Strategic Consultation
            </Link>
            <Link href="/resources/case-studies" className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all rounded-md">
              <ArrowRight className="w-5 h-5 mr-2" />
              Download Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}