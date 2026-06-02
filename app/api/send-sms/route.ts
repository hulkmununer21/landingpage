import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

// Initialize Twilio client
const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const fromNumber = process.env.TWILIO_PHONE_NUMBER

if (!accountSid || !authToken || !fromNumber) {
  throw new Error('Twilio configuration is missing')
}

const client = twilio(accountSid, authToken)

interface SMSRequest {
  phoneNumber: string
  message: string
  trackingId?: string
}

interface SMSResponse {
  success: boolean
  messageId?: string
  error?: string
}

export async function POST(request: NextRequest): Promise<NextResponse<SMSResponse>> {
  try {
    const body: SMSRequest = await request.json()

    // Validate input
    if (!body.phoneNumber || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Phone number and message are required' },
        { status: 400 }
      )
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^\+?1?\d{9,15}$/
    if (!phoneRegex.test(body.phoneNumber.replace(/\D/g, ''))) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Message length limit (SMS is typically 160 characters)
    if (body.message.length > 1600) {
      return NextResponse.json(
        { success: false, error: 'Message is too long (max 1600 characters)' },
        { status: 400 }
      )
    }

    // Send SMS via Twilio
    const message = await client.messages.create({
      body: body.message,
      from: fromNumber,
      to: body.phoneNumber,
    })

    console.log(`SMS sent successfully. SID: ${message.sid}`)

    return NextResponse.json({
      success: true,
      messageId: message.sid,
    })
  } catch (error) {
    console.error('Error sending SMS:', error)

    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'

    return NextResponse.json(
      { success: false, error: `Failed to send SMS: ${errorMessage}` },
      { status: 500 }
    )
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { error: 'Use POST method to send SMS' },
    { status: 405 }
  )
}
