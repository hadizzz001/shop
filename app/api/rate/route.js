import { NextResponse } from "next/server"
import prisma from "../../../libs/prismadb"

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {name, description,stars} = body;

        const newPost = await prisma.review.create({
            data: {
                name,
                description,
                stars
            }
        })

        return NextResponse.json(newPost);

    } catch(err) {
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }
}

export const GET = async () => {
    try {

        const posts = await prisma.review.findMany()

        return NextResponse.json(posts);

    } catch(err) {
        return NextResponse.json({message: "GET Error", err}, {status: 500})
    }
}