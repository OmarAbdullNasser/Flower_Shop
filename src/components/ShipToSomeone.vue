<template>
  <div class="ShipToSomeOne">
    <div class="container">
      <label>Recipient’s address</label>
      <div class="opations">
        <p class="mb-0">
          <input type="radio" name="Know" id="Know" />
          <label for="Know">I know the recipient address</label>
        </p>
        <p class="mb-0">
          <input type="radio" name="Know" id="NotKnow" />
          <label for="NotKnow"
            >I don't know the recipient address(Shipping fees will be
            applied)</label
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.ShipToSomeOne {
  .opations {
    p {
      label {
        color: #927091;
        padding: 0 0 0 11px;
        margin: 20px 0 23px 0;
        cursor: pointer;
      }
      input[type="radio"] {
        width: 1rem;
        height: 1rem;
        &:checked {
          accent-color: var(--main-color);
        }
      }
    }
  }
}
</style>
