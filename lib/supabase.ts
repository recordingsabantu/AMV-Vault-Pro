import { createClient } from '@supabase/supabase-js'

// These use the keys you just added to Netlify
const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(url, key)
export default supabase
