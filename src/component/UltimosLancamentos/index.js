// src/component/UltimosLancamentos/index.js

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from "../../imgs/Angula.png";

const endpoint =
  "https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding: 20px;
`;

const Titulo = styled.h2`
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
`;

const LivrosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const LivroCard = styled.div`
  margin: 10px;
  text-align: center;
  cursor: pointer;

  img {
    width: 150px;
    height: auto;
    padding: 10px;
    transition: transform 0.2s;
  }

  &:hover img {
    transform: scale(1.05);
  }

  p {
    width: 200px;
    margin: 5px 0;
  }
`;

const Resumo = styled.p`
  font-size: 14px;
  color: #333;
`;

const UltimosLancamentos = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Erro na rede ao buscar livros");
        }

        const data = await response.json();
        setLivros(data);
      } catch (error) {
        console.error("Erro ao buscar os livros:", error);
      }
    };

    fetchLivros();
  }, []);

  const ultimosLancamentos = livros.length > 3 ? livros.slice(-3) : livros;

  return (
    <UltimosLancamentosContainer>
      <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
      <LivrosContainer>
        {ultimosLancamentos.map((livro) => (
          <LivroCard key={livro.id}>
            <img src={livro.imagem} alt={livro.titulo} />
            <p>{livro.titulo}</p>
            <Resumo>{livro.resumo}</Resumo>
          </LivroCard>
        ))}
      </LivrosContainer>

      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
};

export default UltimosLancamentos;
