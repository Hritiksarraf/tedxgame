let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')



let p1sum = 0
let p2sum = 0
 

function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        if (p1sum == 5) {
            p1sum = 25
        }
        if (p1sum == 14) {
            p1sum = 29
        }
        if (p1sum == 18) {
            p1sum = 39
        }
        if (p1sum == 34) {
            p1sum = 53
        }
        if (p1sum == 37) {
            p1sum = 58
        }
        if (p1sum == 55) {
            p1sum = 76
        }
        if (p1sum == 64) {
            p1sum = 82
        }
        if (p1sum == 67) {
            p1sum = 89
        }
        

        sum = p1sum



    }

   


    document.getElementById(`${player}`).style.transition = `linear all .7s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 60}px`
        document.getElementById(`${player}`).style.top = `${-0 * 60 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        alert("Hey you won and your score is:_____")
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    
    document.getElementById("dice").innerText = num
    document.getElementById('tog').innerText = "Walk on your career journey"
        play('p1', 'p1sum', -7, num)





})