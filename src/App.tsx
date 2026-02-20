import './App.css'

function App() {
  return (
    <div className="page">
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-grid" />

      <main className="shell">
        <header className="hero">
          <p className="eyebrow">Personal Stylist</p>
          <h1>Style That Fits You Perfectly</h1>
          <p className="subcopy">
            Upload your photo and body details to receive tailored fit and item
            recommendations.
          </p>
        </header>

        <section className="panel">
          <h2>Body Profile</h2>
          <p className="hint">Enter the basics to start your personalized styling.</p>

          <form className="form">
            <label className="field">
              <span>Your Photo</span>
              <div className="upload">
                <input type="file" accept="image/*" />
                <div className="upload-ui">
                  <div className="upload-icon">+</div>
                  <div className="upload-text">
                    <strong>Upload Photo</strong>
                    <span>Front-facing photos work best</span>
                  </div>
                </div>
              </div>
            </label>

            <div className="row">
              <label className="field">
                <span>Gender</span>
                <div className="segmented">
                  <label className="segment">
                    <input type="radio" name="gender" defaultChecked />
                    <span>Woman</span>
                  </label>
                  <label className="segment">
                    <input type="radio" name="gender" />
                    <span>Man</span>
                  </label>
                  <label className="segment">
                    <input type="radio" name="gender" />
                    <span>Non-binary</span>
                  </label>
                </div>
              </label>
              <label className="field">
                <span>Height (cm)</span>
                <input type="number" placeholder="e.g., 170" min={90} max={230} />
              </label>
              <label className="field">
                <span>Weight (kg)</span>
                <input type="number" placeholder="e.g., 58" min={25} max={200} />
              </label>
            </div>

            <button className="cta" type="button">
              Start Style Matching
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
