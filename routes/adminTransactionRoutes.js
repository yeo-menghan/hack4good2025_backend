import express from 'express';

import {
    createProduct,
    viewProduct,
    viewAllProducts,
    updateProductDetails,
    updateProductStock,
    deleteProduct,
    generateInventoryReport,
    generateReport,
    downloadReport,
} from '../controllers/adminTransactionController.js';

const router = express.Router();

// Admin Routes for Product Management
router.post('/products/create', createProduct);
router.get('/products/view/id', viewProduct);
router.get('/products/view/all', viewAllProducts);
router.put('/products/update/details', updateProductDetails);
router.put('/products/update/stock', updateProductStock);
router.delete('/products/delete', deleteProduct);

// Admin Routes for Inventory Management
// TODO: integrate inventory report with pre-order list
router.get('/inventory/report', generateInventoryReport);
router.post("inventory/generate-report", generateReport);
router.get("/inventory/download-report", downloadReport);

// TODO: automated weekly report generator

export default router;
