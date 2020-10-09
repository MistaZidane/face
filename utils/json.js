const fs = require('fs');

module.exports.add = (data)=>{
 fs.writeFile('data.json',JSON.stringify(data),(err)=>{
     if(err){console.log(err)}
     else{
         console.log("done");
     }
 });

}

module.exports.get = ()=>{
  let data=  fs.readFileSync('data.json');
  return JSON.parse(data.toString());
   }

   module.exports.addRegister = (data)=>{
    fs.writeFile('register.json',JSON.stringify(data),(err)=>{
        if(err){console.log(err)}
        else{
            console.log("done");
        }
    });
   
   }
   
   module.exports.getRegister = ()=>{
     let data=  fs.readFileSync('register.json');
     return JSON.parse(data.toString());
      }

      module.exports.addDelete = (data)=>{
        fs.writeFile('delete.json',JSON.stringify(data),(err)=>{
            if(err){console.log(err)}
            else{
                console.log("done");
            }
        });
       }
       
       module.exports.getDelete = ()=>{
         let data=  fs.readFileSync('delete.json');
         return JSON.parse(data.toString());
          }