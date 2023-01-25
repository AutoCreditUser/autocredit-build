<template>
  <main>
    <div class="container-fluid p-0">
      <div class="d-flex justify-content-center">
        <img
          class="img-fluid"
          src="../assets/images/background_blue.png"
          alt="Lamborguine azul no fundo"
        />
      </div>
    </div>
    <section class="container-fluid">
      <h2 class="text-center py-5 fw-bold">
        Como são as consultas da Autocredit ?
      </h2>
      <div class="row pt-4">
        <div class="col-12 col-md-4">
          <div class="d-flex flex-column align-items-center">
            <div class="icons d-flex justify-content-center align-items-center">
              <img
                class="img-fluid"
                src="../assets/images/icons/svg_24h-4.svg"
                alt="consultas 24 por 7"
              />
            </div>
            <div class="text-center px-4">
              <h3 class="fw-bold py-3 m-0">Consultas 24/7</h3>
              <p class="px-2 py-3">
                Consultas em tempo real , com a disponibilidade 24h por dia e 7
                dias por semana.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="d-flex flex-column align-items-center">
            <div class="icons d-flex justify-content-center align-items-center">
              <img
                class="img-fluid"
                src="../assets/images/icons/svg_facil_utilizacao-4.svg"
                alt="Consultas fácil e confiável"
              />
            </div>
            <div class="text-center px-4">
              <h3 class="fw-bold py-3 m-0">Fácil e Confiável</h3>
              <p class="px-2 py-3">
                Consultas objetivas, trazendo dados autalizados e 100%
                confiáveis.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="d-flex flex-column align-items-center">
            <div class="icons d-flex justify-content-center align-items-center">
              <img
                class="img-fluid"
                src="../assets/images/icons/svg_preco_acessivel-4.svg"
                alt="Preços acessíveis"
              />
            </div>
            <div class="text-center px-4">
              <h3 class="fw-bold py-3 m-0">Preço Acessível</h3>
              <p class="px-2 py-3">
                Consultas com preço acessíveis em relação aos seus concorrentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class=""></section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.icons {
  width: 6.25rem;
  height: 6.25rem;

  border-radius: 50%;

  background-color: var(--color-primary-1);
}
</style>
