'use client';

import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';

export default function AdmissionsPage() {
  const [activeSection, setActiveSection] = useState('how-to-apply');

  const sections = [
    { id: 'how-to-apply', title: 'How to Apply' },
    { id: 'eligibility', title: 'Eligibility & Requirements' },
    { id: 'programs', title: 'Programs Available' },
    { id: 'tuition', title: 'Tuition & Payment' },
    { id: 'registration-form', title: 'Registration Form' },
  ];

  const getContent = () => {
    switch (activeSection) {
      case 'how-to-apply':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Joining the LIFELINK Community</h2>
            <p className="text-gray-700 mb-6">
              Joining the LIFELINK community is a straightforward process designed to ensure you are placed in the program that best fits your career goals. Follow these five steps to get started:
            </p>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Step 1: Program Selection & Inquiry</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Explore:</strong> Review our Course Catalog to identify the program that aligns with your interests (e.g., Medical Imaging, Digital Tech, or Academic Prep).</li>
                  <li>• <strong>Consult:</strong> If you are unsure which path to take, schedule a free career counseling session with our admissions officers via our website or in-person at our campus.</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Step 2: Online or In-Person Application</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Form Entry:</strong> Complete the LIFELINK Admission Form. You can do this online through our "Apply Now" portal or pick up a physical copy at our administrative office.</li>
                  <li>• <strong>Documentation:</strong> Prepare digital or physical copies of your required documents:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>○ Birth Certificate or valid ID (National ID/International Passport)</li>
                      <li>○ Previous academic transcripts or certificates (WAEC/NECO/Degree)</li>
                      <li>○ Two passport-sized photographs</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Step 3: Assessment & Interview</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Placement Test:</strong> Depending on your chosen program (especially for STEM and Medical Imaging), you may be required to take a basic aptitude test to determine your current level.</li>
                  <li>• <strong>Interview:</strong> Meet with a Department Head for a brief interview to discuss your learning objectives and schedule.</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Step 4: Admission Offer & Fee Payment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Letter of Admission:</strong> Successful candidates will receive an official Admission Offer Letter via email or hand-delivery.</li>
                  <li>• <strong>Securing Your Slot:</strong> Pay the non-refundable registration fee and tuition (either in full or via an approved installment plan) at any of our designated bank branches or through our secure online payment portal.</li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-600">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Step 5: Orientation & Commencement</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Registration Completion:</strong> Submit your proof of payment to the Bursary Department to receive your Student ID and Course Material Starter Pack.</li>
                  <li>• <strong>Orientation Day:</strong> Attend the mandatory orientation session to meet your instructors, tour the campus and receive your lecture timetable.</li>
                  <li>• <strong>Start Learning:</strong> Begin your journey toward mastering your new craft!</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Eligibility & Requirements</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Who Can Apply?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Students at Primary, Secondary, or Tertiary levels (for academic programs)</li>
                <li>• Professionals seeking specialized vocational training</li>
                <li>• Individuals with basic reading and writing skills</li>
                <li>• Passion for hands-on technical work and self-improvement</li>
                <li>• Commitment to complete the full program duration</li>
                <li>• Valid identification (Birth Certificate, National ID, or International Passport)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Required Documents</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Birth Certificate or valid ID (National ID/International Passport)</li>
                <li>• Previous academic transcripts or certificates (WAEC/NECO/Degree)</li>
                <li>• Two passport-sized photographs</li>
                <li>• Proof of address (utility bill or letter from local government)</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Session Options</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Morning Session:</strong> 9:00 AM – 1:00 PM</li>
                <li>• <strong>Afternoon Session:</strong> 2:00 PM – 6:00 PM</li>
                <li>• <strong>Weekend Session:</strong> Saturday classes for working professionals</li>
              </ul>
            </div>
          </div>
        );

      case 'programs':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Programs Available</h2>
            <p className="text-gray-700 mb-6">
              LIFELINK Center offers six comprehensive departments with specialized tracks to match your career aspirations:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-3">1. Medical Imaging & Health Sciences</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• MRI Technology (₦250,000)</li>
                  <li>• CT Scan Operations (₦250,000)</li>
                  <li>• Radiology Technician Program (₦200,000)</li>
                  <li>• Nuclear Medicine Technology (₦200,000)</li>
                  <li>• Health Extension Services (₦120,000)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-3">2. Digital Technology & Data Science</h3>
                <ul className="space-y-2 text-purple-100">
                  <li>• AI Literacy (₦150,000)</li>
                  <li>• Data Science & Analytics (₦150,000)</li>
                  <li>• Computer Literacy (₦40,000)</li>
                  <li>• Graphic Design (₦80,000)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-3">3. STEM & Academic Preparatory</h3>
                <ul className="space-y-2 text-amber-100">
                  <li>• Counting to Calculus (₦60,000)</li>
                  <li>• JAMB & WAEC Excellence (₦45,000 per term)</li>
                  <li>• Applied Sciences (₦60,000)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-gray-500 to-zinc-700 p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-3">4. Engineering & Technical Services</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Computer Repair & Maintenance (₦100,000)</li>
                  <li>• Electronic Device Repair (₦100,000)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-lime-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-3">5. Modern Agriculture</h3>
                <ul className="space-y-2 text-green-100">
                  <li>• Smart Farm Technician (₦130,000)</li>
                  <li>• Agricultural Extension Technician (₦130,000)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-3">6. Vocational Arts & Cosmetology</h3>
                <ul className="space-y-2 text-pink-100">
                  <li>• Tailoring & Fashion Design (₦90,000)</li>
                  <li>• Cosmetology & Aesthetic Science (₦90,000)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Program Duration</h3>
              <p className="text-gray-700">
                Most programs range from 2-9 months depending on intensity and specialization. Medical Imaging programs are typically 6-8 months, while vocational arts and basic digital skills can be completed in 2-4 months.
              </p>
            </div>
          </div>
        );

      case 'tuition':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Tuition & Payment</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">One-Time Administrative Fees (All Departments)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-gray-800 border-b">Item</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-800 border-b">Fee (₦)</th>
                      <th className="px-4 py-3 text-left font-bold text-gray-800 border-b">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b">Application & Prospectus</td>
                      <td className="px-4 py-3 border-b font-medium">10,000</td>
                      <td className="px-4 py-3 border-b">Non-refundable; covers processing and manual</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b">Registration & ID Card</td>
                      <td className="px-4 py-3 border-b font-medium">25,000</td>
                      <td className="px-4 py-3 border-b">Annual fee for student records and campus access</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b">Library & Digital Resource</td>
                      <td className="px-4 py-3 border-b font-medium">15,000</td>
                      <td className="px-4 py-3 border-b">Access to e-books, journals, and high-speed Wi-Fi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Departmental Tuition Rates</h3>
              <p className="text-gray-700 mb-4"><em>Note: Fees cover one full training cycle/semester</em></p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800 mb-2">Medical Imaging & Health Sciences</h4>
                  <p className="text-gray-700 mb-2"><em>Includes lab consumables and safety gear</em></p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• MRI/CT Scan Technician: ₦250,000</li>
                    <li>• Radiology/Nuclear Medicine Tech: ₦200,000</li>
                    <li>• Health Extension Services: ₦120,000</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-gray-800 mb-2">Digital Technology & Data Science</h4>
                  <p className="text-gray-700 mb-2"><em>Includes software licenses and server access</em></p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Data Science/AI Literacy: ₦150,000</li>
                    <li>• Graphic Design: ₦80,000</li>
                    <li>• Basic Computer Literacy: ₦40,000</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-bold text-gray-800 mb-2">STEM & Academic Preparatory</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• JAMB/WAEC Intensive (Per Term): ₦45,000</li>
                    <li>• Advanced Calculus/Applied Sciences: ₦60,000</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-gray-500">
                  <h4 className="font-bold text-gray-800 mb-2">Engineering & Technical Services</h4>
                  <p className="text-gray-700 mb-2"><em>Includes toolkits and component sets</em></p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Computer & Device Repair: ₦100,000</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-gray-800 mb-2">Modern Agriculture</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Smart Farm/Agricultural Extension: ₦130,000</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-gray-800 mb-2">Vocational Arts & Cosmetology</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Fashion Design/Cosmetology: ₦90,000</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Policy</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-gray-800 mb-2">Full Payment Discount</h4>
                  <p className="text-gray-700">5% discount if tuition is paid in full before the start of the session.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-bold text-gray-800 mb-2">Installment Plan</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 60% upon admission</li>
                    <li>• 40% mid-session (before final assessments)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'registration-form':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Student Registration Form</h2>
            <p className="text-gray-700 mb-6">
              Please complete all sections in BLOCK LETTERS. This form must be submitted along with your required documents.
            </p>

            <div className="bg-white border-2 border-dashed rounded-xl p-8 mb-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">SECTION A: PERSONAL BIO-DATA</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-700 mb-1">Full Name (Surname First):</label>
                      <div className="border-b-2 border-gray-300 pb-2 text-gray-400">________________________________________________</div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-1">Date of Birth:</label>
                        <div className="border-b-2 border-gray-300 pb-2 text-gray-400">____/____/________</div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Gender:</label>
                        <div className="flex space-x-4">
                          <span className="text-gray-400">[] Male</span>
                          <span className="text-gray-400">[] Female</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Nationality:</label>
                        <div className="border-b-2 border-gray-300 pb-2 text-gray-400">________________</div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">State of Origin:</label>
                      <div className="border-b-2 border-gray-300 pb-2 text-gray-400">________________________________________________</div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Residential Address:</label>
                      <div className="border-b-2 border-gray-300 pb-2 text-gray-400">________________________________________________</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-1">Phone Number:</label>
                        <div className="border-b-2 border-gray-300 pb-2 text-gray-400">________________</div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Email:</label>
                        <div className="border-b-2 border-gray-300 pb-2 text-gray-400">________________</div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Highest Qualification:</label>
                      <div className="flex flex-wrap gap-4 mt-1">
                        <span className="text-gray-400">[] SSCE/WAEC</span>
                        <span className="text-gray-400">[] OND/HND</span>
                        <span className="text-gray-400">[] B.Sc./B.A</span>
                        <span className="text-gray-400">[] Other: _______</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">SECTION B: PROGRAM SELECTION</h3>
                  <p className="text-gray-700 mb-3">Select your primary department and specific course of study.</p>
                  <div className="space-y-2">
                    <div className="text-gray-400">
                      [] Dept. of Medical Imaging & Health Sciences<br />
                      • Course: _________________________________________________
                    </div>
                    <div className="text-gray-400">
                      [] Dept. of Digital Technology & Data Science<br />
                      • Course: _________________________________________________
                    </div>
                    <div className="text-gray-400">
                      [] Dept. of STEM & Academic Preparatory<br />
                      • Course: _________________________________________________
                    </div>
                    <div className="text-gray-400">
                      [] Dept. of Engineering / Vocational Arts / Agriculture<br />
                      • Course: _________________________________________________
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 mb-2">Preferred Session:</label>
                    <div className="flex space-x-4 text-gray-400">
                      <span>[] Morning (9AM–1PM)</span>
                      <span>[] Afternoon (2PM–6PM)</span>
                      <span>[] Weekend</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">SECTION C: EMERGENCY CONTACT INFORMATION</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-700 mb-1">Next of Kin Name:</label>
                      <div className="border-b-2 border-gray-300 pb-2 text-gray-400">________________________________________________</div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Relationship to Student:</label>
                      <div className="border-b-2 border-gray-300 pb-2 text-gray-400">________________________________________________</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-1">Phone Number 1:</label>
                        <div className="border-b-2 border-gray-300 pb-2 text-gray-400">________________</div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Phone Number 2:</label>
                        <div className="border-b-2 border-gray-300 pb-2 text-gray-400">________________</div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Contact Address:</label>
                      <div className="border-b-2 border-gray-300 pb-2 text-gray-400">________________________________________________</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">SECTION D: DECLARATION</h3>
                  <div className="border-2 border-gray-300 p-4 rounded-lg bg-gray-50">
                    <p className="text-gray-700 mb-4">
                      I, <span className="border-b-2 border-gray-300 px-2">____________________________________</span>, 
                      certify that the information provided above is correct. I agree to abide by the rules and regulations of LIFELINK Center upon my admission.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-1">Student Signature:</label>
                        <div className="border-b-2 border-gray-300 pb-2 text-gray-400">_________________________</div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Date:</label>
                        <div className="border-b-2 border-gray-300 pb-2 text-gray-400">____/____/________</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">FOR OFFICIAL USE ONLY</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Admission Number:</label>
                  <div className="border-b-2 border-gray-300 pb-2 text-gray-400">__________________</div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Date of Registration:</label>
                  <div className="border-b-2 border-gray-300 pb-2 text-gray-400">_______________</div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-gray-700 mb-1">Officer Name:</label>
                  <div className="border-b-2 border-gray-300 pb-2 text-gray-400">______________________</div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Signature:</label>
                  <div className="border-b-2 border-gray-300 pb-2 text-gray-400">_________________________</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Submit Your Application</h3>
              <p className="text-blue-100 mb-6">
                Complete this form and submit it along with your required documents to begin your journey at LIFELINK Center.
              </p>
              <a
                href="/admissions#how-to-apply"
                className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Start Your Application
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Reusable Sidebar */}
      <Sidebar
        title="Admissions"
        items={sections}
        activeId={activeSection}
        onItemSelect={setActiveSection}
      />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            {getContent()}
          </div>

          {/* Quick Contact Section */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-3">Need Assistance?</h3>
            <p className="text-green-100 mb-4">
              Our admissions team is ready to help you with any questions about programs, fees, or the application process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/234XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-700 rounded-lg font-bold hover:bg-green-50 transition-colors"
              >
                📱 WhatsApp: +234 XXX XXXX
              </a>
              <a
                href="mailto:admissions@lifelinkcenter.edu.ng"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-700 text-white rounded-lg font-bold hover:bg-green-800 transition-colors"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}