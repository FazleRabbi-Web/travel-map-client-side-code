import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";


import authInit from "../components/Shared/Login/firebase/firebase.init";
authInit();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
  };
  const signUpUser = (e) => {
    setError("");
    e.preventDefault();
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        setUserName();
        
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((res) => {});
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };
  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubcribed;
  }, [isLoading]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    googleSignIn,
    signUpUser,
    signInUser,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    isLoading,
    error,
    setError,
    logOut,
    setUser
  };
};

export default useFirebase;
