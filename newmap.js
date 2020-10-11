const i=345;
const j='j'+45;
const h='j45';

console.log(typeof i);
console.log(typeof j);
console.log(typeof h);

const myMap=new Map();

myMap.set('id',3);
myMap.set('name','honda');

console.log(myMap);
console.log(myMap.get('name'));

const valuelist=myMap.values();
for(value of valuelist){
    console.log(value);
}


