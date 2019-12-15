let menu = document.querySelector(".circle")
let items  = menu.querySelectorAll(".circle-item")
let button = menu.querySelector(".circle-button")
let active = false;
const arc = 2 * Math.PI * (1/items.length)
const radius = 35;
button.addEventListener("click",(e)=>{
	e.preventDefault();
	active = !active;
	if(active) {
		button.classList.add("active")
		for(let i = 0;i<items.length;i++){
			const angle = 45 + i * arc;
			const x = radius * Math.cos(angle);
			const y = radius * Math.sin(angle);
			console.log(x,y)
			items[i].style.top = 50 + y + "%";
			items[i].style.left = 50 + x + "%";
		}
	} else {
		button.classList.remove("active")
		for(let i = 0;i<items.length;i++){
				items[i].style.left = 50 + "%";
				items[i].style.top = 50 + "%"
		}
	}
})

























			

// let menus = [...document.querySelectorAll(".circular-menu")]
// menus.forEach((menu)=>{
// 	let items = menu.querySelectorAll(".circular-menu__item");
// 	let button = menu.querySelector(".circular-menu__button");
// 	let active = false;
// 	const length = items.length;
// 	const arc = 2 * Math.PI * (1/length)
// 	const radius = 35;
// 	button.addEventListener("click",(e)=>{
// 		e.preventDefault();
// 		active = !active;
// 		if(active){
// 			button.classList.add("circular-menu__button_activate")
// 			for(let i = 0;i < length;i++){
// 				const angle = i * arc + 45;
// 				const x = radius * Math.cos(angle);
// 				const y = radius * Math.sin(angle);
// 				items[i].style.left =50+ x+"%";
// 				items[i].style.top =50+ y+"%";
// 			}
// 		} else {
// 			button.classList.remove("circular-menu__button_activate")
// 			for(let i = 0;i < length;i++){
// 				items[i].style.left = 50+"%";
// 			items[i].style.top = 50+"%";
// 			}
			
// 		}
// 	});
// });