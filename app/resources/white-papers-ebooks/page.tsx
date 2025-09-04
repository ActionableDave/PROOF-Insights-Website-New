'use client'

import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, FileText, BookOpen, Download, Calendar, Clock, Users } from 'lucide-react'
import Link from 'next/link'
import { useState, useMemo } from 'react'

export default function WhitePapersEbooksPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTopic, setSelectedTopic] = useState('All')

  const resources = [
    {
      id: 'ai-market-research-guide',
      title: 'The Complete Guide to AI in Market Research',
      type: 'eBook',
      category: 'Technology & Innovation',
      topic: 'Artificial Intelligence',
      description: 'A comprehensive 45-page guide exploring how artificial intelligence is transforming market research methodologies, from data collection to insight generation.',
      pageCount: '45 pages',
      readTime: '25 min read',
      downloadCount: '2,500+',
      publishDate: 'January 2024',
      featured: true,
      gradient: 'from-blue-50 to-purple-50',
      href: '/resources/white-papers-ebooks/ai-market-research-guide'
    },
    {
      id: 'conjoint-analysis-mastery',
      title: 'Mastering Advanced Conjoint Analysis Techniques',
      type: 'White Paper',
      category: 'Methodology',
      topic: 'Conjoint Analysis',
      description: 'Deep dive into ACBC, HB, and other advanced conjoint methods with real-world case studies and implementation guidelines.',
      pageCount: '32 pages',
      readTime: '20 min read',
      downloadCount: '1,800+',
      publishDate: 'December 2023',
      featured: true,
      gradient: 'from-purple-50 to-blue-50',
      href: '/resources/white-papers-ebooks/conjoint-analysis-mastery'
    },
    {
      id: 'global-market-segmentation',
      title: 'Global Market Segmentation: Cross-Cultural Insights',
      type: 'Research Report',
      category: 'Strategy',
      topic: 'Market Segmentation',
      description: 'How to conduct effective market segmentation across diverse cultural contexts with validation techniques and bias reduction strategies.',
      pageCount: '28 pages',
      readTime: '18 min read',
      downloadCount: '1,200+',
      publishDate: 'November 2023',
      featured: false,
      gradient: 'from-green-50 to-blue-50',
      href: '/resources/white-papers-ebooks/global-market-segmentation'
    },
    {
      id: 'behavioral-economics-research',
      title: 'Behavioral Economics in Consumer Research',
      type: 'eBook',
      category: 'Psychology & Behavior',
      topic: 'Behavioral Economics',
      description: 'Understanding cognitive biases, choice architecture, and psychological drivers to design better research and interpret results more accurately.',
      pageCount: '38 pages',
      readTime: '22 min read',
      downloadCount: '1,600+',
      publishDate: 'October 2023',
      featured: false,
      gradient: 'from-orange-50 to-purple-50',
      href: '/resources/white-papers-ebooks/behavioral-economics-research'
    },
    {
      id: 'healthcare-research-compliance',
      title: 'Healthcare Market Research: Compliance & Ethics Guide',
      type: 'White Paper',
      category: 'Industry Guide',
      topic: 'Healthcare',
      description: 'Navigate HIPAA, FDA regulations, and ethical considerations in healthcare market research with practical frameworks and checklists.',
      pageCount: '24 pages',
      readTime: '15 min read',
      downloadCount: '900+',
      publishDate: 'September 2023',
      featured: false,
      gradient: 'from-blue-50 to-green-50',
      href: '/resources/white-papers-ebooks/healthcare-research-compliance'
    },
    {
      id: 'saas-pricing-optimization',
      title: 'SaaS Pricing Optimization: Data-Driven Strategies',
      type: 'Research Report',
      category: 'Industry Guide',
      topic: 'Pricing Strategy',
      description: 'Comprehensive analysis of SaaS pricing models with conjoint analysis applications and revenue optimization techniques.',
      pageCount: '35 pages',
      readTime: '20 min read',
      downloadCount: '1,400+',
      publishDate: 'August 2023',
      featured: false,
      gradient: 'from-purple-50 to-blue-50',
      href: '/resources/white-papers-ebooks/saas-pricing-optimization'
    },
    {
      id: 'maxdiff-scaling-guide',
      title: 'MaxDiff Scaling: Beyond Traditional Rankings',
      type: 'Methodology Guide',
      category: 'Methodology',
      topic: 'MaxDiff Analysis',
      description: 'Advanced MaxDiff techniques including anchored MaxDiff, dual-response, and integration with choice modeling approaches.',
      pageCount: '26 pages',
      readTime: '16 min read',
      downloadCount: '800+',
      publishDate: 'July 2023',
      featured: false,
      gradient: 'from-blue-50 to-purple-50',
      href: '/resources/white-papers-ebooks/maxdiff-scaling-guide'
    },
    {
      id: 'consumer-journey-mapping',
      title: 'Digital Consumer Journey Mapping & Analytics',
      type: 'eBook',
      category: 'Customer Experience',
      topic: 'Journey Mapping',
      description: 'Modern approaches to understanding and mapping complex digital customer journeys with touchpoint optimization strategies.',
      pageCount: '42 pages',
      readTime: '24 min read',
      downloadCount: '1,100+',
      publishDate: 'June 2023',
      featured: false,
      gradient: 'from-green-50 to-purple-50',
      href: '/resources/white-papers-ebooks/consumer-journey-mapping'
    },
    {
      id: 'brand-positioning-framework',
      title: 'Strategic Brand Positioning: Research-Driven Framework',
      type: 'White Paper',
      category: 'Strategy',
      topic: 'Brand Strategy',
      description: 'Evidence-based brand positioning methodology with perceptual mapping, competitive analysis, and positioning validation techniques.',
      pageCount: '30 pages',
      readTime: '18 min read',
      downloadCount: '1,300+',
      publishDate: 'May 2023',
      featured: false,
      gradient: 'from-orange-50 to-blue-50',
      href: '/resources/white-papers-ebooks/brand-positioning-framework'
    },
    {
      id: 'mobile-research-best-practices',
      title: 'Mobile Research: Design & Engagement Best Practices',
      type: 'Research Report',
      category: 'Technology & Innovation',
      topic: 'Mobile Research',
      description: 'Optimizing survey design, response rates, and data quality in mobile research environments with emerging technology integration.',
      pageCount: '29 pages',
      readTime: '17 min read',
      downloadCount: '750+',
      publishDate: 'April 2023',
      featured: false,
      gradient: 'from-purple-50 to-green-50',
      href: '/resources/white-papers-ebooks/mobile-research-best-practices'
    }
  ]

  const categories = ['All', 'Technology & Innovation', 'Methodology', 'Strategy', 'Psychology & Behavior', 'Industry Guide', 'Customer Experience']
  const topics = ['All', 'Artificial Intelligence', 'Conjoint Analysis', 'Market Segmentation', 'Behavioral Economics', 'Healthcare', 'Pricing Strategy', 'MaxDiff Analysis', 'Journey Mapping', 'Brand Strategy', 'Mobile Research']

  // Filter resources based on selected filters
  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const categoryMatch = selectedCategory === 'All' || resource.category === selectedCategory
      const topicMatch = selectedTopic === 'All' || resource.topic === selectedTopic
      return categoryMatch && topicMatch
    })
  }, [resources, selectedCategory, selectedTopic])

  const featuredResources = resources.filter(resource => resource.featured)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
              White Papers & eBooks
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="hero-description">
              Access our comprehensive library of research methodologies, industry insights, and strategic frameworks to advance your market research capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-proof-blue-600 mb-2">50+</div>
              <div className="text-proof-gray-600">Published Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-purple-600 mb-2">15k+</div>
              <div className="text-proof-gray-600">Total Downloads</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-blue-600 mb-2">12</div>
              <div className="text-proof-gray-600">Research Areas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-purple-600 mb-2">98%</div>
              <div className="text-proof-gray-600">Reader Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Featured Resources</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful white papers and eBooks, downloaded by thousands of research professionals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredResources.map((resource) => (
              <Link key={resource.id} href={resource.href}>
                <Card className={`p-8 bg-gradient-to-br ${resource.gradient} border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      {resource.type === 'eBook' ? (
                        <BookOpen className="h-8 w-8 text-proof-blue-600" />
                      ) : (
                        <FileText className="h-8 w-8 text-proof-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                          {resource.type}
                        </Badge>
                        <Badge className="bg-proof-purple-100 text-proof-purple-700 hover:bg-proof-purple-200">
                          Featured
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-proof-gray-900 mb-3 group-hover:text-proof-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-proof-gray-600 mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <Clock className="h-4 w-4 text-proof-gray-500 mx-auto mb-1" />
                      <div className="text-xs font-medium text-proof-gray-700">{resource.readTime}</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <FileText className="h-4 w-4 text-proof-gray-500 mx-auto mb-1" />
                      <div className="text-xs font-medium text-proof-gray-700">{resource.pageCount}</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <Download className="h-4 w-4 text-proof-gray-500 mx-auto mb-1" />
                      <div className="text-xs font-medium text-proof-gray-700">{resource.downloadCount}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-proof-blue-600 font-medium group-hover:text-proof-blue-700">
                      Download Free
                    </span>
                    <ArrowRight className="h-5 w-5 text-proof-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category}
                    variant={category === selectedCategory ? 'default' : 'outline'}
                    className={`px-4 py-2 cursor-pointer transition-colors ${
                      category === selectedCategory 
                        ? 'bg-proof-blue-600 text-white hover:bg-proof-blue-700' 
                        : 'border-proof-gray-300 text-proof-gray-700 hover:bg-proof-blue-50'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Filter by Topic</h3>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <Badge 
                    key={topic}
                    variant={topic === selectedTopic ? 'default' : 'outline'}
                    className={`px-4 py-2 cursor-pointer transition-colors ${
                      topic === selectedTopic 
                        ? 'bg-proof-purple-600 text-white hover:bg-proof-purple-700' 
                        : 'border-proof-gray-300 text-proof-gray-700 hover:bg-proof-purple-50'
                    }`}
                    onClick={() => setSelectedTopic(topic)}
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Resources Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-proof-gray-900">
              All Resources ({filteredResources.length})
            </h2>
            {(selectedCategory !== 'All' || selectedTopic !== 'All') && (
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedTopic('All')
                }}
                className="text-proof-blue-600 hover:text-proof-blue-700 font-medium transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
          
          {filteredResources.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">No resources found</h3>
              <p className="text-proof-gray-600 mb-6">Try adjusting your filters to see more results.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedTopic('All')
                }}
                className="text-proof-blue-600 hover:text-proof-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Link key={resource.id} href={resource.href}>
                  <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-proof-blue-50 rounded-lg">
                        {resource.type === 'eBook' ? (
                          <BookOpen className="h-5 w-5 text-proof-blue-600" />
                        ) : (
                          <FileText className="h-5 w-5 text-proof-blue-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs border-proof-gray-300 text-proof-gray-600">
                            {resource.type}
                          </Badge>
                          <span className="text-xs text-proof-gray-500 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {resource.publishDate}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 group-hover:text-proof-blue-600 transition-colors line-clamp-2">
                          {resource.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-proof-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-proof-gray-500 mb-4">
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {resource.downloadCount}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {resource.readTime}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                      Download Free <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Apply These Insights?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your research approach with our proven methodologies and strategic frameworks. Let's discuss your specific challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">
                Schedule Consultation
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/resources/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}