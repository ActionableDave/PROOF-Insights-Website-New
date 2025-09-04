"use client"

import { useState, useEffect } from 'react'

const sections = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'evolution', title: 'Evolution of Conjoint Methods', level: 1 },
  { id: 'how-it-works', title: 'How ACBC Works', level: 1 },
  { id: 'advantages', title: 'What Sets ACBC Apart', level: 1 },
  { id: 'pros-cons', title: 'Pros & Cons', level: 1 },
  { id: 'when-to-use', title: 'When to Use ACBC', level: 1 },
  { id: 'outcomes', title: 'Outcomes & Deliverables', level: 1 },
  { id: 'comparison', title: 'ACBC vs Other Methods', level: 1 },
  { id: 'use-cases', title: 'Use Cases & Industries', level: 1 },
]

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    console.log("TableOfContents component mounted")
    
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
              onClick={() => console.log("TOC link clicked:", section.title)}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}