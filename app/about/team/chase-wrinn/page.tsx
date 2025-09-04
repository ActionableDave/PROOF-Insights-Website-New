import Image from 'next/image'
import { ArrowLeft, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function ChaseWrinnPage() {
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
                    src="https://staging.anupdeveloper.com/wp-content/uploads/2024/09/chase-wrinn-Headshot-BW-1.jpg"
                    alt="Chase Wrinn"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-proof-gray-900 mb-2">Chase Wrinn</h1>
                <p className="text-xl text-proof-blue-600 font-medium mb-6">Director, Consumer Insights</p>
                
                <div className="prose prose-lg max-w-none text-proof-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    Chase Wrinn manages key accounts for Proof as its Director of Consumer Insights. Chase has been serving Proof Insights clients for nearly 15 years.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    Chase is a Director of Consumer Insights at PROOF Insights. Since starting as an intern at PROOF a few weeks after college graduation, Chase has continued to develop and hone his skills as an insights professional. He has a passion for delivering unmatched customer service and sees himself as an extension of his clients' research teams. Chase has client relationships that span over a decade and he deeply treasures the trust that they put in him and the rest of the PROOF team to help address their business questions.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Chase brings 15+ years of experience to every project and has worked across many different verticals including publishing & media, apparel, CPG, food & restaurants, television, technology, and non-profits. He looks forward to finding personalized and effective solutions to your unique business questions.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Chase graduated Summa Cum Laude from Salisbury University with a BA in Psychology. While presenting his research at the Eastern Psychological Association conference in Brooklyn, he once had the opportunity to hold the door open for Dr. Philip Zimbardo, and it was probably the most impactful thing he did in his psychology career. 
                  </p>

                  <p className="leading-relaxed mb-6">
                    Outside of work and spending time with his wife and two boys, his interests include bouldering, paintball, frisbee golf, and of course dining at all the wonderful restaurants in Frederick, MD. Let him know when you're in town and he can show you some of Frederick's best offerings.
                  </p>

                  
                </div>
              </div>

              {/* Contact Section */}
              <Card className="bg-proof-blue-50 border-proof-blue-200">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Get in Touch</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link href="mailto:chase.wrinn@proof-insights.com">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Contact Chase
                      </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/chase-wrinn-7b487b162/" target="_blank" rel="noopener noreferrer">
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