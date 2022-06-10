import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from "../../App";


  function createData() {
   
// unique ID form firebase
            // const newKey = push(child(ref(database), 'users')).key;

            set(ref(db, 'users/' + name), {          
              username: name 
            }).then(() => {
              // Data saved successfully!
              alert('data updated!');    
          })  
              .catch((error) => {
                  // The write failed...
                  alert(error);
              });
  }