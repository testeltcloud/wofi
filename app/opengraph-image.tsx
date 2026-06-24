import { ImageResponse } from "next/og";

export const alt =
  "Woofi — Conectividade internacional para agências de viagem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#070a18",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* aurora glow */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(109,94,252,0.55), transparent 60%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(24,211,230,0.45), transparent 60%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: 160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(242,95,208,0.4), transparent 60%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background:
                "linear-gradient(135deg, #18d3e6, #6d5efc, #f25fd0)",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 40, fontWeight: 700 }}>Woofi</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            <span>A viagem é do passageiro.</span>
            <span>A <span className="text-[#2f6bff]">conectividade</span> é nossa.</span>
          </div>
          <div style={{ fontSize: 32, color: "rgba(255,255,255,0.7)" }}>
            eSIM internacional com cobertura em mais de 165 países — para agências de viagem
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
