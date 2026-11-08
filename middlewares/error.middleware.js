const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;

    console.error(err);

    // Contoh penanganan error Mongoose (CastError / ObjectId tidak valid)
    if (err.name === 'CastError') {
      const message = 'Resource not found';
      error = new Error(message);
      error.statusCode = 404;
    }

    // Contoh penanganan error Mongoose Duplicate Key
    if (err.code === 11000) {
      const message = 'Duplicate field value entered';
      error = new Error(message);
      error.statusCode = 400;
    }

    // Contoh penanganan error Mongoose ValidationError
    if (err.name === 'ValidationError') {
      const message = Object.values(err.errors).map((val) => val.message).join(', ');
      error = new Error(message);
      error.statusCode = 400;
    }

    // Mengirimkan respon error ke client
    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || 'Server Error',
    });
  } catch (e) {
    next(e);
  }
};

export default errorMiddleware;