// setInterval(setClock, 1000)


// const hourHand = document.querySelector('data-hour-hand');
// const minitHand = document.querySelector('data-minite-hand');
// const secondHand = document.querySelector('data-second-hand');

// function setClock() {
//     const curretnDate = new Date();
//     const secondRatio = curretnDate.getSeconds() / 60
//     const minitRatio = (secondRatio + curretnDate.getMinutes()) / 60
//     const hourRatio = (minitRatio + curretnDate.getHours()) / 12
//     setRotation(secondHand, secondRatio)
//     setRotation(minitHand, miniteRatio)
//     setRotation(hourHand, hourRatio)
// }


// function setRotation( element, rotationRatio) {

//     element.style.setProperty( '--rotation', rotationRatio * 360)
// }
setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

