import { supabase } from '../../integrations/supabase/clients';

export const sendWelcomeEmail = async (email: string, username: string) => {
  try {
    // Get the current session before making the API call
    const { data: sessionData } = await supabase.auth.getSession();
    
    const response = await fetch('https://huztedyjmuxuxwcpniec.supabase.co/functions/v1/send-welcome-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionData?.session?.access_token}`,
      },
      body: JSON.stringify({ email, username }),
    });
    
    if (!response.ok) {
      console.error('Failed to send welcome email');
    }
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
};

export const sendConfirmationEmail = async (email: string, username: string) => {
  try {
    // Get the current session before making the API call
    const { data: sessionData } = await supabase.auth.getSession();
    
    const response = await fetch('https://huztedyjmuxuxwcpniec.supabase.co/functions/v1/send-confirmation-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionData?.session?.access_token}`,
      },
      body: JSON.stringify({ email, username }),
    });
    
    if (!response.ok) {
      console.error('Failed to send confirmation email');
    }
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
};
