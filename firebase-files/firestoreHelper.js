import { collection, addDoc, doc, deleteDoc, getDoc } from "firebase/firestore";
import { database, auth } from "./firebaseSetup";

export async function writeToDB(data, col, docId, subCol) {
  try {
    if (docId) {
      await addDoc(collection(database, col, docId, subCol), data);
    } else {
      if (col === "goals") {
        data = { ...data, owner: auth.currentUser.uid };
      }
      await addDoc(collection(database, col), data);
    }
  } catch (error) {
    console.log(err);
  }
}

export async function deleteFromDB(id) {
  try {
    await deleteDoc(doc(database, col, docId));
  } catch (error) {
    console.log(err);
  }
}

export async function getFromDB(id) {
  try {
    if (id) {
      await getDoc(collection(database, col, docId, subCol), data);
    } else {
      await addDoc(collection(database, col), data);
    }
  } catch (error) {
    console.log(err);
  }
}
