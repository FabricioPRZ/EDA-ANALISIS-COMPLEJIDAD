class ArrayList {
    constructor() {
        this.data = [];
        this.length = 0; 
    }

    get(index) {
        return this.data[index];
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
    }

    linearSearch(value) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === value) {
                return true;
            }
        }
        return false;
    }

    bubbleSort() {
        let n = this.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (this.data[j] > this.data[j + 1]) {
                    let temp = this.data[j];
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = temp;
                }
            }
        }

        return this.data;
    }

    radixSort() {
        const getMax = () => {
            let max = this.data[0];
            for (let i = 1; i < this.length; i++) {
                if (this.data[i] > max) {
                    max = this.data[i];
                }
            }
            return max;
        };

        const countingSort = (exp) => {
            let output = new Array(this.length).fill(0);
            let count = new Array(10).fill(0);

            for (let i = 0; i < this.length; i++) {
                let index = ~~((this.data[i] / exp) % 10);
                count[index]++;
            }

            for (let i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }

            for (let i = this.length - 1; i >= 0; i--) {
                let index = ~~((this.data[i] / exp) % 10);
                output[count[index] - 1] = this.data[i];
                count[index]--;
            }

            for (let i = 0; i < this.length; i++) {
                this.data[i] = output[i];
            }
        };

        let max = getMax();
        for (let exp = 1; max / exp > 0; exp *= 10) {
            countingSort(exp);
        }

        return this.data;
    }

    mergeSort() {
        const merge = (left, right) => {
            let result = [];
            let leftIndex = 0;
            let rightIndex = 0;

            while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
                }
            }

            while (leftIndex < left.length) {
                result.push(left[leftIndex]);
                leftIndex++;
            }

            while (rightIndex < right.length) {
                result.push(right[rightIndex]);
                rightIndex++;
            }

            return result;
        };

        const mergeSortRecursive = (arr) => {
            if (arr.length <= 1) {
                return arr;
            }

            const mid = ~~(arr.length / 2);
            const left = arr.slice(0, mid);
            const right = arr.slice(mid);

            return merge(mergeSortRecursive(left), mergeSortRecursive(right));
        };

        this.data = mergeSortRecursive(this.data);
        return this.data;
    }
}

export default ArrayList;