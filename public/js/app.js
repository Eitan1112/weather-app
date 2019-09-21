const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.getElementById('msg-one')
const msgTwo = document.getElementById('msg-two')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''
    
    const url = "/weather?address=" + encodeURIComponent(search.value)
    fetch(url).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                msgOne.textContent = data.error
            } else {
                msgOne.textContent = data.location + '.'
                msgTwo.textContent = data.summary + ' It is ' + data.temperature + ' degrees out, and there is ' + data.rain + '% chance for rain. The humitidy throughout the day is ' + (data.humidity * 100) + '%.' 
            }
        })
    })      
})