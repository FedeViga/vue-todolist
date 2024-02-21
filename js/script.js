/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto :temporale_nuvola_e_pioggia:, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una ":x:": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante per la aggiunta del task, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/



const { createApp } = Vue

createApp({

    data() {

        return {
            
            // array di oggetti contenenti il testo del task e variabile booleana
            tasks: [

                {
                    text: "Fare la spesa",
                    done: false,
                },
                {
                    text: "Portare a spasso il cane",
                    done: true,
                },
                {
                    text: "Preparare la cena",
                    done: false,
                },
                {
                    text: "Pagare le bollette",
                    done: false,
                },
                {
                    text: "Telefonare alla nonna",
                    done: true,
                },
                {
                    text: "Scrivere un'email",
                    done: false,
                },
                {
                    text: "Leggere un libro",
                    done: false,
                },
                {
                    text: "Fare una passeggiata",
                    done: true,
                },
                {
                    text: "Guardare un film",
                    done: false,
                },
                {
                    text: "Pulire la casa",
                    done: false,
                }
            ],

            newTask: {
                text: '',
                done: false
            }

        }
        
    },

    methods: {
        
        // metodo per eliminare un task al click dell'icona X
        deleteTask(currentTask) {

            this.tasks.splice(currentTask, 1)

        },

        // metodo per aggiungere un nuovo task alla lista
        addTask() {

            // controllo che il campo di input non sia vuoto
            if(this.newTask.text.trim() != "") {

                this.tasks.push({...this.newTask});
            }

            this.newTask.text = ""

        },

        // inverto lo status di done del task selezionato
        invertTaskDone(currentTask) {

            this.tasks[currentTask].done = ! this.tasks[currentTask].done

        }
    }

}).mount('#app');