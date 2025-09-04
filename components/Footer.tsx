import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Facebook, X } from 'lucide-react'

export default function Footer() {
  console.log("Footer component rendered")

  const footerNavigation = [
    {
      title: 'Solutions',
      links: [
        { label: 'Strategy', href: '/solutions/strategy' },
        { label: 'Innovation & Growth', href: '/solutions/innovation-growth' },
        { label: 'Marketing & Messaging', href: '/solutions/marketing-messaging' },
        { label: 'Monitoring & Improving', href: '/solutions/monitoring-improving' },
        { label: 'CRM Databases', href: '/solutions/crm-databases' },
        { label: 'Private Equity', href: '/solutions/private-equity' },
      ]
    },
    {
      title: 'Methodologies',
      links: [
        { label: 'Features & Price Optimization', href: '/methodologies/features-concepts-price-optimization' },
        { label: 'Understanding Audience', href: '/methodologies/understanding-audience' },
        { label: 'Competitive Landscape', href: '/methodologies/competitive-landscape' },
        { label: 'Price Optimization', href: '/methodologies/price-optimization' },
      ]
    },
    {
      title: 'Industries',
      links: [
        { label: 'Digital Media & Publications', href: '/industries-clients/digital-media-publications' },
        { label: 'Healthcare & Surgical', href: '/industries-clients/healthcare-surgical' },
        { label: 'Life Sciences', href: '/industries-clients/life-sciences' },
        { label: 'SaaS & Technology', href: '/industries-clients/saas-technology' },
        { label: 'Beauty & Cosmetics', href: '/industries-clients/beauty-cosmetics' },
        { label: 'View All Industries', href: '/industries-clients' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/resources/blog' },
        { label: 'Case Studies', href: '/resources/case-studies' },
        { label: 'Tools', href: '/resources/tools' },
        { label: 'About PROOF', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ]
    }
  ]

  return (
    <footer className="bg-proof-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info & CTA - First Column */}
          <div>
            <div className="mb-6">
              <img 
                src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/11OEk5VfLpHNwtXDpBDcT/proof-insights-logo.png" 
                alt="PROOF Insights" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-proof-gray-300 mb-6 leading-relaxed">
              Clarify your future through evidence-based market research, brand strategy, and advanced analytics.
            </p>
            
            {/* Call to Action */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Ready to Get Started?</h3>
              <div className="space-y-3">
                <Button className="w-full sm:w-auto bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-6 py-3 font-semibold" asChild>
                  <Link href="/contact">
                    Schedule a Free Consultation
                  </Link>
                </Button>
                <div className="text-sm text-proof-gray-400">
                  or call us at <a href="tel:+15551234567" className="text-proof-blue-400 hover:text-proof-blue-300">(240) 575-7100</a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-proof-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-proof-blue-400" />
                <a href="mailto:info@proofinsights.com" className="hover:text-proof-blue-300">
                  info@proofinsights.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-proof-blue-400" />
                <a href="tel:+12405757100" className="hover:text-proof-blue-300">
                  (240) 575-7100
                </a>
              </div>
            </div>
          </div>

          {/* Solutions & Methodologies - Second Column */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/solutions/strategy"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Strategy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/solutions/innovation-growth"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Innovation & Growth
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/solutions/marketing-messaging"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Marketing & Messaging
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/solutions/monitoring-improving"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Monitoring & Improving
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/solutions/crm-databases"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    CRM Databases
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/solutions/private-equity"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Private Equity
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Methodologies</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/methodologies/features-concepts-price-optimization"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Features & Price Optimization
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/methodologies/understanding-audience"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Understanding Audience
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/methodologies/competitive-landscape"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Competitive Landscape
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/methodologies/price-optimization"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Price Optimization
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Industries & Resources - Third Column */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Industries</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/industries-clients/digital-media-publications"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Digital Media & Publications
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/industries-clients/healthcare-surgical"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Healthcare & Surgical
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/industries-clients/life-sciences"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Life Sciences
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/industries-clients/saas-technology"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    SaaS & Technology
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/industries-clients/beauty-cosmetics"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Beauty & Cosmetics
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/industries-clients"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    View All Industries
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/resources/blog"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/resources/case-studies"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/resources/tools"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Tools
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    About PROOF
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact"
                    className="text-proof-gray-400 hover:text-proof-blue-300 text-sm transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-proof-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-sm text-proof-gray-400 mb-4 md:mb-0">
              © 2024 PROOF Insights. All rights reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/proof-insights1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-proof-gray-400 hover:text-proof-blue-300 transition-colors duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/Proof_Insights" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-proof-gray-400 hover:text-proof-blue-300 transition-colors duration-200"
                aria-label="Follow us on X"
              >
                <X className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/proofinsights" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-proof-gray-400 hover:text-proof-blue-300 transition-colors duration-200"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/proofinsights" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-proof-gray-400 hover:text-proof-blue-300 transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-proof-gray-400 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-proof-blue-300 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-proof-blue-300 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}