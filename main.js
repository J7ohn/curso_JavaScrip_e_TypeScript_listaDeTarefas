const inputTarefa = document.querySelector('.input-nova-tarefa')
const btnTarefa = document.querySelector('.btn-nova-tarefa')
const listaTarefa = document.querySelector('.tarefas')

function criaLi(){
    const li = document.createElement('li');
    return li
}

function criaTarefa(input){
    const li = criaLi()
    li.innerText = input;
    listaTarefa.appendChild(li);
    limpaInput()
    criaBtn(li)
    salvarTarefas()
}

function criaBtn(li){
    const button = document.createElement('button')
    button.innerHTML = 'Excluir'
    button.setAttribute('class', 'apagar')
    li.appendChild(button)
}

function limpaInput(){
    inputTarefa.value = ""
}

function salvarTarefas(){
    const minhasTarefas = listaTarefa.querySelectorAll('li')
    const todasTarefas = []

    for(let tarefa of minhasTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Excluir', '').replace('\n', '')
        todasTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(todasTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function recuperaTarefaSalva(){
    const tarefas = localStorage.getItem('tarefas')
    const tarefasRecuperadas = JSON.parse(tarefas)

    for(let tarefa of tarefasRecuperadas){
        criaTarefa(tarefa)
    }

}

recuperaTarefaSalva()

document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

btnTarefa.addEventListener('click', function(e){
        !inputTarefa.value ? alert('Digite alguma tarefa para adicionar á lista!') : criaTarefa(inputTarefa.value)
        limpaInput()
    }
)

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if(inputTarefa.value){
            criaTarefa(inputTarefa.value)
            limpaInput()
        }
    }
})