function changeToLight(){$(".bg-dark").each(function(){$(this).removeClass("bg-dark").addClass("bg-white")}),$(".dark").each(function(){$(this).addClass("light"),$(this).removeClass("dark")}),$(".vertical-menu li .dark-mode span").text("حالت تاریک"),localStorage.setItem("dark-mode","light")}$(".change-dark-mode").click(()=>{"light"===localStorage.getItem("dark-mode")?($(".bg-white").each(function(){$(this).removeClass("bg-white").addClass("bg-dark")}),$(".light").each(function(){$(this).addClass("dark"),$(this).removeClass("light")}),localStorage.setItem("dark-mode","dark"),$(".vertical-menu li .dark-mode span").text("حالت روشن")):changeToLight()});let mode=localStorage.getItem("dark-mode");"light"===mode&&changeToLight();