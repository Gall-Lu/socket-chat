class Usuarios {
    //====================================
    // Constructor de la clase Usuarios
    //====================================
    constructor() {
        this.personas = [];
    }

    //====================================
    // Agregando una persona
    //====================================
    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona);
        return this.personas;
    }

    //====================================
    // Obteniendo información de persona
    //====================================
    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;
    }

    //====================================
    // Obteniendo todas la personas
    //====================================
    getPersonas() {
        return this.personas;
    }

    //====================================
    // Obteniendo personas por sala
    //====================================
    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => {
            return persona.sala === sala;
        });

        return personasEnSala;
    }

    //====================================
    // Eliminando persona de la lista
    //====================================
    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(persona => persona.id != id);
        return personaBorrada;
    }
}


module.exports = {
    Usuarios
}