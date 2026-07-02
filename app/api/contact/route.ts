import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EnquiryPayload {
  name: string;
  email: string;
  project?: string;
  budget?: string;
  message: string;
}

const FROM_NAME = 'MDS Studio';
const FROM_EMAIL = process.env.SMTP_USER || 'no-reply@mdsstudio.london';

function esc(s = ''): string {
  return String(s).replace(/[&<>"]/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string)
  );
}

function row(label: string, value?: string): string {
  if (!value) return '';
  return `
  <tr>
    <td style="width:120px;color:#9a9aa0;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;padding:14px 20px;border-bottom:1px solid #f1f1f3;vertical-align:top;">${esc(label)}</td>
    <td style="color:#1d1d1f;font-size:15px;line-height:1.55;padding:14px 20px;border-bottom:1px solid #f1f1f3;">${esc(value)}</td>
  </tr>`;
}

function autoReplyHtml(d: EnquiryPayload): string {
  const first = esc((d.name || 'there').split(' ')[0]);
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#e9e7e2;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e9e7e2;padding:32px 12px;">
   <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:6px;overflow:hidden;font-family:Georgia,'Times New Roman',serif;">
      <tr><td style="background:#000000;padding:34px 40px;">
        <div style="font-family:Georgia,serif;font-size:34px;color:#ffffff;letter-spacing:.01em;">Milinda De Silva<span style="color:#0070f3;">.</span></div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#9a9aa0;margin-top:8px;">MDS Studio &middot; Software &amp; Web Developer</div>
      </td></tr>
      <tr><td style="padding:40px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#0070f3;margin-bottom:14px;">Message received</div>
        <h1 style="font-family:Georgia,serif;font-weight:400;font-size:27px;line-height:1.25;margin:0 0 20px;color:#000000;">Thanks for reaching out, ${first}.</h1>
        <p style="font-size:16px;line-height:1.7;color:#3a3a3c;margin:0 0 18px;">Your message just landed with me and I&rsquo;ll personally read every word. I usually reply within one business day &mdash; often sooner. In the meantime, here&rsquo;s a copy of what you sent, for your records.</p>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e7;border-radius:8px;margin:26px 0;">
          <tr><td colspan="2" style="background:#f1f1f3;padding:12px 20px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6b6b70;border-bottom:1px solid #e5e5e7;">Your submission</td></tr>
          ${row('Name', d.name)}
          ${row('Email', d.email)}
          ${row('Project', d.project)}
          ${row('Budget', d.budget)}
          ${row('Message', d.message)}
        </table>

        <p style="font-size:15px;line-height:1.7;color:#6b6b70;margin:0 0 18px;">If any of the above looks off, just reply to this email and let me know.</p>

        <div style="margin-top:28px;padding-top:24px;border-top:1px solid #e5e5e7;">
          <div style="font-family:Georgia,serif;font-size:19px;color:#000000;">&mdash; Milinda</div>
          <div style="font-size:14px;color:#6b6b70;margin-top:3px;">MDS Studio &middot; London</div>
        </div>
      </td></tr>
      <tr><td style="background:#f1f1f3;padding:22px 40px;font-size:12px;line-height:1.6;color:#9a9aa0;">
        <span style="font-family:'JetBrains Mono',monospace;letter-spacing:.04em;">MDS STUDIO</span> &middot; London, UK<br/>
        <a href="https://mdsstudio.london" style="color:#6b6b70;text-decoration:none;">mdsstudio.london</a> &middot; This is an automated confirmation. Reply any time &mdash; it reaches me directly.
      </td></tr>
    </table>
   </td></tr>
  </table>
  </body></html>`;
}

function notificationHtml(d: EnquiryPayload): string {
  const when = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#e9e7e2;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e9e7e2;padding:32px 12px;">
   <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:6px;overflow:hidden;font-family:Georgia,'Times New Roman',serif;">
      <tr><td style="background:#000000;padding:34px 40px;">
        <div style="font-family:Georgia,serif;font-size:34px;color:#ffffff;letter-spacing:.01em;">New enquiry<span style="color:#0070f3;">.</span></div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#9a9aa0;margin-top:8px;">Via mdsstudio.london contact form</div>
      </td></tr>
      <tr><td style="padding:40px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#0070f3;margin-bottom:14px;">Action needed &middot; reply to lead</div>
        <h1 style="font-family:Georgia,serif;font-weight:400;font-size:27px;line-height:1.25;margin:0 0 20px;color:#000000;">${esc(d.name || 'Someone')} wants to work with you.</h1>
        <p style="font-size:16px;line-height:1.7;color:#3a3a3c;margin:0 0 18px;">A new enquiry came through the site. Hit reply and it goes straight to them &mdash; their address is set as the reply-to.</p>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e7;border-radius:8px;margin:26px 0;">
          <tr><td colspan="2" style="background:#f1f1f3;padding:12px 20px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6b6b70;border-bottom:1px solid #e5e5e7;">Enquiry details</td></tr>
          ${row('Name', d.name)}
          ${row('Email', d.email)}
          ${row('Project', d.project)}
          ${row('Budget', d.budget)}
        </table>

        ${d.message ? `<div style="background:#f8f8f9;border-left:2px solid #0070f3;padding:16px 20px;font-style:italic;color:#3a3a3c;line-height:1.65;font-size:15px;">&ldquo;${esc(d.message)}&rdquo;</div>` : ''}

        <p style="margin:24px 0 4px;"><a href="mailto:${esc(d.email)}" style="display:inline-block;background:#000000;color:#ffffff;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.08em;text-transform:uppercase;padding:15px 30px;border-radius:999px;">Reply to ${esc((d.name || 'them').split(' ')[0])} &rarr;</a></p>

        <p style="font-size:15px;line-height:1.7;color:#6b6b70;margin:20px 0 0;">Received ${when}</p>
      </td></tr>
      <tr><td style="background:#f1f1f3;padding:22px 40px;font-size:12px;line-height:1.6;color:#9a9aa0;">
        <span style="font-family:'JetBrains Mono',monospace;letter-spacing:.04em;">DELIVERY</span> &middot; Sent from ${esc(FROM_EMAIL)} &rarr; your inbox. Visitors never see your personal address.
      </td></tr>
    </table>
   </td></tr>
  </table>
  </body></html>`;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, project, budget, message }: EnquiryPayload = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const ownerInbox = process.env.OWNER_INBOX;
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !ownerInbox) {
      console.error('Mailer misconfigured: SMTP_HOST / SMTP_USER / SMTP_PASS / OWNER_INBOX required');
      return NextResponse.json({ error: 'Mailer not configured' }, { status: 500 });
    }

    const port = Number(process.env.SMTP_PORT) || 465;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const from = `"${FROM_NAME}" <${FROM_EMAIL}>`;
    const data: EnquiryPayload = { name, email, project, budget, message };

    const notify = transporter.sendMail({
      from,
      to: ownerInbox,
      replyTo: `"${name}" <${email}>`,
      subject: `New enquiry - ${name}${project ? ' - ' + project : ''}`,
      html: notificationHtml(data),
      text: `New enquiry from ${name} <${email}>\nProject: ${project || '-'}\nBudget: ${budget || '-'}\n\n${message}`,
    });

    const reply = transporter.sendMail({
      from,
      to: `"${name}" <${email}>`,
      replyTo: ownerInbox,
      subject: 'Thanks - your message reached MDS Studio',
      html: autoReplyHtml(data),
      text: `Hi ${(name || 'there').split(' ')[0]},\n\nThanks for reaching out - I'll personally read your message and reply within one business day.\n\n- Milinda, MDS Studio`,
    });

    await Promise.all([notify, reply]);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Mailer error:', error);
    return NextResponse.json({ error: 'Could not send' }, { status: 500 });
  }
}
