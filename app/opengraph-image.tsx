import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "TAKALAM - Speak English with Confidence";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Logo Text */}
          <div
            style={{
              fontSize: 80,
              fontWeight: "bold",
              color: "white",
              marginBottom: 20,
              letterSpacing: "-2px",
            }}
          >
            TAKALAM
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 48,
              color: "white",
              marginBottom: 30,
              opacity: 0.95,
            }}
          >
            Speak English with Confidence
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Personalized 1-to-1 English coaching for adults
          </div>

          {/* Features */}
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 50,
            }}
          >
            {["1-on-1 Sessions", "Flexible Schedule", "100% Online"].map(
              (feature) => (
                <div
                  key={feature}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    padding: "12px 24px",
                    borderRadius: 30,
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  <span>✓</span>
                  <span>{feature}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          takalam.ma
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
