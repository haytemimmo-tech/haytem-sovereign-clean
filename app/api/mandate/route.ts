import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json({ success: false, error: 'Missing API key' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await req.json();

    const { name, email, phone, notes } = body;

    await resend.emails.send({
      from: 'Mandate Desk <mandate@haytemsovereign.com>',
      to: ['mandate@haytemsovereign.com'],
      subject: 'New Strategic Mandate Request',
      html: `
        <h2>New Strategic Mandate Request</h2>
        <p><strong>Name:</strong> ${name || ''}</p>
        <p><strong>Email:</strong> ${email || ''}</p>
        <p><strong>Phone:</strong> ${phone || ''}</p>
        <p><strong>Notes:</strong> ${notes || ''}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}
