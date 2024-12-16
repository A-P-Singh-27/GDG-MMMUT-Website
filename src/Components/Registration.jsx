import React, { useState } from 'react';
import { Send, Calendar, User, Mail, Phone, School, Code } from 'lucide-react';
import Header from './Header';
import {  useNavigate } from 'react-router-dom';

export default function EventRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    branch: '',
    whyJoin: '',
    technicalSkills: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (submitted) {
    return (
    <>
    <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 overscroll-y-none" >
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center" onClick={()=>{window.scrollTo(0, 0);navigate('/events')}}>
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Send className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h2>
          <p className="text-gray-600">Thank you for registering for the GDSC event. We'll contact you soon with more details.</p>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-700 px-6 py-8 text-center">
            <div className="flex justify-center space-x-2 mb-4">
              <span className="w-4 h-4 bg-red-500 rounded-full"></span>
              <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            </div>
            <h2 className="text-3xl font-bold text-white">GDSC Event Registration</h2>
            <p className="mt-2 text-blue-100">Join us for an amazing learning experience!</p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <School className="w-4 h-4 mr-2" />
                  College Name
                </label>
                <input
                  type="text"
                  name="college"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.college}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Year of Study
                </label>
                <select
                  name="year"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.year}
                  onChange={handleChange}
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  Branch
                </label>
                <input
                  type="text"
                  name="branch"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.branch}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why do you want to join this event?
              </label>
              <textarea
                name="whyJoin"
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.whyJoin}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Technical Skills
              </label>
              <textarea
                name="technicalSkills"
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.technicalSkills}
                onChange={handleChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
