# A simple CRUD E-commerce App for storing data in localstorage.

The node modules used are:
* React-Bootstrap
* Redux
* React Router

## Pages/Components with features.
1. Product Inventory
   * Add Product
   * Buttons for navigating to Cart and Wishlist pages.
   * Wishlist
   * Cart
   * Search bar
   * Filters: Highest Price, Lowest Price, and Product Rating.
   * Reset Filter button
   * Product List using Card Component.

2. Cart Page
   * Buttons for navigating to Inventory and Wishlist pages.
   * Product List using Card Component.

3. Wishlist Page
   * Buttons for navigating to Inventory and Cart pages.
   * Product List using Card Component.

4. Add/Edit Product Page
   * Form to fill the product details for new product.
   * Form will be automatically populated with data in case a product is edited.
   * Submit button will store the data in localStorage.
   * Cancel button will navigate to previous route/page.

5. Card Component in Product Inventory.
   * Product image and details.
   * Edit button will navigate to Edit page.
   * Delete button will delete the product from Inventory, Cart and Wishlist pages.
   * Button to add product to Cart.
   * Button to add product to Wishlist (If added twice then an alert message will be thrown).

6. Card Component in Cart Page.
   * Product image and details.
   * Remove button will delete the product from Cart.

7. Card Component in Wishlist Page.
   * Product image and details.
   * Remove button will delete the product from Wishlist.


## For Using this Project, clone this project.
## In the project directory, you can run:

### `npm start`

