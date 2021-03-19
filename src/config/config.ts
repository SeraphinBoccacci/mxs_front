interface Config {
  apiUrl: string;
}

type EnvConfig = { [key: string]: Config };

const config: EnvConfig = {
  development: {
    apiUrl: "http://localhost:4000/api",
  },
  production: {
    apiUrl: "https://streamparticles.io/api",
  },
};

export default config[process.env.NODE_ENV] || config["development"];
