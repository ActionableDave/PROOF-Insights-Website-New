"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { 
  Star, 
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
  BarChart3,
  Activity,
  Heart,
  Shield,
  Smile
} from "lucide-react";

export default function KanoAnalysisPage() {
  console.log("Kano Analysis page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/a-WrSAh5R-L45vetxdTba/kano-method.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-amber-100 text-proof-amber-700 border-proof-amber-200 hover:bg-proof-amber-100">
              <Star className="w-4 h-4 mr-1" />
              Customer Satisfaction Science
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Kano Analysis
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-amber-600 to-proof-emerald-600 block leading-[1.2]"><br /></span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Categorize product features into Must-Have, Performance, and Delight attributes 
              to understand customer satisfaction drivers and create compelling value propositions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-proof-amber-600 hover:bg-proof-amber-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <Star className="w-5 h-5 mr-2" />
                  Start Kano Analysis
                </Button>
              </Link>
              <Link href="/resources/case-studies">
                <Button size="lg" className="bg-white text-proof-amber-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <PieChart className="w-5 h-5 mr-2" />
                  View Case Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kano Model Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              The Kano Framework
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Three Categories of Customer Satisfaction
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              The Kano Model categorizes product features based on their relationship to customer satisfaction with a product or service, revealing which attributes are essential, which drive performance, and which create delight.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Must-Have Features */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-red-300 bg-gradient-to-br from-white to-red-50/30">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors duration-300">
                  <Shield className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Must-Have Features</CardTitle>
                <Badge className="bg-red-100 text-red-700 border-red-200 mx-auto">Basic Expectations</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600 text-center">
                  Essential features that customers expect. Their absence causes dissatisfaction, 
                  but their presence doesn't increase satisfaction beyond neutral.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Table stakes functionality
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Minimum viable requirements
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Non-negotiable elements
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Industry standards
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Features */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-proof-blue-600 transition-colors duration-300">
                  <TrendingUp className="h-8 w-8 text-proof-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Performance Features</CardTitle>
                <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 mx-auto">Linear Satisfaction</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600 text-center">
                  Features where satisfaction increases linearly with performance. 
                  Better execution directly translates to higher customer satisfaction.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Quantifiable attributes
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Competitive differentiators
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value proposition drivers
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Investment priorities
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delight Features */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-amber-300 bg-gradient-to-br from-white to-amber-50/30">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-proof-amber-600 transition-colors duration-300">
                  <Smile className="h-8 w-8 text-proof-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Delight Features</CardTitle>
                <Badge className="bg-proof-amber-100 text-proof-amber-700 border-proof-amber-200 mx-auto">Unexpected Joy</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600 text-center">
                  Unexpected features that create positive surprise and delight. 
                  Their absence doesn't cause dissatisfaction, but their presence creates loyalty.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Unexpected benefits
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Innovation opportunities
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Brand differentiation
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Customer loyalty drivers
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Applications */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Strategic Applications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Transform Customer Insights into Strategy
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Kano analysis provides actionable insights for product development, feature prioritization, 
              competitive positioning, and customer experience optimization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Card className="p-6 bg-white border-l-4 border-l-proof-amber-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Product Development</h3>
                      <p className="text-proof-gray-600">
                        Prioritize feature development by understanding which capabilities are essential, 
                        which drive satisfaction, and which create unexpected delight.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-white border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Competitive Strategy</h3>
                      <p className="text-proof-gray-600">
                        Identify opportunities to exceed competitor offerings through strategic investment 
                        in performance features and innovative delight elements.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-l-4 border-l-proof-emerald-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Customer Experience</h3>
                      <p className="text-proof-gray-600">
                        Design experiences that satisfy basic needs, excel at performance drivers, 
                        and surprise customers with unexpected moments of delight.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-proof-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-proof-gray-900">Kano Model Framework</h3>
                  <Badge className="bg-proof-amber-100 text-proof-amber-700">Customer-Centric</Badge>
                </div>
                
                <div className="w-full">
                  <img 
                    src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/j8f_4zrTBLblmf3-qU-cO/image.png" 
                    alt="Kano Model diagram showing three feature categories: Must Haves (red line), Performers (green line), and Delighters (yellow line) plotted against Performance and Satisfaction axes"
                    className="w-full h-auto rounded-lg shadow-sm"
                    data-macaly="kano-model-diagram"
                  />
                </div>

                <div className="bg-proof-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-proof-gray-900 mb-2">Key Benefits</h4>
                  <ul className="space-y-1 text-sm text-proof-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Clear feature prioritization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Resource allocation guidance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Customer satisfaction optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Implementation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Activity className="h-4 w-4 mr-2" />
              Implementation Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Structured Kano Analysis Approach
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Our systematic methodology ensures accurate feature classification and actionable insights 
              that directly inform product strategy and development priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-amber-300">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              </div>
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-lg text-proof-gray-900">Feature Identification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-proof-gray-600 text-sm">
                  Collaborate to identify and define the specific features, attributes, 
                  or capabilities to be evaluated.
                </p>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Stakeholder workshops
                  </div>
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Feature mapping
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              </div>
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-lg text-proof-gray-900">Questionnaire Design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-proof-gray-600 text-sm">
                  Develop paired questions for each feature to capture functional 
                  and dysfunctional customer responses.
                </p>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Question optimization
                  </div>
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Response validation
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              </div>
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-lg text-proof-gray-900">Data Collection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-proof-gray-600 text-sm">
                  Execute comprehensive survey across target customer segments 
                  to capture satisfaction relationships.
                </p>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Representative sampling
                  </div>
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Quality assurance
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-teal-300">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              </div>
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-lg text-proof-gray-900">Classification & Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-proof-gray-600 text-sm">
                  Apply Kano evaluation table to classify features and develop 
                  strategic recommendations for product development.
                </p>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Feature classification
                  </div>
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Strategic roadmap
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-amber-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Optimize Customer Satisfaction?
          </h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to leverage Kano Analysis methodology that reveals the true 
            drivers of customer satisfaction and guides strategic feature development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-proof-amber-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Brain className="w-5 h-5 mr-2" />
                Begin Kano Study
              </Button>
            </Link>
            <Link href="/resources/case-studies">
              <Button size="lg" className="bg-white text-proof-amber-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <PieChart className="w-5 h-5 mr-2" />
                View Case Examples
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



