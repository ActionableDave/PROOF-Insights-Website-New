import Image from 'next/image'
import { ArrowLeft, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function StaceyWachterPage() {
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
                    src="https://staging.anupdeveloper.com/wp-content/uploads/2024/09/stacey-wachter-Headshot-BW.jpg"
                    alt="Stacey Wachter"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-proof-gray-900 mb-2">Stacey Wachter</h1>
                <p className="text-xl text-proof-blue-600 font-medium mb-6">Associate Director, Administrative Services</p>
                
                <div className="prose prose-lg max-w-none text-proof-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    Stacey Wachter serves as Proof Insights' key administrator, guiding both the numbers and the culture that shape the company's success. 
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    As a finance leader, Stacey oversees all aspects of accounting and financial operations; from day-to-day processes to strategic reporting - ensuring every dollar is accounted for and every report is accurate. She also manages vendor relationships, supports investment strategies, and keeps a close eye on company profitability. Her ability to juggle multiple projects while maintaining precision and efficiency makes her an invaluable asset to the team. 
                  </p>

                  <p className="leading-relaxed mb-6">
                    In her human resources role, Stacey champions a positive and compliant workplace. She leads recruitment and onboarding, administers employee benefits, and ensures regulatory alignment across all HR practices. Her dedication to employee well-being and transparent communication helps foster a people-centered, supportive environment.
                  </p>

                  <p className="leading-relaxed mb-6">
                    Stacey's focus on operational excellence and her proactive problem-solving have contributed to the success of countless research initiatives. Her collaborative spirit and steady leadership play a vital role in building the inclusive, high-performing culture at Proof Insights. 
                  </p>

                  <p className="leading-relaxed mb-6">
                    Outside of work, Stacey enjoys time with family and friends, especially being a proud grandma. She loves relaxing at the beach, diving into a good book, and discovering new and interesting places to visit.
                  </p>

                
                </div>
              </div>

              {/* Contact Section */}
              <Card className="bg-proof-blue-50 border-proof-blue-200">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Get in Touch</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link href="mailto:stacey.wachter@proof-insights.com">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Contact Stacey
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com/in/stacey-wachter-689539233" target="_blank" rel="noopener noreferrer">
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