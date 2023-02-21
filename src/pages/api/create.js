import prisma from "@/libs/prisma";

export default async function handler(req, res) {
    const { method } = req;
    const { name, telefone, cnpj } = req.body;

    switch(method) {
        case 'POST':

            try {
                const company = await prisma.company.create({
                    data: {
                        name,
                        telefone,
                        cnpj,
                    }
                })
                return res.status(200).json({message: 'Created'})
            } catch (error) {
                console.log(error.message)
            }
    }
}
