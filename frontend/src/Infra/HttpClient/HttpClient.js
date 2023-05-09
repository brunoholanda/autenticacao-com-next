//arquitetura hexagonal
//ports & adapters
export async function HttpClient(fetchUrl, fetchOptions) {
  const options = {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  }
  return fetch(fetchUrl, options)
    .then(async (RespostaDoServidor) =>{
      return {
        ok: RespostaDoServidor.ok,
        body: await RespostaDoServidor.json
      }
    });
}
