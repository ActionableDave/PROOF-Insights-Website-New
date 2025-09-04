import Link from 'next/link'
import { ArrowLeft, Mail, Phone, LinkedinIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TaylorGrantPage() {
  console.log("Taylor Grant profile page rendered")

  return (
    <div className="min-h-screen bg-gradient-to-br from-proof-gray-50 to-white">
      {/* Navigation */}
      <div className="bg-white border-b border-proof-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/about" 
            className="inline-flex items-center text-proof-blue-600 hover:text-proof-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Team
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/3 bg-gradient-to-br from-proof-blue-50 to-proof-blue-100 flex items-center justify-center p-8">
              <div className="text-center">
                <img 
                  src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/r-1yOUY7S2VetNLK39Y-i/image.png"
                  alt="Taylor Grant" 
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg"
                />
                <div className="flex justify-center space-x-4">
                  <Button size="sm" variant="outline" className="rounded-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full">
                    <LinkedinIcon className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-proof-gray-900 mb-2">Taylor Grant</h1>
                <p className="text-xl text-proof-blue-600 font-medium mb-4">Executive Chairman</p>
                <div className="w-20 h-1 bg-gradient-to-r from-proof-blue-600 to-proof-blue-400 rounded-full"></div>
              </div>

              {/* Biography */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-proof-gray-800 mb-4">Biography</h2>
                  <p className="text-proof-gray-700 leading-relaxed mb-4">
                    Taylor Grant serves as Executive Chairman of PROOF Insights, bringing over three decades of leadership experience in market research and strategic consulting. Under his guidance, PROOF has evolved into a trusted partner for Fortune 500 companies seeking data-driven insights to fuel their growth strategies.
                  </p>
                  <p className="text-proof-gray-700 leading-relaxed mb-4">
                    With a passion for transforming complex data into actionable business intelligence, Taylor has pioneered innovative research methodologies that have redefined industry standards. His strategic vision has positioned PROOF at the forefront of advanced analytics and consumer insights.
                  </p>
                  <p className="text-proof-gray-700 leading-relaxed">
                    Taylor's commitment to excellence and client success has earned him recognition as a thought leader in the market research industry. He regularly speaks at industry conferences and contributes to leading publications on the future of data analytics and consumer behavior.
                  </p>
                </div>

                {/* Expertise */}
                <div>
                  <h2 className="text-2xl font-semibold text-proof-gray-800 mb-4">Areas of Expertise</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                        <span className="text-proof-gray-700">Strategic Planning & Vision</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                        <span className="text-proof-gray-700">Market Research Innovation</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                        <span className="text-proof-gray-700">Client Relationship Management</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                        <span className="text-proof-gray-700">Business Development</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                        <span className="text-proof-gray-700">Industry Thought Leadership</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-proof-blue-600 rounded-full mr-3"></div>
                        <span className="text-proof-gray-700">Organizational Development</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education & Credentials */}
                <div>
                  <h2 className="text-2xl font-semibold text-proof-gray-800 mb-4">Education & Credentials</h2>
                  <div className="space-y-3">
                    <div className="border-l-4 border-proof-blue-600 pl-4">
                      <h3 className="font-semibold text-proof-gray-800">Master of Business Administration</h3>
                      <p className="text-proof-gray-600">Northwestern Kellogg School of Management</p>
                    </div>
                    <div className="border-l-4 border-proof-blue-600 pl-4">
                      <h3 className="font-semibold text-proof-gray-800">Bachelor of Science in Marketing</h3>
                      <p className="text-proof-gray-600">University of Pennsylvania, Wharton School</p>
                    </div>
                    <div className="border-l-4 border-proof-blue-600 pl-4">
                      <h3 className="font-semibold text-proof-gray-800">Certifications</h3>
                      <p className="text-proof-gray-600">Market Research Society, Advanced Analytics Institute</p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-proof-gray-50 rounded-lg p-6 mt-8">
                  <h2 className="text-2xl font-semibold text-proof-gray-800 mb-4">Contact Information</h2>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-proof-blue-600 mr-3" />
                      <span className="text-proof-gray-700">taylor.grant@proof-insights.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-proof-blue-600 mr-3" />
                      <span className="text-proof-gray-700">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}