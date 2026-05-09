import { NextRequest, NextResponse } from "next/server";
import { BUSINESS } from "@/lib/constants";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? "a1b2c3d4e5f67890abcdef1234567890";
const KEY_LOCATION = `${BUSINESS.website}/${INDEXNOW_KEY}.txt`;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const urlList: string[] = body.urls ?? [];

  if (urlList.length === 0) {
    return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
  }

  const payload = {
    host: new URL(BUSINESS.website).hostname,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return NextResponse.json({ status: res.status, ok: res.ok });
}
