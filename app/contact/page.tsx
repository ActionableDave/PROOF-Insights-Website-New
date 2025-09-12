import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
              Contact PROOF Insights
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with data-driven insights? Let's start a conversation about your research needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <Phone className="h-12 w-12 text-proof-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Phone</h3>
              <p className="text-proof-gray-600 mb-2">+1 (240) 575-7100</p>
              <p className="text-sm text-proof-gray-500">Monday - Friday, 8 AM - 6 PM EST</p>
            </Card>
            
            <Card className="p-8 text-center">
              <Mail className="h-12 w-12 text-proof-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Email</h3>
              <p className="text-proof-gray-600 mb-2">info@proof-insights.com</p>
              <p className="text-sm text-proof-gray-500">We respond within 24 hours</p>
            </Card>
            
          
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-proof-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-proof-gray-600 max-w-2xl mx-auto">
              Let's discuss your research needs and we'll get back to you with a customized proposal based on our recommendations at no cost or obligation to you.</p>
          </div>
          
          <Card className="p-8 bg-white">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-proof-gray-700">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    className="mt-1"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-proof-gray-700">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    className="mt-1"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-proof-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-1"
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-proof-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="mt-1"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-proof-gray-700">
                    Company *
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    className="mt-1"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="industry" className="text-sm font-medium text-proof-gray-700">
                    Industry
                  </Label>
                  <Input
                    id="industry"
                    type="text"
                    className="mt-1"
                    placeholder="e.g., Healthcare, Technology, Retail"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="researchType" className="text-sm font-medium text-proof-gray-700">
                  Type of Research Needed
                </Label>
                <Input
                  id="researchType"
                  type="text"
                  className="mt-1"
                  placeholder="e.g., Market Research, Product Testing, Brand Study"
                />
              </div>
              
              <div>
                <Label htmlFor="timeline" className="text-sm font-medium text-proof-gray-700">
                  Project Timeline
                </Label>
                <Input
                  id="timeline"
                  type="text"
                  className="mt-1"
                  placeholder="e.g., ASAP, Within 3 months, Q2 2024"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-proof-gray-700">
                  Project Details *
                </Label>
                <Textarea
                  id="message"
                  className="mt-1"
                  rows={5}
                  placeholder="Please describe your research needs, objectives, and any specific questions you'd like us to address..."
                  required
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="newsletter"
                  type="checkbox"
                  className="h-4 w-4 text-proof-blue-600 focus:ring-proof-blue-500 border-proof-gray-300 rounded"
                />
                <Label htmlFor="newsletter" className="ml-2 text-sm text-proof-gray-700">
                  I'd like to receive updates about market research insights and industry trends
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-proof-blue-600 hover:bg-proof-blue-700 text-white py-3 text-lg font-semibold"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Prefer a Direct Conversation?</h2>
            <p className="text-xl text-proof-gray-600 max-w-2xl mx-auto">
              Choose the option that works best for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <Clock className="h-12 w-12 text-proof-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Schedule a Call</h3>
              <p className="text-proof-gray-600 mb-6">Book a 30-minute consultation to discuss your research needs</p>
              <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white w-full">
                Book Now
              </Button>
            </Card>
            
            <Card className="p-8 text-center">
              <Mail className="h-12 w-12 text-proof-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Email Us</h3>
              <p className="text-proof-gray-600 mb-6">Send us a detailed message about your project requirements</p>
              <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white w-full">
                Send Email
              </Button>
            </Card>
            
            <Card className="p-8 text-center">
              <Phone className="h-12 w-12 text-proof-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">Call Directly</h3>
              <p className="text-proof-gray-600 mb-6">Speak with our team immediately about urgent research needs</p>
              <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white w-full">
                Call Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-proof-gray-600">
              Quick answers to common questions about working with PROOF Insights.
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">What's the typical timeline for a research project?</h3>
              <p className="text-proof-gray-600">Most projects range from 2-8 weeks depending on scope and methodology. We'll provide a detailed timeline during our initial consultation.</p>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Do you work with companies of all sizes?</h3>
              <p className="text-proof-gray-600">Yes! We work with startups, mid-size companies, and Fortune 500 enterprises. Our solutions are scalable to meet any budget and scope requirements.</p>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Can you help with international research?</h3>
              <p className="text-proof-gray-600">Absolutely. We have partnerships worldwide and can conduct research across multiple countries and cultures with localized insights.</p>
            </Card>
            
            <Card className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">What industries do you specialize in?</h3>
              <p className="text-proof-gray-600">We have deep expertise across 12+ industries including healthcare, technology, retail, financial services, and more. View our full industry capabilities.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}