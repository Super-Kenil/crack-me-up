"use client"
import useFetch from '@/hooks/useFetch'

type JokeType = {
  type: 'general' | 'programming'
  setup: string
  punchline: string
  id: number
}

const Home = () => {

  const { data: joke, fetchData, loading, error } = useFetch<JokeType>('https://official-joke-api.appspot.com/random_joke')

  console.info('%c Super Kenil', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')

  return (
    <main className="flex min-h-screen container mx-auto flex-col overflow-hidden">
      <div className='flex items-center justify-center mx-auto text-center max-sm:mx-3 select-none relative overflow-hidden flex-1'>
        <pre className='absolute text-2xl text-teal-700 dark:text-teal-400 dark:text-opacity-25 text-opacity-20 min-w-[726px] -z-[2]'>
          __/\\\___________________/\\\\\_______/\\\_____________<br />
          _\/\\\_________________/\\\///\\\____\/\\\_____________<br />
          _\/\\\_______________/\\\/__\///\\\__\/\\\_____________<br />
          _\/\\\______________/\\\______\//\\\_\/\\\_____________<br />
          _\/\\\_____________\/\\\_______\/\\\_\/\\\_____________<br />
          _\/\\\_____________\//\\\______/\\\__\/\\\_____________<br />
          _\/\\\______________\///\\\__/\\\____\/\\\_____________<br />
          _\/\\\\\\\\\\\\\\\____\///\\\\\/_____\/\\\\\\\\\\\\\\\_<br />
          _\///////////////_______\/////_______\///////////////__<br />
        </pre>
        {!loading && !error && (
          <div className='flex flex-col items-center max-sm:text-left min-w-[726px]'>
            <div className="max-sm:ml-3 max-w-[95vw]">
              <h1 className='text-3xl relative'>
                {joke?.setup ?? 'Why did the coffee file a police report?'}
                <TextBackdrop />
              </h1>
              <div className='relative group cursor-pointer py-4 mb-4'>
                <div className='absolute text-center group-hover:opacity-0 underline decoration-wavy transition-opacity duration-300 decoration-teal-500'>Tap or Hover</div>
                <div className='opacity-0 group-hover:opacity-100 text-teal-800 dark:text-teal-500 text-left transition-opacity duration-300'>{joke?.punchline ?? 'It got mugged.'}</div>
                <TextBackdrop />
              </div>
            </div>
            <button
              disabled={loading}
              onClick={fetchData}
              className='px-4 py-1.5 w-fit rounded-lg bg-teal-800 text-teal-50 hover:text-teal-800 dark:text-teal-50 dark:bg-teal-800 dark:hover:bg-teal-800/10 dark:hover:text-teal-100 hover:bg-teal-600/20 dark:border-teal-100 border-teal-800 border-2 transition-colors font-semibold'
              type='button'
            >
              LOL  Again
            </button>
          </div>
        )}
        {loading && <h1 className='text-3xl text-center w-[726px]'>Loading...</h1>}
        {error && <h1 className='text-3xl'>“Oops! Our joke machine is on a coffee break. Come back later for a fresh batch of laughs!” ☕😂</h1>}
        {/* <span className='text-xs absolute bottom-2'>Powered by: <a href='official-joke-api.appspot.com' className='underline'>Official Joke API</a></span> */}
      </div>
    </main>
  )
}

export default Home

const TextBackdrop = () => <div className='inset-0 bg-gray-300 dark:bg-gray-700/40 blur-sm opacity-30 absolute -z-[1]' />