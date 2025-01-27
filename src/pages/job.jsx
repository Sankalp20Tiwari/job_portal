import { getSingleJob, updateHiringStatus } from '@/api/apiJobs'
import useFetch from '@/hooks/use-fetch'
import { useUser } from '@clerk/clerk-react'
import MDEditor from '@uiw/react-md-editor'
import { Briefcase, DoorClosed, DoorOpen, MapPin, MapPinIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BarLoader } from 'react-spinners'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ApplyJobDrawer from '@/components/apply-job'
import ApplicationCard from '@/components/application-card'

const JobPage = () => {

  const {isLoaded,user} = useUser()

  const {id} = useParams()

  const {
    fn:fnJob,data:dataJob,loading:loadingJob,error:errorJob
  } = useFetch(getSingleJob,{job_id:id})

  useEffect(() => {
      if(isLoaded) fnJob()
  },[isLoaded])

  const {
    fn:fnHiringStatus,loading:loadingHiringStatus
  } = useFetch(updateHiringStatus,{job_id:id})

  const handleStatusChange = (value) => {
    const isOpen = value === "open"
    fnHiringStatus(isOpen).then(() => fnJob())
  }

  if(!isLoaded || loadingJob){
    return <BarLoader className='mb-4' width={"100%"} color='#36d7b7'/>
  }

  return (
    <div className='flex flex-col gap-8 mt-5'>
      <div className='flex flex-col-reverse gap-6 md:flex-row justify-between items-center'>
        <h1 className='gradient-title font-extrabold pb-3 text-4xl sm:text-6xl'>{dataJob?.title}</h1>
        <img src={dataJob?.company?.logo_url} alt={dataJob?.company?.name} className='h-12' />
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <MapPinIcon className='mr-2' size={18} />
          {dataJob?.location}
        </div>
        <div className='flex gap-2'>
            <Briefcase/> {dataJob?.applications?.length} Applicants
        </div>
        <div className='flex gap-2'>
            {dataJob?.isOpen ? <><DoorOpen />Open</>: <><DoorClosed />Closed</>}
        </div>
      </div>
      {/*hiring status*/}
      {loadingHiringStatus && <BarLoader className='mb-4' width={"100%"} color='#36d7b7'/>}
      {dataJob?.recruiter_id === user?.id && (
          <Select  onValueChange={handleStatusChange}>
           <SelectTrigger  className = {`w-full ${dataJob?.isOpen ? "bg-green-500" : "bg-red-500"}`}>
             <SelectValue placeholder={
              "Hiring Status" + (dataJob?.isOpen ? "(Open)" : "(Closed)")
             } />
           </SelectTrigger>
           <SelectContent>
             <SelectItem  value='open'>Open</SelectItem>
             <SelectItem  value='closed'>Closed</SelectItem>
           </SelectContent>
         </Select>
      ) }

      <h2 className='text-2xl font-bold sm:text-3xl'>About the Job</h2>
      <p className='sm:text-lg'>{dataJob?.description}</p>

      <h2 className='text-2xl font-bold sm:text-3xl'>What we are looking for</h2>
      <MDEditor.Markdown source={dataJob?.requirements} className='bg-transparent sm:text-lg' />
      
      {/* render applications */}
      {dataJob?.recruiter_id !== user?.id && (
        <ApplyJobDrawer 
          job={dataJob}
          user={user}
          fetchJob={fnJob}
          applied = {dataJob?.applications?.find((ap)=> ap.candidate_id === user.id)} 
           />
      )}
      {
        dataJob?.recruiter_id === user?.id && dataJob?.applications?.length > 0 && (
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-bold sm:text-3xl'>Applications</h2>
            {dataJob?.applications?.map((application) => {
              return <ApplicationCard 
                key={application.id} 
                application={application}
              />
            })}
          </div>
        )
      }
    </div>
  )
}

export default JobPage
