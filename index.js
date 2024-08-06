var num=document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        console.log(this);
       var buttonInner=this.innerHTML;
       
        switch (buttonInner) {
        case "a":
            var audi=new Audio("./tom-1.mp3");
            audi.play();
            
            break;
        case "❤️":
            var lovey=new Audio("i-love-you-cartoon-voice-136531.mp3");
            lovey.play();
            
            break;
        case "w":
            var tom2=new Audio("tom-2.mp3");
            tom2.play();
                
            break;
        case "s":
            
            var tom3=new Audio("tom-3.mp3");
            tom3.play();
                    
            break; 
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
                        
             break;
        case "j":
            var crash=new Audio("crash.mp3");
            crash.play();
                            
            break;
        case "l":
            var kik=new Audio("kick-bass.mp3");
            kik.play();
                        
            break;
        case "k":
            var snare=new Audio("snare.mp3");
            snare.play();
                            
            break;
        default:
            break;
        
       }
    })
}

