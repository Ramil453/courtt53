let serviceID = document.querySelectorAll('.services');
let cooperationID = document.querySelectorAll('.cooperation');

let companyBlock = document.querySelector('.company-block');
let serviceBlock = document.querySelector('.service-block');
let cooperationBlock = document.querySelector('.cooperation-block');

serviceID.forEach(e => {
  e.onclick = function () {
		serviceBlock.scrollIntoView({ behavior: 'smooth' })
	}
})


cooperationID.forEach(e => {
  e.onclick = function () {
		cooperationBlock.scrollIntoView({ behavior: 'smooth' })
	}
});
