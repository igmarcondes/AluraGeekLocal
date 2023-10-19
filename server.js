const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const dbFilePath = 'db.json';

// Rota para obter todos os itens (productList)
app.get('/items', (req, res) => {
  const rawData = fs.readFileSync(dbFilePath);
  const data = JSON.parse(rawData);
  res.json(data.items);
});

// Rota para adicionar um novo item (createProduct)
app.post('/items', (req, res) => {
  const rawData = fs.readFileSync(dbFilePath);
  const data = JSON.parse(rawData);
  const newItem = req.body;
  data.items.push(newItem);
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
  res.json(newItem);
});

// Rota para obter um item por ID (productDetails)
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const rawData = fs.readFileSync(dbFilePath);
  const data = JSON.parse(rawData);
  const item = data.items.find(item => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Rota para editar um item por ID (updateProduct)
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const rawData = fs.readFileSync(dbFilePath);
  const data = JSON.parse(rawData);
  const itemIndex = data.items.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    const updatedItem = req.body;
    data.items[itemIndex] = { ...data.items[itemIndex], ...updatedItem };
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
    res.json(data.items[itemIndex]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Rota para excluir um item por ID (productDelete)
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const rawData = fs.readFileSync(dbFilePath);
  const data = JSON.parse(rawData);
  const itemIndex = data.items.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    const deletedItem = data.items.splice(itemIndex, 1);
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
    res.json(deletedItem[0]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
