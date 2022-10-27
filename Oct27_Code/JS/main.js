//sometimes lodash is the same as native JS
//_.now()
//_.Datenow()
import * as _ from 'lodash';

function Hello(name){
    for (let i = 0; i <times; i++){
        const p = document.createElement('p')
        p.innerHTML = `Hello my name is ${name}`;
        document.body.append(p);
    }
}

// _.delay(Hello, 1500, "Taylor");

const input = document.querySelector('input');
input.addEventListener('change', ()=> {
    const times = _.clamp(input.value, 0, 10);
    _.delay(Hello, 1500, "Taylor");
})