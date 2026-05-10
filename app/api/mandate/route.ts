import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = body.fullName || body.name || "";
const email = body.email || "";
const phone = body.phone || "";

const investmentBudget = body.investmentBudget || "";
const yourInterest = body.yourInterest || "";
const city = body.city || "Eldorado";

const identity = body.identity || "";
const channel = body.channel || "";
const capital = body.capital || "";
const mandateType = body.mandate_type || "";
const notes = body.notes || "";

const isGatewayForm = Boolean(identity || channel || capital || mandateType);

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Mandate Desk <noreply@haytemsovereign.com>",
      to: [
        "haytemsovereign@gmail.com",
        "mandate@haytemsovereign.com"
      ],
      subject: isGatewayForm
  ? "MANDATE CLASSIFICATION - CONFIDENTIAL"
  : `New Strategic Mandate Request / ${city}`,
      html: `
        <h2>${isGatewayForm ? "MANDATE CLASSIFICATION - CONFIDENTIAL" : `New Strategic Mandate Request / ${city}`}</h2>

  <p><strong>Full Name:</strong> ${fullName}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>

  ${identity ? `<p><strong>Identity Type:</strong> ${identity}</p>` : ""}
  ${channel ? `<p><strong>Secure Communication Channel:</strong> ${channel}</p>` : ""}
  ${capital ? `<p><strong>Capital Commitment:</strong> ${capital}</p>` : ""}
  ${mandateType ? `<p><strong>Mandate Type:</strong> ${mandateType}</p>` : ""}

  ${investmentBudget ? `<p><strong>Investment Budget (€):</strong> ${investmentBudget}</p>` : ""}
  ${yourInterest ? `<p><strong>Your Interest (City / Asset Type):</strong> ${yourInterest}</p>` : ""}

  ${notes ? `<p><strong>Confidential Brief:</strong><br/>${notes}</p>` : ""}
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}
