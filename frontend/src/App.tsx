import React, { useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const apiUrl = process.env.API_URL ?? ""
const client = new GraphQLClient(apiUrl + '/graphql')


interface Query {
  ping: string
}

function App() {
  const [result, setResult] = useState("")

  useEffect( () => {
    const fetchData = async () => {
      const query = gql`{
          ping
      }`

      const data: Query = await client.request(query)
      console.log(data.ping)

      setResult(data.ping)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      The server says {result}
    </div>
  );
}

export default App;
