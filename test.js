// 1.箭头函数没有this,它的this由其作用域链继承而来
function ArrowPerson(){
    this.age=3
    setInterval(()=>{this.age++},1000) //this.age指向实例中的this.age=3
}

var age=0
function FuncPerson(){
    this.age=3
    setInterval(function(){this.age++},1000) // this.age指向window中的age=0
}

var ap=new ArrowPerson();
var fp=new FuncPerson();

ap //从3开始计数
fp //从0开始计数

//2.箭头函数作为对象方法，且包含this时，this指向全局对象
var arrow = '我是window中的this'
var obj ={
    arrow : '我是obj中的this',
    print : ()=>{console.log('在箭头函数中打印this.arrow结果为:'+ this.arrow)}
}
obj.print() //在箭头函数中打印this.arrow结果为:我是window中的this

//3.箭头函数的闭包改写
//3.1 正常闭包函数

function add(){
    var i=0
    return function incre(){
        return (++i)
    }
}

var Counter = add()
Counter() //1
Counter() //2
Counter() //3

//3.2 箭头函数闭包
var add = (i=0)=>{return (()=>(++i))}
var Counter = add()
Counter() //1
Counter() //2
Counter() //3