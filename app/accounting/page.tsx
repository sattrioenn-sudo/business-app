'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Accounting() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    const { data } = await supabase
      .from('transactions')
      .select('*')
      .order('created_at', { ascending: false });
    setTransactions(data || []);
  }

  async function addTransaction() {
    if (!desc || !amount) {
      alert('Mohon isi keterangan dan jumlah!');
      return;
    }

    await supabase.from('transactions').insert({
      description: desc,
      amount: Number(amount),
      type,
    });

    setDesc('');
    setAmount('');
    fetchTransactions();
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">💰 Accounting</h1>

      <div className="bg-white p-8 rounded-3xl shadow mb-10">
        <h2 className="text-2xl mb-6">Tambah Transaksi</h2>
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Keterangan transaksi"
          className="w-full p-4 border rounded-2xl mb-4"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Jumlah (Rp)"
          className="w-full p-4 border rounded-2xl mb-4"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-4 border rounded-2xl mb-6"
        >
          <option value="income">Pemasukan</option>
          <option value="expense">Pengeluaran</option>
        </select>
        <button
          onClick={addTransaction}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-semibold"
        >
          Tambah Transaksi
        </button>
      </div>

      <h2 className="text-2xl mb-6">Daftar Transaksi</h2>
      <div className="space-y-4">
        {transactions.map((t) => (
          <div key={t.id} className="bg-white p-6 rounded-3xl shadow flex justify-between items-center">
            <div>
              <p className="font-medium">{t.description}</p>
              <small className="text-gray-500">
                {new Date(t.created_at).toLocaleDateString('id-ID')}
              </small>
            </div>
            <div className={`text-2xl font-bold ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
              Rp {Number(t.amount).toLocaleString('id-ID')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
