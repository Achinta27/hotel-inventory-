const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const ExcelJS = require('exceljs');
main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/stockdata', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

const stockSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Price: {
    type: String,
    required: true
  },
  TotalStock: {
    type: String,
    required: true
  },
  PresentStock: {
    type: String,
    required: true
  },
});

const User = mongoose.model('User', stockSchema);

const server = express();
server.use(cors({
  origin: 'http://localhost:3000'
}));
server.use(express.json());
server.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload'); 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  },
});
const upload = multer({ storage });

server.post('/upload-excel', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = req.file.path;
    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(1);
    const rows = worksheet.getRows();

    const products = rows.map((row) => ({
      brand: row.getCell(1).value,
      Category: row.getCell(2).value,
      Name: row.getCell(3).value,
      Price: row.getCell(4).value,
      TotalStock: row.getCell(5).value,
      PresentStock: row.getCell(6).value,
    }));

    await User.insertMany(products);

    res.json({ message: 'Excel file data saved successfully' });
  } catch (error) {
    console.error('Error processing Excel file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


server.post('/userdata/vegetable', async (req, res) => {
    await saveProductWithCategory(req, res, 'vegetable');
  });
  
  server.post('/userdata/dairy', async (req, res) => {
    await saveProductWithCategory(req, res, 'dairy');
  });
  
  server.post('/userdata/fruit', async (req, res) => {
    await saveProductWithCategory(req, res, 'fruit');
  });
  
  server.post('/userdata/spices', async (req, res) => {
    await saveProductWithCategory(req, res, 'spices');
  });

async function saveProductWithCategory(req, res, category) {
    try {
      const newUser = new User({
        brand: req.body.brand,
        Category: category,
        Name: req.body.Name,
        Price: req.body.Price,
        TotalStock: req.body.TotalStock,
        PresentStock: req.body.PresentStock,
      });
  
      const doc = await newUser.save();
      console.log('Saved document:', doc);
      res.json(doc);
    } catch (error) {
      console.error('Error saving data to MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

server.get('/product', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
});

server.put('/product/:id/update-property', async (req, res) => {
  const productId = req.params.id;
  const fieldToUpdate = req.body.field;
  const newValue = req.body.newValue;

  try {
    const updatedProduct = await User.findByIdAndUpdate(
      productId,
      { $set: { [fieldToUpdate]: newValue } },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    console.log('Updated document:', updatedProduct);
    res.json(updatedProduct);
  } catch (error) {
    console.error(`Error updating ${fieldToUpdate} in MongoDB:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
server.delete('/product/:id', async (req, res) => {
    const productId = req.params.id;
  
    try {
      const deletedProduct = await User.findByIdAndRemove(productId);
  
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      console.log('Deleted product:', deletedProduct);
      res.json(deletedProduct);
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

server.listen(8080, () => {
  console.log('Server started');
});