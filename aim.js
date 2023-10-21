var count=0;
function myFunction()
    {
        count++;
        T = document.getElementById("target");
        let x=0;
        let y=0;
        let z=0;
        x=Math.random()*450
        y=Math.random()*1150
        z=Math.random()*70+10
            T.style.top= x + "px";
            T.style.left= y + "px";
            T.style.width= z + "px";
            T.style.height= z + "px";

            document.getElementById("score").innerHTML=count;
    } 
    function start(){
        A = document.getElementById("time");
        id=null;
        let sec=30;
        document.getElementById("target").addEventListener("click",myFunction);
        id=setInterval(timer,1000);
        function timer ()
        {
            sec--;
        A.innerHTML=sec;
        if(sec==0)
        {   
            alert("GAME OVER your score is : " +count)
            document.getElementById("target").removeEventListener("click",myFunction);
            clearInterval(id)
        }
    }
    


}