import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, type, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Tritium Global <noreply@mail.tritiumglbl.com>',
      to: ['support@tritiumglbl.com'],
      replyTo: email,
      subject: `[${type}] New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || '—'}\nType: ${type}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
