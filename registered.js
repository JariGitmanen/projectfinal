const userData = JSON.parse(sessionStorage.getItem('userData'));

const nameSpan = document.getElementById('nameSpan');

nameSpan.innerText = userData.username; 
