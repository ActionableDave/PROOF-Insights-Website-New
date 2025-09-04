'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calculator, Video, BarChart3, Target, Clock, Users } from 'lucide-react'

export default function ToolsPage() {
  // State for calculator inputs
  const [marginError, setMarginError] = useState(5)
  const [confidenceLevel, setConfidenceLevel] = useState<90 | 95 | 99>(95)
  const [populationSize, setPopulationSize] = useState(20000)
  const [responseDistribution, setResponseDistribution] = useState(50)
  
  // State for results
  const [sampleSize, setSampleSize] = useState(377)
  const [currentMargin, setCurrentMargin] = useState(5.04)
  const [alternateScenarios, setAlternateScenarios] = useState<Record<90 | 95 | 99, number>>({
    90: 267,
    95: 377,
    99: 643
  })

  // Z-scores for different confidence levels
  const zScores: Record<90 | 95 | 99, number> = { 90: 1.645, 95: 1.96, 99: 2.576 }

  // Calculate sample size function
  const calculateSampleSize = () => {
    const e = marginError / 100 // Convert to decimal
    const p = responseDistribution / 100 // Convert to decimal
    const N = populationSize || Infinity
    const z = zScores[confidenceLevel] || 1.96

    let n
    if (N === Infinity || N > 100000) {
      n = Math.ceil((z * z * p * (1 - p)) / (e * e))
    } else {
      const numerator = N * z * z * p * (1 - p)
      const denominator = (N - 1) * e * e + z * z * p * (1 - p)
      n = Math.ceil(numerator / denominator)
    }

    setSampleSize(n)

    // Calculate alternate scenarios
    const scenarios: Record<90 | 95 | 99, number> = {} as Record<90 | 95 | 99, number>
    ;[90, 95, 99].forEach(conf => {
      const zAlt = zScores[conf as 90 | 95 | 99]
      let nAlt
      if (N === Infinity || N > 100000) {
        nAlt = Math.ceil((zAlt * zAlt * p * (1 - p)) / (e * e))
      } else {
        const numAlt = N * zAlt * zAlt * p * (1 - p)
        const denAlt = (N - 1) * e * e + zAlt * zAlt * p * (1 - p)
        nAlt = Math.ceil(numAlt / denAlt)
      }
      scenarios[conf as 90 | 95 | 99] = nAlt
    })
    setAlternateScenarios(scenarios)

    // Calculate margin of error for current sample size
    const margin = Math.sqrt((z * z * p * (1 - p)) / n) * 100
    setCurrentMargin(parseFloat(margin.toFixed(2)))
  }

  // Recalculate when inputs change
  useEffect(() => {
    calculateSampleSize()
  }, [marginError, confidenceLevel, populationSize, responseDistribution])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-proof-gray-900 mb-6">
              Research Tools
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed">
              Free calculators and tools to help you plan, execute, and optimize your market research projects with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Available Tools</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Access our suite of professional research tools designed to simplify complex calculations and improve project planning.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <Calculator className="h-12 w-12 text-proof-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-4">Sample Size Calculator</h3>
              <p className="text-proof-gray-600 mb-6">
                Calculate the optimal sample size for your surveys and studies based on confidence level, margin of error, and population size.
              </p>
              <Button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white">
                Use Calculator
              </Button>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <Video className="h-12 w-12 text-proof-purple-600 mb-6" />
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-4">Insights Streamer</h3>
              <p className="text-proof-gray-600 mb-6">
                Interactive tool for visualizing and sharing research insights with stakeholders through dynamic charts and presentations.
              </p>
              <Button className="bg-proof-purple-600 hover:bg-proof-purple-700 text-white">
                Launch Tool
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Size Calculator */}
      <section id="sample-size-calculator" className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calculator className="h-16 w-16 text-proof-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Sample Size Calculator</h2>
            <p className="text-xl text-proof-gray-600 max-w-2xl mx-auto">
              Determine the right sample size for your research project to ensure statistical significance and reliable results.
            </p>
          </div>
          
          <Card className="p-8 bg-white max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Input Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="space-y-4">
                    <tr className="border-b border-proof-gray-200">
                      <td className="py-4 pr-6">
                        <div className="font-medium text-proof-gray-900">What margin of error can you accept?</div>
                        <div className="text-sm text-proof-gray-600 mt-1">5% is a common choice</div>
                      </td>
                      <td className="py-4 px-6 w-32">
                        <div className="flex items-center">
                          <Input
                            type="number"
                            value={marginError}
                            onChange={(e) => setMarginError(Number(e.target.value))}
                            min="1"
                            max="50"
                            className="w-20 text-center"
                          />
                          <span className="ml-2 text-proof-gray-700">%</span>
                        </div>
                      </td>
                      <td className="py-4 pl-6">
                        <div className="text-sm text-proof-gray-600">
                          The margin of error is the amount of error that you can tolerate. If 90% of respondents answer <em>yes</em>, while 10% answer <em>no</em>, you may be able to tolerate a larger amount of error than if the respondents are split 50-50 or 45-55. Lower margin of error requires a larger sample size.
                        </div>
                      </td>
                    </tr>
                    
                    <tr className="border-b border-proof-gray-200">
                      <td className="py-4 pr-6">
                        <div className="font-medium text-proof-gray-900">What confidence level do you need?</div>
                        <div className="text-sm text-proof-gray-600 mt-1">Typical choices are 90%, 95%, or 99%</div>
                      </td>
                      <td className="py-4 px-6 w-32">
                        <div className="flex items-center">
                          <select 
                            value={confidenceLevel}
                            onChange={(e) => setConfidenceLevel(Number(e.target.value) as 90 | 95 | 99)}
                            className="w-20 px-2 py-1 border border-proof-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-proof-blue-500"
                          >
                            <option value="90">90</option>
                            <option value="95">95</option>
                            <option value="99">99</option>
                          </select>
                          <span className="ml-2 text-proof-gray-700">%</span>
                        </div>
                      </td>
                      <td className="py-4 pl-6">
                        <div className="text-sm text-proof-gray-600">
                          The confidence level is the amount of uncertainty you can tolerate. Suppose that you have 20 yes-no questions in your survey. With a confidence level of 95%, you would expect that for one of the questions (1 in 20), the percentage of people who answer <em>yes</em> would be more than the margin of error away from the true answer. Higher confidence level requires a larger sample size.
                        </div>
                      </td>
                    </tr>
                    
                    <tr className="border-b border-proof-gray-200">
                      <td className="py-4 pr-6">
                        <div className="font-medium text-proof-gray-900">What is the population size?</div>
                        <div className="text-sm text-proof-gray-600 mt-1">If you don't know, use 20000</div>
                      </td>
                      <td className="py-4 px-6 w-32">
                        <Input
                          type="number"
                          value={populationSize}
                          onChange={(e) => setPopulationSize(Number(e.target.value))}
                          min="1"
                          className="w-24 text-center"
                        />
                      </td>
                      <td className="py-4 pl-6">
                        <div className="text-sm text-proof-gray-600">
                          How many people are there to choose your random sample from? The sample size doesn't change much for populations larger than 20,000.
                        </div>
                      </td>
                    </tr>
                    
                    <tr className="border-b border-proof-gray-200">
                      <td className="py-4 pr-6">
                        <div className="font-medium text-proof-gray-900">What is the response distribution?</div>
                        <div className="text-sm text-proof-gray-600 mt-1">Leave this as 50%</div>
                      </td>
                      <td className="py-4 px-6 w-32">
                        <div className="flex items-center">
                          <Input
                            type="number"
                            value={responseDistribution}
                            onChange={(e) => setResponseDistribution(Number(e.target.value))}
                            min="1"
                            max="99"
                            className="w-20 text-center"
                          />
                          <span className="ml-2 text-proof-gray-700">%</span>
                        </div>
                      </td>
                      <td className="py-4 pl-6">
                        <div className="text-sm text-proof-gray-600">
                          For each question, what do you expect the results will be? If the sample is skewed highly one way or the other, the population probably is, too. If you don't know, use 50%, which gives the largest sample size.
                        </div>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="py-4 pr-6">
                        <div className="font-medium text-proof-gray-900">Your recommended sample size is</div>
                      </td>
                      <td className="py-4 px-6 w-32">
                        <div className="text-2xl font-bold text-proof-blue-600">{sampleSize}</div>
                      </td>
                      <td className="py-4 pl-6">
                        <div className="text-sm text-proof-gray-600">
                          This is the minimum recommended size of your survey. If you create a sample of this many people and get responses from everyone, you're more likely to get a correct answer than you would from a large sample where only a small percentage of the sample responds to your survey.
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Calculate Button */}
              <div className="text-center">
                <Button 
                  onClick={calculateSampleSize}
                  className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-3"
                >
                  Recalculate Sample Size
                </Button>
              </div>
              
              {/* Alternate Scenarios */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-6">Alternate scenarios</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-proof-gray-300">
                    <thead>
                      <tr className="bg-proof-gray-50">
                        <th className="border border-proof-gray-300 p-3 text-left">With a sample size of</th>
                        <th className="border border-proof-gray-300 p-3 text-center">{sampleSize}</th>
                        <th className="border border-proof-gray-300 p-3 text-center">With a confidence level of</th>
                        <th className="border border-proof-gray-300 p-3 text-center">90%</th>
                        <th className="border border-proof-gray-300 p-3 text-center">95%</th>
                        <th className="border border-proof-gray-300 p-3 text-center">99%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-proof-gray-300 p-3 font-medium">Your margin of error would be</td>
                        <td className="border border-proof-gray-300 p-3 text-center font-bold text-proof-blue-600">{currentMargin}%</td>
                        <td className="border border-proof-gray-300 p-3 font-medium">Your sample size would need to be</td>
                        <td className="border border-proof-gray-300 p-3 text-center font-bold">{alternateScenarios[90]}</td>
                        <td className="border border-proof-gray-300 p-3 text-center font-bold">{alternateScenarios[95]}</td>
                        <td className="border border-proof-gray-300 p-3 text-center font-bold">{alternateScenarios[99]}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* More Information */}
              <div className="mt-12 p-6 bg-proof-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-proof-gray-900 mb-4">More Information</h3>
                <div className="text-sm text-proof-gray-700 space-y-3 leading-relaxed">
                  <p>
                    If 50% of all the people in a population of 20,000 people drink coffee in the morning, and if you were to repeat the survey of {sampleSize} people ("Did you drink coffee this morning?") many times, then {confidenceLevel}% of the time, your survey would find that between {50 - marginError}% and {50 + marginError}% of the people in your sample answered "Yes".
                  </p>
                  <p>
                    The remaining {100 - confidenceLevel}% of the time, or for 1 in {Math.round(100/(100-confidenceLevel))} survey questions, you would expect the survey response to be more than the margin of error away from the true answer. When you survey a sample of the population, you don't know that you've found the correct answer, but you do know that there's a {confidenceLevel}% chance that you're within the margin of error of the correct answer.
                  </p>
                  <p>
                    Try changing your sample size and watch what happens to the <em>alternate scenarios</em>. That tells you what happens if you don't use the recommended sample size, and how margin of error and confidence level (that {confidenceLevel}%) are related.
                  </p>
                  <p>
                    <strong>About Response Distribution:</strong> If you ask a random sample of 10 people if they like donuts, and 9 of them say, "Yes", then the prediction that you make about the general population is different than it would be if 5 had said, "Yes", and 5 had said, "No". Setting the response distribution to 50% is the most conservative assumption. So just leave it at 50% unless you know what you're doing.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Insights Streamer */}
      <section id="insights-streamer" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Video className="h-16 w-16 text-proof-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">Insights Streamer</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Transform your research data into compelling visual stories that engage stakeholders and drive decision-making.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-proof-gray-900 mb-6">Features & Capabilities</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <BarChart3 className="h-8 w-8 text-proof-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Interactive Charts</h4>
                    <p className="text-proof-gray-600">Create dynamic visualizations that allow stakeholders to explore data and discover insights.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-proof-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Story Builder</h4>
                    <p className="text-proof-gray-600">Build compelling narratives around your data with guided storytelling templates.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-proof-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Real-time Collaboration</h4>
                    <p className="text-proof-gray-600">Share insights instantly with team members and get feedback in real-time.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-proof-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-proof-gray-900 mb-2">Stakeholder Dashboards</h4>
                    <p className="text-proof-gray-600">Create customized views for different audiences and decision-makers.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-proof-purple-600 hover:bg-proof-purple-700 text-white px-8 py-3 mr-4">
                  Launch Insights Streamer
                </Button>
                <Button variant="outline" className="border-proof-purple-600 text-proof-purple-600 hover:bg-proof-purple-50 px-8 py-3">
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0">
              <h4 className="text-lg font-semibold text-proof-gray-900 mb-6">Sample Dashboard Preview</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Customer Satisfaction</span>
                    <span className="text-sm text-green-600 font-bold">↑ 8.2%</span>
                  </div>
                  <div className="w-full h-2 bg-proof-gray-200 rounded-full">
                    <div className="w-4/5 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-proof-gray-600 mt-1">85% satisfaction rate</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Purchase Intent</span>
                    <span className="text-sm text-blue-600 font-bold">72%</span>
                  </div>
                  <div className="w-full h-2 bg-proof-gray-200 rounded-full">
                    <div className="w-3/4 h-2 bg-proof-blue-600 rounded-full"></div>
                  </div>
                  <div className="text-xs text-proof-gray-600 mt-1">Above industry average</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Brand Awareness</span>
                    <span className="text-sm text-purple-600 font-bold">↑ 12%</span>
                  </div>
                  <div className="w-full h-2 bg-proof-gray-200 rounded-full">
                    <div className="w-2/3 h-2 bg-proof-purple-600 rounded-full"></div>
                  </div>
                  <div className="text-xs text-proof-gray-600 mt-1">68% awareness in target market</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Tools Preview */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-proof-gray-900 mb-6">More Tools Coming Soon</h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              We're continuously developing new tools to support your research needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white text-center opacity-75">
              <BarChart3 className="h-12 w-12 text-proof-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Power Analysis Calculator</h3>
              <p className="text-sm text-proof-gray-600 mb-4">Determine statistical power for your research designs</p>
              <div className="text-xs text-proof-gray-500 bg-proof-gray-100 px-3 py-1 rounded-full inline-block">
                Coming Q2 2024
              </div>
            </Card>
            
            <Card className="p-6 bg-white text-center opacity-75">
              <Target className="h-12 w-12 text-proof-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">ROI Calculator</h3>
              <p className="text-sm text-proof-gray-600 mb-4">Calculate the return on investment for research projects</p>
              <div className="text-xs text-proof-gray-500 bg-proof-gray-100 px-3 py-1 rounded-full inline-block">
                Coming Q3 2024
              </div>
            </Card>
            
            <Card className="p-6 bg-white text-center opacity-75">
              <Clock className="h-12 w-12 text-proof-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-3">Timeline Planner</h3>
              <p className="text-sm text-proof-gray-600 mb-4">Plan and track research project timelines</p>
              <div className="text-xs text-proof-gray-500 bg-proof-gray-100 px-3 py-1 rounded-full inline-block">
                Coming Q4 2024
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-proof-blue-600 to-proof-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Custom Research Tools?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team can develop custom calculators and tools tailored to your specific research requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-proof-blue-600 hover:bg-proof-gray-100 px-8 py-3 text-lg font-semibold">
              Request Custom Tool
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-3 text-lg font-semibold">
              View All Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


