export interface LoginRes{
    message:string,
    userEmail:string
    token:string,
}

export interface LoginAPIRes{
    message:string,
    token:string,
    user:{
        _id: string
        firstName: string
        lastName: string
        email: string
        gender: string
        phone: string
        photo: string
        role: string
        wishlist: any[]
        addresses: any[]
        createdAt: string
    }
}