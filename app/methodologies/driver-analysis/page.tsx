


"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Brain,
  PieChart,
  Settings,
  Zap,
  Activity,
  Layers,
  Network,
  DollarSign,
  Shield,
  Search
} from "lucide-react";

export default function DriverAnalysisPage() {
  console.log("Driver Analysis page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/JrBizC5NHI1tqhj4Zu-md/driver-analysis.png)'}}>
        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <TrendingUp className="w-4 h-4 mr-1" />
              Performance Intelligence
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Driver Analysis
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]"><br /></span>
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed">
              Identify which features, attributes, or experiences have the greatest statistical impact 
              on key business outcomes through advanced correlation and regression modeling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="/contact">
                <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  Discover Your Drivers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              Methodology Overview
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Uncover What Really Drives Performance
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-4xl mx-auto">
              Driver analysis uses sophisticated statistical modeling to identify which specific 
              factors have the strongest correlation and causal relationship with key business 
              metrics like satisfaction, loyalty, purchase intent, and revenue.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col justify-between">
              <div className="space-y-6">
                <Card className="p-6 bg-white border-l-4 border-l-proof-blue-500 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Statistical Correlation</h3>
                      <p className="text-proof-gray-600">
                        Identifies the strength and direction of relationships between variables 
                        and key performance indicators using advanced statistical methods.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-white border-l-4 border-l-proof-emerald-500 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Activity className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Impact Modeling</h3>
                      <p className="text-proof-gray-600">
                        Quantifies the relative impact of each driver on business outcomes, 
                        enabling prioritized resource allocation and strategic decision-making.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/xJyhCs9D6-Qkv37z1sanl/driver-analysis-graph.png"
                alt="Driver Analysis matrix showing performance vs importance quadrants with various factors plotted"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Driver Analysis */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              Analysis Types
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Comprehensive Driver Identification
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Our driver analysis methodology adapts to different business contexts and outcomes, 
              providing targeted insights for various strategic objectives and performance metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Satisfaction Drivers</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Identify which product features, service attributes, or experience elements 
                  most strongly influence customer satisfaction ratings.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Customer satisfaction modeling
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Experience optimization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Quality improvement
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Loyalty Drivers</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Determine the key factors that drive customer retention, repeat purchase, 
                  and long-term loyalty to your brand or product.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Retention modeling
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Churn prevention
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Lifetime value optimization
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Purchase Intent Drivers</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Analyze which product attributes, messaging elements, or value propositions 
                  most effectively drive purchase consideration and intent.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Conversion optimization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Sales funnel analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value proposition testing
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Performance Drivers</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Identify operational or strategic factors that most significantly impact 
                  business performance metrics like revenue, market share, or growth.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Revenue modeling
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Growth factor analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market share drivers
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Network className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Brand Equity Drivers</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Understand which brand attributes, experiences, or communications most 
                  effectively build brand equity and competitive differentiation.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Brand strength modeling
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Perception drivers
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Differentiation analysis
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Innovation Drivers</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Identify which innovation attributes, new features, or capabilities have 
                  the greatest potential to drive market acceptance and success.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Innovation potential
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Adoption drivers
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Success prediction
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header spanning full width */}
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-amber-100 text-proof-amber-700 border-proof-amber-200 px-4 py-2">
              Actionable Applications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Transform Insights into Action
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Driver analysis provides the foundation for strategic decision-making by revealing which factors truly matter for your customers, providing evidence for change initiatives with measurable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col justify-between">
              <div className="space-y-6">
                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-emerald-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Strategic Planning</h3>
                      <p className="text-proof-gray-600">
                        Prior to allocating resources, the additional intelligence allows for the development of data-driven strategies based on proven correlations between specific actions and desired business outcomes.</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Resource Prioritization</h3>
                      <p className="text-proof-gray-600">
                        With the strategic plan in place, leaders can focus investments on high-impact areas by understanding which factors deliver the greatest return on effort and budget allocation.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-amber-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Performance Optimization</h3>
                      <p className="text-proof-gray-600">
                        Continuously improve business results by monitoring and enhancing the key 
                        drivers that most significantly impact success metrics.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="bg-gradient-to-br from-proof-blue-50 to-proof-emerald-50 rounded-2xl p-8 border border-proof-gray-200 flex flex-col">
              <div className="space-y-6 flex-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <BarChart3 className="h-8 w-8 text-proof-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-proof-gray-900">Driver Analysis Framework</h3>
                  <p className="text-proof-gray-600 mt-2">Systematic approach to identifying performance drivers</p>
                </div>
                
                <div className="space-y-4 flex-1 flex flex-col justify-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-proof-gray-900">Data Collection</span>
                      <span className="text-sm text-proof-blue-600">Step 1</span>
                    </div>
                    <div className="w-full bg-proof-gray-200 rounded-full h-2">
                      <div className="bg-proof-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-proof-gray-900">Statistical Modeling</span>
                      <span className="text-sm text-proof-emerald-600">Step 2</span>
                    </div>
                    <div className="w-full bg-proof-gray-200 rounded-full h-2">
                      <div className="bg-proof-emerald-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-proof-gray-900">Impact Ranking</span>
                      <span className="text-sm text-proof-amber-600">Step 3</span>
                    </div>
                    <div className="w-full bg-proof-gray-200 rounded-full h-2">
                      <div className="bg-proof-amber-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-proof-gray-900">Strategic Recommendations</span>
                      <span className="text-sm text-proof-teal-600">Step 4</span>
                    </div>
                    <div className="w-full bg-proof-gray-200 rounded-full h-2">
                      <div className="bg-proof-teal-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/contact">
              <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Discover Your Drivers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Process & Methodology */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-teal-100 text-proof-teal-700 border-proof-teal-200 px-4 py-2">
              <Activity className="h-4 w-4 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Systematic Driver Identification
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Our rigorous analytical approach ensures accurate identification of true performance 
              drivers while controlling for confounding variables and spurious correlations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300 bg-white">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              </div>
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-lg text-proof-gray-900">Variable Definition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-proof-gray-600 text-sm">
                  Identify and define all potential driver variables and key outcome 
                  metrics to be analyzed in the study.
                </p>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Outcome specification
                  </div>
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Driver mapping
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300 bg-white">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              </div>
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-lg text-proof-gray-900">Data Collection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-proof-gray-600 text-sm">
                  Gather comprehensive data on all variables using robust measurement 
                  approaches and representative sampling methods.
                </p>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Measurement design
                  </div>
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Quality assurance
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-amber-300 bg-white">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              </div>
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-lg text-proof-gray-900">Statistical Modeling</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-proof-gray-600 text-sm">
                  Apply advanced regression and correlation techniques to identify 
                  significant drivers and quantify their relative impact.
                </p>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Regression analysis
                  </div>
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Impact quantification
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-teal-300 bg-white">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              </div>
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-lg text-proof-gray-900">Strategic Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-proof-gray-600 text-sm">
                  Translate statistical findings into actionable business 
                  recommendations and prioritized improvement strategies.
                </p>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Priority ranking
                  </div>
                  <div className="flex items-center text-xs text-proof-gray-600">
                    <CheckCircle className="h-3 w-3 text-proof-emerald-500 mr-1" />
                    Action planning
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
            Ready to Identify Your Performance Drivers?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to leverage advanced driver analysis methodology that reveals 
            the key factors driving your business success and guides strategic resource allocation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Brain className="w-5 h-5 mr-2" />
                Start Driver Study
              </Button>
            </a>
            <a href="/resources/case-studies">
              <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <PieChart className="w-5 h-5 mr-2" />
                See Analysis Examples
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


