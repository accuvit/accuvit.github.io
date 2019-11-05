import React from 'react';
import styled from 'styled-components';
import { Fieldset } from '@react95/core';

const Root = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 10px;

  fieldset {
    margin: 10px;
  }

  li {
    margin: 5px;
  }
`;

export default function StudiesPage() {
  return (
    <Root>
      <Fieldset legend="Educação Formal">
        <ul>
          <li>
            Universidade de São Paulo (Usp) - Ciências Moleculares (não
            concluida)
            <ul>
              <li>
                Noções avançadas de Física, Química, Matemática, Computação e
                Biologia
              </li>
              <li>Curso para formação de pesquisadores</li>
            </ul>
          </li>
          <li>
            Universidade Federal do ABC (UFABC) - Ciência e Tecnologia
            (Trancada)
          </li>
        </ul>
      </Fieldset>
      <Fieldset legend="Cursos de Extensão">
        <Fieldset legend="Udemy">
          <ul>
            <li>
              <a
                href="https://www.udemy.com/certificate/UC-FASM8757/"
                target="_blank"
              >
                Django Full-Stack Web Developer Bootcamp
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/certificate/UC-ZKMH6SF0/"
                target="_blank"
              >
                Become a Product Manager
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/certificate/UC-DP16U10E/"
                target="_blank"
              >
                Advanced Product Management - Vision, Strategy and Metrics
              </a>
            </li>
          </ul>
        </Fieldset>
      </Fieldset>
    </Root>
  );
}
