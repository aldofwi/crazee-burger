import { doc, getDoc, setDoc } from "firebase/firestore"
import { fakeMenu } from "../fakeData/fakeMenu";
import { db } from "./firebase-config";

export const getUser = async (idUser) => { 
    
    const docRef = doc(db, "users", idUser);
    const docSnapshot = await getDoc(docRef);
    //console.log("docSnapshot.exists() : ", docSnapshot.exists());

    if(docSnapshot.exists()) {
        const userReceived = docSnapshot.data();
        return userReceived;
    }
 }

 export const createUser = (userId) => { 
    
    const docRef = doc(db, "users", userId);
    
    const content = {
        username: userId,
        menu: fakeMenu.SMALL,
    }
    
    setDoc(docRef, content);
  }

  export const authenticateUser = async (userId) => { 

      // 1. Récupère un user.
      const existingUser = await getUser(userId);
      //console.log("existingUser = ", existingUser);

      // 2. Sinon crée un new user.
      if(!existingUser) {
        createUser(userId);
      }
 }