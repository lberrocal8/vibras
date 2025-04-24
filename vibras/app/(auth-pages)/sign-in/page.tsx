import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">Iniciar sesión</h1>
      <p className="text-sm text-gray-400">Ingresa al panel de control de Vibras marketplace</p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Correo electronico</Label>
        <Input name="email" placeholder="mi@correo.com" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Contraseña</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder=""
          required
        />
        <SubmitButton pendingText="Ingresando..." formAction={signInAction}>
          Iniciar sesión
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
