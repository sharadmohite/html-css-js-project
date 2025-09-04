let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")

const compgenchoice=()=>{
    const options=["rock","paper","scissors"]
    const randomidx=Math.floor(Math.random()*3)
    return options[randomidx]
}

const drawgame=()=>{
    console.log("game was draw")
    msg.innerText="game was draw"
    msg.style.backgroundColor="grey"
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore
        msg.innerText=`"you win!" your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compscorepara.innerText=compScore
        msg.innerText=`"you lose!" ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor="red"
    }
}

const playgame=(userchoice)=>{
    console.log("userchoice is ",userchoice)
    const compchoice=compgenchoice()
    console.log("compchoice is ",compchoice)

    if(userchoice===compchoice){
        drawgame()

    }else{
        let userwin=true
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else  if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice)
    }

}

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
       const userchoice=choice.getAttribute("id")
       console.log("choice was clicked",userchoice)
       playgame(userchoice)
    })
})