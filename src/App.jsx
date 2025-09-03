import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserSelection from './pages/UserSelection';

/* Employee pages */
import EmployeeLogin from './pages/EmployeeLogin';
import EmployeeRegister from './pages/EmployeeRegister';
import VerifyOtp from './pages/VerifyOtp';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import EmployeeForm from './pages/EmployeeForm';
import EmployeeProfile from './pages/EmployeeProfile';
import UpdateProfile from './pages/UpdateProfile';
import EmployeeFeedback from './pages/EmployeeFeedback';

/* Admin pages */
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import AdminVerifyOtp from './pages/AdminVerifyOtp';
import AdminForgotPassword from './pages/AdminForgotPassword';
import AdminResetPassword from './pages/AdminResetPassword';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoleRequests from './pages/AdminRoleRequests';
import AdminSuggestions from './pages/AdminSuggestions';
import AdminFeedbackSummary from './pages/AdminFeedbackSummary';
import AdminEmployeeList from './pages/AdminEmployeeList';
import AdminEmployeeDetails from './pages/AdminEmployeeDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Selection */}
        <Route path="/" element={<UserSelection />} />

        {/* ================= Employee Auth Flow ================= */}
        <Route path="/login/employee" element={<EmployeeLogin />} />
        <Route path="/employee/register" element={<EmployeeRegister />} />
        <Route path="/employee/verify-otp" element={<VerifyOtp />} />
        <Route path="/employee/forgot-password" element={<ForgotPassword />} />
        <Route path="/employee/reset-password" element={<ResetPassword />} />

        {/* Employee Features */}
        <Route path="/employee/form" element={<EmployeeForm />} />
        <Route path="/employee/profile" element={<EmployeeProfile />} />
        <Route path="/employee/update-profile" element={<UpdateProfile />} />
        <Route path="/employee/feedback" element={<EmployeeFeedback />} />

        {/* ================= Admin Auth Flow ================= */}
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/verify-otp" element={<AdminVerifyOtp />} />
        <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
        <Route path="/admin/reset-password" element={<AdminResetPassword />} />

        {/* Admin Features */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/requests" element={<AdminRoleRequests />} />
        <Route path="/admin/suggestions" element={<AdminSuggestions />} />
        <Route path="/admin/employees" element={<AdminEmployeeList />} />
        <Route path="/admin/employees/:id" element={<AdminEmployeeDetails />} />
        <Route path="/admin/feedback" element={<AdminFeedbackSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
