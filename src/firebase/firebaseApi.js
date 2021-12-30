import { auth, database} from "./firebaseConfig.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";


export async function registerUser(name, email, password) {
    try {
        if(!(name && email && password)){
            alert("All fields need to be filled in!");
            return;
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Creates user document in cloud firestore
        await setDoc(doc(database, "profiles", user.uid), {
            // Insert more user data here
            name: name,
            email: user.email,
            profilePicture: null,
        });

        alert("You are now registred! :)");
    
    } catch(e) {
        alert(e);
    }
}


export async function loginUser(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);

    } catch(e) {
        alert(e);
    }
}

export async function logoutUser() {
    try {
        await signOut(auth);

    } catch(e) {
        alert(e);
    }
};


export async function getData(collection){
    try {

        const docSnap = await getDoc(doc(database, collection, auth.currentUser.uid));

        return docSnap.data();

    } catch(e) {
        alert(e);
    }
}


export async function setData(collection, data){
    try {
        await setDoc(doc(database, collection, auth.currentUser.uid), data);

    } catch(e) {
        alert(e);
    }
}

export async function getSharedData(document){
    try {
        const docSnap = await getDoc(doc(database, "shared", document));
        const data = docSnap.data();

        var newData = {}

        for(const key in data){
            const profileData = await getDoc(doc(database, "profiles", key));

            newData[profileData.data().name] = [data[key], profileData.data().profilePicture]
        }
            

        return newData;

    } catch(e) {
        alert(e);
    }
}

export async function updateSharedData(document, data){
    try {
        var currentUser = auth.currentUser.uid;
        await updateDoc(doc(database, "shared", document), {[currentUser]: data});

    } catch(e) {
        alert(e);
    }
}