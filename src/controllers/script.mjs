import ArrayList from "../models/ArrayList.mjs";
import LinkedList from "../models/LinkedList.mjs";
import Graphic from "../models/Graphic.mjs";

let arrayList = new ArrayList();
let linkedList = new LinkedList();
let chart = new Graphic();

document.addEventListener("DOMContentLoaded", () => {
    const addLinkedListBtn = document.getElementById("addLinkedList-btn");
    const addArrayListBtn = document.getElementById("addArray-btn");
    const searchArrayBtn = document.getElementById("searchArray-btn");
    const searchLinkedListBtn = document.getElementById("searchLinkedList-btn");
    const searchInput = document.getElementById("search-ipt");
    const numItemsInput = document.getElementById("numItems");
    const bubbleSortArrayBtn = document.getElementById("bubbleSort-btn");
    const mergeSortArrayBtn = document.getElementById("mergeSort-btn");
    const radixSortArrayBtn = document.getElementById("radixSort-btn");
    const bubbleSortLinkedListBtn = document.getElementById("bubbleSortLinked-btn");
    const mergeSortLinkedListBtn = document.getElementById("mergeSortLinked-btn");
    const radixSortLinkedListBtn = document.getElementById("radixSortLinked-btn");
    const resultsTableBody = document.getElementById("resultados-tiempos").getElementsByTagName('tbody')[0];

    const calculateTime = (start, end) => {
        return ((end - start) / 1000).toFixed(4); 
    };

    const updateChart = () => {
        chart.updateGraphic();
    };

    const addRowToTable = (operation, structure, time) => {
        let newRow = resultsTableBody.insertRow();
        let cellOperation = newRow.insertCell(0);
        let cellStructure = newRow.insertCell(1);
        let cellTime = newRow.insertCell(2);
        cellOperation.textContent = operation;
        cellStructure.textContent = structure;
        cellTime.textContent = time;
    };

    const getNumItems = () => {
        const numItems = parseInt(numItemsInput.value, 10);
        return isNaN(numItems) || numItems <= 0 ? 100 : numItems;
    };

    const loadData = async () => {
        try {
            const response = await fetch("./bussines.json");
            const data = await response.json();
            Swal.fire({
                title: 'Datos Cargados',
                text: `El archivo JSON contiene ${data.length} elementos.`,
                icon: 'info',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#3085d6',
                backdrop: true
            });
            return data;
        } catch (err) {
            console.error(err);
            Swal.fire({
                title: 'Error',
                text: 'Se ha producido un error al intentar cargar los datos.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#d33',
                backdrop: true
            });
            return [];
        }
    };

    addLinkedListBtn.addEventListener("click", async () => {
        const data = await loadData();
        const numItems = getNumItems();
        if (data.length === 0) return;

        const start = performance.now();
        for (let i = 0; i < Math.min(numItems, data.length); i++) {
            linkedList.push(data[i].name);
        }
        const end = performance.now();
        const time = calculateTime(start, end);
        Swal.fire({
            title: 'Operación Exitosa',
            text: 'Los datos han sido añadidos correctamente a la LinkedList.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: true
        });

        chart.setData(
            'Insertion LinkedList',
            { label: 'LinkedList', data: [time], backgroundColor: '#FF0000' }
        );
        updateChart();
        addRowToTable('Insertion', 'LinkedList', time);
    });

    addArrayListBtn.addEventListener("click", async () => {
        const data = await loadData();
        const numItems = getNumItems();
        if (data.length === 0) return;

        const start = performance.now();
        for (let i = 0; i < Math.min(numItems, data.length); i++) {
            arrayList.push(data[i].name);
        }
        const end = performance.now();
        const time = calculateTime(start, end);
        Swal.fire({
            title: 'Operación Exitosa',
            text: 'Los datos han sido añadidos correctamente al Array.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: true
        });

        chart.setData(
            'Insertion Array',
            { label: 'Array', data: [time], backgroundColor: '#36A2EB' }
        );
        updateChart();
        addRowToTable('Insertion', 'Array', time);
    });

    searchArrayBtn.addEventListener("click", () => {
        const searchValue = searchInput.value;
        const start = performance.now();
        const found = arrayList.linearSearch(searchValue);
        const end = performance.now();
        const time = calculateTime(start, end);

        Swal.fire({
            title: found ? 'Valor Encontrado' : 'Valor No Encontrado',
            text: `El valor ${searchValue} ${found ? "ha sido encontrado" : "no ha sido encontrado"} en el Array. Tiempo de búsqueda: ${time} segundos.`,
            icon: found ? 'success' : 'error',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: found ? '#3085d6' : '#d33',
            backdrop: true
        });

        chart.setData(
            'Search Array',
            { label: 'Search Array', data: [time], backgroundColor: '#FFCE56' }
        );
        updateChart();
        addRowToTable('Search', 'Array', time);
    });

    searchLinkedListBtn.addEventListener("click", () => {
        const searchValue = searchInput.value;
        const start = performance.now();
        const found = linkedList.linearSearch(searchValue);
        const end = performance.now();
        const time = calculateTime(start, end);

        Swal.fire({
            title: found ? 'Valor Encontrado' : 'Valor No Encontrado',
            text: `El valor ${searchValue} ${found ? "ha sido encontrado" : "no ha sido encontrado"} en la LinkedList. Tiempo de búsqueda: ${time} segundos.`,
            icon: found ? 'success' : 'error',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: found ? '#3085d6' : '#d33',
            backdrop: true
        });

        chart.setData(
            'Search LinkedList',
            { label: 'Search LinkedList', data: [time], backgroundColor: '#FF0000' }
        );
        updateChart();
        addRowToTable('Search', 'LinkedList', time);
    });

    bubbleSortArrayBtn.addEventListener("click", () => {
        const start = performance.now();
        arrayList.bubbleSort();
        const end = performance.now();
        const time = calculateTime(start, end);
        Swal.fire({
            title: 'Ordenamiento Completo',
            text: `El ordenamiento con Bubble Sort en Array se ha completado. Tiempo de ordenamiento: ${time} segundos.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: true
        });

        chart.setData(
            'Bubble Sort Array',
            { label: 'Bubble Sort Array', data: [time], backgroundColor: '#FF0000' }
        );
        updateChart();
        addRowToTable('Bubble Sort', 'Array', time);
    });

    mergeSortArrayBtn.addEventListener("click", () => {
        const start = performance.now();
        arrayList.mergeSort();
        const end = performance.now();
        const time = calculateTime(start, end);
        Swal.fire({
            title: 'Ordenamiento Completo',
            text: `El ordenamiento con Merge Sort en Array se ha completado. Tiempo de ordenamiento: ${time} segundos.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: true
        });

        chart.setData(
            'Merge Sort Array',
            { label: 'Merge Sort Array', data: [time], backgroundColor: '#36A2EB' }
        );
        updateChart();
        addRowToTable('Merge Sort', 'Array', time);
    });

    radixSortArrayBtn.addEventListener("click", () => {
        const start = performance.now();
        arrayList.radixSort();
        const end = performance.now();
        const time = calculateTime(start, end);
        Swal.fire({
            title: 'Ordenamiento Completo',
            text: `El ordenamiento con Radix Sort en Array se ha completado. Tiempo de ordenamiento: ${time} segundos.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: true
        });

        chart.setData(
            'Radix Sort Array',
            { label: 'Radix Sort Array', data: [time], backgroundColor: '#FFCE56' }
        );
        updateChart();
        addRowToTable('Radix Sort', 'Array', time);
    });

    bubbleSortLinkedListBtn.addEventListener("click", () => {
        const start = performance.now();
        linkedList.bubbleSort();
        const end = performance.now();
        const time = calculateTime(start, end);
        Swal.fire({
            title: 'Ordenamiento Completo',
            text: `El ordenamiento con Bubble Sort en LinkedList se ha completado. Tiempo de ordenamiento: ${time} segundos.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: true
        });

        chart.setData(
            'Bubble Sort LinkedList',
            { label: 'Bubble Sort LinkedList', data: [time], backgroundColor: '#FF0000' }
        );
        updateChart();
        addRowToTable('Bubble Sort', 'LinkedList', time);
    });

    mergeSortLinkedListBtn.addEventListener("click", () => {
        const start = performance.now();
        linkedList.mergeSort();
        const end = performance.now();
        const time = calculateTime(start, end);
        Swal.fire({
            title: 'Ordenamiento Completo',
            text: `El ordenamiento con Merge Sort en LinkedList se ha completado. Tiempo de ordenamiento: ${time} segundos.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: true
        });

        chart.setData(
            'Merge Sort LinkedList',
            { label: 'Merge Sort LinkedList', data: [time], backgroundColor: '#36A2EB' }
        );
        updateChart();
        addRowToTable('Merge Sort', 'LinkedList', time);
    });

    radixSortLinkedListBtn.addEventListener("click", () => {
        const start = performance.now();
        linkedList.radixSort();
        const end = performance.now();
        const time = calculateTime(start, end);
        Swal.fire({
            title: 'Ordenamiento Completo',
            text: `El ordenamiento con Radix Sort en LinkedList se ha completado. Tiempo de ordenamiento: ${time} segundos.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: true
        });

        chart.setData(
            'Radix Sort LinkedList',
            { label: 'Radix Sort LinkedList', data: [time], backgroundColor: '#FFCE56' }
        );
        updateChart();
        addRowToTable('Radix Sort', 'LinkedList', time);
    });
});