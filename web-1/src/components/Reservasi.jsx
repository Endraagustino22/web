import { useState } from "react";

const TicketReservationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const adultPrice = 50000;
  const childPrice = 30000;
  const totalPrice = adults * adultPrice + children * childPrice;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservasi sukses!\nNama: ${name}\nEmail: ${email}\nTanggal: ${date}\nMetode Pembayaran: ${paymentMethod}\nTotal Harga: Rp${totalPrice}`);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Reservasi Tiket Kebun Binatang</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nama & Email */}
        <div>
          <label className="block text-gray-700 font-medium">Nama Pemesan</label>
          <input 
            type="text" value={name} onChange={(e) => setName(e.target.value)} 
            className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500" required 
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input 
            type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500" required 
          />
        </div>

        {/* Tanggal Kunjungan */}
        <div>
          <label className="block text-gray-700 font-medium">Tanggal Kunjungan</label>
          <input 
            type="date" value={date} onChange={(e) => setDate(e.target.value)} 
            className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500" required 
          />
        </div>

        {/* Jumlah Tiket */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">Dewasa (Rp50,000)</label>
            <input 
              type="number" value={adults} onChange={(e) => setAdults(parseInt(e.target.value) || 0)} 
              className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500" min="1" 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Anak-anak (Rp30,000)</label>
            <input 
              type="number" value={children} onChange={(e) => setChildren(parseInt(e.target.value) || 0)} 
              className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500" min="0" 
            />
          </div>
        </div>

        {/* Pilihan Metode Pembayaran */}
        <div>
          <label className="block text-gray-700 font-medium">Metode Pembayaran</label>
          <select 
            value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} 
            className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500" required
          >
            <option value="">Pilih Metode</option>
            <option value="Transfer Bank">Transfer Bank</option>
            <option value="E-Wallet">E-Wallet (OVO, GoPay, Dana)</option>
            <option value="Kartu Kredit">Kartu Kredit/Debit</option>
          </select>
        </div>

        {/* Jika pilih Transfer Bank atau E-Wallet, tampilkan nomor rekening */}
        {paymentMethod === "Transfer Bank" && (
          <div className="p-3 bg-gray-100 border rounded">
            <p className="text-gray-700">Silakan transfer ke rekening:</p>
            <p className="font-semibold">BCA: 1234-5678-900</p>
            <p className="font-semibold">Mandiri: 9876-5432-100</p>
          </div>
        )}
        {paymentMethod === "E-Wallet" && (
          <div className="p-3 bg-gray-100 border rounded">
            <p className="text-gray-700">Scan QRIS berikut atau kirim ke:</p>
            <p className="font-semibold">OVO: 0812-3456-7890</p>
            <p className="font-semibold">GoPay: 0813-9876-5432</p>
          </div>
        )}

        {/* Jika pilih Kartu Kredit, tampilkan input nomor kartu */}
        {paymentMethod === "Kartu Kredit" && (
          <div>
            <label className="block text-gray-700 font-medium">Nomor Kartu Kredit</label>
            <input 
              type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} 
              className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500" 
              placeholder="**** **** **** ****" maxLength="16" required 
            />
          </div>
        )}

        {/* Total Harga */}
        <div className="text-lg font-semibold text-gray-800 mt-4">
          Total Harga: <span className="text-blue-600">Rp{totalPrice.toLocaleString("id-ID")}</span>
        </div>

        {/* Tombol Submit */}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
          Bayar Sekarang
        </button>
      </form>
    </div>
  );
};

export default TicketReservationForm;
