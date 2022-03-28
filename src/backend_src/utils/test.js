

 function sendAxios(){
    axios({
        method: 'GET',
        url: 'http://127.0.0.1:3000'
    })
}

let btn1 =document.getElementById("btn1");
btn1.addEventListener("click",sendAxios);

