import './App.css'
import { Button } from "@/components/ui/button"
import AppLayout from './layouts/app-layouts'
import { Children } from 'react'
import LandingPage from './pages/landing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Onboarding from './pages/onboarding'
import JobListing from './pages/job-listing'
import JobPage from './pages/job'
import PostJobs from './pages/post-jobs'
import SavedJobs from './pages/saved-jobs'
import MyJobs from './pages/my-jobs'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/onboarding",
        element: <Onboarding />
      },
      {
        path: "/jobs",
        element: <JobListing />
      },
      {
        path: "/jobs/:id",
        element: <JobPage/>
      },
      {
        path: "/post-job",
        element: <PostJobs />
      },
      {
        path: "/saved-jobs",
        element: <SavedJobs />
      },
      {
       path: "/my-jobs",
       element: <MyJobs />
      }
    ]
  }
])


function App() {
  

  return (
    <RouterProvider router={router} />

  )
}

export default App
