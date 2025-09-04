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
  Zap,
  Brain,
  PieChart,
  Settings,
  Star,
  Filter
} from "lucide-react";

export default function FeaturesConceptsPriceOptimizationPage() {
  console.log("Features Concepts Price Optimization page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24"
        style={{
          backgroundImage: 'url("https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/aoj814OKH-EFVZHc9qWJk/features-concept-optimize.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-70"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 hover:bg-proof-emerald-100">
              <Settings className="w-4 h-4 mr-1" />
              Advanced Methodologies
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Features, Concepts & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">Price Optimization</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Leverage sophisticated research methodologies to optimize product features, validate concepts, 
              and determine optimal pricing strategies that maximize market acceptance and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <Brain className="w-5 h-5 mr-2" />
                  Explore Methodologies
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-proof-gray-300 text-proof-gray-700 hover:bg-proof-gray-50 px-8 py-4 text-lg">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Conjoint and ACBC */}
            <Card id="conjoint-acbc" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center group-hover:bg-proof-blue-600 transition-colors duration-300">
                    <BarChart3 className="h-6 w-6 text-proof-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Conjoint and Discrete Choice Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Conjoint analysis and discrete choice methods reveal how 
                  customers make trade-offs between features, benefits, and price points.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Feature importance ranking
                    </div>
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Price sensitivity analysis
                    </div>
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Market simulation modeling
                    </div>
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Optimal product configuration
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-blue-500 mr-2" />
                      Choice-based conjoint (CBC)
                    </div>
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-blue-500 mr-2" />
                      Adaptive Choice-Based Conjoint (ACBC)
                    </div>
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-blue-500 mr-2" />
                      Menu-Based Conjoint (MBC)
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/methodologies/conjoint-and-acbc">
                    <Button className="w-full bg-proof-blue-600 hover:bg-proof-blue-700 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Max Diff Scaling */}
            <Card id="max-diff-scaling-qsort" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-proof-emerald-600 transition-colors duration-300">
                    <Filter className="h-6 w-6 text-proof-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Max Diff Scaling</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Maximum Difference Scaling methodologies provide precise ranking 
                  of features, benefits, or concepts based on relative importance.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Precise importance ranking
                    </div>
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Scale bias reduction
                    </div>
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Segment-specific priorities
                    </div>
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                      Feature portfolio optimization (MaxDiff + TURF)
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-teal-500 mr-2" />
                      Traditional
                    </div>
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-teal-500 mr-2" />
                      Anchored
                    </div>
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-teal-500 mr-2" />
                      Case 2
                    </div>
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-teal-500 mr-2" />
                      Case 3
                    </div>
                    <div className="flex items-center text-sm text-proof-gray-600">
                      <CheckCircle className="h-4 w-4 text-proof-teal-500 mr-2" />
                      Q-Sort
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/methodologies/max-diff-scaling">
                    <Button className="w-full bg-proof-emerald-600 hover:bg-proof-emerald-700 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            {/* TURF Analysis */}
            <Card id="turf-analysis" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-teal-300">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-teal-100 rounded-lg flex items-center justify-center group-hover:bg-proof-teal-600 transition-colors duration-300">
                    <Target className="h-6 w-6 text-proof-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">TURF Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Total Unduplicated Reach and Frequency analysis optimizes product portfolios
                  by maximizing market coverage while minimizing cannibalization.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Portfolio optimization
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market coverage analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Cannibalization assessment
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Product line efficiency
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/methodologies/turf-analysis">
                    <Button className="w-full bg-proof-teal-600 hover:bg-proof-teal-700 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            {/* Kano Analysis */}
            <Card id="kano-analysis" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-amber-300">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-amber-100 rounded-lg flex items-center justify-center group-hover:bg-proof-amber-600 transition-colors duration-300">
                    <Star className="h-6 w-6 text-proof-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Kano Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Categorize product features into Must-Have, Performance, and Delight attributes 
                  to understand customer satisfaction - importance drivers and competitive differentiation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Feature categorization framework
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Customer satisfaction mapping
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Competitive advantage identification
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Product roadmap prioritization
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/methodologies/kano-analysis">
                    <Button className="w-full bg-proof-amber-600 hover:bg-proof-amber-700 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            {/* Driver Analysis */}
            <Card id="driver-analysis" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center group-hover:bg-proof-blue-600 transition-colors duration-300">
                    <TrendingUp className="h-6 w-6 text-proof-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Driver Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Statistical modeling to identify which features, attributes, or experiences 
                  have the greatest impact on key business outcomes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Statistical correlation analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Performance impact modeling
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    ROI optimization guidance
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Strategic priority setting
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/methodologies/driver-analysis">
                    <Button className="w-full bg-proof-blue-600 hover:bg-proof-blue-700 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Monadic / Sequential Monadic Testing */}
            <Card id="monadic-sequential-monadic-testing" className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-proof-emerald-600 transition-colors duration-300">
                    <Users className="h-6 w-6 text-proof-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-proof-gray-900">Monadic / Sequential Monadic Testing</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Controlled testing methodologies that eliminate bias by exposing each respondent 
                  to only one concept, ensuring pure, uninfluenced feedback.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Bias-free concept evaluation
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Pure reaction measurement
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Concept optimization insights
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market acceptance prediction
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/methodologies/monadic-testing">
                    <Button className="w-full bg-proof-emerald-600 hover:bg-proof-emerald-700 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-amber-100 text-proof-amber-700 border-proof-amber-200 px-4 py-2">
              <Lightbulb className="h-4 w-4 mr-2" />
              Strategic Benefits
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Why Choose Advanced Optimization Methodologies
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              These sophisticated research approaches provide the precision and depth needed 
              for confident decision-making in competitive markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Maximize ROI</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-proof-gray-600">
                  Optimize resource allocation by focusing on features and concepts that deliver 
                  the highest customer value and business impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Reduce Risk</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-proof-gray-600">
                  Make data-driven decisions backed by rigorous testing methodologies that minimize 
                  uncertainty in product development and pricing strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Competitive Edge</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-proof-gray-600">
                  Gain deep customer insights that competitors miss, enabling superior product 
                  positioning and market-winning value propositions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Optimize Your Product Strategy?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to leverage advanced research methodologies that transform 
            product development and pricing decisions into competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Brain className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg">
              <PieChart className="w-5 h-5 mr-2" />
              View Methodology Examples
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

