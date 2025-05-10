import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const tmapKey = process.env.NEXT_PUBLIC_TMAP_API_KEY;

    if (!tmapKey) {
        return res.status(500).json({ error: "API Key is missing" });
    }

    console.log("Query Params:", req.query);

    const { endX, endY, endName } = req.query;

    const url = `https://apis.openapi.sk.com/tmap/routes?version=1&endX=${endX}&endY=${endY}&endName=${endName}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            appKey: tmapKey,
        },
    });

    const data = await response.json();
    res.status(200).json(data);
}
