google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Type', 'link','Kwh'],
          ['Fridge',  'http://www.google.com',   3.0],
          ['Computer',  'http://www.google.com',    2.0],
          ['Lighting',  'http://www.google.com',1.5],
          ['TV', 'http://www.google.com', 1.5],
          ['Microwave',   'http://www.google.com', 2.0]
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 2]);

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
          //enableInteractivity: false,
          pieSliceText: 'percentage',
          tooltip: {trigger: 'none'}
        };

        var chart = new google.visualization.PieChart( 
          document.getElementById('piechart'));
        chart.draw(view, options);

        var selectHandler = function(e) {
         window.location = data.getValue(chart.getSelection()[0]['row'], 1 );
        }

        // Add our selection handler.
        google.visualization.events.addListener(chart, 'select', selectHandler);
      }