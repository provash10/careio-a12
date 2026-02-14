export const services =[
    {
        id: 1,
        message: "Best Service"
    },
    {
        id: 2,
        message: "Friendly"
    },
    {
        id: 3,
        message: "Cheap"
    }
]
export async function GET(request) {
    return Response.json({
        status:200,
        message: "api created ok"
    })
}