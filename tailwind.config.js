const liquidPreset = require('@emdgroup-liquid/liquid/dist/css/tailwind-preset.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  presets: [liquidPreset],
}
