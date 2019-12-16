class Demo {
  abc;
  // 构造方法
  constructor(param) {
    this.abc = param;
  }
  // 静态方法
  static hello() {
    return "hello";
  }
  // 实例方法
  world() {
    return 'world';
  }
  get test() {
      console.log('abc')
  }
}
console.log(Demo.hello());

var abc = new Demo(3);
console.log(abc.world());
abc.test()
