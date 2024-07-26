import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config";

export const syncBothMenus = (userId, menuUpdated) => {

    const cachette = doc(db, "users", userId);
    const content = {
        username: userId,
        menu: menuUpdated,
    };

    setDoc(cachette, content);
}

export const getMenu = async (idUser) => { 
    
    const docRef = doc(db, "users", idUser);
    const docSnapshot = await getDoc(docRef);
    //console.log("docSnapshot.exists() : ", docSnapshot.exists());

    if(docSnapshot.exists()) {
        const {menu} = docSnapshot.data();
        //console.log("menu :", menu);
        return menu;
    }
 }