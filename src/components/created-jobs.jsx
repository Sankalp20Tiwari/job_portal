import { getMyJobs } from '@/api/apiJobs'
import useFetch from '@/hooks/use-fetch'
import { useUser } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import JobCard from './Job-card'
import { BarLoader } from 'react-spinners'

const CreatedJobs = () => {
    const {user} = useUser()
    
    const {
        loading:loadingMyJobs,
        data:myJobs,
        fn:fnMyJobs
    } = useFetch(getMyJobs,
        {
            recruiter_id:user.id
        }
    )

    useEffect(()=>{
        fnMyJobs()
    },[])

    if(loadingMyJobs){
        return <BarLoader className='mb-4' width={"100%"} color='#36d7b7' />
    }

  return (
    <div>
        {loadingMyJobs === false && (
        <div className='grid mt-8 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {myJobs?.length ? (
            myJobs.map((job)=>{
              return <JobCard key={job.id} job={job} onJobSaved={fnMyJobs} isMyJob/>
            })
          ):(
            <div>
              No jobs found
            </div>
          )}
        </div>
      ) }
    </div>
  )
}

export default CreatedJobs
