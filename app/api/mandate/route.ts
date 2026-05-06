import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json({ success: false }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await req.json();

    const fullName = body.fullName || body["Full Name"] || "";
    const email = body.email || body["Email"] || "";
    const phone = body.phone || body.phoneNumber || body["Country Code + Phone Number"] || "";
    const investmentBudget =
      body.investmentBudget || body.budget || body["Investment Budget (€)"] || "";
    const yourInterest =
      body.yourInterest || body.interest || body["Your Interest (City / Asset Type)"] || "";

    const city =
      body.city || body.citySource || body.city_source || body.pageCity || "Eldorado";

    await resend.emails.send({
      from: "Mandate Desk <mandate@haytemsovereign.com>",
      to: [
        "mandate@haytemsovereign.com",
        "haytemsovereign@gmail.com"
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
