import SignupForm from "@/features/auth/components/signup-form";
import { unRequireAuth } from "@/lib/auth-utils";

export default async function SignUp() {
  await unRequireAuth();

  return (
    <div>
      <SignupForm />
    </div>
  )
}
