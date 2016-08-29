
var s=document.getElementById("typed");
var editor=document.getElementById("editor");
var speed=200;
var array=['hello','world'];

jstyper.type(s,array,speed);
//attach clicklistener
document.getElementById("trial").addEventListener('click',function(){
    let input=editor.value;
    if(input.length>0){
        array=input.split('\n');
        jstyper.type(s,array);
    }
    else
        jstyper.type(s,["Please input something!"])
    
    
})

document.getElementById("info").addEventListener('click',function(){
    jstyper.type(s,["created by AjitsinghKamal","I'm up for hire "])
})

document.getElementById("fast").addEventListener('click',function(){
    speed-=50;
    jstyper.type(s,array,speed)
    
})

document.getElementById("slow").addEventListener('click',function(){
    speed+=50;
    jstyper.type(s,array,speed);
    
})

