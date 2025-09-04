import Image from 'next/image'
import { ArrowLeft, Mail, Phone, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function MichaelLorePage() {
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
                    src="https://staging.anupdeveloper.com/wp-content/uploads/2025/04/85-e1745634001701.jpg"
                    alt="Michael Lore"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-proof-gray-900 mb-2">Michael Lore</h1>
                <p className="text-xl text-proof-blue-600 font-medium mb-6">President</p>
                
                <div className="prose prose-lg max-w-none text-proof-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    As Proof Insights' President, Michael leads a primary market research practice with over 35 years of experience serving some of the largest media, publishing, and healthcare companies in the world.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    Michael is the President of Proof Insights, a market research firm known for delivering data-backed insights that drive strategic growth. With 20+ years of leadership experience spanning the U.S. Navy SEALs and corporate strategy at KPMG, he brings a rare blend of operational rigor and strategic foresight. Michael has advised Fortune 500s and global OEMs across manufacturing, aerospace, and emerging tech, consistently helping clients identify growth opportunities, navigate M&A, and build resilient strategies. His leadership continues to position Proof Insights as a trusted partner in market intelligence and long-term value creation.
                  </p>

                  <p className="leading-relaxed mb-6">
                    <span className="text-proof-blue-600 font-medium">Q: What's your role and what do you focus on day-to-day?</span><br />
                    I lead Proof Insights and focus on client strategy, growth strategy, and supporting a high-performing team.
                  </p>

                  <p className="leading-relaxed mb-6">
                    <span className="text-proof-blue-600 font-medium">Q: What do you enjoy most about your work?</span><br />
                    The constant innovation and working with a smart, dedicated, and driven team
                  </p>

                  <p className="leading-relaxed mb-6">
                    <span className="text-proof-blue-600 font-medium">Q: How did you get started in research and analytics?</span><br />
                    I got into it through strategy and due diligence work at KPMG, where data and insights were critical to every recommendation.
                  </p>
                  <p className="leading-relaxed mb-6">
                    <span className="text-proof-blue-600 font-medium">Q: What’s something people might be surprised to learn about you?</span><br />
                    I'm a lifelong fantasy and sci-fi fan.
                  </p>
                  <p className="leading-relaxed mb-6">
                    <span className="text-proof-blue-600 font-medium">Q: What does your ideal vacation look like?</span><br />
                    Exploring Southern Europe or unplugging in a remote mountain cabin.
                  </p>
                  <p className="leading-relaxed mb-6">
                    <span className="text-proof-blue-600 font-medium">Q: One thing you can’t live without?</span><br />
                    Learning and meaningful conversations that challenge my thinking.</p>

                </div>
              </div>

              {/* Contact Section */}
              <Card className="bg-proof-blue-50 border-proof-blue-200">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Get in Touch</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link href="mailto:Michael Lore@proof-insights.com">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Contact Mike
                      </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/michaeljlore/" target="_blank" rel="noopener noreferrer">
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