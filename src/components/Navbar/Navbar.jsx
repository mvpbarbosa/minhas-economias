import "./Navbar.css";

function Navbar() {
  return (
    <div className="Header">
      <div className="row">
          <span className="Logo__titulo"> Minhas Economias </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <div className="Opcoes__adicionar Adicionar">
            <button className="btnAdicionar">
                Adicionar
            </button>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
