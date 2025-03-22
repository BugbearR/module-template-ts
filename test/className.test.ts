import { ClassName } from '../src/className';

test('ClassName says hello', () => {
  const instance = new ClassName();
  expect(instance.sayHello()).toBe('Hello, world!');
});