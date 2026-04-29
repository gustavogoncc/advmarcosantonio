export function renderAreas() {
  document.getElementById("areas").innerHTML = `
    
    <section class="areas-section" id="areas">
      <div class="container">

        <div class="section-title text-center">
          <span class="mini-title">Especialidades</span>
          <h2>Áreas de Atuação</h2>
          <p>
            Atuação estratégica e personalizada nas principais demandas jurídicas.
          </p>
        </div>

        <div class="row g-4 mt-4">

          <div class="col-md-4">
            <div class="area-card">
              <div class="icon-area">
                <i class="bi bi-shield-check"></i>
              </div>
              <h4>Direito Previdenciário</h4>
              <p>
                Aposentadorias, benefícios, revisões e planejamento previdenciário.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="area-card">
              <div class="icon-area">
                <i class="bi bi-briefcase"></i>
              </div>
              <h4>Direito Trabalhista</h4>
              <p>
                Rescisões, verbas trabalhistas, acordos e defesa de direitos.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="area-card">
              <div class="icon-area">
                <i class="bi bi-building"></i>
              </div>
              <h4>Regularização de Imóveis</h4>
              <p>
                Contratos, indenizações, cobranças e responsabilidade civil.
              </p>
            </div>
          </div>

        </div>

        <div class="areas-extra text-center mt-5">
          <p>
            Também atuamos em consultoria preventiva, revisão documental,
            acordos extrajudiciais e demais demandas correlatas.
          </p>
        </div>

      </div>
    </section>

  `;
}