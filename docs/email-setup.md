# MDS Studio — email setup guide

How to make enquiry emails **send from `no-reply@mdsstudio.london`** but **land privately in your Gmail** — and not go to spam.

---

## The idea in one line
Your server sends mail *as* your domain (`no-reply@mdsstudio.london`), addresses your own copy *to* Gmail, and sets **Reply-To** to the visitor. Visitors only ever see the domain address; your Gmail stays hidden.

```
FROM:      no-reply@mdsstudio.london     ← what everyone sees
TO (you):  you@gmail.com                 ← your private copy
REPLY-TO:  the visitor's email           ← hitting "Reply" goes to the lead
```

---

## 1. Get an authenticated sender for your domain
You **cannot** just type `no-reply@mdsstudio.london` and expect it to deliver — mailbox providers will mark unauthenticated domain mail as spam or reject it. Pick one path:

**Option A — your domain's email host (simplest).**
If you already have email on `mdsstudio.london` (Zoho, Fastmail, Google Workspace, your registrar's mailbox…), create a `no-reply@mdsstudio.london` mailbox or alias and use that host's SMTP details:
- Host / port from their docs (usually `465` SSL or `587` STARTTLS)
- User: `no-reply@mdsstudio.london`
- Pass: an **app password** (not your login password)

**Option B — a transactional email provider (best deliverability).**
Resend, Postmark, Brevo, Mailgun, SendGrid — all have free tiers and SMTP. You verify the domain once in their dashboard; they hand you SMTP creds. Best inbox placement and analytics.

---

## 2. Add DNS records so you don't hit spam
Wherever you manage `mdsstudio.london` DNS, add the three your provider gives you:

| Record | Purpose |
|---|---|
| **SPF** (TXT) | Authorises that provider to send as your domain |
| **DKIM** (TXT/CNAME) | Cryptographically signs your mail |
| **DMARC** (TXT) | Ties it together; start with `p=none` |

A minimal DMARC record to start:
```
_dmarc.mdsstudio.london   TXT   "v=DMARC1; p=none; rua=mailto:you@gmail.com"
```
Without SPF + DKIM, expect the spam folder. With them, you land in the inbox.

---

## 3. Getting your copy into Gmail — two ways
**Direct (easiest):** set `OWNER_INBOX=you@gmail.com`. The notification is addressed straight to your Gmail. Done — visitors never see it because it's the `to:`, not the `from:`.

**Via a domain address (tidier):** create `hello@mdsstudio.london` and set it to **forward to your Gmail**, then `OWNER_INBOX=hello@mdsstudio.london`. You can even add it to Gmail as a "Send mail as" identity so you reply *from* the domain too. Either works — direct is fine.

> "Secret" = your Gmail is only ever in the `To`/`Reply-To` of mail **you receive**. It is never in the `From` of anything a visitor sees.

---

## 4. Wire it up
1. `npm i nodemailer`
2. Drop `mailer.js` into your backend.
3. Set environment variables (in `.env`, Vercel/Netlify project settings, etc.):
   ```
   SMTP_HOST=smtp.your-provider.com
   SMTP_PORT=465
   SMTP_USER=no-reply@mdsstudio.london
   SMTP_PASS=your-app-password
   OWNER_INBOX=you@gmail.com
   ```
4. Call `sendEnquiryEmails({ name, email, project, budget, message })` from your form route. The example Express route is at the bottom of `mailer.js`.

That's it — the visitor gets the branded thank-you, you get the lead in Gmail, and Reply just works.

---

## 5. Field names
The templates read: `name`, `email`, `project`, `budget`, `message`. `name`/`email`/`message` are required; `project`/`budget` are optional and hide themselves if empty. Rename in `mailer.js` if your form uses different keys.

## Quick sanity checklist
- [ ] `no-reply@mdsstudio.london` mailbox/alias exists and authenticates over SMTP
- [ ] SPF, DKIM, DMARC added to DNS and verified in the provider dashboard
- [ ] `OWNER_INBOX` set to your Gmail (or a domain address that forwards there)
- [ ] Sent yourself a test — check it's inbox, not spam
- [ ] Replying to the notification opens a message *to the visitor*
