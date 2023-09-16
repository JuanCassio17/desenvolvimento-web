const validateFieldTitle = (req, res, next) => {
    const { body } = req;
  
    if (body.titleTask === undefined) {
      return res.status(400).json({ message: 'The field "title" is required' });
    }
  
    if (body.titleTask === '') {
      return res.status(400).json({ message: 'title cannot be empty' });
    }
  
    next();
  };
  
  // const validateFieldStatus = (req, res, next) => {
  //   const { body } = req;
  
  //   if (body.status === undefined) {
  //     return res.status(400).json({ message: 'The field "status" is required' });
  //   }
  
  //   if (body.status === '') {
  //     return res.status(400).json({ message: 'status cannot be empty' });
  //   } 
  
  //   next();
  // };
  
  module.exports = {
    validateFieldTitle,
  };