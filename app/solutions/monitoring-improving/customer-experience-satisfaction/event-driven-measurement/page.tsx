"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  Users,
  Target,
  Zap,
  Database,
  Brain,
  Clock,
  MapPin,
  TrendingUp,
  Eye,
  Settings,
  Activity,
  Layers,
  RefreshCw,
  ChevronRight
} from "lucide-react";

export default function EventDrivenMeasurementPage() {
  console.log("Event-Driven Customer Experience Measurement page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/eHHtMBCHykgiXRaLt8NCX/event-driven.png')`
        }}
      >
        {/* White overlay with 70% opacity */}
        <div className="absolute inset-0 bg-white bg-opacity-70"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
                <Zap className="w-4 h-4 mr-1" />
                Event-Driven Quality
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
              Event-Driven Customer
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-400 to-proof-emerald-400 block leading-[1.2]">Experience Measurement</span>
            </h1>
            <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed font-medium">
              A revolutionary methodology for creating and curating actionable customer loyalty data. 
              Track every customer interaction event to understand what truly drives satisfaction and advocacy.
            </p>
            <div className="flex justify-center pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  <Zap className="w-5 h-5 mr-2" />
                  Implement Event-Driven CX
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-left">
            <div className="flex justify-center">
              <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
                Revolutionary Approach
              </Badge>
            </div>
            <h2 className="text-proof-gray-900 lg:text-4xl text-3xl font-bold text-center">
              The Architect of Customer Experience Measurement
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-4xl mx-auto">
              With nearly 20 years of experience in customer satisfaction and loyalty measurement, PROOF Insights 
              has developed a methodology that minimizes customer effort, enlists internal organizational support, 
              and offers directly measurable customer sentiment by event type and its associated internal process.
            </p>
          </div>

          {/* Customer Experience Highway */}
          <div className="bg-proof-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-proof-gray-900 mb-6 text-center">On the Customer Experience Highway</h3>
            <div className="relative">
              {/* Highway visualization */}
              <div className="bg-proof-gray-700 rounded-lg p-6 relative overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-proof-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">Customer Purchase Event</span>
                  </div>
                  
                  <div className="flex-1 mx-4">
                    <div className="h-1 bg-white opacity-50 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-proof-blue-500 to-proof-emerald-500"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-proof-emerald-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">Touchpoint</span>
                  </div>
                  
                  <div className="flex-1 mx-4">
                    <div className="h-1 bg-white opacity-50 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-proof-emerald-500 to-proof-blue-500"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-proof-blue-500 rounded-full flex items-center justify-center">
                      <RefreshCw className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">Repurchase or Recommendation</span>
                  </div>
                </div>
                
                {/* Possible Touchpoints */}
                <div className="mt-6 bg-proof-emerald-600 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Possible Touchpoints</h4>
                  <ul className="text-white text-sm space-y-1">
                    <li>• Customer calls for assistance with a product issue</li>
                    <li>• Customer visits online store to purchase supplies</li>
                    <li>• Customer makes a suggestion for new product change</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Management System */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              <Settings className="h-4 w-4 mr-2" />
              Quality Management
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Event-Driven CX as a Quality Management System
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Event tracking becomes an integrated quality management system that tracks quality 
              (performance relative to a standard) as a function of customer and staff experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-white border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-proof-gray-900">
                    <Database className="w-6 h-6 text-proof-blue-600 mr-3" />
                    Indexed & Connected Data
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-proof-gray-600">
                    Time series data is highly indexed and connected through events, making it valuable 
                    for training algorithms and automating tasks while identifying persistent issues.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-l-4 border-l-proof-emerald-500 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-proof-gray-900">
                    <Brain className="w-6 h-6 text-proof-emerald-600 mr-3" />
                    AI-Ready Data Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-proof-gray-600">
                    Creates high-quality, validated data optimal for training deep learning algorithms, 
                    enabling reliable automation of customer communication management strategies.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-proof-gray-900 mb-6">The Event-Driven Research Process</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: "Customer Event Occurs", desc: "Event-Driven CS creates an event ID for tracking" },
                  { step: 2, title: "Customer Completes Survey", desc: "Gathered through online form, includes NPS score" },
                  { step: 3, title: "Employee Completes Record", desc: "Pre-determined rules establish the right employee" },
                  { step: 4, title: "Classified and Connected", desc: "Event is routed according to its classification" },
                  { step: 5, title: "Event Recorder Orders", desc: "Root cause information, resolution/status assigned" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-proof-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-proof-gray-900">{item.title}</h4>
                      <p className="text-sm text-proof-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution of Quality Measurement */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <TrendingUp className="h-4 w-4 mr-2" />
              Evolution of Quality
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Customer Experience: An Evolution of Quality Measurement
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-4xl mx-auto">
              Over the last 50 years, customer focus has evolved from internally facing processes 
              to externally facing processes, with customer experience measurement becoming the new standard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-proof-gray-50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Statistical Process Control</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-proof-gray-600">
                  Traditional Six Sigma approach focused on internal process optimization 
                  and statistical quality control methods.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-proof-gray-50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-proof-gray-600">
                  Evolution to customer-focused measurement including satisfaction 
                  surveys and loyalty tracking programs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-proof-gray-50 hover:shadow-lg transition-shadow duration-300 border-2 border-proof-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Event-Driven CX</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-proof-gray-600">
                  Modern approach capturing real-time customer experiences 
                  through event-based measurement and analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Structure & Benefits */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2 mb-6">
                <Database className="h-4 w-4 mr-2" />
                Data Structure
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">
                Event-Driven Data Structure
              </h2>
              <p className="text-lg text-proof-gray-600 mb-8">
                The Event-Driven Customer Experience Management System provides data curation 
                and actionability for customer satisfaction and loyalty measurement data.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-proof-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-700">Root cause analysis data for quality management</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-proof-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-700">Time series data for individual customers and products</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-proof-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-700">Fine-tuning data for LLMs leveraged in business improvement efforts</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-proof-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-proof-gray-700">NPS Driver Analysis - understanding which events cause greatest change</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-proof-gray-900 mb-6 text-center">
                An Unexpected Benefit: Curated Data for Algorithm Training
              </h3>
              <div className="space-y-6">
                <div className="bg-proof-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-proof-blue-900 mb-2">High-Quality Training Data</h4>
                  <p className="text-proof-blue-800 text-sm">
                    Advances in artificial intelligence require high quality data for algorithm training. 
                    Poor training data introduces errors, causing algorithms to perform inadequately.
                  </p>
                </div>
                
                <div className="bg-proof-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-proof-emerald-900 mb-2">Reliable Automation</h4>
                  <p className="text-proof-emerald-800 text-sm">
                    The validated data collected through Event-Driven CX can be used for fine tuning LLMs to more effectively automate your business-specific root cause analyses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memory & Episodes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              Customer Psychology
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Why Customer Sentiment is Event-Driven: Everything is an Episode
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-4xl mx-auto">
              Understanding how memories are generated helps explain why the Event-Driven Customer 
              Experience Measurement System is designed to record events and their details from 
              both customer and internal staff perspectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-proof-blue-50 border-proof-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-proof-blue-900">
                    <Eye className="w-6 h-6 mr-3" />
                    Semantic Memory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-proof-blue-800">
                    Memories driven by our values, beliefs and knowledge. These memories are 
                    unrelated to events or experiences and relate to facts, meanings, and concepts.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-proof-emerald-50 border-proof-emerald-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-proof-emerald-900">
                    <Activity className="w-6 h-6 mr-3" />
                    Episodic Memory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-proof-emerald-800">
                    Information stored relating to episodes or events that personally happen to us. 
                    These memories are contextual and known for their ability to affect our behavior.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-proof-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-proof-gray-900 mb-6">The Power of Episodic Memories</h3>
              <div className="space-y-4">
                <p className="text-proof-gray-700">
                  Anytime customers have experiences, episodic memories are created and stored. 
                  <strong> Everything is an episode.</strong> Every interaction, every time.
                </p>
                <p className="text-proof-gray-700">
                  These episodic memories have tremendous power in their ability to affect perceptions 
                  and generate emotional connections that stick. The episodic memories that are recorded 
                  are recalled by the customer whenever they are at the crossroads of repurchase or recommendation.
                </p>
                <div className="bg-proof-blue-100 rounded-lg p-4 mt-6">
                  <p className="text-proof-blue-900 font-medium">
                    "When customers reflect on whether to repurchase or recommend, it is the details 
                    of these events they will recall and the perception of these events which will make their decision."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Benefits */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Implementation Benefits
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              The Resulting Benefits
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Event-Driven Customer Experience Measurement enables managers to eliminate long, 
              tedious satisfaction systems and quickly understand the processes that generate customer loyalty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Faster Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-proof-gray-600">
                  Eliminate long satisfaction measurement systems and get immediate 
                  insights into customer experience drivers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Focused Action</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-proof-gray-600">
                  Identify which internal processes have the greatest likelihood 
                  of affecting negative changes in customer perceptions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-proof-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-proof-teal-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Measurable Results</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-proof-gray-600">
                  Enable corrective action to be more focused with results 
                  that are directly measurable and actionable.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-8 w-8 text-proof-amber-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Comprehensive View</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-proof-gray-600">
                  Gain clearer picture of interaction components through 
                  analysis of comments from both Internal Recorders and Respondents.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-proof-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-proof-purple-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">AI-Ready Data</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-proof-gray-600">
                  Create high-quality, validated data optimal for training 
                  deep learning algorithms and automation systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-proof-rose-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="h-8 w-8 text-proof-rose-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Brand Promise Enabler</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-proof-gray-600">
                  Enable positive brand identity by helping companies keep 
                  their promises to customers through experience optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Back to Parent Page */}
      <section className="py-12 bg-white border-t border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Link 
              href="/solutions/monitoring-improving/customer-experience-satisfaction" 
              className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Customer Experience & Satisfaction
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Implement Event-Driven Customer Experience Measurement?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Transform your customer experience measurement with our revolutionary event-driven methodology. 
            Create actionable loyalty data and optimize every customer touchpoint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Zap className="w-5 h-5 mr-2" />
              Start Event-Driven CX
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg">
              <BarChart3 className="w-5 h-5 mr-2" />
              Download White Paper
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

