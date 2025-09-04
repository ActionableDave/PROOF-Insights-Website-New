
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Stethoscope, Globe, TrendingUp, Target, BarChart3, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = siteMetadata['/resources/case-studies/ltot-therapy-market-sizing'] || {
  title: 'LTOT Market Sizing Case Study | PROOF Insights',
  description: 'How a global oxygen therapy company evaluated market opportunities for Long-Term Oxygen Therapy solutions through comprehensive market sizing and strategic assessment.'
}

export default function LTOTMarketSizingCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{
        backgroundImage: 'url(https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/S3_d2dGmPwCCY66HGPCgM/o2-therapy-wide.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white bg-opacity-75"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <Stethoscope className="h-12 w-12 text-proof-blue-600" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge className="bg-proof-blue-100 text-proof-blue-700 px-4 py-2">Healthcare</Badge>
              <Badge className="bg-proof-blue-100 text-proof-blue-700 px-4 py-2">Market Discovery & Opportunity</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-proof-gray-900 mb-6">
              Global O2 Products Company
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-proof-blue-600 mb-6">
              LTOT Market Sizing & Strategic Assessment
            </h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed">
              How a global oxygen therapy company evaluated market opportunities for portable and stationary Long-Term Oxygen Therapy (LTOT) solutions, determining total addressable market size, growth potential, and competitive dynamics to guide product development and international expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-proof-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Globe className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-gray-900 mb-2">Global Market Analysis</div>
              <div className="text-proof-gray-600">Comprehensive international assessment</div>
            </div>
            <div className="p-6">
              <BarChart3 className="h-12 w-12 text-proof-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-gray-900 mb-2">Excel-Based TAM Model</div>
              <div className="text-proof-gray-600">Dynamic modeling framework</div>
            </div>
            <div className="p-6">
              <Target className="h-12 w-12 text-proof-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-proof-gray-900 mb-2">Strategic Framework</div>
              <div className="text-proof-gray-600">Decision-ready insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-8">The Challenge</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-proof-gray-600 leading-relaxed mb-6">
                A global respiratory products company sought to evaluate global market opportunities for its portable and stationary oxygen therapy solutions, focusing on Long-Term Oxygen Therapy (LTOT) needs. The objective was to determine total addressable market size, growth potential, reimbursement landscapes, and competitive dynamics to guide product development and international expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12">The Approach</h2>
          
          <div className="mb-8">
            <p className="text-lg text-proof-gray-600 leading-relaxed mb-8">
              <strong>PROOF Insights</strong> conducted a comprehensive research study combining quantitative and qualitative methodologies:
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-proof-blue-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Actionable Research</h3>
                <p className="text-proof-gray-600">Conducted a global market sizing and assessment project utilizing secondary data, modeling, and strategic analysis.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-proof-blue-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Global Market Intelligence</h3>
                <p className="text-proof-gray-600">Acquisition and analysis of global LTOT market reports and healthcare system datasets across multiple geographies.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-proof-blue-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Strategic Collaboration</h3>
                <p className="text-proof-gray-600">Collaboration with Inogen management to identify priority markets, key metrics, and model parameters.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-proof-blue-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Dynamic Modeling Framework</h3>
                <p className="text-proof-gray-600">Development of an Excel-based calculator to estimate revenue, unit volumes, ASPs, and CAGRs by product type, region, and country.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-proof-blue-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Comprehensive Market Analysis</h3>
                <p className="text-proof-gray-600">Analysis included reimbursement structures, regulatory landscapes, distribution channels, and competitor portfolios to inform strategic prioritization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12">Key Findings</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-proof-blue-600 rounded-full mt-2"></div>
                <p className="text-proof-gray-600 leading-relaxed">
                  <strong>Detailed segmentation</strong> by product type, patient population, and geography revealed clear high-growth segments.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-proof-blue-600 rounded-full mt-2"></div>
                <p className="text-proof-gray-600 leading-relaxed">
                  <strong>The Excel-based TAM model</strong> allowed flexible scenario planning by geography and product category.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-proof-blue-600 rounded-full mt-2"></div>
                <p className="text-proof-gray-600 leading-relaxed">
                  <strong>Country-by-country reimbursement database</strong> informed pricing and market access strategies.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-proof-blue-600 rounded-full mt-2"></div>
                <p className="text-proof-gray-600 leading-relaxed">
                  <strong>Competitive intelligence</strong> identified key market leaders, their innovation pipelines, and market shares.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-proof-blue-600 rounded-full mt-2"></div>
                <p className="text-proof-gray-600 leading-relaxed">
                  <strong>Regulatory and distribution channel mapping</strong> provided clarity on barriers and accelerators for entry.
                </p>
              </div>
            </div>

            <div className="lg:order-first">
              <img 
                src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/gJYMTN3WVkcAZv09QCxfw/image.png" 
                alt="LTOT Market Sizing Study - Key Findings" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Outcomes */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12">Impact & Outcomes</h2>
          
          <div className="mb-8">
            <p className="text-lg text-proof-gray-600 leading-relaxed mb-8">
              The research results guided the company in several strategic initiatives:
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-proof-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <p className="text-proof-gray-600 leading-relaxed">
                <strong>Inogen obtained a decision-ready framework</strong> for global LTOT strategy.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-proof-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <p className="text-proof-gray-600 leading-relaxed">
                <strong>The outputs informed the product roadmap</strong> and prioritized market entries.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-proof-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <p className="text-proof-gray-600 leading-relaxed">
                <strong>The living Excel-based model</strong> enables continuous updates with new market data.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-proof-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <p className="text-proof-gray-600 leading-relaxed">
                <strong>Competitive and regulatory insights</strong> enhanced risk assessment and strategic planning.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <img 
              src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/3CTjLkKir5g5RO680sbg-/hi-case-study-ltot-therapy-market-sizing-page-2.jpg" 
              alt="LTOT Market Sizing Study - Impact and Outcomes" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-8">Conclusion</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-proof-gray-600 leading-relaxed">
              This comprehensive market sizing and assessment project provided Inogen with actionable insights and a dynamic modeling tool to support strategic decision-making. By combining market data, competitive intelligence, and reimbursement analysis, the company is well-positioned to target high-potential geographies and strengthen its global presence in the LTOT market.
            </p>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-proof-gray-900 mb-12 text-center">Related Case Studies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/case-studies/medical-device-segmentation">
              <Card className="p-6 bg-white border-2 border-proof-gray-200 hover:border-proof-blue-300 transition-all duration-300 cursor-pointer group h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-proof-blue-50 rounded-lg">
                    <Stethoscope className="h-6 w-6 text-proof-blue-600" />
                  </div>
                  <Badge className="bg-proof-blue-100 text-proof-blue-700">Healthcare</Badge>
                </div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3 group-hover:text-proof-blue-600 transition-colors">
                  Medical Device Market Segmentation Strategy
                </h3>
                <p className="text-proof-gray-600 text-sm leading-relaxed mb-4">
                  How a leading medical device manufacturer identified 4 distinct customer segments, resulting in a 35% increase in targeted marketing effectiveness.
                </p>
                <div className="flex items-center text-proof-blue-600 group-hover:text-proof-blue-700 font-medium">
                  <span className="text-sm">Read Case Study</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link href="/resources/case-studies/dermatology-acne-atu-market-research">
              <Card className="p-6 bg-white border-2 border-proof-gray-200 hover:border-proof-blue-300 transition-all duration-300 cursor-pointer group h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-proof-blue-50 rounded-lg">
                    <Stethoscope className="h-6 w-6 text-proof-blue-600" />
                  </div>
                  <Badge className="bg-proof-blue-100 text-proof-blue-700">Healthcare</Badge>
                </div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3 group-hover:text-proof-blue-600 transition-colors">
                  Dermatology Company | Acne ATU Market Research Study
                </h3>
                <p className="text-proof-gray-600 text-sm leading-relaxed mb-4">
                  How a household name dermatology company deepened its understanding of prescribing trends and physician preferences in the dynamic acne therapeutics market.
                </p>
                <div className="flex items-center text-proof-blue-600 group-hover:text-proof-blue-700 font-medium">
                  <span className="text-sm">Read Case Study</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link href="/resources/case-studies/rf-ablation-device">
              <Card className="p-6 bg-white border-2 border-proof-gray-200 hover:border-proof-blue-300 transition-all duration-300 cursor-pointer group h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-proof-blue-50 rounded-lg">
                    <Stethoscope className="h-6 w-6 text-proof-blue-600" />
                  </div>
                  <Badge className="bg-proof-blue-100 text-proof-blue-700">Healthcare</Badge>
                </div>
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-3 group-hover:text-proof-blue-600 transition-colors">
                  RF Ablation Device Capabilities Validation
                </h3>
                <p className="text-proof-gray-600 text-sm leading-relaxed mb-4">
                  How a medical device company validated new RF ablation capabilities for orthopedic surgeons using international ACBC analysis.
                </p>
                <div className="flex items-center text-proof-blue-600 group-hover:text-proof-blue-700 font-medium">
                  <span className="text-sm">Read Case Study</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Size Your Market Opportunity?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how comprehensive market sizing and strategic assessment can guide your business decisions and growth strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 font-semibold">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/resources/case-studies">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 font-semibold">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

