 export function renderFaq() {
  document.getElementById("faq").innerHTML = `
    
    <section class="faq-section" id="faq">
      <div class="container">

        <div class="section-title text-center">
          <span class="mini-title">Dúvidas Frequentes</span>
          <h2>Perguntas Frequentes</h2>
          <p>
            Respostas rápidas para as principais dúvidas dos clientes.
          </p>
        </div>

        <div class="accordion mt-5" id="faqAccordion">

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                Como funciona a primeira consulta?
              </button>
            </h2>
            <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Realizamos uma análise inicial do caso, orientando sobre direitos, possibilidades e próximos passos.
              </div>
            </div>
          </div>

          <div class="accordion-item mt-3">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                O atendimento pode ser online?
              </button>
            </h2>
            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Sim. Atendemos presencialmente e também de forma totalmente online.
              </div>
            </div>
          </div>

          <div class="accordion-item mt-3">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                Quais documentos preciso enviar?
              </button>
            </h2>
            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Depende da demanda. Informaremos exatamente os documentos necessários após o primeiro contato.
              </div>
            </div>
          </div>

          <div class="accordion-item mt-3">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                Como são cobrados os honorários?
              </button>
            </h2>
            <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Os valores variam conforme o caso e seguem critérios éticos e transparentes.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

  `;
}