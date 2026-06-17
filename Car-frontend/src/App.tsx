import Navbar from "./Component/header";
import LuxAutoFooter from "./Component/Footer";
import { AuthProvider } from "./Component/Authentication/AuthContext";
import AppRoutes from "./AppRoutes/AppRoutes"

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <AppRoutes />
      <LuxAutoFooter />
    </AuthProvider>
  );
}

export default App;