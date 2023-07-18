interface IA {
  methodA(): void;
}

class ClassA implements IA {
  methodA() {
    console.log('method A');
  }
}

interface IB {
  methodB(): void;
}

class ClassB implements IB {
  methodB() {
    console.log('method B');
  }
}

class ClassBAdapter implements IA {
  #classB: ClassB;
  constructor() {
    this.#classB = new ClassB();
  }
  methodA() {
    this.#classB.methodB();
  }
}
