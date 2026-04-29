export function renderHeader() {
  document.getElementById("header").innerHTML = `
    
    <header class="main-header fixed-top">
      <div class="container">
        <nav class="navbar navbar-expand-lg">

          <a class="navbar-brand logo-area" href="#">
            <img src="assets/img/logoheader.png" class="site-logo">
          </a>

          <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#menuMobile">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="menuMobile">

            <ul class="navbar-nav align-items-lg-center gap-lg-4 ms-auto">

              <li class="nav-item">
                <a class="nav-link" href="#sobre">Sobre</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#areas">Atuação</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#faq">FAQ</a>
              </li>

              <li class="nav-item">
                <a class="btn-header" href="#contato">
                  Agendar Consulta
                </a>
              </li>

            </ul>

          </div>

        </nav>
      </div>
    </header>

  `;
}