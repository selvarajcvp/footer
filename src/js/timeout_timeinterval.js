let timeout=setTimeout(()=>{
    console.log("settimeout called")
    clearTimeout(timeout);
},5000)