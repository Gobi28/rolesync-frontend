import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserSelection from './pages/UserSelection';
import EmployeeLogin from './pages/EmployeeLogin';
import EmployeeForm from "./pages/EmployeeForm";
import EmployeeProfile from './pages/EmployeeProfile';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoleRequests from './pages/AdminRoleRequests';
import AdminSuggestions from './pages/AdminSuggestions';
import AdminFeedbackSummary from "./pages/AdminFeedbackSummary";
import AdminEmployeeList from './pages/AdminEmployeeList';
import AdminEmployeeDetails from "./pages/AdminEmployeeDetails";
import UpdateProfile from './pages/UpdateProfile';
import EmployeeFeedback from './pages/EmployeeFeedback';
import EmployeeRegister from './pages/EmployeeRegister';

// import AdminLogin from './pages/AdminLogin'; // You'll create this later

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserSelection />} />
        {/* Placeholder for upcoming pages */}
        { <Route path="/login/employee" element={<EmployeeLogin />} /> }
        <Route path="/employee/form" element={<EmployeeForm />} />
        <Route path="/employee/profile" element={<EmployeeProfile />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/requests" element={<AdminRoleRequests />} />
        <Route path="/admin/suggestions" element={<AdminSuggestions />} />
        <Route path="/admin/employees" element={<AdminEmployeeList />} />
        <Route path="/employee/update-profile" element={<UpdateProfile />} />
<Route path="/employee/feedback" element={<EmployeeFeedback />} />
        <Route path="/admin/employees/:id" element={<AdminEmployeeDetails />} />
        <Route path="/employee/register" element={<EmployeeRegister />} />

        
  {/* Other routes */}
  <Route path="/admin/feedback" element={<AdminFeedbackSummary />} />

        {/* <Route path="/login/admin" element={<AdminLogin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
