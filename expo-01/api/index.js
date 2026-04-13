import axios from "axios";

// Substitua pela URL do seu backend implantado na Vercel
const urlBase = "https://seu-projeto-no-vercel.vercel.app/tarefas";

export async function getTarefas() {
  const response = await axios.get(urlBase);
  // Se o seu backend Node retorna um array direto, usamos apenas response.data
  // Se ele retornar { results: [...] }, mantenha response.data.results
  return response.data; 
}

export async function getTarefa(id) {
  const response = await axios.get(`${urlBase}/${id}`);
  return response.data;
}

export async function adicionarTarefa(novaTarefa) {
  const response = await axios.post(urlBase, novaTarefa);
  return response.data;
}

export async function atualizarTarefa(tarefaAtualizada) {
  // Ajuste o .objectId para .id caso seu backend use 'id' como chave primária
  const response = await axios.put(
    `${urlBase}/${tarefaAtualizada.id || tarefaAtualizada.objectId}`,
    tarefaAtualizada
  );
  return response.data;
}

export async function removerTarefa(id) {
  const response = await axios.delete(`${urlBase}/${id}`);
  return response.data;
}