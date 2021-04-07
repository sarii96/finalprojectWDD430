var express = require('express');
const sequenceGenerator = require('./sequenceGenerator')
var router = express.Router();

router.get('/', (req, res, next) =>{
  Book.find()
  .then(books => {
    res.status(200).json({
      message:'Books fetched succesfully!',
      books: books
    });
  })
  .Catch(error =>{
    res.status(500).json({
      message:'An error ocurred',
      error: error
    });
  });
});


router.get('/:id', (req, res, next) =>{
  Book.findOne({
    "id": req.params.id
  })
  .then(book => {
    res.status(200).json({
      message:'Books fetched succesfully!',
      books: books
    });
  })
  .Catch(error =>{
    res.status(500).json({
      message:'An error ocurred',
      error: error
    });
  });
});

router.post('/'), (req, res, next) =>{
  const maxBookId = sequenceGenerator.nextId("books");

  const book = new Book({
    id: maxBookId,
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    img: req.body.img,
    url: req.body.url
  });

  book.save()
  .then(createdBook =>{
    res.status(201).json({
      message: 'Book added succesufully',
      book: createdBook
    });
  })
  .Catch(error =>{
    res.status(500).json({
      message:'An error ocurred',
      error: error
    });
  });
};

router.put('/:id', (req, res, next) =>{
  Book.findOne({
    id: req. params.id
  })
  .then(book =>{
    book.title = req.body.title,
    book.author = req.body.author,
    book.description = req.body.description,
    book.img = req.body.img,
    book.url = req.body.url

    Book.updateOne({
      id: req.params.id
    }, book)
    .then(result =>{
      res.status(204).json({
        message: 'Book was successfully updated'
      })
    })
    .Catch(error =>{
      res.status(500).json({
        message: 'An error ocurred',
        error: error
      });

    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Book not found',
      error:{
        book: 'Book not found'
      }
    });
  });
});

router.delete("/:id", (req, res, next) =>{
  Book.findOne({
    id: req.params.id
  })
  .then(book => {
    Book.delateOne({
      id: req.params.id
    })
    .then(result => {
      res.status(204).json({
        message: 'Book deleted successfully'
      });
    })
    .catch(error =>{
      res.status(500).json({
        message: 'An error ocurred',
        error: error
      });
    })
  })
  .catch(error =>{
    res.status(500).json({
    message: 'An error ocurred',
    error: errror
  });
  });
});


module.exports = router;
