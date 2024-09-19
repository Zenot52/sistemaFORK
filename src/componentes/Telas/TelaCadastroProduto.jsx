import { Alert } from "react-bootstrap";
import FormCadProdutos from "./Formularios/FormCadProduto";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import { produtos } from "../../dados/mockProdutos";

export default function TelaCadastroProduto(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeProdutos, setListaProdutos] = useState(produtos);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produto, setProduto] = useState({
        "codigo":0,
        "descricao":"",
        "precoCusto":0,
        "precoVenda":0,
        "qtdEstoque":0,
        "urlImagem":"",
        "dataValidade":""
    });

    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Produto
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaProdutos 
                            listaDeProdutos={listaDeProdutos} 
                            setExibirTabela={setExibirTabela} 
                            setListaProdutos={setListaProdutos} 
                            setModoEdicao={setModoEdicao}
                            setProduto={setProduto}
                        /> 
                        :
                        <FormCadProdutos 
                            listaDeProdutos={listaDeProdutos}
                            setListaProdutos={setListaProdutos} 
                            setExibirTabela={setExibirTabela} 
                            setModoEdicao={setModoEdicao}
                            ModoEdicao={modoEdicao}
                            setProdutoEdit={setProduto}
                            produtoEdit={produto}
                        />
                }
            </Pagina>
        </div>
    );

}