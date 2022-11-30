import Head from 'next/head'
import { Header, HouseCard } from '../components'

export default function Home() {
  const imoveis = [
    {
      nome: 'Casa do Seu José',
      cidade: 'Poços de Caldas - MG',
      codigo: 154,
      n_quartos: 2,
      n_carros: 1,
      valor: 9000,
      imagem:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      nome: 'Triplex aconchegante',
      cidade: 'São João da Boa Vista - SP',
      codigo: 133,
      n_quartos: 9,
      n_carros: 3,
      valor: 10000,
      imagem:
        'https://www.revistause.com.br/wp-content/uploads/2022/09/villandry-1-1000x600.jpg',
    },
    {
      nome: 'Chalé Rústico',
      cidade: 'Poços de Caldas - MG',
      codigo: 295,
      n_quartos: 5,
      n_carros: 1,
      valor: 4000,
      imagem:
        'https://i.pinimg.com/236x/bb/84/17/bb84179759a6dfd5df48166fee4989f2.jpg',
    },
    {
      nome: 'Luxuosa Casa de Férias',
      cidade: 'Divinolândia - SP',
      codigo: 51,
      n_quartos: 14,
      n_carros: 5,
      valor: 15000,
      imagem:
        'https://media.vrbo.com/lodging/35000000/34630000/34625200/34625104/f1c847c7.f6.jpg',
    }
  ];

  const imoveis_usuario = [
    {
      nome: 'Casa no centro',
      cidade: 'Poços de Caldas - MG',
      codigo: 19,
      n_quartos: 4,
      n_carros: 1,
      valor: 1200,
      imagem: 'https://mapio.net/images-immo2-detalhe/17467146/-img-0.jpeg',
    },
    {
      nome: 'Casa de Campo dos Martins',
      cidade: 'Poços de Caldas - MG',
      codigo: 301,
      n_quartos: 6,
      n_carros: 4,
      valor: 2000,
      imagem:
        'https://cf.bstatic.com/xdata/images/hotel/max500/346144301.jpg?k=10d526b5542b7357eff4a754d6d67bc2fc3cec22b95f835d691ba518c60fbc0e&o=&hp=1',
    },
  ];

  return (
    <>
      <Head>
        <title>Alugueis - Pagina Inicial</title>
      </Head>
      <Header />
      <main>
        <div className="container mx-auto">
          <div className="grid mt-8 lg:grid-cols-2 lg:gap-4">
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <HouseCard />
          </div>
        </div>
      </main>
    </>
  )
}
