import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

export const ObjetivoService = {
  getLista: () =>
    fetch(Api.objetivoLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.objetivoById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createObjetivo(), { method: "POST" }).then(parseResponse),
  updtateById: (id) =>
    fetch(Api.updateObjetivoById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteObjetivoById(id), { method: "DELETE" }).then(parseResponse),
};