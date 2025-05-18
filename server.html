const express = require('express');
const multer = require('multer'); // For image uploads
const cors = require('cors');
const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(cors());
app.use(express.json());

let users = [];
let withdrawals = [];
const SUPREMEAMER_INITIAL_BALANCE = 500; // $SAC

// --- User Signup ---
app.post('/signup', upload.single('picture'), (req, res) => {
  const { email, country, number, name, dob } = req.body;
  const picture = req.file ? req.file.filename : null;
  if (!email || !country || !number || !name || !dob || !picture) {
    return res.status(400).json({ message: 'All fields required' });
  }
  if (users.find(u => u.email === email)) {
    return res.status(409).json({ message: 'User already exists' });
  }
  const user = {
    id: users.length + 1,
    email, country, number, name, dob, picture,
    balance: SUPREMEAMER_INITIAL_BALANCE,
    wallet: null
  };
  users.push(user);
  res.json({ message: 'Signup successful', user });
});

// --- User Profile ---
app.get('/user/:email', (req, res) => {
  const user = users.find(u => u.email === req.params.email);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// --- Connect Wallet ---
app.post('/user/:email/wallet', (req, res) => {
  const { wallet } = req.body;
  const user = users.find(u => u.email === req.params.email);
  if (!user) return res.status(404).json({ message: 'User not found' });
  user.wallet = wallet;
  res.json({ message: 'Wallet connected', wallet });
});

// --- Withdraw Request ---
app.post('/withdraw', (req, res) => {
  const { email, tokenAddress, amount } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ message: 'User not found' });
  if (amount < 500) return res.status(400).json({ message: 'Minimum withdraw is 500 SAC' });
  const fee = amount * 0.06;
  const total = amount + fee;
  if (user.balance < total) return res.status(400).json({ message: 'Insufficient balance' });
  user.balance -= total;
  const withdrawal = {
    id: withdrawals.length + 1,
    email, tokenAddress, amount, fee,
    status: 'pending'
  };
  withdrawals.push(withdrawal);
  res.json({ message: 'Withdraw initiated', withdrawal });
});

// --- Withdraw Status Update (admin simulation) ---
app.post('/withdraw/:id/status', (req, res) => {
  const { status } = req.body; // 'approved' or 'successful'
  const w = withdrawals.find(w => w.id == req.params.id);
  if (!w) return res.status(404).json({ message: 'Not found' });
  w.status = status;
  res.json({ message: 'Status updated', withdrawal: w });
});

// --- Get Withdrawals for User ---
app.get('/withdrawals/:email', (req, res) => {
  res.json(withdrawals.filter(w => w.email === req.params.email));
});

// --- Start Server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('SupremeAmer Affiliate Backend running on port', PORT));
