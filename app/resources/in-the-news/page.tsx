import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ExternalLink, Calendar, Newspaper, Award, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

export default function InTheNewsPage() {
  const newsItems = [
    {
      title: 'Autoimmunity and the "Good Girls"™️ - The first sociological survey exploring the intersection of empowerment and autoimmunity in American women',
      publication: 'Women Rising',
      type: 'Research Study',
      date: '2024',
      description: 'PROOF Insights conducted groundbreaking research exploring the relationship between societal expectations and autoimmune conditions in American women.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/Good.jpg',
      link: 'https://autoimmunesurvey.com/',
      featured: true,
      category: 'Healthcare Research'
    },
    {
      title: 'American Mothers on Pause - Highlighting the gains and sacrifices made by stay-at-home moms',
      publication: 'Mother Untitled',
      type: 'Market Research',
      date: '2024',
      description: 'Comprehensive research study examining the experiences, challenges, and contributions of stay-at-home mothers in America.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/motheruntitled_americanmothersonpause.webp',
      link: 'https://www.motheruntitled.com/americanmothersonpause',
      featured: true,
      category: 'Social Research'
    },
    {
      title: 'A dynamic segmentation of U.S. women during the COVID‐19 pandemic',
      publication: 'International Journal of Consumer Studies',
      type: 'Academic Publication',
      date: '2023',
      description: 'Peer-reviewed research analyzing consumer behavior patterns and segmentation changes among U.S. women during the pandemic.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/A_dynamic_segmentation_of_U.S._women_during_the_COVID‐19_pandemic-e1680544336279.jpg',
      link: 'https://onlinelibrary.wiley.com/doi/10.1111/ijcs.12932',
      featured: true,
      category: 'Academic Research'
    },
    {
      title: 'PBS and Member Stations Voted "Most Trusted" Institution for 18 Consecutive Years',
      publication: 'PBS',
      type: 'Trust Research',
      date: '2024',
      description: 'Annual trust study conducted by PROOF Insights demonstrates PBS\'s continued leadership in public trust and institutional credibility.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/pbs.webp',
      link: 'https://www.pbs.org/about/about-pbs/blogs/news/pbs-and-member-stations-voted-most-trusted-institution-for-18-consecutive-years/',
      featured: false,
      category: 'Media Research'
    },
    {
      title: 'Americans Rate PBS and its Member Stations Most Trusted Institution for the 15th Consecutive Year',
      publication: 'PBS',
      type: 'Trust Research',
      date: '2023',
      description: 'Continued validation of PBS\'s trust leadership through comprehensive national research methodology.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/pbs-article-2.jpeg',
      link: 'https://proof-insights.com/wp-content/uploads/2023/03/pbs-article-2.pdf',
      featured: false,
      category: 'Media Research'
    },
    {
      title: 'The five-dimensional curiosity scale: Capturing the bandwidth of curiosity and identifying four unique subgroups of curious people',
      publication: 'Journal of Research in Personality',
      type: 'Academic Publication',
      date: '2023',
      description: 'Groundbreaking psychological research developing new frameworks for measuring and understanding curiosity in consumer behavior.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/personality-journal-article-1.jpeg',
      link: 'https://proof-insights.com/wp-content/uploads/2023/03/personality-journal-article-1.pdf',
      featured: false,
      category: 'Academic Research'
    },
    {
      title: 'Nationwide Survey Confirms That PBS and Member Stations Are America\'s Most Trusted Institution for the 14th Consecutive Year',
      publication: 'PBS',
      type: 'Trust Research',
      date: '2022',
      description: 'Longitudinal trust research demonstrating consistent methodology and reliable measurement over extended time periods.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/pbs-article-1.jpeg',
      link: 'https://www.pbs.org/about/about-pbs/blogs/news/nationwide-survey-confirms-that-pbs-and-member-stations-are-americas-most-trusted-institution-for-the-14th-consecutive-year/',
      featured: false,
      category: 'Media Research'
    },
    {
      title: 'State of the Game: The NFL Fan Poll',
      publication: 'Sports Illustrated',
      type: 'Sports Research',
      date: '2022',
      description: 'Comprehensive analysis of NFL fan sentiment, preferences, and engagement patterns across diverse demographics.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/sports-illustrated-article-2.jpeg',
      link: 'https://proof-insights.com/wp-content/uploads/2023/03/sports-illustrated-article-2.pdf',
      featured: false,
      category: 'Sports & Entertainment'
    },
    {
      title: 'Richer, Together',
      publication: 'Money Magazine',
      type: 'Financial Research',
      date: '2022',
      description: 'Financial behavior research examining household spending patterns and economic decision-making processes.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/money-article-3.jpeg',
      link: 'https://proof-insights.com/wp-content/uploads/2023/03/money-article-3.pdf',
      featured: false,
      category: 'Financial Services'
    },
    {
      title: 'What\'s Your Money State of Mind?',
      publication: 'Money Magazine',
      type: 'Financial Research',
      date: '2021',
      description: 'Psychological profiling research exploring the relationship between mindset and financial decision-making.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/money-article-2.jpeg',
      link: 'https://proof-insights.com/wp-content/uploads/2023/03/money-article-2.pdf',
      featured: false,
      category: 'Financial Services'
    },
    {
      title: 'Your Surprising Beauty Secrets',
      publication: 'People Magazine',
      type: 'Consumer Research',
      date: '2021',
      description: 'Consumer behavior analysis revealing unexpected patterns in beauty product usage and preferences.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/people-article-1.jpeg',
      link: 'https://proof-insights.com/wp-content/uploads/2023/03/people-article-1.pdf',
      featured: false,
      category: 'Beauty & Lifestyle'
    },
    {
      title: 'Time Inc. Study Reveals That "Digital Natives" Switch Between Devices and Platforms Every Two Minutes',
      publication: 'Time Inc.',
      type: 'Digital Behavior Research',
      date: '2012',
      description: 'Pioneering research on multi-device usage patterns and digital consumption behaviors among younger demographics.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/V3v7-hRs_400x400.jpg',
      link: 'https://www.businesswire.com/news/home/20120409005536/en/Time-Study-Reveals-%E2%80%9CDigital-Natives%E2%80%9D-Switch-Devices',
      featured: false,
      category: 'Digital Media'
    },
    {
      title: 'The ABCs of E-Reading',
      publication: 'The Wall Street Journal',
      type: 'Technology Research',
      date: '2010',
      description: 'Early research on e-reading adoption patterns and consumer preferences in the digital publishing transition.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/wsj-social-share-e1679331598999.webp',
      link: 'http://online.wsj.com/article/SB10001424052748703846604575448093175758872.html',
      featured: false,
      category: 'Technology'
    },
    {
      title: 'Sony: ebooks to overtake print within five years',
      publication: 'The Telegraph',
      type: 'Technology Research',
      date: '2010',
      description: 'Predictive market research on the digital transformation of the publishing industry.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/download.webp',
      link: 'http://www.telegraph.co.uk/technology/sony/7798340/Sony-ebooks-to-overtake-print-within-five-years.html',
      featured: false,
      category: 'Technology'
    },
    {
      title: 'The Luxury Survey',
      publication: 'TIME Magazine',
      type: 'Luxury Market Research',
      date: '2009',
      description: 'Comprehensive analysis of luxury consumer behavior and market trends during economic uncertainty.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/time-article-1.jpeg',
      link: 'https://proof-insights.com/wp-content/uploads/2023/03/time-article-1.pdf',
      featured: false,
      category: 'Luxury Goods'
    },
    {
      title: 'The Global Luxury Survey',
      publication: 'TIME Magazine',
      type: 'Luxury Market Research',
      date: '2008',
      description: 'International luxury market research providing cross-cultural insights into premium consumer behavior.',
      image: 'https://proof-insights.com/wp-content/uploads/2024/07/time-article-2.jpeg',
      link: 'https://proof-insights.com/wp-content/uploads/2023/03/time-article-2.pdf',
      featured: false,
      category: 'Luxury Goods'
    }
  ]

  const featuredItems = newsItems.filter(item => item.featured)
  const regularItems = newsItems.filter(item => !item.featured)

  const categories = ['All', 'Healthcare Research', 'Social Research', 'Academic Research', 'Media Research', 'Sports & Entertainment', 'Financial Services', 'Beauty & Lifestyle', 'Digital Media', 'Technology', 'Luxury Goods']

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6" data-macaly="hero-title">
              In the News
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="hero-description">
              Discover how PROOF Insights research has been featured in leading publications, academic journals, and media outlets, driving important conversations and business decisions.
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
              <div className="text-proof-gray-600">Media Mentions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-purple-600 mb-2">15+</div>
              <div className="text-proof-gray-600">Research Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-blue-600 mb-2">20+</div>
              <div className="text-proof-gray-600">Years of Coverage</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-proof-purple-600 mb-2">10M+</div>
              <div className="text-proof-gray-600">Readers Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coverage */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Recent Featured Coverage</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our latest research initiatives making headlines and driving important conversations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-proof-blue-100 text-proof-blue-700">
                      {item.type}
                    </Badge>
                    <Badge variant="outline" className="border-proof-purple-300 text-proof-purple-700">
                      Featured
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-proof-gray-900 mb-3 group-hover:text-proof-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3 text-sm text-proof-gray-600">
                    <Newspaper className="h-4 w-4" />
                    <span className="font-medium">{item.publication}</span>
                    <span>•</span>
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  
                  <p className="text-proof-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium text-sm group-hover:gap-2 transition-all"
                  >
                    Read Full Article <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Coverage */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Media Coverage & Publications</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              A comprehensive look at how our research has informed public discourse and business strategy.
            </p>
          </div>
          
          <div className="space-y-6">
            {regularItems.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-proof-gray-300 text-proof-gray-700">
                          {item.type}
                        </Badge>
                        <Badge variant="outline" className="border-proof-blue-300 text-proof-blue-700">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-proof-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-proof-gray-900 mb-2 group-hover:text-proof-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3 text-sm text-proof-gray-600">
                      <Newspaper className="h-4 w-4" />
                      <span className="font-medium">{item.publication}</span>
                    </div>
                    
                    <p className="text-proof-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                    
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 font-medium text-sm transition-all"
                    >
                      Read Full Article <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Research Coverage Areas</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our expertise spans diverse industries and research methodologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Healthcare Research', count: '8 Studies', icon: Award, color: 'text-blue-600' },
              { name: 'Academic Publications', count: '12 Papers', icon: TrendingUp, color: 'text-purple-600' },
              { name: 'Media Trust Studies', count: '15+ Years', icon: Users, color: 'text-green-600' },
              { name: 'Consumer Behavior', count: '25+ Studies', icon: Newspaper, color: 'text-orange-600' }
            ].map((category, index) => (
              <Card key={index} className="p-6 text-center border-2 border-proof-gray-200 hover:border-proof-blue-300 transition-colors">
                <category.icon className={`h-12 w-12 ${category.color} mx-auto mb-4`} />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">{category.name}</h3>
                <p className="text-proof-gray-600">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make News with Your Research?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with PROOF Insights to conduct research that drives meaningful conversations and creates measurable impact in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">
                Discuss Your Research Goals
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/resources/case-studies">
                View Our Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}