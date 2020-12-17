import Link from 'next/link'
import Head from 'next/head'

function Galeria () {
    return (
        <>
        <Head>
            <title>Galeria</title>
        </Head>
        <aside>
            <Link href='/'>
                <button>
                    <img src="./images/icons/left-arrow.svg" alt="Seta para voltar"/>
                </button>
            </Link>
        </aside>
        <main>
            <div>
                <h2>Galeria</h2>
                <div>
                    <img src="./images/lockpicking.jfif" alt="Pessoa abrindo fechadura"/>
                    <h3>Descrição da imagem</h3>
                </div>
                <img src="./images/logo-chaveiro-pouso-alegre.png" alt="Logo Chaveiro Pouso Alegre"/>
            </div>
        </main>
        </>
    )
}

export default Galeria