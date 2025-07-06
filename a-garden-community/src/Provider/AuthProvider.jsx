import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   // Function to create a new user
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // Sign-in function
   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // Google sign-in function
   const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, provider);
   };

   // Sign out function
   const logOut = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });

      // Cleanup subscription on unmount
      // This is important to prevent memory leaks and ensure that the listener is removed when the component unmounts
      return () => {
         unsubscribe();
      };
   }, []);

   const AuthData = {
      user,
      setUser,
      createUser,
      logOut,
      signIn,
      googleSignIn,
      loading,
      setLoading,
   };
   return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
