const producto1 = {
    nombre: "celular",
    precio: 100000,
    stock: 2
    };

    class Product {
        constructor(id, title, price, stock, images, onsale) {
          this.id = id;
          this.title = title;
          this.price = price;
          this.stock = stock;
          this.images = images;
          this.onsale = onsale;
        }
      }

      const prod1 = new Product();
      class Product {
        constructor(id, title, price, stock, images, onsale, supplier) {

        this._supplier = supplier;
            }


            get getSupplier() {
                return this._supplier;
                }
                set setSupplier(newName) {
                this._supplier = newName;
                }
        }
        class Product {
            constructor(id, title, price, stock, images, onsale) {
            }
                sellUnits(units) {
                    this.stock = this.stock - units
                }
            }

        
        