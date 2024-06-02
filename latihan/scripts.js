document.addEventListener('DOMContentLoaded', function() {
    fetch('bikesales.json')
        .then(response => response.json())
        .then(data => {
            // Create charts here

            // Order Quantity by Year
            const orderQuantityByYearCtx = document.getElementById('orderQuantityByYear').getContext('2d');
            new Chart(orderQuantityByYearCtx, {
                type: 'bar',
                data: {
                    labels: data.years,
                    datasets: [{
                        label: 'Order Quantity',
                        data: data.orderQuantityByYear,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Revenue by Year
            const revenueByYearCtx = document.getElementById('revenueByYear').getContext('2d');
            new Chart(revenueByYearCtx, {
                type: 'line',
                data: {
                    labels: data.years,
                    datasets: [{
                        label: 'Revenue',
                        data: data.revenueByYear,
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Order Quantity by Gender
            const orderQuantityByGenderCtx = document.getElementById('orderQuantityByGender').getContext('2d');
            new Chart(orderQuantityByGenderCtx, {
                type: 'pie',
                data: {
                    labels: ['Male', 'Female'],
                    datasets: [{
                        label: 'Order Quantity',
                        data: [data.orderQuantityMale, data.orderQuantityFemale],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true
                }
            });

            // Order Quantity by Season
            const orderQuantityBySeasonCtx = document.getElementById('orderQuantityBySeason').getContext('2d');
            new Chart(orderQuantityBySeasonCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Winter', 'Spring', 'Summer', 'Autumn'],
                    datasets: [{
                        label: 'Order Quantity',
                        data: data.orderQuantityBySeason,
                        backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                        borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true
                }
            });

            // Order Quantity by Sub Category
            const orderQuantityBySubCategoryCtx = document.getElementById('orderQuantityBySubCategory').getContext('2d');
            new Chart(orderQuantityBySubCategoryCtx, {
                type: 'bar',
                data: {
                    labels: data.subCategories,
                    datasets: [{
                        label: 'Order Quantity',
                        data: data.orderQuantityBySubCategory,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Revenue by Sub Category
            const revenueBySubCategoryCtx = document.getElementById('revenueBySubCategory').getContext('2d');
            new Chart(revenueBySubCategoryCtx, {
                type: 'bar',
                data: {
                    labels: data.subCategories,
                    datasets: [{
                        label: 'Revenue',
                        data: data.revenueBySubCategory,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Total Profit by Sub Category
            const totalProfitBySubCategoryCtx = document.getElementById('totalProfitBySubCategory').getContext('2d');
            new Chart(totalProfitBySubCategoryCtx, {
                type: 'bar',
                data: {
                    labels: data.subCategories,
                    datasets: [{
                        label: 'Total Profit',
                        data: data.totalProfitBySubCategory,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Order Quantity by Country
            const orderQuantityByCountryCtx = document.getElementById('orderQuantityByCountry').getContext('2d');
            new Chart(orderQuantityByCountryCtx, {
                type: 'bar',
                data: {
                    labels: data.countries,
                    datasets: [{
                        label: 'Order Quantity',
                        data: data.orderQuantityByCountry,
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Revenue by Country
            const revenueByCountryCtx = document.getElementById('revenueByCountry').getContext('2d');
            new Chart(revenueByCountryCtx, {
                type: 'bar',
                data: {
                    labels: data.countries,
                    datasets: [{
                        label: 'Revenue',
                        data: data.revenueByCountry,
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        borderColor: 'rgba(255, 159, 64, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
