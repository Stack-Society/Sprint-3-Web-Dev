import React from "react";


function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Hospidiet. Todos os direitos reservados.</p>
        <small>Desenvolvido por Vitor de Lima Domingues, Giovanni Romano Provazi e João Pedro Vieira de Morais</small>
      </div>
    </footer>
  );
}

export default Footer;
