google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Month", "Dollar", { role: "style" } ],
        ["JAN", 41.22, 'color: #FFCC00'],
        ["FEB", 39.70, 'color: #FFCC00'],
        ["MAR", 33.39, 'color: #FFCC00'],
        ["APR", 35.01, 'color: #FFCC00'],
        ["MAY", 31.40, 'color: #FFCC00'],
        ["JUN", 32.95, 'color: #FFCC00']
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