
// This file is a placeholder for Supabase integration
// To fully implement this, you'll need to:
// 1. Connect your Lovable Project to Supabase using the Supabase button on the top right
// 2. Create a 'leaderboard' table in your Supabase database with columns:
//    - id (auto-generated)
//    - first_name (text)
//    - last_name (text)
//    - score (integer)
//    - time_taken (text)
//    - created_at (timestamp)

// Example implementation once connected to Supabase:

import { createClient } from '@supabase/supabase-js'

// These values will be provided by the Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function saveScore(userData) {
  const { data, error } = await supabase
    .from('leaderboard')
    .insert([
      { 
        first_name: userData.firstName,
        last_name: userData.lastName,
        score: userData.score,
        time_taken: userData.timeTaken
      }
    ])
  console.log('Data:', data)
  if (error) {
    console.error('Error saving score:', error)
    return { success: false, error }
  }
  return { success: true, data }
}

export async function getLeaderboard() {
  const { data, error } = await supabase
    .from('leaderboard')
    .select('*')
    .order('score', { ascending: false })
  
  if (error) {
    console.error('Error fetching leaderboard:', error)
    return []
  }
  
  return data.map((entry, index) => ({
    id: entry.id,
    rank: index + 1,
    name: `${entry.first_name} ${entry.last_name}`,
    score: entry.score,
    timeTaken: entry.time_taken
  }))
}
