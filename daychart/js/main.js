function getSecondsToday() {
    let now = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today;
    return Math.round(diff / 1000); 
  }
  
let allSec = getSecondsToday();
allSec = parseInt(100/86400*allSec);
let restSec = 100 - allSec;
let data = [];
data.push(allSec, restSec);

let myChartAll = document.getElementById('myChartAll').getContext('2d');

/*Össz idő*/
let massPopChart = new Chart(myChartAll, {
    type: 'doughnut', 
    data: {
        labels: ['Eltelt idő a mai napból %-ban', 'Hátralévő idő a mai napból %-ban'],
        datasets: [{
            data: data,
            backgroundColor: [
                'rgba(255, 0, 0,0.8)',
                'rgba(82,82,82,0.8)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 2,
            hoverBorderColor: 'rgba(0,0,0,0.5)'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Ma éjféltől eltelt idő',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 30,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
}); 

/*adott óra*/
let dataMin = [];
let dateMin = new Date();
let min = dateMin.getMinutes();
min = parseInt(100/60*min);
restMin = 100-min;
dataMin.push(min, restMin);



let myChartMins = document.getElementById('myChartMins').getContext('2d');

let massPopChartMins = new Chart(myChartMins, {
    type: 'doughnut', 
    data: {
        labels: ['Eltelt idő az adott órából %-ban', 'Hátralévő idő az adott órából %-ban'],
        datasets: [{
            data: dataMin,
            backgroundColor: [
                'rgba(255, 0, 0,0.8)',
                'rgba(82,82,82,0.8)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 2,
            hoverBorderColor: 'rgba(0,0,0,0.5)'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Eltelt idő az adott órából',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 30,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});

/*adott Perc*/
let dataSec = [];
let dateSec = new Date();
let sec = dateSec.getSeconds();
sec = parseInt(100/60*sec);
restSec = 100-sec;
dataSec.push(sec, restSec);



let myChartsecs = document.getElementById('myChartsecs').getContext('2d');

let massPopChartSecs = new Chart(myChartsecs, {
    type: 'doughnut', 
    data: {
        labels: ['Eltelt idő az adott Percből %-ban', 'Hátralévő idő az adott Percből %-ban'],
        datasets: [{
            data: dataSec,
            backgroundColor: [
                'rgba(255, 0, 0,0.8)',
                'rgba(82,82,82,0.8)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 2,
            hoverBorderColor: 'rgba(0,0,0,0.5)'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Eltelt idő az adott percből',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 30,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});