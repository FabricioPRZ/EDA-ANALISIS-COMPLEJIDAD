export const loadData = async () => {
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

export const getNumItems = () => {
    const numItems = parseInt(document.getElementById("numItems").value, 10);
    return isNaN(numItems) || numItems <= 0 ? 100 : numItems;
};

export const calculateTime = (start, end) => {
    return ((end - start) / 1000).toFixed(4); 
};

export const addRowToTable = (operation, structure, time) => {
    const resultsTableBody = document.getElementById("resultados-tiempos").getElementsByTagName('tbody')[0];
    let newRow = resultsTableBody.insertRow();
    let cellOperation = newRow.insertCell(0);
    let cellStructure = newRow.insertCell(1);
    let cellTime = newRow.insertCell(2);
    cellOperation.textContent = operation;
    cellStructure.textContent = structure;
    cellTime.textContent = time;
};

export const updateChart = (chart) => {
    chart.updateGraphic();
};