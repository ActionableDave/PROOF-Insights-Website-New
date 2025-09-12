import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import Header from '@/components/Header';
import { Shield, Mail, Users, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = siteMetadata['/privacy'];

export default function PrivacyPage() {
  console.log("Privacy page rendered");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proof-blue-50 to-proof-emerald-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-proof-blue-100 text-proof-blue-700 border-proof-blue-200 hover:bg-proof-blue-100">
              <Shield className="w-4 h-4 mr-1" />
              Privacy & Security
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-proof-gray-900 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-proof-gray-600 max-w-3xl mx-auto leading-relaxed">
              PROOF Insights is committed to ensuring the privacy of our survey participants. 
              Your privacy and the confidentiality of your personal information is our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* How we use information */}
            <Card className="mb-8 border-proof-gray-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-6 h-6 text-proof-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-proof-gray-900 m-0">How we use the information we collect</h2>
                </div>
                <div className="space-y-4 text-proof-gray-700">
                  <p>
                    When you participate in one of our surveys, PROOF uses your responses along with other participants' responses to inform clients about people's attitudes about their products or services. As part of the research process, your responses are analyzed in aggregate with all the other respondents' information, and your individual responses are not linked to your personally identifiable information without your permission. We are interested only in your opinions and will never try to sell you anything.
                  </p>
                  <p>
                    If we collect your postal address in any survey, it is to mail any survey-related incentives. We never share your e-mail or postal address without your permission.
                  </p>
                  <p>
                    We use your e-mail address to send you invitations to participate in new Internet surveys and to contact you with messages if you would happen to win a sweepstakes. When you participate in one of our Internet surveys, our servers only record the time you start and finish our survey. We may place "cookies" on your computer when you take our surveys; these "cookies" are used only to ensure survey security and do not collect or extract any personal information from your computer.
                  </p>
                  <p>
                    In phone surveys, your phone number has been either randomly generated or selected from a list provided by a reputable sample house or by our client. PROOF is not subject to The Do-Not-Call Implementation Act of 2003 or the FCC's National Do Not Call Registry. As a market research firm, we are interested only in your opinions and will never try to sell you anything. Your responses in our phone surveys are never linked to your phone number.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How we protect information */}
            <Card className="mb-8 border-proof-gray-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-6 h-6 text-proof-emerald-600 mr-3" />
                  <h2 className="text-2xl font-bold text-proof-gray-900 m-0">How we protect your information</h2>
                </div>
                <div className="space-y-4 text-proof-gray-700">
                  <p>
                    We have put in place appropriate physical, electronic, and managerial procedures to safeguard and help prevent unauthorized access, maintain data security, and correctly use the information we collect online, by telephone, or by mail.
                  </p>
                  <p>
                    We may occasionally need to share your information with third parties, our agents or sub-contractors, who perform services on our behalf such as reward fulfillment, web hosting, data analysis, and the like. When we use such agents or sub-contractors, we require these parties to comply with our privacy policy and utilize all appropriate security and confidentiality measures (i.e., a "chain of trust").
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Child Privacy */}
            <Card className="mb-8 border-proof-gray-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-6 h-6 text-proof-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-proof-gray-900 m-0">Child Privacy</h2>
                </div>
                <div className="space-y-4 text-proof-gray-700">
                  <p>
                    PROOF abides by the Children's Online Privacy Protection Act (COPPA) legislated by the Federal Trade Commission (FTC) in 1998. We do not knowingly contact children under the age of 18. If you are a parent whose child has been contacted by PROOF and wish for your child not to have future correspondences, please contact us at{' '}
                    <a href="mailto:unsubscribe@proofinsights.com?subject=Unsubscribe" className="text-proof-blue-600 hover:text-proof-blue-700 underline">
                      unsubscribe@proofinsights.com
                    </a>{' '}
                    and we will gladly remove your child's e-mail address and/or phone number from all future e-mail and phone surveys.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Market Research Ethics */}
            <Card className="mb-8 border-proof-gray-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-6 h-6 text-proof-emerald-600 mr-3" />
                  <h2 className="text-2xl font-bold text-proof-gray-900 m-0">Market Research Ethics</h2>
                </div>
                <div className="space-y-4 text-proof-gray-700">
                  <p>
                    PROOF limits the use of its information for legitimate market research purposes only. PROOF is active in supporting the following organizations created to uphold ethical survey research:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Insights Association{' '}
                      <a href="http://www.marketingresearch.org" target="_blank" rel="noopener noreferrer" className="text-proof-blue-600 hover:text-proof-blue-700 underline">
                        [www.marketingresearch.org]
                      </a>
                    </li>
                    <li>
                      American Marketing Association (AMA){' '}
                      <a href="http://www.ama.org" target="_blank" rel="noopener noreferrer" className="text-proof-blue-600 hover:text-proof-blue-700 underline">
                        [www.ama.org]
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-8 border-proof-gray-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Mail className="w-6 h-6 text-proof-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-proof-gray-900 m-0">Your Rights</h2>
                </div>
                <div className="space-y-4 text-proof-gray-700">
                  <p>
                    Should you wish to unsubscribe and stop receiving survey requests, please send a blank e-mail to{' '}
                    <a href="mailto:unsubscribe@proofinsights.com?subject=Unsubscribe" className="text-proof-blue-600 hover:text-proof-blue-700 underline">
                      unsubscribe@proofinsights.com
                    </a>{' '}
                    from the e-mail account under which you are subscribed as a survey participant. If you have additional questions or would like to correct, amend or delete information we have collected about you, please contact us at{' '}
                    <a href="mailto:info@proofinsights.com?subject=Information" className="text-proof-blue-600 hover:text-proof-blue-700 underline">
                      info@proofinsights.com
                    </a>{' '}
                    anytime.
                  </p>
                  <p>
                    PROOF Insights commits to resolve complaints about our consumer's privacy and our collection or use of consumer's personal information. PROOF Insights commits to the fact that all information collected is relevant for the purpose for which it is used and to the extent necessary PROOF Insights takes all reasonable steps to ensure data is reliable for its intended use, accurate, complete and current.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
