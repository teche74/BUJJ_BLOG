document.addEventListener("DOMContentLoaded", () => {
    // Input Data vs Processing Time
    const inputDataChart = new Chart(document.getElementById("inputDataChart"), {
      type: "line",
      data: {
        labels: ["100 GB", "200 GB", "400 GB", "800 GB"],
        datasets: [
          {
            label: "Processing Time (minutes) with constant clusters",
            data: [10, 20, 40, 80],
            borderColor: "#ffc107",
            backgroundColor: "rgba(255, 193, 7, 0.2)",
            borderWidth: 2,
            pointBackgroundColor: "#ffc107",
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Input Data Size",
            },
          },
          y: {
            title: {
              display: true,
              text: "Processing Time (minutes)",
            },
            beginAtZero: true,
          },
        },
      },
    });

    // Number of Clusters vs Processing Time
    const clusterChart = new Chart(document.getElementById("clusterChart"), {
      type: "bar",
      data: {
        labels: ["10 Clusters", "20 Clusters", "40 Clusters", "80 Clusters"],
        datasets: [
          {
            label: "Processing Time (for 400 GB of Data)",
            data: [40, 20, 10, 5],
            backgroundColor: "#03a9f4",
            borderColor: "#0288d1",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Number of Clusters",
            },
          },
          y: {
            title: {
              display: true,
              text: "Processing Time (minutes)",
            },
            beginAtZero: true,
          },
        },
      },
    });
  });