import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactNotification {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  message: string;
  submissionType: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, businessName, message, submissionType }: ContactNotification = await req.json();

    if (!name || !email || !message) {
      throw new Error("Missing required fields: name, email, message");
    }

    // Log the submission for now. When RESEND_API_KEY is added, this will send emails.
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (resendApiKey) {
      const { Resend } = await import("npm:resend@4.0.0");
      const resend = new Resend(resendApiKey);

      const { error } = await resend.emails.send({
        from: "LedgerScan Pro <notifications@ledgerscanpro.com>",
        to: ["support@ledgerscanpro.com"],
        subject: `New ${submissionType === 'demo' ? 'Demo Request' : 'Contact Form'} from ${name}`,
        html: `
          <h2>New ${submissionType === 'demo' ? 'Demo Request' : 'Contact Submission'}</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
            ${phone ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>` : ''}
            ${businessName ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Business</td><td style="padding:8px;border:1px solid #ddd">${businessName}</td></tr>` : ''}
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Type</td><td style="padding:8px;border:1px solid #ddd">${submissionType}</td></tr>
          </table>
        `,
      });

      if (error) {
        console.error("Email send error:", error);
        // Don't throw — form submission already saved to DB
      } else {
        console.log("Notification email sent successfully");
      }
    } else {
      console.log("RESEND_API_KEY not configured. Contact submission logged:", {
        name, email, phone, businessName, submissionType,
        message: message.substring(0, 100),
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
