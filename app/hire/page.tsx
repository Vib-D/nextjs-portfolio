"use client"

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import emailjs from 'emailjs-com'
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 9811476601",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "vibhordass2@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Ghaziabad, Uttar Pradesh",
  },
]

import { motion } from 'framer-motion'
import { useRef, useState } from "react"


const Hire = () => {
  {/* Email.js */ }
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_es9virk',
        'template_4vgx5qp',
        {
          from_name: form.name,
          from_lastname: form.lastname,
          to_name: "Vibhor",
          from_email: form.email,
          from_number: form.phone,
          to_email: "vibhordass142@gmail.com",
          message: form.message,
        },
        'k2ubqsT64DZy-8qge'
      )
      .then(
        () => {
          alert("Thank you for reaching out. I will get back to you as soon as possible.");

          setForm({
            name: "",
            lastname: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  }


  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.3, ease: "easeIn" }, }} className="py-6">
      <div className="container mx-auto sm:mb-10">
        <div className="flex flex-col xl:flex-row gap-[30px]" >
          {/* form */}
          <div className="xl:w-[55%] order-2 xl:order-none" >
            <form className="flex flex-col gap-6 p-10 bg-[#232329] rounded-xl " action="" ref={formRef} onSubmit={handleSubmit} >
              <h3 className="text-4xl text-teal-400 font-bold" >
                Let&apos;s work together!
              </h3>
              {/* INput */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 " >
                <Input name='name' type='text' placeholder='First Name' value={form.name} onChange={handleChange} />
                <Input name='lastname' type='text' placeholder='Last Name' value={form.lastname} onChange={handleChange} />
                <Input name='email' type='email' placeholder='Email' value={form.email} onChange={handleChange} />
                <Input name='phone' type='number' placeholder='Phone' value={form.phone} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1" >
                  <Input name='company' type='text' placeholder='Company Name' value={form.phone} onChange={handleChange} />
                </div>
              {/* textarea */}
              <Textarea name='message' type='text' placeholder='Type your message here...' className='h-[200px]' value={form.message} onChange={handleChange} />
              <Button size='md' className='max-w-40 hover:bg-teal-900 hover:text-teal-100 border rounded-2xl border-teal-400 '>
                Send Message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0" >
            <ul className="flex flex-col gap-10 " >
              {info.map((item, index) => {
                return (<li key={index} className="flex items-center gap-6" >
                  <div className="w-[50px] h-[50px] xl:w-[72px] xl:h-[72px] bg-[#232329] text-teal-400 rounded-xl flex items-center justify-center" >
                    <div className="text-[28px]" >{item.icon}</div>
                  </div>
                  <div className="flex-1" >
                    <p className="text-white/70" >{item.title}</p>
                    <h3 className="text-xl" >{item.description}</h3>
                  </div>
                </li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hire;
