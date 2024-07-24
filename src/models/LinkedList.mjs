class LinkedList {
    #head;
    #count;

    constructor() {
        this.#head = null;
        this.#count = 0;
    }

    get head() {
        return this.#head;
    }

    push(value) {
        const newNode = { value, next: null };
        if (!this.#head) {
            this.#head = newNode;
        } else {
            let current = this.#head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.#count++;
    }

    linearSearch(searchValue) {
        let current = this.#head;
        while (current) {
            if (current.value === searchValue) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    bubbleSort() {
        let swapped;
        let current;
        if (!this.#head) {
            return this;
        }
        do {
            swapped = false;
            current = this.#head;
            while (current.next != null) {
                if (current.value > current.next.value) {
                    let temp = current.value;
                    current.value = current.next.value;
                    current.next.value = temp;
                    swapped = true;
                }
                current = current.next;
            }
        } while (swapped);

        return this;
    }

    mergeSort() {
        const merge = (left, right) => {
            let result = null;
            if (!left) {
                return right;
            }
            if (!right) {
                return left;
            }
            if (left.value <= right.value) {
                result = left;
                result.next = merge(left.next, right);
            } else {
                result = right;
                result.next = merge(left, right.next);
            }
            return result;
        };

        const mergeSortRecursive = (startNode) => {
            if (!startNode || !startNode.next) {
                return startNode;
            }

            let middle = getMiddle(startNode);
            let nextToMiddle = middle.next;
            middle.next = null;

            let left = mergeSortRecursive(startNode);
            let right = mergeSortRecursive(nextToMiddle);

            return merge(left, right);
        };

        const getMiddle = (node) => {
            if (node == null) {
                return node;
            }

            let slow = node;
            let fast = node.next;

            while (fast != null) {
                fast = fast.next;
                if (fast != null) {
                    slow = slow.next;
                    fast = fast.next;
                }
            }
            return slow;
        };

        this.#head = mergeSortRecursive(this.#head);
        return this;
    }

    radixSort() {
        const getMax = () => {
            if (!this.#head) return null;
            let max = this.#head.value;
            let current = this.#head.next;
            while (current != null) {
                if (current.value > max) {
                    max = current.value;
                }
                current = current.next;
            }
            return max;
        };

        const countingSort = (exp) => {
            let output = new Array(this.#count);
            let count = new Array(10).fill(0);
            let current = this.#head;

            while (current != null) {
                count[~~((current.value / exp) % 10)]++;
                current = current.next;
            }

            for (let i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }

            current = this.#head;
            while (current != null) {
                output[count[~~((current.value / exp) % 10)] - 1] = current.value;
                count[~~((current.value / exp) % 10)]--;
                current = current.next;
            }

            current = this.#head;
            let i = 0;
            while (current != null) {
                current.value = output[i++];
                current = current.next;
            }
        };

        let max = getMax();
        for (let exp = 1; max / exp > 0; exp *= 10) {
            countingSort(exp);
        }

        return this;
    }
}

export default LinkedList;