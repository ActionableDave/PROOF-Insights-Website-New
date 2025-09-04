import Image from 'next/image'
import { ArrowLeft, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function JenHerrickPage() {
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
                    src="https://images.pexels.com/photos/29153940/pexels-photo-29153940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Jen Herrick"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-proof-gray-900 mb-2">Jen Herrick</h1>
                <p className="text-xl text-proof-blue-600 font-medium mb-6">Senior Programmer</p>
                
                <div className="prose prose-lg max-w-none text-proof-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    Jen Herrick leads our technical development initiatives, bringing innovative programming solutions to complex research challenges.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    With deep expertise in software development and data systems architecture, Jen specializes in creating robust, scalable solutions that power our research operations. Her technical leadership ensures that PROOF Insights maintains cutting-edge capabilities in data collection, processing, and analysis through innovative programming approaches.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Jen's programming expertise spans multiple technologies and platforms, enabling her to design and implement comprehensive solutions for complex research requirements. From survey programming and data visualization tools to advanced analytical platforms, her work provides the technological foundation that supports our research excellence.
                  </p>

                  <p className="leading-relaxed mb-6">
                    As Senior Programmer, Jen collaborates closely with research teams to understand their technical needs and translate them into efficient, reliable software solutions. Her ability to bridge the gap between complex research methodologies and practical programming implementations has been instrumental in advancing our analytical capabilities.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Jen's commitment to code quality, system reliability, and user experience ensures that our technical infrastructure not only meets current needs but is positioned to adapt and scale with evolving research demands. Her leadership in technology development keeps PROOF Insights at the forefront of research innovation.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Beyond her technical contributions, Jen mentors junior developers and promotes best practices in software development throughout the organization. Her technical expertise and collaborative approach make her a valued leader in our technology initiatives.
                  </p>

                  
                </div>
              </div>

              {/* Contact Section */}
              <Card className="bg-proof-blue-50 border-proof-blue-200">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Get in Touch</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact Jen
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                    </Button>
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