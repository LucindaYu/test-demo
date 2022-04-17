const p = document.querySelector('p');

let xhr = new XMLHttpRequest();
xhr.open('get', "http://devlsub.iot.com:53310/city/getProviceList",true);

xhr.onreadystatechange = () =>{
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            p.innerHTML = xhr.responseText;
        }
    }
}

xhr.send(null);