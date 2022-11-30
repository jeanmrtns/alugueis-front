import { Header } from '../components'

export default function Perfil() {
  return (
    <>
      <Header />
      <main>
        
        <div className="container mx-auto">
          <div className="grid mt-8 lg:grid-cols-2 lg:gap-4">
            <div className="flex items-center  gap-4 p-2 rounded border border-zinc-200">
              <div>
                <h1>Imóveis Alugados</h1>
              </div>
              <div>
                <table>
                  <tr>
                    <th>Imóvel</th>
                    <th>Proprietário</th>
                    <th>E-mail</th>
                    <th>Status da Mensalidade</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>Apartamento em São Paulo</td>
                    <td>Maicon Dias</td>
                    <td>maicon@email</td>
                    <td>Paga</td>
                    <td>
                      {/* se clicar, aparece um modal com o qrcode no pix, algo assim */}
                      <button>
                        Botão - Pagar Aluguel
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Sala Comercial - Poços Premium</td>
                    <td>Jerry Smith</td>
                    <td>jerry@email</td>
                    <td>Atrasada</td>
                    <td>
                      <button>
                      Botão - Pagar Aluguel
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="grid mt-8 lg:grid-cols-2 lg:gap-4">
            <div className="flex items-center  gap-4 p-2 rounded border border-zinc-200">
              <div>
                <h1>Propostas recebidas</h1>
              </div>
              <div>
                <table>
                  <tr>
                    <th>Imóvel</th>
                    <th>Proponente</th>
                    <th>E-mail</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>Tipo</th>
                    <th>Oferta</th>
                  </tr>
                  <tr>
                    <td>Casa de campo dos Martins</td>
                    <td>Caio Cesar Pan Lopes de Barros</td>
                    <td>caiocesar@email</td>
                    <td>123.123.123-12</td>
                    <td>35 94234-4536</td>
                    <td>Compra</td>
                    <td>Olá, Jean. Tudo bem? Tenho interesse em comprar este imóvel, gostaria de agendar uma visita! Muito obrigado</td>
                  </tr>
                  <tr>
                    <td>Apartamento Luxuoso</td>
                    <td>Ulysses Machado</td>
                    <td>Ulysses@email</td>
                    <td>123.123.123-12</td>
                    <td>35 94234-4536</td>
                    <td>Aluguel</td>
                    <td>E aí, Jean. Tranquilo? Vou estar em Poços durante janeiro e fevereiro e gostaria de alugar seu imóvel durante esse período</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="grid mt-8 lg:grid-cols-2 lg:gap-4">
            <div className="flex items-center  gap-4 p-2 rounded border border-zinc-200">
              <div>
                <h1>Propostas enviadas</h1>
              </div>
              <div>
                <table>
                  <tr>
                    <th>Imóvel</th>
                    <th>Proprietário</th>
                    <th>E-mail</th>
                    <th>Tipo</th>
                    <th>Oferta</th>
                  </tr>
                  <tr>
                    <td>Chalé Rústico e aconchegante</td>
                    <td>Lucas Paiva</td>
                    <td>LukinhasFera@email</td>
                    <td>Aluguel</td>
                    <td>Boa noite! Gostaria de alugar o chalé para minha Lua de Mel</td>
                  </tr>
                  <tr>
                    <td>Sala comercial no centro</td>
                    <td>Ulysses Machado</td>
                    <td>Ulysses@email</td>
                    <td>Aluguel</td>
                    <td>Boa dia! Tenho interesse em alugar esta sala comercial por 3 anos</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
