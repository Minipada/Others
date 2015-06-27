							var pieData = [
								{
									value: 15,
									color:"#0088AF",
									highlight: "#1A94B7",
									label: "DIY"
								},
								{
									value: 35,
									color: "#33A0BF",
									highlight: "#4DACC7",
									label: "Robotics"
								},
								{
									value: 25,
									color: "#66B8CF",
									highlight: "#80C4D7",
									label: "Entrepreneurship"
								},
								{
									value: 15,
									color: "#99CFDF",
									highlight: "#B3DBE7",
									label: "Web"
								},
								{
									value: 15,
									color: "#CCE7EF",
									highlight: "#b1deeb",
									label: "Hacking"
								}
							];

							window.onload = function(){
								var ctx = document.getElementById("chart-area").getContext("2d");
								window.myPie = new Chart(ctx).Pie(pieData);

							};
