async function fetchHTML(url) {
  let html;
  try {
    const response = await fetch(url);
    html = await response.text();
    if (response.status >= 400) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw error;
  }
  return html;
}

module.exports = {
    fetchHTML,
}
