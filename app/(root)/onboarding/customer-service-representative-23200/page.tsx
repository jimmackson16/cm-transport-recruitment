import React from 'react'

const page = () => {
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
      <h3 className="wrapper h3-bold text-center sm:text-left">New Employee Onboarding</h3>
    </section>

    <div className="wrapper my-8">
      <p className="mb-2">Please provide the below information so we can onboard you as an employee, we also need to 
          check you have the right to work in the UK so please make sure to provide all required information.
      </p>

      <p className='font-bold'>Once you submit the form, you do not need to resubmit it</p>
    </div>

    <div className="wrapper my-8">

    <iframe
      id="JotFormIFrame-242432239918056"
      title="CM Transportation onboarding form"
    //   @ts-ignore
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/242432239918056"
      frameborder="0"
      scrolling="yes"
      className='h-screen w-full'
    >
    </iframe>
    </div>
  </>
  )
}

export default page