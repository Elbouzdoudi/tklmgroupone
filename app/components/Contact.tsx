"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "../i18n/useTranslation";

// All countries list
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos",
  "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
  "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
  "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
  "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
  "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
  "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const packagesData = [
  { id: 'single', name: 'Single Session', price: '200 DHS' },
  { id: 'weekly', name: 'Weekly Package', price: '550 DHS' },
  { id: 'monthly', name: 'Monthly Package', price: '2200 DHS' },
  { id: 'trimester', name: 'Trimester Package', price: '6500 DHS' },
];

export default function Contact() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string>('');

  const [formData, setFormData] = useState({
    firstName: '',
    familyName: '',
    phone: '',
    email: '',
    age: '',
    sex: '',
    country: 'Morocco',
    city: '',
    package: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const fileInput = document.getElementById('paymentProof') as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (!file) {
      alert('Please upload your payment screenshot before submitting.');
      setIsSubmitting(false);
      return;
    }

    try {
      const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
      
      if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
        const selectedPackage = packagesData.find(p => p.id === formData.package);
        const subject = `New Takalam Registration: ${formData.firstName} ${formData.familyName} - ${selectedPackage?.name || 'Package'}`;
        const body = `
NEW STUDENT REGISTRATION - PAYMENT SUBMITTED
============================================

PERSONAL INFORMATION
--------------------
First Name: ${formData.firstName}
Family Name: ${formData.familyName}
Phone: ${formData.phone}
Email: ${formData.email}
Age: ${formData.age}
Sex: ${formData.sex}
Country: ${formData.country}
City: ${formData.city}

PACKAGE SELECTED
----------------
${selectedPackage?.name || 'Not specified'} - ${selectedPackage?.price || ''}

PAYMENT PROOF
-------------
IMPORTANT: Please attach the payment screenshot to this email!
File name: ${fileName}

MESSAGE
-------
${formData.message || 'No additional message'}

============================================
This registration was submitted via the Takalam website.
Please verify the payment before contacting the student.
        `.trim();
        
        window.location.href = `mailto:takalamenglishcenter@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        alert('Your email app will open. Please attach your payment screenshot to the email before sending!');
        setSubmitStatus('success');
        setIsSubmitting(false);
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('familyName', formData.familyName);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('age', formData.age);
      formDataToSend.append('sex', formData.sex);
      formDataToSend.append('country', formData.country);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('package', formData.package);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('paymentProof', file);
      formDataToSend.append('timestamp', new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      });

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        familyName: '',
        phone: '',
        email: '',
        age: '',
        sex: '',
        country: 'Morocco',
        city: '',
        package: '',
        message: ''
      });
      setFileName('');
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("contact.title")} <span className="text-green-600">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Try First Callout */}
        <div
          className={`mb-8 ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}
        >
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t("contact.tryFirst")}</h3>
                  <p className="text-sm text-gray-600">{t("contact.tryFirstDesc")}</p>
                </div>
              </div>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t("contact.viewPricing")}
              </a>
            </div>
          </div>
        </div>

        {/* Registration Steps */}
        <div
          className={`mb-12 ${isVisible ? "animate-fade-in-up delay-150" : "opacity-0"}`}
        >
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">{t("contact.stepsTitle")}</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
                <p className="font-medium text-gray-800 mb-1">{t("contact.step1")}</p>
                <p className="text-sm text-gray-500">{t("contact.step1Desc")}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
                <p className="font-medium text-gray-800 mb-1">{t("contact.step2")}</p>
                <p className="text-sm text-gray-500">{t("contact.step2Desc")}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
                <p className="font-medium text-gray-800 mb-1">{t("contact.step3")}</p>
                <p className="text-sm text-gray-500">{t("contact.step3Desc")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Banking Details - Left column */}
          <div
            className={`lg:col-span-2 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Banking Details Card */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t("contact.bankingTitle")}</h3>
                  <p className="text-green-100 text-sm">{t("contact.bankingSubtitle")}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-green-200 text-xs uppercase tracking-wide mb-1">{t("contact.accountHolder")}</p>
                  <p className="font-semibold text-sm">MONSIEUR MOHAMMED SAID EL BOUZDOUI</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-green-200 text-xs uppercase tracking-wide mb-1">RIB</p>
                  <p className="font-mono font-bold text-base tracking-wide">230 727 2633040211016600 70</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-green-200 text-xs uppercase tracking-wide mb-1">IBAN</p>
                  <p className="font-mono font-bold text-base tracking-wide">MA64 2307 2726 3304 0211 0166 0070</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-green-200 text-xs uppercase tracking-wide mb-1">Code SWIFT</p>
                  <p className="font-mono font-bold text-lg">CIHMMAMC</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-green-100 text-sm mb-3 text-center font-medium">
                  {t("contact.scanToPay")}
                </p>
                <div className="bg-white rounded-2xl p-3 mx-auto w-fit">
                  <Image
                    src="/bank-qr.png"
                    alt="Scan for bank details"
                    width={280}
                    height={400}
                    className="w-full max-w-[220px] h-auto rounded-xl"
                  />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-green-100 text-sm">
                  {t("contact.transferNote")}
                </p>
              </div>
            </div>

            {/* Package Prices Reference */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">{t("contact.packagePrices")}</h3>
              <div className="space-y-2">
                {packagesData.map((pkg) => (
                  <div key={pkg.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600 text-sm">{pkg.name}</span>
                    <span className="font-semibold text-green-600">{pkg.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800 mb-1">{t("contact.important")}</h4>
                  <p className="text-amber-700 text-sm">
                    {t("contact.importantText")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form - Right column */}
          <div
            className={`lg:col-span-3 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {t("contact.formTitle")}
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{t("contact.successTitle")}</span>
                  </div>
                  <p className="text-sm mt-1">{t("contact.successText")}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{t("contact.errorTitle")}</span>
                  </div>
                  <p className="text-sm mt-1">{t("contact.errorText")}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.firstName")} <span className="text-red-500">{t("contact.required")}</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="familyName" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.familyName")} <span className="text-red-500">{t("contact.required")}</span>
                    </label>
                    <input
                      type="text"
                      id="familyName"
                      name="familyName"
                      required
                      value={formData.familyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.phone")} <span className="text-red-500">{t("contact.required")}</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                      placeholder="+212 600 000 000"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.email")} <span className="text-red-500">{t("contact.required")}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.age")} <span className="text-red-500">{t("contact.required")}</span>
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      required
                      min="10"
                      max="100"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="sex" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.sex")} <span className="text-red-500">{t("contact.required")}</span>
                    </label>
                    <select
                      id="sex"
                      name="sex"
                      required
                      value={formData.sex}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none bg-white"
                    >
                      <option value="">...</option>
                      <option value="Male">{t("contact.male")}</option>
                      <option value="Female">{t("contact.female")}</option>
                      <option value="Prefer not to say">{t("contact.preferNotToSay")}</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.country")} <span className="text-red-500">{t("contact.required")}</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none bg-white"
                    >
                      <option value="">{t("contact.selectCountry")}</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("contact.city")} <span className="text-red-500">{t("contact.required")}</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.packageSelected")} <span className="text-red-500">{t("contact.required")}</span>
                  </label>
                  <select
                    id="package"
                    name="package"
                    required
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none bg-white"
                  >
                    <option value="">{t("contact.selectPackage")}</option>
                    {packagesData.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} - {pkg.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="paymentProof" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.paymentScreenshot")} <span className="text-red-500">{t("contact.required")}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="paymentProof"
                      name="paymentProof"
                      required
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="paymentProof"
                      className="flex items-center justify-center gap-3 w-full px-4 py-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all"
                    >
                      {fileName ? (
                        <>
                          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-green-600 font-medium">{fileName}</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-500">{t("contact.uploadPayment")}</span>
                        </>
                      )}
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{t("contact.acceptedFormats")}</p>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.additionalMessage")} <span className="text-gray-400">({t("contact.optional")})</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t("contact.submitting")}
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t("contact.submitButton")}
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  {t("contact.whatsappNote")}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
