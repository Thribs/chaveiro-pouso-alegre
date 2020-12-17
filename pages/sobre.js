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
                    <img src="./images/icons/left-arrow.svg" alt="Seta para voltar"/>
                </button>
            </Link>
        </aside>
        <main>
           <div>
               <h3>
                Em Outubro de 1999 o Sr. Douglas Vatan Silva, já trabalhando como Técnico em Eletrônica na cidade de Pouso Alegre - MG, iniciou a sua empresa prestando serviços como chaveiro, profissão que já exercia.
                Ao decorrer do tempo, deixou a eletrônica doméstica e ingressou na eletrônica embarcada automotiva, focando em reparos de módulos de injeção e serviços de chaveiro — como confecção de chaves residenciais e automotivas — mercado onde se destaca há mais de 21 anos.
                
                Aperfeiçoou-se em codificação de chaves para veículos com sistemas imobilizadores.
                
                Devido à dificuldade da época, o acesso a máquinas especializadas para codificação de chaves era limitado.
                Percebendo essa necessidade, aprimorou seus conhecimentos e iniciou a criação de métodos eficazes para solucionar problemas em veículos com sistemas de imobilizadores, confecção de chaves codificadas e sistemas para agilizar o trabalho.
                
                Sendo referência no mercado por conta do seu vasto conhecimento, compartilha experiência e práticas eficazes de trabalho com palestras no Brasil.
               </h3>
           </div>
        </main>
        </>
    )
}

export default Sobre