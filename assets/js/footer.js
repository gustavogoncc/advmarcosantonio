export function renderFooter() {
  document.getElementById("footer").innerHTML = `
    
    <footer class="footer-section">
      <div class="container">

        <div class="row gy-5">

          <!-- COLUNA 1 -->
          <div class="col-lg-4">
            <div class="footer-brand">

              <img src="assets/img/footer.png" class="footer-logo" alt="Logo Marcos Antônio">

              <p class="mt-4">
                Atendimento jurídico estratégico, humanizado e comprometido
                com soluções eficazes e resultados reais.
              </p>

            </div>
          </div>


          <!-- COLUNA 2 -->
          <div class="col-lg-4">
            <div class="footer-contact-links">

              <h5>Contato</h5>

              <ul class="footer-list">
                <li>
                  <a href="https://wa.me/message/PSIMFFQY5DDBH1" target="_blank">
                    WhatsApp
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/advmarcosantonio/" target="_blank">
                    Instagram
                  </a>
                </li>

                <li>dignidade2022@gmail.com</li>
                <li>contatos.especializada@gmail.com</li>
              </ul>

            </div>
          </div>


          <!-- COLUNA 3 -->
          <div class="col-lg-4">
            <div class="footer-contact">

              <h5>Atendimento</h5>

              <p>Segunda a Sábado</p>
              <p>09h às 18h</p>

              <a 
                href="https://wa.me/message/PSIMFFQY5DDBH1" 
                target="_blank" 
                class="footer-btn"
              >
                Fale Agora
              </a>
               

            </div>
          </div>

        </div>

        <hr>

        <!-- RODAPÉ FINAL -->
        <div class="footer-bottom text-center">

          <p>Rua Rio Grande do Sul, 163, Centro, Solânea - PB, CEP 58.225-000</p>

          <p>
            © 2026 Marcos Antonio Advocacia Especializada - Todos os direitos reservados.
          </p>
          <p>Desenvolvido por <a href="https://gustavogoncalvesdev.vercel.app/" target="_blank">Gustavo Gonçalves</a></p>

        </div>

      </div>
    </footer>

  `;
}