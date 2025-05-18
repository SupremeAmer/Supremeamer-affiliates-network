
const [amount, setAmount] = useState('');
const [tokenAddress, setTokenAddress] = useState('');
const [status, setStatus] = useState(null);

const handleWithdraw = async () => {
  if (amount < 500) return alert('Minimum withdraw is 500 SAC');
  const email = JSON.parse(localStorage.getItem('supremeamer_user')).email;
  const resp = await fetch('http://localhost:3000/withdraw', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, tokenAddress, amount })
  });
  const data = await resp.json();
  setStatus(data.withdrawal.status); // 'pending', etc.
};

