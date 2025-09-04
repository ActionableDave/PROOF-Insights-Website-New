import Image from 'next/image'
import { ArrowLeft, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function TatianaDockendorfPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-proof-gray-50 to-white">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/about" className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Team
        </Link>
      </div>

      {/* Profile Hero */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-1">
              <Card className="overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="https://staging.anupdeveloper.com/wp-content/uploads/2024/09/Tanya-Headshot-BW-2.jpg"
                    alt="Tatiana Dockendorf"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-proof-gray-900 mb-2">Tatiana Dockendorf</h1>
                <p className="text-xl text-proof-blue-600 font-medium mb-6">Vice President, Analytical Services</p>
                
                <div className="prose prose-lg max-w-none text-proof-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    Tatiana Dockendorf is Proof Insights' analytical architect and brings high-performance methods and analytical techniques to extract deeper insights and actionable recommendations.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    <span className="text-proof-blue-600 font-medium">Q: What's your role and what do you focus on day-to-day?</span><br />
                    I focus on quantitative research and analytics – brainstorming and implementing methodologies, analyzing data, and translating complex findings into prescriptive insights. I also mentor team members and collaborate across departments to make sure our work drives real value for clients.
                  </p>

                  <p className="leading-relaxed mb-6">
                    <span className="text-proof-blue-600 font-medium">Q: What do you enjoy most about your work?</span><br />
                    I love the problem-solving aspect – taking a business question that may be somewhat ambiguous and bringing clarity to it in the form of data-driven strategy. It's really rewarding to see how our research solutions help organizations make smarter decisions.
                  </p>

                  <p className="leading-relaxed mb-6">
                    <span className="text-proof-blue-600 font-medium">Q: How did you get started in research and analytics?</span><br />
                    I’ve always been drawn to numbers and patterns. With a degree in Operations Research and Economics, market research was an accidental but excellent fit, and I’ve spent most of my career in primary research, growing into leadership roles and continuing to learn along the way.
                  </p>
                  <p className="leading-relaxed mb-6">
                    <span className="text-proof-blue-600 font-medium">Q: What’s something people might be surprised to learn about you?</span><br />
                    Classical music has always been a part of my life – playing piano is my therapy.
                  </p>
                  <p className="leading-relaxed mb-6">
                    <span className="text-proof-blue-600 font-medium">Q: What does your ideal vacation look like?</span><br />
                    Nonstop sightseeing in a new place! I love traveling to unfamiliar countries, immersing myself in the culture, and learning everything I can – history, food, local customs. The more active the trip, the better.
                  </p>
                  <p className="leading-relaxed mb-6">
                    <span className="text-proof-blue-600 font-medium">Q: One thing you can’t live without?</span><br />
                    Curiosity. Whether it’s solving a research puzzle, exploring a new culture, or automating a tedious task just for fun – I’m always chasing the next thing to learn.</p>

                </div>
              </div>

              {/* Contact Section */}
              <Card className="bg-proof-blue-50 border-proof-blue-200">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Get in Touch</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link href="mailto:Tanya.Dockendorf@proof-insights.com">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Contact Tanya
                      </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/tatiana-dockendorf-ab936421?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwBBkb3C7RW2SH5UKq84T0Q%3D%3D" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}