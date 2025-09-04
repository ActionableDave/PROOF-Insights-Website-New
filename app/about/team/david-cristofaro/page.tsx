import Image from 'next/image'
import { ArrowLeft, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function DavidCristofaroPage() {
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
                    src="https://staging.anupdeveloper.com/wp-content/uploads/2024/09/AI-gen-Dave-Headshot-2-BW.jpg"
                    alt="David Cristofaro"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-proof-gray-900 mb-2">David Cristofaro</h1>
                <p className="text-xl text-proof-blue-600 font-medium mb-6">Vice President, Healthcare Insights</p>
                
                <div className="prose prose-lg max-w-none text-proof-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    David Cristofaro is the former founder and President of Actionable Research Inc., a primary research firm focused in the healthcare, dental, and life science markets with over 25 years of experience.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    David brings extensive expertise in healthcare market research, having built and led Actionable Research from 2002 to 2024. During this tenure, David was personally involved in over 450 primary market research projects for many high performing healthcare and dental brands, including JnJ Ethicon, Medtronic, Align Technology, A-dec, Nvidia, Intel, Pfizer, Bio-Rad, Thermo Fisher Scientific and many others.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Throughout his career, David has been at the forefront of healthcare research innovation, from both a qualitative and quantitative perspective. His expertise encompasses clinical utility and market research, physician and patient insights, regulatory environment analysis, and healthcare technology adoption patterns. He was an early adopter of ACBC and other methodologies which integrate predictive algorithms to drive more customized questionnaires, leading to more accurate results. 
                  </p>

                  <p className="leading-relaxed mb-6">
                    David also has significant experience with marketing claims validation through primary and secondary research, enabling his research clients to ensure their marketing claims are backed up by statistically significant research results. 
                  </p>

                  <p className="leading-relaxed mb-6">
                    As Vice President of Healthcare Insights at Proof Insights, David leverages his extensive network and deep industry knowledge to deliver specialized research solutions that address the most pressing challenges facing healthcare organizations today.
                  </p>

                  
                </div>
              </div>

              {/* Contact Section */}
              <Card className="bg-proof-blue-50 border-proof-blue-200">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Get in Touch</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link href="mailto:davidc@proof-insights.com">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Contact Dave
                      </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/davidcristofaro" target="_blank" rel="noopener noreferrer">
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