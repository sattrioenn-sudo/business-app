import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-700 text-white p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Business App</h1>
          <div className="space-x-6 text-lg">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/accounting" className="hover:underline">Accounting</Link>
            <Link href="/marketing" className="hover:underline">Marketing</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Selamat Datang di Business App</h2>
        <p className="text-xl text-gray-600 mb-12">Kelola Accounting dan Marketing dengan mudah</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
          <Link href="/accounting" className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition text-left">
            <div className="text-7xl mb-6">💰</div>
            <h3 className="text-3xl font-semibold mb-2">Accounting</h3>
            <p className="text-gray-600">Kelola transaksi keuangan</p>
          </Link>

          <Link href="/marketing" className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition text-left">
            <div className="text-7xl mb-6">📈</div>
            <h3 className="text-3xl font-semibold mb-2">Marketing</h3>
            <p className="text-gray-600">Kelola kampanye & budget</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
