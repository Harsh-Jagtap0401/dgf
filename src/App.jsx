import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FixedComponent from './components/FixedComponent';
import TrainingContainer from './components/TrainingContainer';
import NewRequestContainer from './components/NewRequestContainer';
import InitiateTrainingContainer from './components/InitiateTrainingContainer.jsx';
import SpocContainer from './components/SpocContainer';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/Auth/ProctectedRoutes.jsx';
import { AuthProvider } from './components/Auth/AuthContext.jsx';
import ClarificationRequestedContainer from './components/ClarificationRequestedContainer.jsx';
import AdminTable from './components/Admin/AdminTable.jsx';
import AssignCourseAccordion from './components/CapDevTrainInitiate/AssignCourseAccordion.jsx';
import RequestInformation from './components/CapDevTrainInitiate/RequestInformation.jsx';
import LearningDetails from './components/CapDevTrainInitiate/LearningDetails.jsx';
function App() {
  const obj = {
    color: "black",
  };
 
  return (
    <AuthProvider>
      <div style={obj} className='App'>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute element={<FixedComponent><TrainingContainer /></FixedComponent>} />} />
            <Route path="/training-container" element={<ProtectedRoute element={<FixedComponent><TrainingContainer /></FixedComponent>} />} />
            <Route path="/new-request" element={<ProtectedRoute element={<FixedComponent><NewRequestContainer /></FixedComponent>} />} />
            <Route path="/initiate-training" element={<ProtectedRoute element={<FixedComponent><InitiateTrainingContainer /></FixedComponent>} />} />
            <Route path='/spoc-approval/:requestid' element={<ProtectedRoute element={<FixedComponent><SpocContainer /></FixedComponent>} />} />
            <Route path='/admin-table' element={<ProtectedRoute element={<FixedComponent><AdminTable /></FixedComponent>} />} />
            <Route path='/assign-course' element={<ProtectedRoute element={<FixedComponent><AssignCourseAccordion /></FixedComponent>} />} />
            <Route path='/request-information' element={<ProtectedRoute element={<FixedComponent><RequestInformation /></FixedComponent>} />} />
            <Route path='/learning-details' element={<ProtectedRoute element={<FixedComponent><LearningDetails /></FixedComponent>} />} />
            <Route path='/clarification-requested' element={<ProtectedRoute element={<FixedComponent><ClarificationRequestedContainer /></FixedComponent>} />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}
 
export default App;