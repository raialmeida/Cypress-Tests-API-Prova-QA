const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter")

module.exports = defineConfig({
  e2e: {
    video: false,
    fixturesFolder: false,
    baseUrl: "https://api.trello.com/1/",
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
});
