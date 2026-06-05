import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { fetchQuotes } from '../hooks/fetchQuotes'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import {useInViewport} from "@mantine/hooks"
import { useEffect } from 'react'
import QuotesLoading from './QuotesLoading'
function Quotes() {
    // const {data: quotes, error, isLoading} = useQuery({
    //     queryKey: ["quotes"],
    //     queryFn: fetchQuotes
    // })  


    const {data: quotes, isFetchingNextPage, hasNextPage, fetchNextPage, error, isLoading} = useInfiniteQuery({
        queryKey: ["quotes"],
        queryFn: ({pageParam}) => fetchQuotes({pageParam}),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            if(!lastPage || lastPage.length < 8) return undefined
            return allPages.length * 8
        }

    })

    const {ref, inViewport} = useInViewport()

    useEffect(() => {
        if(inViewport && hasNextPage && !isFetchingNextPage && !isLoading){
            console.log("In view")
            fetchNextPage()
        }

    }, [inViewport, ref])

    console.log(quotes)

    return (
        <Card className='my-6'>
            <CardHeader>
                <Button className="px-20 py-6 mx-auto cursor-pointer rounded-sm">Let's get motivated</Button>
            </CardHeader>

            <CardContent>
                {
                    isLoading ? <QuotesLoading />:
                    error? <div className='text-center'>{error.message}</div>:
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto gap-y-6'>
                        {
                            quotes?.pages.flatMap((qs) => 
                            qs.map((quote: any) => (
                                <div key={quote.quote} className='w-120 max-md:w-100 min-h-60 p-4 border mx-auto rounded-2xl'>
                                    <p className='text-center'>{quote.quote}</p>
        
                                    <p className='text-center font-semibold my-5'>~{quote.author}</p>
        
                                    <div className='flex gap-2 flex-wrap mt-10 mx-auto w-full items-center justify-center'>
                                        {
                                            quote.categories.map((cat: string) => (
                                                <p className='rounded-md bg-green-500/60 p-2 w-fit'>{cat}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            )))
                        }
            {/* <QuotesLoading /> */}
                    </div>

                }
                <div ref={ref} className=''/>
                {isFetchingNextPage && <QuotesLoading streams = {4}/>}
                
            </CardContent>

        </Card>
    )
}

export default Quotes