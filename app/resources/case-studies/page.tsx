'use client'

import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, TrendingUp, Target, BarChart3, Play, Package, Stethoscope, Smartphone, Building, Type, MessageSquare, Droplet } from 'lucide-react'

// Icon mapping to ensure proper build compatibility
const iconMap = {
  Stethoscope,
  Users,
  Target,
  Smartphone,
  Building,
  Play,
  Package,
  BarChart3,
  TrendingUp,
  Type,
  MessageSquare,
  Droplet
}
import Link from 'next/link'
import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function CaseStudiesPageContent() {
  const searchParams = useSearchParams()
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [selectedMethodology, setSelectedMethodology] = useState('All')

  // Set initial filters based on URL parameters
  useEffect(() => {
    const methodologyParam = searchParams.get('methodology')
    const industryParam = searchParams.get('industry')
    
    if (methodologyParam && methodologies.includes(methodologyParam)) {
      setSelectedMethodology(methodologyParam)
    }
    
    if (industryParam && industries.includes(industryParam)) {
      setSelectedIndustry(industryParam)
    }
  }, [searchParams])

  const caseStudies = [
    {
      id: 'ltot-therapy-market-sizing',
      title: 'Global O2 Products Company | LTOT Market Sizing & Strategic Assessment',
      industry: 'Healthcare',
      methodology: 'Market Discovery & Opportunity',
      description: 'How a global oxygen therapy company evaluated market opportunities for portable and stationary Long-Term Oxygen Therapy (LTOT) solutions, determining total addressable market size, growth potential, and competitive dynamics to guide product development and international expansion.',
      metrics: ['Global Market Analysis', 'Excel-Based TAM Model', 'Strategic Framework'],
      icon: 'Stethoscope',
      gradient: 'from-blue-50 to-green-50',
      href: '/resources/case-studies/ltot-therapy-market-sizing'
    },
    {
      id: 'dermatology-acne-atu-market-research',
      title: 'Dermatology Company | Acne ATU Market Research Study',
      industry: 'Healthcare',
      methodology: 'Awareness/Usage',
      description: 'How a household name dermatology company deepened its understanding of prescribing trends and physician preferences in the dynamic acne therapeutics market through comprehensive ATU analysis.',
      metrics: ['200+ Professionals', '70% Combination Therapy', '11% Patient Increase'],
      icon: 'Stethoscope',
      gradient: 'from-blue-50 to-green-50',
      href: '/resources/case-studies/dermatology-acne-atu-market-research'
    },
    {
      id: 'fresh-health-oral-care-innovation',
      title: 'Fresh Health | Oral Care Innovation',
      industry: 'Healthcare',  
      methodology: 'Concept Testing',
      description: 'How Fresh Health assessed market interest for their innovative 7-second custom-fit water-jet flosser, validated positioning statements, and determined optimal pricing strategy through comprehensive concept testing and ACBC analysis.',
      metrics: ['50%+ Purchase Interest', 'Price Sensitivity Identified', 'Optimal Configuration'],
      icon: 'Droplet',
      gradient: 'from-blue-50 to-green-50',
      href: '/resources/case-studies/fresh-health-oral-care-innovation'
    },
    {
      id: 'medical-device-segmentation',
      title: 'Medical Device Market Segmentation Strategy',
      industry: 'Healthcare',
      methodology: 'Latent Class Modeling',
      description: 'How a leading medical device manufacturer identified 4 distinct customer segments, resulting in a 35% increase in targeted marketing effectiveness.',
      metrics: ['35% ↑ Marketing ROI', '28% ↑ Lead Quality', '3 New Product Lines'],
      icon: 'Stethoscope',
      gradient: 'from-blue-50 to-purple-50',
      href: '/resources/case-studies/medical-device-segmentation'
    },
    {
      id: 'smart-gym-claims-test',
      title: 'Smart Home Gym Claims Testing & Consumer Perception',
      industry: 'Consumer Goods',
      methodology: 'MaxDiff Analysis',
      description: 'How a smart fitness equipment company evaluated consumer perceptions of product benefits and claims, optimizing messaging strategy to maximize purchase motivation.',
      metrics: ['200 Participants', '100% Claims Evaluated', '2 Key Metrics'],
      icon: 'Target',
      gradient: 'from-purple-50 to-blue-50',
      href: '/resources/case-studies/smart-gym-claims-test'
    },
    {
      id: 'lipoplasty-innovation',
      title: 'Suction-Assisted Lipoplasty Innovation Validation',
      industry: 'Healthcare',
      methodology: 'ACBC Conjoint Analysis',
      description: 'How a medical device innovator validated their revolutionary lipoplasty system using advanced ACBC analysis, proving concept efficacy and establishing performance benchmarks.',
      metrics: ['95% Concept Validation', '4 Key Drivers', '100% Market Ready'],
      icon: 'Stethoscope',
      gradient: 'from-purple-50 to-blue-50',
      href: '/resources/case-studies/lipoplasty-innovation'
    },
    {
      id: 'rf-ablation-device',
      title: 'RF Ablation Device Capabilities Validation',
      industry: 'Healthcare',
      methodology: 'ACBC Conjoint Analysis',
      description: 'How a medical device company validated new RF ablation capabilities for orthopedic surgeons using international ACBC analysis, leading to confident product launch decisions.',
      metrics: ['100% Design Validation', '3 Markets Analyzed', '6 Questions Answered'],
      icon: 'Stethoscope',
      gradient: 'from-blue-50 to-purple-50',
      href: '/resources/case-studies/rf-ablation-device'
    },
    {
      id: 'saas-pricing-optimization',
      title: 'SaaS Platform Pricing Strategy Optimization',
      industry: 'Technology',
      methodology: 'Conjoint Analysis',
      description: 'A B2B SaaS company optimized their pricing strategy using advanced conjoint analysis, achieving significant revenue growth and improved customer satisfaction.',
      metrics: ['42% ↑ Revenue', '15% ↑ Customer Satisfaction', '$2.3M New ARR'],
      icon: 'Smartphone',
      gradient: 'from-purple-50 to-blue-50',
      href: '/resources/case-studies/saas-pricing-optimization'
    },
    {
      id: 'digital-brand-consolidation',
      title: 'Global Brand Consolidation Strategy',
      industry: 'Technology',
      methodology: 'Brand Strategy',
      description: 'A globally recognizable technology company successfully consolidated multiple brands using comprehensive international market research across 9 countries.',
      metrics: ['9 Global Markets', '100% Strategic Clarity', '5 Key Questions'],
      icon: 'Smartphone',
      gradient: 'from-blue-50 to-purple-50',
      href: '/resources/case-studies/digital-brand-consolidation'
    },
    {
      id: 'fintech-product-testing',
      title: 'FinTech Product Concept Validation',
      industry: 'Financial Services',
      methodology: 'MaxDiff Analysis',
      description: 'A fintech startup validated their product concept and identified optimal features before launch, saving $1.2M in development costs.',
      metrics: ['$1.2M Cost Savings', '85% Concept Validation', '4 Feature Priorities'],
      icon: 'Building',
      gradient: 'from-purple-50 to-blue-50',
      href: '/resources/case-studies/fintech-product-testing'
    },
    {
      id: 'consumer-goods-innovation',
      title: 'Understanding the Snacking Landscape',
      industry: 'Food & Restaurants',
      methodology: 'Competitive Landscape',
      description: 'How comprehensive market research and consumer perception analysis revealed key insights to drive product innovation and strategic positioning in the competitive snacking sector.',
      metrics: ['23 Min Survey', 'US & UK Markets', 'Multi-Segment Analysis'],
      icon: 'Target',
      gradient: 'from-orange-50 to-yellow-50',
      href: '/resources/case-studies/consumer-goods-innovation'
    },
    {
      id: 'prestige-beauty-landscape',
      title: 'Understanding the Prestige Beauty Landscape',
      industry: 'Beauty & Cosmetics',
      methodology: ['Competitive Landscape', 'Segmentation'],
      description: 'How a beauty brand gained deep competitive insights through comprehensive market analysis and customer segmentation research across 13,002 participants.',
      metrics: ['13,002 Participants', '6 Key Segments', '100% Market Coverage'],
      icon: 'Target',
      gradient: 'from-pink-50 to-purple-50',
      href: '/resources/case-studies/prestige-beauty-landscape'
    },
    {
      id: 'skincare-ad-optimization',
      title: 'Evaluating Campaign Assets for a Skincare Product',
      industry: 'Beauty & Cosmetics',
      methodology: 'Ad Optimization',
      description: 'How strategic testing of email and brochure assets across US and China markets optimized campaign performance and enhanced targeting effectiveness.',
      metrics: ['800 Participants', '2 Countries', '5 Assets Tested'],
      icon: 'Target',
      gradient: 'from-pink-50 to-purple-50',
      href: '/resources/case-studies/skincare-ad-optimization'
    },
    {
      id: 'running-shoe-market-analysis',
      title: 'Understanding the Running Shoe Market',
      industry: 'Apparel',
      methodology: 'Competitive Landscape',
      description: 'How ALTRA gained competitive insights and market segmentation clarity to enhance their product offerings and strategic positioning in the running shoe industry.',
      metrics: ['22 Min Survey', 'Multi-Segment Analysis', '100% Market Coverage'],
      icon: 'Target',
      gradient: 'from-orange-50 to-red-50',
      href: '/resources/case-studies/running-shoe-market-analysis'
    },
    {
      id: 'mens-jeans-wear-test',
      title: 'Men\'s Jeans Wear Test Evaluation',
      industry: 'Apparel',
      methodology: 'Product Testing',
      description: 'How comprehensive wear testing revealed key consumer preferences for comfort, fit, and design features that drive purchase intent in the competitive men\'s jeans market.',
      metrics: ['100 Male Participants', '2-Week Testing', 'Age Group Analysis'],
      icon: 'Users',
      gradient: 'from-blue-50 to-indigo-50',
      href: '/resources/case-studies/mens-jeans-wear-test'
    },
    {
      id: 'athleisure-concept-testing',
      title: 'Exploring the Athleisure Market',
      industry: 'Apparel',
      methodology: 'Concept Testing',
      description: 'How comprehensive concept testing revealed key consumer preferences and market opportunities to successfully launch an athleisure product line targeting diverse demographics.',
      metrics: ['600 Participants', '25 Min Survey', '2 Target Segments'],
      icon: 'Target',
      gradient: 'from-gray-50 to-blue-50',
      href: '/resources/case-studies/athleisure-concept-testing'
    },
    {
      id: 'healthcare-messaging-optimization',
      title: 'Healthcare Marketing Message Optimization',
      industry: 'Healthcare',
      methodology: 'Discrete Choice Modeling',
      description: 'A healthcare organization optimized their patient communication strategy, significantly improving engagement and treatment adherence.',
      metrics: ['45% ↑ Engagement', '32% ↑ Adherence', '18% ↓ Costs'],
      icon: 'Users',
      gradient: 'from-purple-50 to-blue-50',
      href: '/resources/case-studies/healthcare-messaging-optimization'
    },
    {
      id: 'fast-casual-segmentation',
      title: 'Understanding the Fast Casual Dining Landscape',
      industry: 'Food & Restaurants',
      methodology: 'Segmentation',
      description: 'How advanced segmentation analysis revealed key customer insights that transformed menu development, messaging strategies, and customer acquisition for a leading fast casual brand.',
      metrics: ['40 Min Survey', '18-64 Age Range', 'Multiple Segments'],
      icon: 'Users',
      gradient: 'from-orange-50 to-red-50',
      href: '/resources/case-studies/fast-casual-segmentation'
    },
    {
      id: 'streaming-service-pricing',
      title: 'Streaming Service Pricing Optimization',
      industry: 'Digital Media & Publications',
      methodology: 'Conjoint Analysis',
      description: 'How conjoint analysis and customer segmentation revealed the optimal features and pricing strategy to maximize subscriptions and revenue in the competitive streaming market.',
      metrics: ['18-Min Survey', '3 Customer Segments', 'Revenue Simulator'],
      icon: 'Play',
      gradient: 'from-purple-50 to-blue-50',
      href: '/resources/case-studies/streaming-service-pricing'
    },
    {
      id: 'outdoor-soil-fertilizer-signage',
      title: 'Outdoor Soil & Fertilizer Signage Optimization',
      industry: 'Retail',
      methodology: 'Package Testing',
      description: 'How strategic signage testing revealed the most effective messaging to drive consumer interest and increase market share for Sta-Green against established competitors.',
      metrics: ['12-Min Survey', '5 Signage Options', '300 Ratings/Sign'],
      icon: 'Package',
      gradient: 'from-green-50 to-emerald-50',
      href: '/resources/case-studies/outdoor-soil-fertilizer-signage'
    },
    {
      id: 'skincare-packaging-testing',
      title: 'Evaluating New Packaging Designs for Skincare Products',
      industry: 'Beauty & Cosmetics',
      methodology: 'Package Testing',
      description: 'How comprehensive packaging evaluation across multiple markets revealed key design preferences and brand fit insights to optimize skincare product presentation and customer appeal.',
      metrics: ['18-Min Survey', '3 Global Markets', '5 Product Categories'],
      icon: 'Package',
      gradient: 'from-pink-50 to-purple-50',
      href: '/resources/case-studies/skincare-packaging-testing'
    },
    {
      id: 'nutritional-product-segmentation',
      title: 'Segmenting the Nutritional Product Market',
      industry: 'Food & Restaurants',
      methodology: 'Market Segmentation',
      description: 'How comprehensive market segmentation analysis revealed six distinct consumer groups and their unique motivations, driving targeted product development and marketing strategies in the nutritional products industry.',
      metrics: ['36-Min Survey', '6 Distinct Segments', 'Ages 18-64'],
      icon: 'Users',
      gradient: 'from-green-50 to-emerald-50',
      href: '/resources/case-studies/nutritional-product-segmentation'
    },
    {
      id: 'jeans-fit-naming-preferences',
      title: 'Evaluating Jeans Fit Naming Preferences',
      industry: 'Apparel',
      methodology: 'Name Testing',
      description: 'How comprehensive consumer research identified optimal fit names for "Relaxed Fit" and "Close Fit" jeans categories, enhancing product clarity and customer satisfaction through strategic naming decisions.',
      metrics: ['512 Participants', '14-Min Survey', '0-10 Scale Rating'],
      icon: 'Type',
      gradient: 'from-indigo-50 to-purple-50',
      href: '/resources/case-studies/jeans-fit-naming-preferences'
    },
    {
      id: 'apparel-messaging-effectiveness',
      title: 'Evaluating Apparel Messaging Effectiveness',
      industry: 'Apparel',
      methodology: 'Message Testing',
      description: 'How strategic message testing across three ticket designs revealed the most compelling messaging to drive consumer interest and purchase intent for apparel products promising increased warmth while reducing bulk.',
      metrics: ['600 Participants', '3 Ticket Designs', '15-Min Survey'],
      icon: 'MessageSquare',
      gradient: 'from-orange-50 to-amber-50',
      href: '/resources/case-studies/apparel-messaging-effectiveness'
    },
    {
      id: 'expert-reviews-app-features',
      title: 'Expert Reviews App Feature Testing',
      industry: 'Digital Media/Publications',
      methodology: 'Feature Testing',
      description: 'Evaluating the most impactful features for an expert reviews and buying guides app using comprehensive Kano Analysis and user feedback.',
      metrics: ['26-Min Survey', '50% Subscription Increase', 'Ages 18+'],
      icon: 'Smartphone',
      gradient: 'from-indigo-50 to-purple-50',
      href: '/resources/case-studies/expert-reviews-app-features'
    },
    {
      id: 'snack-concept-testing',
      title: 'Evaluating Snack Concept Potential',
      industry: 'Food & Restaurants',
      methodology: 'Concept Testing',
      description: 'How comprehensive concept testing revealed the most promising snack innovations and identified market opportunities worth 15% brand reach expansion.',
      metrics: ['21-Min Survey', '15% Brand Reach Expansion', '3 Top Concepts'],
      icon: 'Target',
      gradient: 'from-orange-50 to-yellow-50',
      href: '/resources/case-studies/snack-concept-testing'
    }
  ]

  const industries = ['All', 'Healthcare', 'Technology', 'Retail', 'Financial Services', 'Consumer Goods', 'Beauty & Cosmetics', 'Apparel', 'Food & Restaurants', 'Digital Media & Publications']
  const methodologies = ['All', 'Awareness/Usage', 'Concept Testing', 'Pricing', 'Segmentation', 'Product Testing', 'Package Testing', 'Market Segmentation', 'Wear Testing', 'Conjoint Analysis', 'Name Testing', 'Message Testing', 'Feature Testing', 'Market Discovery & Opportunity']
  
  // Filter case studies based on selected filters
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const industryMatch = selectedIndustry === 'All' || study.industry === selectedIndustry
      const methodologyMatch = selectedMethodology === 'All' || 
        (Array.isArray(study.methodology) 
          ? study.methodology.includes(selectedMethodology)
          : study.methodology === selectedMethodology)
      return industryMatch && methodologyMatch
    })
  }, [caseStudies, selectedIndustry, selectedMethodology])

  // Calculate dynamic methodology counts
  const methodologyCounts = useMemo(() => {
    const counts: { [key: string]: number } = {}
    
    caseStudies.forEach(study => {
      if (Array.isArray(study.methodology)) {
        study.methodology.forEach(method => {
          // Normalize conjoint analysis variations
          let normalizedMethod = method
          if (method.includes('Conjoint') || method.includes('ACBC')) {
            normalizedMethod = 'Conjoint Analysis'
          }
          counts[normalizedMethod] = (counts[normalizedMethod] || 0) + 1
        })
      } else {
        // Normalize conjoint analysis variations
        let normalizedMethod = study.methodology
        if (study.methodology.includes('Conjoint') || study.methodology.includes('ACBC')) {
          normalizedMethod = 'Conjoint Analysis'
        }
        counts[normalizedMethod] = (counts[normalizedMethod] || 0) + 1
      }
    })
    
    return counts
  }, [caseStudies])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/lJUMAhbB4221s0RKdN8YO/case-studies.png)'}}>
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Explore real-world examples of how our research drives measurable business results across diverse industries and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-proof-blue-600 mb-2">150+</div>
              <div className="text-proof-gray-600">Case Studies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-purple-600 mb-2">25+</div>
              <div className="text-proof-gray-600">Industries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-blue-600 mb-2">$50M+</div>
              <div className="text-proof-gray-600">Client Value Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-purple-600 mb-2">95%</div>
              <div className="text-proof-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Filter by Industry</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Badge 
                    key={industry}
                    variant={industry === selectedIndustry ? 'default' : 'outline'}
                    className={`px-4 py-2 cursor-pointer transition-colors ${
                      industry === selectedIndustry 
                        ? 'bg-proof-blue-600 text-white hover:bg-proof-blue-700' 
                        : 'border-proof-gray-300 text-proof-gray-700 hover:bg-proof-blue-50'
                    }`}
                    onClick={() => setSelectedIndustry(industry)}
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Filter by Methodology</h3>
              <div className="flex flex-wrap gap-2">
                {methodologies.map((methodology) => (
                  <Badge 
                    key={methodology}
                    variant={methodology === selectedMethodology ? 'default' : 'outline'}
                    className={`px-4 py-2 cursor-pointer transition-colors ${
                      methodology === selectedMethodology 
                        ? 'bg-proof-purple-600 text-white hover:bg-proof-purple-700' 
                        : 'border-proof-gray-300 text-proof-gray-700 hover:bg-proof-purple-50'
                    }`}
                    onClick={() => setSelectedMethodology(methodology)}
                  >
                    {methodology}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-proof-gray-900">
              Case Studies ({filteredCaseStudies.length})
            </h2>
            {(selectedIndustry !== 'All' || selectedMethodology !== 'All') && (
              <button
                onClick={() => {
                  setSelectedIndustry('All')
                  setSelectedMethodology('All')
                }}
                className="text-proof-blue-600 hover:text-proof-blue-700 font-medium transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
          
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">No case studies found</h3>
              <p className="text-proof-gray-600 mb-6">Try adjusting your filters to see more results.</p>
              <button
                onClick={() => {
                  setSelectedIndustry('All')
                  setSelectedMethodology('All')
                }}
                className="text-proof-blue-600 hover:text-proof-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => {
                const IconComponent = iconMap[study.icon as keyof typeof iconMap]
                
                // Special styling for LTOT case study with background image
                const isLTOTStudy = study.id === 'ltot-therapy-market-sizing'
                const cardStyle = isLTOTStudy ? {
                  backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/Sw4hnUo6PaxgkLM8GAR9S/o2-therapy.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                } : {}
                
                return (
                  <Link key={study.id} href={study.href}>
                    <Card 
                      className={`p-8 ${isLTOTStudy ? 'relative' : `bg-gradient-to-br ${study.gradient}`} border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full`}
                      style={cardStyle}
                    >
                      {isLTOTStudy && <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg"></div>}
                      <div className={`${isLTOTStudy ? 'relative z-10' : ''}`}>
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 bg-white rounded-lg shadow-sm">
                            <IconComponent className="h-8 w-8 text-proof-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                                {study.industry}
                              </Badge>
                              {Array.isArray(study.methodology) 
                                ? study.methodology.map((method, index) => (
                                    <Badge key={index} className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                                      {method}
                                    </Badge>
                                  ))
                                : <Badge className="bg-proof-blue-100 text-proof-blue-700 hover:bg-proof-blue-200">
                                    {study.methodology}
                                  </Badge>
                              }
                            </div>
                            <h3 className="text-xl font-semibold text-proof-gray-900 mb-3 group-hover:text-proof-blue-600 transition-colors">
                              {study.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-black mb-6 leading-relaxed">
                          {study.description}
                        </p>
                        
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {study.metrics.map((metric, index) => (
                            <div key={index} className="text-center p-3 bg-white/50 rounded-lg">
                              <div className="text-sm font-semibold text-proof-gray-900">{metric}</div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-proof-blue-600 font-medium group-hover:text-proof-blue-700">
                            Read Full Case Study
                          </span>
                          <ArrowRight className="h-5 w-5 text-proof-blue-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Featured Methodologies */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Popular Research Methodologies</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Discover the methodologies that deliver the most impactful results for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Conjoint Analysis', icon: 'BarChart3' },
              { name: 'MaxDiff Analysis', icon: 'TrendingUp' },
              { name: 'Segmentation', icon: 'Users' },
              { name: 'Concept Testing', icon: 'Target' }
            ].map((method) => {
              const IconComponent = iconMap[method.icon as keyof typeof iconMap]
              const count = methodologyCounts[method.name] || 0
              const studyText = count === 1 ? 'Study' : 'Studies'
              return (
                <Card key={method.name} className="p-6 bg-white border-2 border-proof-gray-200 hover:border-proof-blue-300 transition-colors">
                  <IconComponent className="h-10 w-10 text-proof-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">{method.name}</h3>
                  <p className="text-proof-gray-600">{count} {studyText}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven research methodologies can drive measurable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function CaseStudiesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white">
          <Header />
          <section className="py-24 text-center">
            <p className="text-proof-gray-600">Loading case studies...</p>
          </section>
        </div>
      }
    >
      <CaseStudiesPageContent />
    </Suspense>
  )
}

