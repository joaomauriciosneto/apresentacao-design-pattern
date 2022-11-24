const createProxy = subject => ({
  hello: () => `${subject.hello()} world!`,
  goodbye: () => subject.goodbye.apply(subject, arguments)
});

const Sivuca = {
  hello: () => 'hello Sivuca',
  goodbye: () => 'goodbye Sivuca'
};

const proxy = createProxy(Sivuca);

console.log(proxy.hello());
console.log(proxy.goodbye());