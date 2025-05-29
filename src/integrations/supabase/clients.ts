import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://huztedyjmuxuxwcpniec.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1enRlZHlqbXV4dXh3Y3BuaWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTA0ODIsImV4cCI6MjA2MzA2NjQ4Mn0.544_9A7ZUNiT3dgEsW56yGnoVaBlIkcgfXmsCoFn-tk";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);