const criarContrato = (nome, taxa) => {
    return {
        type :"CRIAR_CONTRATO",
        payload:{
            nome, taxa
        }
    }
} 

const cancelarContrato = (nome) =>{
    return {
        type : "CANCELAR_CONTRATO",
        payload:{
            nome
        }
    }
}

const solicitarCashback = (nome,valor) =>{
    return {
        type: "SOLICITAR_CASHBACK",
        payload:{
            nome, valor
        }
    }
}

//funcão redux
const historicoDePedidosDeCashBacksReducer = (historicoDePedidosDeCashBacksAtual = [], acao) => {
    if (acao.type === "SOLICITAR_CASHBACK") {
        return{
            ...historicoDePedidosDeCashBacksAtual,
            acao,payload
        }
    }
    return historicoDePedidosDeCashBacksAtual

}

//outra função redux

const caixaReducer = (dinheiroEmCaixa = 0, acao) => {
    if(acao.type === "SOLICITAR_CASHBACK"){
        dinheiroEmCaixa = dinheiroEmCaixa - acao.payload.valor
    }
    else if(acao.type === "CRIAR_CONTRATO"){
        dinheiroEmCaixa = dinheiroEmCaixa + acao.payload.taxa
    }
    return dinheiroEmCaixa
}