interface Config {
  frontUrl: string;
  url: string;
  apiUrl: string;
  uploadsUrl: string;
  downloadBaseUrl: string;
}

type EnvConfig = { [key: string]: Config };

const config: EnvConfig = {
  local: {
    frontUrl: "http://localhost:3000",
    url: "http://localhost:4000",
    apiUrl: "http://localhost:4000/api",
    uploadsUrl: "http://localhost:4000/uploads",
    //use public folder directly
    downloadBaseUrl: "",
  },
  staging: {
    frontUrl: "https://staging.streamparticles.io",
    url: "https://staging.streamparticles.io",
    apiUrl: "https://staging.streamparticles.io/api",
    uploadsUrl: "https://staging.streamparticles.io/uploads",
    downloadBaseUrl: "https://staging.streamparticles.io",
  },
  production: {
    frontUrl: "https://streamparticles.io",
    url: "https://streamparticles.io",
    apiUrl: "https://streamparticles.io/api",
    uploadsUrl: "https://streamparticles.io/uploads",
    downloadBaseUrl: "https://streamparticles.io",
  },
};

export default config[process.env.REACT_APP_BUILD_ENV] || config["local"];
