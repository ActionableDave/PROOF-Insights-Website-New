import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, Target, Award, TrendingUp, Lightbulb, PenTool, Globe, Layers, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/sRIvk7VTECd0qV4GfIMfS/frederick-4.webp")'
          }}
        />
        {/* 65% Opacity Screen */}
        <div className="absolute inset-0 bg-white bg-opacity-65" />
        
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
              About PROOF Insights
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              We are a leading market research firm specializing in actionable insights that drive business growth and strategic decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* PROOF Insights Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">
              PROOF Insights delivers custom research designed to get our clients the intelligence they need and much more:
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white border border-proof-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-proof-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Your Trusted Partner for Strategic Insights</h3>
                <p className="text-proof-gray-600 leading-relaxed">
                  At PROOF Insights, every client receives personalized senior-level attention, delivering impactful insights that drive intelligent decision-making. Our repeat clients know when it's critical to get it right, they choose PROOF.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 bg-white border border-proof-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <PenTool className="h-8 w-8 text-proof-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Tailored Solutions, No Surprises</h3>
                <p className="text-proof-gray-600 leading-relaxed">
                  We're not about black boxes or one-size-fits-all. At PROOF Insights, we customize our approach to meet your unique business objectives. Expect transparency and actionable results, every time.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 bg-white border border-proof-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-proof-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Experience That Speaks Volumes</h3>
                <p className="text-proof-gray-600 leading-relaxed">
                  With over 35 years and 5,000 projects under our belt, PROOF Insights brings deep expertise across diverse industries and demographics. From mainstream to niche, we understand your market because we have been completely immersed in it for a long time.
                </p>
              </div>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border border-proof-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-proof-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Innovation Driven by Your Challenges</h3>
                <p className="text-proof-gray-600 leading-relaxed">
                  We thrive on innovation. At PROOF, we're not just keeping up; we're ahead of the curve, adapting our methods to navigate evolving consumer landscapes and tackle your toughest strategic goals.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 bg-white border border-proof-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Layers className="h-8 w-8 text-proof-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Big Enough to Deliver, Small Enough to Care</h3>
                <p className="text-proof-gray-600 leading-relaxed">
                  Goldilocks would agree—we're just right. At PROOF Insights, you get the resources and expertise of a larger firm with the personalized attention and flexibility of a smaller team.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 bg-white border border-proof-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-proof-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <UserCheck className="h-8 w-8 text-proof-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Your New Best Friends in Market Research</h3>
                <p className="text-proof-gray-600 leading-relaxed">
                  Known for our friendly service, rapid responses, and unwavering reliability, we're here to make your job easier. Think of us as part of your team, committed to your success.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-proof-gray-600 mb-6">
                PROOF Insights is a boutique market research consultancy that combines deep analytical expertise with strategic business acumen. Founded on the principle that research should drive real business outcomes, we partner with companies of all sizes to unlock growth opportunities.
              </p>
              <p className="text-lg text-proof-gray-600 mb-8">
                Our team of seasoned researchers and strategists brings decades of combined experience across industries, methodologies, and market challenges.
              </p>
              <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-3" asChild>
                <Link href="#our-team-senior-leadership">
                  Learn More About Our Team
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <Target className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-proof-gray-900 mb-2">5000+</h3>
                <p className="text-sm text-proof-gray-600">Projects Completed</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="h-12 w-12 text-proof-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-proof-gray-900 mb-2">35+</h3>
                <p className="text-sm text-proof-gray-600">Years Experience</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need PROOF Section */}
      <section id="why-you-need-proof" className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Why You Need PROOF</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              In today's competitive landscape, gut instinct isn't enough. You need data-driven insights to make confident decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Reduce Risk</h3>
              <p className="text-proof-gray-600">
                Make informed decisions backed by solid research, reducing the risk of costly mistakes and failed initiatives.
              </p>
            </Card>
            <Card className="p-8 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Maximize ROI</h3>
              <p className="text-proof-gray-600">
                Optimize your investments by understanding what drives customer behavior and market dynamics.
              </p>
            </Card>
            <Card className="p-8 bg-white">
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Gain Competitive Edge</h3>
              <p className="text-proof-gray-600">
                Stay ahead of competitors with deep market insights and strategic recommendations tailored to your business.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section id="company-timeline" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Company Timeline</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our journey of growth, innovation, and client success over the years.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-proof-blue-600">1989</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-proof-blue-600 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">Company founded as Marketing and Research Resources, M&RR.</h3>
                <p className="text-proof-gray-600">PROOF Insights established with a mission to provide market research with implementation-ready results.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-proof-blue-600">2019</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-proof-blue-600 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">M&RR partners an Investment firm</h3>
                <p className="text-proof-gray-600">Additional resources and expertise added for future growth and expansion.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-proof-blue-600">2023</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-proof-blue-600 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">PROOF Insights Name Change</h3>
                <p className="text-proof-gray-600">PROOF Insights rebranding focuses the company on effective, affordable market research solutions.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-proof-blue-600">2024</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-proof-blue-600 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">PROOF Insights Launches its Healthcare Insights Practice</h3>
                <p className="text-proof-gray-600">The Actionable Research team joins PROOF Insights and adds 25 years of experience in the medical and dental fields.</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-proof-blue-600">2025</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-proof-blue-600 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-2">Began working with you!</h3>
                <p className="text-proof-gray-600">PROOF Insights begins working with you, our newest client.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leadership Section */}
      <section id="our-team-senior-leadership" className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-proof-blue-600 uppercase tracking-wide mb-2 block"></span>
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Our Team</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Michael Lore */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://staging.anupdeveloper.com/wp-content/uploads/2025/04/85-e1745634001701.jpg" 
                  alt="Michael Lore"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm leading-relaxed">As Proof Insights' President, Michael leads a primary market research practice with over 35 years serving some of the largest media, publishing and healthcare companies in the world.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <Link href="/about/team/michael-lore" className="block">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-1 hover:text-proof-blue-600 transition-colors cursor-pointer">Michael Lore</h3>
                </Link>
                <p className="text-proof-blue-600 font-medium">President</p>
              </div>
            </Card>


            {/* Tatiana Dockendorf */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://staging.anupdeveloper.com/wp-content/uploads/2024/09/Tanya-Headshot-BW-2.jpg" 
                  alt="Tatiana Dockendorf"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm leading-relaxed">Tatiana Dockendorf is Proof Insights' analytical architect and brings high performance methods and analytical techniques to extract deeper insights and actionable recommendations.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <Link href="/about/team/tatiana-dockendorf" className="block">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-1 hover:text-proof-blue-600 transition-colors cursor-pointer">Tatiana Dockendorf</h3>
                </Link>
                <p className="text-proof-blue-600 font-medium">Vice President, Analytical Services</p>
              </div>
            </Card>

            {/* Andy Stacey */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/ADf1uGK0dMEbTzkDeqgm7/andy-profile-closeup.png" 
                  alt="Andy Stacey"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm leading-relaxed">Andy Stacey heads up Proof Insights' Consumer Insights team, he has taken part in literally thousands of primary research projects during his tenure.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <Link href="/about/team/andy-stacey" className="block">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-1 hover:text-proof-blue-600 transition-colors cursor-pointer">Andy Stacey</h3>
                </Link>
                <p className="text-proof-blue-600 font-medium">Vice President, Consumer Insights</p>
              </div>
            </Card>

            {/* David Cristofaro */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://staging.anupdeveloper.com/wp-content/uploads/2024/09/AI-gen-Dave-Headshot-2-BW.jpg" 
                  alt="David Cristofaro"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm leading-relaxed">David Cristofaro is the former founder and President of Actionable Research Inc. a primary research firm focused in the healthcare, dental and life science markets with over 25 years of experience.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <Link href="/about/team/david-cristofaro" className="block">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-1 hover:text-proof-blue-600 transition-colors cursor-pointer">David Cristofaro</h3>
                </Link>
                <p className="text-proof-blue-600 font-medium">Vice President, Healthcare Insights</p>
              </div>
            </Card>

            {/* Matt Rodwick */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/YPtSAvot2aulFVL-g_iSn/image.png" 
                  alt="Matt Rodwick"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm leading-relaxed">Matt Rodwick brings over two decades of sales experience to PROOF, offering research solutions to some of the largest publishing, media and healthcare products companies in the world.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <Link href="/about/team/matt-rodwick" className="block">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-1 hover:text-proof-blue-600 transition-colors cursor-pointer">Matt Rodwick</h3>
                </Link>
                <p className="text-proof-blue-600 font-medium">Vice President, Sales</p>
              </div>
            </Card>

            {/* Chase Wrinn */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://staging.anupdeveloper.com/wp-content/uploads/2024/09/chase-wrinn-Headshot-BW-1.jpg" 
                  alt="Chase Wrinn"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm leading-relaxed">Chase Wrinn manages key accounts for Proof as its Director of Consumer Insights. Chase has been serving Proof Insights clients for nearly 15 years.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <Link href="/about/team/chase-wrinn" className="block">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-1 hover:text-proof-blue-600 transition-colors cursor-pointer">Chase Wrinn</h3>
                </Link>
                <p className="text-proof-blue-600 font-medium">Director, Consumer Insights</p>
              </div>
            </Card>

            {/* Stacey Wachter */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://staging.anupdeveloper.com/wp-content/uploads/2024/09/stacey-wachter-Headshot-BW.jpg" 
                  alt="Stacey Wachter"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm leading-relaxed">Stacey Wachter is Proof Insights' key administrator, keeping us all grounded and our clients satisfied.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <Link href="/about/team/stacey-wachter" className="block">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-1 hover:text-proof-blue-600 transition-colors cursor-pointer">Stacey Wachter</h3>
                </Link>
                <p className="text-proof-blue-600 font-medium">Associate Director, Administrative Services</p>
              </div>
            </Card>

            {/* Sherrye Parr */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7693223/pexels-photo-7693223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                  alt="Sherrye Parr"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm leading-relaxed">Sherrye Parr brings precision and clarity to our research documentation, ensuring every spec meets the highest standards of quality and accuracy.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <Link href="/about/team/sherrye-parr" className="block">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-1 hover:text-proof-blue-600 transition-colors cursor-pointer">Sherrye Parr</h3>
                </Link>
                <p className="text-proof-blue-600 font-medium">Spec Writer</p>
              </div>
            </Card>

            {/* Jen Herrick */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/29153940/pexels-photo-29153940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Jen Herrick"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm leading-relaxed">Jen Herrick leads our technical development initiatives, bringing innovative programming solutions to complex research challenges.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <Link href="/about/team/jen-herrick" className="block">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-1 hover:text-proof-blue-600 transition-colors cursor-pointer">Jen Herrick</h3>
                </Link>
                <p className="text-proof-blue-600 font-medium">Senior Programmer</p>
              </div>
            </Card>

            {/* Emily Yeagley */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/UxGshSANfw2DJuK9RgjkX/image-2.jpg" 
                  alt="Emily Yeagley"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm leading-relaxed">Emily Yeagley brings analytical rigor and attention to detail to our research projects, delivering insights that drive strategic decisions.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <Link href="/about/team/emily-yeagley" className="block">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-1 hover:text-proof-blue-600 transition-colors cursor-pointer">Emily Yeagley</h3>
                </Link>
                <p className="text-proof-blue-600 font-medium">Research Analyst</p>
              </div>
            </Card>

            {/* Katie Crain */}
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/7Yu7sRPDRxpp-OBVeRDIu/katie.png" 
                  alt="Katie Crain"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm leading-relaxed">Katie Crain leads our healthcare insights practice, bringing specialized expertise to medical and pharmaceutical research challenges.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <Link href="/about/team/katie-crain" className="block">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-1 hover:text-proof-blue-600 transition-colors cursor-pointer">Katie Crain</h3>
                </Link>
                <p className="text-proof-blue-600 font-medium">Director of Healthcare Insights</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Partner with PROOF Insights?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our research expertise can drive your business forward.
          </p>
          <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
