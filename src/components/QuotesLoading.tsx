import { Skeleton } from "./ui/skeleton"

function QuotesLoading({streams} : {streams?: number}) {
  return ( 
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto gap-y-6 mt-4'>
        {
            Array.from({length: streams ? streams : 8}).map(() => (
            <div className='w-120 max-md:w-80 max-sm:w-9/10 min-h-60 p-4 border mx-auto rounded-2xl'>
                <Skeleton className="w-full h-16 max-md:h-10 mb-4"/>

                <Skeleton className="w-1/2 max-md:w-3/4 mx-auto h-8 max-md:h-4"/>

                <div className='flex gap-2 flex-wrap mt-10 mx-auto w-full items-center justify-center'>
                    {
                        Array.from({length: 2}).map(() => (
                            <Skeleton className="w-40 h-10 max-md:h-6"/>
                        ))
                    }
                </div>
            </div>))
        }
    </div>
  )
}

export default QuotesLoading