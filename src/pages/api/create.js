import prisma from "@/libs/prisma";

export default async function handler(req, res) {
    const { method } = req;
    const { name, telefone, cnpj } = req.body;
    console.log("este eh o req body", req.body);
    console.log(telefone)
    console.log(cnpj)

    switch(method) {
        case 'POST':

            try {
                const company = await prisma.company.create({
                    data:  {
                        name: name,
                        telefone: telefone,
                        cnpj: cnpj,
                    }
                })
                return res.status(200).json({message: 'Created'})
            } catch (error) {
                console.log(error.message)
            }
    }
}
