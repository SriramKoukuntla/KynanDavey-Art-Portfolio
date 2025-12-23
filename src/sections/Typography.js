import React, { useState } from 'react';

const Typography = () => {
  // Typography playground state
  const [playgroundText, setPlaygroundText] = useState('ABCDE FGHIJK LMNOP QRS TUVWXYZ');
  const [fontWeight, setFontWeight] = useState('400');
  const [fontStyle, setFontStyle] = useState('normal');
  const [fontSize, setFontSize] = useState(48);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.2);
  const [textColor, setTextColor] = useState('#d4af37');

  return (
    <section id="typography" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Typography Playground</h2>
        
        <div className="typography-playground">
          <p className="playground-subtitle">Test the Sandpaper2 font family</p>
          
          <div className="playground-container">
            <div className="playground-controls">
              <div className="control-group">
                <label htmlFor="playground-text">Text</label>
                <input
                  id="playground-text"
                  type="text"
                  value={playgroundText}
                  onChange={(e) => setPlaygroundText(e.target.value)}
                  className="playground-input"
                  placeholder="Enter text to preview"
                />
              </div>

              <div className="control-group">
                <label htmlFor="font-weight">Font Weight</label>
                <select
                  id="font-weight"
                  value={fontWeight}
                  onChange={(e) => {
                    setFontWeight(e.target.value);
                    if (e.target.value !== '400') {
                      setFontStyle('normal');
                    }
                  }}
                  className="playground-select"
                >
                  <option value="100">Thin</option>
                  <option value="400">Regular</option>
                  <option value="600">Semibold</option>
                  <option value="700">Bold</option>
                </select>
              </div>

              <div className="control-group">
                <label htmlFor="font-style">Font Style</label>
                <select
                  id="font-style"
                  value={fontStyle}
                  onChange={(e) => {
                    setFontStyle(e.target.value);
                    if (e.target.value === 'italic') {
                      setFontWeight('400');
                    }
                  }}
                  className="playground-select"
                  disabled={fontWeight !== '400'}
                >
                  <option value="normal">Normal</option>
                  <option value="italic">Italic</option>
                </select>
              </div>

              <div className="control-group">
                <label htmlFor="font-size">Font Size: {fontSize}px</label>
                <input
                  id="font-size"
                  type="range"
                  min="12"
                  max="120"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="playground-slider"
                />
              </div>

              <div className="control-group">
                <label htmlFor="letter-spacing">Letter Spacing: {letterSpacing}px</label>
                <input
                  id="letter-spacing"
                  type="range"
                  min="-5"
                  max="20"
                  step="0.5"
                  value={letterSpacing}
                  onChange={(e) => setLetterSpacing(Number(e.target.value))}
                  className="playground-slider"
                />
              </div>

              <div className="control-group">
                <label htmlFor="line-height">Line Height: {lineHeight}</label>
                <input
                  id="line-height"
                  type="range"
                  min="0.8"
                  max="3"
                  step="0.1"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(Number(e.target.value))}
                  className="playground-slider"
                />
              </div>

              <div className="control-group">
                <label htmlFor="text-color">Text Color</label>
                <input
                  id="text-color"
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="playground-color"
                />
              </div>
            </div>

            <div className="playground-preview">
              <div className="preview-label">Live Preview</div>
              <div
                className="preview-text"
                style={{
                  fontFamily: "'Sandpaper2', sans-serif",
                  fontWeight: fontWeight,
                  fontStyle: fontStyle,
                  fontSize: `${fontSize}px`,
                  letterSpacing: `${letterSpacing}px`,
                  lineHeight: lineHeight,
                  color: textColor,
                }}
              >
                {playgroundText || 'Enter text to preview'}
              </div>
              <div className="preview-info">
                <div className="info-item">
                  <span className="info-label">Font:</span>
                  <span className="info-value">Sandpaper2</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Weight:</span>
                  <span className="info-value">
                    {fontWeight === '100' ? 'Thin' : 
                     fontWeight === '400' ? 'Regular' : 
                     fontWeight === '600' ? 'Semibold' : 'Bold'}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Style:</span>
                  <span className="info-value">{fontStyle === 'italic' ? 'Italic' : 'Normal'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Size:</span>
                  <span className="info-value">{fontSize}px</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Letter Spacing:</span>
                  <span className="info-value">{letterSpacing}px</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Line Height:</span>
                  <span className="info-value">{lineHeight}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Typography;


