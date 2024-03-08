import { Perfume } from "../models/perfumeSchema.mjs";

export const getAllPerfumes = async (request, response) => {
    try {
        const perfumes = await Perfume.find();
        return response.status(200).json({
            count: perfumes.length,
            data: perfumes
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

export const perfumeByID = async (request, response) => {
    try {
        const { id } = request.params
        const perfume = await Perfume.findById(id)
        return response.status(200).json(perfume)
    } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
    }
}
