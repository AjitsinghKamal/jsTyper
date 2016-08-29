
//jstyper is used as the global namespace for this module
//used anonymous function
//executes immediately
//and protects the global namespace

var jstyper=(function(){
    
    //this provides 
    //public methods and properties
    //interact with interface script
    var span={};
    
    /*----private varibles-----*/
    //list of strings to rotate
    var list=[];
    //keep count of current string
    //in list cycle
    var listIndex=0;
    //keep count of character
    //in the current string
    var strIndex=0;
    //this guy is important
    //tells when to type it or
    //when to delete it
    var typeCheck=true;
    
    var interval=200;
    
    /*---public method-----*/
    /**
     * Gets list of string and element to use on 
     * @params {Element} element
     * @params {[String]} list
     * @params {Int} speed
     * @params {Int} delay
     **/
    span.type=function(element,stringlist,speed){
        span.usedOn=element;
        if(speed){
            interval=speed;
        }
        list=stringlist;
    }
    
    /*----private magic working functions---*/
    
    //this knows when to type and when to delete
    var typingfunction=function(){
        if(listIndex===list.length)
            listIndex=0;
        if(typeCheck)
            typeIt();
        else
            deleteIt();
    }
    
    
    var x=setInterval(typingfunction.bind(typingfunction),interval);
    
    //this types the string by character in given speed
    function typeIt(){
        if(strIndex==-1){
            strIndex+=1;
            clearAndRestartInterval(1000);
            return;
        }
        
        if(strIndex<=list[listIndex].length){
            span.usedOn.innerHTML=list[listIndex].substring(0,strIndex++);
        }
        else{
            clearAndRestartInterval(1000);
            typeCheck=false;
            return;
        }
        
    }
    
    //responsible for rest after completion of each function
    //binking cursor can now be seen
      function clearAndRestartInterval(rest){
          clearInterval(x);
          setTimeout(function(){
              x=setInterval(typingfunction.bind(typingfunction),interval)
          },rest);
      }
    
    //this deletes string by character
    function deleteIt() {
          if (strIndex === -1) {
            listIndex++;
            typeCheck = true;
          } else {
            span.usedOn.innerHTML = list[listIndex].substring(0, strIndex--);
          }
    }

        //return only public parts  
    return span;
}());


