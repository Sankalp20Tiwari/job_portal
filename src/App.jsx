import './App.css'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Onboarding from './pages/onboarding'
import JobListing from './pages/job-listing'
import JobPage from './pages/job'
import PostJobs from './pages/post-jobs'
import SavedJobs from './pages/saved-jobs'
import MyJobs from './pages/my-jobs'
import { ThemeProvider } from "@/components/theme-provider"
import ProtectedRoute from './components/protected-routes'

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
        element: 
        <ProtectedRoute>
          <Onboarding />
        </ProtectedRoute>
      },
      {
        path: "/jobs",
        element: 
        <ProtectedRoute>
         <JobListing />
        </ProtectedRoute>
      },
      {
        path: "/jobs/:id",
        element: 
        <ProtectedRoute>
          <JobPage/>
        </ProtectedRoute>
      },
      {
        path: "/post-job",
        element: 
        <ProtectedRoute>
          <PostJobs />
        </ProtectedRoute>
      },
      {
        path: "/saved-jobs",
        element: 
        <ProtectedRoute>
          <SavedJobs />
        </ProtectedRoute>
      },
      {
       path: "/my-jobs",
       element: 
       <ProtectedRoute>
         <MyJobs />
       </ProtectedRoute>
      }
    ]
  }
])


function App() {
  

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>

  )
}

export default App
