import React, { useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const apiUrl = process.env.API_URL ?? ""
const client = new GraphQLClient(apiUrl + '/graphql')

function App() {
  const [result, setResult] = useState("")

  useEffect( () => {
    const fetchData = async () => {
      const query = gql`{
          ping
      }`

      const data = await client.request(query)
      console.log(data)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      Hello, world! server says {result}
    </div>
  );
}

export default App;
