import Image from 'next/image'
import { ArrowLeft, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function SherryeParrPage() {
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
                    src="https://images.pexels.com/photos/7693223/pexels-photo-7693223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Sherrye Parr"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-proof-gray-900 mb-2">Sherrye Parr</h1>
                <p className="text-xl text-proof-blue-600 font-medium mb-6">Spec Writer</p>
                
                <div className="prose prose-lg max-w-none text-proof-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    Sherrye Parr brings precision and clarity to our research documentation, ensuring every spec meets the highest standards of quality and accuracy.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    With extensive experience in technical writing and documentation, Sherrye specializes in translating complex research methodologies and findings into clear, actionable specifications. Her meticulous attention to detail and deep understanding of research processes ensures that all project documentation is comprehensive, accurate, and accessible to stakeholders at every level.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Sherrye's expertise extends beyond traditional technical writing to encompass research protocol development, survey design documentation, and analytical framework specifications. Her ability to work closely with research teams while maintaining the highest standards of documentation quality has made her an invaluable asset to PROOF Insights.
                  </p>

                  <p className="leading-relaxed mb-6">
                    As our Spec Writer, Sherrye collaborates with researchers, analysts, and project managers to ensure that all research specifications are clearly defined, properly documented, and effectively communicated. Her work forms the foundation that enables our research teams to deliver consistent, high-quality results for our clients.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Sherrye's commitment to excellence in documentation and her deep understanding of market research principles make her a key contributor to the success of our research projects. Her specifications serve as the roadmap that guides our teams from initial concept through final deliverable.
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
                      Contact Sherrye
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