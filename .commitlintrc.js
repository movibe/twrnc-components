module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-function-rules"],
  ignores: [(message) => message.includes("(release)")],
  rules: {
    "references-empty": [0],
  },
};
