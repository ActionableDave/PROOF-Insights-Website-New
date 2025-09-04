import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Radio, TrendingUp, Users, Target, BarChart3, Eye, Zap, Brain, Smartphone, Tv, GamepadIcon, Building2, Newspaper, Monitor, FileText, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function DigitalMediaPublicationsPage() {
  console.log("Digital Media Publications page loaded")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Radio className="h-8 w-8 text-proof-blue-600 mr-3" />
                <span className="text-proof-blue-600 font-semibold text-lg">Digital Media & Publications</span>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Navigate the Evolving Media Landscape
              </h1>
              <p className="text-xl text-proof-gray-600 mb-8 leading-relaxed">
                Help your digital media or publication business thrive in an increasingly fragmented entertainment ecosystem. We provide the strategic insights needed to compete with social platforms, optimize content strategies, and capture audience attention in a world where consumers split six hours daily across TV, social media, and gaming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-3 text-lg font-semibold" asChild>
                  <Link href="/contact">
                    Schedule Research Consultation
                  </Link>
                </Button>
                <Button variant="outline" className="border-proof-blue-600 text-proof-blue-600 hover:bg-proof-blue-50 px-8 py-3 text-lg font-semibold">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-proof-blue-100 to-proof-purple-100 rounded-2xl p-8 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Digital media analytics dashboard" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-proof-green-600" />
                    <div>
                      <div className="text-sm font-semibold text-proof-gray-900">Audience Growth</div>
                      <div className="text-xs text-proof-gray-600">+247% engagement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Update Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">2024-2025 Market Intelligence</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Critical trends reshaping the digital media landscape and what they mean for your business strategy.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-0">
              <Smartphone className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Social Video Dominance</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Hyperscale platforms (TikTok, YouTube) now capture <strong>over 50% of US ad spending</strong> through algorithmically optimized content.
              </p>
              <div className="text-xs text-red-600 font-medium">Critical Impact: High</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <GamepadIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Gaming Convergence</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Gaming is converging with video entertainment, with game engines powering TV/film production and franchises expanding across media.
              </p>
              <div className="text-xs text-blue-600 font-medium">Opportunity: Emerging</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <Tv className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Fragmented Consumption</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Consumers now split <strong>6 hours daily</strong> across TV, social media, and gaming, demanding both short-form and premium content.
              </p>
              <div className="text-xs text-purple-600 font-medium">Trend: Accelerating</div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">The AI Revolution in Media Research</h3>
                <p className="text-blue-100 mb-6">
                  Generative AI is transforming data analysis, enabling faster insights and hyper-personalized research. Traditional market research timelines are shrinking from weeks to days.
                </p>
                <div className="flex items-center text-blue-100">
                  <Brain className="h-5 w-5 mr-2" />
                  <span className="text-sm">PROOF leverages AI-powered analytics for real-time insights</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-blue-100">Faster insight generation with AI-enhanced research</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Trusted by Leading Media Companies</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              We're proud to partner with innovative media organizations driving the future of digital publishing.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">MediaFirst</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">StreamCore</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">DigitalScope</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">NewsHub</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">ContentFlow</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">ViewStream</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">PublishPro</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">MediaEdge</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">TrendCast</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">NextRead</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">AudioFlow</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">VisualPost</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-proof-gray-600 italic">
              "PROOF's insights helped us navigate platform algorithm changes and increase our reach by 340%"
            </p>
            <p className="text-sm text-proof-gray-500 mt-2">— Chief Content Officer, Leading Digital Publisher</p>
          </div>
        </div>
      </section>

      {/* Market Research Projects Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Research Solutions for Digital Media</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Specialized research methodologies designed to help digital media companies navigate industry disruption and capture growth opportunities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Users className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Audience Segmentation & Behavior Analysis</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand how your audience consumes content across platforms and identify opportunities to increase engagement and retention.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Multi-platform consumption patterns</li>
                <li>• Content preference mapping</li>
                <li>• Attention span analysis</li>
                <li>• Cross-device journey tracking</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Target className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Competitive Landscape Mapping</h3>
              <p className="text-proof-gray-600 mb-6">
                Navigate the complex ecosystem of traditional media, streaming services, and social platforms competing for audience attention.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Platform performance benchmarking</li>
                <li>• Content gap analysis</li>
                <li>• Ad spend optimization insights</li>
                <li>• Emerging platform monitoring</li>
              </ul>
              <div className="flex items-center text-proof-purple-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <BarChart3 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Content Performance Optimization</h3>
              <p className="text-proof-gray-600 mb-6">
                Test and optimize content formats, distribution strategies, and monetization approaches across multiple channels.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• A/B testing for content formats</li>
                <li>• Distribution channel effectiveness</li>
                <li>• Subscription vs. ad-supported models</li>
                <li>• Creator partnership strategies</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Eye className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Brand Health & Perception Tracking</h3>
              <p className="text-proof-gray-600 mb-6">
                Monitor how your brand is perceived in an increasingly crowded media landscape and track share of voice across platforms.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Social sentiment analysis</li>
                <li>• Share of voice tracking</li>
                <li>• Brand association mapping</li>
                <li>• Crisis communication insights</li>
              </ul>
              <div className="flex items-center text-proof-purple-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
          </div>

          {/* Specialized Research Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-proof-gray-900 mb-6 text-center">Specialized Research for Media Challenges</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Algorithm Impact Studies</h4>
                <p className="text-sm text-proof-gray-600">Understand how social platform algorithms affect your content reach and optimize distribution strategies.</p>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-proof-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">AI Content Testing</h4>
                <p className="text-sm text-proof-gray-600">Test AI-generated content performance against human-created content to optimize your content strategy.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Revenue Model Optimization</h4>
                <p className="text-sm text-proof-gray-600">Test subscription, advertising, and hybrid monetization models to maximize revenue per user.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Case Studies for Digital Media & Publications</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Real-world results from our work with leading digital media companies and publications.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-l-4 border-proof-blue-600">
              <div className="flex items-center mb-4">
                <Newspaper className="h-8 w-8 text-proof-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Digital News Publisher</h3>
                  <p className="text-sm text-proof-gray-600">Subscription Model Optimization</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A leading digital news publisher was struggling with subscription conversion rates and needed to understand optimal pricing strategies across different audience segments.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased subscription conversions by 78%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Optimized pricing for 4 distinct audience segments</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Reduced churn rate by 35%</span>
                </div>
              </div>
              <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 text-sm font-medium">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white border-l-4 border-proof-purple-600">
              <div className="flex items-center mb-4">
                <Monitor className="h-8 w-8 text-proof-purple-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Streaming Media Platform</h3>
                  <p className="text-sm text-proof-gray-600">Content Strategy & Audience Analysis</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A streaming platform needed to understand content preferences across demographics and optimize their original content investment strategy.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Improved content engagement by 156%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Identified 3 high-value content niches</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased average viewing time by 42%</span>
                </div>
              </div>
              <Link href="/resources/case-studies" className="flex items-center text-proof-purple-600 text-sm font-medium">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-3 text-lg font-semibold">
              <Link href="/resources/case-studies">View All Media Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Who We Work With in Digital Media</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From established media giants to innovative digital-first publishers, we partner with organizations across the media spectrum.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Building2 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Traditional Media Companies</h3>
              <p className="text-proof-gray-600 mb-6">
                Established newspapers, magazines, and broadcast networks transitioning to digital-first strategies.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• National newspaper groups</li>
                <li>• Regional media networks</li>
                <li>• Magazine publishers</li>
                <li>• Broadcast media companies</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Smartphone className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Digital-Native Publishers</h3>
              <p className="text-proof-gray-600 mb-6">
                Born-digital publications and content creators building audience-first business models.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Online news platforms</li>
                <li>• Digital magazine brands</li>
                <li>• Newsletter publishers</li>
                <li>• Content creator networks</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white">
              <Monitor className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Streaming & Video Platforms</h3>
              <p className="text-proof-gray-600 mb-6">
                Video-first platforms competing in the attention economy with personalized content strategies.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Streaming services</li>
                <li>• Video content networks</li>
                <li>• Educational media platforms</li>
                <li>• Live streaming platforms</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Who Typically Orders Our Research</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Chief Content Officers</h4>
                  <p className="text-sm text-blue-100">Content strategy and audience insights</p>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">VP of Product</h4>
                  <p className="text-sm text-blue-100">Platform optimization and user experience</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Head of Growth</h4>
                  <p className="text-sm text-blue-100">Acquisition and retention strategies</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h4 className="font-semibold mb-2">Research Directors</h4>
                  <p className="text-sm text-blue-100">Market intelligence and competitive analysis</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Why Digital Media Companies Choose PROOF</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Platform-Agnostic Insights</h3>
                    <p className="text-proof-gray-600">We understand the entire media ecosystem, from traditional publishing to emerging social platforms.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-purple-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Real-Time Market Intelligence</h3>
                    <p className="text-proof-gray-600">Our AI-enhanced research delivers insights at the speed of social media, not traditional research timelines.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-proof-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-proof-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-proof-gray-900 mb-2">Actionable Recommendations</h3>
                    <p className="text-proof-gray-600">Every study includes specific, implementable strategies to improve performance and competitive positioning.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-proof-gray-50 to-proof-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">15+</div>
                  <div className="text-sm text-proof-gray-600">Years in Media Research</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-purple-600 mb-2">200+</div>
                  <div className="text-sm text-proof-gray-600">Media Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-blue-600 mb-2">50+</div>
                  <div className="text-sm text-proof-gray-600">Platforms Analyzed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-proof-purple-600 mb-2">24h</div>
                  <div className="text-sm text-proof-gray-600">Average Insight Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Media Strategy?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get the strategic insights you need to compete with social platforms, optimize content performance, and capture audience attention in today's fragmented media landscape.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Free 30-minute strategy consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Custom research proposal within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Industry-specific insights and benchmarks</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">media@proofinsights.com</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-proof-gray-900 mb-6">Get Your Media Research Proposal</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-proof-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-proof-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                      placeholder="Smith"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="john.smith@company.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Company Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Your Media Company"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Job Title</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Chief Content Officer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Research Challenge *</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Tell us about your media research needs, audience challenges, or strategic questions..."
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Research Budget Range</label>
                  <select className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent">
                    <option value="">Select budget range</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-plus">$100,000+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>
                
                <Button className="w-full bg-proof-blue-600 hover:bg-proof-blue-700 text-white py-3 text-lg font-semibold">
                  <Send className="mr-2 h-5 w-5" />
                  Send Research Proposal Request
                </Button>
                
                <p className="text-xs text-proof-gray-500 text-center">
                  By submitting this form, you agree to receive communications from PROOF Insights. We respect your privacy and will never share your information.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}