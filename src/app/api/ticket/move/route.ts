import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import { schema } from "@/schema/moveTickets";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const response = schema.safeParse(body);    

    if (!response.success) {
      return Response.json(
        { error: { message: "Fields are missing or parse incorrect!" } },
        { status: 400 }
      );
    }

    const { boardId, position, boardColumnId, ticketId } = body;

    const ticketData = await prisma.boardTicket.update({
      where: { id: ticketId },
      data: { boardId, position, boardColumnId },
    });

    return Response.json({ data: { ticketData } }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: { message: "Something went wrong!" } },
      { status: 500 }
    );
  }
};
