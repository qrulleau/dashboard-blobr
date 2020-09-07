<template>
	<div>
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
						<div class="d-flex flex-start">
							<img src="@/assets/house.svg" alt="" />
							Get started
						</div>
					</a>
				</li>
				<li><a href="#">Transactions</a></li>
				<li><a href="#">Statistics</a></li>
				<li><a href="#">Settings</a></li>
				<li><a href="#">Help Center</a></li>
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
}
ul li a {
	text-decoration: none;
	color: #b3b3b3;
}
nav {
	background-color: #222222;
}
</style>
