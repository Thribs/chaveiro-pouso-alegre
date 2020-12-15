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
                    <img src="./images/icons/left-arrow.svg" alt="Seta para voltar"/>
                </button>
            </Link>
        </aside>
        </>
    )
}

export default Servicos