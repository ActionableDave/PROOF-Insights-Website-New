import Image from 'next/image'
import { ArrowLeft, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function AndyStaceyPage() {
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
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                  <img 
                    src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/pmlpmijFqHAUn3igX1b0B/andy-profile-upscaled-newbg.png"
                    alt="Andy Stacey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-proof-gray-900 mb-2">Andy Stacey</h1>
                <p className="text-xl text-proof-blue-600 font-medium mb-6">Vice President, Consumer Insights</p>
                
                <div className="prose prose-lg max-w-none text-proof-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    Andy Stacey heads up Proof Insights' Consumer Insights team and has taken part in literally thousands of primary research projects during his tenure.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    Andy Stacey is the Vice President of Consumer Insights at PROOF Insights, where he's been turning data into decisions for over 30 years. He leads the consumer insights team and works directly with clients to craft research approaches that make sense, both statistically and strategically. Whether it's media and publishing, apparel, retail, food & beverage, beauty, or consumer electronics, Andy's been there, asked the questions, and found the answers.
                  </p>

                  <p className="leading-relaxed mb-6">
                    He's especially known for helping clients make sense of complex methodologies like segmentations, conjoint analyses, and Van Westendorp among others. Andy's goal is always the same: deliver insights that are easy to understand and even easier to act on.  
                  </p>

                  <p className="leading-relaxed mb-6">
                    When he's not translating data into strategy, Andy enjoys playing golf, live music, reading, and navigating life with two teenagers, which might be the most advanced problem-solving of all.
                  </p>

                 </div>
              </div>

              {/* Contact Section */}
              <Card className="bg-proof-blue-50 border-proof-blue-200">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Get in Touch</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link href="mailto:Andy.Stacey@proof-insights.com">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Contact Andy
                      </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/andy-s-7b531166?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEEifoxsZTqKJ7vmEBTACSw%3D%3D">
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