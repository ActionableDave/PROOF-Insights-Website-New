"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  Lightbulb, 
  Target, 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  Users,
  TrendingUp,
  Search,
  Star,
  Zap,
  Award,
  Eye
} from "lucide-react";

export default function ConceptTestingPage() {
  console.log("Concept Testing page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-emerald-50 py-24">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/6592753/pexels-photo-6592753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="Business concept testing meeting" 
            className="w-full h-full object-cover"
            data-macaly="hero-background-image"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <Lightbulb className="w-4 h-4 mr-1" />
              Innovation Research
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Concept
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">Testing</span>
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our concept testing helps you validate your and refine your new product or service ideas,  understand market appeal, 
              identify optimization opportunities, and increase the likelihood of market success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact" className="inline-flex items-center justify-center bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all rounded-md h-11">
                <Search className="w-5 h-5 mr-2" />
                Test Your Concept
              </Link>
            
            </div>
          </div>
        </div>
      </section>

      {/* Testing Components */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <BarChart3 className="h-4 w-4 mr-2" />
              Testing Framework
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Validate Ideas Before Investment
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Concept testing is essential for reducing innovation risk and maximizing market success.
              Our research helps you understand which concepts resonate with your target audience,
              why they appeal, and how to optimize them for maximum market impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Appeal Measurement</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Comprehensive measurement of concept appeal across multiple 
                  dimensions to understand overall market attractiveness.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Overall appeal rating
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Uniqueness assessment
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Relevance evaluation
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Purchase Intent</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Measure purchase intention and trial willingness to predict 
                  market acceptance and commercial viability.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Purchase likelihood
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Trial intention
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Price sensitivity
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Message Clarity</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Evaluate how well your concept communicates its value proposition 
                  and benefits to the target audience.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Comprehension testing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Believability assessment
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Communication effectiveness
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Target Audience</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Identify the segments most attracted to your concept and 
                  understand their characteristics and motivations.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Segment identification
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Profile development
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Motivation analysis
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Competitive Comparison</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Compare your concept against existing alternatives and 
                  competitive offerings to assess differentiation.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Competitive benchmarking
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Differentiation analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Positioning assessment
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Optimization Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Actionable recommendations for concept optimization 
                  based on detailed feedback and performance analysis.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Improvement opportunities
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Refinement recommendations
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Development guidance
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Concept Quality Considerations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-amber-100 text-proof-amber-700 border-proof-amber-200 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Quality Framework
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Important Concept Quality Considerations
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Our comprehensive quality framework evaluates concepts across four critical dimensions 
              to ensure market success and sustainable competitive advantage.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <img 
              src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/09VF0Uxekr67QWOb52ALW/concept-testing-methodology-graphic.png" 
              alt="Quality Considerations Framework showing Problem Urgency, Solution Fit, Market Impact, and Adoption Velocity quadrants" 
              className="max-w-full h-auto w-96 rounded-lg shadow-md"
              data-macaly="quality-framework-diagram"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-gray-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Problem Urgency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Assesses how pressing and immediate the customer problem is. High urgency creates 
                  natural demand and reduces resistance to trying new solutions.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Pain point severity evaluation
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Current solution inadequacy
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Time sensitivity analysis
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-solution-fit-200 to-solution-fit-100 hover:shadow-lg transition-shadow duration-300 border-solution-fit-200">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-solution-fit-200 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-solution-fit-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Solution Fit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Measures how well the concept addresses the identified problem and meets 
                  customer needs. Strong solution fit indicates clear value proposition.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Problem-solution alignment
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Feature-benefit mapping
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value proposition clarity
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300 border-proof-blue-200">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Market Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Evaluates the potential market size, revenue opportunity, and strategic 
                  importance of the concept to business growth objectives.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Total addressable market
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Revenue potential assessment
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Strategic value analysis
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-sky-50 to-sky-100 hover:shadow-lg transition-shadow duration-300 border-proof-blue-200">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-sky-200 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-sky-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Adoption Velocity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Assesses how quickly customers will embrace and integrate the new concept 
                  into their routines, affecting time-to-market success.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Behavior change requirements
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Learning curve analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Implementation barriers
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
            Ready to Test Your Concept?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to validate your concepts, optimize their appeal, 
            and increase your chances of market success before you invest in development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all rounded-md h-11">
              <Search className="w-5 h-5 mr-2" />
              Start Concept Testing
            </Link>
            <Link href="/resources/case-studies" className="inline-flex items-center justify-center bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all rounded-md h-11">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Testing Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



