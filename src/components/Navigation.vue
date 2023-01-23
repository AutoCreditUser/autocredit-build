<template>
  <nav
    class="navbar navbar-expand-lg shadow-sm sticky-top bg-body-tertiary navbar-light bg-light"
  >
    <div
      class="container-fluid justify-content-between justify-content-lg-around"
    >
      <a class="navbar-brand me-0" href="#">
        <img
          src="../assets/images/LOGO_PNG.png"
          alt="Bootstrap"
          width="160"
          height="100"
        />
      </a>
      <ul class="navbar-nav d-none d-lg-flex" id="navbarNavExpand">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Serviços</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Clientes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Quem somos?</a>
        </li>
      </ul>
      <button
        type="button"
        class="btn rounded-pill btn-blue-primary fw-bold d-none d-lg-flex text-white"
      >
        Acessar
      </button>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
      <ul class="navbar-nav px-3 me-auto mb-2 mb-lg-0 d-lg-none">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Serviço</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Clientes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"> Quem somos ? </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({ count: 0 });

    function increment() {
      state.count++;
    }

    return {
      state,
      increment,
    };
  },
};
</script>

<style>
.btn-blue-primary {
  background-color: var(--color-primary-4);
  transition: 0.3s;
  letter-spacing: 0.156rem;
}

.btn-blue-primary:hover {
  background-color: var(--color-primary-3);
  transition: 0.3s;
}
</style>
