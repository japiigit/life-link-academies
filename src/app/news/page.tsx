export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800">News & Updates</h1>
        <p className="mt-2 text-gray-600">
          Stay informed about Life Link Academies’ latest programs, events, and student success stories.
        </p>

        {/* News Items */}
        <div className="mt-8 space-y-8">
          {/* News Item 1 */}
          <article className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-blue-700">
              New Digital Skills Cohort Starts February 2026
            </h2>
            <p className="mt-2 text-sm text-gray-500">January 25, 2026</p>
            <p className="mt-3 text-gray-600">
              We’re excited to announce our next intake for the Digital Skills program! 
              This 5-month course covers computer repair, networking, and digital literacy — 
              with hands-on training and job placement support.
            </p>
            <a href="#" className="mt-3 inline-block text-secondary-500 hover:underline font-medium">
              Read more →
            </a>
          </article>

          {/* News Item 2 */}
          <article className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-blue-700">
              C2C Program Launches in 3 Secondary Schools
            </h2>
            <p className="mt-2 text-sm text-gray-500">January 18, 2026</p>
            <p className="mt-3 text-gray-600">
              Our Counting to Calculus (C2C) STEM initiative is now live in Makurdi, Ogun, and Kogi. 
              Students are using AI-powered lessons to master math and physics.
            </p>
            <a href="#" className="mt-3 inline-block text-secondary-500 hover:underline font-medium">
              Read more →
            </a>
          </article>

          {/* News Item 3 */}
          <article>
            <h2 className="text-xl font-semibold text-blue-700">
              Meet Our 2025 Graduate: Aisha’s Repair Shop Success
            </h2>
            <p className="mt-2 text-sm text-gray-500">December 10, 2025</p>
            <p className="mt-3 text-gray-600">
              After completing our Electronic Repairs program, Aisha opened her own phone repair shop 
              in Abuja. She now employs two assistants and serves over 50 customers weekly.
            </p>
            <a href="#" className="mt-3 inline-block text-secondary-500 hover:underline font-medium">
              Read more →
            </a>
          </article>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/apply"
            className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md font-medium"
          >
            Apply to Join Our Next Cohort
          </a>
        </div>
      </div>
    </div>
  );
}