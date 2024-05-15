module.exports = {
  "*.{js,jsx}": ["organize-imports-cli", "prettier --write", "yarn lint:fix"],
  "*.{ts,tsx}": ["organize-imports-cli", "prettier --write", "yarn lint:fix"],
};
