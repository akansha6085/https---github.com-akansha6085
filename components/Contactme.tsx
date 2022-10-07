import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm,SubmitHandler } from 'react-hook-form'

type Inputs={
  name:string;
  email:string;
  subject:string;
  message:string;
}

type Props = {}

function Contactme({}: Props) {

  const { 
    register,
     handleSubmit
   } = 
      useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {window.location.href='mailto:akansha6085@gmail.com?subject= ${formData.subject}&body=Hi,my name is ${formData.name}. ${formData.message} (${formData.email})';};

  return (
    <div 
    className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      
      <h3
        className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md-10'>
            Contact
            </h3>
    
            <div className="flex flex-col space-y-5 mt-10">
              <h4 className="text-2xl font-semibold text-center">
                I have got just what you need.{' '}
                <span className='decoration-[#F7AB0A]/50 underline'>
                  Lets Talk
                </span>
              </h4>

              <div className='space-y-5'>
                <div className="flex items-center space-x-5 justify-center">
                   <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                  <p className='text-xl'>+91 8102985521</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                   <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                  <p className='text-xl'>123 Developer Lane</p>
                </div>
                
                <div className="flex items-center space-x-5 justify-center">
                   <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                  <p className='text-xl'>akansha6085@gmail.com</p>
                </div>
              </div>
<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
<div className="flex space-x-2">
  <input {...register('name')} placeholder="Name" className="contactInput" type="text"/>
  <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
</div>
<input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
<textarea {...register('message')} placeholder="Message" className="contactInput"/>
<button 
type="submit"
className="bg-[#F7AB0A]/80 py-5 px-10 rounded-md text-lg">Submit</button>
</form>

            </div>
    </div>
  )
}

export default Contactme