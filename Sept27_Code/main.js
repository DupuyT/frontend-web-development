// very explicit use of request and response
class URLBuilder{
    constructor(base){
        this.base = base;

        this.params = {};
    }

    addParam(key, value){
        this.params[key] = value;
    }

    build(){
        let url = this.base;

        for (const key in this.params){
            url += "?";
            url += key;
            url += '='
            url += this.params[key];
        }
        return url;
    }
}

const meowfactsUrlBuilder = new URLBuilder('https://meowfacts.herokuapp.com/');
meowfactsUrlBuilder.addParam('count', '4');
const meowfactsUrl= meowfactsUrlBuilder.build();


fetch(meowfactsUrl, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then(response=> response.json())
    .then(json => {
        for (const catfact of json.data){
            const paragraph = document.createElement('p')
            paragraph.innerText= catfact;
            document.body.appendChild(paragraph);
        }
    })
    .catch((error)=> {
        console.error(error);
    });
