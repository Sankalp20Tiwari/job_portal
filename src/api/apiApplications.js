import supabaseClient, { supabaseUrl } from "@/utils/supabase"


export async function applyToJob(token,_,jobData) {
    const supabase = await supabaseClient(token)

    const random= Math.floor(Math.random() * 90000)
    const filename = `resume-${random}-${jobData.candidate_id}`

    const {error:storageError} = await supabase.storage.from('resumes').upload(filename, jobData.resume)
    
    if(storageError){
        console.error("Error uploading resume",storageError)
        return null
    }

    const resume = `${supabaseUrl}/storage/v1/object/public/resumes/${filename}`
    const {data , error} = await supabase.from("applications").insert([{
        ...jobData, resume
    }]).select()

    // console.log(data)

    if(error){
        console.error("Error submitting application",error)
        return null
    }

    return data
}

export async function updateApplicationStatus(token,{job_id},status){
    const supabase = await supabaseClient(token)

    const {data , error} = await supabase.from("applications").update({status}).eq("job_id",job_id).select()

    if(error || data.length === 0){
        console.error("Error updating application status",error)
        return null
    }
}