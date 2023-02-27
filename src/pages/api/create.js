import prisma from "@/libs/prisma";

export default async function handler(req, res) {
    const { method } = req;
    const { userId, name, email, country, city } = req.body;
    
    switch(method) {
        case 'POST':

            try {
                const company = await prisma.company.create({
                    data:  {
                        userId,
                        name,
                        email,
                        country,
                        city
                    }
                })
                return res.status(200).json({message: 'Created'})
            } catch (error) {
                console.log(error.message)
            }
    }
}
