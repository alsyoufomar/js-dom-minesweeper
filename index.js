/*----------------Mine Sweeper---------------*/

const body = document.querySelector('body');


const mines = [[0, 1], [0, 2], [0, 4], [0, 7], [1, 4], [2, 5], [4, 8], [6, 5], [6, 7]]
const ones = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [2, 1], [4, 1], [2, 2], [3, 2], [4, 2], [2, 3], [3, 4], [5, 4], [6, 4], [7, 4], [3, 5], [5, 5], [4, 5], [0, 6], [1, 6], [2, 6], [3, 6], [1, 7], [3, 7], [4, 7], [7, 7], [0, 8], [1, 8], [3, 8], [6, 8], [7, 8], [3, 9], [4, 9], '59']
const twos = [[1, 1], [1, 2], [2, 4], [0, 5], [5, 6], [6, 6], [7, 6], [5, 7], [5, 8]]
const threes = [[0, 3], [1, 3], [1, 5]]

function isMine (j, i, coor) {
    return coor.some(x => x[0] === j && x[1] === i)
}

for (let j = 0; j < 8; j++) {
    const raw = document.createElement('section')
    raw.classList.add('raw')
    body.append(raw);
    for (let i = 0; i < 10; i++) {
        const div = document.createElement('div');
        raw.append(div);
        if (isMine(j, i, mines)) {
            div.addEventListener('click', miner, { once: true })
        }
        // else if (isMine(j, i, ones)) {
        //     div.addEventListener('click', safe)
        //     div.append(one)
        // }
        // else if (isMine(j, i, twos)) {
        //     div.addEventListener('click', safe)
        //     div.append(two)
        // }
        // else if (isMine(j, i, threes)) {
        //     div.addEventListener('click', safe)
        //     div.append(three)
        // }
        else {
            div.addEventListener('click', safe, { once: true })
        }
    }
}

function safe () {
    const one = document.createElement('h1')
    one.innerText = '1'
    this.append(one)
    return this.setAttribute('class', 'pass')
}

function miner () {
    const mine = document.createElement('h1');
    mine.innerHTML = '<span>&#10038</span>'
    this.append(mine)
    return this.setAttribute('class', 'mine')
}



// const 
// one.innerText = '1'

const two = document.createElement('h1')
two.innerText = '2'

const three = document.createElement('h1')
three.innerText = '3'
