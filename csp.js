module.exports = {
  local: {
    "default-src": ["*", "'unsafe-inline'"],
  },
  production: {
    "default-src": ["'self'", "*", "data:", "https:"],
    "font-src": ["'self'", "https:"],
    "img-src": ["*"],
    "media-src": ["*"],
    "script-src": ["'self'", "'unsafe-inline'"],
    "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    "script-src-elem": ["'unsafe-inline'", "*"],
    "style-src-elem": ["'unsafe-inline'", "https:"],
    "connect-src": ["*"],
  },
};
