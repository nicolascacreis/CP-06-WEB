import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";

const endpoint =
  "https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 470px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const ResultadosContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [livros, setLivros] = useState([]);
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  const fetchLivros = async () => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Erro ao buscar livros");
      }
      const data = await response.json();
      setLivros(data);
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar os livros:", error);
    }
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onChange={(evento) => {
          const textoDigitado = evento.target.value.toLowerCase();
          console.log(textoDigitado);
          if (textoDigitado === "") {
            setLivrosPesquisados([]);
          } else {
            const resultadoPesquisa = livros.filter(
              (livro) =>
                livro.titulo &&
                livro.titulo.toLowerCase().includes(textoDigitado)
            );
            console.log(resultadoPesquisa);
            setLivrosPesquisados(resultadoPesquisa);
          }
        }}
      />
      <ResultadosContainer>
        {livrosPesquisados.map((livro) => (
          <Resultado key={livro.id}>
            <img src={livro.imagem} alt={livro.titulo} />
            <p>{livro.titulo}</p>
          </Resultado>
        ))}
      </ResultadosContainer>
    </PesquisaContainer>
  );
}

export default Pesquisa;
