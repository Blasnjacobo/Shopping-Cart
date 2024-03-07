const userSchema = new mongoose.Schema({
  googleId: String, // Id de Google del usuario
  selectedPerfumes: [{
    id: String,
    name: String,
    price: Number,
    type: String,
    aroma: String,
    imgUrl: String
  }]
});