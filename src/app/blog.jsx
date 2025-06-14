import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function LostCryptoRecovery() {
  return (
    <div id="services" className="flex flex-col items-center justify-center w-full">
    <div className="bg-primary max-w-6xl  text-gray-500 font-sans">
      {/* Navbar */}
      <header className="bg-[#0b1623] text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Services</h1>
        <div className="space-x-4">
          <a href='/#contact' className="bg-white text-[#0b1623] px-3 py-1 rounded">Submit a request</a>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="text text-gray-100 mt-6 px-6">
        Noah Support Center {">"} Wallet {">"} Lost Crypto Recovery
      </nav>

      {/* Main Content */}
      <main className="px-6 py-10 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-4"
        >
          Lost Crypto Recovery
        </motion.h2>

        <p className="max-w-3xl text-gray-50 mb-6">
          Noah Watch-Only Wallet has partnered with leading experts in the field of cryptocurrency asset recovery, specializing in decentralized finance (DeFi) wallet recoveries... fee could vary depending on the complexity of the task.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-indigo-950 rounded-md">
            <h3 className="font-semibold text-lg mb-1">WAtch-Only Wallet</h3>
            <p className="text-sm text-gray-100">
              Noah Watch-Only Wallet  is an open source, non-custodial crypto asset wallet solutions allowing users to monitor their cryptocurrency assets without exposing their private keys ensuring enhanced security
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-indigo-950 rounded-md ">
            <h3 className="font-semibold text-lg mb-1">Asset Tracing Services</h3>
            <p className="text-sm text-gray-50">
              Using industry leading crypto asset investigation software.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-indigo-950 rounded-md">
            <h3 className="font-semibold text-lg mb-1">Trading Account & Exchange Recoveries</h3>
            <p className="text-sm text-gray-100">
              Watch-Only Wallet accounts, or trading exchange recoveries.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
    </div>
  );
}
