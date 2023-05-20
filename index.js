const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');
const remainingCounterEl = document.getElementById('remaining-counter');

textareaEl.addEventListener('keyup', ()=>{
    updateCounter();
})

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length
    remainingCounterEl.innerText = textareaEl.getAttribute('maxLength') - textareaEl.value.length
}

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
    alert('Good thing this is a simulator, nobody cares what you tweet!')
    location.reload();
})