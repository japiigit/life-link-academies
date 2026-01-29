export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800">Our Programs</h1>
        <p className="mt-4 text-gray-600">
          Choose a pathway that fits your goals — from hands-on technical skills to AI-powered STEM education.
        </p>
        
        <div className="mt-8 grid gap-6 md:grid-cols-1">
          {/* Digital Skills */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-700">
              <a href="/programs/digital-skills" className="hover:underline">
                Digital Skills
              </a>
            </h2>
            <p className="mt-2 text-gray-600">
              Computer repair, networking, and IT support training for immediate employment or self-employment.
            </p>
            <a 
              href="/programs/digital-skills" 
              className="mt-3 inline-block text-blue-600 hover:underline text-sm"
            >
              Learn more →
            </a>
          </div>

          {/* Electronic Repairs */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-700">
              <a href="/programs/electronic-repairs" className="hover:underline">
                Electronic Repairs
              </a>
            </h2>
            <p className="mt-2 text-gray-600">
              Master smartphone, TV, and appliance repair to launch your own workshop or join a service center.
            </p>
            <a 
              href="/programs/electronic-repairs" 
              className="mt-3 inline-block text-blue-600 hover:underline text-sm"
            >
              Learn more →
            </a>
          </div>

          {/* Counting to Calculus (C2C) */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-700">
              <a href="/programs/c2c-programs" className="hover:underline">
                Counting to Calculus (C2C)
              </a>
            </h2>
            <p className="mt-2 text-gray-600">
              AI-powered STEM curriculum for high school students — from basic math to advanced calculus and physics.
            </p>
            <a 
              href="/programs/c2c-programs" 
              className="mt-3 inline-block text-blue-600 hover:underline text-sm"
            >
              Learn more →
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/admissions"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
          >
            Apply to Any Program
          </a>
        </div>
      </div>
    </div>
  );
}