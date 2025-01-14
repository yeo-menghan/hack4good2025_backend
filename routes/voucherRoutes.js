import express from 'express';
import {
    createTask,
    viewTasks,
    viewTaskByID,
    viewTasksNotClaimed,
    viewTasksClaimed,
    updateTask,
    deleteTask,
    claimTask,
    // notifyAdmin,
    // approveVoucher,
    // rejectVoucher,
    // earnVoucher,
} from '../controllers/voucherController.js';

const router = express.Router();

// Create Task
router.post('/create', createTask);

// View Tasks
router.get('/viewtasks', viewTasks);

// View Specific Task
router.get('/viewtask/:voucherTaskId', viewTaskByID);

// View all tasks that are not claimed
router.get('/viewtasks/notclaimed', viewTasksNotClaimed);

// View all tasks that are claimed
router.get('/viewtasks/claimed', viewTasksClaimed);

// Update Task
router.put('/update/:voucherTaskId', updateTask);

// Delete Task
router.delete('/delete/:voucherTaskId', deleteTask);

// Claim Task
router.patch('/claim/:voucherTaskId/:userId', claimTask);

// // Notify Admin
// router.post('/notify/:id', notifyAdmin);

// // Approve Voucher
// router.post('/approve/:id', approveVoucher);

// // Reject Voucher
// router.post('/reject/:id', rejectVoucher);

// // Earn Voucher
// router.post('/earn/:id', earnVoucher);

export default router;
