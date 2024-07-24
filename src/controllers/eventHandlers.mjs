import { loadData, calculateTime, addRowToTable, updateChart } from './utils.mjs';

export const handleAddLinkedList = async (linkedList, chart) => {
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
    updateChart(chart);
    addRowToTable('Insertion', 'LinkedList', time);
};

export const handleAddArrayList = async (arrayList, chart) => {
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
    updateChart(chart);
    addRowToTable('Insertion', 'Array', time);
};

export const handleSearchArray = (arrayList, chart) => {
    const searchValue = document.getElementById("search-ipt").value;
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
    updateChart(chart);
    addRowToTable('Search', 'Array', time);
};

export const handleSearchLinkedList = (linkedList, chart) => {
    const searchValue = document.getElementById("search-ipt").value;
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
    updateChart(chart);
    addRowToTable('Search', 'LinkedList', time);
};

export const handleBubbleSortArray = (arrayList, chart) => {
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
        'BubbleSort Array',
        { label: 'BubbleSort Array', data: [time], backgroundColor: '#36A2EB' }
    );
    updateChart(chart);
    addRowToTable('BubbleSort', 'Array', time);
};

export const handleMergeSortArray = (arrayList, chart) => {
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
        'MergeSort Array',
        { label: 'MergeSort Array', data: [time], backgroundColor: '#36A2EB' }
    );
    updateChart(chart);
    addRowToTable('MergeSort', 'Array', time);
};

export const handleRadixSortArray = (arrayList, chart) => {
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
        'RadixSort Array',
        { label: 'RadixSort Array', data: [time], backgroundColor: '#36A2EB' }
    );
    updateChart(chart);
    addRowToTable('RadixSort', 'Array', time);
};

export const handleBubbleSortLinkedList = (linkedList, chart) => {
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
        'BubbleSort LinkedList',
        { label: 'BubbleSort LinkedList', data: [time], backgroundColor: '#FF0000' }
    );
    updateChart(chart);
    addRowToTable('BubbleSort', 'LinkedList', time);
};

export const handleMergeSortLinkedList = (linkedList, chart) => {
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
        'MergeSort LinkedList',
        { label: 'MergeSort LinkedList', data: [time], backgroundColor: '#FF0000' }
    );
    updateChart(chart);
    addRowToTable('MergeSort', 'LinkedList', time);
};

export const handleRadixSortLinkedList = (linkedList, chart) => {
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
        'RadixSort LinkedList',
        { label: 'RadixSort LinkedList', data: [time], backgroundColor: '#FF0000' }
    );
    updateChart(chart);
    addRowToTable('RadixSort', 'LinkedList', time);
};

const getNumItems = () => {
    return parseInt(document.getElementById("numItems").value) || 100;
};
