import Header from '@/components/Header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, AlertTriangle, ArrowRight, Users, Settings, BarChart3, Brain, Target, Zap, TrendingUp, Database, Search, Download, FileText } from 'lucide-react'
import Link from 'next/link'

export default function LatentClassModelingGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-emerald-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-proof-blue-100 text-proof-blue-700 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              White Paper
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-proof-gray-900 mb-6 leading-tight">
              Advanced Latent Class Modeling
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              A comprehensive guide to uncovering hidden customer segments and behavioral patterns with sophisticated statistical modeling that reveals true preferences beyond demographics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all inline-flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download PDF Guide
              </button>
              <Link href="/contact" className="bg-white hover:bg-proof-gray-50 text-proof-blue-600 border border-proof-blue-600 font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all inline-flex items-center">
                Start Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Sidebar - Table of Contents */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-proof-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                <a href="#introduction" className="block text-sm text-proof-gray-600 hover:text-proof-blue-600 py-1">Introduction</a>
                <a href="#evolution" className="block text-sm text-proof-gray-600 hover:text-proof-blue-600 py-1">Evolution of Segmentation</a>
                <a href="#how-it-works" className="block text-sm text-proof-gray-600 hover:text-proof-blue-600 py-1">How LCM Works</a>
                <a href="#lcm-conjoint" className="block text-sm text-proof-gray-600 hover:text-proof-blue-600 py-1">Latent Class Conjoint</a>
                <a href="#advantages" className="block text-sm text-proof-gray-600 hover:text-proof-blue-600 py-1">What Sets LCM Apart</a>
                <a href="#pros-cons" className="block text-sm text-proof-gray-600 hover:text-proof-blue-600 py-1">Pros & Cons</a>
                <a href="#when-to-use" className="block text-sm text-proof-gray-600 hover:text-proof-blue-600 py-1">When to Use LCM</a>
                <a href="#deliverables" className="block text-sm text-proof-gray-600 hover:text-proof-blue-600 py-1">Deliverables & Insights</a>
                <a href="#comparison" className="block text-sm text-proof-gray-600 hover:text-proof-blue-600 py-1">LCM vs Other Techniques</a>
                <a href="#examples" className="block text-sm text-proof-gray-600 hover:text-proof-blue-600 py-1">Real-World Examples</a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="max-w-none">
              {/* What is LCM Section */}
              <section id="introduction" className="mb-20">
                <div className="bg-proof-blue-50 p-8 rounded-sm border border-proof-blue-200 mb-8">
                  <h3 className="text-xl font-medium text-proof-gray-900 mb-4">What is Latent Class Modeling (LCM)?</h3>
                  <p className="text-base text-proof-gray-700 leading-relaxed mb-6">
                    A statistical method that uncovers hidden ("latent") subgroups within a population based on observed data — segmentation that reflects true behavior and attitudes, not just demographics
                  </p>
                  <div className="border-l-4 border-proof-blue-600 pl-4">
                    <p className="text-proof-blue-700 font-medium text-sm">
                      Why does it matter in modern market research?
                    </p>
                  </div>
                </div>
              </section>

              {/* Evolution Section */}
              <section id="evolution" className="mb-20">
                <h2 className="text-2xl font-semibold text-proof-gray-900 mb-8 pb-2 border-b border-proof-gray-200">
                  Evolution of Segmentation Approaches
                </h2>
                
                <div className="space-y-1 border border-proof-gray-200 rounded-sm">
                  <div className="p-6 border-b border-proof-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-proof-gray-200 rounded-sm flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-4 h-4 text-proof-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base mb-1">Traditional clustering & demographic segmentation</h3>
                        <p className="text-sm text-proof-gray-600">Basic grouping by observable characteristics</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border-b border-proof-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-proof-blue-100 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Search className="w-4 h-4 text-proof-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base mb-1">Rise of probabilistic methods like Latent Class Analysis (LCA)</h3>
                        <p className="text-sm text-proof-gray-600">Statistical approaches for deeper insights</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-proof-emerald-50">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-proof-emerald-600 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base mb-1 text-proof-emerald-700">Integration with conjoint analysis</h3>
                        <p className="text-sm text-proof-gray-700">Leading to Latent Class Conjoint and advanced hybrid models</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* How LCM Works Section */}
              <section id="how-it-works" className="mb-20">
                <h2 className="text-2xl font-semibold text-proof-gray-900 mb-8 pb-2 border-b border-proof-gray-200">
                  How Latent Class Modeling Works
                </h2>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-2">
                    {/* Step 1 */}
                    <div className="flex-1 relative">
                      <div className="bg-white border-2 border-proof-blue-600 rounded-lg p-6 shadow-sm h-full flex flex-col">
                        <div className="flex flex-col items-center text-center flex-grow">
                          <div className="w-12 h-12 bg-proof-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                          <h3 className="font-semibold text-base mb-3 text-proof-blue-700">Data Collection</h3>
                          <p className="text-sm text-proof-gray-600 leading-relaxed flex-grow">Collect responses on preferences, behaviors, attitudes</p>
                        </div>
                      </div>
                      {/* Arrow pointing right */}
                      <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                        <svg width="32" height="24" viewBox="0 0 32 24" className="text-proof-blue-600">
                          <path d="M20 4 L28 12 L20 20 M28 12 L4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex-1 relative">
                      <div className="bg-white border-2 border-proof-emerald-600 rounded-lg p-6 shadow-sm h-full flex flex-col">
                        <div className="flex flex-col items-center text-center flex-grow">
                          <div className="w-12 h-12 bg-proof-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                          <h3 className="font-semibold text-base mb-3 text-proof-emerald-700">Model Estimation</h3>
                          <p className="text-sm text-proof-gray-600 leading-relaxed flex-grow">Use EM algorithms and fit statistics (BIC/AIC) to identify the number of latent segments</p>
                        </div>
                      </div>
                      {/* Arrow pointing right */}
                      <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                        <svg width="32" height="24" viewBox="0 0 32 24" className="text-proof-emerald-600">
                          <path d="M20 4 L28 12 L20 20 M28 12 L4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex-1 relative">
                      <div className="bg-white border-2 border-proof-teal-600 rounded-lg p-6 shadow-sm h-full flex flex-col">
                        <div className="flex flex-col items-center text-center flex-grow">
                          <div className="w-12 h-12 bg-proof-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                          <h3 className="font-semibold text-base mb-3 text-proof-teal-700">Assign Probabilities</h3>
                          <p className="text-sm text-proof-gray-600 leading-relaxed flex-grow">Compute each respondent's likelihood of belonging to each class</p>
                        </div>
                      </div>
                      {/* Arrow pointing right */}
                      <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                        <svg width="32" height="24" viewBox="0 0 32 24" className="text-proof-teal-600">
                          <path d="M20 4 L28 12 L20 20 M28 12 L4 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex-1">
                      <div className="bg-white border-2 border-proof-gray-600 rounded-lg p-6 shadow-sm h-full flex flex-col">
                        <div className="flex flex-col items-center text-center flex-grow">
                          <div className="w-12 h-12 bg-proof-gray-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
                          <h3 className="font-semibold text-base mb-3 text-proof-gray-700">Interpret Segments</h3>
                          <p className="text-sm text-proof-gray-600 leading-relaxed flex-grow">Profile each class using its behavioral/attitudinal pattern and probability distributions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Latent Class Conjoint Section */}
              <section id="lcm-conjoint" className="mb-20">
                <h2 className="text-2xl font-semibold text-proof-gray-900 mb-8 pb-2 border-b border-proof-gray-200">
                  Latent Class Conjoint: Segmenting Preferences
                </h2>
                
                <div className="bg-proof-blue-50 border border-proof-blue-200 rounded-sm p-8 mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-blue-600 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-base text-proof-gray-700 leading-relaxed mb-4">
                        LCM applied to conjoint data estimates part‑worths per segment and uncovers preference heterogeneity
                      </p>
                      <p className="text-sm text-proof-blue-700 font-medium">
                        Ideal for tailoring product or pricing strategies by segment
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What Sets LCM Apart */}
              <section id="advantages" className="mb-20">
                <h2 className="text-2xl font-semibold text-proof-gray-900 mb-8 pb-2 border-b border-proof-gray-200">
                  What Sets LCM Apart
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-proof-gray-200 rounded-sm p-6 text-center">
                    <div className="w-12 h-12 bg-proof-blue-100 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-6 h-6 text-proof-blue-600" />
                    </div>
                    <h3 className="font-medium text-base mb-3">Natural Segments</h3>
                    <p className="text-sm text-proof-gray-600">Identifies naturally occurring segments rather than imposing arbitrary groups</p>
                  </div>

                  <div className="border border-proof-gray-200 rounded-sm p-6 text-center">
                    <div className="w-12 h-12 bg-proof-emerald-100 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <Database className="w-6 h-6 text-proof-emerald-600" />
                    </div>
                    <h3 className="font-medium text-base mb-3">Variable Flexibility</h3>
                    <p className="text-sm text-proof-gray-600">Handles both categorical and continuous variables (latent class/profile flexibility)</p>
                  </div>

                  <div className="border border-proof-gray-200 rounded-sm p-6 text-center">
                    <div className="w-12 h-12 bg-proof-teal-100 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-proof-teal-600" />
                    </div>
                    <h3 className="font-medium text-base mb-3">Probabilistic Assignment</h3>
                    <p className="text-sm text-proof-gray-600">Provides probabilistic segment assignment for nuanced analysis</p>
                  </div>
                </div>
              </section>

              {/* Pros & Cons */}
              <section id="pros-cons" className="mb-20">
                <h2 className="text-2xl font-semibold text-proof-gray-900 mb-8 pb-2 border-b border-proof-gray-200">
                  Pros & Cons
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-proof-emerald-200 rounded-sm bg-proof-emerald-50">
                    <div className="p-6">
                      <h3 className="flex items-center text-proof-emerald-700 font-medium mb-4">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Advantages
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-proof-emerald-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-proof-gray-700">Reveals hidden psychological or behavioral segments</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-proof-emerald-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-proof-gray-700">Combines depth (segment-level insight) with robustness (stability across data)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-orange-200 rounded-sm bg-orange-50">
                    <div className="p-6">
                      <h3 className="flex items-center text-orange-700 font-medium mb-4">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Challenges
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-proof-gray-700">Requires strong statistical expertise, careful model selection (e.g., BIC vs AIC)</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-proof-gray-700">Can over-segment without operational relevance — balancing granularity with usability is key</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* When to Use LCM */}
              <section id="when-to-use" className="mb-20">
                <h2 className="text-2xl font-semibold text-proof-gray-900 mb-8 pb-2 border-b border-proof-gray-200">
                  When to Use Latent Class Modeling
                </h2>
                
                <div className="bg-proof-blue-50 border border-proof-blue-200 rounded-sm p-6">
                  <h3 className="text-proof-blue-700 font-medium mb-4">Optimal for:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-proof-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Market segmentation where behavioral and attitudinal diversity matters</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-proof-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Product and pricing strategies using latent class conjoint for targeted offerings</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-proof-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Complex decision environments with preference heterogeneity — e.g., telecom bundles, financial services</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Deliverables & Insights */}
              <section id="deliverables" className="mb-20">
                <h2 className="text-2xl font-semibold text-proof-gray-900 mb-8 pb-2 border-b border-proof-gray-200">
                  Deliverables & Insights
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center border border-proof-gray-200 rounded-sm p-6">
                    <div className="w-10 h-10 bg-proof-blue-100 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <Users className="w-5 h-5 text-proof-blue-600" />
                    </div>
                    <h3 className="font-medium text-base mb-2">Segment Profiles</h3>
                    <p className="text-xs text-proof-gray-600">Clear personas with behavior and preference patterns</p>
                  </div>

                  <div className="text-center border border-proof-gray-200 rounded-sm p-6">
                    <div className="w-10 h-10 bg-proof-emerald-100 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-5 h-5 text-proof-emerald-600" />
                    </div>
                    <h3 className="font-medium text-base mb-2">Part‑worth Utilities</h3>
                    <p className="text-xs text-proof-gray-600">For conjoint analysis applications</p>
                  </div>

                  <div className="text-center border border-proof-gray-200 rounded-sm p-6">
                    <div className="w-10 h-10 bg-proof-teal-100 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <Target className="w-5 h-5 text-proof-teal-600" />
                    </div>
                    <h3 className="font-medium text-base mb-2">Probability Scores</h3>
                    <p className="text-xs text-proof-gray-600">For classification and predictive targeting</p>
                  </div>

                  <div className="text-center border border-proof-gray-200 rounded-sm p-6">
                    <div className="w-10 h-10 bg-proof-gray-200 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-5 h-5 text-proof-gray-600" />
                    </div>
                    <h3 className="font-medium text-base mb-2">Strategic Frameworks</h3>
                    <p className="text-xs text-proof-gray-600">Tailored messaging, product development, pricing optimization</p>
                  </div>
                </div>
              </section>

              {/* Comparison Table */}
              <section id="comparison" className="mb-20">
                <h2 className="text-2xl font-semibold text-proof-gray-900 mb-8 pb-2 border-b border-proof-gray-200">
                  LCM vs. Other Techniques
                </h2>
                
                <div className="border border-proof-gray-200 rounded-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-proof-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-medium text-proof-gray-900">Method</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-proof-gray-900">Best for</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-proof-gray-900">Segment Granularity</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-proof-gray-900">Complexity</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-proof-gray-200">
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-proof-gray-900">Demographic clustering</td>
                          <td className="px-6 py-4 text-sm text-proof-gray-600">Broad groups by observable traits</td>
                          <td className="px-6 py-4 text-sm text-proof-gray-600">Low</td>
                          <td className="px-6 py-4">
                            <Badge variant="secondary" className="bg-proof-emerald-100 text-proof-emerald-700 text-xs">Low</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-proof-gray-900">K‑means clustering</td>
                          <td className="px-6 py-4 text-sm text-proof-gray-600">Numeric segmentation only</td>
                          <td className="px-6 py-4 text-sm text-proof-gray-600">Medium</td>
                          <td className="px-6 py-4">
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 text-xs">Medium</Badge>
                          </td>
                        </tr>
                        <tr className="bg-proof-blue-50">
                          <td className="px-6 py-4 text-sm font-medium text-proof-blue-700">Latent Class Modeling</td>
                          <td className="px-6 py-4 text-sm text-proof-gray-700">Behavioral & attitudinal segmentation</td>
                          <td className="px-6 py-4 text-sm text-proof-gray-700">High</td>
                          <td className="px-6 py-4">
                            <Badge variant="secondary" className="bg-red-100 text-red-700 text-xs">High</Badge>
                          </td>
                        </tr>
                        <tr className="bg-proof-emerald-50">
                          <td className="px-6 py-4 text-sm font-medium text-proof-emerald-700">Latent Class Conjoint</td>
                          <td className="px-6 py-4 text-sm text-proof-gray-700">Preference segmentation</td>
                          <td className="px-6 py-4 text-sm text-proof-gray-700">High</td>
                          <td className="px-6 py-4">
                            <Badge variant="secondary" className="bg-red-100 text-red-700 text-xs">High</Badge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Real-World Examples */}
              <section id="examples" className="mb-20">
                <h2 className="text-2xl font-semibold text-proof-gray-900 mb-8 pb-2 border-b border-proof-gray-200">
                  Real‑World Examples
                </h2>
                
                <div className="bg-proof-blue-50 border border-proof-blue-200 rounded-sm p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-proof-blue-600 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base mb-2 text-proof-blue-700">PROOF Insights Case Studies</h3>
                      <p className="text-sm text-proof-gray-700">
                        Using latent class conjoint to profile segments and inform product positioning
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Summary & Takeaways */}
              <section className="mb-20">
                <h2 className="text-2xl font-semibold text-proof-gray-900 mb-8 pb-2 border-b border-proof-gray-200">
                  Summary & Takeaways
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-proof-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-base text-proof-gray-700">Latent Class Modeling delivers deep, actionable insights by revealing hidden segments</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-proof-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-base text-proof-gray-700">Perfect for markets with nuanced customer preferences</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-proof-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-base text-proof-gray-700">Requires careful design, robust validation, and clear translation into business actions</p>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="mb-20">
                <div className="bg-gradient-to-r from-proof-blue-50 to-proof-emerald-50 border border-proof-blue-200 rounded-lg p-12 text-center">
                  <h2 className="text-2xl font-semibold text-proof-gray-900 mb-4">
                    Ready to Uncover Hidden Customer Segments?
                  </h2>
                  <p className="text-lg text-proof-gray-600 mb-8 max-w-2xl mx-auto">
                    Consult with PROOF Insights for custom latent class studies. Link to related services, methodologies, and case studies.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                      Get Started Today
                    </Link>
                    <button className="bg-white hover:bg-proof-gray-50 text-proof-blue-600 border border-proof-blue-600 font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all inline-flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download Full Guide
                    </button>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}