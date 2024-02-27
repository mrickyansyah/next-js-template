import { responseJson, ResponseTypeEnum } from "@/services/response-object";
import {results as resultsData} from "./data";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page') || 0);
    const rows = Number(searchParams.get('rows') || 10);
    const search = searchParams.get('search');

    let data = [...resultsData];
    let count = data.length;
    const offset = (page - 1) * rows;
    
    // TODO: change to get from database
    if (!page) {
        return Response.json({count, data});
    }

    if (isNaN(page) || isNaN(rows)) {
        return responseJson({
            status: "error",
            type: ResponseTypeEnum.TABLE_ERROR,
            message: "Invalid 'page' or 'rows' parameter"
        });
    }

    if (search && search !== "") {
        data = data.filter((result) => result?.account_name?.toLowerCase().includes(search.toLowerCase()));
        count = data.length;
    }

    data = data.slice(offset, offset + rows);
    // end TODO

    return responseJson({
        status: "success",
        results: { count, data, search }
    })
}

export async function POST(request: Request) {
    const form = await request.json();

    if (!form) {
        return responseJson({
            status: "error",
            message: "Form field null",
            type: ResponseTypeEnum.FORM_NULL
        });
    }
    
    return responseJson({
        status: "success",
        message: "Create data success"
    });
}