import { IncomingMessage, ServerResponse } from "http";

import DB from "@database";

const getAvo = async (request:IncomingMessage, response: ServerResponse) => {
    const db = new DB();

    const allEntries = await db.getAll();
    const length = allEntries.length;

    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify({length,data: allEntries}))
}

export default getAvo