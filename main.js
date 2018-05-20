const memory = new Array(30000)
for(let i = 0; i < memory.length; i++) {
    memory[i] = 0
}

// const str = ">+++++++++[<++++++++>-]<.>+++++++[<++++>-]<+.+++++++..+++.[-]>++++++++[<++++>-]<.>+++++++++++[<++++++++>-]<-.--------.+++.——.———.[-]>++++++++[<++++>—]<+.[-]++++++++++."
const str = "++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>."
let currentCell = 0 // index current cell in memory
for(let i = 0; i < str.length; i++) {
    let cellValueStr = str[i]
    if(cellValueStr === '>') {
        currentCell += 1
    } else if(cellValueStr === '<') {
        currentCell -= 1
    } else if(cellValueStr === '-') {
        memory[currentCell] -= 1
    } else if(cellValueStr === '+') {
        memory[currentCell] += 1
    } else if(cellValueStr === '.') {
        console.log(String.fromCharCode(memory[currentCell]))
    } else if (cellValueStr === '[') {
        while(memory[currentCell] !== 1) {
            let z = i + 1
            while(str[z] !== ']') {
                if(str[z] === '>') {
                    currentCell += 1
                } else if(str[z] === '<') {
                    currentCell -= 1
                } else if(str[z] === '-') {
                    memory[currentCell] -= 1
                } else if(str[z] === '+') {
                    memory[currentCell] += 1
                } else if(str[z] === '.') {
                    console.log(String.fromCharCode(memory[currentCell]))
                }
                z++
            }
        }
    }
}