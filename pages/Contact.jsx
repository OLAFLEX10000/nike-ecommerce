import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
// 💡 IMPORTANT: Destructure the third function, 'resetForm' (or resetFormspree)
import { useForm, ValidationError } from '@formspree/react'; 

const Contact = () => {
    // 1. UPDATED: Destructure the reset function from the Formspree hook
    const [state, handleSubmitFormspree, resetFormspree] = useForm("mblzqkjl");

    // Local state for form inputs and success display
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [buttonText, setButtonText] = useState('Send Message');


    // 2. UPDATED EFFECT: Now includes resetFormspree() after the timer finishes
    useEffect(() => {
        let timer;
        let buttonTimer;

        if (state.succeeded) {
            setShowSuccess(true);
            setButtonText('Sent!'); 

            // Timer to hide the banner (3000ms)
            timer = setTimeout(() => {
                setShowSuccess(false);
            }, 3000);

            // Timer to revert button text AND reset Formspree state (3000ms)
            buttonTimer = setTimeout(() => {
                setButtonText('Send Message'); 
                // 💡 THE FIX: Manually reset Formspree state after success message disappears
                resetFormspree(); 
            }, 3000); 

        } else if (state.submitting) {
            setButtonText('Submitting...');
        } else if (!state.submitting && !state.succeeded) {
             setButtonText('Send Message');
        }

        // Cleanup function: clears both timers
        return () => {
            clearTimeout(timer);
            clearTimeout(buttonTimer);
        };
    }, [state.succeeded, state.submitting, resetFormspree]); // Added resetFormspree to dependency array for best practice

    // Handler for all input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Custom handler to submit to Formspree and clear the form
    const handleCombinedSubmit = async (e) => {
        e.preventDefault();
        
        setShowSuccess(false);
        setButtonText('Submitting...');

        // Post data using Formspree hook
        await handleSubmitFormspree(e); 

        // If submission succeeded, clear local state/form fields
        if (state.succeeded) {
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }
    };

    // Conditional Success Message Component 
    const SuccessMessage = () => (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} 
            className="flex items-center p-4 mb-6 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg shadow-lg"
        >
            <FaCheckCircle className="text-green-500 mr-3 text-xl flex-shrink-0" />
            <p className="font-semibold">Message sent successfully! Thank you.</p>
        </motion.div>
    );

    // ... (Rest of the component's JSX remains the same)
    return (
        <section className="bg-white text-black py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Title and Subtitle Section */}
                <div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-4 uppercase">
                        Contact <span className="text-red-600">Us</span>
                    </h2>
                    <p className="text-center tracking-wide text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                        We're here to help you step up your game. Reach out with any questions about your order, products, or partnerships.
                    </p>
                </div>

                {/* Main Content: Info & Form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-neutral-100 rounded-xl shadow-2xl overflow-hidden">
                    
                    {/* Left Column: Contact Information */}
                    <div className="bg-black text-white p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-6 text-red-600">Get in Touch</h3>
                        <p className="mb-8 text-neutral-300">
                            Our support team is ready to answer your inquiries. Expect a response within 24-48 hours.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <FaEnvelope className="text-red-600 text-xl mt-1 flex-shrink-0" />
                                <div><p className="font-semibold text-lg">Email Support</p><p className="text-neutral-400">support@nike-clone.com</p></div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <FaPhoneAlt className="text-red-600 text-xl mt-1 flex-shrink-0" />
                                <div><p className="font-semibold text-lg">Call Us</p><p className="text-neutral-400">+1 (800) 555-NIKE</p></div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <FaMapMarkerAlt className="text-red-600 text-xl mt-1 flex-shrink-0" />
                                <div><p className="font-semibold text-lg">Our Headquarters</p><p className="text-neutral-400">One Bowerman Drive, Beaverton, OR, 97005</p></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="p-8 md:p-12">
                        <form 
                            onSubmit={handleCombinedSubmit} 
                            className="space-y-6"
                            >
                            
                            {/* Conditional Success Message Display */}
                            {showSuccess && <SuccessMessage />}
                            
                            {/* Name Input */}
                            <motion.div whileHover={{ x: 5 }}>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange}
                                    placeholder="Your Full Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition duration-200 shadow-sm"
                                    required
                                />
                            </motion.div>

                            {/* Email Input */}
                            <motion.div whileHover={{ x: 5 }}>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition duration-200 shadow-sm"
                                    required
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </motion.div>

                            {/* Message Textarea */}
                            <motion.div whileHover={{ x: 5 }}>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message" 
                                    rows="5"
                                    value={formData.message} 
                                    onChange={handleChange}
                                    placeholder="Tell us how we can help..."
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition duration-200 shadow-sm"
                                    required
                                ></textarea>
                                <ValidationError 
                                     prefix="Message" 
                                     field="message"
                                     errors={state.errors}
                                     className="text-red-500 text-sm mt-1"
                                />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={state.submitting || buttonText === 'Sent!'}
                                whileTap={{ scale: 0.95 }}
                                className="w-full py-3 bg-red-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-red-700 transition duration-300 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {buttonText}
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;