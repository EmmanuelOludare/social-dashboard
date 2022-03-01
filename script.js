const toggleButton = document.getElementById("toggler");
const dailyStats = document.querySelectorAll(".dailystats");
const followers = document.querySelectorAll(".followers");

toggleButton.addEventListener("click",() => {
			toggleButton.classList.toggle("darkmove");
			toggleButton.classList.toggle("dark");
			document.body.classList.toggle("night");
	for(i=0; i<dailyStats.length; i++){
			dailyStats[i].classList.toggle("darkbg");
			};
			for(i=0; i<followers.length; i++){
			followers[i].classList.toggle("darkbg");
			};
			
			
});
