import { createClient } from "@supabase/supabase-js";

const supabaseUrl=process.env.https://qzzromitqdxzgrmbammz.supabase.co!;
const supabaseKey=process.env.sb_publishable_MKB4URL3gP425GKbz9Kzyw_YK0cyp27!;

export const supabase = createClient(supabaseUrl, supabaseKey);