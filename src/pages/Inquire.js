import inquireImg from '../img/contact/DSC08408.avif';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaChevronDown } from "react-icons/fa";

const Inquire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    eventDate: null,
    referralSource: '',
    budget: '',
    additionalDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const referralOptions = [
    'Instagram',
    'Facebook', 
    'Referral',
    'Another Photographer',
    'Other'
  ];

  useEffect(() => {
    document.body.classList.add('allow-scroll');
    document.documentElement.classList.add('allow-scroll');
    
    return () => {
      document.body.classList.remove('allow-scroll');
      document.documentElement.classList.remove('allow-scroll');
    };
  }, []);

  // Handle click outside to close dropdown and calendar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close calendar if clicking outside
      if (showCalendar && !event.target.closest('.calendar-container')) {
        setShowCalendar(false);
      }
      
      // Close dropdown if clicking outside
      if (showDropdown && !event.target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar, showDropdown]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      eventDate: date
    }));
    setShowCalendar(false);
  };

  const handleBudgetChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
    const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas for thousands
    setFormData(prev => ({
      ...prev,
      budget: formattedValue
    }));
  };

  const handleReferralSelect = (option) => {
    setFormData(prev => ({
      ...prev,
      referralSource: option
    }));
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const result = await emailjs.send(
        'service_jghly6s', 
        'template_57122e2',
        {
          from_name: formData.name,
          from_email: formData.email,
          interest: formData.interest,
          event_date: formData.eventDate ? formData.eventDate.toLocaleDateString() : 'Not specified',
          referral_source: formData.referralSource,
          budget: formData.budget ? `$${formData.budget}` : 'Not specified',
          additional_details: formData.additionalDetails,
          to_name: 'Michaela Vivant',
        },
        'vKZ0qHSJFIo4lqhGy' 
      );

      setSubmitStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        interest: '', 
        eventDate: null, 
        referralSource: '', 
        budget: '', 
        additionalDetails: '' 
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

  <motion.section 
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='section bg-white'
  >
    <div className='innerCon-no-scroll'>
      <div className='h-full px-4'>
        <div className='flex flex-col lg:flex-row h-full
        items-center justify-start gap-x-8 text-center
        lg:text-left'>
          {/* bg */}
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex bg-[#f1e7bd] 
            absolute bottom-[-50px] left-0 right-0 top-16 -z-10'
          >
          </motion.div>
          {/* text & form */}
          <div className='lg:flex-1 pt-[80px]'>
            <h1 className='h1'>Contact</h1>
            <p className='mb-12'>Put on your french maid outfit</p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'> 
              <div className='flex gap-x-10'>
                <input
                  className='outline-none border-b
                  border-b-primary h-[60px] bg-transparent
                  font-one font-bold w-full pl-3
                  placeholder:text-[#757879]'
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder='Your name'
                  required
                />
                <input
                  className='outline-none border-b
                  border-b-primary h-[60px] bg-transparent
                  font-one font-bold w-full pl-3
                  placeholder:text-[#757879]'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='Your email address'
                  required
                />
              </div>
              
              {/* Interest Selection */}
              <div className='mb-4'>
                <p className='font-one font-bold mb-3 text-left'>What are you interested in? *</p>
                <div className='grid grid-cols-2 gap-x-8 gap-y-2'>
                  {['Family', 'Senior', 'Wedding', 'Engagements', 'Boudoir', 'Other'].map((option) => (
                    <label key={option} className='flex items-center gap-x-3 cursor-pointer'>
                      <input
                        type='radio'
                        name='interest'
                        value={option}
                        checked={formData.interest === option}
                        onChange={handleInputChange}
                        required
                        className='w-4 h-4 text-primary border-primary focus:ring-primary'
                      />
                      <span className='font-one font-bold'>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Event Date */}
              <div className='mb-4'>
                <p className='font-one font-bold mb-3 text-left'>Event Date</p>
                <div className='relative calendar-container'>
                  <input
                    className='outline-none border-b
                    border-b-primary h-[60px] bg-transparent
                    font-one font-bold w-full pl-3 pr-10
                    placeholder:text-[#757879] cursor-pointer'
                    type='text'
                    value={formData.eventDate ? formData.eventDate.toLocaleDateString() : ''}
                    onClick={() => setShowCalendar(!showCalendar)}
                    placeholder='Select event date'
                    readOnly
                  />
                  <FaChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#757879] cursor-pointer pointer-events-none' />
                  {showCalendar && (
                    <div className='absolute top-full left-0 z-10 mt-1'>
                      <Calendar
                        onChange={handleDateChange}
                        value={formData.eventDate}
                        minDate={new Date()}
                        className='border border-gray-300 rounded-lg shadow-lg'
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Referral Source */}
              <div className='mb-4'>
                <p className='font-one font-bold mb-3 text-left'>How did you hear about me?</p>
                <div className='relative dropdown-container'>
                  <input
                    className='outline-none border-b
                    border-b-primary h-[60px] bg-transparent
                    font-one font-bold w-full pl-3 pr-10
                    placeholder:text-[#757879] cursor-pointer'
                    type='text'
                    value={formData.referralSource}
                    onClick={() => setShowDropdown(!showDropdown)}
                    placeholder='Select an option'
                    readOnly
                  />
                  <FaChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#757879] pointer-events-none' />
                  {showDropdown && (
                    <div className='absolute top-full left-0 right-0 z-10 mt-1 bg-[#B2DFDB] border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto'>
                      {referralOptions.map((option) => (
                        <div
                          key={option}
                          className='px-3 py-2 cursor-pointer hover:bg-[#FFB74D] transition-colors duration-200'
                          onClick={() => handleReferralSelect(option)}
                        >
                          <span className='font-one font-bold'>{option}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Budget */}
              <div className='mb-4'>
                <p className='font-one font-bold mb-3 text-left'>Budget</p>
                <div className='relative'>
                  <span className='absolute left-3 top-1/2 transform -translate-y-1/2 font-one font-bold text-[#757879]'>$</span>
                  <input
                    className='outline-none border-b
                    border-b-primary h-[60px] bg-transparent
                    font-one font-bold w-full pl-8
                    placeholder:text-[#757879]'
                    type='text'
                    name='budget'
                    value={formData.budget}
                    onChange={handleBudgetChange}
                    placeholder='Enter your budget'
                  />
                </div>
              </div>
              
              {/* Additional Details */}
              <div className='mb-4'>
                <textarea
                  className='outline-none border-b
                  border-b-primary bg-transparent
                  font-one font-bold w-full pl-3 pt-3 pb-2
                  placeholder:text-[#757879] resize-none'
                  name='additionalDetails'
                  value={formData.additionalDetails}
                  onChange={handleInputChange}
                  placeholder="Tell me more about what you're looking for!"
                  rows={4}
                />
              </div>

              <button 
                type='submit'
                disabled={isSubmitting}
                className='btn mb-[30px] mx-auto
                lg:mx-0 self-start disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Sending...' : 'Send it'}
              </button>
              
              {submitStatus === 'success' && (
                <p className='text-green-600 font-seven'>Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className='text-red-600 font-seven'>Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
          {/* image */}
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'
          >
            <img src={inquireImg} alt='' />
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default Inquire;
