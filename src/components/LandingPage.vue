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
export default {
	components: {
		Card,
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
	font-size: 12px;
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
.transaction p {
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
</style>
