import percentage from "./rules/percentage.js";
import width from "./rules/width.js";

const executeRule = rule => {
  if (typeof rule === "string") {
    return rule;
  }

  let nextRule;
  if (rule.type === "percentage") {
    nextRule = percentage(rule);
  } else if (rule.type === "width") {
    nextRule = width(rule);
  } else {
    throw new Error(`Rule type "${rule.type}" not found`);
  }

  return executeRule(nextRule);
};

var config = window.REDIRECTR_CONFIG;

const location = executeRule(config.rules[0]);

// TODO: do something with the location i.e redirect
