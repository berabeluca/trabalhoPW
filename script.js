
function carregarPagina(pagina) {
    const conteudo = document.getElementById('conteudo');

    if (pagina === 'home') {
        conteudo.innerHTML = `
            <h1>Bem-vindo ao site do Flamengo!</h1>
            <p>O Clube de Regatas do Flamengo, fundado em <strong>17 de novembro de 1895</strong>, é um dos maiores e mais populares clubes de futebol do mundo.</p>
            <p>Seu estádio é o <strong>Maracanã</strong>, palco de conquistas históricas.</p>
            <img src="images/images.png" alt="Logo do Flamengo" width="500" height="500">
            <p>Flamengo é conhecido como o <strong>Mais Querido</strong> e tem a maior torcida do Brasil!</p>
        `;
    } 
    
    else if (pagina === 'history') {
        conteudo.innerHTML = `
            <h1>História do Flamengo</h1>
            <p>O Flamengo foi fundado como um clube de remo em 1895. O futebol só começou em <strong>1911</strong>, após uma dissidência de jogadores do Fluminense.</p>
            <p>A estreia no futebol foi em <strong>1912</strong>, com uma goleada de 15 a 2 sobre o Mangueira.</p>
            <h2>Torcida</h2>
            <p>A torcida do Flamengo é conhecida como a <strong>Maior Torcida do Mundo</strong>, com mais de 40 milhões de torcedores.</p>
            <h2>Mascote</h2>
            <p>O mascote oficial do Flamengo é o <strong>Urubu</strong>, adotado em 1969 após uma provocação dos rivais.</p>
            <h2>Rivalidades</h2>
            <p>O maior rival é o <strong>Fluminense</strong> (Fla-Flu). Também há rivalidade com o <strong>Vasco</strong> e o <strong>Botafogo</strong>.</p>
            <h2>🏅 Grandes Jogadores</h2>
            <div class="jogadores">
                <div>
                    <img src="images/download.jpeg" alt="Zico">
                    <p><strong>Zico</strong><br>Maior jogador da história do Flamengo. Comandou o time na conquista da Libertadores e do Mundial em 1981.</p>
                </div>
                
                <div>
                    <img src="images/leandro.jpeg" alt="Leandro">
                    <p><strong>Leandro</strong><br>Um dos melhores laterais da história, um exemplo de técnica e liderança.</p>
        `;
    } 
    
    else if (pagina === 'titles') {
        conteudo.innerHTML = `
            <h1>Títulos do Flamengo</h1>
            <h2>🏆 Internacionais</h2>
            <ul>
                <li>Libertadores: 1981, 2019, 2022</li>
                <li>Mundial de Clubes: 1981</li>
                <li>Recopa Sul-Americana: 2020</li>
            </ul>
            <h2>🏆 Nacionais</h2>
            <ul>
                <li>Campeonato Brasileiro: 1980, 1982, 1983, 1987, 1992, 2009, 2019, 2020</li>
                <li>Copa do Brasil: 1990, 2006, 2013, 2022, 2024</li>
                <li>Supercopa do Brasil: 2020, 2021</li>
            </ul>
            <h2>🏆 Estaduais</h2>
            <ul>
                <li>Campeonato Carioca: 37 títulos (recordista)</li>
                <li>Taça Guanabara: 23 títulos</li>
                <li>Taça Rio: 10 títulos</li>
            </ul>

            <h2>Flamengp campeão da Libertadores</h2>
            <video src="videos/videoplayblack.mp4"
            controls
            autoplay
            muted
            >

            </video>
        `;
    }
    
}



document.addEventListener('DOMContentLoaded', () => {
    carregarPagina('home');
});
