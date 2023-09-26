import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://mllikodjsetjfixqcmii.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sbGlrb2Rqc2V0amZpeHFjbWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyMDI3MzgsImV4cCI6MjAwOTc3ODczOH0.H86dac0w2v7GNqo39NZ8P7uoUtqYTz6fd_rkLDonbzI')