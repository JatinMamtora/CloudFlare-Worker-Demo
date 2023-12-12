addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
const html = `<!DOCTYPE html>
  <body>
    <h1>Hello World</h1>
    <p>This is the Demo Page Sir.</p>
  </body>`;
async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}
