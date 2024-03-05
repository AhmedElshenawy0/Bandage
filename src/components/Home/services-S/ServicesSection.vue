<template>
  <div class="container">
    <div class="mb-5 text-center">
      <h4>Featured Products</h4>
      <h3>BESTSELLER PRODUCTS</h3>
      <P>Problems trying to resolve the conflict between </P>
    </div>
    <div class="row text-center">
      <div class="col-md-4">
        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 0 512 512" class="icon">
          <path
            fill="#23a6f0"
            d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"
          />
        </svg>
        <h3>Hack Growth</h3>
        <p>Overcame any hurdle or any other problem.</p>
      </div>
      <div class="col-md-4">
        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 0 448 512">
          <path
            fill="#23a6f0"
            d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"
          />
        </svg>
        <h3>Hack Growth</h3>
        <p>Overcame any hurdle or any other problem.</p>
      </div>
      <div class="col-md-4">
        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 0 576 512">
          <path
            fill="#23a6f0"
            d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"
          />
        </svg>
        <h3>Hack Growth</h3>
        <p>Overcame any hurdle or any other problem.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  margin: 80px auto;

  h4 {
    font-weight: 400;
    font-size: 20px;
    color: #737373;
  }
  h3 {
    font-weight: 700;
    font-size: 24px;
    color: #252b42;
    margin: 10px 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
  .row {
    h3 {
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #737373;
    }
  }
  svg {
    color: #b33030;
  }
}
</style>
