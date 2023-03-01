// import models
import Customer from "../models/Customer.js";

// function get All Customers
export const getCustomer = async (req, res) => {
    try {
        const customer = await Customer.find();
        res.json(customer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
// function get single Customer
export const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        res.json(customer);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
     
}
// function Create Customer
export const saveCustomer = async (req, res) => {
    const customer = new Customer(req.body);
    try {
        const savedCustomer = await customer.save();
        res.status(201).json(savedCustomer);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
// function Update Customer
export const updateCustomer = async (req, res) => {
    const cekId = await Customer.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedCustomer = await Customer.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
// function Delete Customer
export const deleteCustomer = async (req, res) => {
    const cekId = await Customer.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedCustomer = await Customer.deleteOne({_id: req.params.id});
        res.status(200).json(deletedCustomer);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}