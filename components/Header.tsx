
"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState, useRef } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  console.log("Header component rendered, menu state:", isMenuOpen)

  const navigationStructure = [
    {
      label: 'About PROOF',
      href: '/about',
    },
    {
      label: 'Solutions',
      href: '/solutions',
      subItems: [
        { 
          label: 'Strategy (Getting into the Market)', 
          href: '/solutions/strategy',
          subItems: [
            { label: 'Market Discovery Opportunity', href: '/solutions/strategy/market-discovery-opportunity' },
            { label: 'Market Segmentation', href: '/solutions/strategy/market-segmentation' },
            { label: 'Competitive Landscape', href: '/solutions/strategy/competitive-landscape' },
            { label: 'Brand strategy', href: '/solutions/strategy/brand-strategy' },
          ]
        },
        { 
          label: 'Innovation and Growth', 
          href: '/solutions/innovation-growth',
          subItems: [
            { label: 'Concept testing', href: '/solutions/innovation-growth/concept-testing' },
            { label: 'Package testing', href: '/solutions/innovation-growth/package-testing' },
            { label: 'Name testing', href: '/solutions/innovation-growth/name-testing' },
            { label: 'Product testing', href: '/solutions/innovation-growth/product-testing' },
            { label: 'Feature / Benefit testing', href: '/solutions/innovation-growth/feature-benefit-testing' },
            { label: 'Pricing', href: '/solutions/innovation-growth/pricing' },
          ]
        },
        { 
          label: 'Marketing and Messaging', 
          href: '/solutions/marketing-messaging',
          subItems: [
            { label: 'Messaging & Positioning', href: '/solutions/marketing-messaging/messaging-positioning' },
            { label: 'Ad Optimization', href: '/solutions/marketing-messaging/ad-optimization' },
            { label: 'Ad Effectiveness', href: '/solutions/marketing-messaging/ad-effectiveness' },
          ]
        },
        { 
          label: 'Monitoring / Improving', 
          href: '/solutions/monitoring-improving',
          subItems: [
            { label: 'Brand Health Tracking', href: '/solutions/monitoring-improving/brand-health-tracking' },
            { label: 'Customer Experience & Satisfaction', href: '/solutions/monitoring-improving/customer-experience-satisfaction' },
            { label: 'Awareness & Usage', href: '/solutions/monitoring-improving/awareness-usage' },
            { label: 'Ad Claim Validation', href: '/solutions/monitoring-improving/ad-claim-validation' },
          ]
        },
        { 
          label: 'CRM Databases', 
          href: '/solutions/crm-databases',
          subItems: [
            { label: 'Retail Impact Factor', href: '/solutions/crm-databases/retail-impact-factor' },
            { label: 'RFM Analysis', href: '/solutions/crm-databases/rfm-analysis' },
            { label: 'Predictive Modeling', href: '/solutions/crm-databases/predictive-modeling' },
          ]
        },
        { 
          label: 'Private Equity', 
          href: '/solutions/private-equity',
          subItems: [
            { label: 'Due Diligence', href: '/solutions/private-equity#due-diligence' },
            { label: 'Post-deal alignment', href: '/solutions/private-equity#post-deal-alignment' },
          ]
        },
      ]
    },
    {
      label: 'Methodologies',
      href: '/methodologies',
      subItems: [
        { 
          label: 'Features / Concepts and Price Optimization', 
          href: '/methodologies/features-concepts-price-optimization',
          subItems: [
            { label: 'Conjoint and ACBC', href: '/methodologies/conjoint-and-acbc' },
            { label: 'Max Diff Scaling and Qsort', href: '/methodologies/max-diff-scaling' },
            { label: 'Kano Analysis', href: '/methodologies/kano-analysis' },
            { label: 'TURF Analysis', href: '/methodologies/turf-analysis' },
            { label: 'Driver Analysis', href: '/methodologies/driver-analysis' },
            { label: 'Monadic / Sequential Monadic Testing', href: '/methodologies/monadic-testing' },
          ]
        },
        { 
          label: 'Understanding your Audience', 
          href: '/methodologies/understanding-audience',
          subItems: [
            { label: 'Factor Analysis', href: '/methodologies/factor-analysis' },
            { label: 'Cluster Analysis', href: '/methodologies/cluster-analysis' },
            { label: 'Latent Class Modeling', href: '/methodologies/latent-class-modeling' },
            { label: 'Database Modeling', href: '/methodologies/database-modeling' },
          ]
        },
        { 
          label: 'Understanding Your Competitive Landscape', 
          href: '/methodologies/competitive-landscape',
          subItems: [
            { label: 'Multi-Dimensional Scaling', href: '/methodologies/multi-dimensional-scaling' },
            { label: 'Structural Equation Modeling (SEM)', href: '/methodologies/structural-equation-modeling' },
            { label: 'Importance-Performance and NPS Score', href: '/methodologies/importance-performance-nps' },
          ]
        },
        { 
          label: 'Price Optimization', 
          href: '/methodologies/price-optimization',
          subItems: [
            { label: 'Price Laddering', href: '/methodologies/price-laddering' },
            { label: 'Van Westendorp', href: '/methodologies/van-westendorp' },
            { label: 'Conjoint and ACBC', href: '/methodologies/conjoint-and-acbc' },
          ]
        },
      ]
    },
    {
      label: 'Industries/Clients',
      href: '/industries-clients',
      subItems: [
        { label: 'Digital Media / Publications', href: '/industries-clients/digital-media-publications' },
        { label: 'Dental and Oral Care', href: '/industries-clients/dental-oral-care' },
        { label: 'Healthcare / Surgical', href: '/industries-clients/healthcare-surgical' },
        { label: 'Life Sciences', href: '/industries-clients/life-sciences' },
        { label: 'SaaS and Technology', href: '/industries-clients/saas-technology' },
        { label: 'Beauty / Cosmetics', href: '/industries-clients/beauty-cosmetics' },
        { label: 'Apparel', href: '/industries-clients/apparel' },
        { label: 'Retail', href: '/industries-clients/retail' },
        { label: 'Food / Restaurants', href: '/industries-clients/food-restaurants' },
        { label: 'Networks', href: '/industries-clients/networks' },
        { label: 'Non-Profit', href: '/industries-clients/non-profit' },
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      subItems: [
        { label: 'Blog', href: '/resources/blog' },
        { 
          label: 'Tools', 
          href: '/resources/tools',
          subItems: [
            { label: 'Insights Streamer', href: '/resources/tools#insights-streamer' },
            { label: 'Sample Size Calculator', href: '/resources/tools#sample-size-calculator' },
          ]
        },
        { label: 'Case Studies', href: '/resources/case-studies' },
        { label: 'Thought Leadership', href: '/resources/thought-leadership' },
        { label: 'White Papers & eBooks', href: '/resources/white-papers-ebooks' },
        { label: 'In the News', href: '/resources/in-the-news' },
      ]
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]

  const handleMouseEnter = (label: string) => {
    // Clear any pending timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setActiveDropdown(label)
    console.log("Dropdown opened:", label)
  }

  const handleMouseLeave = () => {
    // Add a delay before closing the dropdown
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      console.log("Dropdown closed")
    }, 150) // 150ms delay
  }

  const handleDropdownMouseEnter = () => {
    // Clear any pending timeout when mouse enters the dropdown
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
  }

  const handleDropdownMouseLeave = () => {
    // Close dropdown when leaving the dropdown area
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      console.log("Dropdown closed from dropdown area")
    }, 150) // 150ms delay
  }

  return (
    <header className="bg-white border-b border-proof-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/11OEk5VfLpHNwtXDpBDcT/proof-insights-logo.png" 
                alt="PROOF Insights" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigationStructure.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                      item.subItems && item.subItems.length > 0
                        ? 'text-proof-gray-700 hover:text-proof-blue-600 hover:bg-proof-gray-50'
                        : 'text-proof-gray-700 hover:text-proof-blue-600 hover:bg-proof-gray-50'
                    }`}
                    onClick={() => console.log("Nav item clicked:", item.label)}
                  >
                    {item.label}
                    {item.subItems && item.subItems.length > 0 && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subItems && item.subItems.length > 0 && activeDropdown === item.label && (
                    <div 
                      className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-lg border border-proof-gray-200 py-2 z-50"
                      style={{
                        marginTop: '-2px', // Close the gap between trigger and dropdown
                        paddingTop: '6px' // Add padding to account for negative margin
                      }}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {item.subItems.map((subItem) => (
                        <div key={subItem.label} className="relative group/sub">
                          <Link
                            href={subItem.href}
                            className="flex items-center justify-between px-4 py-3 text-sm text-proof-gray-700 hover:text-proof-blue-600 hover:bg-proof-gray-50 transition-colors duration-200"
                            onClick={() => console.log("Sub nav item clicked:", subItem.label)}
                          >
                            <span>{subItem.label}</span>
                            {subItem.subItems && subItem.subItems.length > 0 && (
                              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                            )}
                          </Link>

                          {/* Sub-dropdown Menu */}
                          {subItem.subItems && subItem.subItems.length > 0 && (
                            <div className="absolute left-full top-0 w-72 bg-white rounded-lg shadow-lg border border-proof-gray-200 py-2 z-50 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200"
                                 style={{
                                   marginLeft: '-2px', // Close the gap between parent and sub-dropdown
                                   paddingLeft: '6px' // Add padding to account for negative margin
                                 }}>
                              {subItem.subItems.map((subSubItem) => (
                                <Link
                                  key={subSubItem.label}
                                  href={subSubItem.href}
                                  className="block px-4 py-2 text-sm text-proof-gray-600 hover:text-proof-blue-600 hover:bg-proof-gray-50 transition-colors duration-200"
                                  onClick={() => console.log("Sub-sub nav item clicked:", subSubItem.label)}
                                >
                                  {subSubItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white text-sm px-6 py-2 font-medium rounded-lg shadow-sm">
              Book a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                console.log("Mobile menu toggled")
                setIsMenuOpen(!isMenuOpen)
              }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 max-h-screen overflow-y-auto">
              {navigationStructure.map((item) => (
                <div key={item.label} className="space-y-1">
                  <Link
                    href={item.href}
                    className="text-proof-gray-700 hover:text-proof-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md hover:bg-proof-gray-50"
                    onClick={() => {
                      console.log("Mobile nav item clicked:", item.label)
                      setIsMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Mobile Sub-items */}
                  {item.subItems && item.subItems.length > 0 && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <div key={subItem.label} className="space-y-1">
                          <Link
                            href={subItem.href}
                            className="text-proof-gray-600 hover:text-proof-blue-600 block px-3 py-1 text-sm transition-colors duration-200 rounded-md hover:bg-proof-gray-50"
                            onClick={() => {
                              console.log("Mobile sub nav item clicked:", subItem.label)
                              setIsMenuOpen(false)
                            }}
                          >
                            {subItem.label}
                          </Link>

                          {/* Mobile Sub-sub-items */}
                          {subItem.subItems && subItem.subItems.length > 0 && (
                            <div className="pl-4 space-y-1">
                              {subItem.subItems.map((subSubItem) => (
                                <Link
                                  key={subSubItem.label}
                                  href={subSubItem.href}
                                  className="text-proof-gray-500 hover:text-proof-blue-600 block px-3 py-1 text-xs transition-colors duration-200 rounded-md hover:bg-proof-gray-50"
                                  onClick={() => {
                                    console.log("Mobile sub-sub nav item clicked:", subSubItem.label)
                                    setIsMenuOpen(false)
                                  }}
                                >
                                  {subSubItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 pb-3">
                <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white w-full font-medium rounded-lg">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
