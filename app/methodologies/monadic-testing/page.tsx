"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { 
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
  Eye,
  Shield,
  Search,
  Filter
} from "lucide-react";

export default function MonadicTestingPage() {
  console.log("Monadic Testing page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: `url('https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/tysXiniM-mpiTMdmoquYo/monadic.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 hover:bg-proof-emerald-100">
              <Users className="w-4 h-4 mr-1" />
              Unbiased Testing
            </Badge>
            <h1 className="text-proof-gray-900 leading-tight lg:text-6xl text-4xl font-bold text-center">
              Monadic <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-emerald-600 to-proof-blue-600 block leading-[1.2] text-center">
                Testing</span></h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Eliminate testing bias through controlled methodologies that expose each respondent 
              to only one concept, ensuring pure, uninfluenced feedback and accurate market predictions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="/contact">
                <Button size="lg" className="bg-proof-emerald-600 hover:bg-proof-emerald-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <Users className="w-5 h-5 mr-2" />
                  Start Monadic Test
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Approaches */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-amber-100 text-proof-amber-700 border-proof-amber-200 px-4 py-2">
              <Filter className="h-4 w-4 mr-2" />
              Testing Approaches
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Flexible Monadic Methodologies
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Choose the optimal testing approach based on your research objectives, concept complexity, and desired balance between pure reactions and comparative insights. Each approach has its own unique advantages depending on your unique situation.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pure Monadic */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200 p-8">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-proof-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-10 w-10 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-2xl text-proof-gray-900">Pure Monadic Testing</CardTitle>
                <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 mx-auto mt-4">Isolated Evaluation</Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-proof-gray-600 text-center text-lg">
                  Each respondent evaluates only one concept in complete isolation, 
                  providing the purest possible reaction without any comparison influence.
                </p>
                
                <div className="flex justify-center">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/vJZY5irnyPeXjSgSydu4i/image.png" 
                    alt="Pure Monadic Testing Diagram" 
                    className="w-full max-w-md h-auto rounded-lg shadow-sm"
                  />
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-proof-gray-900">Best For:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-proof-gray-600">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Absolute concept performance measurement</span>
                    </div>
                    <div className="flex items-center text-proof-gray-600">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Market acceptance prediction</span>
                    </div>
                    <div className="flex items-center text-proof-gray-600">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Unbiased reaction assessment</span>
                    </div>
                    <div className="flex items-center text-proof-gray-600">
                      <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3 flex-shrink-0" />
                      <span>Launch readiness evaluation</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-proof-gray-900">Key Advantages:</h4>
                  <div className="bg-proof-emerald-50 rounded-lg p-4">
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 text-proof-emerald-600 mr-2" />
                        Zero comparison bias
                      </li>
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 text-proof-emerald-600 mr-2" />
                        Natural evaluation context
                      </li>
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 text-proof-emerald-600 mr-2" />
                        Accurate market simulation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sequential Monadic */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200 p-8">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-proof-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Activity className="h-10 w-10 text-proof-blue-600" />
                </div>
                <CardTitle className="text-2xl text-proof-gray-900">Sequential Monadic Testing</CardTitle>
                <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 mx-auto mt-4">Controlled Comparison</Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-proof-gray-600 text-center text-lg">
                  Respondents evaluate multiple concepts in sequence with order rotation, 
                  capturing both pure reactions and controlled comparative insights.
                </p>
                
                <div className="flex justify-center">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/a6-vD-wBddwnVJnitZDm1/image.png" 
                    alt="Sequential Monadic Testing Diagram" 
                    className="w-full max-w-md h-auto rounded-lg shadow-sm"
                  />
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-proof-gray-900">Best For:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-proof-gray-600">
                      <CheckCircle className="h-5 w-5 text-proof-blue-500 mr-3 flex-shrink-0" />
                      <span>Concept optimization insights</span>
                    </div>
                    <div className="flex items-center text-proof-gray-600">
                      <CheckCircle className="h-5 w-5 text-proof-blue-500 mr-3 flex-shrink-0" />
                      <span>Relative performance ranking</span>
                    </div>
                    <div className="flex items-center text-proof-gray-600">
                      <CheckCircle className="h-5 w-5 text-proof-blue-500 mr-3 flex-shrink-0" />
                      <span>Feature comparison analysis</span>
                    </div>
                    <div className="flex items-center text-proof-gray-600">
                      <CheckCircle className="h-5 w-5 text-proof-blue-500 mr-3 flex-shrink-0" />
                      <span>Portfolio evaluation</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-proof-gray-900">Key Advantages:</h4>
                  <div className="bg-proof-blue-50 rounded-lg p-4">
                    <ul className="space-y-2 text-sm text-proof-gray-600">
                      <li className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-proof-blue-600 mr-2" />
                        Balanced insights
                      </li>
                      <li className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-proof-blue-600 mr-2" />Efficiency with multiple concepts, smaller samples</li>
                      <li className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-proof-blue-600 mr-2" />
                        Controlled order effects
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications & Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-teal-100 text-proof-teal-700 border-proof-teal-200 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Strategic Applications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Where Monadic Testing Excels
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Monadic testing methodologies provide superior insights across diverse research contexts, 
              from product development to communication testing and market validation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Concept Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Evaluate new product or service concepts to understand pure market reaction 
                  without the influence of competitive alternatives.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Product concepts
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Service innovations
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value propositions
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Creative Testing</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Test advertising creative, packaging designs, or communications without 
                  comparison bias affecting authentic reactions.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Advertisement testing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Package design
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Brand messaging
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Market Validation</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Validate market acceptance and purchase intent for new offerings 
                  in realistic, unbiased evaluation contexts.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Launch readiness
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market acceptance
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Purchase intent
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Feature Testing</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Evaluate individual features or capabilities to understand their 
                  standalone appeal and value perception.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Feature appeal
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Benefit clarity
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value perception
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Experience Evaluation</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Test user experiences, interfaces, or service interactions 
                  to capture authentic usability and satisfaction feedback.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    User experience
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Interface testing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Service evaluation
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Brand Testing</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Evaluate brand elements, positioning, or identity components 
                  in isolation to understand their individual impact and effectiveness.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Brand positioning
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Identity testing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Message resonance
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process & Best Practices */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Rigorous Monadic Testing Framework
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures optimal study design, execution, and analysis 
              to deliver reliable, actionable insights from unbiased concept evaluation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300 bg-white">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              </div>
              <CardHeader className="pt-8 pb-6">
                <CardTitle className="text-xl text-proof-gray-900">Study Design & Setup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Design optimal testing framework considering concept complexity, 
                  research objectives, and desired statistical power.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Methodology selection
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Sample size planning
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Randomization strategy
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300 bg-white">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              </div>
              <CardHeader className="pt-8 pb-6">
                <CardTitle className="text-xl text-proof-gray-900">Execution & Quality Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Execute testing with rigorous quality controls to ensure 
                  unbiased exposure and authentic respondent reactions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Controlled exposure
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Response monitoring
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Quality assurance
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-amber-300 bg-white">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-proof-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              </div>
              <CardHeader className="pt-8 pb-6">
                <CardTitle className="text-xl text-proof-gray-900">Analysis & Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-proof-gray-600">
                  Analyze results to extract meaningful insights about concept 
                  performance, optimization opportunities, and market implications.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Performance analysis
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Segment insights
                  </div>
                  <div className="flex items-center text-sm text-proof-gray-600">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Strategic recommendations
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-emerald-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready for Unbiased Concept Testing?
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to leverage monadic testing methodologies that eliminate bias 
            and deliver pure, accurate insights about your concepts' true market potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-white text-proof-emerald-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Brain className="w-5 h-5 mr-2" />
                Begin Monadic Test
              </Button>
            </a>
            <a href="/resources/case-studies">
              <Button size="lg" className="bg-white text-proof-emerald-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <PieChart className="w-5 h-5 mr-2" />
                Explore Testing Options
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}





