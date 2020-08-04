import React from "react";
import "./App.css";


function App() {
  const linguagens = [
    { id: 1, nome: "HTML", NivelConhecimento: "10%", EmpresaQueCriou: "Tim Berners-Lee"},
    { id: 2, nome: "CSS", NivelConhecimento: "10%", EmpresaQueCriou: "Håkon Wium Lie e Bert Bos"},
    { id: 3, nome: "Javascript", NivelConhecimento: "20%", EmpresaQueCriou: "Brendan Eich"},
    { id: 4, nome: "C#", NivelConhecimento: "50%", EmpresaQueCriou: "Microsoft"},
    { id: 5, nome: "SQL", NivelConhecimento: "10%", EmpresaQueCriou: "Donald Chamberlin"}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem vindo ReactJS s2</h1>
        <p>Rumo ao FullStack:</p>

        <table className="table table-striped table-dark">

          <thead>
            <th scope="row">ID</th>
            <th>Linguagem</th>
            <th>Nível</th>
            <th>Quem Criou?</th>
          </thead>

          <tbody>
            {linguagens.map((x) => (
              <tr>
                <th> {x.id}   </th>
                <td> {x.nome} </td>
                <td> {x.NivelConhecimento} </td>
                <td> {x.EmpresaQueCriou} </td>
              </tr>
            ))}

          </tbody>

        </table>

      </header>
    </div>
  );
}
export default App;
