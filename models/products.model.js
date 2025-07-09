import { db } from '../config/firebase.js';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

// Obtener todos los productos
export const getAllProductsDB = async () => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Obtener un producto por id
export const getProductByIdDB = async (id) => {
  const productDoc = doc(db, 'products', id);
  const snapshot = await getDoc(productDoc);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
};

// Crear un producto
export const createProductDB = async (productData) => {
  const docRef = await addDoc(productsCollection, productData);
  return { id: docRef.id, ...productData };
};

// Eliminar un producto por id
export const deleteProductDB = async (id) => {
  const productDoc = doc(db, 'products', id);
  await deleteDoc(productDoc);
  return { id };
};
