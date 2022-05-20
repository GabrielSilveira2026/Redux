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
const historicoDePedidosDeCashBacks = (historicoDePedidosDeCashBacks = []) => {

}