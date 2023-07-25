interface Component {
  operation(): void;
}

class Leaf implements Component {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public operation(): void {
    console.log(`Leaf ${this.name} operation`);
  }
}

class Composite implements Component {
  private children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
  }

  public operation(): void {
    console.log("Composite operation");
    for (const child of this.children) {
      child.operation();
    }
  }
}
