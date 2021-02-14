const game = document.querySelector(".game")

game.innerHTML = ""
for(let i = 0; i < 9; i++){
    game.innerHTML += '<div class="square"></div>'
}

const squares = Array.from(document.querySelectorAll(".square"))

const options = document.querySelector(".options")

const x = document.getElementById("opt-x")
const o = document.getElementById("opt-o")

const p1Score = document.getElementById("p1-score")
const p2Score = document.getElementById("p2-score")

let opt = ""
let p1Opt = ""

let playing = false
let victory = false

const resetBtn = document.getElementById('reset')
const refreshbtn = document.querySelector(".container button")

const restartGame = function(){
    playing = false
    victory = false

    options.style.display = "initial"
    
    for(i in squares){
        squares[i].innerHTML = ""
        squares[i].style.cursor = "default"
    }
}

const isFilled = function(){
    for(let i in squares){
        if (squares[i].innerHTML === "")
            return false
    }

    return true
}

const verifyWinner = square => {
    if(square.innerHTML === p1Opt)
        p1Score.innerHTML = window.parseInt(p1Score.innerHTML) + 1
    else
        p2Score.innerHTML = window.parseInt(p2Score.innerHTML) + 1

    victory = true
}

const verifyVictory = function(){
    for(let i = 0; i <= 6; i ++){
        if(squares[i].innerHTML !== ""){
            if(i === 0){
                if(squares[i].innerHTML === squares[i+1].innerHTML)
                    if(squares[i].innerHTML === squares[i+2].innerHTML){
                        verifyWinner(squares[i])
                    }
                if(squares[i].innerHTML === squares[i+3].innerHTML)
                    if(squares[i].innerHTML === squares[i+6].innerHTML){
                        verifyWinner(squares[i])
                    }
                if(squares[i].innerHTML === squares[i+4].innerHTML)
                    if(squares[i].innerHTML === squares[i+8].innerHTML){
                        verifyWinner(squares[i])
                    }
            }

            else if(i === 1){
                if(squares[i].innerHTML === squares[i+3].innerHTML)
                    if(squares[i].innerHTML === squares[i+6].innerHTML){
                        verifyWinner(squares[i])
                    }
            }

            else if(i === 2){
                if(squares[i].innerHTML === squares[i+3].innerHTML)
                    if(squares[i].innerHTML === squares[i+6].innerHTML){
                        verifyWinner(squares[i])
                    }
                if(squares[i].innerHTML === squares[i+2].innerHTML)
                    if(squares[i].innerHTML === squares[i+4].innerHTML){
                        verifyWinner(squares[i])
                    }
            }

            else if(i === 3){
                if(squares[i].innerHTML === squares[i+1].innerHTML)
                    if(squares[i].innerHTML === squares[i+2].innerHTML){
                        verifyWinner(squares[i])
                    }
            }

            else if(i === 6){
                if(squares[i].innerHTML === squares[i+1].innerHTML)
                    if(squares[i].innerHTML === squares[i+2].innerHTML){
                        verifyWinner(squares[i])
                    }
            }
        }
    }

    if(isFilled() || victory === true){
        restartGame()
    }
}

const gameIsOn = function(){
    options.style.display = "none"
    
    for(let i in squares)
        squares[i].style.cursor = "pointer"

    for(let j in squares){
        squares[j].addEventListener("click", () => {
            squares[j].style.cursor = "default"

            if(squares[j].innerHTML === "" && playing){
                squares[j].innerHTML = opt
                opt === "x" ? opt = "o" : opt = "x"
            }
            verifyVictory()
        })
    }
}

x.addEventListener("click", () => {
    opt = "x"
    p1Opt = "x"

    playing = true

    gameIsOn()
})

o.addEventListener("click", () => {
    opt = "o"
    p1Opt = "o"

    playing = true

    gameIsOn()
})

resetBtn.addEventListener("click", () => {
    if(playing ===  false){
        p1Score.innerHTML = 0
        p2Score.innerHTML = 0
    }
})
