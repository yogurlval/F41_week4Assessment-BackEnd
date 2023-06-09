
const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById("fortuneButton")
const affButton = document.getElementById("affButton")
const affContainer = document.getElementById("aff-container")
const form = document.querySelector("form")
const submitButton = document.getElementById("submit")
const input = document.querySelector('input')

function displayAffirmations(arr){
    affContainer.innerHTML ='Affirmations List'
    arr.forEach((item,index) =>{
        const listItem = document.createElement('li')
        
        listItem.textContent = item.name
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'remove'
        deleteBtn.id = index
        deleteBtn.addEventListener('click', deleteAffirmation)
        
        listItem.appendChild(deleteBtn)
        affContainer.appendChild(listItem)
})

}

function getAffirmations(evt){
    axios.get("http://localhost:4000/api/affirmations/")
    .then(response =>{
        console.log(response.data)
        displayAffirmations(response.data)
   
    })
}

const addAffirmation = (evt) =>{
    evt.preventDefault()
    let bodyObj = {
        name: input.value,
    }

    axios.post("http://localhost:4000/api/affirmations/", bodyObj)
    .then(response =>{
        displayAffirmations(response.data)
    }).catch(err => console.log(err))
}

const deleteAffirmation = evt =>{
    axios.delete(`http://localhost:4000/api/affirmations/${evt.target.id}`)
    .then(response =>{
        displayAffirmations(response.data)
    })
}




const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () =>{
    axios.get("http://localhost:4000/api/fortune")
    .then(resp => {
        const data = resp.data;
        alert(data)
    })
}



complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener('click', getFortune)
affButton.addEventListener('click', getAffirmations)
form.addEventListener('submit', addAffirmation)



