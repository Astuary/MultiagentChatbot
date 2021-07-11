const fetch = require("node-fetch");

const url = "https://juji.ai/api/graphql";

const email = process.env.email;
const password = process.env.password;
 
/*function auth(): Promise<any> {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            AUTH_BRAND,
            variables: {
            input: {
                email,
                password,
            }
            }
        })
    }).then(r => r.json()).then(data => console.log('data returned:', data));
}*/

export const auth1 = async () => {
    const AUTH_BRAND = `
    mutation
        authenticate($input: AuthenticateInput!) {
            authenticate(input: $input) {
                token
            }
        }
    `;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
        query: AUTH_BRAND,
        variables: {input: { email, password}},
        }),
    })

    const {data, errors} = await response.json();

    return data.authenticate.token;
};
