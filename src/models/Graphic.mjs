export default class Graphic {
    constructor() {
        this.chart = null;
        this.data = {
            labels: [],
            datasets: []
        };
    }

    setData(action, dataset) {
        const datasetIndex = this.data.datasets.findIndex(ds => ds.label === dataset.label);
        if (datasetIndex === -1) {
            this.data.datasets.push({
                label: dataset.label,
                data: Array(this.data.labels.length).fill(0).concat(dataset.data),
                backgroundColor: dataset.backgroundColor
            });
        } else {
            this.data.datasets[datasetIndex].data.push(dataset.data[0]);
        }
        if (!this.data.labels.includes(action)) {
            this.data.labels.push(action);
        }
    }

    getData() {
        return this.data;
    }

    updateGraphic() {
        let graphic = document.getElementById("Graphic").getContext("2d");
        let dataChart = this.getData();

        if (this.chart) {
            this.chart.destroy();
        }

        this.chart = new Chart(graphic, {
            type: 'bar',
            data: dataChart,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    },
                    x: {
                        ticks: {
                            autoSkip: false,
                            maxRotation: 90,
                            minRotation: 45
                        }
                    }
                }
            }
        });
    }
}
