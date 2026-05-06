import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = body.fullName || "";
    const email = body.email || "";
    const phone = body.phone || "";
    const investmentBudget = body.investmentBudget || "";
    const yourInterest = body.yourInterest || "";
    const city = body.city || "Eldorado";

    await resend.emails.send({
      from: "Mandate Desk <mandate@haytemsovereign.com>",
      to: [
        "haytemsovereign@gmail.com",
        "mandate@haytemsovereign.com"
      ],
      subject: `New Strategic Mandate Request / ${city}`,
      html: `
        <h2>New Strategic Mandate Request / ${city}</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country Code + Phone Number:</strong> ${phone}</p>
        <p><strong>Investment Budget (€):</strong> ${investmentBudget}</p>
        <p><strong>Your Interest (City / Asset Type):</strong> ${yourInterest}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}
