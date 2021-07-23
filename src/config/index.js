const config = {}

// server base url
config.baseUrl = "https://phonearena-server.herokuapp.com";

// api endpoints
config.api = {};
config.api.catalogue = `${config.baseUrl}/phones`

// assets
config.images = `${config.baseUrl}/images`


export default config;