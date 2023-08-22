class ProductManager {
    constructor(){
        this.productos =[]
    }
    static id= 0

    addProductos (title, description, price, img, code, stock) {
        for (let i = 0; i < this.productos.length; i++){
            if (this.productos[i].code === code) {
                console.log(`el código ${code} no se debe repetir`);
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
            console.log ("Lo siento tiene que ingresar todos los datos")
        }
        
    }

    getProductos (){
        return this.productos;
    }

    validar(id){
        return this.productos.find ((producto) => producto.id === id)
    }

    getProductById (id){
        !this.validar(id) ? console.log("Lo lamento no hemos encontrado el producto") : console.log(this.validar(id));
        }
    }


