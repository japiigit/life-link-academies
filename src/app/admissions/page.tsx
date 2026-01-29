export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800">Admissions</h1>
        <p className="mt-2 text-gray-600">
          Start your journey to becoming a skilled technician. No prior experience needed!
        </p>

        {/* Eligibility */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-blue-700">Who Can Apply?</h2>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>• Ages 16–35</li>
            <li>• Basic reading and writing skills</li>
            <li>• Passion for hands-on technical work</li>
            <li>• Commitment to complete the full program</li>
          </ul>
        </section>

        {/* Programs Offered */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-blue-700">Programs Available</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-medium">Digital Skills</h3>
              <p className="text-sm text-gray-600 mt-1">Computer repair, networking, digital tools</p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-medium">Electronic Repairs</h3>
              <p className="text-sm text-gray-600 mt-1">Phones, TVs, home appliances</p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-medium">C2C Programs</h3>
              <p className="text-sm text-gray-600 mt-1">AI-powered STEM for high school students</p>
            </div>
          </div>
        </section>

        {/* Tuition & Payment */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-blue-700">Tuition & Payment</h2>
          <p className="mt-2 text-gray-600">
            Affordable fees with flexible payment plans:
          </p>
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <p className="font-medium">₦85,000 per program (4–6 months)</p>
            <p className="text-sm text-gray-700 mt-1">
              Pay 50% to start, 50% by week 6. Tools and materials included.
            </p>
          </div>
        </section>

        {/* How to Apply */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-blue-700">How to Apply</h2>
          <ol className="mt-3 space-y-3 text-gray-600 list-decimal pl-5">
            <li>Contact us via WhatsApp or email</li>
            <li>Attend a short orientation session (in-person or online)</li>
            <li>Pay initial fee to secure your spot</li>
            <li>Start class on your assigned date!</li>
          </ol>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/234XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              📱 WhatsApp Us
            </a>
            <a
              href="mailto:admissions@lifelinkacademies.edu"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            >
              ✉️ Email Admissions
            </a>
          </div>
        </section>

        {/* Note */}
        <div className="mt-10 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <p className="text-yellow-800">
            <strong>Note:</strong> Classes fill quickly. Secure your spot early!
          </p>
        </div>
      </div>
    </div>
  );
}