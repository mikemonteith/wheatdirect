//const percentage = require('./rules/percentage.js')
import percentage from "./rules/percentage.js";

const executeRule = rule => {
  if (typeof rule === "string") {
    return rule;
  }

  let nextRule;
  if (rule.type === "percentage") {
    nextRule = percentage(rule);
  } else if (rule.type === "") {
    // TODO: add more rule types
  }

  return executeRule(nextRule);
};

var config = window.REDIRECTR_CONFIG;

const location = executeRule(config.rules[0]);

// TODO: do something with the location i.e redirect
