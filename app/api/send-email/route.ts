import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid
const sendgridApiKey = process.env.SENDGRID_API_KEY
const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'support@bluehorizonco.com'
const fromName = process.env.SENDGRID_FROM_NAME || 'Blue Horizon'

if (!sendgridApiKey) {
  throw new Error('SendGrid API key is missing')
}

sgMail.setApiKey(sendgridApiKey)

interface EmailRequest {
  toEmail: string
  toName?: string
  subject: string
  htmlContent: string
  textContent?: string
  trackingId?: string
}

interface EmailResponse {
  success: boolean
  messageId?: string
  error?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<EmailResponse>> {
  try {
    const body: EmailRequest = await request.json()

    // Validate input
    if (!body.toEmail || !body.subject || !body.htmlContent) {
      return NextResponse.json(
        { success: false, error: 'toEmail, subject, and htmlContent are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.toEmail)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Prepare email message
    const msg = {
      to: body.toEmail,
      from: {
        email: fromEmail,
        name: fromName,
      },
      subject: body.subject,
      html: body.htmlContent,
      text: body.textContent,
      replyTo: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'support@bluehorizonco.com',
      headers: {
        'X-Tracking-ID': body.trackingId || 'none',
      },
    }

    // Send email via SendGrid
    const response = await sgMail.send(msg)

    console.log(`Email sent successfully. Message ID: ${response[0].headers['x-message-id']}`)

    return NextResponse.json({
      success: true,
      messageId: response[0].headers['x-message-id'],
    })
  } catch (error) {
    console.error('Error sending email:', error)

    let errorMessage = 'Unknown error occurred'

    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json(
      { success: false, error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    )
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { error: 'Use POST method to send email' },
    { status: 405 }
  )
}
