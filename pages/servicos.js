import Link from 'next/link'
import Head from 'next/head'

function Servicos(){
    return (
        <>
        <Head>
            <title>Serviços</title>
        </Head>
        <aside>
            <Link href='/'>
                <button>
                    <img src="./images/icons/left-arrow.svg" alt="Seta para a esquerda"/>
                </button>
            </Link>
        </aside>
        <main>
           <div className="content">
               <h2>Serviços</h2>

               <div>
                   <img src="./images/lockpicking.jfif" alt="Pessoa abrindo fechadura"/>
                   <h6>Aberturas de portas residenciais e automotivas</h6>
               </div>

               <div>
                   <img src="./images/cloning key.jfif" alt="Duas chaves numa máquina de cópia"/>
                   <h6>Confecção de chaves codificadas de veículos nacionais e importados</h6>
               </div>

               <div>
                   <img src="./images/programming key.jfif" alt="Pessoa gravando chave usando equipamento"/>
                   <h6>Reparos e codificação de Chaves para carros, motos e caminhões</h6>
               </div>
               
               <div>
                   <img src="./images/opening safe.jfif" alt="Pessoa abrindo cofre"/>
                   <h6>Abertura de cofres com segredos giratórios e digitais</h6>
               </div>

               <div>
                   <img src="./images/installing lock.jfif" alt="Pessoa instalando fechadura"/>
                   <h6>Instalação de Fechaduras</h6>
               </div>

               <div>
                   <img src="./images/cloning key2.jfif" alt="Duas chaves numa máquina de cópia"/>
                   <h6>Cópias de Chaves residenciais e automotivas</h6>
               </div>

               <div>
                   <img src="./images/peephole.jfif" alt="Porta com olho mágico"/>
                   <h6>Instalação de olho mágico</h6>
               </div>

               <div>
                   <img src="./images/switchblade key.jfif" alt="Chave canivete na mão de uma pessoa"/>
                   <h6>Chave Canivete codificada, com alarme e telecomando</h6>
               </div>
               <img src="./images/logo-chaveiro-pouso-alegre.png" alt="Logo Chaveiro Pouso Alegre"/>
           </div>
        </main>
        </>
    )
}

export default Servicos