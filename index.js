const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.json());

const users =[  {
    name :'SATHWIK',
    kidneys : [ {    
        healthy:false
    }]
}];


app.get('/', (req, res) => {
     const details = users[0].kidneys;
     
     const noofkidneys = details.length;
     let noofhealthykidneys = 0
     for (let i =0 ; i< noofkidneys ; i++)
     {
        if (details[i].healthy) {
            noofhealthykidneys = noofhealthykidneys +1 ;
        }
     }

     let noofunhealthykidneys  = noofkidneys - noofhealthykidneys;


     res.json({
        noofkidneys, noofhealthykidneys , noofunhealthykidneys
     });
   
     
});

app.post ('/',(req,res)=> {
      const ishealthy = req.body.ishealthy;
      users[0].kidneys.push({healthy : ishealthy});
      res.json({ msg : 'done!'});
})

app.put('/', (req,res) =>{
    const  len = users[0].kidneys.length
   for ( let i=0 ; i < len ;i++)
   {
        users[0].kidneys[i].healthy = true;
    
   }
    res.json({});
})

app.delete('/', (req,res) =>{
    const  len = users[0].kidneys.length;
    let arraykidneys = []
   for ( let i=0 ; i < len ;i++)
   {    if(users[0].kidneys[i].healthy)
    {
         arraykidneys.push({
            healthy:true
         })    
    }
   }
   users[0].kidneys = arraykidneys;
    res.json({msg : 'unhealthy kidneys removed'});
})


app.listen(port , () => {
    console.log(`port running  at ${port}`);
});
