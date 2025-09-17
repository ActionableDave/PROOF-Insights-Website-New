import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Compass, Shield, Target, TrendingUp, Users, BarChart3, Eye, Zap, CheckCircle, ArrowRight, Network, GitBranch, Activity, Scale } from 'lucide-react';
import Header from '@/components/Header';

export const metadata: Metadata = siteMetadata['/methodologies/competitive-landscape'];

export default function CompetitiveLandscapePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative py-24"
        style={{
          backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/dHPIEI5JA_S12XRT7Yyr8/competitive-analysis.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 hover:bg-proof-emerald-100">
              <Compass className="w-4 h-4 mr-1" />
              Competitive Intelligence
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Understanding Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">Competitive Landscape</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Advanced research methodologies that map competitive positioning, identify market gaps,
              and reveal strategic opportunities to gain sustainable competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
                <Link href="/contact">
                  <Compass className="w-5 h-5 mr-2" />
                  Explore Methods
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Methodologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-proof-orange-100 text-proof-orange-700 border-proof-orange-200 mb-4">
              <Network className="w-4 h-4 mr-1" />
              Advanced Analytics
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">
              Related Methodologies
            </h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Explore advanced analytical techniques that complement competitive landscape analysis and provide deeper insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl">Multidimensional Scaling</CardTitle>
                <CardDescription>
                  Visualize complex relationships and positioning in competitive markets through advanced statistical modeling.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-proof-gray-600 mb-4 flex-1">
                  Map competitive positioning across multiple dimensions to reveal hidden market structures and opportunities.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-proof-blue-50 group-hover:border-proof-blue-200 mt-auto" asChild>
                  <Link href="/methodologies/multi-dimensional-scaling">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl">Expectancy Analysis</CardTitle>
                <CardDescription>
                  Remove halo effects and cost of entry biases to reveal true brand performance and competitive positioning.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-proof-gray-600 mb-4 flex-1">
                  Double centered data rescaling that levels the playing field to identify authentic brand strengths and weaknesses.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-proof-emerald-50 group-hover:border-proof-emerald-200 mt-auto" asChild>
                  <Link href="/methodologies/expectancy-analysis">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-proof-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="w-6 h-6 text-proof-purple-600" />
                </div>
                <CardTitle className="text-xl">Structural Equation Modeling</CardTitle>
                <CardDescription>
                  Understand complex causal relationships between competitive factors and market outcomes.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-proof-gray-600 mb-4 flex-1">
                  Model intricate relationships between brand attributes, competitive actions, and market performance.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-proof-purple-50 group-hover:border-proof-purple-200 mt-auto" asChild>
                  <Link href="/methodologies/structural-equation-modeling">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Positioning Section */}
      <section id="market-positioning" className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 mb-4">
              <Target className="w-4 h-4 mr-1" />
              Market Positioning
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">
              Strategic Competitive Analysis
            </h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Comprehensive methodologies to understand your competitive environment and identify strategic opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl">Competitive Mapping</CardTitle>
                <CardDescription>
                  Comprehensive analysis of direct and indirect competitors across multiple dimensions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-proof-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2 flex-shrink-0" />
                    Market share analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2 flex-shrink-0" />
                    Feature comparison matrices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2 flex-shrink-0" />
                    Positioning maps
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl">Market Gap Analysis</CardTitle>
                <CardDescription>
                  Identify unmet needs and whitespace opportunities in your market.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-proof-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2 flex-shrink-0" />
                    Unmet customer needs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2 flex-shrink-0" />
                    Whitespace identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2 flex-shrink-0" />
                    Opportunity sizing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-proof-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-proof-purple-600" />
                </div>
                <CardTitle className="text-xl">Competitive Intelligence</CardTitle>
                <CardDescription>
                  Deep insights into competitor strategies, strengths, and vulnerabilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-proof-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2 flex-shrink-0" />
                    Strategy assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2 flex-shrink-0" />
                    SWOT analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2 flex-shrink-0" />
                    Threat evaluation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 mb-4">
              <BarChart3 className="w-4 h-4 mr-1" />
              Research Methodology
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">
              Our Competitive Analysis Process
            </h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              A systematic approach to understanding your competitive environment and strategic positioning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-proof-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">Market Landscape Mapping</h3>
                  <p className="text-proof-gray-600">
                    Comprehensive identification and categorization of all relevant competitors across direct, indirect, and emerging threat categories.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-proof-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">Multi-Dimensional Analysis</h3>
                  <p className="text-proof-gray-600">
                    Deep dive into competitor positioning across price, features, target segments, distribution channels, and brand messaging.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-proof-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">Strategic Opportunity Identification</h3>
                  <p className="text-proof-gray-600">
                    Analysis of market gaps, unmet customer needs, and strategic positioning opportunities for competitive advantage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-proof-orange-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">Actionable Recommendations</h3>
                  <p className="text-proof-gray-600">
                    Strategic recommendations for positioning, product development, pricing, and go-to-market strategies based on competitive insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-proof-gray-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <Eye className="w-12 h-12 text-proof-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-proof-gray-900 mb-2">Competitive Intelligence Opportunity</h3>
                  <p className="text-proof-gray-600">
                    Custom-designed tools and methods to more effectively keep track of competitor movements and market dynamics.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-proof-blue-600">Multiple</div>
                    <div className="text-sm text-proof-gray-600">Methodologies</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-proof-emerald-600">24/7</div>
                    <div className="text-sm text-proof-gray-600">Monitoring</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-proof-purple-600">Real-time</div>
                    <div className="text-sm text-proof-gray-600">Updates</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-proof-orange-600">Custom</div>
                    <div className="text-sm text-proof-gray-600">Reporting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-proof-purple-100 text-proof-purple-700 border-proof-purple-200 mb-4">
              <Zap className="w-4 h-4 mr-1" />
              Strategic Advantages
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">
              Why Competitive Landscape Analysis Matters
            </h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Understanding your competitive environment is crucial for strategic decision-making and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-proof-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-proof-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Strategic Positioning</h3>
              <p className="text-proof-gray-600">
                Identify optimal market positioning that differentiates your brand and maximizes competitive advantage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-proof-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-proof-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Market Opportunities</h3>
              <p className="text-proof-gray-600">
                Discover untapped market segments and unmet customer needs that represent growth opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-proof-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-proof-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Competitive Defense</h3>
              <p className="text-proof-gray-600">
                Anticipate competitive threats and develop defensive strategies to protect market share and customer loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Understand Your Competitive Landscape?
          </h2>
          <p className="text-xl text-proof-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experts help you map your competitive environment and identify strategic opportunities for growth.
          </p>
          <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}



