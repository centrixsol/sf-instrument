import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Send, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  product: string;
  message: string;
}

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<FormData>();

  useEffect(() => {
    const handleOpenModal = (e: any) => {
      if (e.detail) setValue('product', e.detail);
      setIsOpen(true);
      setIsSuccess(false);
    };
    window.addEventListener('openQuoteModal', handleOpenModal);
    return () => window.removeEventListener('openQuoteModal', handleOpenModal);
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // EmailJS Credentials from environment
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("Email configuration is missing. Please contact the administrator.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          reply_to: data.email,
          product_category: data.product,
          message: data.message,
        },
        publicKey
      );

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(`Failed to send request: ${error instanceof Error ? error.message : "Unknown Error"}. Please check your VITE_EMAILJS environment variables.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-neutral-900 border border-white/10 rounded-sm shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="p-8 md:p-10">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-600/10 text-green-600 rounded-sm flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Request Logged</h3>
                  <p className="text-neutral-500 text-sm mb-8">Quote request sent. We will get back to you soon.</p>
                  
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-8 py-3 rounded-sm hover:bg-brand-red-dark transition-all"
                  >
                    CLOSE WINDOW
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="mb-10 pr-8">
                    <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">Get Quotation</h2>
                    <p className="text-neutral-500 text-xs tracking-wide">
                      Direct access to SF-Instrument manufacturing queue.
                      <br />
                      <a 
                        href="https://firebasestorage.googleapis.com/v0/b/dfpythonclient.firebasestorage.app/o/Surgiical.pdf?alt=media&token=ef96762f-a093-4ebd-9334-a956569d069c"
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-red hover:underline font-bold mt-1 inline-block uppercase tracking-widest text-[9px]"
                      >
                        Download Full PDF Catalog →
                      </a>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Full Name</label>
                        <input
                          {...register("name", { required: "Name is required" })}
                          placeholder="E.g. Dr. Salman Khan"
                          className={`w-full bg-neutral-950 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-sm px-4 py-3 text-sm focus:border-brand-red outline-none transition-all`}
                        />
                        {errors.name && <p className="text-red-500 text-[9px] font-bold uppercase tracking-widest mt-1">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Business Email</label>
                        <input
                          {...register("email", { 
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                          })}
                          type="email"
                          placeholder="sales@hospital.com"
                          className={`w-full bg-neutral-950 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-sm px-4 py-3 text-sm focus:border-brand-red outline-none transition-all`}
                        />
                        {errors.email && <p className="text-red-500 text-[9px] font-bold uppercase tracking-widest mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Product Category</label>
                      <select
                        {...register("product", { required: "Please select a category" })}
                        className={`w-full bg-neutral-950 border ${errors.product ? 'border-red-500' : 'border-white/10'} rounded-sm px-4 py-3 text-sm focus:border-brand-red outline-none transition-all appearance-none`}
                      >
                        <option value="" className="bg-neutral-900">Select Category</option>
                        <option value="General Surgery" className="bg-neutral-900 text-white">General Surgery</option>
                        <option value="Dental" className="bg-neutral-900 text-white">Dental</option>
                        <option value="Orthopedic" className="bg-neutral-900 text-white">Orthopedic</option>
                        <option value="Cardiovascular" className="bg-neutral-900 text-white">Cardiovascular</option>
                        <option value="Gynecology" className="bg-neutral-900 text-white">Gynecology</option>
                      </select>
                      {errors.product && <p className="text-red-500 text-[9px] font-bold uppercase tracking-widest mt-1">{errors.product.message}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Order Requirements</label>
                      <textarea
                        {...register("message", { required: "Details are required" })}
                        rows={4}
                        placeholder="Quantity, material variations, custom branding..."
                        className={`w-full bg-neutral-950 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-sm px-4 py-3 text-sm focus:border-brand-red outline-none transition-all resize-none`}
                      />
                      {errors.message && <p className="text-red-500 text-[9px] font-bold uppercase tracking-widest mt-1">{errors.message.message}</p>}
                    </div>

                    <div className="pt-4">
                      <button
                        disabled={isSubmitting}
                        className="w-full bg-brand-red text-white text-sm font-bold tracking-[0.2em] uppercase py-4 rounded-sm flex items-center justify-center gap-3 hover:bg-brand-red-dark disabled:opacity-50 transition-all shadow-lg shadow-brand-red/10"
                      >
                        {isSubmitting ? (
                          "LOGGING REQUEST..."
                        ) : (
                          <>
                            SUBMIT TO OWNER
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="bg-black/40 px-8 py-3 border-t border-white/5 text-center">
            <p className="text-[9px] text-neutral-600 font-bold tracking-widest uppercase">Client-Side Verification • SF-Instrument Sialkot</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
