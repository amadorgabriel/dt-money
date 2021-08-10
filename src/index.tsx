import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance Website',
          type: 'deposit',
          category: 'desenvolvimento',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')  
        },
        {
          id: 2,
          title: 'Venda Teclado Mecânico Razor',
          type: 'deposit',
          category: 'eletrônicos',
          amount: 800,
          createdAt: new Date('2021-02-17 15:00:00')  
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 600,
          createdAt: new Date('2021-02-15 15:00:00')  
        }
      ]
    })
  },

  routes() {
    this.namespace = "api" 

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

