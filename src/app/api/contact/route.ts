import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;
    if (!name || !email || !phone || !message) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }
    console.log("CONTACT FORM DATA:", {
      name,
      email,
      phone,
      message,
    });

    const data = await resend.emails.send({
      from: "Contact Team <hr@didymous.org>",

      to: "info@didymous.org",

      subject: "New Contact Inquiry",

      html: `
<div style="font-family: Arial, sans-serif; padding: 20px;">

  <h2 style="color:#065f46;">
    New Contact Inquiry
  </h2>

  <hr style="margin:15px 0;" />

  <table style="width:100%; border-collapse: collapse;">

    <tr>
      <td style="padding:8px; font-weight:bold;">Name</td>
      <td style="padding:8px;">${name}</td>
    </tr>

    <tr>
      <td style="padding:8px; font-weight:bold;">Email</td>
      <td style="padding:8px;">${email}</td>
    </tr>

    <tr>
      <td style="padding:8px; font-weight:bold;">Phone</td>
      <td style="padding:8px;">${phone}</td>
    </tr>

  </table>

  <div style="
    margin-top:20px;
    padding:15px;
    background:#f3f4f6;
    border-radius:10px;
  ">
    <strong>Message:</strong>
    <br /><br />
    ${message}
  </div>

</div>
`,
    });

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
      error,
    });
  }
}
