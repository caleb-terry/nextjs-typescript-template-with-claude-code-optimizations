import { ImageResponse } from "next/og";

export const alt = "Next.js App";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 64,
        background: "#0a0a0a",
        color: "#ededed",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <div style={{ fontSize: 80, fontWeight: 700 }}>Next.js App</div>
      <div style={{ fontSize: 32, opacity: 0.7 }}>Built with the Next.js TypeScript template</div>
    </div>,
    { ...size }
  );
}
