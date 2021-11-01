fetch("https://api.spacexdata.com/v3/launches").then(res=>res.json()).then(resp=>{
    console.log("resp",resp)
},err=>{
    console.log("err",err)
})

