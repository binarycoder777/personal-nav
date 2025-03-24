import { supabase } from '../script/supabase';

export async function searchWebsites({
  title = '',
  category = '',
  page = 1,
  pageSize = 10
}) {
  try {
    let query = supabase
      .from('t_nav_website')
      .select('*', { count: 'exact' });

    // 构建查询条件
    let conditions = [];
    
    if (title) {
      conditions.push(`title.ilike.%${title}%`);
    }
    
    if (category) {
      conditions.push(`category.ilike.%${category}%`);
    }

    // 如果有查询条件，使用 or 组合它们
    if (conditions.length > 0) {
      query = query.or(conditions.join(','));
    }

    // 添加分页
    const start = (page - 1) * pageSize;
    query = query
      .range(start, start + pageSize - 1)
      .order('id', { ascending: false });

    console.log('Supabase query:', query); // 调试日志

    const { data, error, count } = await query;

    if (error) {
      throw error;
    }

    return {
      data,
      total: count,
      currentPage: page,
      pageSize,
      totalPages: Math.ceil(count / pageSize)
    };
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
} 