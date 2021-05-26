async function logout() {

    
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}


let dashboard = false;

locationFinder = () => {
  const currentLocation = window.location.toString().split('/')[3];
  console.log(currentLocation)
  if(currentLocation === 'dashboard'){
    console.log(currentLocation + '' + 'inside')
    dashboard = true
    
  }
} 

locationFinder()
console.log(dashboard)
document.querySelector('#logout').addEventListener('click', logout);