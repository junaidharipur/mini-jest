/**
 * Jest usually have the complete control of module system therefore we can use jest.mock for mocking entire module.
 *
 * monkey-patching works in commonjs but not in esm therefore we need to use jest.mock to mock the entire module.
 *
 * in commonjs we have control of module system so we can use require.cache to simulate the basic implementation of jest.mock.
 */

const modulePath = require.resolve("modulePath");
require.cache[modulePath] = {
  id: modulePath,
  fileName: modulePath,
  loaded: true,
  exports: {
    propToMock: mockFn(impl),
  },
};

/* write tests here */
//

/** cleanup */
// delete require.cache[modulePath];
