<template>
	<div class="card">
		<div class="small-container">
			<div class="d-flex align-center">
				<h4>Revenue</h4>
				<p class="detail">
					Transactions
				</p>
			</div>
		</div>
		<div class="border">
			<div class="small-container">
				<div class="d-flex">
					<p class="prix">
						€5.00
					</p>
					<p class="quantité">4</p>
				</div>
			</div>
		</div>
		<div class="small-container">
			<h5>Compared to last year</h5>
			<div class="d-flex">
				<p class="last-year-monney">€0.00</p>
				<p class="last-year-product">€0.00</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
	width: 350px;
}
h4 {
	font-weight: bold;
	margin: 0;
}
.align-center {
	margin-bottom: 8px;
}
h5 {
	font-weight: bold;
	margin: 8px 0 10px 0;
	font-size: 16px;
}
.detail {
	font-size: 12px;
	color: #b3b3b3;
	margin: 0;
}
.prix,
.quantité {
	font-weight: bold;
	font-size: 24px;
}
.quantité {
	font-weight: normal;
}
.card {
	border: 1px solid #ebebeb;
	background-color: #ffffff;
	padding: 8px 0px 16px 0px;
	border-radius: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
}
.small-container {
	padding: 0 16px;
}
.border {
	border-top: 1px solid #ebebeb;
	border-bottom: 1px solid #ebebeb;
}
.last-year-monney,
.last-year-product {
	margin: 0;
	color: #b3b3b3;
	font-size: 12px;
}
</style>
