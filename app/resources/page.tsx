import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, BookOpen, Users, Calculator, FileText, Video, Newspaper, Download } from 'lucide-react'
import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
              Research Resources
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive library of research insights, tools, case studies, and thought leadership to accelerate your market research knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Explore Our Resources</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From practical tools to in-depth case studies, find everything you need to make informed research decisions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Link href="/resources/blog">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <BookOpen className="h-12 w-12 text-proof-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-proof-gray-900 mb-4">Research Blog</h3>
                <p className="text-proof-gray-600 mb-6">
                  Stay updated with the latest market research trends, methodologies, and industry insights from our expert team.
                </p>
                <div className="flex items-center text-proof-blue-600 font-medium">
                  Read Latest Posts <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </Card>
            </Link>
            
            <Link href="/resources/tools">
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <Calculator className="h-12 w-12 text-proof-purple-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-proof-gray-900 mb-4">Research Tools</h3>
                <p className="text-proof-gray-600 mb-6">
                  Free calculators and tools to help you plan your research projects, calculate sample sizes, and estimate timelines.
                </p>
                <div className="flex items-center text-proof-purple-600 font-medium">
                  Access Tools <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Link href="/resources/case-studies">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <FileText className="h-12 w-12 text-proof-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-proof-gray-900 mb-4">Case Studies</h3>
                <p className="text-proof-gray-600 mb-6">
                  Explore real-world examples of how our research drives measurable business results across diverse industries and challenges.
                </p>
                <div className="flex items-center text-proof-blue-600 font-medium">
                  View Studies <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </Card>
            </Link>
            
            <Link href="/resources/thought-leadership">
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <Users className="h-12 w-12 text-proof-purple-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-proof-gray-900 mb-4">Thought Leadership</h3>
                <p className="text-proof-gray-600 mb-6">
                  Access our comprehensive collection of white papers, webinars, and expert insights on market research trends and best practices.
                </p>
                <div className="flex items-center text-proof-purple-600 font-medium">
                  Explore Content <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Featured Resources</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our most popular and valuable resources for market research professionals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-2 border-proof-blue-200">
              <FileText className="h-12 w-12 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">The Complete Guide to Conjoint Analysis</h3>
              <p className="text-proof-gray-600 mb-6">
                A comprehensive white paper covering everything from basic concepts to advanced implementation strategies.
              </p>
              <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white w-full">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </Card>
            
            <Card className="p-6 bg-white border-2 border-proof-purple-200">
              <Video className="h-12 w-12 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Webinar: Future of Market Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Watch our latest webinar on emerging trends and technologies shaping the future of market research.
              </p>
              <Button className="bg-proof-purple-600 hover:bg-proof-purple-700 text-white w-full">
                Watch Now
              </Button>
            </Card>
            
            <Card className="p-6 bg-white border-2 border-proof-blue-200">
              <BookOpen className="h-12 w-12 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Research ROI Calculator</h3>
              <p className="text-proof-gray-600 mb-6">
                Calculate the potential return on investment for your market research initiatives with our interactive tool.
              </p>
              <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white w-full">
                Calculate ROI
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Latest from Our Blog</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest insights and perspectives on market research trends.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-proof-blue-100 to-proof-purple-100"></div>
              <div className="p-6">
                <div className="text-sm text-proof-blue-600 font-medium mb-2">March 15, 2024</div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">5 Key Trends Shaping Market Research in 2024</h3>
                <p className="text-proof-gray-600 mb-4">Explore the latest developments in research methodologies and technology adoption...</p>
                <Link href="/resources/blog/trends-2024" className="text-proof-blue-600 font-medium hover:text-proof-blue-700">
                  Read More →
                </Link>
              </div>
            </Card>
            
            <Card className="bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-proof-purple-100 to-proof-blue-100"></div>
              <div className="p-6">
                <div className="text-sm text-proof-purple-600 font-medium mb-2">March 12, 2024</div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Maximizing Survey Response Rates: A Practical Guide</h3>
                <p className="text-proof-gray-600 mb-4">Learn proven strategies to increase participation and improve data quality...</p>
                <Link href="/resources/blog/survey-response-rates" className="text-proof-purple-600 font-medium hover:text-proof-purple-700">
                  Read More →
                </Link>
              </div>
            </Card>
            
            <Card className="bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-proof-blue-100 to-proof-purple-100"></div>
              <div className="p-6">
                <div className="text-sm text-proof-blue-600 font-medium mb-2">March 8, 2024</div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">When to Use Qualitative vs Quantitative Research</h3>
                <p className="text-proof-gray-600 mb-4">A comprehensive guide to choosing the right research methodology...</p>
                <Link href="/resources/blog/qual-vs-quant" className="text-proof-blue-600 font-medium hover:text-proof-blue-700">
                  Read More →
                </Link>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/resources/blog">
              <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-3">
                View All Blog Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Newspaper className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with Research Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our monthly newsletter for the latest market research trends, case studies, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}