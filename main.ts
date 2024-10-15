type Producto = {
    id: number
    nombre: string
    precio: number
}
const productos = [

    { id: 1, nombre: 'Producto A', precio: 30 },

    { id: 2, nombre: 'Producto B', precio: 20 },

    { id: 3, nombre: 'Producto C', precio: 50 },

    { id: 4, nombre: 'Producto D', precio: 10 }

];

function retrieveMin(numero: string) {
    return productos.filter(e => e.precio >= Number(numero));
}
function retrieveMax(numero: string) {
    return productos.filter(e => e.precio <= Number(numero));
}

function precioBetween(pequeño: string, grande: string) {
    return productos.filter(e => e.precio >= Number(pequeño) && e.precio <= Number(grande));
}

function busquedaId(id: string) {
    return productos.filter(e => e.id === Number(id));
}

function calcularValoMedioTotal() : number{
    return productos.reduce((acc: number, producto: Producto) => {
        return acc += producto.precio
    }, 0);
}

function calcularValoMedioMenor(precio: string): number {
    const menores = retrieveMin(precio);
    return menores.reduce((acc: number, producto: Producto) => {
        return acc += producto.precio
    }, 0);
}

function calcularValoMedioMayor(precio: string): number {
    const mayores = retrieveMax(precio);
    return mayores.reduce((acc: number, producto: Producto) => {
        return acc += producto.precio
    }, 0);
}

function calcularValoMedioBetween(preciomin: string, precioMax: string) : number {
    const entreMedias = precioBetween(preciomin, precioMax);
    return entreMedias.reduce((acc: number, producto: Producto) => {
        return acc += producto.precio
    }, 0);
}

const handler = async (req: Request): Promise<Response> => {
    const url = new URL(req.url);
    const method = req.method;
    const path = url.pathname;
    // Log request details for debugging
    console.log(`Received ${method} request at ${path}`);


    try {
        if (method === "GET") {
            const maxPrecioPath = url.searchParams.get("maxPrecio");
            const minPrecioPath = url.searchParams.get("minPrecio");
            if (!maxPrecioPath && !minPrecioPath && path === "/productos") {
                return new Response(JSON.stringify(productos), { status: 200 })
            } else if (maxPrecioPath && minPrecioPath && path === "/productos") {
                const precioEntre = precioBetween(minPrecioPath ? minPrecioPath : "0", maxPrecioPath ? maxPrecioPath : "0")
                return new Response(JSON.stringify(precioEntre), { status: 200 })
            } else if (maxPrecioPath && path === "/productos") {
                const maxPrecio = retrieveMax(maxPrecioPath ? maxPrecioPath : "0");
                return new Response(JSON.stringify(maxPrecio), { status: 200 })
            } else if (minPrecioPath && path === "/productos") {
                const minPrecio = retrieveMin(minPrecioPath ? minPrecioPath : "0");
                return new Response(JSON.stringify(minPrecio), { status: 200 })
            } else if (path.startsWith("/producto/")) {
                const path2 = path.split("/");
                const producto = busquedaId(path2[path2.length - 1]);
                if (producto.length > 0)
                    return new Response(JSON.stringify(producto), { status: 200 });
                else return new Response("Producto no encontrado", { status: 404 });
            } else if (path.startsWith("/calcular-promedio")) {
                if (!maxPrecioPath && !minPrecioPath && path === "/calcular-promedio") {
                    return new Response(JSON.stringify(calcularValoMedioTotal()), { status: 200 })
                } else if (maxPrecioPath && minPrecioPath) {
                    const precioEntre = calcularValoMedioBetween(minPrecioPath ? minPrecioPath : "0", maxPrecioPath ? maxPrecioPath : "0")
                    return new Response(JSON.stringify(precioEntre), { status: 200 })
                } else if (minPrecioPath) {
                    const minPrecio = calcularValoMedioMenor(minPrecioPath ? minPrecioPath : "0");
                    return new Response(JSON.stringify(minPrecio), { status: 200 })
                } else if (maxPrecioPath) {
                    const maxPrecio = calcularValoMedioMayor(maxPrecioPath ? maxPrecioPath : "0");
                    return new Response(JSON.stringify(maxPrecio), { status: 200 })
                } else {
                    return new Response("Wrong path for calcular-promedio", { status: 404 });
                }
            } else {
                return new Response("EndPoint Not Found.", { status: 400 });
            }
        }

        else if (method === "POST") {
            return new Response(`POST request successful`, { status: 501 });
        }

        else if (method === "PUT") {
            return new Response(`PUT request successful`, { status: 501 });
        }

        else if (method === "DELETE") {
            return new Response("DELETE request successful", { status: 501 });
        }

        return new Response("Method not implemented yet", { status: 501 });
    } catch (error) {
        console.error("Error handling request:", error);
        return new Response("Server error", { status: 500 });
    }
};

// Start the server
Deno.serve({ port: 3000 }, handler);



