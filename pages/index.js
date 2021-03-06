import Link from 'next/link'
import Head from 'next/head'
function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Chaveiro Pouso Alegre</title>
            </Head>
            <title>Chaveiro Pouso Alegre</title>
            <div id="page-home">
            <div>
                <h1>Chaveiro Pouso Alegre</h1>
                <h2>Chaves e Fechaduras</h2>
            </div>
            <main>
                <Link href="./horarios">
                    <button className='large-button'>
                        Chamar um Chaveiro
                    </button>
                </Link>
                <Link href="./servicos">
                    <button className='large-button'>
                        Serviços
                    </button>
                </Link>
                <Link href="./sobre">
                    <button className='large-button'>
                        Sobre nós
                    </button>
                </Link>
                    <div>
                        <img src="./images/logo-chaveiro-pouso-alegre.png" alt="Logo Chaveiro Pouso Alegre" className="logo"/>
                    </div>
                <Link href="https://wa.me/5535991750735">
                <button className="small-button">
                        <img src="./images/icons/WhatsApp_icon 1.png" alt="Botão WhatsApp"/>
                    </button>
                </Link>
                <Link href="https://www.google.com/maps/dir//Av.+Pref.+Olavo+Gomes+de+Oliveira,+1724+-+Costa+Rios,+Pouso+Alegre+-+MG,+37550-000/@-22.250623,-45.9335257,17z">
                    <button className="small-button">
                        <img src="./images/icons/map-cursor.svg" alt="Botão Mapa"/>
                    </button>
                </Link>
                <Link href="./galeria">
                    <button className="small-button">
                        <img src="./images/icons/plus.svg" alt="Botão Mais"/>
                    </button>
                </Link>
            </main>
        </div>
        </div>
    )
}

export default Home 