module.exports = async (on, config) => {
  if (process.env.TESTRAIL_ENABLED) {
    await require("cypress-testrail-simple/src/plugin")(on, config)
  } else {
    await require("cypress-testrail-simple/src/plugin")(on, config, true)
  }
  require("cypress-grep/src/plugin")(config)

  return config
}
