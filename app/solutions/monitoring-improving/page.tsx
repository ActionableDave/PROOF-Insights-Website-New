

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { Activity, Heart, Users, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export default function MonitoringImprovingPage() {
  console.log("Monitoring and Improving page rendered")

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/wWTgfP2emsCetz6jtFf7I/monitoring-improving.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-70"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-8">
              Monitoring &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block">Improving</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Track, measure, and continuously improve your brand performance, customer satisfaction, 
              and market position with ongoing research and real-time insights.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">Continuous Improvement Solutions</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Stay ahead of market changes and customer expectations with comprehensive monitoring and improvement strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Health Tracking */}
            <Card className="bg-white p-8 hover:shadow-lg transition-shadow duration-300 border border-proof-gray-200 h-full">
              <div className="flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Activity className="h-8 w-8 text-proof-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-proof-gray-900 mb-4">Brand Health Tracking</h3>
                  <p className="text-proof-gray-600 leading-relaxed">
                    Monitor the vital signs of your brand with comprehensive health tracking that measures brand 
                    awareness, perception, consideration, and loyalty over time.
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between mt-6">
                  <ul className="space-y-2 text-sm text-proof-gray-600 mb-6 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                      Brand awareness & recall
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                      Brand perception scores
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                      Purchase consideration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                      Brand loyalty indicators
                    </li>
                  </ul>
                  <Button asChild className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white w-full">
                    <Link href="/solutions/monitoring-improving/brand-health-tracking">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Customer Experience & Satisfaction */}
            <Card className="bg-white p-8 hover:shadow-lg transition-shadow duration-300 border border-proof-gray-200 h-full">
              <div className="flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-proof-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-proof-gray-900 mb-4">Customer Experience & Satisfaction</h3>
                  <p className="text-proof-gray-600 leading-relaxed">
                    Measure and improve every touchpoint of the customer journey. Track satisfaction, 
                    identify pain points, and optimize experiences.
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between mt-6">
                  <ul className="space-y-2 text-sm text-proof-gray-600 mb-6 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                      Overall satisfaction scores and indexes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                      Net Promoter Score (NPS)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                      Customer effort score
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Event-based Quality</li>
                  </ul>
                  <Button asChild className="bg-proof-emerald-600 hover:bg-proof-emerald-700 text-white w-full">
                    <Link href="/solutions/monitoring-improving/customer-experience-satisfaction">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Awareness & Usage */}
            <Card className="bg-white p-8 hover:shadow-lg transition-shadow duration-300 border border-proof-gray-200 h-full">
              <div className="flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-proof-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-proof-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-proof-gray-900 mb-4">Awareness & Usage</h3>
                  <p className="text-proof-gray-600 leading-relaxed">
                    Track how well your target audience knows and uses your products or services. 
                    Monitor awareness levels and usage patterns.
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between mt-6">
                  <ul className="space-y-2 text-sm text-proof-gray-600 mb-6 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                      Unaided brand awareness
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                      Aided brand recognition
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />
                      Usage frequency & patterns
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Related behavioral monitoring</li>
                  </ul>
                  <Button asChild className="bg-proof-amber-600 hover:bg-proof-amber-700 text-white w-full">
                    <Link href="/solutions/monitoring-improving/awareness-usage">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-time Dashboard Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-proof-gray-900 to-proof-blue-900 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Real-Time Performance Dashboards</h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Access your brand health metrics, customer satisfaction scores, and awareness data 
                through our interactive dashboards with real-time updates and trend analysis.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <AlertCircle className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Alert System</h4>
                <p className="text-blue-100 text-sm">Get notified when metrics fall below thresholds</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <TrendingUp className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Trend Analysis</h4>
                <p className="text-blue-100 text-sm">Spot patterns and predict future performance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Activity className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Live Monitoring</h4>
                <p className="text-blue-100 text-sm">Track key metrics in real-time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Start Monitoring Your Brand Performance Today
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Set up continuous tracking and monitoring systems to stay ahead of market changes 
            and continuously improve your customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Schedule a Monitoring Strategy Session
              </Button>
            </Link>
            <Link href="/resources/case-studies">
              <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                View Monitoring Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </div>
  )
}


