import Image from 'next/image'
import { ArrowLeft, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function KatieCrainPage() {
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
                    src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/7Yu7sRPDRxpp-OBVeRDIu/katie.png"
                    alt="Katie Crain"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-proof-gray-900 mb-2">Katie Crain</h1>
                <p className="text-xl text-proof-blue-600 font-medium mb-6">Director of Healthcare Insights</p>
                
                <div className="prose prose-lg max-w-none text-proof-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    Katie Crain leads our healthcare insights practice, bringing specialized expertise to medical and pharmaceutical research challenges.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    With extensive experience in healthcare market research, Katie specializes in understanding the complex dynamics of medical markets, physician behavior, and patient journey mapping. Her deep knowledge of healthcare systems, regulatory environments, and clinical practices enables her to design and execute research that addresses the unique challenges facing healthcare organizations.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Katie's expertise spans across multiple healthcare sectors, including pharmaceuticals, medical devices, health technology, and healthcare services. Her ability to navigate the intricate relationships between patients, providers, payers, and pharmaceutical companies has made her a trusted advisor to leading healthcare organizations.
                  </p>

                  <p className="leading-relaxed mb-6">
                    As Director of Healthcare Insights, Katie oversees the development and execution of comprehensive research programs that deliver strategic value to healthcare clients. Her leadership in this specialized practice has established PROOF Insights as a recognized expert in healthcare market research, particularly in understanding physician prescribing behavior and patient treatment pathways.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Katie's approach to healthcare research combines traditional market research methodologies with specialized healthcare research techniques, including physician advisory boards, patient ethnographies, and treatment pathway analysis. Her work has informed product launches, market access strategies, and clinical development programs for major pharmaceutical and medical device companies.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Beyond her research expertise, Katie is known for her ability to translate complex healthcare data into actionable business strategies that drive market success. Her insights have helped healthcare organizations understand evolving treatment paradigms, identify unmet medical needs, and develop effective go-to-market strategies.
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
                      Contact Katie
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