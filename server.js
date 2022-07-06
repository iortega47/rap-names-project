const express = require('express')
const app = express()
const PORT = 7000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheeya Bin Abraham',
        'birthLocation': 'London, England'
},
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennet',
        'birthLocation': 'Chicago, Illinois'
},
    'dylan':{
        'age': 29,
        'birthName': 'dylan',
        'birthLocation': 'dylan'
}
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers[dylan])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}, GO CATCH IT!`)
})
