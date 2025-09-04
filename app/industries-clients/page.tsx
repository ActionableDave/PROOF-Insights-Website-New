import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Heart, Smartphone, ShoppingBag, Stethoscope, Beaker, Palette, Shirt, Store, UtensilsCrossed, Radio, Users, Building } from 'lucide-react'
import Link from 'next/link'

export default function IndustriesClientsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
              Industries & Clients
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deep industry expertise across multiple sectors, helping businesses of all sizes make data-driven decisions that drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logo Carousel */}
      <section className="py-16 bg-gradient-to-br from-proof-blue-50 via-white to-proof-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-proof-gray-200 text-proof-gray-700 mb-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
              <Building className="w-4 h-4 mr-1" />
              Trusted By
            </div>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {/* First set of logos */}
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/People_Magazine_logo.svg-1.png" alt="People Magazine" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/07/pbs.webp" alt="PBS" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Macys.png" alt="Macy's" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/NYT.png" alt="New York Times" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Chipotle-Logo-2009-present.png" alt="Chipotle" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/marvel-comics-vector-logo.png" alt="Marvel Comics" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Hallmark_logo.svg.png" alt="Hallmark" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Tonal.png" alt="Tonal" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/verizon.png" alt="Verizon" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Shiseido_logo.svg.png" alt="Shiseido" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/North-Face-Logo-1.png" alt="The North Face" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Sony_logo.svg.png" alt="Sony" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Square.png" alt="Square" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/BestFriendsAnimal.png" alt="Best Friends Animal Society" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2025/04/Lee_Logo.sm_.png" alt="Lee" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              
              {/* Duplicate set for seamless loop */}
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/People_Magazine_logo.svg-1.png" alt="People Magazine" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/07/pbs.webp" alt="PBS" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Macys.png" alt="Macy's" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/NYT.png" alt="New York Times" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Chipotle-Logo-2009-present.png" alt="Chipotle" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/marvel-comics-vector-logo.png" alt="Marvel Comics" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Hallmark_logo.svg.png" alt="Hallmark" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Tonal.png" alt="Tonal" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/verizon.png" alt="Verizon" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Shiseido_logo.svg.png" alt="Shiseido" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/North-Face-Logo-1.png" alt="The North Face" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Sony_logo.svg.png" alt="Sony" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/Square.png" alt="Square" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2024/06/BestFriendsAnimal.png" alt="Best Friends Animal Society" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://proof-insights.com/wp-content/uploads/2025/04/Lee_Logo.sm_.png" alt="Lee" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Clients and Industries We Serve</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From Fortune 500 enterprises to innovative startups, we partner with organizations across diverse industries to unlock growth opportunities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">500+</div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Projects Completed</h3>
              <p className="text-proof-gray-600">Across all industry verticals and company sizes</p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">50+</div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Fortune 500 Clients</h3>
              <p className="text-proof-gray-600">Trusted by leading global enterprises</p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <div className="text-3xl font-bold text-proof-blue-600 mb-2">12+</div>
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-2">Industry Verticals</h3>
              <p className="text-proof-gray-600">Specialized expertise across key sectors</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Industry Expertise</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our specialized knowledge helps you navigate industry-specific challenges and opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/industries-clients/digital-media-publications">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-40 flex flex-col">
                <Radio className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 flex-1">Digital Media & Publications</h3>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/industries-clients/dental-oral-care">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-40 flex flex-col">
                <Stethoscope className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 flex-1">Dental & Oral Care</h3>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/industries-clients/healthcare-surgical">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-40 flex flex-col">
                <Heart className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 flex-1">Healthcare & Surgical</h3>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/industries-clients/life-sciences">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-40 flex flex-col">
                <Beaker className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 flex-1">Life Sciences</h3>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/industries-clients/saas-technology">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-40 flex flex-col">
                <Smartphone className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 flex-1">SaaS & Technology</h3>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/industries-clients/beauty-cosmetics">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-40 flex flex-col">
                <Palette className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 flex-1">Beauty & Cosmetics</h3>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/industries-clients/apparel">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-40 flex flex-col">
                <Shirt className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 flex-1">Apparel</h3>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/industries-clients/retail">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-40 flex flex-col">
                <Store className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 flex-1">Retail</h3>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/industries-clients/food-restaurants">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-40 flex flex-col">
                <UtensilsCrossed className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 flex-1">Food & Restaurants</h3>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/industries-clients/networks">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-40 flex flex-col">
                <Radio className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 flex-1">Networks</h3>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Link href="/industries-clients/non-profit">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group h-40 flex flex-col">
                <Users className="h-10 w-10 text-proof-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 flex-1">Non-Profit</h3>
                <div className="flex items-center text-proof-blue-600 text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
            
            <Card className="p-6 bg-gradient-to-br from-proof-blue-50 to-proof-blue-50 border-2 border-dashed border-proof-blue-300 h-40 flex flex-col">
              <ShoppingBag className="h-10 w-10 text-proof-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-2 flex-1">Your Industry</h3>
              <p className="text-sm text-proof-gray-600 mb-3">Don't see your sector? We work across all industries.</p>
              <Link href="/contact" className="flex items-center text-proof-blue-600 text-sm font-medium hover:text-proof-blue-700 transition-colors">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">We Work With All Types of Organizations</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our scalable research solutions are designed to meet the needs of organizations at every stage of growth.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-2 border-proof-blue-200">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Startups & Scale-ups</h3>
              <p className="text-proof-gray-600 mb-6">
                Fast, agile research to validate concepts, understand markets, and accelerate growth with limited budgets.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Market validation studies</li>
                <li>• Product-market fit research</li>
                <li>• Rapid prototyping feedback</li>
                <li>• Investor-ready market sizing</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white border-2 border-proof-blue-200">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Mid-Market Companies</h3>
              <p className="text-proof-gray-600 mb-6">
                Strategic research to optimize growth, expand markets, and make confident business decisions.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Brand positioning research</li>
                <li>• Customer journey mapping</li>
                <li>• Competitive landscape analysis</li>
                <li>• Market expansion studies</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white border-2 border-proof-blue-200">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Enterprise & Fortune 500</h3>
              <p className="text-proof-gray-600 mb-6">
                Complex, multi-market research programs with advanced analytics and strategic consulting.
              </p>
              <ul className="text-sm text-proof-gray-600 space-y-2">
                <li>• Global market research</li>
                <li>• Advanced statistical modeling</li>
                <li>• Large-scale tracking studies</li>
                <li>• Strategic consulting services</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Success stories from organizations that have transformed their business with our research insights.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white">
              <p className="text-lg text-proof-gray-600 mb-6 italic">
                "PROOF Insights helped us understand our customer segments in a way we never had before. Their research directly informed our product roadmap and led to a 40% increase in customer satisfaction."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-proof-blue-100 rounded-full mr-4 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-proof-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-proof-gray-900">Sarah Chen</div>
                  <div className="text-sm text-proof-gray-600">VP Product, TechFlow Solutions</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <p className="text-lg text-proof-gray-600 mb-6 italic">
                "The competitive analysis and pricing research from PROOF was instrumental in our successful market entry. We launched with confidence and captured 15% market share in year one."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-proof-blue-100 rounded-full mr-4 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-proof-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-proof-gray-900">Michael Rodriguez</div>
                  <div className="text-sm text-proof-gray-600">CEO, HealthTech Innovations</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Client Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry expertise can help solve your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 text-lg font-semibold" asChild>
              <Link href="/resources/case-studies">
                View All Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}