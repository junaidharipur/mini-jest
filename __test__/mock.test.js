const assert = require("assert");
const getNet = require("../src/get-net");
const statusChecker = require("../src/lib/internet-status-checker");

// monkey patching
const original = statusChecker.internetStatusChecker;
statusChecker.internetStatusChecker = fn(() => "xyz");

test("getNet function returns correct status", () => {
  const status = getNet();

  assert.strictEqual(status, "xyz");
  assert.deepStrictEqual(statusChecker.internetStatusChecker.mock.calls, [[]]);
});

// Restoring Original
statusChecker.internetStatusChecker = original;
