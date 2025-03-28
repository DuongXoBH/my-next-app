import Ably from "ably";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const clientId = searchParams.get("clientId") || "ably-nextjs-demo"
    const client = new Ably.Realtime(process.env.ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId });
    return Response.json(tokenRequestData);
};