'use client';

import { withAuth } from '@/lib/withAuth';

function StudentPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome! Here you can view your courses, grades, and profile.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">My Courses</h2>
            <p className="text-sm text-gray-500 mt-1">View enrolled programs</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Grades</h2>
            <p className="text-sm text-gray-500 mt-1">Check your performance</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Profile</h2>
                                       gray-500 mt-1">Updat                                                                    </div>
  );
}

export default withAuth(StudentPage);
