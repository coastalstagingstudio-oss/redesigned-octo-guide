export default function Page() {
  const teal = "#0E9BA4";
  const navy = "#173A5E";
  const seafoam = "#E6F3F3";
  const sand = "#F6EFE7";
  const btnStyle: React.CSSProperties = {
    background: teal,
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: 700,
    letterSpacing: 0.2,
  };
  return (
    <main>
      <section
        style={{
          padding: "64px 20px",
          background: `linear-gradient(180deg, ${seafoam}, #ffffff)`,
          borderBottom: `1px solid ${seafoam}`,
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: teal, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>
            Coastal Aesthetic • Worldwide
          </div>
          <h1 style={{ color: navy, fontSize: 48, margin: "16px 0 8px" }}>
            Coastal Staging Studio
          </h1>
          <p style={{ color: "#334155", fontSize: 18 }}>
            High‑quality virtual home staging. Fast 24–48 hr turnaround. Realistic, buyer‑ready images.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:usseryken@gmail.com?subject=New%20Order%20—%20Coastal%20Staging%20Studio&body=Hi%2C%20I%27d%20like%20to%20order%20virtual%20staging.%20Rooms%3A%20___.%20Style%3A%20Coastal%2FModern%2Fetc.%20Needed%20by%3A%20___.">
              <button style={btnStyle}>Submit Order via Email</button>
            </a>
            <a href="#pricing">
              <button style={{ ...btnStyle, background: "transparent", color: teal, border: `2px solid ${teal}` }}>
                View Pricing
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="pricing" style={{ padding: "48px 20px", background: sand }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: navy }}>Simple Pricing</h2>
          <ul style={{ lineHeight: 1.9, color: "#334155" }}>
            <li>Basic Virtual Staging — <b>$35</b> per image</li>
            <li>Premium Custom Style — <b>$60</b> per image</li>
            <li>STR / Airbnb Pack — <b>$299</b> flat (up to 8 images)</li>
          </ul>
          <p style={{ fontSize: 14, color: "#475569" }}>
            Pay button will appear after Stripe activation. For now, orders are processed via email.
          </p>
        </div>
      </section>

      <footer style={{ padding: "24px 20px", background: navy, color: "white", textAlign: "center" }}>
        © {new Date().getFullYear()} Coastal Staging Studio — Virtual Home Staging
      </footer>
    </main>
  );
}
