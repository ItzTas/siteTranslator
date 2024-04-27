async function fetchHTMl(url) {
  try {
    const siteURL = URL(url);
    const response = await fetch(url);
  } catch (error) {
    return `${error.message}: ${url}`;
  }
}
