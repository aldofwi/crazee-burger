import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config";

export const syncBothMenus = (userId, menuUpdated) => {

    const cachette = doc(db, "users", userId);
    const content = {
        username: userId,
        menu: menuUpdated,
    };

    setDoc(cachette, content);
}