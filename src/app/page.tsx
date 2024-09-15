"use client"
import useFetch from '@/hooks/useFetch'

type JokeType = {
  type: 'general' | 'programming'
  setup: string
  punchline: string
  id: number
}

const Home = () => {

  const { data: joke, fetchData, loading } = useFetch<JokeType>('https://official-joke-api.appspot.com/random_joke', { cache: 'no-cache' })

  console.info('%c Super Kenil', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')

  return (
    <main className="flex min-h-screen container mx-auto">
      <div className='flex items-center justify-center mx-auto text-center max-sm:mx-3'>

        {joke ? (
          <div className='max-sm:text-left select-none'>
            <h1 className='text-3xl'>{joke.setup}</h1>
            <div className='relative group cursor-pointer py-4 mb-4'>
              <div className='absolute group-hover:opacity-0 underline decoration-wavy transition-opacity duration-300 decoration-teal-500'>Tap or Hover</div>
              <div className='opacity-0 group-hover:opacity-100 text-teal-800 dark:text-teal-500 text-left transition-opacity duration-300'>{joke.punchline}</div>
            </div>

            <button
              disabled={loading}
              onClick={fetchData}
              className='px-4 py-1.5 rounded bg-teal-600 text-white dark:bg-teal-500 dark:hover:bg-teal-600 hover:bg-teal-700 transition-colors'
              type='button'
            >
              LOL Again
            </button>
          </div>
        ) : loading ? (
          <h1 className='text-3xl'>Loading...</h1>
        ) : (
          <h1 className='text-3xl'>Sorry to say, I just ran out of Jokes, come back later</h1>
        )}

      </div>
    </main>
  )
}

export default Home