import "./ObjetivoLista.css";
import { useState, useEffect } from "react";
import { ObjetivoService } from "../../services/ObjetivoService";

function ObjetivoLista() {
  const [objetivos, setObjetivos] = useState([]);

  const getLista = async () => {
    const response = await ObjetivoService.getLista();
    setObjetivos(response);
  };

  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="ObjetivoLista">
      {objetivos.map((objetivo, index) => (
        <div className="ObjetivoListaItem">
          <div>
            <div className="ObjetivoListaItem__descricao">
              {" "}
              {objetivo.descricao}{" "}
            </div>
            <div className="ObjetivoListaItem__valor">
              R$ {objetivo.valor.toFixed(2)}
            </div>
            <div className="ObjetivoListaItem__atingido">
              <input type="checkbox" id="checkbox" name="atingido" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ObjetivoLista;
