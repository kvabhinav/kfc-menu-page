const cart=document.querySelector('add')
const come=document.querySelector('#come')
const close=document.querySelector('#close')
const order=document.querySelector('#order')


come.addEventListener('click',()=>{
    if(order.classList.contains('hidden')){
        order.classList.remove('hidden')
        order.classList.add('block')
    }else{
        order.classList.add('hidden')
        order.classList.remove('block')
    }
})

close.addEventListener('click',()=>{
    if(order.classList.contains('hidden')){
        order.classList.remove('hidden')
        order.classList.add('block')
    }else{
        order.classList.add('hidden')
        order.classList.remove('block')
    }
})
