google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable([
	['Type', 'link','Kwh'],
	['Fridge',  'fridge.html', 1.3],
	['Computer',  'computer.html', 1.5],
	['Lighting',  'lighting.html', 1.8],
	['TV', 'tv.html', 1.4],
	['Microwave',   'microwave.html', 0.9]
	]);

	var view = new google.visualization.DataView(data);
	view.setColumns([0, 2]);

	var options = {
		title: '',
		titleTextStyle: { alignment: 'center' },
		backgroundColor:'transparent',
		fontSize: 16,

		legend:{
			alignment: 'center',
			textStyle: { 
				fontSize: 11, 
				fontName: 'Montserrat' }
		},
		pieSliceText: 'percentage',
		pieSliceTextStyle: { fontName: 'Montserrat' },
		tooltip: {trigger: 'none'}
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	chart.draw(view, options);

	var selectHandler = function(e) {
		window.location = data.getValue(chart.getSelection()[0]['row'], 1 );
	};

	// Add our selection handler.
	google.visualization.events.addListener(chart, 'select', selectHandler);
}
