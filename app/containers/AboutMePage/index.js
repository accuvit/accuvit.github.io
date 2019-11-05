import React from 'react';
import styled from 'styled-components';
import juniorCampos from '../../images/juniorcampos.gif';

const Root = styled.div`
  background-color: #c3c7cb;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 10px;
`;

export default function AboutMePage() {
  return (
    <Root>
      <div>
        <img src={juniorCampos} />
        <h1 id="sobre">Sobre:</h1>
        <h2 id="resumo">Resumo</h2>
        <p>
          Entusiasta de tecnologia, aspirante a empreendedor (tenho ótimas
          ideias, mas preciso de tempo/dinheiro). Gosto de resolver problemas de
          formas inovadoras e diferentes.
          <br />
          Autodidata a vida inteira, porém pretendo terminar a faculdade um dia
          (atualmente sou matriculado na UFABC, minha faculdade preferida &lt;3)
        </p>
        <h2 id="curiosidades">Curiosidades</h2>
        <ul>
          <li>
            Já fui finalista de um campeonato brasileiro de Guitar Hero 3, mas
            por confusão com a data que me informaram, nem participei da final
            :c
          </li>
          <li>
            Tenho carinho enorme pela minha ex turma de Ciências Moleculares na
            USP (alô T25) e pelo curso em si, que foi um dos motivos de e eu ter
            ido para a UFABC.
          </li>
          <li>A próxima língua que eu pretendo aprender é Chinês</li>
          <li>
            Eu já fui em todas as dez Starbucks da Av. Paulista (Haddock Lobo,
            Shopping Center 3, Consolação, aquela perto da Oscar Freire,
            Shopping Cidade São Paulo, Center Top, Alameda Santos, as duas da
            estação Brigadeiro e Pátio Paulista)
          </li>
          <li>Eu joguei todos os Final Fantasy clássicos</li>
          <li>
            Adoro fazer cursos no Udemy para colocar no meu LinkedIn e tenho
            minhas visões de como isso deveria ser o futuro do mercado de
            trabalho
          </li>
        </ul>
        <h2 id="meus-contatos">Meus Contatos</h2>
        <ul>
          <li>
            <a href="link">LinkedIn</a>
          </li>
          <li>
            <a href="link">Facebook</a>
          </li>
          <li>
            <a href="link">GitHub</a>
          </li>
          <li>
            <a href="link">Steam</a>
          </li>
          <li>
            <a href="laccuvit@gmail.com">laccuvit@gmail.com</a>
          </li>
          <li>
            <a href="+5511977821241">+55 11 97782 1241</a>
          </li>
        </ul>
      </div>
    </Root>
  );
}
