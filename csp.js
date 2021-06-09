module.exports = {
  local: {
    "default-src": ["*", "data:", "'unsafe-inline'"],
  },
  production: {
    "default-src": [
      "'self'",
      "*",
      "data:",
      "https:",
      "https://www.streamparticles.io",
    ],
    "font-src": ["'self'", "https:"],
    "img-src": ["*"],
    "media-src": ["*"],
    "script-src": [
      "'self'",
      "'unsafe-inline'",
      "https://www.youtube.com",
      "https://www.streamparticles.io",
    ],
    "style-src": [
      "'self'",
      "'unsafe-inline'",
      "https://fonts.googleapis.com",
      "https://www.streamparticles.io",
    ],
    "script-src-elem": [
      "'unsafe-inline'",
      "*",
      "https://www.youtube.com",
      "https://www.streamparticles.io",
    ],
    "style-src-elem": [
      "'unsafe-inline'",
      "https:",
      "https://www.streamparticles.io",
    ],
    "connect-src": [
      "*",
      "https://www.youtube.com",
      "https://www.streamparticles.io",
    ],
  },
};
