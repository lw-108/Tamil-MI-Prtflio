import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import ProjectInquiryEmail from "@/emails/ProjectInquiryEmail";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = render(
      ProjectInquiryEmail({
        name: body.name,
        email: body.email,
        company: body.company,
        phone: body.phone,
        message: body.message,
      })
    );

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_FROM, // send to yourself
      subject: `New Project Inquiry from ${body.name}`,
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
