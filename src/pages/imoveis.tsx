import { Header, HouseCard } from '../components'

export default function ImoveisUsuario() {
  const imoveisUsuario = [
    {
      nome: 'Casa no centro',
      cidade: 'Poços de Caldas - MG',
      codigo: 19,
      quartos: 4,
      espacoGaragem: 1,
      valor: 1200,
      imagem: 'https://mapio.net/images-immo2-detalhe/17467146/-img-0.jpeg',
    },
    {
      nome: 'Casa de Campo dos Martins',
      cidade: 'Poços de Caldas - MG',
      codigo: 301,
      quartos: 6,
      espacoGaragem: 4,
      valor: 2000,
      imagem:
        'https://cf.bstatic.com/xdata/images/hotel/max500/346144301.jpg?k=10d526b5542b7357eff4a754d6d67bc2fc3cec22b95f835d691ba518c60fbc0e&o=&hp=1',
    },
  ]

  return (
    <>
      <Header />
      <main className="container mx-auto px-2">
        <h3 className="mt-8 text-2xl font-bold">Seus imoveis</h3>
        <div className="grid mt-8 lg:grid-cols-2 lg:gap-4">
          {imoveisUsuario.map((imovel) => (
            <HouseCard house={imovel} notToSell key={imovel.codigo} />
          ))}
        </div>
      </main>
    </>
  )
}
