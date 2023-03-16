import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://cpoerlgihciisgdbvech.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwb2VybGdpaGNpaXNnZGJ2ZWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwOTk5NjMsImV4cCI6MTk5MjY3NTk2M30.zHiGh21UxWZjUFDLX49bv3nrf1pT87yfYkYF-BvVkbk"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;