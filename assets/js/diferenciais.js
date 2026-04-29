export function renderDiferenciais() {
  document.getElementById("diferenciais").innerHTML = `
    
    <section class="diferenciais-section" id="diferenciais">
      <div class="container">

        <div class="section-title text-center">
          <span class="mini-title">Por que escolher</span>
          <h2>Diferenciais do Escritório</h2>
          <p>
            Atendimento jurídico moderno, eficiente e focado no cliente.
          </p>
        </div>

        <div class="row g-4 mt-4">

          <div class="col-md-6 col-lg-4">
            <div class="diferencial-card">
              <div class="icon-box">
                <i class="bi bi-credit-card"></i>
              </div>
              <h5>Facilidade de Pagamento</h5>
              <p>Condições acessíveis e flexíveis.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="diferencial-card">
              <div class="icon-box">
              <i class="bi bi-award"></i>
              </div>
              <h5>Experiência Comprovada</h5>
              <p>Atuação sólida e estratégica.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="diferencial-card">
              <div class="icon-box">
              <i class="bi bi-people"></i>
              </div>
              <h5>Atendimento Personalizado</h5>
              <p>Cada cliente é tratado de forma única.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="diferencial-card">
              <div class="icon-box">
              <i class="bi bi-phone"></i>
              </div>
              <h5>Praticidade Digital</h5>
              <p>Consultas e envio de documentos online.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="diferencial-card">
              <div class="icon-box">
              <i class="bi bi-graph-up-arrow"></i>
              </div>
              <h5>Foco em Resultados</h5>
              <p>Estratégias pensadas para vencer.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="diferencial-card">
              <div class="icon-box">
              <i class="bi bi-shield-lock"></i>
              </div>
              <h5>Sigilo e Transparência</h5>
              <p>Segurança total em cada processo.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

  `;
}