import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Link from "next/link";
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Brain,
  Activity,
  Zap,
  Calculator,
  Scale,
  Eye,
  Shield,
  Layers,
  GitBranch,
  Network
} from "lucide-react";

export const metadata: Metadata = siteMetadata['/methodologies/expectancy-analysis'];

export default function ExpectancyAnalysisPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24"
        style={{
          backgroundImage: `url('https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/mpFwAUO3cm3TF1-VI49Bc/expectancy-analysis.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* 65% White Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <Scale className="w-4 h-4 mr-1" />
              Double Centered Data Rescaling
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Expectancy Analysis
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">
                Double Centered Data Rescaling
              </span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              A rescaling approach that simultaneously removes the effects of Brand Halo and Cost of Entry Attributes, 
              leveling the playing field to identify each brand's true strengths and weaknesses.
            </p>
            <div className="flex justify-center pt-8">
              <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
                <Link href="/contact">
                  <Scale className="w-5 h-5 mr-2" />
                  Start Analysis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full-width header */}
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              Methodology Overview
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Understanding Halo Effect & Cost of Entry
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-lg text-proof-gray-600">
                Expectancy Analysis addresses two critical biases in brand research: the Halo Effect (where well-known brands get higher ratings across all attributes) and Cost of Entry (where some attributes are rated higher regardless of brand because all brands are expected to perform well on these attributes).
              </p>
              
              <div className="space-y-6">
                <Card className="p-6 bg-proof-gray-50 border-l-4 border-l-proof-blue-500 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Halo Effect</h3>
                      <p className="text-proof-gray-600">
                        Well-known brands get higher ratings across all attributes because of the brand's size and overall popularity, masking true performance differences.
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
                      <h3 className="font-bold text-proof-gray-900 mb-2 text-lg">Cost of Entry</h3>
                      <p className="text-proof-gray-600">
                        Some attributes are rated higher than others regardless of brand because all brands are expected to perform well on these attributes.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-proof-gray-200">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Badge className="bg-proof-blue-100 text-proof-blue-700">Bias Removal</Badge>
                </div>
                
                <div className="w-full">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/bT6IRwakKLdVAqy4oTMf9/image.png"
                    alt="Halo and Cost of Entry Effects diagram showing how Expectancy Analysis removes these biases"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rescaling Formula Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Calculator className="h-4 w-4 mr-2" />
              Mathematical Foundation
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Rescaling Formulas
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Expectancy Analysis uses two key formulas to calculate expected scores and performance scores, removing bias and revealing true brand performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Expected Score Formula</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-proof-blue-50 p-6 rounded-lg border border-proof-blue-200">
                  <p className="text-center text-lg font-mono text-proof-blue-800">
                    Expected Score = average for attribute × average for brand / total average
                  </p>
                </div>
                <p className="text-proof-gray-600 text-center">
                  This formula calculates what each brand's score should be on each attribute, accounting for both brand halo and attribute cost of entry effects.
                </p>
                <div className="w-full">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/9-cYttPRweQEqdYaxDd6n/expectancy-analysis-page-6.jpg"
                    alt="Expected Score calculation table showing functional drivers"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Performance Score Formula</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-proof-emerald-50 p-6 rounded-lg border border-proof-emerald-200">
                  <p className="text-center text-lg font-mono text-proof-emerald-800">
                    Performance Score = Original Score (%TOP 2 BOX) – Expected Score
                  </p>
                </div>
                <p className="text-proof-gray-600 text-center">
                  This reveals true brand performance by comparing actual scores to expected scores, showing where brands truly outperform or underperform.
                </p>
                <div className="w-full">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/oAZbYgiFY4XFECLQAJgXp/expectancy-analysis-page-7.jpg"
                    alt="Performance Score heat map showing emotional drivers"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analysis Examples Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 px-4 py-2">
              <BarChart3 className="h-4 w-4 mr-2" />
              Real-World Examples
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Expectancy Analysis in Action
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              See how Expectancy Analysis reveals true brand performance across emotional and functional drivers in beauty and cosmetics research.
            </p>
          </div>

          <div className="space-y-12">
            {/* Emotional Drivers Example */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-proof-purple-100 text-proof-purple-700 border-proof-purple-200">
                    Emotional Drivers Analysis
                  </Badge>
                  <h3 className="text-2xl font-bold text-proof-gray-900">
                    Beauty Brand Performance: Emotional Attributes
                  </h3>
                </div>
                <p className="text-lg text-proof-gray-600">
                  In this beauty industry example, Fenty and Tarte brands over-indexed on almost all attributes due to halo effect, while "Makes me feel attractive" rose to the top for most brands due to cost of entry bias.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3" />
                    <span className="text-proof-gray-700">Removes brand halo bias from well-known brands</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3" />
                    <span className="text-proof-gray-700">Identifies true emotional differentiators</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3" />
                    <span className="text-proof-gray-700">Reveals authentic brand strengths and weaknesses</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-proof-gray-200">
                <img 
                  src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/swWW9HqpPE6mOy8ZTh1Bx/expectancy-analysis-page-3.jpg"
                  alt="Emotional drivers analysis showing brand performance across beauty brands"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Functional Drivers Example */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-proof-gray-200 order-2 lg:order-1">
                <img 
                  src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/9byyCE-Lp1cbE9GfEWqSw/expectancy-analysis-page-4.jpg"
                  alt="Functional drivers analysis showing brand performance on product attributes"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="space-y-4">
                  <Badge className="bg-proof-teal-100 text-proof-teal-700 border-proof-teal-200">
                    Functional Drivers Analysis
                  </Badge>
                  <h3 className="text-2xl font-bold text-proof-gray-900">
                    Product Performance: Functional Attributes
                  </h3>
                </div>
                <p className="text-lg text-proof-gray-600">
                  The functional analysis reveals that bareMinerals and Fenty over-indexed on almost all attributes, while "Has shades that are right for my skin tone" rose to the top for most brands as a cost of entry attribute.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3" />
                    <span className="text-proof-gray-700">Uncovers true functional performance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3" />
                    <span className="text-proof-gray-700">Identifies cost of entry attributes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-proof-emerald-500 mr-3" />
                    <span className="text-proof-gray-700">Reveals competitive advantages and gaps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Score Results Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Activity className="h-4 w-4 mr-2" />
              Performance Insights
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Performance Score Results
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              The final performance scores reveal true brand positioning, showing which brands outperform, meet expectations, or underperform on each attribute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl text-proof-gray-900">Emotional Drivers Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <img 
                  src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/oAZbYgiFY4XFECLQAJgXp/expectancy-analysis-page-7.jpg"
                  alt="Emotional drivers performance score heat map"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="flex justify-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                    <span>Outperforms (&gt;2)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                    <span>Average <br />(2 to -2)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                    <span>Underperforms (&lt;-2)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl text-proof-gray-900">Functional Drivers Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <img 
                  src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/EkcexDzldP1MPpJ75tobg/expectancy-analysis-page-8.jpg"
                  alt="Functional drivers performance score heat map"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="flex justify-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                    <span>Outperforms (&gt;2)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                    <span>Average <br />(2 to -2)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                    <span>Underperforms (&lt;-2)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Strategic Applications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              When to Use Expectancy Analysis
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Expectancy Analysis is particularly valuable when you need to understand true brand performance beyond surface-level perceptions and biases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Brand Equity Research</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Remove halo effects to understand true brand equity and identify authentic brand strengths versus perceived advantages.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    True brand differentiation
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Authentic positioning insights
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Unbiased competitive analysis
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Product Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Identify which product attributes truly drive preference versus those that are simply expected by all consumers.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Feature prioritization
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Innovation opportunities
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Cost of entry identification
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-proof-gray-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-proof-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-proof-purple-600" />
                </div>
                <CardTitle className="text-xl text-proof-gray-900">Competitive Intelligence</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-proof-gray-600">
                  Understand where competitors truly excel versus where they benefit from brand recognition or market expectations.
                </p>
                <div className="space-y-2 text-sm text-proof-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    True competitive advantages
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Market opportunity gaps
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-proof-emerald-500 mr-2" />
                    Strategic positioning insights
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Methodologies */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-proof-orange-100 text-proof-orange-700 border-proof-orange-200 px-4 py-2">
              <Network className="h-4 w-4 mr-2" />
              Related Methods
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900">
              Complementary Methodologies
            </h2>
            <p className="text-lg text-proof-gray-600 max-w-3xl mx-auto">
              Expectancy Analysis works well alongside other advanced analytical techniques for comprehensive competitive intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-proof-blue-600" />
                </div>
                <CardTitle className="text-xl">Competitive Landscape Analysis</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-proof-gray-600 mb-4 flex-1">
                  Combine with competitive landscape mapping to understand market positioning and identify strategic opportunities.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-proof-blue-50 group-hover:border-proof-blue-200 mt-auto" asChild>
                  <Link href="/methodologies/competitive-landscape">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-proof-emerald-600" />
                </div>
                <CardTitle className="text-xl">Driver Analysis</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-proof-gray-600 mb-4 flex-1">
                  Use driver analysis to understand which unbiased attributes most strongly influence purchase decisions and brand preference.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-proof-emerald-50 group-hover:border-proof-emerald-200 mt-auto" asChild>
                  <Link href="/methodologies/driver-analysis">
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
                <CardTitle className="text-xl">Importance-Performance Analysis</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-proof-gray-600 mb-4 flex-1">
                  Combine performance scores with importance ratings to prioritize improvement opportunities and strategic initiatives.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-proof-purple-50 group-hover:border-proof-purple-200 mt-auto" asChild>
                  <Link href="/methodologies/importance-performance-nps">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Uncover True Brand Performance?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to leverage Expectancy Analysis for unbiased competitive intelligence, authentic brand positioning insights, and strategic decision-making based on true performance data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/contact">
                <Scale className="w-5 h-5 mr-2" />
                Start Analysis
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/resources/case-studies">
                <Eye className="w-5 h-5 mr-2" />
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}











