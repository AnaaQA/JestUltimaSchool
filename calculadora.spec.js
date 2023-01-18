const calculo = require('./soma')
const sub = require('./sub')
const mult = require('./mult')
const div = require('./div')

test ('div dois Numeros', () =>{

    expect (div.div(26,2)).toBe(13)

})
test ('soma dois Numeros', () =>{

    expect (calculo.soma(10,20)).toBe(30)

})
test ('sub um Numeros', () =>{

    expect (sub.subtracao(20,10)).toBe(10)
    
})

test ('mult um  vezes Numeros', () =>{

    expect (mult.mult(5,3)).toBe(10)
    
})