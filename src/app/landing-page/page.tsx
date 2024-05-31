import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-full'>
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-36 lg:py-24">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 shadow-sm">
              projeto ainda em desenvolvimento. <a href="https://chat.whatsapp.com/GTG4G8ZPKP75lgGrn0QEdC" 
              target='_blank'  className="font-semibold text-defaultDark"><span className="absolute inset-0" aria-hidden="true"></span>Quero participar <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              programador, fale com <span className='text-primaryDark backdrop-blur-md'>quem sabe</span>
              </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">aprenda com pessoas que já atuam no mercado de programação.
            Tire dúvidas sobre conceitos técnicos e não técnicos, peça ajuda com bugs e o que mais você precisar.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://chat.whatsapp.com/GTG4G8ZPKP75lgGrn0QEdC" 
                target='_blank' 
                className="rounded-md bg-primaryDark px-3.5 py-2.5 text-sm font-semibold text-defaultDark shadow-md hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary">
                  Quero participar do Beta!
                  </a>
              <a href="https://chat.whatsapp.com/GTG4G8ZPKP75lgGrn0QEdC" 
                target='_blank'
                className="text-sm font-semibold leading-6 text-gray-900">
                  Saiba Mais <span aria-hidden="true">→</span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage