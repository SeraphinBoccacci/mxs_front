interface Config {
  url: string;
  apiUrl: string;
  uploadsUrl: string;
  googleAnalyticsStreamId?: string;
}

type EnvConfig = { [key: string]: Config };

const config: EnvConfig = {
  local: {
    url: "http://localhost:4000",
    apiUrl: "http://localhost:4000/api",
    uploadsUrl: "http://localhost:4000/uploads",
  },
  staging: {
    url: "https://staging.streamparticles.io",
    apiUrl: "https://staging.streamparticles.io/api",
    uploadsUrl: "https://staging.streamparticles.io/uploads",
    googleAnalyticsStreamId: "G-SC8RWK3MWS",
  },
  production: {
    url: "https://streamparticles.io",
    apiUrl: "https://streamparticles.io/api",
    uploadsUrl: "https://streamparticles.io/uploads",
    googleAnalyticsStreamId: "G-EG1CB2TKV8",
  },
};

export default config[process.env.REACT_APP_BUILD_ENV] || config["local"];
