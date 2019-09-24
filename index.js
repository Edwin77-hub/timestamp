const   app = require('express')();

// routes
app.get('/api/timestamp/:dateString?', (req, res)=>{
    const dateString =req.params.dateString;

    let date;
    if(!dateString){
        date =new Date();
    }else{
        if(!isNaN(dateString)){
            date = new Date(parseInt(dateString))
        }else{
            date = new Date(dateString)
        }
       
    }

    if (date.toString() === 'Invalid Date') {
        res.json({ error: date.toString() });
      } else {
       
        res.json({ unix: date.getTime(), utc: date.toUTCString() });
      }
})



// ----------------------**-----------------------
app.get('/', (req, res)=>{
    res.send('Works!!!')

})
// server
app.listen('8000', ()=>{
    console.log('Listening in port 8000')
})