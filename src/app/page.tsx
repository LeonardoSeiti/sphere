import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <nav className="absolute right-4 top-4">
        <ModeToggle />
      </nav>

      <aside className="h-screen overflow-hidden hidden lg:block">
        <img src="/login.png" alt="Imagem de login" />
      </aside>

      <section className="flex flex-col items-center w-full">
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="37.5" cy="37.5" r="37.5" fill="#E11D48" />
        </svg>

        <h1 className="text-4xl font-extrabold uppercase"> Sphere</h1>

        <Tabs className="p-4">
          <TabsList>
            <TabsTrigger value="entrar">entrar</TabsTrigger>
            <TabsTrigger value="registrar">registrar</TabsTrigger>
          </TabsList>

          <TabsContent value="entrar">
            <form>
              <div>
                <Label htmlFor="email">email</Label>
                <Input id="email" placeholder="email@servidor.com" />
              </div>
              <div>
                <Label htmlFor="senha">senha</Label>
                <Input id="senha" type="password" />
              </div>
              <Button> Entrar </Button>
            </form>
          </TabsContent>

          <TabsContent value="registrar">
            <form>
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" placeholder="Seu nome" />
              </div>

              <div>
                <Label htmlFor="bio">bio</Label>
                <Input id="bio" placeholder="Sua bio" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="email@servidor.com" />
              </div>

              <div>
                <Label htmlFor="senha">senha</Label>
                <Input id="senha" type="password" placeholder="Sua senha" />
              </div>

              <Button> Criar conta </Button>
            </form>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
