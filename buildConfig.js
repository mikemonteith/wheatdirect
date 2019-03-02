const fs = require("fs");
const yaml = require("js-yaml");
const rollup = require("rollup");

const readConfig = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("config.yml", "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const object = yaml.safeLoad(data);
          resolve(object);
        } catch (e) {
          reject(e);
        }
      }
    });
  });
};

/**
 * Turn the user-defined ruleset which could include internal references
 * into a fully-expanded ruleset.
 */
const makeVerboseConfig = config => {
  // TODO: For now, the verbose config is the same as the user-defined config
  return config;
};

/**
 * TODO: validate the config.
 * E.g percentages have to add up to 100
 */
const validateConfig = config => {
  return config;
};

/**
 * Pretty-print the json config.
 * `console.log(config)` doesn't print deeply nested data
 */
const logConfig = config => {
  console.log(JSON.stringify(config, null, 2));
};

module.exports = () => {
  return readConfig()
    .then(validateConfig)
    .then(makeVerboseConfig)
    .then(config => {
      logConfig(config);
      return config;
    });
};
