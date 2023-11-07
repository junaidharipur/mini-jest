async function test(name, callback) {
  try {
    await callback();
    console.log(`✔️ ${name}`);
  } catch (err) {
    console.log(`❌ ${name} \n`, err);
  }
}

const expect = (actual) => ({
  toBe: (expected) => {
    if (actual !== expected) {
      throw new Error(`${actual} is not equal to ${expected}`);
    }
  },
});

function fn(impl = () => {}) {
  const mockfn = (...args) => {
    mockfn.mock.calls.push(args);
    return impl(...args);
  };
  mockfn.mock = { calls: [] };
  mockfn.mockImplementation = (newImpl) => (impl = newImpl);
  return mockfn;
}

function spyOn(obj, prop) {
  const original = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = original);
}

global.test = test;
global.expect = expect;
global.fn = fn;
global.spyOn = spyOn;
