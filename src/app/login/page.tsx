import LoginForm from "./login-form";
import MarketingPanel from "./marketing-panel";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <MarketingPanel />
      </div>
      <div className="lg:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
}