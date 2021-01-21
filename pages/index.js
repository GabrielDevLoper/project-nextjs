import Nav from "../components/nav";
import { signIn, signOut, useSession } from "next-auth/client";

export default function IndexPage() {
  const [session, loading] = useSession();

  return (
    <div>
      <Nav />
      {!session && (
        <div className="text-3xl">
          Não está logado
          <br />
          <button onClick={() => signIn("auth0")}>Entrar</button>
        </div>
      )}
      {session && (
        <div className="text-3xl">
          Logado com {session.user.email} <br />
          <button onClick={signOut}>Sair</button>
        </div>
      )}
      {loading && (
        <div className="text-5xl">
          <h1>Carregando...</h1>
        </div>
      )}
    </div>
  );
}
