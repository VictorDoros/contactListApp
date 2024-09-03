import { defineConfig } from "cypress"

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      //mocha-awesome reporter
      require("cypress-mochawesome-reporter/plugin")(on)

      //cy-grep plugin
      require("@cypress/grep/src/plugin")(config)
      return config
    },
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
  },
})
