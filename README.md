# Lista de Tarefas

Este é um projeto de uma lista de tarefas que permite ao usuário adicionar e excluir tarefas, e armazena essas informações no **localStorage** do navegador. Dessa forma, as tarefas são salvas automaticamente e permanecem disponíveis mesmo após o fechamento ou atualização da página.

## Funcionalidades

- **Adicionar Tarefas**: Permite que o usuário adicione uma nova tarefa à lista.
- **Excluir Tarefas**: Cada tarefa possui um botão "Excluir" para removê-la da lista.
- **Armazenamento Local**: As tarefas são salvas no localStorage, garantindo que o usuário não perca as informações ao sair da página.

## Código Principal

O projeto utiliza HTML, CSS e JavaScript para criar a interface e funcionalidades:

- **JavaScript DOM Manipulation**: Usa seletores (`querySelector`, `addEventListener`, etc.) para manipular elementos da página.
- **localStorage**: Salva as tarefas como uma string JSON e as recupera ao carregar a página novamente.
- **Eventos**: Implementa eventos para clicar no botão de adicionar tarefa, pressionar "Enter" e excluir tarefas.

### Principais Funções

- `criaTarefa(input)`: Cria um elemento `li` com o texto da tarefa e um botão "Excluir".
- `salvarTarefas()`: Salva a lista de tarefas no localStorage.
- `recuperaTarefaSalva()`: Recupera a lista de tarefas do localStorage e a exibe na página.
- Eventos para adicionar e excluir tarefas através de cliques e teclas.

## O Que Pode Ser Aprendido com Este Projeto

Ao desenvolver e analisar este projeto, é possível aprender:

1. **Manipulação do DOM**: Como selecionar elementos, criar novos itens (`li`) e manipular classes e atributos.
2. **Eventos em JavaScript**: Como criar eventos para clique de botões, exclusão de tarefas, e ação com a tecla Enter.
3. **Armazenamento Local com localStorage**: Aprender a salvar dados localmente usando `localStorage.setItem` e recuperá-los com `localStorage.getItem`.
4. **JSON em JavaScript**: Como transformar listas em JSON para armazenamento, e converter JSON de volta em listas para uso na aplicação.
5. **Lógica de Programação**: Exemplo de como criar funcionalidades básicas de um aplicativo de lista de tarefas, incluindo a lógica de exclusão e adição de itens e atualização do localStorage.

## Como Executar o Projeto

1. Clone ou baixe este repositório.
2. Abra o arquivo HTML em um navegador.
3. Adicione novas tarefas no campo de entrada e pressione Enter ou clique em "Adicionar".
4. Exclua tarefas individualmente ao clicar no botão "Excluir" ao lado de cada tarefa.
