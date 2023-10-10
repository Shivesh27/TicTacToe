var mat = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]

var chance = 0



var mark = (i,j, div) => {
    if(mat[i][j] === -1) {
        mat[i][j] = chance
        div.innerHTML = chance ? "X" : "O"
        div.style.color = chance ? "white" : "black"
        checkWin()
        chance = chance^1
        console.log("mat curr", mat)
    }
    
}

var checkWin = () => {
    var win = false
    for(var i=0;i<3;i++) {
        if(mat[i][0] == chance && mat[i][1] == chance && mat[i][2] == chance) {
            win = true
        }
        if(mat[0][i] == chance && mat[1][i] == chance && mat[2][i] == chance) {
            win = true
        }
    }

    if(mat[0][0] == chance && mat[1][1] == chance && mat[2][2] == chance) {
        win = true
    }
    if(mat[0][2] == chance && mat[1][1] == chance && mat[2][0] == chance) {
        win = true
    }

    if(win) {
        var userResponse = confirm(`${chance ? "X" : "0"} wins. Do you want to play again`)
        if(userResponse) {
            reset()
        }
    } else {
        var allFilled = true
        for(var i = 0;i<3;i++) {
            for(var j = 0;j<3;j++) {
                if( mat[i][j] == -1) {
                    allFilled = false
                }
            }
        }
        if(allFilled) {
        var userResponse = confirm(`It's a tie. Do you want to play again`)
        if(userResponse) {
            reset()
        }
        }
    }
}

var reset = () => {
    mat = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
    for(let i =0;i<3;i++) {
        for(let j=0;j<3;j++) {
            const div = document.getElementById(`box_${i}_${j}`)
            div.innerHTML = ""
        }
    }
}

for(let i = 0;i< 3;i++) {
    for(let j =0;j<3;j++) {
        const div = document.getElementById(`box_${i}_${j}`)
        div.onclick = () => mark(i,j, div)
    }
}