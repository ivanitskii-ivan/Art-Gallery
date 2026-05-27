async function apiPost(url, data) {
  const response = await fetch(url, {
    method: "POST",
    body: data,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.text();
}

export default apiPost ;