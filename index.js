// index.js

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const upstreamUrl = `https://jxvcjgwvfcuvwecbvhcvywqvugvedvcsxhgvchgaevyhdcv.vpsccp.workers.dev${url.pathname}${url.search}`;

  // Forward the request to the VLESS server
  const response = await fetch(upstreamUrl, request);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}
