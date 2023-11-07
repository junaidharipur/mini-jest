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

global.test = test;
global.expect = expect;
