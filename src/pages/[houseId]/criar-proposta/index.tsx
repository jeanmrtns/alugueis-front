import { Header } from '../../../components'

export default function CriarProposta() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-14 px-2">
        <form className="mt-8">
          <h4 className="mb-4 font-bold text-2xl">
            Informe seus dados e sua oferta
          </h4>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="name">Nome completo</label>
            <input
              type="text"
              id="name"
              className="border border-zinc-400 p-2 rounded outline-green-500"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border border-zinc-400 p-2 rounded outline-green-500"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              className="border border-zinc-400 p-2 rounded outline-green-500"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="phone">Telefone</label>
            <input
              type="tel"
              id="phone"
              className="border border-zinc-400 p-2 rounded outline-green-500"
            />
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <label htmlFor="buy">Comprar</label>
              <input type="radio" name="type" id="buy" />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="rent">Alugar</label>
              <input type="radio" name="type" id="rent" />
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="offer">Deixe sua oferta</label>
            <textarea
              name="offer"
              id="offer"
              className="h-24 w-full border border-zinc-400 p-2 rounded outline-green-500"
            ></textarea>
          </div>

          <button className="cursor-pointer mt-12 bg-red-600 w-52 px-2 py-4 rounded block text-center text-zinc-50 font-bold hover:bg-red-500 transition-colors">
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}
