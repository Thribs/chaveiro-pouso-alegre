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
                <div className="services-grid">
                    <div className="service-tile">
                        <img src="./images/lockpicking.jfif" alt="Pessoa abrindo fechadura"/>
                        <p>Aberturas de portas residenciais e automotivas</p>
                    </div>

                    <div className="service-tile">
                        <img src="./images/cloning key.jfif" alt="Duas chaves numa máquina de cópia"/>
                        <p>Confecção de chaves codificadas de veículos nacionais e importados</p>
                    </div>

                    <div className="service-tile">
                        <img src="./images/programming key.jfif" alt="Pessoa gravando chave usando equipamento"/>
                        <p>Reparos e codificação de Chaves para carros, motos e caminhões</p>
                    </div>

                    <div className="service-tile">
                        <img src="./images/opening safe.jfif" alt="Pessoa abrindo cofre"/>
                        <p>Abertura de cofres com segredos giratórios e digitais</p>
                    </div>

                    <div className="service-tile">
                        <img src="./images/installing lock.jfif" alt="Pessoa instalando fechadura"/>
                        <p>Instalação de Fechaduras</p>
                    </div>

                    <div className="service-tile">
                        <img src="./images/cloning key2.jfif" alt="Duas chaves numa máquina de cópia"/>
                        <p>Cópias de Chaves residenciais e automotivas</p>
                    </div>

                    <div className="service-tile">
                        <img src="./images/peephole.jfif" alt="Porta com olho mágico"/>
                        <p>Instalação de olho mágico</p>
                    </div>

                    <div className="service-tile">
                        <img src="./images/switchblade key.jfif" alt="Chave canivete na mão de uma pessoa"/>
                        <p>Chave Canivete codificada, com alarme e telecomando</p>
                    </div>

                </div>
               <img src="./images/logo-chaveiro-pouso-alegre.png" alt="Logo Chaveiro Pouso Alegre"/>
           </div>
        </main>
        </>
    )
}

export default Servicos