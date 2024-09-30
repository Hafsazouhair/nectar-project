<template>
  <section class="top-dishes mt-40">
    <div class="container">
      <h1 class="section-heading">Top diches</h1>
      <div class="slider">
        
        <div class="food-slider">
          <div class="food-card magic-shadow-sm ">
            <div class="product-image flex items-center justify-center">
              <img src="/images/plate-2.png" alt="Summer Salad">
            </div>
            <hr>
            <div class="space-y-2">
              <h2 class="text-center">Greek Salad</h2>
              <div class="stars flex justify-center items-center">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
              </div>

              <div class="flex justify-center">
                <button class="flex items-center">
                  <img src="/icons/cart-2.svg" alt="Cart" class="cart-icon">
                  <div class="price text-center ml-2">$1.25</div>
                </button>
              </div>
              <div>
                <div class="flex justify-center items-center h-full">
                  <button class="flex justify-center items-center btn bg-yellow-500 text-sm text-black">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Repeat food-card div for each product -->
          <div class="food-card magic-shadow-sm ">
            <div class="product-image flex items-center justify-center">
              <img src="/images/plate-2.png" alt="Salad">
            </div>
            <hr>
            <div class="space-y-2">
              <h2 class="text-center">Salad</h2>
              <div class="stars flex justify-center items-center">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
              </div>

              <div class="flex justify-center">
                <button class="flex items-center">
                  <img src="/icons/cart-2.svg" alt="Cart" class="cart-icon">
                  <div class="price text-center ml-2">$1.25</div>
                </button>
              </div>
              <div>
                <div class="flex justify-center items-center h-full">
                  <button class="flex justify-center items-center btn bg-yellow-500 text-sm text-black">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="food-card magic-shadow-sm">
            <div class="product-image flex items-center justify-center">
              <img src="/images/plate-3.png" alt="Russian Salad" width="85%">
            </div>
            <hr>
            <div class="space-y-2">
              <h2 class="text-center">Russian Salad</h2>
              <div class="stars flex justify-center items-center">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
              </div>
              <div class="flex justify-center">
                <button class="flex items-center">
                  <img src="/icons/cart-2.svg" alt="Cart" class="cart-icon">
                  <div class="price text-center ml-2">$1.25</div>
                </button>
              </div>
              <div class="flex justify-center items-center h-full">
                <button class="flex justify-center items-center btn bg-yellow-500 text-sm text-black">
                  Add to cart
                </button>
              </div>

            </div>
          </div>
          <div class="food-card magic-shadow-sm">
            <div class="product-image flex items-center justify-center">
              <img src="https://clinicadoctoramilotich.com/wp-content/uploads/2022/03/Dieta-zona-1.jpg" width="85%"
                alt="Caesar Salad">
            </div>
            <hr>
            <div class="space-y-2">
              <h2 class="text-center">Caesar Salad</h2>
              <div class="stars flex justify-center items-center">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
              </div>
              <div class="flex justify-center">
                <button class="flex items-center">
                  <img src="/icons/cart-2.svg" alt="Cart" class="cart-icon">
                  <div class="price text-center ml-2">$1.25</div>
                </button>
              </div>
              <div class="flex justify-center items-center h-full">
                <button class="flex justify-center items-center btn bg-yellow-500 text-sm text-black">
                  Add to cart
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="text-center btn-wrapper">
       
         <router-link to="/blog" class="btn btn-secondary">View More</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductApp',
  methods: {
    scrollLeft() {
      const slider = this.$el.querySelector('.food-slider');
      slider.scrollBy({ left: -200, behavior: 'smooth' }); // Adjust the scroll amount as needed
    },
    scrollRight() {
      const slider = this.$el.querySelector('.food-slider');
      slider.scrollBy({ left: 200, behavior: 'smooth' }); // Adjust the scroll amount as needed
    },
  },
}
</script>

<style scoped>
.top-products {
  padding: 20px;
}

.slider {
  position: relative;
  overflow: hidden;
}

.food-slider {
  display: flex;
  overflow-x: auto;
  padding: 10px;
  gap: 10px;
  /* Adjust the gap between cards as needed */
}

.food-card {
  flex: 0 0 auto;
  /* Ensure each card is only as wide as its content */
  width: 300px;
  /* Adjust the width as needed */
  position: relative;
  /* Allows for positioning the card */
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.food-card .product-image img {
  max-width: 100%;
  /* Ensure images fit within their container */
}

.btn-wrapper {
  margin-top: 20px;
}

.btn-secondary {
  background-color: #333;
  /* Adjust styles as needed */
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>