module.exports = {
  rootDir: "src",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  coverageDirectory: "../coverage",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!*.d.ts",
    "!**/domain/**",
    "!root.component.tsx",
    "!g2d2-dtmoney.tsx",
  ],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "single-spa-react/parcel": "single-spa-react/lib/cjs/parcel.cjs",
    axios: "axios/dist/node/axios.cjs",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
