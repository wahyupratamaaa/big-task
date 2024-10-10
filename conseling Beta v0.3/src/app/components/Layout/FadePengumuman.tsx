    // import React from "react";

    // interface ModalFadeArticleProps {
    //   toggleModal: () => void;
    // }

    // export default function ModalFadePengumuman({
    //   toggleModal,
    // }: ModalFadeArticleProps) {
    //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log("Form submitted");
    //     toggleModal(); // Menutup modal setelah mengirim form
    //   };

    //   return (
    //     <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 ">
    //       <div className="relative p-4 w-full max-w-lg max-h-full">
    //         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
    //           <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
    //             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    //               Create New Pengumuman
    //             </h3>
    //             <button
    //               type="button"
    //               className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
    //               onClick={toggleModal}
    //             >
    //               <svg
    //                 className="w-3 h-3"
    //                 aria-hidden="true"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 14 14"
    //               >
    //                 <path
    //                   stroke="currentColor"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    //                 />
    //               </svg>
    //               <span className="sr-only">Close modal</span>
    //             </button>
    //           </div>

    //           <form onSubmit={handleSubmit} className="p-4 md:p-5">
    //             <div className="grid gap-4 mb-4 grid-cols-2">
    //               <div className="col-span-2">
    //                 <label
    //                   htmlFor="title"
    //                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //                 >
    //                   Judul Article
    //                 </label>
    //                 <input
    //                   type="text"
    //                   name="title"
    //                   id="title"
    //                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    //                   placeholder="Type Pengumuman Title"
    //                   required
    //                 />
    //               </div>
    //               <div className="col-span-2 sm:col-span-1">
    //                 <label
    //                   htmlFor="date"
    //                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //                 >
    //                   Tanggal
    //                 </label>
    //                 <input
    //                   type="date"
    //                   name="date"
    //                   id="date"
    //                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    //                   required
    //                 />
    //               </div>
    //               <div className="col-span-2 sm:col-span-1">
    //                 <label
    //                   htmlFor="image"
    //                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //                 >
    //                   Gambar
    //                 </label>
    //                 <input
    //                   type="file"
    //                   name="image"
    //                   id="image"
    //                   accept="image/*"
    //                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    //                   required
    //                 />
    //               </div>
    //               <div className="col-span-2"></div>
    //             </div>
    //             <button
    //               type="submit"
    //               className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //             >
    //               <svg
    //                 className="me-1 -ms-1 w-5 h-5"
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
    //                   clipRule="evenodd"
    //                 ></path>
    //               </svg>
    //               Add new Pengumuman
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   );
//     // }
//     import React, { useState } from "react";

// interface ModalFadePengumumanProps {
//   toggleModal: () => void;
//   onDataAdded: () => void; // Callback untuk memberi tahu bahwa data baru ditambahkan
// }

// export default function ModalFadePengumuman({ toggleModal, onDataAdded }: ModalFadePengumumanProps) {
//   const [judul, setJudul] = useState("");
//   const [tanggal, setTanggal] = useState("");
//   const [gambar, setGambar] = useState<File | null>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append("judul", judul);
//     formData.append("tanggal", tanggal);
//     if (gambar) formData.append("gambar", gambar);

//     const response = await fetch("http://localhost:5000/api/pengumuman", {
//       method: "POST",
//       body: formData,
//     });

//     if (response.ok) {
//       onDataAdded(); // Panggil callback untuk memperbarui data
//       toggleModal(); // Menutup modal setelah mengirim form
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 ">
//       <div className="relative p-4 w-full max-w-lg max-h-full">
//         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//           <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Buat Pengumuman Baru</h3>
//             <button
//               type="button"
//               className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//               onClick={toggleModal}
//             >
//               <svg
//                 className="w-3 h-3"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                 />
//               </svg>
//               <span className="sr-only">Close modal</span>
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="p-4 md:p-5">
//             <div className="grid gap-4 mb-4 grid-cols-2">
//               <div className="col-span-2">
//                 <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                   Judul Pengumuman
//                 </label>
//                 <input
//                   type="text"
//                   value={judul}
//                   onChange={(e) => setJudul(e.target.value)}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Ketik Judul Pengumuman"
//                   required
//                 />
//               </div>
//               <div className="col-span-2 sm:col-span-1">
//                 <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                   Tanggal
//                 </label>
//                 <input
//                   type="date"
//                   value={tanggal}
//                   onChange={(e) => setTanggal(e.target.value)}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   required
//                 />
//               </div>
//               <div className="col-span-2">
//                 <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                   Gambar
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => {
//                     if (e.target.files) {
//                       setGambar(e.target.files[0]);
//                     }
//                   }}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   required
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Tambah Pengumuman
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

interface ModalFadePengumumanProps {
  onNewPengumuman: (formData: { judul: string; tanggal: string; gambar: File }) => Promise<void>;
  toggleModal: () => void;
}

const ModalFadePengumuman: React.FC<ModalFadePengumumanProps> = ({ onNewPengumuman, toggleModal }) => {
  const [judul, setJudul] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [gambar, setGambar] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (judul && tanggal && gambar) {
      await onNewPengumuman({ judul, tanggal, gambar });
      resetForm();
    }
  };

  const resetForm = () => {
    setJudul("");
    setTanggal("");
    setGambar(null);
    toggleModal(); // Tutup modal setelah submit
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Tambah Pengumuman</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="judul">
              Judul
            </label>
            <input
              type="text"
              id="judul"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="tanggal">
              Tanggal
            </label>
            <input
              type="date"
              id="tanggal"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="gambar">
              Gambar
            </label>
            <input
              type="file"
              id="gambar"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) {
                  setGambar(e.target.files[0]);
                }
              }}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Simpan
            </button>
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              onClick={resetForm}
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalFadePengumuman;