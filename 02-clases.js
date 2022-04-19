class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`Nombre Completo: ${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        console.log(`La cantidad de mascotas del Usuario ${this.nombre}, es ${this.libros.length}`);
    }

    addBook(libro) {
        this.libros.push(libro)
    }

    getBookNames() {
        console.log(`Libros de preferencia de ${this.nombre}:`)
        this.libros.forEach(libro => console.log(libro.nombre));
    }

}

let marcelo = new Usuario("Marcelo", "Moreno", [{ nombre: "Harry Potter", autor: "J.K. Rowling" }, { nombre: "Como agua para chocolate", autor: "Laura Esquivel" }], ["Teo", "Minie"]);

marcelo.countMascotas();
console.log(marcelo.getFullName());
marcelo.addMascota("Blacky");
console.log(marcelo.countMascotas());
console.log(marcelo.getFullName());
console.table(marcelo.mascotas);
console.log(marcelo.getBookNames());
marcelo.addBook({ nombre: "100 años de soledad", autor: "Gabriel García Marquez" })
console.log(marcelo.getBookNames());
console.table(marcelo.libros);