const formulario = document.getElementById('formulario');
const listaDespesasReceitas = document.getElementById('listaDespesasReceitas');
let despesasReceitas = [];

document.getElementById('abrirFormulario').addEventListener('click', () => {
    formulario.style.display = 'block';
});

document.getElementById('fecharFormulario').addEventListener('click', () => {
    formulario.style.display = 'none';
});

document.getElementById('despesasReceitasForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const tipo = document.getElementById('tipo').value;
    const categoria = document.getElementById('categoria').value;
    const data = document.getElementById('data').value;
    const valor = document.getElementById('valor').value;
    const descricao = document.getElementById('descricao').value;

    const item = {
        tipo,
        categoria,
        data,
        valor,
        descricao
    };

    despesasReceitas.push(item);
    mostrarDespesasReceitas();
    formulario.reset();
    formulario.style.display = 'none';
});

function mostrarDespesasReceitas() {
    listaDespesasReceitas.innerHTML = '';
    
    despesasReceitas.forEach((item, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>Tipo:</strong> ${item.tipo}</p>
            <p><strong>Categoria:</strong> ${item.categoria}</p>
            <p><strong>Data:</strong> ${item.data}</p>
            <p><strong>Valor:</strong> ${item.valor}</p>
            <p><strong>Descrição:</strong> ${item.descricao}</p>
            <button onclick="editarDespesaReceita(${index})">Editar</button>
            <button onclick="excluirDespesaReceita(${index})">Excluir</button>
        `;
        listaDespesasReceitas.appendChild(div);
    });
}

function editarDespesaReceita(index) {
    const item = despesasReceitas[index];
    document.getElementById('tipo').value = item.tipo;
    document.getElementById('categoria').value = item.categoria;
    document.getElementById('data').value = item.data;
    document.getElementById('valor').value = item.valor;
    document.getElementById('descricao').value = item.descricao;

    despesasReceitas.splice(index, 1);
    mostrarDespesasReceitas();
    formulario.style.display = 'block';
}

function excluirDespesaReceita(index) {
    despesasReceitas.splice(index, 1);
    mostrarDespesasReceitas();
}
