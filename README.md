# FitGauge - Precision Fitness Calculators

A precision-focused fitness and health calculator web application built with HTML, CSS, and JavaScript.

## Features

- **25+ Calculators** across 6 categories
- **100% Client-side** - No data leaves your device
- **Clean, Instrument-style UI** - Professional design
- **Fast & Responsive** - Works on any device
- **Privacy-first** - No tracking, no cookies

## Calculator Categories

1. **Body Measurement** - BMI, Ideal Weight, Body Fat, Lean Mass, Waist ratios
2. **Energy & Metabolism** - BMR, TDEE, Calorie Needs, Weight Loss Timeline
3. **Nutrition** - Protein, Macros, Water Intake, Meal Frequency
4. **Fitness & Performance** - 1RM, Heart Rate Zones, Calories Burned, Running Pace
5. **Goal & Planning** - Weight Gain, Fat Loss, Rebound Prevention
6. **Insights** - Body Shape, Somatotype, Fitness Age

## Quick Start

### Local Development

```bash
# Open in browser
open index.html

# Or use a simple server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deployment

#### GitHub Pages (Free)

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/fitgauge.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Source: Deploy from main branch
```

#### Vercel (Free)

```bash
npm i -g vercel
vercel
```

## Project Structure

```
fitgauge/
├── index.html              # Main landing page
├── assets/
│   ├── styles.css          # Global styles
│   └── app.js              # Shared JavaScript (future)
└── calculators/
    ├── bmi.html            # Body Mass Index
    ├── bmr.html            # Basal Metabolic Rate
    ├── body-fat.html       # Body Fat Percentage
    └── ...                 # More calculators
```

## Adding New Calculators

1. Copy `calculators/bmi.html` as template
2. Update the calculator logic in `<script>`
3. Add link to `index.html` in appropriate category
4. Test in browser

## Technologies

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **JavaScript (ES6+)** - No frameworks needed
- **Google Fonts (Inter)** - Clean typography

## Privacy

All calculations run **100% in your browser**. No data is sent to any server. No cookies. No tracking.

## License

MIT License - Feel free to use and modify.

---

Built with precision. Designed for trust.
