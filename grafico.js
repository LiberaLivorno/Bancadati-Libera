google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Media Culturali', 'Numero'],
          ['Libri',     4],
          ['Film',      2],
          ['Musica',    4],
        ]);

        var options = {
          title: 'Contributi presenti nel catalogo',
          titleTextStyle: {
            color: 'white',
            fontSize: 20
          },
          legend:{
            textStyle: {
              color: 'White',
              fonSize: 16
            }
          },
          colors: ['#f85bb1','#fff64e', '#ff9b44'],
          pieSliceTextStyle: {
            color: 'black',
            fontSize:16
          },
          backgroundColor: { fill:'none'}
        };
        
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }