export const planetChartData = {
	type: 'line',
	data: {
		labels: [
			['Tue', '01 sep'],
			[],
			['Thu', '03 Sep'],
			[],
			['Sat', '05 Sep'],
			[],
			['Mon', '07 Sep'],
			[],
			['Wed', '09 sep'],
			[],
			['Fri', '11 sep'],
			[],
			['Sun', '13 sep'],
			[],
			['Tue', '15 sep'],
			[],
			['Thu', '17 sep'],
			[],
			['Sat', '19 sep'],
			[],
			['Mon', '21 sep'],
			[],
			['Wed', '23 sep'],
			[],
			['Fri', '25 sep'],
			[],
			['Sun', '27 sep'],
			[],
			['Tue', '29 sep'],
		],
		datasets: [
			{
				// one line graph
				label: ['Current period (september 2020)'],
				data: [2, 1, 3],

				borderColor: ['#0071F2'],
				borderWidth: 1,
				backgroundColor: 'rgba(0, 0, 0, 0.0)',
				pointBackgroundColor: 'rgba(0, 0, 0, 0.0)',
				pointHoverBackgroundColor: '#0071F2',
				pointBorderColor: '#0071F2',
				tension: 0,
			},
			{
				// another line graph
				label: ['Previous period', '(september 2019)'],
				data: [3, 2, 1],
				borderColor: ['#59BBFF'],
				borderWidth: 1,
				backgroundColor: 'rgba(0, 0, 0, 0.0)',
				pointBackgroundColor: 'rgba(0, 0, 0, 0.0)',
				pointHoverBackgroundColor: '#59BBFF',
				pointBorderColor: '#59BBFF',
				tension: 0,
			},
		],
	},
	options: {
		responsive: true,
		lineTension: 1,
		legend: {
			position: 'top',
			align: 'start',
			labels: {
				usePointStyle: true,
				fontColor: '#0071F2',
			},
		},
		scales: {
			scaleLabel: {
				fontColor: 'red',
			},
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						stepSize: 1,
						padding: 15,
					},
					gridLines: {
						drawBorder: false,
						circular: true,
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						drawBorder: false,
						display: false,
						circular: true,
					},
					ticks: {
						padding: 10,
					},
				},
			],
		},
	},
};

export default planetChartData;
