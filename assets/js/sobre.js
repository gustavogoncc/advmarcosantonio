export function renderSobre() {
  document.getElementById("sobre").innerHTML = `
    
    <section class="sobre-section" id="sobre">
      <div class="container">
        <div class="row align-items-center g-5">

          <div class="col-lg-6">
            <div class="sobre-image-box text-center">
              <img 
                src="assets/img/sobre.png"
                alt="Escritório de Advocacia"
                class="img-fluid sobre-image"
              >
            </div>
          </div>

          <div class="col-lg-6">

            <span class="mini-title">
              Sobre o Escritório
            </span>

            <h2 class="sobre-title">
              Compromisso com Ética, Excelência e Resultados
            </h2>

            <p class="sobre-description">
              Nosso escritório atua de forma estratégica e personalizada,
              oferecendo atendimento próximo ao cliente, análise detalhada
              de cada caso e soluções jurídicas seguras.
            </p>

            <p class="sobre-description">
              Trabalhamos com transparência, agilidade e dedicação total
              para defender direitos e alcançar os melhores resultados.
            </p>

          </div>

        </div>
      </div>
    </section>

  `;
}