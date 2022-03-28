const fs = require('fs');
const {promisify} = require('util');
const myReadFile = promisify(fs.readFile);
const myWriteFile = promisify(fs.writeFile);
const path = require('path');

class Fakedb{
    constructor(filePathInAssets){
        this.filePath = path.normalize(filePathInAssets);
        this.data = null;
    }

    async readData(){
        try {
            let data = await myReadFile(this.filePath,'utf-8');
            this.data = JSON.parse(data);
            return JSON.parse(data);
        }catch(e){
            console.log(e)
        }
    }

    writeData(data){
        console.log("write data:"+JSON.stringify(data))
       try {
        myWriteFile(this.filePath,JSON.stringify(data));
        return true;
       }catch(e){
        console.log(e)
       }
    }

    async appendKV(key,value){
        console.log("appendkv")
        if(this.data){
            this.data[key] = value;
        }else{
            this.data = await this.readData();
            this.data[key] = value;
        }
        this.writeData(this.data);
        return true;
    }

    findValue(key){
        try{
        return this.data[key]
        }catch(e){
            console.log(e)
            return null;
        }
    }

    delete(key){
        try{
            delete this.data[key];
            this.writeData(this.data);
            return true;
        }catch(e){
            return false;
        }
    }

    changeValue(key,value){
            this.data[key] = value;
            this.writeData(this.data);
            return true;

    }
}

module.exports.Fakedb=Fakedb;

// async function logout(){
//     let fakerDb = new Fakedb("db.json");
//     let data = await fakerDb.readData()
//     for (const key in data) {
//         if (Object.hasOwnProperty.call(data, key)) {
//             const element = data[key];
//             console.log(key);
//         }
//     }
// }

// logout()

