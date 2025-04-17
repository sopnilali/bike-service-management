import { Response } from "express"

type TResponse<T> = {
    success?: boolean;
    message?: string;
    statusCode?: number;
    data?: T;
};




const sendResponse = <T>(res: Response, data: TResponse<T>) => {
    res.json({
        success: data.success,
        message: data.message,
        statusCode: data.statusCode,
        data: data.data || null || undefined,
    });
};

export default sendResponse