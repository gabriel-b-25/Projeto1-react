import { Cabecalho } from "./components/Cabecalho"
import foto  from './assets/foto_perfil_portfolio.jpg'

import { Habilidades } from "./components/Habilidades"
import { Sobre } from "./components/Sobre"
import { Projetos } from "./components/Projetos"
import { Contato } from "./components/Contato"
import { Rodape } from "./components/Rodape"

const curso = "Análise e Desenvolvimento de Sistemas";

function App() {
  return (
    <>
      <Cabecalho
        nome="Gabriel Borges Bizinotto"
        curso="ADS"
        periodo={3}
        foto={foto}

      />

      <Sobre titulo="Sobre">
        <p> Estudante de {curso} no IFTM.</p>       
        <p> Atualmente estou aprendendo algumas tecnologias de interface para desenvolvimento 
          de aplicações web, como Angular e React, com o qual esta página foi desenvolvida.
        </p>

        <Habilidades />

      </Sobre>

      <Projetos />
      <Contato nome="Gabriel Borges Bizinotto" email="fl.gabrielbizinotto@gmail.com" />
      <Rodape 
        nome='Gabriel Borges Bizinotto'
        instituicao='IFTM'
        curso={curso}
        disciplina='Tecnologias de Interface para Aplicações Web'
        ano={2026}
      />
    
    </>
  )
}

export default App
