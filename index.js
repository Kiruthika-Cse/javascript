let a=12.34+45;
// cant be declared
//let age=34;
//let age=50;
var age=30;
var age=45;
console.log(a,age)
console.log(typeof a)
let x=100
{
    let x=20;
    console.log(x);
}
console.log(x); 
let c=-1/0;
console.log(c);
let b=10n;
console.log(b,typeof b);

let num1=12;
let num2=15;
console.log("Addition of two numbers"+num1 + "and" +num2 + "is","=", num1+num2)

console.log(`addition of two number ${num1} and ${num2} is ${num1+num2}`);
//null
//undefined
let xtr;
console.log(xtr);

let obj=null;
console.log(obj);

const bool=true;
console.log(sece);
var sece='college';  

const user=Object.freeze({
    name:'kiruthika',
    age:19
})

console.log(user);

const userx ={...user,
    age:19
};
const usery={...userx};
usery.age=30;
console.log(userx,usery);
console.log(user);

const details={
    address:{
        street:'4th cross street',
        city:'madurai'
    }
}
console.log(details.city);

/*function sum(n1,n2){
    if(typeof n1 !=='number' || typeof n2!=='number'){
        return 'invalid number'
    }
    return n1+n2;
}
console.log(sum('str',40));
console.log(sum(10,40));*/

const sum=(n1,n2)=>n1+n2;
const calculator=(n1,n2,operation)=>{
    console.log(operation(n1,n2));
}
calculator(10,20,sum);

let s1=" nivee is a good  girl";
let s2=s1.trim();
console.log(s1);

let arr3=[1,2,3,4,5];
arr3.push(6,7,8,9,10);
console.log(arr3);
arr3.pop();
console.log(arr3);

let names=["kishore","roopak","mithesh"];
let name_sliced=names.slice(1,4);
console.log(names,name_sliced);
console.log(names.length,0,"kiruthika","madhuu");
let b1="harish";
console.log(b1.slice(1,b1.length));
let s4="sri eshwar college";
let s5=s4.split("s");
console.log(s5);

const name=" kiruthika nivee niru madhu";
const arr5= name.split(" ");
for(var i=0;i<arr3.length;i++){
    arr5[i]=arr5.charAt(0).toUppercase()+arr5[i].slice(1);
}
const name1=arr5.join(" ");
console.log(name1);
