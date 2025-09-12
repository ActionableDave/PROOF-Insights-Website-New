import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, BarChart3, Users, Target, TrendingUp, Zap, Brain } from 'lucide-react'
import Link from 'next/link'

export default function MethodologiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/eeCe_cfFN6775arM1f6wL/methodology.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-white/65"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black mb-6">
              Research Methodologies
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of research methods and analytical techniques designed to answer your most critical business questions. From traditional surveys to advanced analytics, we employ the right methodology for every research challenge.
            </p>
          </div>
        </div>
      </section>

      {/* Methods Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <BarChart3 className="h-12 w-12 text-black mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">Quantitative Research</h3>
              <p className="text-black mb-6">
                Large-scale surveys, statistical analysis, and data modeling to provide measurable insights and reliable projections.
              </p>
              <ul className="text-sm text-black space-y-2">
                <li>• Online and telephone surveys</li>
                <li>• Conjoint analysis and ACBC</li>
                <li>• Statistical modeling and forecasting</li>
                <li>• MaxDiff scaling and Q-Sort</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <Users className="h-12 w-12 text-black mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">Qualitative Research</h3>
              <p className="text-black mb-6">
                In-depth interviews, focus groups, and ethnographic studies to understand the 'why' behind consumer behavior.
              </p>
              <ul className="text-sm text-black space-y-2">
                <li>• Focus groups and IDIs</li>
                <li>• Ethnographic research</li>
                <li>• Online communities</li>
                <li>• Expert interviews and Delphi studies</li>
              </ul>
            </Card>
          </div>
          
          {/* Additional Context */}
          <div className="max-w-4xl mx-auto text-center mt-16">
            <p className="text-black leading-relaxed text-lg text-left">
              From a basic perspective, knowing whether qualitative or quantitative research is the best fit for any particular research effort requires experience and may not be as simple a question as it seems. Often both of these methods are used and in varying order depending on research goals and endpoints.<br /><br /> PROOF Insights can deliver on both modalities and only recommend the option that best fits our client's specific needs. </p>
          </div>
        </div>
      </section>

      {/* Methodology Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Methodologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PROOF Insights has a diverse portfolio of Advanced techniques, customized and refined through decades of research experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/methodologies/features-concepts-price-optimization">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-full border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Features & Price Optimization</h3>
                <p className="text-sm text-gray-600 mb-4">Conjoint, ACBC, MaxDiff, and advanced modeling techniques</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/methodologies/understanding-audience">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-full border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding Your Audience</h3>
                <p className="text-sm text-gray-600 mb-4">Segmentation, factor analysis, and behavioral modeling</p>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/methodologies/competitive-landscape">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-full border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Competitive Landscape</h3>
                <p className="text-sm text-gray-600 mb-4">Multi-dimensional scaling, SEM, and perceptual mapping</p>
                <div className="flex items-center text-orange-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/methodologies/price-optimization">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-full border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Price Optimization</h3>
                <p className="text-sm text-gray-600 mb-4">Price laddering, Van Westendorp, and revenue modeling</p>
                <div className="flex items-center text-yellow-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Analytics */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Advanced Analytics Capabilities</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Cutting-edge analytical techniques that transform complex data into clear, actionable insights.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Brain className="h-12 w-12 text-black mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">Generative AI Efficiencies</h3>
              <p className="text-black mb-4">
                Custom and state of the art AI tools and agents to increase the utility of our experience.</p>
              <ul className="text-sm text-black space-y-1">
                <li>• Pattern Discovery</li>
                <li>• Advanced Classification</li>
                <li>• Committed to AI Innovation</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <BarChart3 className="h-12 w-12 text-black mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">Statistical Modeling</h3>
              <p className="text-black mb-4">
                Advanced statistical techniques including structural equation modeling, hierarchical modeling, and time series analysis.
              </p>
              <ul className="text-sm text-black space-y-1">
                <li>• Structural Equation Modeling (SEM)</li>
                <li>• Hierarchical Bayes</li>
                <li>• Time Series Forecasting</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Target className="h-12 w-12 text-black mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">Experimental Design</h3>
              <p className="text-black mb-4">
                A/B testing, multivariate experiments, and design of experiments (DOE) to establish causal relationships.
              </p>
              <ul className="text-sm text-black space-y-1">
                <li>• Randomized Controlled Trials</li>
                <li>• Factorial Designs</li>
                <li>• Quasi-Experimental Methods</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Selection */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">Choosing the Right Methodology</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              We select the optimal research approach based on your specific objectives, timeline, and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-black mb-4">Exploratory Research</h3>
              <p className="text-black mb-4">When you need to understand a market or problem space</p>
              <ul className="text-sm text-black space-y-2">
                <li>• Qualitative interviews</li>
                <li>• Focus groups</li>
                <li>• Ethnographic studies</li>
                <li>• Secondary research</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-black mb-4">Descriptive Research</h3>
              <p className="text-black mb-4">When you need to measure and quantify market characteristics</p>
              <ul className="text-sm text-black space-y-2">
                <li>• Large-scale surveys</li>
                <li>• Cross-sectional studies</li>
                <li>• Market sizing</li>
                <li>• Segmentation analysis</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-black mb-4">Causal Research</h3>
              <p className="text-black mb-4">When you need to understand cause-and-effect relationships</p>
              <ul className="text-sm text-black space-y-2">
                <li>• Experimental designs</li>
                <li>• A/B testing</li>
                <li>• Conjoint analysis</li>
                <li>• Longitudinal studies</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help Choosing the Right Methodology?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our research experts will help you select the optimal approach and methods to apply to your specific research objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-black px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">
                Consult with Our Experts
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}





