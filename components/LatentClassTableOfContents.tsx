"use client"

import { useState, useEffect } from 'react'

const sections = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'evolution', title: 'Evolution of Segmentation', level: 1 },
  { id: 'how-it-works', title: 'How LCM Works', level: 1 },
  { id: 'lcm-conjoint', title: 'Latent Class Conjoint', level: 1 },
  { id: 'advantages', title: 'What Sets LCM Apart', level: 1 },
  { id: 'pros-cons', title: 'Pros & Cons', level: 1 },
  { id: 'when-to-use', title: 'When to Use LCM', level: 1 },
  { id: 'deliverables', title: 'Deliverables & Insights', level: 1 },
  { id: 'comparison', title: 'LCM vs Other Techniques', level: 1 },
  { id: 'examples', title: 'Real-World Examples', level: 1 },
]

export default function LatentClassTableOfContents() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    console.log("LatentClassTableOfContents component mounted")
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Section in view:", entry.target.id)
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, sectionTitle: string) => {
    e.preventDefault()
    console.log("TOC link clicked:", sectionTitle)
    
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100 // Account for sticky header + some padding
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="sticky top-20 space-y-1">
      <h4 className="font-medium text-sm text-proof-gray-900 mb-6 uppercase tracking-wide">Contents</h4>
      <ul className="space-y-1 text-sm border-l border-proof-gray-200">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block py-2 pl-4 text-left transition-colors duration-200 ${
                activeSection === section.id
                  ? 'text-proof-blue-600 font-medium bg-proof-blue-50 border-l-2 border-proof-blue-600 -ml-px'
                  : 'text-proof-gray-600 hover:text-proof-gray-900 hover:bg-proof-gray-50'
              }`}
              onClick={(e) => handleSectionClick(e, section.id, section.title)}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}