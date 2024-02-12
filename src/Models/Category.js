import { model, models, Schema } from "mongoose";
import toast from "react-hot-toast";

const CategorySchema = new Schema({
  name: { type: String, required: true },
}, { timestamps: true });

// Adicione uma pré-validação para garantir que o campo 'name' seja preenchido
CategorySchema.pre('save', function (next) {
  if (!this.name) {
    const errorMessage = 'O campo "name" é obrigatório.';
    toast.error(errorMessage);
    return next(new Error(errorMessage));
  }
  next();
});

export const Category = models?.Category || model('Category', CategorySchema);
