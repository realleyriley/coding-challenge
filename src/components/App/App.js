// import 'antd/dist/antd.css';
import 'antd/dist/antd.dark.css';

import HomePage from '../Layouts/HomePage';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://api.spacex.land/graphql/'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  )
}

export default App;
