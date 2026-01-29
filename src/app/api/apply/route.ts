import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  
  try {
    const body = await request.json();
    const { full_name, email, phone, age, program, state, message } = body;

    // Validate required fields
    if (!full_name || !phone || !program) {
      return NextResponse.json(
        { error: 'Full name, phone, and program are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('applications')
      .insert([
        { full_name, email, phone, age, program, state, message }
      ])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true,  data[0] },
      { status: 200 }
    );
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json(
      { error: 'Invalid request format' },
      { status: 400 }
    );
  }
}