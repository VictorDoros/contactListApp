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

    // Default height in pixels
    viewportHeight: 1080,

    // Default width in pixels
    viewportWidth: 1920,

    //Setting video to false (it takes time while running a test suite, even if there is no error)
    video: false,

    //Setting the base url
    //baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
  },
})
