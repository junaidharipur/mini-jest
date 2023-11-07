const statusChecker = require("./lib/internet-status-checker");

module.exports = () => {
  const status = statusChecker.internetStatusChecker();

  return status;
};
