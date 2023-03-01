// import express
import express from "express";
// import controllers
import { getCustomer, 
    getCustomerById, 
    saveCustomer,
    updateCustomer,
    deleteCustomer } from "../controllers/CustomerController.js";
 
    // express router
const router = express.Router();
 
// Route get All Customers
router.get('/', getCustomer);
// Route get single Customer
router.get('/:id', getCustomerById);
// Route CREATE Customer
router.post('/', saveCustomer);
// Route UPDATE Customer
router.patch('/:id', updateCustomer);
// Route DELETE Customer
router.delete('/:id', deleteCustomer);
 
// export router
export default router;