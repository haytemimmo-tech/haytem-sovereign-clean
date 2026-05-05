export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
    });
  }
}
