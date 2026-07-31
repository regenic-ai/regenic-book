import { ImageResponse } from "next/og";

export const alt = "Regenic: How to Build an AI-Native Organization";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "76px 82px",
        display: "flex",
        color: "#0A0A0A",
        background: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderTop: "5px solid #2D7A25",
        }}
      >
        <div
          style={{
            paddingTop: "34px",
            display: "flex",
            justifyContent: "space-between",
            color: "#2D7A25",
            fontSize: 28,
            letterSpacing: "0.08em",
          }}
        >
          <span>REGENIC.AI</span>
          <span>ORGANIZATIONAL INTELLIGENCE · LIVING EDITION</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 112, fontWeight: 700, lineHeight: 1 }}>
            REGENIC
          </span>
          <span style={{ marginTop: 28, color: "#59615A", fontSize: 42 }}>
            How to Build an AI-Native Organization
          </span>
        </div>
        <div
          style={{
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #D5DBD6",
            color: "#59615A",
            fontSize: 25,
          }}
        >
          <span>Knowledge is abundant. Judgment is scarce.</span>
          <span>regenic.ai</span>
        </div>
      </div>
    </div>,
    size,
  );
}
