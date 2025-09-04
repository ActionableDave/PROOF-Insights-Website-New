




"use client"

import Header from '@/components/Header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Brain,
  PieChart,
  LineChart,
  Building,
  Lightbulb,
  Award,
  Clock,
  Shield,
  Star,
  Handshake,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  console.log("Proof Insights homepage rendered")

  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Define the logos array
  const logos = [
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/sshfh0x3KNX0IM5R1FI81/asp.jpg", alt: "Advanced Sterilization Products" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/7ppe9YLqGO42rLNYaQH1L/action-hunger.png", alt: "Action Against Hunger" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/ZTxN_oooyGWxlhFgX-9A4/bloomingdales-logo.svg.png", alt: "Bloomingdale's" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/4gzWwQZKuJFsBVNJCGz4V/all-recipes-logo.svg-1.png", alt: "Allrecipes" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/PMIdbCcncb1VP08UuXzX2/andrew-tech.jpg", alt: "Andrew Technologies" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/X78n07dyheoPo8HnqTP6o/asensus.png", alt: "Asensus Surgical" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/ELJknoQzbE_VBp_GkM1YW/best-friends-animal.png", alt: "Best Friends Animal Society" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/0RB1U3OCe6dPuCfG8IsV0/amo.jpg", alt: "Abbott Medical Optics" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/Np-bbVZi-SQ3Ec6GsYSc2/bio-rad.jpg", alt: "Bio-Rad" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/B6TRf8t9LFuV-qu1athUj/boston-sci.jpg", alt: "Boston Scientific" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/hr3lx5butGARa6VFSmIwh/carestream.jpg", alt: "Carestream Dental" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/lm44XZV5R-93YPopd9Ygm/better-homes-and-gardens-logo-freelogovectors.net-.png", alt: "Better Homes & Gardens" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/U1ADU85UhVE8Izh9jHwCL/bareminerals-logo.png", alt: "bareMinerals" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/TJKrZF373LSEwFBh6Q3a_/ing.png", alt: "ING" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/p2w4rigJJDo4ATtU2uWEZ/calcivis.png", alt: "Calcivis" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/JBk_2UoebZZ0JtVzBvtKZ/bon-appetit.png", alt: "Bon Appétit" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/ExLhZTjpGZAfdueB9mY15/chipotle-logo-2009-present.png", alt: "Chipotle" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/fOakf6Ysi6pOtr95NqgHs/aviir.png", alt: "Aviir" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/jggucJs7-q9GC9RQcUrvS/beckman-coulter.png", alt: "Beckman Coulter" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/ylovyvk4ArDPaDOZwsphv/churchdwight.png", alt: "Church & Dwight" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/08mfbNqLxW6ofHc1yWQ4i/cook.png", alt: "Cook Medical" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/cZDlH50KSzzRidTlgrISX/dandy.jpg", alt: "Dandy" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/5S9zyV7pnNlMrS1dZtiib/colgate.png", alt: "Colgate" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/fX-G2qFh87o7Z-zLi0wEL/covidien.png", alt: "Covidien" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/qamPaHFpEMwZvIBAqaRMD/dentsply-sirona.png", alt: "Dentsply Sirona" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/NfssZInHWbB-uIzWVGsOk/dexis.png", alt: "Dexis" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/w_kXY6ptBXMDw4yOKy0db/dolce-and-gabbana.svg.png", alt: "Dolce & Gabbana" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/Ewt-hLs1jamQwJq00iGLr/depuy-synthes.jpg", alt: "DePuy Synthes" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/3rPnJO-SbYdEdKAOWloau/drunk-elephant-logo.png", alt: "Drunk Elephant" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/D9Ho8tk-5hDcSPaV9fPMp/dentalez.png", alt: "Dentalez" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/dejiB9Q8AbruPvKO2Lspb/endologix.png", alt: "Endologix" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/kwpDOKGeESUHrjhvcdB5L/ethicon.jpg", alt: "Ethicon" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/ZTfltK2id-xqCWT4hEpUr/edwards-lifesciences.png", alt: "Edwards Lifesciences" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/K3VoJUnLH4FG_OZ4I3tki/envista.png", alt: "Envista" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/md-TTIQp4W-hqO5v76SjV/hippeas-logo.png", alt: "Hippeas" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/Hx7iMB9elmHvPJ1gGwFeq/food-and-wine-logo-vector.png", alt: "Food & Wine" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/BF_CfFgLQC1Qrta_lhNCF/gu-logo.png", alt: "GU Energy" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/kjYEMEyc9jyJkVPZ8dDDy/fa-logotype.png", alt: "Foreign Affairs" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/dJp6JbsAccLU45b1kKoHr/express.png", alt: "Express" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/q8BrrifHWQosvx2lIqYuU/dexcel.png", alt: "Dexcel Pharma" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/oKXCkAa2eClL1YY6M9IBd/hu-friedy.png", alt: "Hu-Friedy" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/AMTaY9fW9V-R6QJL_HEep/glidewell.jpg", alt: "Glidewell" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/T00juf3me4Y7_m0f_Ttm4/hillrom.png", alt: "Hillrom" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/LbqHdtrBQx_mElRzAZQ2h/henry-schein.png", alt: "Henry Schein" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/0A--FrupeRZO7QEwJmTrj/hallmark-logo.svg.png", alt: "Hallmark" },
    { src: "https://assets.macaly-user-data.dev/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/JdvVn4D3YHuGjZ1rs48Zy/fresh-health.png", alt: "Proclaim Fresh" }
  ]

  // Shuffle function using Fisher-Yates algorithm
  const shuffleArray = (array: typeof logos) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Create randomized logos on component mount
  const [randomizedLogos, setRandomizedLogos] = useState<typeof logos>([])

  useEffect(() => {
    setRandomizedLogos(shuffleArray(logos))
  }, [])
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: "I've worked with PROOF Insights a few times as Actionable Research and always had a good experience. While I was at AVID, they helped us develop and field our first global brand tracking study. It was a complex effort and the PROOF team stuck with us and provided great counsel and support throughout the process. I highly recommend PROOF Insights!",
      name: "Thomas Ordahl",
      title: "Landor & Associates",
      initials: "TO",
      bgColor: "bg-proof-blue-100",
      textColor: "text-proof-blue-600"
    },
    {
      id: 2,
      rating: 5,
      quote: "PROOF Insights created a custom survey app for the Travel + Leisure World's Best Awards Survey over 5 years ago, and once built the process has been seamless throughout all subsequent years of fielding. The app offers a great deal of flexibility across all areas of the survey. The custom reporting tool with filtering enables us to slice-and-dice the data to our exact specifications with very little effort. Most important though is that the PROOF team are true partners, always responsive and offering thoughtful solutions as our survey needs continue to evolve with this project.",
      name: "Richard Zartarian",
      title: "Director, Content strategy and Insights, Dotdash Meredith",
      initials: "RZ",
      bgColor: "bg-proof-emerald-100",
      textColor: "text-proof-emerald-600"
    },
    {
      id: 3,
      rating: 5,
      quote: "I had the pleasure of working with David Cristofaro and Proof (Actionable Research) on a Conjoint pricing study in the Fiber Broadband industry. David and his team brought rigor and clarity to a complex project, delivering insights that were actionable and helped guide our strategy with confidence. Proof is a strong partner for high-quality, thoughtful research that makes a measurable impact.",
      name: "Julie Seff",
      title: "Vice President, Marketing, Bluepeak",
      initials: "JS",
      bgColor: "bg-proof-amber-100",
      textColor: "text-proof-amber-600"
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "Advanced Analytics Dashboard",
      subtitle: "Real-time insights at your fingertips"
    },
    {
      image: "https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "Strategic Market Research",
      subtitle: "Data-driven decision making"
    },
    {
      image: "https://images.pexels.com/photos/7947698/pexels-photo-7947698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "Comprehensive Market Analysis",
      subtitle: "Detailed insights for growth"
    },
    {
      image: "https://images.pexels.com/photos/7947715/pexels-photo-7947715.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "Competitive Intelligence",
      subtitle: "Stay ahead of the market"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Auto-advance every 15 seconds
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const testimonialTimer = setInterval(nextTestimonial, 20000)
    return () => clearInterval(testimonialTimer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" 
               style={{
                 backgroundImage: `url('https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jjdzbffced8ekhvw3oom8wsy/q9kc51zee7y9ple357s3an31/BBQGrPCiyzXeKU1SUbmIq/home.png')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
               }}>
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-proof-emerald-100 text-proof-emerald-700 border-proof-emerald-200 hover:bg-proof-emerald-100">
                  <Award className="w-4 h-4 mr-1" />
                  Market Research Excellence
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-proof-gray-900 leading-tight">
                  Transform Insights Into 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-proof-blue-600 to-proof-emerald-600 leading-[1.2]"> Strategic Advantage</span>
                </h1>
                <p className="text-xl text-proof-gray-600 leading-relaxed">
                  PROOF Insights delivers custom-crafted market research solutions that unlock deep audience insights, drive product innovation, and accelerate business growth through evidence-based decision making.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/solutions">
                  <Button size="lg" className="bg-proof-blue-600 hover:bg-proof-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                    <Brain className="w-5 h-5 mr-2" />
                    Explore our Solutions
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-proof-gray-300 text-proof-gray-700 hover:bg-proof-gray-50 px-8 py-4 text-lg">
                    <Users className="w-5 h-5 mr-2" />
                    Book a Consultation
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-proof-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-proof-emerald-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-proof-amber-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-proof-gray-600">Trusted by 200+ brands</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Carousel */}
      <section className="py-16 bg-gradient-to-br from-proof-blue-50 via-white to-proof-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-proof-gray-200 text-proof-gray-700 mb-4">
              <Building className="w-4 h-4 mr-1" />
              Trusted By
            </Badge>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-16 items-center">
              {/* Mixed portfolio of healthcare, consumer brands, and media companies */}
              {randomizedLogos.map((logo, index) => (
                <img 
                  key={index}
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-16 max-w-[160px] object-contain opacity-80 hover:opacity-100 transition-opacity" 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 mb-4">
              <Target className="w-4 h-4 mr-1" />
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">
              Comprehensive Research Solutions
            </h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              From brand strategy to product optimization, we provide the insights you need to make confident, data-driven decisions at every stage of your business journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Strategy and Market Discovery */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300 flex flex-col h-full">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center group-hover:bg-proof-blue-600 transition-colors duration-300">
                  <BarChart3 className="w-6 h-6 text-proof-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg text-proof-gray-900">Strategy and Market Discovery</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-proof-gray-600 mb-4">Comprehensive market research that uncovers opportunities, identifies risks, and maps the competitive landscape.</p>
                <ul className="space-y-2 text-sm text-proof-gray-600 mb-6 flex-grow">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Market Discovery & Opportunity Assessment</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Market Segmentation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Competitive Landscape Analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Brand Strategy Research</li>
                </ul>
                <Link href="/solutions/strategy" className="text-proof-blue-600 hover:text-proof-blue-700 font-medium text-sm inline-flex items-center mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 2 - Innovation and Growth */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300 flex flex-col h-full">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-proof-emerald-600 transition-colors duration-300">
                  <Lightbulb className="w-6 h-6 text-proof-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg text-proof-gray-900">Innovation and Growth</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-proof-gray-600 mb-4">Validate concepts, optimize products, and accelerate growth with research that reduces risk and maximizes market success.</p>
                <ul className="space-y-2 text-sm text-proof-gray-600 mb-6 flex-grow">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Concept Testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Package Testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Name Testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Product Testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Feature & Benefit Testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Pricing Research</li>
                </ul>
                <Link href="/solutions/innovation-growth" className="text-proof-emerald-600 hover:text-proof-emerald-700 font-medium text-sm inline-flex items-center mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 3 - Marketing and Messaging */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-amber-300 flex flex-col h-full">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-proof-amber-100 rounded-lg flex items-center justify-center group-hover:bg-proof-amber-600 transition-colors duration-300">
                  <Target className="w-6 h-6 text-proof-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg text-proof-gray-900">Marketing and Messaging</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-proof-gray-600 mb-4">Optimize your marketing campaigns and messaging to resonate with your target audience and maximize ROI.</p>
                <ul className="space-y-2 text-sm text-proof-gray-600 mb-6 flex-grow">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Messaging & Positioning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Ad Optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Ad Effectiveness</li>
                </ul>
                <Link href="/solutions/marketing-messaging" className="text-proof-amber-600 hover:text-proof-amber-700 font-medium text-sm inline-flex items-center mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 4 - Monitoring and Improving */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-teal-300 flex flex-col h-full">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-proof-teal-100 rounded-lg flex items-center justify-center group-hover:bg-proof-teal-600 transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 text-proof-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg text-proof-gray-900">Monitoring and Improving</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-proof-gray-600 mb-4">Track, measure, and continuously improve your brand performance, customer satisfaction, and market position.</p>
                <ul className="space-y-2 text-sm text-proof-gray-600 mb-6 flex-grow">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Brand Health Tracking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Customer Experience & Satisfaction</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Awareness & Usage</li>
                </ul>
                <Link href="/solutions/monitoring-improving" className="text-proof-teal-600 hover:text-proof-teal-700 font-medium text-sm inline-flex items-center mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 5 - CRM Databases */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-blue-300 flex flex-col h-full">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-proof-blue-100 rounded-lg flex items-center justify-center group-hover:bg-proof-blue-600 transition-colors duration-300">
                  <PieChart className="w-6 h-6 text-proof-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg text-proof-gray-900">CRM Databases</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-proof-gray-600 mb-4">Transform your customer data into actionable insights with advanced database analytics and predictive modeling.</p>
                <ul className="space-y-2 text-sm text-proof-gray-600 mb-6 flex-grow">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Retail Impact Factor</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />RFM Analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Predictive Modeling</li>
                </ul>
                <Link href="/solutions/crm-databases" className="text-proof-blue-600 hover:text-proof-blue-700 font-medium text-sm inline-flex items-center mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 6 - Private Equity */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-proof-gray-200 hover:border-proof-emerald-300 flex flex-col h-full">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-proof-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-proof-emerald-600 transition-colors duration-300">
                  <Building className="w-6 h-6 text-proof-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg text-proof-gray-900">Private Equity</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-proof-gray-600 mb-4">Support your investment decisions with comprehensive market research, due diligence insights, and post-acquisition strategies.</p>
                <ul className="space-y-2 text-sm text-proof-gray-600 mb-6 flex-grow">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Due Diligence Research</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Post-Deal Alignment</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-proof-emerald-500 mr-2" />Value Creation</li>
                </ul>
                <Link href="/solutions/private-equity" className="text-proof-emerald-600 hover:text-proof-emerald-700 font-medium text-sm inline-flex items-center mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose PROOF Insights */}
      <section className="py-20 bg-proof-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">
              OUR THREE PROMISES
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-proof-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-proof-amber-600 transition-colors duration-300">
                <Lightbulb className="w-8 h-8 text-proof-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">
                Custom-crafted research to meet your unique needs
              </h3>
              <p className="text-proof-gray-600">
                We create custom market research specifically designed for each engagement
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-proof-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-proof-blue-600 transition-colors duration-300">
                <Target className="w-8 h-8 text-proof-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">
                Findings that distill knowledge into impactful recommendations
              </h3>
              <p className="text-proof-gray-600">
                We will not overwhelm you with data. We translate data into actionable, business plan-ready insights.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-proof-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-proof-emerald-600 transition-colors duration-300">
                <Handshake className="w-8 h-8 text-proof-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-proof-gray-900 mb-4">
                Commitment to be your 'trusted advisor'
              </h3>
              <p className="text-proof-gray-600">
                We have earned our clients' trust through consistently exceeding their insights expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-20 bg-proof-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-proof-emerald-100 text-proof-emerald-700 mb-4">
              <Clock className="w-4 h-4 mr-1" />
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">
              Time-Refined Research Methodology
            </h2>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto">
              Our proven four-stage approach ensures every research project delivers actionable insights that drive real business results.
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-proof-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute -inset-2 bg-proof-blue-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-3">Discovery & Strategy</h3>
                <p className="text-proof-gray-600">Deep dive into your business objectives, target market, and research requirements to choose and customize the research approach and methodology.</p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-proof-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute -inset-2 bg-proof-emerald-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-3">Design & Development</h3>
                <p className="text-proof-gray-600">Custom research design with state of the art survey tools, sampling strategy, and  quality assurance protocols.</p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-proof-amber-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute -inset-2 bg-proof-amber-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-3">Data Collection</h3>
                <p className="text-proof-gray-600">Rigorous data collection using  real-time sample monitoring and quality controls.</p>
              </div>

              {/* Step 4 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-proof-teal-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <div className="absolute -inset-2 bg-proof-teal-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-proof-gray-900 mb-3">Insights & Action</h3>
                <p className="text-proof-gray-600">Advanced analytics and storytelling that transforms data into clear, actionable recommendations for growth and profitability.</p>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-proof-blue-300 via-proof-emerald-300 via-proof-amber-300 to-proof-teal-300 opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-proof-amber-100 text-proof-amber-700 mb-4">
              <Shield className="w-4 h-4 mr-1" />
              Client Success
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-proof-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
          </div>

          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="border-proof-gray-200 shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-proof-amber-400 text-proof-amber-400" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-proof-gray-700 mb-6 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center">
                          <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}>
                            <span className={`${testimonial.textColor} font-semibold text-lg`}>{testimonial.initialital}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-proof-gray-900">{testimonial.name}</p>
                            <p className="text-proof-gray-600">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white border border-proof-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-proof-gray-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-proof-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white border border-proof-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-proof-gray-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-proof-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-proof-blue-600 scale-110' 
                      : 'bg-proof-gray-300 hover:bg-proof-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-gradient-to-br from-proof-blue-600 to-proof-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Research Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our research approach can unlock the insights you need to drive meaningful business growth and competitive advantage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-proof-blue-600 hover:bg-proof-gray-50 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Brain className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
            </Link>
            <Link href="/resources/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-proof-blue-600 px-8 py-4 text-lg">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Case Studies
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="text-blue-100">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Quick Response</h3>
              <p className="text-sm">Get expert consultation within 24 hours</p>
            </div>
            <div className="text-blue-100">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-sm">5000+ successful research projects delivered</p>
            </div>
            <div className="text-blue-100">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-sm">Innovating in primary market research since 1989</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}










