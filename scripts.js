window.onload = function() {
    // 1차 실험: 온실가스 배출량과 기온의 관계 (예시 데이터)
    var ctx1 = document.getElementById('chart1').getContext('2d');
    var chart1 = new Chart(ctx1, {
      type: 'scatter',
      data: {
        datasets: [{
          label: '기온 vs 온실가스 배출량',
          data: [
            { x: 10, y: 100 },
            { x: 15, y: 150 },
            { x: 20, y: 180 },
            { x: 25, y: 220 },
            { x: 30, y: 250 }
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: '기온 (°C)'
            }
          },
          y: {
            title: {
              display: true,
              text: '온실가스 배출량 (단위)'
            }
          }
        }
      }
    });
  
    // 2차 실험: 기온 편차와 이산화탄소 농도의 관계 (예시 데이터)
    var ctx2 = document.getElementById('chart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
      type: 'scatter',
      data: {
        datasets: [{
          label: '기온 편차 vs 이산화탄소 농도',
          data: [
            { x: 5, y: 400 },
            { x: 10, y: 450 },
            { x: 15, y: 480 },
            { x: 20, y: 500 }
          ],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: '기온 편차 (°C)'
            }
          },
          y: {
            title: {
              display: true,
              text: '이산화탄소 농도 (ppm)'
            }
          }
        }
      }
    });
  
    // 3차 실험: 기온과 이산화탄소 농도의 관계 (예시 데이터)
    var ctx3 = document.getElementById('chart3').getContext('2d');
    var chart3 = new Chart(ctx3, {
      type: 'scatter',
      data: {
        datasets: [{
          label: '기온 vs 이산화탄소 농도',
          data: [
            { x: 10, y: 400 },
            { x: 15, y: 430 },
            { x: 20, y: 460 },
            { x: 25, y: 490 },
            { x: 30, y: 530 }
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: '기온 (°C)'
            }
          },
          y: {
            title: {
              display: true,
              text: '이산화탄소 농도 (ppm)'
            }
          }
        }
      }
    });
  };
  