module.exports.internetStatusChecker = () => {
  const stauses = ["online", "offline", "determining"];

  return stauses[Math.floor(Math.random() * stauses.length)];
};
