export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const query = `
               mutation{
                   createEventRegistration(db:"${config.db}",login:"${config.login}",accessToken:"${config.accessToken}",name:"${body.fullName}",email:"${body.email}",phone:"${body.phone}",event:54){
                       name
                   }
               }
             `;
  try {
    const response = await fetch(config.httpEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const responseData = await response.json(); // Parse the JSON to check for GraphQL errors

    if (!response.ok) {
      throw new Error("Network error");
    }

    if (responseData.errors) {
      console.error("GraphQL Error:", responseData.errors);
      throw new Error("GraphQL error");
    }

    return responseData.data;
  } catch (error) {
    console.error("Error:", error);
    sendError(event, error.message || "An error occured", { statusCode: 500 });
  }
});
