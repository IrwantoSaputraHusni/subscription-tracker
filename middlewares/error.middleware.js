const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;

    console.error(err);

    // 1. Mongoose Bad ObjectId (CastError)
    if (err.name === 'CastError') {
      const message = 'Resource not found';
      error = new Error(message);
      error.statusCode = 404;
    }

    // 2. Mongoose Duplicate Key
    if (err.code === 11000) {
      const message = 'Duplicate field value entered';
      error = new Error(message);
      error.statusCode = 400;
    }

    // 3. Mongoose Validation Error
    if (err.name === 'ValidationError' && err.errors) {
      const message = Object.values(err.errors).map((val) => val.message).join(', ');
      error = new Error(message);
      error.statusCode = 400;
    }

    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || 'Server Error',
    });
  } catch (e) {
    // Jangan panggil next(e) di sini! Langsung kirim respon 500
    res.status(500).json({
      success: false,
      error: e.message || 'Internal Server Error',
    });
  }
};

export default errorMiddleware;