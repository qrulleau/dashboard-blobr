<template>
	<div class="col landing-page">
		<h2>Statistics</h2>
		<div class="d-flex flex-end selection-time">
			<button>Days</button>
			<button>Weeks</button>
			<button class="active">Months</button>
			<button>Quarters</button>
			<button>Years</button>
			<button>Custom...</button>
		</div>
		<div class="month-sidebar">
			<button class="navigation-right">
				<img src="@/assets/arrow-left.svg" />
			</button>
			<div class="container-month-side-bar">
				<button v-for="date in date" :key="date.month">
					<h3>{{ date.month }}</h3>
					{{ date.years }}
				</button>
			</div>
			<button class="navigation-left">
				<img src="@/assets/arrow-right.svg" />
			</button>
		</div>
		<div class="background-canvas">
			<canvas id="planet-chart"></canvas>
		</div>
		<div class="statistics">
			<h3>Statistics</h3>
			<div class="d-flex">
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</div>
			<h3>Per day</h3>
			<div class="board-income">
				<div class="heading d-flex flex-start">
					<div class="date">
						<h6>Date</h6>
					</div>
					<div class="income t-right">
						<h6>Revenue</h6>
					</div>
					<div class="transaction t-center">
						<h6>Transactions</h6>
					</div>
					<div class="refunds t-right">
						<h6>Refunds</h6>
					</div>
					<div class="transaction t-center">
						<h6>Transactions</h6>
					</div>
					<div class="chargebacks t-right">
						<h6>Chargebacks</h6>
					</div>
					<div class="transaction t-center">
						<h6>Transactions</h6>
					</div>
				</div>
				<div class="first-rows d-flex flex-start align-center">
					<div class="date">
						<p>Tue, 1 Sep 2020</p>
					</div>
					<div class="income t-right">
						<p>€2.00</p>
					</div>
					<div class="transaction t-center">
						<p>1</p>
					</div>
					<div class="refunds t-right">
						<p>€0.00</p>
					</div>
					<div class="transaction t-center">
						<p>0</p>
					</div>
					<div class="chargebacks t-right">
						<p>€0.00</p>
					</div>
					<div class="transaction t-center">
						<p>0</p>
					</div>
				</div>
				<div class="second-rows d-flex flex-start align-center">
					<div class="date">
						<p>Wed, 2 Sep 2020</p>
					</div>
					<div class="income t-right">
						<p>€1.00</p>
					</div>
					<div class="transaction t-center">
						<p>1</p>
					</div>
					<div class="refunds t-right">
						<p>€0.00</p>
					</div>
					<div class="transaction t-center">
						<p>0</p>
					</div>
					<div class="chargebacks t-right">
						<p>€0.00</p>
					</div>
					<div class="transaction t-center">
						<p>0</p>
					</div>
				</div>
				<div class="third-rows d-flex flex-start align-center">
					<div class="date">
						<p>Thu, 3 Sep 2020</p>
					</div>
					<div class="income t-right">
						<p>€3.00</p>
					</div>
					<div class="transaction t-center">
						<p>1</p>
					</div>
					<div class="refunds t-right">
						<p>€0.00</p>
					</div>
					<div class="transaction t-center">
						<p>0</p>
					</div>
					<div class="chargebacks t-right">
						<p>€0.00</p>
					</div>
					<div class="transaction t-center">
						<p>0</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Card from '@/components/Card.vue';
import planetChartData from '@/chart-data.js';
import Chart from 'chart.js';

Chart.Legend.prototype.afterFit = function() {
	this.height = this.height + 40;
};

export default {
	data() {
		return {
			planetChartData,
			date: [
				{
					month: 'January',
					years: '2019',
				},
				{
					month: 'February',
					years: '2019',
				},
				{
					month: 'March',
					years: '2019',
				},
				{
					month: 'April',
					years: '2019',
				},
				{
					month: 'May',
					years: '2019',
				},
				{
					month: 'June',
					years: '2019',
				},
				{
					month: 'July',
					years: '2019',
				},
				{
					month: 'August',
					years: '2019',
				},
				{
					month: 'September',
					years: '2019',
				},
				{
					month: 'October',
					years: '2019',
				},
				{
					month: 'November',
					years: '2019',
				},
				{
					month: 'December',
					years: '2019',
				},
				{
					month: 'January',
					years: '2020',
				},
				{
					month: 'February',
					years: '2020',
				},
				{
					month: 'March',
					years: '2020',
				},
				{
					month: 'April',
					years: '2020',
				},
				{
					month: 'May',
					years: '2020',
				},
				{
					month: 'June',
					years: '2020',
				},
				{
					month: 'July',
					years: '2020',
				},
				{
					month: 'August',
					years: '2020',
				},
				{
					month: 'September',
					years: '2020',
				},
			],
		};
	},
	components: {
		Card,
	},
	methods: {
		createChart(chartId, chartData) {
			const ctx = document.getElementById(chartId);
			ctx.height = 105;
			ctx.width = 401;
			new Chart(ctx, {
				type: chartData.type,
				data: chartData.data,
				options: chartData.options,
			});
		},
	},
	mounted() {
		this.createChart('planet-chart', this.planetChartData);
	},
};
</script>

<style scoped>
.col {
	width: 87.42%;
	background-color: #fbfbfb;
}
h2 {
	font-size: 26px;
	font-weight: bold;
	padding: 24px 24px 24px 40px;
	margin: 0;
	background-color: #ffffff;
	border-bottom: 1px solid #ebebeb;
}
h3 {
	font-size: 22px;
}
h6 {
	font-weight: bold;
	font-size: 14px;
	margin: 0;
}
.transaction h6 {
	font-weight: normal;
}
.selection-time button {
	font-size: 14px;
	background-color: #ffffff;
	border: 1px solid #ebebeb;
	padding: 7px 14px;
}
.selection-time button:nth-child(1) {
	border-bottom-left-radius: 10px;
	border-top-left-radius: 10px;
}
.selection-time button:nth-child(6) {
	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;
}
.selection-time {
	margin: 40px 40px 24px 0;
}
.statistics {
	padding: 0 40px;
}
.statistics h3 {
	margin: 40px 0 16px 0;
}
.date p {
	color: #4d4d4d;
	font-size: 14px;
}
.date {
	width: 14.3%;
}
.income {
	width: 7%;
}
.transaction {
	width: 10.1%;
}
.transaction p,
.transaction h6 {
	font-size: 12px;
	color: #b3b3b3;
}
.refunds {
	width: 18.4%;
}
.refunds p,
.income p {
	font-size: 14px;
}
.income p {
	font-weight: bold;
}
.chargebacks {
	width: 21.2%;
}
.board-income {
	background-color: #ffffff;
	padding-top: 16px;
	border-radius: 8px;
	margin-bottom: 40px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
}
.active {
	color: #0071f2;
	font-weight: 600;
}
.first-rows,
.second-rows,
.third-rows {
	border-top: 1px solid #ebebeb;
	padding-left: 16px !important;
}
.first-rows {
	margin: 0;
}
.heading {
	margin-bottom: 16px;
	margin-left: 16px;
}
.background-canvas {
	background-color: #ffffff;
	padding: 40px;
	border: 1px solid #ebebeb;
}
.month-sidebar {
	display: flex;
	margin: 0 40px 24px 40px;
}
.month-sidebar button {
	background-color: #ffffff;
	padding: 10px 24px;
	border: 1px solid #ebebeb;
	border-right: none;
}
.month-sidebar button h3 {
	font-size: 14px;
	margin: 0;
}
.month-sidebar button br {
	height: 0px;
}
.container-month-side-bar {
	overflow: hidden;
	width: 85vw;
	display: flex;
}
.container-month-side-bar button:nth-child(1) {
	border-left: none;
}
.navigation-right {
	border-bottom-left-radius: 10px;
	border-top-left-radius: 10px;
	padding: 10px 12px !important;
}
.navigation-left {
	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;
	border-left: none !important;
	border-right: 1px solid #ebebeb !important;
	padding: 10px 12px !important;
}
.navigation-left:hover img {
	color: red;
}
</style>
