import Link from 'next/link'
import Head from 'next/head'

function Sobre () {
    return (
        <>
        <Head>
            <title>Sobre Nós</title>
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
                <p>
                    Em Outubro de 1999 o Sr. Douglas Vatan Silva, já trabalhando como Técnico em Eletrônica em Pouso Alegre, iniciou a sua empresa prestando serviços como chaveiro, profissão que já exercia.
                    Ao decorrer do tempo, deixou a eletrônica doméstica e ingressou na eletrônica embarcada automotiva, focando em reparos de módulos de injeção e serviços de chaveiro — como confecção de chaves residenciais e automotivas — mercado onde se destaca há mais de 21 anos.
                    <br /><br />
                    Reconhecendo a necessidade da época, aperfeiçoou-se em codificação de chaves para veículos com sistemas imobilizadores. Até então, o acesso a máquinas especializadas para codificação de chaves era limitado.
                    Assim, buscou afiar seus conhecimentos e desenvolveu métodos eficazes para solucionar problemas em veículos com sistemas de imobilizadores, confecção de chaves codificadas e sistemas para agilizar o trabalho.
                    <br /><br />
                    Sendo referência no mercado por conta do seu vasto conhecimento, compartilha experiência e práticas eficazes de trabalho com palestras no Brasil.
                </p>
            </div>
        </main>
        </>
    )
}

export default Sobre