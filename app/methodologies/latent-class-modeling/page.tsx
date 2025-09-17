


"use client";

import Header from '@/components/Header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Users, BarChart3, Brain, Target, Zap, TrendingUp, Database, Search } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  console.log("LCA page rendered")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24"
               style={{
                 backgroundImage: `url('https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/qzjda03k524b6cd1a4tyz4pf/CYGAdwTFHiRLAkHzlaSvK/cluster-analysis.png')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
               }}>
        {/* 65% White Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-65"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <BarChart3 className="w-4 h-4 mr-1" />
              Understanding Your Audience
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
              Latent Class Analysis &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 block leading-[1.2]">Statistical Discovery</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Uncover hidden patterns in your data. Latent Class Analysis is a powerful statistical technique used to identify unobserved (latent) subgroups within a population based on observed data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" asChild>
                <Link href="/contact">
                  <Search className="w-5 h-5 mr-2" />
                  Start Analysis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Three Types of LCM Models */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">Methodology Options</Badge>
            <h1 className="text-4xl font-bold text-proof-gray-900 mb-4">Latent Class Models</h1>
            <p className="text-lg text-proof-gray-700 max-w-3xl mx-auto">
              We apply three key types of Latent Class models to solve a range of research and analytics challenges:
            </p>
          </div>
          
          <div className="space-y-12">
            {/* 1. Latent Class Cluster Model */}
            <div className="bg-proof-blue-50 border border-proof-blue-200 rounded-lg p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-proof-blue-700 mb-2">Latent Class Cluster Model</h3>
                  <p className="text-base text-proof-gray-700 leading-relaxed">
                    Groups individuals based on similarity in response patterns, rather than Euclidean distance as in the traditional K-Means approach.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-proof-gray-900 mb-4">Key Benefits:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-proof-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Probability-based classification: assesses the probability that each respondent belongs to every cluster. In a model with a good fit, these probabilities are usually close to 100% for the cluster a user is most associated with and close to 0% for the other clusters</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-proof-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Handles variables of mixed scale types (nominal, ordinal or continuous), which allows the use of behavioral data in clustering</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-proof-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Statistical tests are available to assess the model fit and compare different models</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-proof-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">More robust with missing data - respondents can still be classified even with incomplete information</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-proof-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Continuous or discrete factors can be used in a LC cluster model to deal with rating scale usage bias as a faster, more flexible alternative to case level standardization, and to capture obvious relationships in the data</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-proof-gray-900 mb-4">Real-World Applications:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-proof-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Segmenting customers using both attitudinal and behavioral data</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-proof-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Creating stable, well-defined segments with interpretable patterns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Latent Class Factor Model */}
            <div className="bg-proof-emerald-50 border border-proof-emerald-200 rounded-lg p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-proof-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-proof-emerald-700 mb-2">Latent Class Factor Model</h3>
                  <p className="text-base text-proof-gray-700 leading-relaxed">
                    Simplify complex data into meaningful dimensions.
                  </p>
                  <p className="text-base text-proof-gray-700 leading-relaxed mt-2">
                    This model identifies latent factors that explain correlations among observed variables. Unlike traditional factor analysis, LC Factor models generate discrete, ordinal factors such as Low / Mid / High, which can be more actionable in marketing and strategy.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-proof-gray-900 mb-4">Key Benefits:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Works with mixed data types</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-proof-emerald-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">No need to rotate factors for interpretation</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-proof-gray-900 mb-4">Real-World Applications:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-proof-emerald-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Since LC factors are discrete and ordinal, using LC Factor models rather than traditional factor / principal components analysis may be a better approach when creating affinity scores, because Low/Mid/High groups will be created by the model rather than by arbitrary cutoffs of values of a continuous factor</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-proof-emerald-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">LC factors can be converted to segments. For example, if 2 factors are identified with 2 levels each (Low/High), then respondents can be grouped into 4 segments, which will represent each possible combination of values in the 2 factors: (Low, Low), (Low, High), (High, Low), (High, High)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Latent Class Regression Model */}
            <div className="bg-proof-teal-50 border border-proof-teal-200 rounded-lg p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-proof-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-proof-teal-700 mb-2">Latent Class Regression Model</h3>
                  <p className="text-base text-proof-gray-700 leading-relaxed">
                    Build predictive models that reflect real-world complexity.
                  </p>
                  <p className="text-base text-proof-gray-700 leading-relaxed mt-2">
                    The LC Regression model simultaneously classifies individuals into segments and builds a separate regression model for each segment. Each segment represents a homogeneous group of respondents. This approach is ideal when data reflects substantial heterogeneity.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-proof-gray-900 mb-4">Key Benefits:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-proof-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Handles variables of mixed scale types (nominal, ordinal or continuous)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-proof-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">No assumptions of linearity, normality, or homogeneity</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-proof-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Separate models for each class improve predictive accuracy</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-proof-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Supports covariates and parameter constraints to avoid overfitting</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-proof-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Ideal for conjoint analysis - simultaneously identify segments in population and product features that appeal to each segment</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-proof-gray-900 mb-4">Real-World Applications:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-proof-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Segment-specific product design strategies</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-proof-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-proof-gray-700">Modeling outcomes like purchase intent across distinct respondent types</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-proof-gray-900 mb-8 pb-2 border-b border-proof-gray-200">
            Why It Matters
          </h2>
          
          <div className="bg-proof-blue-50 border border-proof-blue-200 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-proof-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-base text-proof-gray-700 leading-relaxed">
                  Latent Class models provide deeper insight than traditional techniques by recognizing that one-size-fits-all analysis often misses the mark, giving you the tools to uncover hidden structure in your data for more precise targeting and better strategic outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Uncover Hidden Patterns?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Partner with PROOF Insights to leverage advanced Latent Class Analysis that reveals 
            hidden subgroups and transforms complex data into strategic advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Brain className="w-5 h-5 mr-2" />
                Start Latent Class Analysis
              </Button>
            </a>
            <a href="/resources/case-studies">
              <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Database className="w-5 h-5 mr-2" />
                View Case Studies
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}









