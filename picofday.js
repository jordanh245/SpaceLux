const mainContainer = document.querySelector('.mainContainer');
const input = document.querySelector('.input');
const dayImages = document.querySelector('.dayImages')
const dayTitle = document.querySelector('.dayTitle')
const dayDate = document.querySelector('.dayDate')
const dayPic = document.querySelector('.dayPic')
const dayExp = document.querySelector('.dayExp')

async function dayInfo(){
    const fetchDay = await fetch(`https://api.nasa.gov/planetary/apod?date=${input.value}&api_key=IitCQmPSYDlhiGZl8onwp5nbufwOG8hfhyNdPtOG`);
    const jsonDay = await fetchDay.json();
    

	console.log(jsonDay)



	const title = jsonDay.title;
	const date = jsonDay.date;
	const image = jsonDay.url;
	const explanation = jsonDay.explanation;

	
	dayTitle.innerHTML =(`${title}`)
	dayDate.innerHTML = (`${date}`)
	dayPic.src = (`${image}`);
	dayExp.innerHTML = (`${explanation}`);
}



	



const button = document.querySelector('.viewButton');
button.addEventListener('click', () => {
    dayInfo()
	input.value = ''
}


)
dayInfo()