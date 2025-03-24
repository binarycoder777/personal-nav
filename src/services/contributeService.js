import { supabase } from '../script/supabase';

export async function submitContribute(data) {
  try {
    const { error } = await supabase
      .from('t_nav_contribute')
      .insert(data);

    if (error) {
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Contribute error:', error);
    throw error;
  }
} 