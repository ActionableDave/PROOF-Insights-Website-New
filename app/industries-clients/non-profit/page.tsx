import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Heart, TrendingUp, Users, Target, BarChart3, Eye, Zap, Brain, Globe, Building2, User, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function NonProfitPage() {
  console.log("Non-Profit page loaded")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-proof-blue-600 mr-3" />
                <span className="text-proof-blue-600 font-semibold text-lg">Non-Profit Organizations</span>
              </div>
              <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
                Amplify Your Mission Impact
              </h1>
              <p className="text-xl text-proof-gray-600 mb-8 leading-relaxed">
                Transform your nonprofit organization with strategic insights into donor behavior, digital fundraising, and program effectiveness. We help mission-driven organizations understand stakeholder needs while navigating rising demand with 77% of nonprofits seeing increased service demand in 2024.
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
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Non-profit community impact and volunteering" 
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-proof-green-600" />
                    <div>
                      <div className="text-sm font-semibold text-proof-gray-900">Service Demand</div>
                      <div className="text-xs text-proof-gray-600">+77% in 2024</div>
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
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">2024-2025 Sector Intelligence</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Critical trends impacting the nonprofit sector and their implications for organizational strategy and sustainability.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-0">
              <TrendingUp className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Rising Demand vs. Funding Gaps</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                <strong>77% of nonprofits saw increased demand in 2024</strong>, but only 52% saw funding rise. For 2025, 76% expect higher demand while just 35% expect funding growth.
              </p>
              <div className="text-xs text-red-600 font-medium">Challenge: Critical</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Brain className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Digital Fundraising Revolution</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Organizations prioritizing digital optimization with donation page completion rates at 12% and website conversion rates at 0.16%—highlighting massive improvement opportunities.
              </p>
              <div className="text-xs text-blue-600 font-medium">Opportunity: High</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <Heart className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Revenue Diversification</h3>
              <p className="text-proof-gray-600 text-sm mb-3">
                Nonprofits moving away from grant dependence, prioritizing membership fees, corporate sponsorships, and recurring donations for financial stability.
              </p>
              <div className="text-xs text-green-600 font-medium">Strategy: Essential</div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Economic and Policy Challenges</h3>
                <p className="text-blue-100 mb-6">
                  The sector faces challenges from rising tariffs, global trade instability, and reductions in federal funding, prompting nonprofits to adapt with greater agility and innovation.
                </p>
                <div className="flex items-center text-blue-100">
                  <Heart className="h-5 w-5 mr-2" />
                  <span className="text-sm">PROOF helps nonprofits navigate funding challenges and optimize donor engagement strategies</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">78%</div>
                <div className="text-blue-100">Expect increased expenses in 2025</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Trusted by Leading Non-Profit Organizations</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              We partner with mission-driven organizations creating positive social impact and community change.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">United Hope</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">Community Plus</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">Global Impact</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">Education First</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">Health Alliance</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
              <div className="text-lg font-bold text-proof-gray-700">Future Foundation</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-proof-gray-600 italic">
              "PROOF's donor research helped us optimize our fundraising strategy and increase donor retention by 63%"
            </p>
            <p className="text-sm text-proof-gray-500 mt-2">— Development Director, Leading Education Non-Profit</p>
          </div>
        </div>
      </section>

      {/* Research Solutions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Research Solutions for Non-Profit Organizations</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Specialized research methodologies to help nonprofits maximize impact, optimize fundraising, and strengthen stakeholder relationships.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <Users className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Donor Behavior & Retention</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand donor motivations, giving patterns, and preferences to optimize fundraising strategies and improve retention rates.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Donor motivation analysis</li>
                <li>• Giving pattern research</li>
                <li>• Retention strategy optimization</li>
                <li>• Generational giving preferences</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Target className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Digital Fundraising Optimization</h3>
              <p className="text-proof-gray-600 mb-6">
                Research digital giving preferences and optimize online donation experiences to increase conversion rates.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Website conversion optimization</li>
                <li>• Monthly giving program effectiveness</li>
                <li>• Digital payment preferences</li>
                <li>• Social media fundraising impact</li>
              </ul>
              <div className="flex items-center text-proof-purple-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <BarChart3 className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Program Impact Measurement</h3>
              <p className="text-proof-gray-600 mb-6">
                Measure and communicate program effectiveness to demonstrate impact to donors, volunteers, and beneficiaries.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Impact measurement frameworks</li>
                <li>• Beneficiary feedback analysis</li>
                <li>• Program effectiveness evaluation</li>
                <li>• Success story development</li>
              </ul>
              <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <Eye className="h-10 w-10 text-proof-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Stakeholder Engagement Research</h3>
              <p className="text-proof-gray-600 mb-6">
                Understand volunteer motivations, board member engagement, and community partnerships to strengthen relationships.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2 mb-6">
                <li>• Volunteer motivation analysis</li>
                <li>• Board engagement optimization</li>
                <li>• Community partnership research</li>
                <li>• Advocacy strategy development</li>
              </ul>
              <div className="flex items-center text-proof-purple-600 text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
          </div>

          {/* Specialized Research Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-proof-gray-900 mb-6 text-center">Specialized Research for Non-Profit Innovation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Corporate Partnership Strategy</h4>
                <p className="text-sm text-proof-gray-600">Research corporate social responsibility priorities and optimize partnership development strategies.</p>
              </div>
              <div className="text-center">
                <Brain className="h-8 w-8 text-proof-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Grant Writing Optimization</h4>
                <p className="text-sm text-proof-gray-600">Analyze funder priorities and optimize grant applications for higher success rates and funding diversity.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-proof-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-proof-gray-900 mb-2">Crisis Communication</h4>
                <p className="text-sm text-proof-gray-600">Research stakeholder communication preferences during challenging times and crisis situations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Case Studies for Non-Profit Organizations</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Real results from our research with leading nonprofit organizations and mission-driven institutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-l-4 border-proof-blue-600">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-proof-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Digital Fundraising Strategy</h3>
                  <p className="text-sm text-proof-gray-600">Donor Engagement Optimization</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                An education nonprofit needed to understand their donor base and optimize their digital fundraising approach to increase recurring donations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased donor retention by 63%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Improved monthly giving by 89%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Enhanced website conversion to 4.2%</span>
                </div>
              </div>
              <Link href="/resources/case-studies" className="flex items-center text-proof-blue-600 text-sm font-medium">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="p-8 bg-white border-l-4 border-proof-purple-600">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-proof-purple-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-proof-gray-900">Program Impact Measurement</h3>
                  <p className="text-sm text-proof-gray-600">Community Health Initiative</p>
                </div>
              </div>
              <p className="text-proof-gray-600 mb-6">
                A health-focused nonprofit wanted to measure the impact of their community programs and improve their ability to communicate results to stakeholders.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Documented 73% improvement in health outcomes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Secured 3 major grants totaling $2.1M</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-proof-green-600 mr-2" />
                  <span className="text-sm text-proof-gray-600">Increased volunteer engagement by 56%</span>
                </div>
              </div>
              <Link href="/resources/case-studies" className="flex items-center text-proof-purple-600 text-sm font-medium">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Amplify Your Mission Impact?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get the strategic insights you need to optimize fundraising, strengthen donor relationships, and maximize your organization's social impact in challenging times.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Free 30-minute consultation on nonprofit trends</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Custom research proposal within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-100 mr-3" />
                  <span className="text-blue-100">Donor behavior and impact measurement insights</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-100 mr-2" />
                  <span className="text-blue-100 text-sm">nonprofit@proofinsights.com</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-proof-gray-900 mb-6">Get Your Non-Profit Research Proposal</h3>
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
                    placeholder="john.smith@organization.org"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Organization Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Your Non-Profit Organization"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-proof-gray-700 mb-2">Research Challenge *</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-proof-gray-300 rounded-lg focus:ring-2 focus:ring-proof-blue-500 focus:border-transparent" 
                    placeholder="Tell us about your nonprofit research needs, fundraising challenges, or program evaluation questions..."
                    required
                  />
                </div>
                
                <Button className="w-full bg-proof-blue-600 hover:bg-proof-blue-700 text-white py-3 text-lg font-semibold">
                  <Send className="mr-2 h-5 w-5" />
                  Send Research Proposal Request
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}