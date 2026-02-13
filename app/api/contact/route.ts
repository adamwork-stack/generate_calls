import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send email using a service like SendGrid, Resend, or Nodemailer
    // 2. Save to a database
    // 3. Send to a CRM like HubSpot, Salesforce, etc.
    // 4. Send a notification (Slack, Discord, etc.)

    // Example: Log the submission (replace with actual integration)
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // Example email service integration (uncomment and configure):
    /*
    const emailService = new EmailService();
    await emailService.send({
      to: 'your-email@example.com',
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
      `
    });
    */

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
