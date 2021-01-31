import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
 class Firebase {
    constructor(){
        this.app = firebase.initializeApp(firebaseConfig)
        this.auth = this.app.auth()
        this.firestore = this.app.firestore()
        this.storage = this.app.storage()
        this.tables = {
            CATEGORIES :'categories',
            USERS:'users',
            ADMIN:'admins',
            TRANSACTIONS:'transactions',
            MEALS:'meals',
            EXTRAS:'extras',
            ORDERS:'orders',
            NOTIFICATIONS:'notifications',
            DISPATCHERS:'dispatchers',
            BOOKED:'bookedDates'
        }
        this.serverTime = firebase.firestore.Timestamp.now().seconds
    }
    getUserDetails = async(uid)=>{
        return (await this.firestore.collection(this.tables.ADMIN).doc(uid).get()).data()
 
     }
    login = async(email, password)=>{
       await this.auth.signInWithEmailAndPassword(email, password)
    }
    logout = async()=>{
        await this.auth.signOut()
    }
    addCategory= async(name, image)=>{

    const category = await  this.firestore.collection(this.tables.CATEGORIES).add({
          name,
          photoURL:null,
          deleted:0,
          createdAt:this.serverTime
      })
      await this.storage.ref(this.tables.CATEGORIES+'/'+category.id).put(image)
      .then(()=>{
          this.storage.ref(this.tables.CATEGORIES+'/'+category.id).getDownloadURL()
          .then(async (url)=>{
              await this.firestore.collection(this.tables.CATEGORIES).doc(category.id).update({photoURL:url})
          })
      })
    }
    addExtra= async(name, price)=>{

        await  this.firestore.collection(this.tables.EXTRAS).add({
              name,
              price,
              deleted:0,
              createdAt:this.serverTime
          })
        }
    updateCategory= async(id, name, image)=>{

        await  this.firestore.collection(this.tables.CATEGORIES).doc(id).update({
              name,
          })
          if(image !== undefined)
          await this.storage.ref(this.tables.CATEGORIES+'/'+id).put(image)
          .then(()=>{
              this.storage.ref(this.tables.CATEGORIES+'/'+id).getDownloadURL()
              .then(async (url)=>{
                  await this.firestore.collection(this.tables.CATEGORIES).doc(id).update({photoURL:url})
              })
          })
        }


        updateExtra= async(id, name, price)=>{

        await  this.firestore.collection(this.tables.EXTRAS).doc(id).update({
                name,
                price
            })
        }


    getCategories = ()=>{
        return  this.firestore.collection(this.tables.CATEGORIES).orderBy('createdAt', 'desc');
    }
    geExtras = ()=>{
        return  this.firestore.collection(this.tables.EXTRAS).orderBy('createdAt', 'desc');
    }
    getUsers = ()=>{
        return  this.firestore.collection(this.tables.USERS).orderBy('createdAt', 'desc');
    }
    getDispatchers = ()=>{
        return  this.firestore.collection(this.tables.DISPATCHERS).orderBy('createdAt', 'desc');
    }
    getOrders = ()=>{
        return  this.firestore.collection(this.tables.ORDERS).orderBy('createdAt', 'desc');
    }
    deleteCategory = async(id, photoURL)=>{
       await this.storage.refFromURL(photoURL).delete()
        .then(async()=>{
            await this.firestore.collection(this.tables.CATEGORIES).doc(id).delete()
        })
        
    }
    deleteExtra = async(id)=>{
             await this.firestore.collection(this.tables.EXTRAS).doc(id).delete()

     }

    getMeals = ()=>{
        return  this.firestore.collection(this.tables.MEALS).orderBy('createdAt', 'desc');
    }
    
}
export default new Firebase();