document.addEventListener('DOMContentLoaded', function() {
    // Lista de 6 modelos Porsche 911
    const modelos = [
        {
            nome: "Porsche 911 Carrera S",
            imagem: "imagens/porsche-modelos/carrera-1.jpg",
            preco: 1800,
            descricao: "Motor 3.0L twin-turbo, 443 cv"
        },
        {
            nome: "Porsche 911 Carrera 4S",
            imagem: "imagens/porsche-modelos/carrera-2.jpg",
            preco: 1950,
            descricao: "Tração integral, 443 cv"
        },
        {
            nome: "Porsche 911 Targa 4",
            imagem: "imagens/porsche-modelos/carrera-3.jpg",
            preco: 2100,
            descricao: "Teto solar retrátil, 385 cv"
        },
        {
            nome: "Porsche 911 Turbo S",
            imagem: "imagens/porsche-modelos/carrera-4.jpg",
            preco: 2800,
            descricao: "Motor 3.7L twin-turbo, 650 cv"
        },
        {
            nome: "Porsche 911 GT3",
            imagem: "imagens/porsche-modelos/carrera-5.jpg",
            preco: 3200,
            descricao: "Motor aspirado 4.0L, 510 cv"
        },
        {
            nome: "Porsche 911 Dakar",
            imagem: "imagens/porsche-modelos/carrera-6.jpg",
            preco: 2500,
            descricao: "Versão off-road, 480 cv"
        }
    ];

    // Exibir modelos na página
    const listaModelos = document.getElementById('lista-modelos');
    
    modelos.forEach(modelo => {
        const modeloCard = document.createElement('div');
        modeloCard.className = 'modelo-card';
        
        modeloCard.innerHTML = `
            <div class="modelo-imagem" style="background-image: url('${modelo.imagem}')"></div>
            <div class="modelo-info">
                <h3>${modelo.nome}</h3>
                <p>${modelo.descricao}</p>
                <p class="preco">R$ ${modelo.preco.toLocaleString('pt-BR')}/dia</p>
                <a href="#" class="btn-alugar">Reservar Agora</a>
            </div>
        `;
        
        listaModelos.appendChild(modeloCard);
    });

    // Suavizar rolagem para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Adicionar evento de clique nos botões de reserva
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-alugar')) {
            e.preventDefault();
            const modelo = e.target.closest('.modelo-card').querySelector('h3').textContent;
            alert(`Você selecionou o ${modelo}.\n\nNossa equipe entrará em contato para finalizar a reserva!`);
        }
    });
});