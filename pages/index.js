function Home() {
    return (
        <div>
            <title>Chaveiro Pouso Alegre</title>
            <div id="page-home">
                <div>
                    <h1>Chaveiro Pouso Alegre</h1>
                    <h2>Chaves e Fechaduras</h2>
                </div>
                <main>
                <button onclick="window.location.href='./horarios.html'">
                        Chamar um Chaveiro
                    </button>
                <button onclick="window.location.href='./servicos.html'">
                    Serviços
                </button>
                <button onclick="window.location.href='./sobre.html' ">
                    Sobre nós
                </button>
                <div>
                    <img src="./images/logo-chaveiro-pouso-alegre.png" alt="Logo Chaveiro Pouso Alegre">
                    
                    </img>
                </div>
                <button onclick="window.location.href='https://wa.me/5535991750735'">
                    <img src="./images/icons/WhatsApp_icon 1.png" alt="Botão WhatsApp">
                    </img>
                </button>
                <button onclick="window.location.href='https://www.google.com/maps/dir//Av.+Pref.+Olavo+Gomes+de+Oliveira,+1724+-+Costa+Rios,+Pouso+Alegre+-+MG,+37550-000/@-22.250623,-45.9335257,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94cbc70f6ca9ad4b:0x9ba97ef218759f22!2m2!1d-45.931337!2d-22.250623!3e0'">
                    <img src="./images/icons/map-cursor.svg" alt="Botão Mapa">
                    </img>
                </button>
                <button onclick="window.location.href='./galeria.html'">
                    <img src="./images/icons/plus.svg" alt="Botão Mais">
                    </img>
                </button>
                </main>
            </div>
        </div>
    )
}

export default Home 