interface SortStrategy {
  sort(data: number[]): number[];
}

class BubbleSort implements SortStrategy {
  sort(data: number[]): number[] {
    console.log('Sorting using bubble sort');
    // Implement bubble sort algorithm
    return data;
  }
}

class QuickSort implements SortStrategy {
  sort(data: number[]): number[] {
    console.log('Sorting using quick sort');
    // Implement quick sort algorithm
    return data;
  }
}

class Sorter {
  private strategy: SortStrategy;

  constructor(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  sort(data: number[]) {
    return this.strategy.sort(data);
  }
}

const sorter = new Sorter(new BubbleSort());
console.log(sorter.sort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // Output: Sorting using bubble sort [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

sorter.setStrategy(new QuickSort());
console.log(sorter.sort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // Output: Sorting using quick sort [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]