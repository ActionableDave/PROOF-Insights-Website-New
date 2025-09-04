import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Brain, TrendingUp, Users, Target, BookOpen, Award, Lightbulb, Microscope } from 'lucide-react'
import Link from 'next/link'

export default function ThoughtLeadershipPage() {
  const thoughtLeadershipAreas = [
    {
      title: 'Advanced Analytics & AI',
      description: 'Our experience with cutting-edge analytical techniques has revolutionized how clients understand complex market dynamics.',
      icon: Brain,
      improvements: '40% faster insights delivery',
      color: 'from-blue-50 to-purple-50',
      subpages: [
        { title: 'Machine Learning in Market Research', href: '/resources/thought-leadership/ml-market-research' },
        { title: 'AI-Powered Consumer Segmentation', href: '/resources/thought-leadership/ai-segmentation' },
        { title: 'Predictive Analytics for Brand Strategy', href: '/resources/thought-leadership/predictive-analytics' }
      ]
    },
    {
      title: 'Conjoint Analysis Evolution',
      description: 'Two decades of conjoint expertise has led to proprietary methodologies that deliver unprecedented accuracy.',
      icon: TrendingUp,
      improvements: '60% improvement in prediction accuracy',
      color: 'from-purple-50 to-blue-50',
      subpages: [
        { title: 'Next-Generation ACBC Methods', href: '/resources/thought-leadership/next-gen-acbc' },
        { title: 'Dynamic Conjoint Applications', href: '/resources/thought-leadership/dynamic-conjoint' },
        { title: 'Cross-Cultural Conjoint Validation', href: '/resources/thought-leadership/cross-cultural-conjoint' }
      ]
    },
    {
      title: 'Behavioral Economics Integration',
      description: 'Our deep understanding of psychological drivers has enhanced traditional research with behavioral insights.',
      icon: Users,
      improvements: '50% increase in actionable insights',
      color: 'from-green-50 to-blue-50',
      subpages: [
        { title: 'Choice Architecture in Research Design', href: '/resources/thought-leadership/choice-architecture' },
        { title: 'Cognitive Biases in Consumer Research', href: '/resources/thought-leadership/cognitive-biases' },
        { title: 'Nudge Theory Applications', href: '/resources/thought-leadership/nudge-theory' }
      ]
    },
    {
      title: 'Cross-Industry Methodology Transfer',
      description: 'Our diverse industry experience enables us to adapt successful methodologies across different sectors.',
      icon: Target,
      improvements: '35% faster project completion',
      color: 'from-orange-50 to-purple-50',
      subpages: [
        { title: 'Healthcare to Consumer Goods Insights', href: '/resources/thought-leadership/healthcare-consumer' },
        { title: 'Technology Sector Research Innovation', href: '/resources/thought-leadership/tech-innovation' },
        { title: 'Financial Services Research Evolution', href: '/resources/thought-leadership/fintech-evolution' }
      ]
    }
  ]

  const recentPublications = [
    {
      title: 'The Future of Market Research: AI and Human Insight Integration',
      type: 'White Paper',
      description: 'How the combination of artificial intelligence and human expertise is reshaping market research methodologies.',
      date: '2024',
      icon: BookOpen,
      href: '/resources/thought-leadership/ai-human-integration'
    },
    {
      title: 'Maximizing ROI Through Advanced Segmentation Techniques',
      type: 'Research Paper',
      description: 'A comprehensive analysis of how sophisticated segmentation methods deliver superior business outcomes.',
      date: '2024',
      icon: Award,
      href: '/resources/thought-leadership/roi-segmentation'
    },
    {
      title: 'Cross-Cultural Research: Navigating Global Market Complexities',
      type: 'Industry Report',
      description: 'Best practices for conducting reliable research across diverse cultural and geographic markets.',
      date: '2023',
      icon: Lightbulb,
      href: '/resources/thought-leadership/cross-cultural-research'
    },
    {
      title: 'The Science of Survey Design: Reducing Bias and Improving Data Quality',
      type: 'Methodology Guide',
      description: 'Evidence-based approaches to survey construction that minimize respondent burden and maximize data integrity.',
      date: '2023',
      icon: Microscope,
      href: '/resources/thought-leadership/survey-design-science'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
              Thought Leadership
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="hero-description">
              Our decades of experience have led to continuous innovation in research methodologies, delivering steadily improving performance and deeper insights for our clients across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Impact Stats */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-proof-blue-600 mb-2">20+</div>
              <div className="text-proof-gray-600">Years of Innovation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-purple-600 mb-2">45%</div>
              <div className="text-proof-gray-600">Faster Insights Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-blue-600 mb-2">25+</div>
              <div className="text-proof-gray-600">Proprietary Methods</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-purple-600 mb-2">95%</div>
              <div className="text-proof-gray-600">Client Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership Areas */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Innovation Through Experience</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our steadily improving research performance is built on continuous methodological innovation and cross-industry expertise transfer.
            </p>
          </div>
          
          <div className="space-y-12">
            {thoughtLeadershipAreas.map((area, index) => (
              <Card key={index} className={`p-8 bg-gradient-to-br ${area.color} border-0`}>
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <area.icon className="h-8 w-8 text-proof-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-proof-gray-900 mb-3">{area.title}</h3>
                        <p className="text-proof-gray-600 leading-relaxed mb-4">{area.description}</p>
                        <div className="inline-flex items-center px-3 py-1 bg-proof-green-100 text-proof-green-800 text-sm font-medium rounded-full">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          {area.improvements}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-proof-gray-900 mb-4">Deep Dive Topics</h4>
                    <div className="space-y-3">
                      {area.subpages.map((subpage, subIndex) => (
                        <Link key={subIndex} href={subpage.href}>
                          <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors cursor-pointer group">
                            <span className="text-sm font-medium text-proof-gray-700 group-hover:text-proof-blue-600">
                              {subpage.title}
                            </span>
                            <ArrowRight className="h-4 w-4 text-proof-gray-400 group-hover:text-proof-blue-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Recent Publications</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our latest research contributions to the market research and business intelligence community.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {recentPublications.map((publication, index) => (
              <Link key={index} href={publication.href}>
                <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-proof-blue-50 rounded-lg">
                      <publication.icon className="h-6 w-6 text-proof-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-proof-blue-600 bg-proof-blue-50 px-2 py-1 rounded">
                          {publication.type}
                        </span>
                        <span className="text-xs text-proof-gray-500">{publication.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 group-hover:text-proof-blue-600 transition-colors">
                        {publication.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-proof-gray-600 mb-4 leading-relaxed">
                    {publication.description}
                  </p>
                  
                  <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                    Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Improvement Showcase */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Proven Performance Improvements</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              How our experience translates to measurably better outcomes for our clients over time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0 text-center">
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">60%</div>
              <div className="text-lg font-semibold text-proof-gray-900 mb-2">Accuracy Improvement</div>
              <p className="text-sm text-proof-gray-600">in predictive modeling through advanced conjoint techniques</p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-0 text-center">
              <div className="text-3xl font-bold text-proof-purple-600 mb-2">40%</div>
              <div className="text-lg font-semibold text-proof-gray-900 mb-2">Faster Delivery</div>
              <p className="text-sm text-proof-gray-600">through streamlined methodologies and AI integration</p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0 text-center">
              <div className="text-3xl font-bold text-proof-green-600 mb-2">50%</div>
              <div className="text-lg font-semibold text-proof-gray-900 mb-2">More Actionable</div>
              <p className="text-sm text-proof-gray-600">insights through behavioral economics integration</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience the Power of Proven Innovation
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Benefit from decades of methodological refinement and continuous performance improvement in your next research project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">
                Discuss Your Research Challenge
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/methodologies">
                Explore Our Methods
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}