import Image from 'next/image'
import { ArrowLeft, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function EmilyYeagleyPage() {
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
                    src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/UxGshSANfw2DJuK9RgjkX/image-2.jpg"
                    alt="Emily Yeagley"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-proof-gray-900 mb-2">Emily Yeagley</h1>
                <p className="text-xl text-proof-blue-600 font-medium mb-6">Research Analyst</p>
                
                <div className="prose prose-lg max-w-none text-proof-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    Emily Yeagley has been a Research Analyst at PROOF Insights for 7 years. With a strong foundation in report design and quantitative analysis, Emily specializes in transforming complex data sets into clear, actionable insights, ensuring that our clients receive comprehensive understanding of market dynamics and consumer behavior patterns.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    As a Research Analyst, Emily collaborates closely with senior researchers and project managers to ensure that all analytical work meets the highest standards of accuracy and relevance. Beyond her analytical contributions, Emily plays a key role in client presentations and report development, translating complex statistical findings into accessible business recommendations that drive strategic action. Her ability to synthesize large volumes of data into meaningful narratives has made her an invaluable member of our research team.
                  </p>

                  <p className="leading-relaxed mb-6">
                    In addition, Emily's commitment to continuous learning and professional development keeps her at the forefront of analytical best practices and what's new in research technologies. Her fresh perspective and innovative thinking contribute significantly to the ongoing evolution of our research capabilities.
                  </p>

                  <p className="leading-relaxed mb-6">
                    In her free time, Emily enjoys attending live music shows, hiking and camping, reading, and hanging out with her 2 cats.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
             <Card className="bg-proof-blue-50 border-proof-blue-200">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Get in Touch</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link href="mailto:Emily.Yeagley@proof-insights.com">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Contact Emily
                      </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/emily-yeagley-293a5526a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BL7nEqeQoR8GLbS8VsuRDMA%3D%3D">
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