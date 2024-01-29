export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = `
    query{
        allEvents(db:"db_hs23030915215507",login:"graphql_demo",accessToken:"graphql_demo"){
            name, 
            id
        }
    }`;

  const response = await fetch(`${config.httpEndpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data;
});
