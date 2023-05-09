import { HttpClient } from "../../Infra/HttpClient/HttpClient";

export const authService = {
  async login({username, password}) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: "POST",
      body: { username, password }
    })
    .then(async (RespostaDoServidor) => {
      if(!RespostaDoServidor.ok) throw new Error('Usuario ou senha invalidos!')
      const body = RespostaDoServidor.body();
      console.log (body); 
    })
  }
};
