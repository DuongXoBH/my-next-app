import Login from "@/components/page/login/login";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Login />
    </Suspense>
  );
}
