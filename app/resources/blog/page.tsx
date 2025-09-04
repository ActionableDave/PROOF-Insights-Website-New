import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, Calendar, User, ArrowRight, TrendingUp, Users, Target } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
              Research Insights Blog
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of market research trends with expert insights, methodological innovations, and practical guidance from our research team.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-proof-gray-400" />
                <Input 
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-proof-blue-600 text-proof-blue-600 hover:bg-proof-blue-50">
                All Posts
              </Button>
              <Button variant="ghost" className="text-proof-gray-600 hover:text-proof-blue-600">
                Methodologies
              </Button>
              <Button variant="ghost" className="text-proof-gray-600 hover:text-proof-blue-600">
                Industry Trends
              </Button>
              <Button variant="ghost" className="text-proof-gray-600 hover:text-proof-blue-600">
                Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Featured Article</h2>
          </div>
          
          <Card className="overflow-hidden bg-gradient-to-r from-proof-blue-50 to-proof-purple-50 border-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="h-64 lg:h-auto bg-gradient-to-br from-proof-blue-100 to-proof-purple-100"></div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 text-sm text-proof-blue-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    March 15, 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Tanya Dockendorf
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-proof-gray-900 mb-4">
                  The Future of Market Research: AI, Automation, and Human Insight
                </h3>
                <p className="text-lg text-proof-gray-600 mb-6">
                  Exploring how artificial intelligence and automation are transforming market research while highlighting the irreplaceable value of human interpretation and strategic thinking.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white text-proof-blue-600 text-sm font-medium rounded-full">AI & Technology</span>
                  <span className="px-3 py-1 bg-white text-proof-purple-600 text-sm font-medium rounded-full">Industry Trends</span>
                  <span className="px-3 py-1 bg-white text-proof-blue-600 text-sm font-medium rounded-full">Future of Research</span>
                </div>
                <Link href="/resources/blog/future-of-market-research">
                  <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Recent Articles</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our latest insights and perspectives on market research best practices and industry developments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-proof-blue-100 to-proof-purple-100 relative">
                <div className="absolute top-4 left-4">
                  <TrendingUp className="h-8 w-8 text-proof-blue-600" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-proof-gray-500 mb-3">
                  <span>March 12, 2025</span>
                  <span>•</span>
                  <span>Katie Crain</span>
                </div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">
                  5 Key Trends Shaping Market Research in 2024
                </h3>
                <p className="text-proof-gray-600 mb-4 text-sm">
                  From AI-powered analytics to real-time consumer insights, discover the trends that are revolutionizing how we understand markets and consumers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-proof-blue-50 text-proof-blue-600 text-xs font-medium rounded">Industry Trends</span>
                  <span className="px-2 py-1 bg-proof-purple-50 text-proof-purple-600 text-xs font-medium rounded">Technology</span>
                </div>
                <Link href="/resources/blog/trends-2024" className="text-proof-blue-600 font-medium hover:text-proof-blue-700 text-sm">
                  Read More →
                </Link>
              </div>
            </Card>

            {/* Article 2 */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-proof-purple-100 to-proof-blue-100 relative">
                <div className="absolute top-4 left-4">
                  <Users className="h-8 w-8 text-proof-purple-600" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-proof-gray-500 mb-3">
                  <span>March 8, 2025</span>
                  <span>•</span>
                  <span>Chase Wrinn</span>
                </div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">
                  Maximizing Survey Response Rates: A Practical Guide
                </h3>
                <p className="text-proof-gray-600 mb-4 text-sm">
                  Learn proven strategies to increase participation rates and improve data quality in your research projects.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-proof-purple-50 text-proof-purple-600 text-xs font-medium rounded">Methodology</span>
                  <span className="px-2 py-1 bg-proof-blue-50 text-proof-blue-600 text-xs font-medium rounded">Best Practices</span>
                </div>
                <Link href="/resources/blog/survey-response-rates" className="text-proof-purple-600 font-medium hover:text-proof-purple-700 text-sm">
                  Read More →
                </Link>
              </div>
            </Card>

            {/* Article 3 */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-proof-blue-100 to-proof-purple-100 relative">
                <div className="absolute top-4 left-4">
                  <Target className="h-8 w-8 text-proof-blue-600" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-proof-gray-500 mb-3">
                  <span>March 5, 2025</span>
                  <span>•</span>
                  <span>Andy Stacey</span>
                </div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">
                  When to Use Qualitative vs Quantitative Research
                </h3>
                <p className="text-proof-gray-600 mb-4 text-sm">
                  A comprehensive guide to choosing the right research methodology for your specific business objectives.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-proof-blue-50 text-proof-blue-600 text-xs font-medium rounded">Methodology</span>
                  <span className="px-2 py-1 bg-proof-purple-50 text-proof-purple-600 text-xs font-medium rounded">Research Design</span>
                </div>
                <Link href="/resources/blog/qual-vs-quant" className="text-proof-blue-600 font-medium hover:text-proof-blue-700 text-sm">
                  Read More →
                </Link>
              </div>
            </Card>

            {/* Article 4 */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-proof-purple-100 to-proof-blue-100"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-proof-gray-500 mb-3">
                  <span>March 1, 2025</span>
                  <span>•</span>
                  <span>Michael Lore</span>
                </div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">
                  The ROI of Market Research: Measuring Success
                </h3>
                <p className="text-proof-gray-600 mb-4 text-sm">
                  How to calculate and demonstrate the return on investment for your market research initiatives.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-proof-purple-50 text-proof-purple-600 text-xs font-medium rounded">ROI</span>
                  <span className="px-2 py-1 bg-proof-blue-50 text-proof-blue-600 text-xs font-medium rounded">Business Value</span>
                </div>
                <Link href="/resources/blog/roi-market-research" className="text-proof-purple-600 font-medium hover:text-proof-purple-700 text-sm">
                  Read More →
                </Link>
              </div>
            </Card>

            {/* Article 5 */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-proof-blue-100 to-proof-purple-100"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-proof-gray-500 mb-3">
                  <span>February 28, 2025</span>
                  <span>•</span>
                  <span>David Cristofaro</span>
                </div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">
                  Conjoint Analysis: Beyond the Basics
                </h3>
                <p className="text-proof-gray-600 mb-4 text-sm">
                  Advanced techniques and applications of conjoint analysis for complex business decisions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-proof-blue-50 text-proof-blue-600 text-xs font-medium rounded">Conjoint Analysis</span>
                  <span className="px-2 py-1 bg-proof-purple-50 text-proof-purple-600 text-xs font-medium rounded">Advanced Methods</span>
                </div>
                <Link href="/resources/blog/conjoint-analysis-advanced" className="text-proof-blue-600 font-medium hover:text-proof-blue-700 text-sm">
                  Read More →
                </Link>
              </div>
            </Card>

            {/* Article 6 */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-proof-purple-100 to-proof-blue-100"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-proof-gray-500 mb-3">
                  <span>February 25, 2025</span>
                  <span>•</span>
                  <span>Katie Crain</span>
                </div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">
                  Building Customer Personas from Research Data
                </h3>
                <p className="text-proof-gray-600 mb-4 text-sm">
                  Transform segmentation research into actionable customer personas that drive business strategy.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-proof-purple-50 text-proof-purple-600 text-xs font-medium rounded">Personas</span>
                  <span className="px-2 py-1 bg-proof-blue-50 text-proof-blue-600 text-xs font-medium rounded">Segmentation</span>
                </div>
                <Link href="/resources/blog/customer-personas-research" className="text-proof-purple-600 font-medium hover:text-proof-purple-700 text-sm">
                  Read More →
                </Link>
              </div>
            </Card>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-proof-blue-600 text-proof-blue-600 hover:bg-proof-blue-50 px-8 py-3">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Never Miss an Insight
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our blog updates and get the latest market research insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 bg-white border-0 focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-2 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}