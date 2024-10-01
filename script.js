
async function ApiRest() {


    
    const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY"
  });
  
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

   await fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); 
    
    


    setTimeout((response) => {
        console.log('Retornou a API GOOGLE')
        console.log('Sucesso, liberado a entrada')
      
    },3000 )

  
    

    
    console.log('Retornou os dados')
}

ApiRest()






