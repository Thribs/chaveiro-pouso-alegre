import Link from 'next/link'
import Head from 'next/head'
function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Chaveiro Pouso Alegre</title>
                <link
                    rel="preload"
                    href="/fonts/Roboto/Roboto-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Roboto/Roboto-Bold.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Roboto/Roboto-Italic.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Rye/Rye-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <title>Chaveiro Pouso Alegre</title>
            <div id="page-home">
                <header>
                    <div className="banner">
                        <h1>Chaveiro Pouso Alegre</h1>
                        <h2>Chaves e Fechaduras</h2>
                    </div>
                </header>
                <main>
                    <div className="content">
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
                    </div>
                        <div>
                            <img src="./images/logo-chaveiro-pouso-alegre.png" alt="Logo Chaveiro Pouso Alegre" className="logo"/>
                        </div>
                    <div className="icons-group">
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
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home 