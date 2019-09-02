module.export = {
    precoComDesconto(produto){
        if(produto.desconto){
            produto.precoComDesconto = (produto.desconto * produto.preco) / 100;
            return  produto.preco - produto.precoComDesconto
        }else{
            return produto.preco
        }
    }
}