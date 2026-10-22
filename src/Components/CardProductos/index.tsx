import Camiseta from "../../../public/img/camiseta-2.png";

export const CardProductos = () =>  {
    return (
         <div  className="text-white max-w-sm rounded-2xl overflow-hidden  shadow-lg">
        <img src={Camiseta} alt="camisa dev  em  dobro" />

        <div className="py-10 px-5 flex flex-col gap-4 bg-card">
          <h2>Camisa Dev Em Dobro</h2>

          <div >
            <p>Cor: Roxo</p>
            <p>Tamanho: M</p>
          </div>

          <p className="self-end text-preco text-xl font-semibold">R$89,00</p>
          <button className="bg-purple-600 py-3  rounded  hover:bg-purple-700 cursor-pointer ">Adicionar ao Carrinho</button>
        </div>

      </div>
    )
}