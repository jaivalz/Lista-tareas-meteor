if (Meteor.isClient) {
 // Sólo se ejecuta en el cliente
 Template.body.helpers({
   tasks: [
     { text: "Tarea 1" },
     { text: "Tarea 2" },
     { text: "Tarea 3" },

   ]
 });


}
