import React, { useState, useEffect } from "react";

// Importe as imagens da pasta 'assets'
import arrozFeijaoImg from '../assets/arroz-feijao.jpg';
import CarnegrelhadaImg from '../assets/carne-grelhada.jpg';
import peixeAssadoImg from '../assets/peixe-assado.jpg';
import macarraoImg from '../assets/macarrao.jpg';
import saladaImg from '../assets/salada-frango.jpg';

function Home() {
  // Cardápios pré-definidos com avaliações, comentários e imagens
  const predefinedMenus = [
    { 
      nome: "Arroz, Feijão e Carne", 
      calorias: 700, 
      estrelas: 4,
      comentario: "Prato clássico e nutritivo, ideal para o dia a dia.",
      imagem: arrozFeijaoImg
    },
    { 
      nome: "Frango Grelhado com Legumes", 
      calorias: 550, 
      estrelas: 5,
      comentario: "Frango leve e saudável, uma opção excelente para quem busca um prato equilibrado.",
      imagem: CarnegrelhadaImg
    },
    { 
      nome: "Peixe Assado com Arroz", 
      calorias: 600, 
      estrelas: 3,
      comentario: "Uma refeição saborosa, mas um pouco mais leve que as demais.",
      imagem: peixeAssadoImg
    },
    { 
      nome: "Macarrão com Molho Bolonhesa", 
      calorias: 800, 
      estrelas: 4,
      comentario: "Ideal para quem adora uma refeição reconfortante e saborosa.",
      imagem: macarraoImg
    },
    { 
      nome: "Salada de Frango com Abacate", 
      calorias: 450, 
      estrelas: 5,
      comentario: "Uma salada refrescante e leve, perfeita para dias quentes.",
      imagem: saladaImg
    },
  ];

  // Pegando cardápios salvos no localStorage
  const [menus, setMenus] = useState(() => {
    const storedMenus = localStorage.getItem("menus");
    return storedMenus ? JSON.parse(storedMenus) : [...predefinedMenus]; // Incluindo os pré-definidos
  });

  // Estado para adicionar novo cardápio
  const [newMenu, setNewMenu] = useState("");

  // Salvando no localStorage sempre que menus mudar
  useEffect(() => {
    localStorage.setItem("menus", JSON.stringify(menus));
  }, [menus]);

  // Função para adicionar novo cardápio com um valor calórico gerado com Math
  const addMenu = () => {
    if (newMenu.trim() === "") return;

    const calorias = Math.floor(Math.random() * 800) + 200; // entre 200 e 1000
    const novoItem = {
      nome: newMenu,
      calorias,
      imagem: "" // Sem imagem ao adicionar um novo cardápio
    };

    // usando desestruturação
    setMenus((prevMenus) => [...prevMenus, novoItem]);
    setNewMenu("");
  };

  // Função para excluir cardápio
  const deleteMenu = (index) => {
    const updatedMenus = menus.filter((_, i) => i !== index); // Filtra o menu que será excluído
    setMenus(updatedMenus);
  };

  return (
    <main className="container my-5">
      <section className="mb-4">
        <h2>Adicionar Cardápio</h2>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Digite o nome do prato"
            value={newMenu}
            onChange={(e) => setNewMenu(e.target.value)}
          />
          <button className="btn btn-success" onClick={addMenu}>
            Adicionar
          </button>
        </div>
      </section>

      <section>
        <h2>Cardápios Personalizados</h2>
        {menus.length === 0 ? (
          <p>Nenhum cardápio adicionado ainda.</p>
        ) : (
          <div className="row">
            {menus.map(({ nome, calorias, imagem }, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card shadow-sm h-100">
                  {imagem && <img src={imagem} alt={nome} className="card-img-top" />}
                  <div className="card-body">
                    <h5 className="card-title">{nome}</h5>
                    <p className="card-text">Valor calórico: {calorias} kcal</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteMenu(index)} // Chamando a função de excluir
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2>Pratos Pré-definidos</h2>
        <div className="row">
          {predefinedMenus.map(({ nome, calorias, estrelas, comentario, imagem }, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card shadow-sm h-100">
                <img src={imagem} alt={nome} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{nome}</h5>
                  <p className="card-text">Valor calórico: {calorias} kcal</p>

                  <div>
                    <span className="text-warning">
                      {Array.from({ length: estrelas }, (_, i) => (
                        <i key={i} className="bi bi-star-fill"></i> // Estrela preenchida
                      ))}
                      {Array.from({ length: 5 - estrelas }, (_, i) => (
                        <i key={i} className="bi bi-star"></i> // Estrela vazia
                      ))}
                    </span>
                    <p>{comentario}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
