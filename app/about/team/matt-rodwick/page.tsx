import Image from 'next/image'
import { ArrowLeft, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function MattRodwickPage() {
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
                    src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/YPtSAvot2aulFVL-g_iSn/image.png"
                    alt="Matt Rodwick"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-proof-gray-900 mb-2">Matt Rodwick</h1>
                <p className="text-xl text-proof-blue-600 font-medium mb-6">Senior Consultant, Food and Beverage</p>
                
                <div className="prose prose-lg max-w-none text-proof-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    Matt Rodwick brings over two decades of sales experience to PROOF, offering research solutions to some of the largest publishing, media, and healthcare products companies in the world.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    With an exceptional track record in building and maintaining strategic client relationships, Matt has been instrumental in expanding Proof Insights' presence across multiple industries. His deep understanding of client needs, combined with his ability to translate complex research capabilities into tangible business value, has made him a trusted advisor to numerous Fortune 500 companies.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Matt's approach to sales is consultative and relationship-focused, ensuring that each client receives customized research solutions that address their specific business challenges. His expertise spans across various sectors, with particular strength in media, publishing, and healthcare industries where he has developed extensive networks and deep market knowledge.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Throughout his career, Matt has been recognized for his ability to identify emerging market opportunities and develop innovative research approaches that deliver competitive advantages for clients. His collaborative working style and commitment to client success have resulted in long-term partnerships and significant business growth for the organization.
                  </p>

                  <p className="leading-relaxed mb-6">
                    As Senior Consultant for Food and Beverage, Matt leads the business development efforts in these vertical markets for Proof Insights, working closely with the research and analytical teams to ensure seamless delivery of high-quality research solutions. His leadership has been instrumental in growing the company's reputation as a premier provider of strategic market intelligence.
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
                      Contact Matt
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