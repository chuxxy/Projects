//sidebar open

var sidebaropen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar(){
    if (!sidebaropen){
        sidebar.classList.add("sidebar-responsive");
        sidebaropen = true;
    }
}

function closeSidebar(){
    if (sidebaropen){
        sidebar.classList.remove("sidebar-responsive");
        sidebaropen = false;
    }
}


//---------------------CHARTS---------------------

var BarChartOptions = {
    series: [{
    data: [800, 650, 600, 470],
    name: "Performance",
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['YEAR 1', 'YEAR 2', 'YEAR 3', 'YEAR 4'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), BarChartOptions);
  chart.render();


  var AreaChartOptions = {
    series: [{
    name: 'School Charges',
    type: 'area',
    data: [44, 55, 31, 47]
  }, {
    name: 'Portal Charges',
    type: 'line',
    data: [55, 69, 45, 61]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['2018', '2019','2020','2021'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Series A',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Series B',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#area-chart"), AreaChartOptions);
  chart.render();
