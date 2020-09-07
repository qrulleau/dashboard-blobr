<template>
	<div style="height:100vh">
		<div class="profil">
			<h3>Pearson Specter Litt</h3>
			<div class="d-flex">
				<h4>Mike Ross</h4>
				<div>
					<img src="@/assets/vector.svg" alt="" />
				</div>
			</div>
		</div>
		<nav>
			<ul>
				<li>
					<a href="#">
						<div class="d-flex flex-start color">
							<img src="@/assets/house.svg" alt="" />
							Get started
						</div>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="d-flex flex-start color">
							<img src="@/assets/transactions.svg" alt="" />
							Transactions
						</div>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="d-flex flex-start color">
							<img src="@/assets/statistics.svg" alt="" />
							Statistics
						</div>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="d-flex flex-start color">
							<img src="@/assets/settings.svg" alt="" />
							Navigation
						</div>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="d-flex flex-start color">
							<img src="@/assets/help.svg" alt="" />
							Help center
						</div>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
	font-size: 20px;
	line-height: 24px;
	font-weight: bold;
	color: #ffffff;
	margin-bottom: 8px;
}
h4 {
	color: #4cd964;
	font-weight: 500;
	margin: 0;
}
.profil {
	background-color: #000000;
	padding: 20px;
}
ul li {
	list-style: none;
	margin-bottom: 30px;
}
ul li:nth-child(1) {
	padding-top: 15px;
}
ul {
	margin: 0;
	padding-left: 22px;
}
ul li a {
	text-decoration: none;
	color: #b3b3b3;
	font-weight: 500;
}
.color {
	color: #b3b3b3;
}
ul li img {
	margin-right: 14px;
}
nav {
	background-color: #222222;
	height: 88vh;
}
</style>
