import Ably from "ably";

export async function GET(request) {
    console.log("🚀 ~ GET ~ request:", request)
    const client = new Ably.Realtime(process.env.ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'ably-nextjs-demo' });
    return Response.json(tokenRequestData);
};