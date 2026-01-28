'use client';

import { withAuth } from '@/lib/withAuth';

function StaffPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold text-gray-800">Staff Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage students, courses, and reports.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Student Directory</h2>
            <p className="text-sm text-gray-500 mt-1">View and manage enrolled students</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Course Management</h2>
            <p className="text-sm text-gray-500 mt-1">Update course content and schedules</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(StaffPage);
