import LoginForm from "@/features/auth/components/login-form";
import { unRequireAuth } from "@/lib/auth-utils";

export default async function Login() {
  await unRequireAuth();

  return (
    <div>
      <LoginForm />
    </div>
  );
}
