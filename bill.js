google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Month", "Dollar", { role: "style" } ],
        ["JAN", 43.22, 'color: #F2A10E'],
        ["FEB", 42.75, 'color: #F2A10E'],
        ["MAR", 39.39, 'color: #F2A10E'],
        ["APR", 45.01, 'color: #F2A10E'],
        ["MAY", 41.45, 'color: #F2A10E'],
        ["JUN", 48.21, 'color: #F2A10E']
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        backgroundColor: 'transparent',
        //title: "Bills in past 6 months",
        bar:{
          groupWidth: 30
        },
        chartArea:{
          width: 260
        },
        width: 320,
        height: 200,
        
        legend: {position:'none', textStyle:{fontName:'Montserrat'} },
        hAxis: {
          textStyle:{fontName:'Montserrat'},
          title: 'Bills for past 6 months',
          titleTextStyle: {
            fontSize: 13,
            fontName: 'Montserrat'
          }
        },
        vAxis:{
          title: 'Cost ($)',
          textStyle:{fontName: 'Montserrat'}
        },

        annotations:{
          textStyle:{fontName: 'Montserrat'}
        },

        tooltip: {trigger: 'none'}
        
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
      chart.draw(view, options);
  }