export function renderHero() {
  document.getElementById("hero").innerHTML = `
    
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">

          <div class="col-lg-6">

            <span class="hero-badge">
              Atendimento Jurídico Especializado
            </span>

            <h1 class="hero-title">
              Segurança Jurídica com Atendimento Humanizado e Estratégico
            </h1>

            <p class="hero-description">
              Soluções jurídicas personalizadas para proteger seus direitos,
              orientar decisões e buscar os melhores resultados para seu caso.
            </p>

            <div class="hero-buttons">
              <a href="#contato" class="btn-primary-custom">
                Agendar Consulta
              </a>

              <a href="#areas" class="btn-secondary-custom">
                Áreas de Atuação
              </a>
            </div>

          </div>

          <div class="col-lg-6 text-center">

            <div class="hero-image-box">
              <img 
                src="assets/img/perfiladv.jpeg" 
                alt="Advogado"
                class="hero-image img-fluid"
              >
            </div>

          </div>

        </div>
      </div>
    </section>

  `;
}