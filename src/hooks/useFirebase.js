import initializeFirebase from "../Components/Login/Firebase/Firebase.init";
import {useEffect, useState} from 'react';
import { getAuth,GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,updateProfile, getIdToken } from "firebase/auth";
initializeFirebase()
const useFirebase = () =>{

 const [user, setUser] = useState({});
 const [isLoading, setIsLoading] = useState(true)
 const [authError, setAuthError] =useState('')
 const [admin, setAdmin] = useState(false)
 const [token, setToken] = useState('')
const auth = getAuth();
const googleProvider = new GoogleAuthProvider()
const registerUser = (email, password, name, history) => {
  setIsLoading(true)
       createUserWithEmailAndPassword(auth, email, password)
       .then((result) => {
        setAuthError('')
        const newUser = {email, displayName: name}
        setUser(newUser)
    //save user to db 
        saveUser(email, name, 'POST')
       


        updateProfile(auth.currentUser, {
          displayName: name, photoURL: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png"
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

        history.replace("/")
      })
      .catch((error) => {
       console.log(error)
        setAuthError( error.message)
        // ..
      })
      .finally(() =>setIsLoading(false))
    }

    const loginUser = (email, password,location, history) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || '/'
          history.replace(destination)
          setAuthError('')
        })
        .catch((error) => {
          
          setAuthError( error.message)
        })
       .finally(() =>setIsLoading(false));
    }

const logOut =() =>{
  setIsLoading(true)
    signOut(auth).then(() => {
   
    })
    .catch((error) => {
          setAuthError(error.message)
    })
    .finally(() =>setIsLoading(false))
}

const signInWithGoogle = (location, history) => {
  setIsLoading(true)
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user
     saveUser(user.email, user.displayName, 'PUT')
    setAuthError('')
  })
   .catch(error => {
     setAuthError( error.message)
   })
   .finally(() =>setIsLoading(false));
}

//observe user state
useEffect(() => {
  const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          getIdToken(user)
          .then(idToken =>{
            setToken(idToken)
          })
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
      return () => unsubscribed;
},[])


 const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://agile-chamber-33885.herokuapp.com/users', {
          method: method,
          headers:{ 
            'content-type': 'application/json'
          },
          body:JSON.stringify(user)
        })
        .then()
 }

 //admin 
   useEffect(()=>{
     fetch(`https://agile-chamber-33885.herokuapp.com/users/${user.email}`)
     .then(res => res.json())
     .then(data => setAdmin(data.admin))
   },[user.email])


       return{
          user,
          admin,
          registerUser,
           loginUser,
        logOut,
        isLoading,
        authError,
        signInWithGoogle,
        token
     }
}
export default useFirebase; 