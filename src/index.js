import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'graphiql/graphiql.css';

const search = window.location.search;
const params = new URLSearchParams(search);
const auth_token = params.get('auth_token');
const fetcher = createGraphiQLFetcher({ url: `https://api.flotiq.com/api/graphql?auth_token=${auth_token}` });

const root = createRoot(document.getElementById('root'));
root.render(
  <div style={{height: 'calc(100vh - 16px)'}}>
    <GraphiQL fetcher={fetcher} >
      <GraphiQL.Logo>
        <a href="https://flotiq.com" target="_blank">
          <img
            src="https://public-assets.dev.cdwv.pl/images/flotiq/flotiq-logo.png"
            alt="Flotiq logo"
            width="120px"
            style={{background: 'white', borderRadius: '20px', padding: '10px 20px', marginTop: '10px'}}
          />
        </a>
      </GraphiQL.Logo>
      <GraphiQL.Footer>
        <p style={{padding: '10px'}}>
          You can use this project to test your GraphQL queries against the schema generated for your Flotiq API key.
          <br />
          <a href="https://flotiq.com/docs/API/graph-ql" target="_blank">
            Learn more about Flotiq GraphQL in the documentation
          </a>
        </p>
      </GraphiQL.Footer>
    </GraphiQL>
  </div>
);
