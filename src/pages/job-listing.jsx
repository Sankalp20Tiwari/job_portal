import useFetch from '@/hooks/use-fetch'
import { getJobs } from '@/api/apiJobs'
import React, { useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { BarLoader } from 'react-spinners'
import JobCard from '@/components/JobCard'
import { getCompanies } from '@/api/apiCompanies'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { State } from 'country-state-city'

const JobListing = () => {

  const [searchQuery, setSearchQuery] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [company_id, setCompany_id] = React.useState('')

  const {isLoaded} = useUser()
  
  const {fn:fnJobs,data:dataJobs,loading:loadingJobs,error:errorJobs} = useFetch(getJobs,{location,company_id,searchQuery})

  const {
    fn:fnCompanies,
    data:companies,
    loading:loadingCompanies,
    error:errorCompanies
    }
     = useFetch(getCompanies)

     useEffect(() => {
      if(isLoaded) fnCompanies()
    },[isLoaded]) 

    const handleSearch = (e)=> {
      e.preventDefault()
      let formData = new FormData(e.target)

      const query = formData.get('search-query')

      if(query) setSearchQuery(query)
      
    }
    
    const clearFilters = () => {
      setSearchQuery('') 
      setLocation('') 
      setCompany_id('') 
    }


  useEffect(() => {
    if(isLoaded) fnJobs()
  },[isLoaded , location,company_id,searchQuery])

  if(!isLoaded) return <BarLoader className='mb-4' width={"100%"} color='#36d7b7'/>
  return (
    <div>
      <h1 className='gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8'>Latest Jobs</h1>

      {/* add filters here */}
      <form onSubmit={handleSearch} className='h-14 flex w-full gap-2 items-center mb-3'>
        <Input 
          type='text'
          placeholder='Search Jobs by title'
          name = 'search-query'
          className= 'h-full flex-1 px-4 text-md'
        />
        <Button type='submit' className='h-full sm:w-28' varant='outline'>Search</Button>
      </form>

      <div className='flex flex-col sm:flex-row gap-2'>
          <Select value={location} onValueChange={(value) => setLocation(value)}>
            <SelectTrigger >
              <SelectValue placeholder="Filter by Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {State.getStatesOfCountry('IN').map(({name,index})=>{
                  return  (<SelectItem key={index} value={name}>{name}</SelectItem>)
                })}
               
                
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={company_id} onValueChange={(value) => setCompany_id(value)}>
            <SelectTrigger >
              <SelectValue placeholder="Filter by Company" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {loadingCompanies===false && companies.map(({name,id})=>{
                  return  (<SelectItem key={name} value={id}>{name}</SelectItem>)
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant='destructive' className='sm:w-1/2' onClick={clearFilters}>
            Clear Filter</Button>
      </div>

      {loadingJobs && (<BarLoader className='mt-4' width={"100%"} color='#36d7b7'/>)}

      {loadingJobs === false && (
        <div className='grid mt-8 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {dataJobs?.length ? (
            dataJobs.map((job)=>{
              return <JobCard key={job.id} job={job} savedInit={job.saved?.length > 0} />
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

export default JobListing
