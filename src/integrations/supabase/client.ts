// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vgifvqtiwjxtxfqqepwg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnaWZ2cXRpd2p4dHhmcXFlcHdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4MTQ1NzcsImV4cCI6MjA1NTM5MDU3N30.U-upvbY43KcP-34DR15nVssuFCSYwWa53B4OCHinQew";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);