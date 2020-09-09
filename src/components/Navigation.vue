<template>
	<div style="height:100vh">
		<div class="profil">
			<h3>Pearson Specter Litt</h3>
			<div class="d-flex relative-position" @click="dropdown">
				<h4>Mike Ross</h4>
				<div class="dropdown">
					<img src="@/assets/vector.svg" alt="" />
				</div>
				<div class="absolute-position">
					<ul>
						<li>
							<a href="#">
								<div class="d-flex flex-start sub-menu">
									<img src="@/assets/user.svg" alt="" />
									Account settings
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="d-flex flex-start sub-menu">
									<img src="@/assets/plus.svg" alt="" />
									New organisation
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="d-flex flex-start sub-menu adjustement">
									<img src="@/assets/logout.svg" alt="" />
									Log out
								</div>
							</a>
						</li>
					</ul>
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
export default {
	methods: {
		dropdown() {
			const menu = document.querySelector('.absolute-position');
			menu.classList.toggle('display-menu');
		},
	},
};
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
ul {
	margin: 0;
	padding: 0;
}
ul li a {
	text-decoration: none;
	color: #b3b3b3;
	font-weight: 500;
}
ul li a:hover .color {
	background-color: blue;
	color: white;
	transition: 400ms;
}
.color {
	color: #b3b3b3;
	padding: 15px 0 12px 22px;
}
ul li img {
	margin-right: 14px;
}
nav {
	background-color: #222222;
	height: 110vh;
}
.relative-position {
	position: relative;
}
.absolute-position {
	position: absolute;
	top: 150%;
	left: 0;
	right: 0;
	background-color: white;
	padding: 15px;
	border-radius: 8px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	display: none;
}

.sub-menu {
	margin-bottom: 13px;
}
.adjustement {
	margin-bottom: 0;
}
.display-menu {
	display: block;
}
.relative-position:hover .dropdown img {
	transform: rotate(180deg);
	transition: 300ms;
}
.profil:hover {
	background-color: #333333;
	transition: 500ms;
}
</style>
