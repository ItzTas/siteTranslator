export async function fetchHTML(url) {
  let html;
  try {
    const response = await fetch(url);
    html = await response.text();
  } catch (error) {
    throw error;
  }
  return html;
}
