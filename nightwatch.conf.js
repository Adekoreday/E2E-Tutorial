module.exports = {
    src_folders: ['e2e'],
    test_settings: {
      default: {
        selenium_port: 4444,
        selenium_host: "localhost",
        silent: true,
        screenshots: {
          enabled: true,
          path: "tests_output",
        },
        globals: {
          abortOnAssertionFailure: false,
          waitForConditionPollInterval: 300,
          waitForConditionTimeout: 10000,
          retryAssertionTimeout: 5000,
        },
        selenium : {
          start_process : true,
          server_path: require("selenium-server").path
        }
      },
      selenium: {
        // Selenium Server is running locally and is managed by Nightwatch
        selenium: {
          start_process: true,
          port: 4444,
          server_path: require("selenium-server").path,
          cli_args: {
            "webdriver.chrome.driver": require("chromedriver").path,
            "webdriver.gecko.driver": require("geckodriver").path
          },
        },
        webdriver: {
          start_process: false,
        },
      },
      "chrome": {
        extends: "selenium",
        desiredCapabilities: {
          browserName: "chrome",
          chromeOptions: {
            w3c: false,
          },
        },
      },
  
      "firefox": {
        extends: "selenium",
        desiredCapabilities: {
          browserName: "firefox",
        },
      },
    },
  }