export class Scuola{

    data = [
        {
            id: 1, classe: '1', sezione: 'A', studenti: [
                {id : 100, nome: 'Marco', cognome: 'Bianchi'},
                {id : 101, nome: 'Mario', cognome: 'Rossi'}
            ]
        },
        {
            id: 2, classe: '2', sezione: 'A', studenti: [
                {id: 120, nome: 'Rosita', cognome: 'Alberti'},
                {id: 121, nome: 'Arianna', cognome: 'Como'}
            ]
        }
        
    ];

    getClassi(){
        return this.data;
    }

    aggiungiClasse(classe){
        this.data.push(classe);
    }

    rimuoviClasse(id){
        let indice = this.data.findIndex(classe => classe.id == id);
        this.data.splice(indice,1);
    }

    aggiungiStudente(idClasse, studente){
        let indiceClasse = this.data.findIndex(classe => classe.id == idClasse);
        if(indiceClasse !== -1){
            studente.id = this.data[indiceClasse]['studenti'].length + 1;
            this.data[indiceClasse]['studenti'].push(studente);
        }
    }
    rimuoviStudente(idClasse, idStudente) {
        let indiceClasse = this.data.findIndex(classe => classe.id == idClasse);
        if(indiceClasse !== -1){
            let indiceStudente = this.data[indiceClasse]['studenti'].findIndex(studente => studente.id == idStudente);
            this.data[indiceClasse]['studenti'].splice(indiceStudente,1);
        }
    }


}