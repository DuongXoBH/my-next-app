export async function GET() {
  const rapidApiKey = process.env.RAPIDAPI_KEY;

  if (!rapidApiKey) {
    return new Response("Missing RAPIDAPI_KEY", { status: 500 });
  }

  const res = await fetch("https://real-time-news-data.p.rapidapi.com/", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
    } as HeadersInit,
  });

  const data = await res.json();
  return Response.json(data);
}
