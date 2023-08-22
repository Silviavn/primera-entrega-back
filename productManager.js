class ProductManager {
    constructor(){
        this.productos =[]
    }
    static id= 0

    addProductos (title, description, price, img, code, stock) {
        for (let i = 0; i < this.productos.length; i++){
            if (this.productos[i].code === code) {
                console.log(`code ${code} must not be repeated`);
                break;
            }
        }
        const nuevoProducto = {
            title, description, price, img, code, stock,

        };
        if (!Object.values(nuevoProducto).includes(undefined)){
            ProductManager.id++;
            this.productos.push ({ ... nuevoProducto, id:ProductManager.id,});

        }else{
            console.log ("Sorry you have to enter all the data")
        }
        
    }

    getProductos (){
        return this.productos;
    }

    validar(id){
        return this.productos.find ((producto) => producto.id === id)
    }

    getProductById (id){
        !this.validar(id) ? console.log("Sorry we have not found the product") : console.log(this.validar(id));
        }
    }


const productos = new ProductManager();
console.log (productos.getProductos());

productos.addProductos("Product one tested", "Our product is tested", 100000, "Without image","Savn1311", 22);
productos.addProductos("Product two teste", "Our product is tested", 120000, "Without image","Marina2404", 2);
productos.addProductos("Product three teste", "Our product is tested", 120000, "Without image","Pamela0205", 21);

console.log (productos.getProductos());

//Prueba ya que el codigo esta igual al de arriba

productos.addProductos("Product three teste", "Our product is tested", 120000, "Without image","Pamela0205", 21);

//Prueba de que le faltan datos y muestre error

productos.addProductos("Product one tested", "Our product is tested", 100000);

//Aqui busca nuestro producto con el ID correcto

productos.getProductById(1)

////Aqui busca nuestro producto con el ID Incorrecto
productos.getProductById(24)
       