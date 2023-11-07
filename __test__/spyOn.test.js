const assert = require("assert");
const getNet = require("../src/get-net");
const statusChecker = require("../src/lib/internet-status-checker");

// monkey patching
spyOn(statusChecker, "internetStatusChecker");
statusChecker.internetStatusChecker.mockImplementation(() => "xyz");

test("getNet function returns correct status", () => {
  const status = getNet();

  assert.strictEqual(status, "xyz");
  assert.deepStrictEqual(statusChecker.internetStatusChecker.mock.calls, [[]]);
});

// Restoring Original
statusChecker.internetStatusChecker.mockRestore();
