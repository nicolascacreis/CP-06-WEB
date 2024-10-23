import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../component/Header";
import AppContainer from "../component/AppContainer";

const LivroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
`;

const LivroImagem = styled.img`
  width: 150px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const LivroTitulo = styled.h3`
  font-size: 18px;
  margin: 10px 0 5px 0;
  text-align: center;
  color: #333;
`;

const LivroDescricao = styled.p`
  font-size: 14px;
  text-align: center;
  color: #666;
`;

const LivrosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Categorias = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json"
    )
      .then((response) => response.json())
      .then((data) => setLivros(data))
      .catch((error) => console.error("Erro ao buscar livros:", error));
  }, []);

  return (
    <AppContainer>
      <Header />
      <LivrosGrid>
        {livros.map((livro) => (
          <LivroContainer key={livro.id}>
            <LivroImagem src={livro.imagem} alt={livro.titulo} />
            <LivroTitulo>{livro.titulo}</LivroTitulo>
            <LivroDescricao>{livro.resumo}</LivroDescricao>
          </LivroContainer>
        ))}
      </LivrosGrid>
    </AppContainer>
  );
};

export default Categorias;
