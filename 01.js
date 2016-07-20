//有一个数组，写一个函数，找出该数组中没有重复数的总和
var ary=[3,4,1,2,5,6,6,5,4,3,3];
function repeat (ary) {
    var newAry=[];
    for (var i = 0; i < ary.length; i++) {
        if(ary.lastIndexOf(ary[i])==ary.indexOf(ary[i])){
            newAry.push(ary[i])
        }
    }
    var sum=0;
    newAry.forEach(function (item,index) {
        sum+=item
    })
    return sum
}
console.log(repeat(ary));
//0-99这100个书中随机抽取10个，要求不能重复
function ran(){
    var ary=[]
    for(var i=0;i<10;i++){
       var cur=Math.round(Math.random()*99);
    if(ary.indexOf(cur)==-1){
        ary.push(cur)
    }else{
        i--
    }
  }
    console.log(ary);
}
ran()

/*
* cookie session localStorage  区别
* cookie 和  localStorage 都是保存再客户端的
* session  保存在服务端的
* localStorage用于持久化的本地存储，浏览器窗口关闭后，
* localStorage存储的数据仍然可以被访问
* */

