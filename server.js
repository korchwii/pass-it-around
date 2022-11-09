const { response } = require('express')
const express= require('express')
const app= express()
app.listen (3000,()=>{
console.log('listen on port 3000')
})

app.get('/',(request,response)=>{
    const result=`<h1>99 Bottles of beer on the wall</h1>
    <a href='/98'>take one down, pass it around</a>`
    response.status(200).send(result)
})

app.get('/0',(request,response)=>{
    const result=`<h1>0 Bottles of beer on the wall</h1>
    <a href='../'>start over</a>`
    response.status(200).send(result)
})

app.get('/:number_of_bottles',(request,response)=>{
    const{number_of_bottles}=request.params
    const result=`<h1>${number_of_bottles} Bottles of beer on the wall</h1>
    <a href='/${number_of_bottles-1}'>take one down, pass it around</a>`
    response.status(200).send(result)
})

