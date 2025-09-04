"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  Star, 
  Target, 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  Users,
  Zap,
  Settings,
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  Activity,
  Layers
} from "lucide-react";

export default function FeatureBenefitTestingPage() {
  console.log("Feature Benefit Testing page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/g62RPENCwTIRQguNpW89e/features-benefits.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* 65% opacity overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <Star className="w-4 h-4 mr-1" />
              Innovation Research
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
              Feature & Benefit
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-400 to-proof-emerald-400 block leading-[1.2]">Testing</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed font-medium">
              Prioritize features and benefits that matter most to your customers. Our testing helps you focus 
              development resources on what drives purchase decisions and maximizes customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <Star className="w-5 h-5 mr-2" />
                  Test Features & Benefits
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
                  Customer-Centered Development
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
                  Build What Customers Actually Want
                </h2>
              </div>
              <p className="text-lg text-proof-gray-600">
                Not all features are created equal. Our feature and benefit testing reveals which capabilities 
                drive purchase decisions, enhance satisfaction, and justify premium pricing. Make informed 
                development decisions based on customer priorities, not internal assumptions.
              </p>
              
              <div className="space-y-6">
                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Feature Importance Analysis</h3>
                      <p className="text-proof-gray-600">
                        Identify which features are most important to customers and 
                        drive their purchase decisions and satisfaction.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-emerald-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Benefit Hierarchy Testing</h3>
                      <p className="text-proof-gray-600">
                        Understand how customers prioritize different benefits and 
                        which messaging resonates most effectively.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-proof-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-proof-gray-900">Feature Priority Matrix</h3>
                  <Badge className="bg-proof-blue-100 text-proof-blue-700">Development Guide</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-proof-emerald-50 border border-proof-emerald-200 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="w-5 h-5 text-proof-emerald-600 mr-1" />
                      <span className="text-xs font-bold text-proof-emerald-700">High Impact</span>
                    </div>
                    <div className="text-xs text-proof-gray-600">High Feasibility</div>
                    <div className="text-lg font-bold text-proof-emerald-600 mt-1">Must Have</div>
                  </div>
                  
                  <div className="bg-proof-amber-50 border border-proof-amber-200 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Lightbulb className="w-5 h-5 text-proof-amber-600 mr-1" />
                      <span className="text-xs font-bold text-proof-amber-700">High Impact</span>
                    </div>
                    <div className="text-xs text-proof-gray-600">Low Feasibility</div>
                    <div className="text-lg font-bold text-proof-amber-600 mt-1">Future</div>
                  </div>

                  <div className="bg-proof-blue-50 border border-proof-blue-200 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Settings className="w-5 h-5 text-proof-blue-600 mr-1" />
                      <span className="text-xs font-bold text-proof-blue-700">Low Impact</span>
                    </div>
                    <div className="text-xs text-proof-gray-600">High Feasibility</div>
                    <div className="text-lg font-bold text-proof-blue-600 mt-1">Nice to Have</div>
                  </div>

                  <div className="bg-proof-red-50 border border-proof-red-200 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Activity className="w-5 h-5 text-proof-red-600 mr-1" />
                      <span className="text-xs font-bold text-proof-red-700">Low Impact</span>
                    </div>
                    <div className="text-xs text-proof-gray-600">Low Feasibility</div>
                    <div className="text-lg font-bold text-proof-red-600 mt-1">Avoid</div>
                  </div>
                </div>

                <div className="space-y-3 border-t border-proof-gray-200 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-proof-gray-600">Development Priority Score</span>
                    <span className="font-medium text-proof-gray-900">8.4/10</span>
                  </div>
                  <div className="w-full bg-proof-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-proof-blue-500 to-proof-emerald-500 h-2 rounded-full" style={{width: '84%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Methods */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <BarChart3 className="h-4 w-4 mr-2" />
              Testing Methodologies
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Comprehensive Feature & Benefit Analysis
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Our multi-dimensional approach evaluates features and benefits from every angle 
              to guide strategic development and messaging decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Importance Testing</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Measure the relative importance of features and benefits 
                  in driving customer preference and purchase decisions.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    MaxDiff scaling analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Priority ranking exercises
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Trade-off evaluation
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Preference Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Understand customer preferences for different feature 
                  configurations and benefit combinations.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Conjoint analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Choice modeling
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Utility scoring
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Benefit Hierarchy</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Establish clear benefit hierarchy to guide messaging 
                  strategy and communication prioritization.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Message impact testing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Communication sequencing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value proposition ranking
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Usage Correlation</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Analyze the relationship between feature usage patterns 
                  and customer satisfaction outcomes.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Behavioral tracking
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Satisfaction correlation
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Usage frequency impact
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Segment Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Identify how feature preferences vary across different 
                  customer segments and use cases.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Demographic preferences
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Use case prioritization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Behavioral segmentation
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Development Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Create data-driven development roadmaps based on feature 
                  impact, feasibility, and customer priorities.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Priority matrix analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Resource allocation guide
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Timeline recommendations
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
            Ready to Prioritize Your Features?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to identify which features and benefits matter most to your customers 
            and build products that drive satisfaction and market success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Star className="w-5 h-5 mr-2" />
              Start Feature Testing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Priority Examples
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}