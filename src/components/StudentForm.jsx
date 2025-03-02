// import { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { AiOutlineLoading3Quarters } from 'react-icons/ai';

// const StudentForm = () => {
//   const [student, setStudent] = useState({
//     name: '',
//     email: '',
//     feesPaid: '',
//     startDate: '',
//     endDate: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (!student.name) newErrors.name = 'Name is required!';
//     if (!student.email) newErrors.email = 'Email is required!';
//     if (!student.feesPaid) newErrors.feesPaid = 'Fees amount is required!';
//     if (!student.startDate) newErrors.startDate = 'Start Date is required!';
//     if (!student.endDate) newErrors.endDate = 'End Date is required!';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }

//     setLoading(true);
//     setErrors({});

    

//     try {
//       const response = await axios.post(
//         // 'http://localhost:5000/send-email',
//         'https://student-fee-receipt.onrender.com/send-email',

//         student,
//       );
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error('Error sending email:', error);
//       setMessage('Failed to send email. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://source.unsplash.com/random/?technology')",
//       }}
//     >
//       {/* Glassmorphism Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Student Form */}
//       <motion.div
//         className="w-full max-w-lg p-8 rounded-xl shadow-xl bg-white/10 backdrop-blur-md border border-white/20 relative z-10"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold text-white text-center mb-6">
//           Student Fee Form
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {[
//             { name: 'name', type: 'text', placeholder: 'Student Name' },
//             { name: 'email', type: 'email', placeholder: 'Student Email' },
//             { name: 'feesPaid', type: 'number', placeholder: 'Fees Paid (₹)' },
//             { name: 'startDate', type: 'date', placeholder: 'Start Date' },
//             { name: 'endDate', type: 'date', placeholder: 'End Date' },
//           ].map((input) => (
//             <div key={input.name}>
//               <input
//                 type={input.type}
//                 name={input.name}
//                 placeholder={input.placeholder}
//                 value={student[input.name]}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-900 text-white focus:border-blue-500 focus:outline-none placeholder-gray-400"
//                 required
//               />
//               {errors[input.name] && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors[input.name]}
//                 </p>
//               )}
//             </div>
//           ))}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg transition-all hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <AiOutlineLoading3Quarters className="animate-spin text-xl" />
//                 Processing...
//               </>
//             ) : (
//               'Submit'
//             )}
//           </button>
//         </form>

//         {message && (
//           <motion.div
//             className="mt-4 p-3 text-center text-white rounded-lg bg-green-600"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {message}
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default StudentForm;

import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    feesPaid: '',
    startDate: '',
    endDate: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!student.name) newErrors.name = 'Name is required!';
    if (!student.email) newErrors.email = 'Email is required!';
    if (!student.feesPaid) newErrors.feesPaid = 'Fees amount is required!';
    if (!student.startDate) newErrors.startDate = 'Start Date is required!';
    if (!student.endDate) newErrors.endDate = 'End Date is required!';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await axios.post(
        'https://student-fee-receipt.onrender.com/send-email',
        student,
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Failed to send email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/random/?technology')",
      }}
    >
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Student Form */}
      <motion.div
        className="w-full max-w-lg p-8 rounded-xl shadow-xl bg-white/10 backdrop-blur-md border border-white/20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Student Fee Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div>
            <label className="text-white mb-2 block">Student Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter student name"
              value={student.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-900 text-white focus:border-blue-500 focus:outline-none placeholder-gray-400"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="text-white mb-2 block">Student Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter student email"
              value={student.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-900 text-white focus:border-blue-500 focus:outline-none placeholder-gray-400"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Fees Paid Input */}
          <div>
            <label className="text-white mb-2 block">Fees Paid (₹)</label>
            <input
              type="number"
              name="feesPaid"
              placeholder="Enter fees paid amount"
              value={student.feesPaid}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-900 text-white focus:border-blue-500 focus:outline-none placeholder-gray-400"
              required
            />
            {errors.feesPaid && (
              <p className="text-red-500 text-sm mt-1">{errors.feesPaid}</p>
            )}
          </div>

          {/* Start Date Input */}
          <div>
            <label className="text-white mb-2 block">
              Fee Period Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={student.startDate}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-900 text-white focus:border-blue-500 focus:outline-none"
              required
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
            )}
          </div>

          {/* End Date Input */}
          <div>
            <label className="text-white mb-2 block">Fee Period End Date</label>
            <input
              type="date"
              name="endDate"
              value={student.endDate}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-900 text-white focus:border-blue-500 focus:outline-none"
              required
            />
            {errors.endDate && (
              <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg transition-all hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                Processing...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </form>

        {message && (
          <motion.div
            className="mt-4 p-3 text-center text-white rounded-lg bg-green-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {message}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default StudentForm;

