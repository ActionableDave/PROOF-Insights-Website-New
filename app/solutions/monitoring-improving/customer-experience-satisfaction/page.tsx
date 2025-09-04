"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  Heart, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  Users,
  Star,
  MessageSquare,
  Target,
  Award,
  Smile,
  ThumbsUp,
  Clock,
  MapPin,
  Phone
} from "lucide-react";

export default function CustomerExperienceSatisfactionPage() {
  console.log("Customer Experience & Satisfaction page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/QHEv29tuY6sYp2phrRRS2/customer-satisfaction.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* 65% White Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <Heart className="w-4 h-4 mr-1" />
              Monitoring & Improving
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
              Customer Experience &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-400 to-proof-emerald-400 block leading-[1.2]">Satisfaction</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed font-medium">
              Measure and improve every touchpoint of the customer journey. Our comprehensive satisfaction 
              tracking helps you understand what drives loyalty and optimize experiences for retention and advocacy.
            </p>
            <div className="flex justify-center pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <Heart className="w-5 h-5 mr-2" />
                  Measure Satisfaction
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header spanning full width */}
          <div className="space-y-4 mb-12 text-left">
            <div className="flex justify-center">
              <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
                Customer-Centric Insights
              </Badge>
            </div>
            <h2 className="text-proof-gray-900 lg:text-4xl text-3xl font-bold text-center">
              Optimize Every Customer Touchpoint
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-4xl mx-auto">
              Customer experience and satisfaction tracking provides deep insights into what drives loyalty, 
              identifies pain points across the customer journey, and measures the effectiveness of 
              experience improvements. Our comprehensive approach captures both emotional and functional 
              aspects of customer satisfaction.
            </p>
          </div>

          {/* Cards Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - Two stacked cards */}
            <div className="flex flex-col space-y-6 h-full">
              <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300 flex-1">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Experience Mapping</h3>
                    <p className="text-proof-gray-600">
                      Map every customer-facing touchpoint across the customer experience to identify optimization opportunities and experience gaps.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-emerald-500 hover:shadow-lg transition-shadow duration-300 flex-1">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ThumbsUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">NPS & Loyalty Tracking</h3>
                    <p className="text-proof-gray-600">
                      Monitor Net Promoter Score and loyalty metrics to understand 
                      advocacy levels and long-term customer value.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Importance-Performance Analysis */}
            <div className="flex flex-col h-full">
              <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300 aspect-square flex flex-col">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-proof-gray-900 text-lg">Importance-Performance Analysis</h3>
                  </div>
                </div>

                {/* Importance-Performance Quadrant */}
                <div className="relative bg-white rounded-lg p-4 border border-proof-gray-200 flex-1">
                  <div className="relative w-full h-full min-h-[16rem]">
                    {/* Axes */}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-proof-gray-400"></div>
                    <div className="absolute bottom-0 left-0 w-px h-full bg-proof-gray-400"></div>
                    
                    {/* Axis Labels - Centered */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-xs text-proof-gray-600 font-medium">
                      High Performance →
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full text-xs text-proof-gray-600 font-medium -rotate-90 origin-center">
                      High Importance →
                    </div>
                    
                    {/* Quadrant Labels */}
                    <div className="absolute top-2 left-2 text-xs font-semibold text-proof-red-600 bg-proof-red-50 px-2 py-1 rounded">
                      Concentrate Here
                    </div>
                    <div className="absolute top-2 right-2 text-xs font-semibold text-proof-emerald-600 bg-proof-emerald-50 px-2 py-1 rounded">
                      Keep Up Good Work
                    </div>
                    <div className="absolute bottom-2 left-2 text-xs font-semibold text-proof-amber-600 bg-proof-amber-50 px-2 py-1 rounded">
                      Low Priority
                    </div>
                    <div className="absolute bottom-2 right-2 text-xs font-semibold text-proof-blue-600 bg-proof-blue-50 px-2 py-1 rounded">
                      Possible Overkill
                    </div>
                    
                    {/* Quadrant Dividers */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-proof-gray-300 opacity-50"></div>
                    <div className="absolute top-0 left-1/2 w-px h-full bg-proof-gray-300 opacity-50"></div>
                    
                    {/* Sample Data Points */}
                    <div className="absolute top-6 right-12 w-2 h-2 bg-proof-emerald-500 rounded-full" title="Product Quality"></div>
                    <div className="absolute top-8 left-6 w-2 h-2 bg-proof-red-500 rounded-full" title="Response Time"></div>
                    <div className="absolute bottom-12 right-6 w-2 h-2 bg-proof-blue-500 rounded-full" title="Website Design"></div>
                    <div className="absolute bottom-6 left-8 w-2 h-2 bg-proof-amber-500 rounded-full" title="Packaging"></div>
                    <div className="absolute top-12 right-16 w-2 h-2 bg-proof-emerald-500 rounded-full" title="Customer Service"></div>
                    <div className="absolute top-10 left-12 w-2 h-2 bg-proof-red-500 rounded-full" title="Delivery Speed"></div>
                  </div>

                  {/* Legend */}
                  <div className="grid grid-cols-2 gap-2 text-xs mt-4">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-proof-emerald-500 rounded-full mr-2"></div>
                        <span className="text-proof-gray-600">Product Quality</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-proof-red-500 rounded-full mr-2"></div>
                        <span className="text-proof-gray-600">Response Time</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-proof-blue-500 rounded-full mr-2"></div>
                        <span className="text-proof-gray-600">Website Design</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-proof-emerald-500 rounded-full mr-2"></div>
                        <span className="text-proof-gray-600">Customer Service</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-proof-red-500 rounded-full mr-2"></div>
                        <span className="text-proof-gray-600">Delivery Speed</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-proof-amber-500 rounded-full mr-2"></div>
                        <span className="text-proof-gray-600">Packaging</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="mt-4 text-center">
                  <Link href="/methodologies/importance-performance-nps" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium text-sm transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
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
              Key Measurements
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Comprehensive Satisfaction Tracking
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Monitor satisfaction across all critical touchpoints and experiences 
              to drive continuous improvement and customer loyalty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Overall Satisfaction</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Measure comprehensive satisfaction scores across 
                  the entire customer experience and relationship.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Overall satisfaction ratings
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Product/service quality
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Value for money perception
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Net Promoter Score</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Track likelihood to recommend and advocacy levels 
                  to understand customer loyalty and word-of-mouth potential.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Promoter identification
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Detractor analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Advocacy behavior tracking
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Customer Effort Score</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Measure how easy it is for customers to accomplish 
                  their goals and complete desired actions.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Task completion ease
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Process efficiency
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Friction point identification
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Journey Touchpoints</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Analyze satisfaction at each touchpoint across 
                  the entire customer journey and lifecycle.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Pre-purchase experience
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Purchase process
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Post-purchase support
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Service Quality</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Evaluate customer service interactions and support 
                  quality across all channels and touchpoints.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Response time satisfaction
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Resolution effectiveness
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Staff helpfulness
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Voice of Customer</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Capture and analyze customer feedback to understand 
                  sentiment, emotions, and improvement opportunities.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Sentiment analysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Theme identification
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Improvement prioritization
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event-Driven Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-proof-blue-50 to-proof-emerald-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
                  <Award className="h-4 w-4 mr-2" />
                  Revolutionary Methodology
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
                  Event-Driven Customer Experience Measurement
                </h2>
                <p className="text-lg text-proof-gray-600">
                  Discover our revolutionary methodology for creating and curating actionable customer loyalty data. 
                  Track every customer interaction event to understand what truly drives satisfaction and advocacy.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3" />
                    <span className="text-proof-gray-700">Real-time event tracking and analysis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3" />
                    <span className="text-proof-gray-700">AI-ready data structure for automation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3" />
                    <span className="text-proof-gray-700">Quality management system integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3" />
                    <span className="text-proof-gray-700">Episodic memory-based measurement</span>
                  </div>
                </div>
                <Link href="/solutions/monitoring-improving/customer-experience-satisfaction/event-driven-measurement">
                  <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-6 py-3 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                    <Award className="w-5 h-5 mr-2" />
                    Explore Event-Driven CX
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-proof-gray-900 mb-4">The Customer Experience Highway</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-proof-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-proof-gray-200 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-proof-blue-500 to-proof-emerald-500 rounded-full w-1/3"></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-proof-gray-700">Purchase Event</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-proof-emerald-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-proof-gray-200 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-proof-emerald-500 to-proof-blue-500 rounded-full w-2/3"></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-proof-gray-700">Touchpoints</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-proof-blue-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-proof-gray-200 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-proof-blue-500 to-proof-emerald-500 rounded-full w-full"></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-proof-gray-700">Repurchase/Recommend</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-proof-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-proof-emerald-900 mb-2">Possible Touchpoints</h4>
                  <ul className="text-proof-emerald-800 text-sm space-y-1">
                    <li>• Customer service interactions</li>
                    <li>• Online store visits</li>
                    <li>• Product feedback submissions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Optimize Customer Experience?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to implement comprehensive satisfaction tracking that 
            identifies improvement opportunities and drives customer loyalty and advocacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Heart className="w-5 h-5 mr-2" />
              Start Satisfaction Tracking
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Journey Examples
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}