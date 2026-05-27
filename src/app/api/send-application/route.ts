import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Receive FormData
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const message = formData.get("message") as string;

    // Resume File
    const resume = formData.get("resume") as File;

    let attachments = [];

    // If file uploaded
    if (resume) {
      const arrayBuffer = await resume.arrayBuffer();

      const buffer = Buffer.from(arrayBuffer);

      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    const data = await resend.emails.send({
      from: "HR Team <hr@didymous.org>",

      to: "idchshrikant@gmail.com",

      subject: `New Job Application - ${position}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          
          <h1 style="color: #065f46;">
            New Job Application Received
          </h1>

          <hr />

          <p><strong>Full Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Position Applied:</strong> ${position}</p>

          <p><strong>Message:</strong></p>

          <div style="
            background: #f3f4f6;
            padding: 15px;
            border-radius: 10px;
            margin-top: 10px;
          ">
            ${message}
          </div>

        </div>
      `,

      attachments,
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