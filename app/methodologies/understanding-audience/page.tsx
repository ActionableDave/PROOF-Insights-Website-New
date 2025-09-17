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
  TrendingUp,
  Brain,
  PieChart,
  Search,
  Network,
  Database,
  Layers
} from "lucide-react";

export default function UnderstandingAudiencePage() {
  console.log("Understanding Audience page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24"
               style={{
                 backgroundImage: `url('https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/gRu9DiU2oN9cN4NkVCgpi/understanding-audience.png')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
               }}>
        {/* 65% White Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 hover:bg-proof-emerald-100">
              <Users className="w-4 h-4 mr-1" />
              Audience Intelligence
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Understanding Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">Audience</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Advanced analytical methodologies that reveal deep audience insights, behavioral patterns, 
              and segmentation strategies to drive targeted marketing and product development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
                <Link href="/contact">
                  <Search className="w-5 h-5 mr-2" />
                  Discover Methods
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Methodologies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              Advanced Analytics
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Audience Analysis Methodologies
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Sophisticated statistical and modeling techniques that uncover hidden patterns 
              in customer behavior, preferences, and decision-making processes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Factor Analysis */}
            <Card id="factor-analysis" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center group-hover:bg-proof-blue-600 transition-colors duration-300">
                    <BarChart3 className="h-6 w-6 text-proof-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Factor Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Identify underlying dimensions and latent variables that explain complex customer 
                  attitudes, motivations, and behavioral patterns across multiple data points.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Data dimension reduction
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Latent variable identification
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Attitude structure mapping
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Behavioral pattern analysis
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-proof-blue-600 hover:bg-proof-blue-700 text-white" asChild>
                    <Link href="/methodologies/factor-analysis">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Cluster Analysis */}
            <Card id="cluster-analysis" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-proof-emerald-600 transition-colors duration-300">
                    <Network className="h-6 w-6 text-proof-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Cluster Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Group customers into distinct segments based on similarities in behavior, 
                  preferences, demographics, or psychographics for targeted strategies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Natural segment discovery
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Behavioral grouping
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market segmentation
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Persona development
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-proof-emerald-600 hover:bg-proof-emerald-700 text-white" asChild>
                    <Link href="/methodologies/cluster-analysis">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Latent Class Modeling */}
            <Card id="latent-class-modeling" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-amber-300">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-amber-100 rounded-lg flex items-center justify-center group-hover:bg-proof-amber-600 transition-colors duration-300">
                    <Layers className="h-6 w-6 text-proof-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Latent Class Modeling</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Advanced statistical modeling that identifies hidden subgroups within populations 
                  based on response patterns to survey questions or behavioral data.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Hidden segment identification
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Response pattern analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Probabilistic segmentation
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Class membership prediction
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-proof-amber-600 hover:bg-proof-amber-700 text-white" asChild>
                    <Link href="/methodologies/latent-class-modeling">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Database Modeling */}
            <Card id="database-modeling" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-teal-300">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-teal-100 rounded-lg flex items-center justify-center group-hover:bg-proof-teal-600 transition-colors duration-300">
                    <Database className="h-6 w-6 text-proof-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Database Modeling</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Leverage existing customer databases and transaction data to build predictive 
                  models that identify valuable segments and predict future behavior.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Transaction pattern analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Customer lifetime value modeling
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Churn prediction
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Propensity scoring
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-proof-teal-600 hover:bg-proof-teal-700 text-white" asChild>
                    <Link href="/methodologies/database-modeling">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Examples */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Real-World Applications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              How These Methods Drive Results
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Practical applications of audience understanding methodologies across 
              different business scenarios and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Customer Segmentation</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Identify distinct customer groups for targeted marketing campaigns, 
                  personalized experiences, and tailored product offerings.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Demographic segmentation
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Behavioral clustering
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value-based grouping
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Market Expansion</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Discover new market opportunities by understanding unmet needs and 
                  identifying high-potential customer segments for growth.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Opportunity mapping
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Need gap analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Growth potential assessment
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Product Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Guide product innovation by understanding customer motivations, 
                  preferences, and unmet needs across different audience segments.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Feature prioritization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    User experience optimization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Innovation opportunity identification
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              Strategic Advantages
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Transform Customer Understanding
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Advanced audience analysis methodologies provide the deep insights needed 
              to create more effective strategies, improve customer experiences, and drive business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Deeper Insights</h3>
                  <p className="text-proof-gray-600">
                    Uncover hidden patterns and motivations that traditional analysis methods 
                    often miss, providing a more complete understanding of your audience.
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
                  <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Precision Targeting</h3>
                  <p className="text-proof-gray-600">
                    Create highly targeted strategies based on statistically validated segments 
                    that improve campaign effectiveness and resource allocation.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-amber-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-proof-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Predictive Power</h3>
                  <p className="text-proof-gray-600">
                    Build models that not only explain current behavior but predict future 
                    actions, enabling proactive business strategies and decision-making.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Understand Your Audience Better?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to leverage advanced analytical methodologies that reveal 
            deep audience insights and drive more effective business strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/contact">
                <Brain className="w-5 h-5 mr-2" />
                Start Your Analysis
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/resources/case-studies">
                <PieChart className="w-5 h-5 mr-2" />
                See Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}



