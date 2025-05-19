// import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const resend = new Resend(RESEND_API_KEY);

serve(async (req) => {
  const { email } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "welcome@cybersafe.com",
      to: email,
      subject: "Welcome to CyberSafe!",
      html: "<h1>You're in!</h1><p>Thanks for signing up at CyberSafe.</p>",
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
});
