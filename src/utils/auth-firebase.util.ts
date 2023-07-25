import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { auth, db } from '@/src/firebase';

export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

export const signInUser = (
  event: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string,
) => {
  event.preventDefault();
  if (!email && !password) return;
  signInWithEmailAndPassword(auth, email, password);
};

export const signOut = () => {
  auth.signOut();
};

export const sendMessage = async (event: React.FormEvent<HTMLFormElement>, message: string) => {
  event.preventDefault();
  if (message.trim() === '') {
    alert('Enter valid message');
    return;
  }
  if (auth.currentUser) {
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
  }
};
