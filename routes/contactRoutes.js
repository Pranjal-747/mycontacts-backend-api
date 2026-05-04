const express = require("express");
const router = express.Router();

// Importing the controller functions
const { 
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact 
} = require("../controller/contactController");

// Route for "/" (which maps to /api/contacts in server.js)
// You can chain multiple methods that share the same path
router.route("/")
    .get(getContacts)
    .post(createContact);

// Route for "/:id" (specific contact by ID)
router.route("/:id")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;