import { functionName } from '../src/functionName';

test('functionName says hello', () => {
  expect(functionName()).toBe('Hello, function!');
});