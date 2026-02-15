import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Takalam English Center - Online English Courses in Morocco";
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
              fontSize: 42,
              color: "white",
              marginBottom: 30,
              opacity: 0.95,
            }}
          >
            Online English Courses in Morocco
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
            Affordable courses • Live sessions • Certified teachers
          </div>

          {/* Features */}
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 50,
            }}
          >
            {["Private & Group", "All Levels", "100% Online"].map(
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
          takalamenglish.ma
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
