export async function handleSearch(query: string) {
  // 实现你的搜索逻辑
  // 例如：调用搜索 API 或在客户端过滤内容
  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const results = await response.json();
  } catch (error) {
    console.error('Error handling search:', error);
  }
} 