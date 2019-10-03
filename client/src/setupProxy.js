const proxy = require("http-proxy-middleware");

//sets up proxy to hit backend API
module.exports = function(app) {
  app.use(proxy(["/api"], { target: "http://localhost:5000" }));
};
