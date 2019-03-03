import percentage from "./rules/percentage.js";
import width from "./rules/width.js";

const config = window.REDIRECTR_CONFIG;

// get a rule config based on a name
const getRuleByName = (config, name) => {
  const rules = config.rules.filter(rule => rule.name === name);
  // TODO: throw error if >1 matches
  if (rules.length === 0) {
    throw new Error(`Found no rule named ${name}`);
  }
  // return the first match
  return rules[0];
};

const executeRule = rule => {
  if (typeof rule === "string") {
    return rule;
  }

  let nextRule;
  if (rule.type === "redirect") {
    return rule.url;
  } else if (rule.type === "percentage") {
    nextRule = percentage(rule);
  } else if (rule.type === "width") {
    nextRule = width(rule);
  } else if (rule.type === "goto") {
    nextRule = getRuleByName(config, rule.rule);
  } else {
    throw new Error(`Rule type "${rule.type}" not found`);
  }

  return executeRule(nextRule);
};

const location = executeRule(config.rules[0]);

if (location) {
  window.location.href = location;
}
