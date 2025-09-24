
interface FieldMessageDTO {
    type: "field",
    fields: {
        field: string,
        message: string
    }[]
}

export interface EmailResponse400DTO {
    status: 400,
    message: FieldMessageDTO
};