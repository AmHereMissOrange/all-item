class a{
    constructor(){
        console.log('我是一个动物');
      }
}

class b extends a{
    constructor(){
        super();
        console.log("我是一个程序员");
        //document.getElementById("test").innerHTML="sdfsf";
       // alert("sdf");
    }
    test(im){
        var ab=2;

        alert(im);
    }
}

let test =new b();
test.test("tttt");