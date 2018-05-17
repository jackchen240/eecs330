google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Type', 'Kwh'],
          ['Fridge',     3.0],
          ['Computer',      2.0],
          ['Lighting',  1.5],
          ['TV', 1.5],
          ['Microwave',    2.0]
        ]);

        var options = {
          title: 'Click to view my electricity usage!',
          backgroundColor:'transparent',
          fontSize: 16,
          legend:{
            alignment: 'center',
            textStyle: {
              fontSize: 12
            }
          },
          pieSliceText: 'percentage'
          

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }