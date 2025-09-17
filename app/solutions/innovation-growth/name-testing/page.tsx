





"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "@/components/Header";
import { 
  Type, 
  Target, 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  Star,
  Users,
  Search,
  Award,
  TrendingUp,
  Eye,
  Globe
} from "lucide-react";

export default function NameTestingPage() {
  console.log("Name Testing page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/91lElpfVF9P1Q-gYf6ZKi/feature-benefit.png)'}}>
        {/* White overlay for text readability */}
        <div className="absolute inset-0 bg-white/75"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-white/90 text-proof-blue-700 border-proof-blue-200 hover:bg-white/90">
              <Type className="w-4 h-4 mr-1" />
              Innovation Research
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Name
              <span className="text-white block leading-[1.2]">Testing</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Choose the perfect name for your product or brand. Our name testing evaluates memorability, 
              appeal, and market potential across your target audience to ensure optimal naming decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact" className="inline-flex items-center justify-center bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all rounded-md">
                <Search className="w-5 h-5 mr-2" />
                Test Your Names
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Header Content */}
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              Testing Overview
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              Strategic Name Selection
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Your name is one of your most valuable brand assets. It needs to be memorable, meaningful, 
              and marketable. Our name testing ensures you choose a name that resonates with your target 
              audience, supports your brand positioning, and works across all markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2 text-lg">Memorability & Recall Testing</h3>
                    <p className="text-proof-gray-600">
                      Comprehensive testing of name memorability and recall to ensure your 
                      name sticks in customers' minds and builds lasting brand recognition.
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
                    <h3 className="font-bold text-black mb-2 text-lg">Brand Fit & Positioning</h3>
                    <p className="text-proof-gray-600">
                      Evaluate how well potential names align with your brand strategy, 
                      positioning, and desired brand associations among target audiences.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden h-full">
              <img 
                src="https://images.pexels.com/photos/6476585/pexels-photo-6476585.jpeg" 
                alt="Professionals analyzing name testing data and metrics on tablet"
                className="w-full h-full object-cover"
              />
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
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              Comprehensive Name Evaluation
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Our name testing methodology evaluates every critical aspect of naming 
              to ensure you select a name that drives brand success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-black">Memorability Testing</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Comprehensive testing of name memorability and recall 
                  across different time intervals and contexts.
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Immediate recall
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Delayed recall
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Recognition testing
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-black">Brand Fit Assessment</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Evaluate how well potential names align with your brand 
                  strategy, values, and desired market positioning.
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Brand alignment
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Positioning support
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Values association
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Type className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-black">Pronunciation & Spelling</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Assess ease of pronunciation and spelling accuracy 
                  to ensure broad accessibility and usability.
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Pronunciation ease
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Spelling accuracy
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Phonetic clarity
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-black">Cultural Validation</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Comprehensive cultural and linguistic validation 
                  to ensure appropriate meaning across markets.
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Cultural appropriateness
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Linguistic validation
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    International testing
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-black">Availability Check</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Comprehensive trademark and domain availability 
                  assessment to ensure legal protection options.
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Trademark search
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Domain availability
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Social media handles
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-black">Audience Reaction</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Measure target audience reactions and emotional 
                  associations with potential name options.
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Emotional response
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Association mapping
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Appeal measurement
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
            Ready to Find the Perfect Name?
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Partner with PROOF Insights to test and validate your naming options, ensuring you choose 
            a name that resonates with your audience and supports your brand success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all rounded-md">
              <Search className="w-5 h-5 mr-2" />
              Start Name Testing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}













