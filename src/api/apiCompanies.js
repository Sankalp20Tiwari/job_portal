import supabaseClient, { supabaseUrl } from "@/utils/supabase"

export async function getCompanies(token) {
    const supabase = await supabaseClient(token)

    const {data , error} = await supabase.from("companies").select("*")

   // console.log(data)

    if(error){
        console.error("Error fetching companies",error)
        return null
    }

    return data
}

export async function addNewCompany(token,_,companyData) {
    const supabase = await supabaseClient(token)

    const random= Math.floor(Math.random() * 90000)
    const filename = `logo-${random}-${companyData.name}`
    
    const {error:storageError} = await supabase.storage.from('comapny-logo').upload(filename, companyData.logo)
        
    if(storageError){
        console.error("Error uploading company logo",storageError)
        return null
    }
    
    const logo_url = `${supabaseUrl}/storage/v1/object/public/comapny-logo/${filename}`
    const {data , error} = await supabase.from("companies").insert([{
         name: companyData.name,
         logo_url
    }]).select()
    
    // console.log(data)

    if(error){
        console.error("Error submitting company",error)
        return null
    }

    return data
}