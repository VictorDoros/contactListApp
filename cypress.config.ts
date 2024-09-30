import { defineConfig } from "cypress"
import getCompareSnapshotsPlugin from "cypress-image-diff-js/plugin"

export default defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    inlineAssets: true,
    saveAllAttempts: false,
  },
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config)
      //mocha-awesome reporter
      require("cypress-mochawesome-reporter/plugin")(on)

      //cy-grep plugin
      require("@cypress/grep/src/plugin")(config)
      return config
    },

    // Whether Cypress will take a screenshot when a test fails during cypress run.
    screenshotOnRunFailure: true,

    // The quality setting for the video compression, in Constant Rate Factor (CRF).
    // The value can be false to disable compression or a value between 0 and 51,
    // where a lower value results in better quality (at the expense of a higher file size).
    videoCompression: 32,

    // Default height in pixels
    viewportHeight: 1080,

    // Default width in pixels
    viewportWidth: 1920,

    //Setting video to false (it takes time while running a test suite, even if there is no error)
    video: false,

    //Setting the base url
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
  },
})
