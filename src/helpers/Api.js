const ObjetivoContext = {
    objetivoEndpoint: () => `${Api.baseUrl}/home`,
    objetivoLista: () => `${ObjetivoContext.objetivoEndpoint()}/all-objetivos`,
    objetivoById: (id) => `${ObjetivoContext.objetivoEndpoint()}/one-objetivo/${id}`,
    createObjetivo: () => `${ObjetivoContext.objetivoEndpoint()}/create-objetivo`,
    updateObjetivoById: (id) => `${ObjetivoContext.objetivoEndpoint()}/update-objetivo/${id}`,
    deleteObjetivoById: (id) => `${ObjetivoContext.objetivoEndpoint()}/delete-objetivo/${id}`,
  };
  
  export const Api = {
    baseUrl: "https://localhost:3001",
    ...ObjetivoContext,
  };