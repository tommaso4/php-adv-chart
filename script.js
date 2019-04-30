function getGrafic(){

  $.ajax({

    url:"fulldb.php",
    method:"GET",
    success: function (data){

      var ogg = JSON.parse(data);
      var ogg1 = ogg.fatturato;
      var data1 = ogg1.data;


      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
          type: 'line',

          data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','Sptember','October','November','Dicember'],
              datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'blue',
                  borderColor: 'rgb(255, 99, 132)',
                  data: data1
              }]
          },
          options: {}
      });

      ///////
      var ogg2 = ogg.fatturato_by_agent;
      var data2 = ogg2.data;
      var name = Object.values(data2);
      var inc = Object.keys(data2);
      console.log(name);

      var ctx = document.getElementById('myChart2').getContext('2d');
      var chart = new Chart(ctx, {
          type: 'pie',

          data: {
              labels: inc,
              datasets: [{
                  label: 'My First dataset',
                  backgroundColor: ['blue','yellow','orange','green'],
                  borderColor: 'rgb(255, 99, 132)',
                  data: name
              }]
          },
          options: {}
      });
    }
  });
}



function init(){

  getGrafic();

}

$(document).ready(init);
